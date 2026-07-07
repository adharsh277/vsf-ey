import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-0">
      <FiSearch className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-cyan-300 sm:left-4" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search exercises (Bench Press, Curl, Squat...)"
        className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/30"
      />
    </div>
  )
}
