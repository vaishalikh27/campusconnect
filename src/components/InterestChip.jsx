import { Check } from 'lucide-react'

export default function InterestChip({ label, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={[
        'group relative flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200',
        'active:scale-95',
        selected
          ? 'border-accent bg-accent-soft text-white shadow-[0_0_0_1px_rgba(58,134,255,0.4),0_0_24px_rgba(58,134,255,0.25)]'
          : 'border-border bg-card text-muted hover:border-accent/50 hover:text-text',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-200',
          selected ? 'border-accent bg-accent' : 'border-border bg-transparent opacity-0 group-hover:opacity-100',
        ].join(' ')}
      >
        {selected && <Check size={11} strokeWidth={3} className="text-white" />}
      </span>
      {label}
    </button>
  )
}
