import { useEffect, useMemo, useState } from 'react'
import Onboarding from './components/Onboarding'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ForYouSection from './components/ForYouSection'
import CategoryTabs from './components/CategoryTabs'
import PostGrid from './components/PostGrid'
import { posts, CATEGORIES } from './data/posts'

const STORAGE_KEY = 'campusconnect:selectedInterests'

const normalize = (value) => value.trim().toLowerCase()

export default function App() {
  const [selectedInterests, setSelectedInterests] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  const hasOnboarded = Array.isArray(selectedInterests)

  const handleContinue = (interests) => {
    setSelectedInterests(interests)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(interests))
    } catch {
      // localStorage unavailable — selections still work for this session
    }
  }

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
    document.title = hasOnboarded ? 'CampusConnect — Your Feed' : 'CampusConnect — Get Started'
  }, [hasOnboarded])

  if (!hasOnboarded) {
    return <Onboarding onContinue={handleContinue} />
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <Header />

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <ForYouSection posts={forYouPosts} />

        <section className="flex animate-fade-up flex-col gap-5" style={{ animationDelay: '80ms' }}>
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
          <PostGrid posts={visiblePosts} personalizedIds={forYouIds} />
        </section>
      </div>
    </div>
  )
}
