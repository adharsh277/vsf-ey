import { motion } from 'framer-motion'
import type { DayKey } from '../types/workout'

interface WorkoutTabsProps {
  days: { key: DayKey; label: string; emoji: string }[]
  activeDay: DayKey
  onSelectDay: (day: DayKey) => void
  today: DayKey
}

export default function WorkoutTabs({ days, activeDay, onSelectDay, today }: WorkoutTabsProps) {
  return (
    <section className="mx-auto mb-8 mt-2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
        {days.map((day) => (
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            key={day.key}
            onClick={() => onSelectDay(day.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
              day.key === activeDay
                ? 'border-cyan-300/70 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-100 shadow-[0_0_24px_rgba(6,182,212,0.35)]'
                : day.key === today
                  ? 'border-violet-300/70 bg-violet-500/25 text-violet-100'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:-translate-y-0.5 hover:border-blue-300/50 hover:text-white'
            }`}
          >
            {day.emoji} {day.label}
          </motion.button>
        ))}
      </div>
    </section>
  )
}
