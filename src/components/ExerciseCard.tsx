import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock, FiTarget, FiTrendingUp } from 'react-icons/fi'
import type { Exercise } from '../types/workout'

interface ExerciseCardProps {
  exercise: Exercise
  completed: boolean
  onToggle: (id: string) => void
}

export default function ExerciseCard({ exercise, completed, onToggle }: ExerciseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-card overflow-hidden"
    >
      <div className="relative">
        <img src={exercise.image} alt={exercise.name} className="h-52 w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full border border-cyan-300/40 bg-black/45 px-3 py-1 text-xs text-cyan-100 backdrop-blur">
          {exercise.targetMuscle}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h4 className="font-display text-xl text-white">{exercise.name}</h4>
          <button
            onClick={() => onToggle(exercise.id)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              completed
                ? 'border-emerald-400/60 bg-emerald-500/20 text-emerald-300'
                : 'border-cyan-300/40 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/20'
            }`}
          >
            {completed ? 'Completed' : 'Mark Complete'}
          </button>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">{exercise.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-200 sm:grid-cols-3">
          <span className="meta-pill"><FiTarget /> {exercise.targetMuscle}</span>
          <span className="meta-pill"><FiTrendingUp /> {exercise.sets} sets</span>
          <span className="meta-pill">{exercise.reps} reps</span>
          <span className="meta-pill"><FiClock /> {exercise.rest}</span>
          <span className="meta-pill">{exercise.difficulty}</span>
          <span className="meta-pill">
            <FiCheckCircle /> Focused form
          </span>
        </div>

        <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-black/25 p-3 text-xs text-slate-300">
          <p>
            <span className="text-slate-100">Common mistake:</span> {exercise.commonMistakes}
          </p>
          <p>
            <span className="text-slate-100">Tip:</span> {exercise.tips}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
