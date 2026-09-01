import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="spidersense-ring relative w-full rounded-2xl border border-border bg-card">
      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-accent/80"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search events, clubs, notes, announcements..."
        className="w-full rounded-2xl bg-transparent py-3.5 pl-11 pr-11 text-sm text-text placeholder:text-muted/70 outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-text"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
