import { useEffect, useRef, useState } from 'react'
import { Radar, LogOut } from 'lucide-react'
import { getInitials } from '../data/users'

export default function Header({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-gradient-to-br from-accent/30 to-crimson/20 text-sm font-semibold text-text transition-all duration-200 hover:border-accent/60 hover:shadow-[0_0_16px_rgba(59,130,246,0.3)]"
          aria-label="Account menu"
          aria-expanded={menuOpen}
        >
          {getInitials(user.name)}
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-12 z-10 w-56 animate-scale-in origin-top-right rounded-xl border border-border bg-card/95 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="border-b border-border px-3 py-2.5">
              <p className="truncate text-sm font-medium text-text">{user.name}</p>
              <p className="truncate text-xs text-muted">{user.email}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                onLogout()
              }}
              className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted transition-colors duration-150 hover:bg-crimson/10 hover:text-red-200"
            >
              <LogOut size={15} />
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
