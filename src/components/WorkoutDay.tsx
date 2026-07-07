import { motion } from 'framer-motion'
import type { DayKey, Exercise } from '../types/workout'
import { toSectionId } from '../utils/today'
import ExerciseExplorer from './ExerciseExplorer'
import RestDay from './RestDay'

interface WorkoutDayProps {
  day: {
    key: DayKey
    label: string
    emoji: string
    focus: string
    isRestDay?: boolean
    exercises: Exercise[]
  }
  exercises: Exercise[]
  isToday: boolean
  completionMap: Record<string, boolean>
  onToggle: (id: string) => void
  recoveryTips: string[]
}

export default function WorkoutDay({
  day,
  exercises,
  isToday,
  completionMap,
  onToggle,
  recoveryTips,
}: WorkoutDayProps) {
  return (
    <section id={toSectionId(day.key)} className="mx-auto mb-16 w-full max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div
        className={`mb-6 rounded-3xl border p-6 sm:p-7 ${
          isToday
            ? 'border-cyan-300/60 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 shadow-[0_0_28px_rgba(34,211,238,0.2)]'
            : 'border-white/10 bg-white/5'
        }`}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{day.label} Focus</p>
        <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
          {day.emoji} {day.label} - {day.focus}
        </h2>
      </div>

      {day.isRestDay ? (
        <RestDay tips={recoveryTips} />
      ) : (
        <motion.div layout>
          <ExerciseExplorer exercises={exercises} completionMap={completionMap} onToggle={onToggle} />
        </motion.div>
      )}
    </section>
  )
}
