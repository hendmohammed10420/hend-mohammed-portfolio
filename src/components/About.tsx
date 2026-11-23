import { animate, motion, useInView } from 'framer-motion'
import { Code2, Languages, LayoutDashboard, Rocket } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { about, services, stats, ui } from '../data/content'
import { useLang } from '../lang'
import { Reveal, SectionHeader } from './ui'

const serviceIcons = { dashboard: LayoutDashboard, rtl: Languages, landing: Rocket, migrate: Code2 }

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const num = parseInt(value, 10)
  const suffix = value.replace(/^[0-9]+/, '')
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const c = animate(0, num, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setDisplay(Math.round(v)) })
    return () => c.stop()
  }, [inView, num])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  const { t, isAr } = useLang()
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeader kicker={isAr ? 'نبذة عني' : 'about me'} title={t(ui.sections.aboutTitle)} />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-gray-300">{t(about)}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="glow-card h-full rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-white md:text-4xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-1 text-sm text-gray-400">{t(s.label)}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-20 mb-8">
        <h3 className="text-2xl font-bold text-white">{t(ui.sections.servicesTitle)}</h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon]
          return (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/40"
              >
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-violet-500/0 blur-2xl transition-all duration-500 group-hover:bg-violet-500/30" />
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 p-3 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-semibold text-white">{t(s.title)}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{t(s.desc)}</p>
              </motion.div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
