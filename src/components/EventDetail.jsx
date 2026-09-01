import { ArrowLeft, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react'
import { CATEGORY_META, REGISTRABLE_CATEGORIES } from '../data/posts'

export default function EventDetail({ post, isRegistered, onRegister, onBack }) {
  const meta = CATEGORY_META[post.category]
  const Icon = meta?.icon ?? Calendar
  const canRegister = REGISTRABLE_CATEGORIES.has(post.category)

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="web-radial-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to feed
        </button>

        <div className="web-corner animate-fade-up rounded-2xl border border-border bg-card/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-crimson">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson shadow-[0_0_8px_rgba(227,27,35,0.8)]" />
            Mission Briefing
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/60 px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-wider text-muted">
              <Icon size={12} className="text-accent" />
              {meta?.label ?? post.category}
            </span>
            {isRegistered && (
              <span className="inline-flex items-center gap-1 rounded-full bg-crimson-soft px-2.5 py-1 text-[11px] font-medium text-red-300">
                <CheckCircle2 size={12} />
                Registered
              </span>
            )}
          </div>

          <h1 className="mt-4 font-display text-2xl font-semibold leading-snug text-text sm:text-3xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {post.description}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="shrink-0 text-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0 text-accent" />
              <span>{post.location}</span>
            </div>
          </div>

          {post.tags?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-bg/60 px-2.5 py-1 text-xs text-muted"
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
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              <ExternalLink size={14} />
              Open resource
            </a>
          )}

          {canRegister && (
            <div className="mt-8 border-t border-border pt-6">
              <button
                type="button"
                disabled={isRegistered}
                onClick={onRegister}
                className={[
                  'flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200',
                  isRegistered
                    ? 'cursor-default bg-crimson-soft text-red-300 shadow-[0_0_20px_rgba(227,27,35,0.15)]'
                    : 'bg-crimson text-white shadow-[0_0_30px_rgba(227,27,35,0.35)] hover:brightness-110 active:scale-[0.98]',
                ].join(' ')}
              >
                {isRegistered ? (
                  <>
                    <CheckCircle2 size={16} />
                    You're registered
                  </>
                ) : (
                  'Register'
                )}
              </button>
              {isRegistered && (
                <p className="mt-3 text-center text-xs text-muted">
                  You're on the list for this {meta?.label?.toLowerCase() ?? 'event'}. No further action needed.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
