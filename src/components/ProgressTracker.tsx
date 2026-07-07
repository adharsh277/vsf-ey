import { motion } from 'framer-motion'

interface ProgressTrackerProps {
  dayLabel: string
  dailyCompleted: number
  dailyTotal: number
  weeklyCompleted: number
  weeklyTotal: number
  todayLabel: string
  todayCompleted: number
  todayTotal: number
}

export default function ProgressTracker({
  dayLabel,
  dailyCompleted,
  dailyTotal,
  weeklyCompleted,
  weeklyTotal,
  todayLabel,
  todayCompleted,
  todayTotal,
}: ProgressTrackerProps) {
  const dailyPercentage = dailyTotal ? Math.round((dailyCompleted / dailyTotal) * 100) : 0
  const weeklyPercentage = weeklyTotal ? Math.round((weeklyCompleted / weeklyTotal) * 100) : 0

  const todayPercentage = todayTotal ? Math.round((todayCompleted / todayTotal) * 100) : 0

  return (
    <section className="mx-auto mb-10 grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
      <div className="glass-card p-5 sm:col-span-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Selected Day</p>
        <h3 className="mt-2 font-display text-2xl text-white">{dayLabel}</h3>
        <p className="mt-2 text-sm text-slate-300">
          {dailyCompleted} / {dailyTotal} exercises completed
        </p>
      </div>
      <div className="glass-card p-5 sm:col-span-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Today's Workout</p>
        <h3 className="mt-2 font-display text-2xl text-white">{todayLabel}</h3>
        <p className="mt-2 text-sm text-slate-300">
          {todayCompleted} / {todayTotal} Exercises Completed
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700/40">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${todayPercentage}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </div>
      </div>
      <div className="glass-card p-5 sm:col-span-1">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Weekly Progress</p>
        <p className="mt-2 text-sm text-slate-300">
          {weeklyCompleted} / {weeklyTotal} Exercises Completed
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700/40">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${weeklyPercentage}%` }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full bg-gradient-to-r from-violet-400 to-blue-500"
          />
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-300">Selected Day Progress</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700/40">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${dailyPercentage}%` }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
          />
        </div>
      </div>
    </section>
  )
}
