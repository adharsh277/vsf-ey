import type { DayKey } from '../types/workout'

const days: DayKey[] = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

export function getTodayKey(): DayKey {
  return days[new Date().getDay()]
}

export function toSectionId(day: DayKey): string {
  return `day-${day}`
}
