import { useState } from 'react'
import { Sparkles, Send } from 'lucide-react'
import { posts } from '../data/posts'
import { searchPosts, summarize } from '../utils/search'
import PostCard from './PostCard'

const SUGGESTIONS = ['hackathons this week', 'club recruitment', 'exam deadlines', 'music events']

export default function AskAssistant({ registeredIds, onSelectPost }) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null) // { query, matches, summary } | null

  const runSearch = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const { matches } = searchPosts(trimmed, posts)
    setResult({ query: trimmed, matches, summary: summarize(trimmed, matches) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    runSearch(query)
  }

  const handleSuggestion = (text) => {
    setQuery(text)
    runSearch(text)
  }

  return (
    <section className="animate-fade-up rounded-2xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles size={18} className="text-accent" />
        <div>
          <h2 className="text-lg font-semibold text-text">Ask about campus</h2>
          <p className="text-xs text-muted">
            Type a question and I'll match it against events, clubs, notes and announcements.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. any coding events this week?"
          className="w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-text placeholder:text-muted/70 outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(58,134,255,0.15)]"
        />
        <button
          type="submit"
          disabled={!query.trim()}
          aria-label="Ask"
          className={[
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200',
            query.trim()
              ? 'bg-accent text-white shadow-[0_0_20px_rgba(58,134,255,0.3)] hover:brightness-110 active:scale-95'
              : 'cursor-not-allowed bg-bg/60 text-muted',
          ].join(' ')}
        >
          <Send size={16} />
        </button>
      </form>

      {!result && (
        <div className="mt-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSuggestion(s)}
              className="rounded-full border border-border bg-bg/60 px-3 py-1.5 text-xs text-muted transition-colors duration-150 hover:border-accent/50 hover:text-text"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {result && (
        <div className="mt-4 animate-fade-in border-t border-border pt-4">
          <p className="text-sm leading-relaxed text-text">{result.summary}</p>

          {result.matches.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {result.matches.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  isRegistered={registeredIds.has(post.id)}
                  onSelect={onSelectPost}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
