import { CATEGORIES } from '../data/posts'

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className={[
              'relative shrink-0 rounded-xl px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide transition-all duration-200',
              isActive
                ? 'bg-accent-soft text-accent shadow-[0_0_16px_rgba(59,130,246,0.15)]'
                : 'text-muted hover:bg-card hover:text-text',
            ].join(' ')}
          >
            {cat.label}
            <span
              className={[
                'absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-opacity duration-200',
                isActive ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          </button>
        )
      })}
    </div>
  )
}
