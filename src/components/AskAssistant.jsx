import { useState } from 'react'
import { Sparkles, Send, Radar, Loader2, WifiOff } from 'lucide-react'
import { posts } from '../data/posts'
import { searchPosts, summarize } from '../utils/search'
import { askAI } from '../utils/askApi'
import PostCard from './PostCard'

const SUGGESTIONS = ['hackathons this week', 'club recruitment', 'exam deadlines', 'music events']

export default function AskAssistant({ registeredIds, onSelectPost }) {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null) // { query, matches, summary, source } | null

  const runSearch = async (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setIsLoading(true)
    try {
      // Real AI first (Gemini, via our backend). Falls back to the local
      // keyword matcher if there's no backend running, no API key
      // configured, or the request fails for any reason — the assistant
      // should still work even without the AI piece set up.
      const { summary, matchedIds } = await askAI(trimmed)
      const byId = new Map(posts.map((p) => [p.id, p]))
      const matches = matchedIds.map((id) => byId.get(id)).filter(Boolean)
      setResult({ query: trimmed, matches, summary, source: 'ai' })
    } catch {
      const { matches } = searchPosts(trimmed, posts)
      setResult({ query: trimmed, matches, summary: summarize(trimmed, matches), source: 'local' })
    } finally {
      setIsLoading(false)
    }
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
          disabled={isLoading}
          className="w-full rounded-lg bg-transparent px-3 py-2.5 text-sm text-text placeholder:text-muted/70 outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          aria-label="Ask"
          className={[
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-200',
            query.trim() && !isLoading
              ? 'bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:brightness-110 active:scale-95'
              : 'cursor-not-allowed bg-bg/60 text-muted',
          ].join(' ')}
        >
          {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </button>
      </form>

      {!result && !isLoading && (
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

      {isLoading && (
        <div className="relative mt-4 flex items-center gap-2 text-xs text-muted">
          <Loader2 size={13} className="animate-spin text-accent" />
          Scanning campus intelligence...
        </div>
      )}

      {result && !isLoading && (
        <div className="relative mt-4 animate-fade-in border-t border-border pt-4">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            {result.source === 'ai' ? (
              <>
                <Sparkles size={11} />
                AI Scan Results
              </>
            ) : (
              <>
                <WifiOff size={11} />
                Offline Scan Results
              </>
            )}
          </div>
          <p className="text-sm leading-relaxed text-text">{result.summary}</p>
          {result.source === 'local' && (
            <p className="mt-1 text-[11px] text-muted">
              AI backend unavailable — showing keyword-matched results instead.
            </p>
          )}

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
