import { useMemo, useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProgressTracker from './components/ProgressTracker'
import SearchBar from './components/SearchBar'
import WorkoutDay from './components/WorkoutDay'
import WorkoutTabs from './components/WorkoutTabs'
import { workouts, recoveryTips } from './data/workouts'
import { useProgress } from './hooks/useProgress'
import { getTodayKey } from './utils/today'

function App() {
  const [search, setSearch] = useState('')
  const today = getTodayKey()
  const [activeDay, setActiveDay] = useState(today)

  const { progress, toggleExercise, totals } = useProgress(workouts)

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return workouts

    return workouts.map((day) => ({
      ...day,
      exercises: day.exercises.filter((exercise) => {
        const text = `${exercise.name} ${exercise.description} ${exercise.targetMuscle}`.toLowerCase()
        return text.includes(query)
      }),
    }))
  }, [search])

  const dayForToday = workouts.find((day) => day.key === today)
  const activeDayData = filtered.find((day) => day.key === activeDay)
  const activeDayOriginal = workouts.find((day) => day.key === activeDay)
  const todayStats = totals.byDay[today] ?? { completed: 0, total: 0 }
  const activeStats = totals.byDay[activeDay] ?? { completed: 0, total: 0 }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="floating-orb left-[5%] top-[10%] bg-blue-500/20" />
        <div className="floating-orb left-[70%] top-[20%] bg-cyan-500/20" />
        <div className="floating-orb left-[25%] top-[65%] bg-violet-500/20" />
      </div>

      <Navbar
        days={workouts.map((day) => ({ key: day.key, label: day.label }))}
        activeDay={activeDay}
        onSelectDay={setActiveDay}
      />
      <Hero
        onStartTraining={() => {
          setActiveDay(today)
          document.getElementById('workout-panel')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <ProgressTracker
        dayLabel={`${activeDayOriginal?.emoji ?? ''} ${activeDayOriginal?.label ?? 'Today'}`}
        dailyCompleted={activeStats.completed}
        dailyTotal={activeStats.total}
        weeklyCompleted={totals.completedExercises}
        weeklyTotal={totals.totalExercises}
        todayLabel={`${dayForToday?.emoji ?? ''} ${dayForToday?.label ?? 'Today'}`}
        todayCompleted={todayStats.completed}
        todayTotal={todayStats.total}
      />

      <SearchBar value={search} onChange={setSearch} />
      <WorkoutTabs
        days={workouts.map((day) => ({ key: day.key, label: day.label, emoji: day.emoji }))}
        activeDay={activeDay}
        onSelectDay={setActiveDay}
        today={today}
      />

      <main id="workout-panel" className="pb-8 pt-2">
        {activeDayData && (
          <WorkoutDay
            key={activeDayData.key}
            day={activeDayData}
            exercises={activeDayData.exercises}
            isToday={today === activeDayData.key}
            completionMap={progress}
            onToggle={toggleExercise}
            recoveryTips={recoveryTips}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
