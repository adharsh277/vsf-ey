export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export interface Exercise {
  id: string
  name: string
  image: string
  description: string
  targetMuscle: string
  sets: number
  reps: string
  rest: string
  difficulty: Difficulty
  commonMistakes: string
  tips: string
}

export interface WorkoutDayData {
  key: DayKey
  label: string
  emoji: string
  focus: string
  isRestDay?: boolean
  exercises: Exercise[]
}
