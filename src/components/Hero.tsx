import { motion } from 'framer-motion'

interface HeroProps {
  onStartTraining: () => void
}

export default function Hero({ onStartTraining }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(99,102,241,0.16),transparent_40%)]" />
          <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Train Hard.
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Recover Better.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
        >
          Your personal weekly workout guide, designed to keep beginners consistent from Monday to Saturday and fully recharged on Sunday.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-100">6 Days Training</span>
          <span className="rounded-full border border-violet-300/40 bg-violet-500/10 px-4 py-1 text-sm text-violet-100">1 Day Recovery</span>
          <span className="rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-100">Track Progress</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59,130,246,0.45)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onStartTraining}
          className="mt-10 rounded-full border border-blue-300/40 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.35)]"
        >
          Start Training
        </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
