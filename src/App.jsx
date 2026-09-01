import { useEffect, useMemo, useState } from 'react'
import Login from './components/Login'
import Onboarding from './components/Onboarding'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ForYouSection from './components/ForYouSection'
import CategoryTabs from './components/CategoryTabs'
import PostGrid from './components/PostGrid'
import EventDetail from './components/EventDetail'
import AskAssistant from './components/AskAssistant'
import { posts, CATEGORIES } from './data/posts'

const SESSION_KEY = 'campusconnect:session'
const INTERESTS_KEY = 'campusconnect:selectedInterests'
const REGISTRATIONS_KEY = 'campusconnect:registeredEventIds'

const normalize = (value) => value.trim().toLowerCase()

function readJSON(key) {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // localStorage unavailable — app still works for this session
  }
}

export default function App() {
  const [session, setSession] = useState(() => readJSON(SESSION_KEY))
  const [selectedInterests, setSelectedInterests] = useState(() => readJSON(INTERESTS_KEY))
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)
  const [searchQuery, setSearchQuery] = useState('')
  const [registeredIds, setRegisteredIds] = useState(() => readJSON(REGISTRATIONS_KEY) ?? [])
  const [selectedPostId, setSelectedPostId] = useState(null)

  const isLoggedIn = Boolean(session)
  const hasOnboarded = Array.isArray(selectedInterests)

  const handleLogin = (user) => {
    setSession(user)
    writeJSON(SESSION_KEY, user)
  }

  // Logging out resets personalization too, so the next login walks
  // through the full Login -> Onboarding -> Dashboard flow again.
  const handleLogout = () => {
    setSession(null)
    setSelectedInterests(null)
    setSearchQuery('')
    setRegisteredIds([])
    setSelectedPostId(null)
    try {
      localStorage.removeItem(SESSION_KEY)
      localStorage.removeItem(INTERESTS_KEY)
      localStorage.removeItem(REGISTRATIONS_KEY)
    } catch {
      // ignore
    }
  }

  const handleContinue = (interests) => {
    setSelectedInterests(interests)
    writeJSON(INTERESTS_KEY, interests)
  }

  // Registering just records the id locally — no payment or form, per the
  // "simple stuff" ask. Idempotent so re-clicking (or a stale click) is safe.
  const handleRegister = (postId) => {
    setRegisteredIds((prev) => {
      if (prev.includes(postId)) return prev
      const next = [...prev, postId]
      writeJSON(REGISTRATIONS_KEY, next)
      return next
    })
  }

  const registeredIdSet = useMemo(() => new Set(registeredIds), [registeredIds])
  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId) ?? null,
    [selectedPostId],
  )

  // Derived, not stored: For You is always computed from the single master
  // posts array, filtered against whatever interests are currently selected.
  const forYouPosts = useMemo(() => {
    if (!hasOnboarded || selectedInterests.length === 0) return []
    const interestSet = new Set(selectedInterests.map(normalize))
    return posts.filter((post) => post.tags.some((tag) => interestSet.has(normalize(tag))))
  }, [selectedInterests, hasOnboarded])

  const forYouIds = useMemo(() => new Set(forYouPosts.map((p) => p.id)), [forYouPosts])

  // Category tabs + search both filter the same master array.
  const visiblePosts = useMemo(() => {
    const query = normalize(searchQuery)
    return posts.filter((post) => {
      if (post.category !== activeCategory) return false
      if (!query) return true
      const haystack = [post.title, post.description, post.location, ...post.tags]
        .join(' ')
        .toLowerCase()
      return haystack.includes(query)
    })
  }, [activeCategory, searchQuery])

  useEffect(() => {
    document.title = !isLoggedIn
      ? 'CampusConnect — Sign In'
      : !hasOnboarded
        ? 'CampusConnect — Get Started'
        : 'CampusConnect — Your Feed'
  }, [isLoggedIn, hasOnboarded])

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  if (!hasOnboarded) {
    return <Onboarding onContinue={handleContinue} />
  }

  if (selectedPost) {
    return (
      <EventDetail
        post={selectedPost}
        isRegistered={registeredIdSet.has(selectedPost.id)}
        onRegister={() => handleRegister(selectedPost.id)}
        onBack={() => setSelectedPostId(null)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Header user={session} onLogout={handleLogout} />

        <AskAssistant registeredIds={registeredIdSet} onSelectPost={(post) => setSelectedPostId(post.id)} />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <ForYouSection posts={forYouPosts} registeredIds={registeredIdSet} onSelectPost={(post) => setSelectedPostId(post.id)} />

        <section className="flex animate-fade-up flex-col gap-5" style={{ animationDelay: '80ms' }}>
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
          <PostGrid
            posts={visiblePosts}
            personalizedIds={forYouIds}
            registeredIds={registeredIdSet}
            onSelectPost={(post) => setSelectedPostId(post.id)}
          />
        </section>
      </div>
    </div>
  )
}
