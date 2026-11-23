import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { education, skills, ui } from '../data/content'
import { useLang } from '../lang'
import { Reveal, SectionHeader } from './ui'

const marquee = ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'Tailwind CSS', 'Cypress', 'RTL', 'REST APIs', 'Mixpanel', 'Git', 'Vite', 'Framer Motion']

export default function Skills() {
  const { t, isAr } = useLang()
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader kicker={isAr ? 'المهارات' : 'skills'} title={t(ui.sections.skillsTitle)} />
      </div>

      {/* infinite marquee — forced LTR so the loop direction is consistent */}
      <div dir="ltr" className="relative mb-14 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 font-mono text-sm whitespace-nowrap text-gray-300">
              {s}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="glow-card h-full rounded-2xl p-6">
              <h3 className="mb-4 font-semibold text-cyan-300">{t(g.group)}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <motion.span
                    key={s}
                    whileHover={{ scale: 1.08 }}
                    className="cursor-default rounded-lg bg-white/5 px-3 py-1.5 text-sm text-gray-200 transition-colors hover:bg-violet-500/20"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-6 grid max-w-6xl gap-6 px-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
              <GraduationCap className="h-5 w-5 text-violet-400" /> {isAr ? 'التعليم' : 'Education'}
            </h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i}>
                  <p className="font-medium text-gray-200">{t(e.title)}</p>
                  <p className="text-sm text-gray-500">
                    {t(e.place)} · <span className="font-mono">{e.period}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
              <Award className="h-5 w-5 text-pink-400" /> {isAr ? 'الشهادات' : 'Certificates'}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-200">React — The Complete Guide</p>
                <p className="text-sm text-gray-500">Udemy · React, Hooks, Redux, Next.js, TypeScript</p>
              </div>
              <div>
                <p className="font-medium text-gray-200">Huawei HCIA — AI</p>
                <p className="text-sm text-gray-500">Huawei</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
