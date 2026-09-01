import { Calendar, MapPin, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react'
import { CATEGORY_META } from '../data/posts'

export default function PostCard({ post, isPersonalized = false, isRegistered = false, compact = false, onSelect }) {
  const meta = CATEGORY_META[post.category]
  const Icon = meta?.icon ?? Calendar

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(post)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect?.(post)
        }
      }}
      className={[
        'group flex h-full cursor-pointer flex-col gap-3 rounded-2xl border border-border bg-card p-5 text-left transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(58,134,255,0.12)]',
        'focus:outline-none focus-visible:border-accent focus-visible:shadow-[0_0_0_3px_rgba(58,134,255,0.15)]',
        compact ? 'w-72 shrink-0 sm:w-80' : '',
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
          <Icon size={12} className="text-accent" />
          {meta?.label ?? post.category}
        </span>
        <div className="flex items-center gap-1.5">
          {isRegistered && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
              <CheckCircle2 size={12} />
              Registered
            </span>
          )}
          {isPersonalized && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
              <Sparkles size={12} />
              Matches your interests
            </span>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold leading-snug text-text">{post.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-3">
          {post.description}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-1.5 pt-1 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <Calendar size={13} className="shrink-0 text-muted" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={13} className="shrink-0 text-muted" />
          <span className="truncate">{post.location}</span>
        </div>
      </div>

      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-bg/60 px-2 py-0.5 text-[11px] text-muted transition-colors duration-200 group-hover:border-accent/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {post.link && (
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
        >
          <ExternalLink size={12} />
          Open resource
        </a>
      )}
    </article>
  )
}
