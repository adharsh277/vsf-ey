const KEY = 'gym-guide-progress-v1'

export type ProgressMap = Record<string, boolean>

export function readProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as ProgressMap
    return parsed ?? {}
  } catch {
    return {}
  }
}

export function saveProgress(progress: ProgressMap): void {
  localStorage.setItem(KEY, JSON.stringify(progress))
}
