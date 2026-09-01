import { Radar } from 'lucide-react'
import { getInitials } from '../data/users'

export default function Header({ user, onOpenProfile }) {
  return (
    <header className="web-corner relative z-20 flex items-center justify-between gap-4 rounded-2xl border border-border bg-card/70 px-4 py-3 shadow-[0_0_30px_rgba(59,130,246,0.06)] backdrop-blur-xl sm:px-5">
      <div className="flex items-center gap-3">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-bg shadow-[0_0_20px_rgba(59,130,246,0.25)]">
          <Radar size={20} className="text-accent" />
          <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-bg bg-crimson shadow-[0_0_10px_rgba(227,27,35,0.7)]" />
        </div>
        <div>
          <h1 className="font-display text-lg font-semibold uppercase tracking-wide text-text sm:text-xl">
            CampusConnect
          </h1>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted sm:text-xs">
            Your Spider-Sense for Campus
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenProfile}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-gradient-to-br from-accent/30 to-crimson/20 text-sm font-semibold text-text transition-all duration-200 hover:border-accent/60 hover:shadow-[0_0_16px_rgba(59,130,246,0.3)]"
        aria-label="View profile"
      >
        {getInitials(user.name)}
      </button>
    </header>
  )
}
