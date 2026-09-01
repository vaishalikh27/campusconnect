import { useState } from 'react'
import { Radar, ArrowRight, Mail, Lock, AlertCircle } from 'lucide-react'
import { findUser } from '../data/users'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const canSubmit = email.trim() !== '' && password !== ''

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    const user = findUser(email, password)
    if (!user) {
      setError("Those credentials don't match a student account. Try the demo login below.")
      return
    }
    setError('')
    onLogin(user)
  }

  const fillDemo = () => {
    setEmail('demo@vitstudent.ac.in')
    setPassword('demo1234')
    setError('')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-crimson/10 blur-[120px]" />

      <div className="relative w-full max-w-sm">
        <div className="mb-10 flex animate-fade-in flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-[0_0_30px_rgba(58,134,255,0.2)]">
            <Radar size={26} className="text-accent" />
          </div>
          <p className="text-sm font-medium tracking-wide text-accent">CampusConnect</p>
          <p className="mt-1 text-xs text-muted">Your Spider-Sense for Campus</p>
        </div>

        <div className="animate-fade-up text-center" style={{ animationDelay: '80ms' }}>
          <h1 className="text-3xl font-semibold tracking-tight text-text">Welcome back</h1>
          <p className="mx-auto mt-3 max-w-xs text-sm text-muted">
            Sign in with your student account to see your personalized campus feed.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex animate-fade-up flex-col gap-4"
          style={{ animationDelay: '160ms' }}
        >
          <div className="relative">
            <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@vitstudent.ac.in"
              autoComplete="email"
              className="w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-text placeholder:text-muted/70 outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(58,134,255,0.15)]"
            />
          </div>

          <div className="relative">
            <Lock size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-text placeholder:text-muted/70 outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_3px_rgba(58,134,255,0.15)]"
            />
          </div>

          {error && (
            <div className="flex animate-fade-in items-start gap-2 rounded-xl border border-crimson/30 bg-crimson/10 px-3.5 py-3 text-xs text-red-200">
              <AlertCircle size={14} className="mt-0.5 shrink-0 text-crimson" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className={[
              'mt-2 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200',
              canSubmit
                ? 'bg-accent text-white shadow-[0_0_30px_rgba(58,134,255,0.35)] hover:brightness-110 active:scale-[0.98]'
                : 'cursor-not-allowed bg-card text-muted',
            ].join(' ')}
          >
            Sign in
            <ArrowRight size={16} />
          </button>
        </form>

        <div
          className="mt-6 animate-fade-up rounded-xl border border-dashed border-border bg-card/50 px-4 py-3 text-center text-xs text-muted"
          style={{ animationDelay: '240ms' }}
        >
          No account handy? Use the demo login —{' '}
          <button
            type="button"
            onClick={fillDemo}
            className="font-medium text-accent underline-offset-2 hover:underline"
          >
            demo@vitstudent.ac.in / demo1234
          </button>
        </div>
      </div>
    </div>
  )
}
