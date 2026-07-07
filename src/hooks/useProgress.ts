import { useEffect, useMemo, useState } from 'react'
import type { WorkoutDayData } from '../types/workout'
import { readProgress, saveProgress } from '../utils/storage'

export function useProgress(days: WorkoutDayData[]) {
  const [progress, setProgress] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setProgress(readProgress())
  }, [])

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const toggleExercise = (exerciseId: string) => {
    setProgress((prev) => ({ ...prev, [exerciseId]: !prev[exerciseId] }))
  }

  const totals = useMemo(() => {
    let totalExercises = 0
    let completedExercises = 0

    const byDay = days.reduce<Record<string, { completed: number; total: number }>>(
      (acc, day) => {
        const total = day.exercises.length
        const completed = day.exercises.filter((exercise) => progress[exercise.id]).length

        totalExercises += total
        completedExercises += completed

        acc[day.key] = { completed, total }
        return acc
      },
      {},
    )

    return {
      byDay,
      completedExercises,
      totalExercises,
      percentage:
        totalExercises === 0 ? 0 : Math.round((completedExercises / totalExercises) * 100),
    }
  }, [days, progress])

  return { progress, toggleExercise, totals }
}
