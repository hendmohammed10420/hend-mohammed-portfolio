import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { useRef } from 'react'
import { experience, ui } from '../data/content'
import { useLang } from '../lang'
import { Reveal, SectionHeader } from './ui'

export default function Experience() {
  const { t, isAr } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeader kicker={isAr ? 'الخبرات' : 'experience'} title={t(ui.sections.experienceTitle)} />

      <div ref={ref} className="relative ps-10 md:ps-14">
        {/* timeline track + animated fill */}
        <div className="absolute top-0 bottom-0 start-3 w-px bg-white/10 md:start-5" />
        <motion.div style={{ height }} className="absolute top-0 start-3 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500 md:start-5" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative">
              <div className="absolute top-1 -start-10 flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/40 bg-ink text-violet-300 md:-start-14 md:h-10 md:w-10">
                <Briefcase className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </div>

              <div className="glow-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {t(job.role)} <span className="text-gradient">@ {job.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-gray-400">{t(job.period)}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{t(job.place)}</p>

                <div className="mt-6 space-y-6">
                  {job.blocks.map((b, j) => (
                    <div key={j}>
                      {b.title && <h4 className="mb-3 font-semibold text-cyan-300">{t(b.title)}</h4>}
                      <ul className="space-y-2.5">
                        {b.points.map((p, k) => (
                          <li key={k} className="flex gap-3 text-gray-300">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                            <span className="leading-relaxed">{t(p)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
