import { motion } from 'framer-motion'

interface RestDayProps {
  tips: string[]
}

export default function RestDay({ tips }: RestDayProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="glass-card p-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/70 via-cyan-900/40 to-violet-900/40 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_85%_70%,rgba(139,92,246,0.25),transparent_45%)]" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Sunday Recovery</p>
            <h4 className="mt-3 font-display text-3xl text-white">Recovery is where growth happens.</h4>
            <p className="mt-4 text-sm text-slate-200">
              Let your body rebuild. Low intensity movement, hydration, and quality sleep will help you come back stronger.
            </p>
          </div>
        </div>
        <div>
          <h5 className="font-display text-xl text-white">Recovery Checklist</h5>
          <ul className="mt-4 space-y-3">
            {tips.map((tip) => (
              <li key={tip} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}
