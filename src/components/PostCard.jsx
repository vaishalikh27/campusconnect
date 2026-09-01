import { Calendar, MapPin, CalendarDays, UsersRound, BookOpen, Megaphone, Sparkles } from 'lucide-react'

const CATEGORY_META = {
  event: { label: 'Event', icon: CalendarDays },
  club: { label: 'Club Activity', icon: UsersRound },
  note: { label: 'Note', icon: BookOpen },
  announcement: { label: 'Announcement', icon: Megaphone },
}

export default function PostCard({ post, isPersonalized = false, compact = false }) {
  const meta = CATEGORY_META[post.category]
  const Icon = meta?.icon ?? Calendar

  return (
    <article
      className={[
        'group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(58,134,255,0.12)]',
        compact ? 'w-72 shrink-0 sm:w-80' : '',
      ].join(' ')}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
          <Icon size={12} className="text-accent" />
          {meta?.label ?? post.category}
        </span>
        {isPersonalized && (
          <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
            <Sparkles size={12} />
            Matches your interests
          </span>
        )}
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
    </article>
  )
}
