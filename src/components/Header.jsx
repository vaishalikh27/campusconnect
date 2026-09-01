import { Radar } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-[0_0_20px_rgba(58,134,255,0.15)]">
          <Radar size={20} className="text-accent" />
        </div>
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-text sm:text-xl">
            CampusConnect
          </h1>
          <p className="text-xs text-muted sm:text-sm">Your Spider-Sense for Campus</p>
        </div>
      </div>

      <button
        type="button"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-gradient-to-br from-accent/30 to-crimson/20 text-sm font-semibold text-text transition-colors duration-200 hover:border-accent/60"
        aria-label="Profile"
      >
        VG
      </button>
    </header>
  )
}
