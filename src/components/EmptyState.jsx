import { SearchX, Sparkles } from 'lucide-react'

export default function EmptyState({ variant = 'search', title, subtitle }) {
  const Icon = variant === 'forYou' ? Sparkles : SearchX

  const defaults =
    variant === 'forYou'
      ? {
          title: 'No perfect matches yet',
          subtitle: 'Try selecting more interests to personalize your campus feed.',
        }
      : {
          title: 'No results found',
          subtitle: 'Try a different search term or explore another category.',
        }

  return (
    <div className="web-corner flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card/50 px-6 py-14 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-bg/60 shadow-[0_0_16px_rgba(59,130,246,0.15)]">
        <Icon size={20} className="text-accent" />
      </div>
      <div>
        <p className="text-sm font-medium text-text">{title ?? defaults.title}</p>
        <p className="mt-1 text-sm text-muted">{subtitle ?? defaults.subtitle}</p>
      </div>
    </div>
  )
}
