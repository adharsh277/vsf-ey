import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock, FiTarget, FiTrendingUp } from 'react-icons/fi'
import type { Exercise } from '../types/workout'

interface ExerciseExplorerProps {
  exercises: Exercise[]
  completionMap: Record<string, boolean>
  onToggle: (id: string) => void
}

function getHowToSteps(exercise: Exercise): string[] {
  return [
    `Set up with stable posture and align joints before starting ${exercise.name}.`,
    `Perform each rep with full control while focusing on ${exercise.targetMuscle}.`,
    `Use a smooth tempo: lift with intent, then lower slowly for better muscle tension.`,
    `Complete ${exercise.sets} sets of ${exercise.reps} reps, resting ${exercise.rest} between sets.`,
  ]
}

export default function ExerciseExplorer({
  exercises,
  completionMap,
  onToggle,
}: ExerciseExplorerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(exercises[0]?.id ?? null)

  useEffect(() => {
    setSelectedId(exercises[0]?.id ?? null)
  }, [exercises])

  const selectedExercise = useMemo(
    () => exercises.find((exercise) => exercise.id === selectedId) ?? exercises[0],
    [exercises, selectedId],
  )

  if (!exercises.length) {
    return (
      <div className="glass-card p-6 text-slate-200">
        No exercises match your search for this day.
      </div>
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="glass-card p-4 lg:col-span-4">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">Exercise Names</p>
        <div className="space-y-2">
          {exercises.map((exercise) => {
            const active = selectedExercise?.id === exercise.id
            const done = Boolean(completionMap[exercise.id])

            return (
              <button
                type="button"
                key={exercise.id}
                onClick={() => setSelectedId(exercise.id)}
                className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                  active
                    ? 'border-cyan-300/60 bg-cyan-500/15 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : 'border-white/10 bg-white/5 hover:border-blue-300/50'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-white">{exercise.name}</p>
                  {done && <FiCheckCircle className="text-emerald-300" />}
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  {exercise.targetMuscle} • {exercise.difficulty}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {selectedExercise && (
        <motion.article
          key={selectedExercise.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="glass-card overflow-hidden lg:col-span-8"
        >
          <div className="relative">
            <img
              src={selectedExercise.image}
              alt={selectedExercise.name}
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Exercise Detail</p>
                <h3 className="mt-1 font-display text-3xl text-white">{selectedExercise.name}</h3>
              </div>
              <button
                onClick={() => onToggle(selectedExercise.id)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  completionMap[selectedExercise.id]
                    ? 'border-emerald-400/60 bg-emerald-500/20 text-emerald-200'
                    : 'border-cyan-300/50 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/20'
                }`}
              >
                {completionMap[selectedExercise.id] ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
          </div>

          <div className="p-6">
            <p className="text-slate-300">{selectedExercise.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-200 sm:grid-cols-5">
              <span className="meta-pill"><FiTarget /> {selectedExercise.targetMuscle}</span>
              <span className="meta-pill"><FiTrendingUp /> {selectedExercise.sets} sets</span>
              <span className="meta-pill">{selectedExercise.reps} reps</span>
              <span className="meta-pill"><FiClock /> {selectedExercise.rest}</span>
              <span className="meta-pill">{selectedExercise.difficulty}</span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="font-display text-lg text-white">How To Do</h4>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
                  {getHowToSteps(selectedExercise).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="font-display text-lg text-white">Form Notes</h4>
                <p className="mt-3 text-sm text-slate-300">
                  <span className="text-slate-100">Common mistake:</span> {selectedExercise.commonMistakes}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <span className="text-slate-100">Tip:</span> {selectedExercise.tips}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      )}
    </div>
  )
}
