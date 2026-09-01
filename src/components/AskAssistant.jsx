import { useState } from 'react'
import { Sparkles, Send, Radar } from 'lucide-react'
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
    <section className="web-corner relative animate-fade-up overflow-hidden rounded-2xl border border-accent/25 bg-card p-5 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
      <div className="web-radial-bg" />

      <div className="relative mb-3 flex items-center gap-3">
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-bg">
          <Radar size={18} className="animate-spider-pulse rounded-full text-accent" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
            Spider-Sense <span className="text-crimson">//</span> Campus Intelligence
          </div>
          <h2 className="text-lg font-semibold text-text">Ask about campus</h2>
        </div>
      </div>
      <p className="relative mb-3 text-xs text-muted">
        Type a question and I'll match it against events, clubs, notes and announcements.
      </p>

      <form onSubmit={handleSubmit} className="spidersense-ring relative flex items-center gap-2 rounded-xl border border-border bg-bg/60 p-1 pl-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. any coding events this week?"
          className="w-full rounded-lg bg-transparent px-3 py-2.5 text-sm text-text placeholder:text-muted/70 outline-none"
        />
        <button
          type="submit"
          disabled={!query.trim()}
          aria-label="Ask"
          className={[
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-200',
            query.trim()
              ? 'bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:brightness-110 active:scale-95'
              : 'cursor-not-allowed bg-bg/60 text-muted',
          ].join(' ')}
        >
          <Send size={16} />
        </button>
      </form>

      {!result && (
        <div className="relative mt-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSuggestion(s)}
              className="rounded-full border border-border bg-bg/60 px-3 py-1.5 text-xs text-muted transition-all duration-150 hover:border-accent/50 hover:text-text hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {result && (
        <div className="relative mt-4 animate-fade-in border-t border-border pt-4">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            <Sparkles size={11} />
            Scan Results
          </div>
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
