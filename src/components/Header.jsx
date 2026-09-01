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

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-gradient-to-br from-accent/30 to-crimson/20 text-sm font-semibold text-text transition-colors duration-200 hover:border-accent/60"
          aria-label="Account menu"
          aria-expanded={menuOpen}
        >
          {getInitials(user.name)}
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-12 z-10 w-56 animate-scale-in origin-top-right rounded-xl border border-border bg-card p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
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
