import { useState } from 'react'
import { Radar, ArrowRight } from 'lucide-react'
import InterestChip from './InterestChip'
import { INTERESTS } from '../data/posts'

export default function Onboarding({ onContinue }) {
  const [selected, setSelected] = useState([])

  const toggleInterest = (interest) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest],
    )
  }

  const canContinue = selected.length > 0

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-crimson/10 blur-[120px]" />

      <div className="relative w-full max-w-2xl">
        <div className="mb-10 flex animate-fade-in flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-[0_0_30px_rgba(58,134,255,0.2)]">
            <Radar size={26} className="text-accent" />
          </div>
          <p className="text-sm font-medium tracking-wide text-accent">CampusConnect</p>
          <p className="mt-1 text-xs text-muted">Your Spider-Sense for Campus</p>
        </div>

        <div className="animate-fade-up text-center" style={{ animationDelay: '80ms' }}>
          <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Pick your interests
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
            Choose what you're interested in and we'll personalize your campus feed.
          </p>
        </div>

        <div
          className="mt-10 flex animate-fade-up flex-wrap justify-center gap-3"
          style={{ animationDelay: '160ms' }}
        >
          {INTERESTS.map((interest) => (
            <InterestChip
              key={interest}
              label={interest}
              selected={selected.includes(interest)}
              onToggle={() => toggleInterest(interest)}
            />
          ))}
        </div>

        <div
          className="mt-12 flex animate-fade-up flex-col items-center gap-3"
          style={{ animationDelay: '240ms' }}
        >
          <button
            type="button"
            disabled={!canContinue}
            onClick={() => onContinue(selected)}
            className={[
              'flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200',
              canContinue
                ? 'bg-accent text-white shadow-[0_0_30px_rgba(58,134,255,0.35)] hover:brightness-110 active:scale-[0.98]'
                : 'cursor-not-allowed bg-card text-muted',
            ].join(' ')}
          >
            Continue
            <ArrowRight size={16} />
          </button>
          <p className="text-xs text-muted">
            {canContinue
              ? `${selected.length} interest${selected.length > 1 ? 's' : ''} selected`
              : 'Select at least one interest to continue'}
          </p>
        </div>
      </div>
    </div>
  )
}
