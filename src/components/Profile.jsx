import { ArrowLeft, LogOut, Mail, User } from 'lucide-react'
import { getInitials } from '../data/users'

export default function Profile({ user, interests, onBack, onLogout }) {
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
            Agent Profile
          </div>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-accent/30 to-crimson/20 text-lg font-semibold text-text shadow-[0_0_24px_rgba(59,130,246,0.25)]">
              {getInitials(user.name)}
            </div>
            <div>
              <h1 className="font-display text-2xl font-semibold leading-snug text-text sm:text-3xl">
                {user.name}
              </h1>
              <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <Mail size={14} className="text-accent" />
                {user.email}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <div className="mb-3 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
              <User size={12} />
              Interests
            </div>
            {interests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">No interests selected yet.</p>
            )}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <button
              type="button"
              onClick={onLogout}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-crimson/30 bg-crimson-soft px-6 py-3.5 text-sm font-semibold text-red-300 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
