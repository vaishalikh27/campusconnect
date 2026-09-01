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
              'relative shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200',
              isActive
                ? 'bg-accent-soft text-accent'
                : 'text-muted hover:bg-card hover:text-text',
            ].join(' ')}
          >
            {cat.label}
            <span
              className={[
                'absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-opacity duration-200',
                isActive ? 'opacity-100' : 'opacity-0',
              ].join(' ')}
            />
          </button>
        )
      })}
    </div>
  )
}
