import { motion } from 'framer-motion'
import type { DayKey } from '../types/workout'

interface NavbarProps {
  days: { key: DayKey; label: string }[]
  activeDay: DayKey
  onSelectDay: (day: DayKey) => void
}

export default function Navbar({ days, activeDay, onSelectDay }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.span
            whileHover={{ scale: 1.08 }}
            className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-[0.25em] text-cyan-200"
          >
            GYM GUIDE
          </motion.span>
          <a className="nav-link hidden sm:inline-flex" href="#home">
            Home
          </a>
        </div>
        <nav className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1">
          {days.map((day) => (
            <button
              type="button"
              key={day.key}
              className={`rounded-full border px-3 py-2 text-sm whitespace-nowrap transition ${
                activeDay === day.key
                  ? 'border-cyan-300/70 bg-cyan-400/15 text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.22)]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-blue-300/50 hover:text-white'
              }`}
              onClick={() => onSelectDay(day.key)}
            >
              {day.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
