import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { asset, heroRoles, profile, ui } from '../data/content'
import { useLang } from '../lang'
import { GithubIcon, LinkedinIcon } from './ui'

const fadeUp = (d: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  const { t, isAr } = useLang()
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % heroRoles.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 pt-24 pb-16">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div {...fadeUp(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t(ui.available)}
          </motion.div>

          <motion.p {...fadeUp(0.08)} className="mb-2 text-lg text-gray-400">
            {isAr ? 'أهلًا، أنا' : 'Hi, I’m'}
          </motion.p>
          <motion.h1 {...fadeUp(0.16)} className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-7xl">
            <span className="text-gradient">{t(profile.name)}</span>
          </motion.h1>
          <motion.p {...fadeUp(0.24)} className="mt-4 text-xl font-medium text-gray-200 md:text-2xl">
            {t(profile.role)}
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="mt-3 flex h-9 items-center gap-2 font-mono text-base text-cyan-300 md:text-lg">
            <span className="text-violet-400">›</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                transition={{ duration: 0.4 }}
              >
                {t(heroRoles[i])}
              </motion.span>
            </AnimatePresence>
            <span className="h-5 w-[2px] animate-pulse bg-cyan-300" />
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="mt-4 inline-flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin className="h-4 w-4" /> {t(profile.location)}
          </motion.p>

          <motion.div {...fadeUp(0.48)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-medium text-white shadow-xl shadow-violet-600/25 transition hover:scale-[1.03] hover:brightness-110"
            >
              {t(ui.viewWork)}
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href={asset(profile.cv)}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-gray-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              {t(ui.downloadCv)}
            </a>
            <div className="flex items-center gap-1 ps-1">
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full p-2.5 text-gray-400 transition hover:bg-white/5 hover:text-white" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full p-2.5 text-gray-400 transition hover:bg-white/5 hover:text-white" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        </div>

        <CodeCard />
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-500 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </motion.a>
    </section>
  )
}

/** Floating "code editor" card — always LTR since it's code */
function CodeCard() {
  const lines: [string, string][] = [
    ['k', 'const'],
    ['v', ' hend'],
    ['p', ': Engineer = {'],
  ]
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-600/40 via-cyan-500/20 to-pink-500/40 blur-xl" />
        <div dir="ltr" className="glow-card relative rounded-2xl p-5 text-left font-mono text-[13px] leading-6 shadow-2xl md:text-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs text-gray-500">hend.ts</span>
          </div>
          <div>
            {lines.map(([c, s], idx) => (
              <span key={idx} className={c === 'k' ? 'text-pink-400' : c === 'v' ? 'text-cyan-300' : 'text-gray-300'}>
                {s}
              </span>
            ))}
          </div>
          <Line k="role" v="'Frontend Engineer'" />
          <Line k="experience" v="'3+ years'" />
          <Line k="stack" v="['React', 'TypeScript', 'AntD']" />
          <Line k="languages" v="['العربية', 'English']" />
          <Line k="loves" v="'RTL dashboards & clean UI'" />
          <Line k="available" v="true" bool />
          <div className="text-gray-300">{'}'}</div>
          <div className="mt-3 text-gray-500">
            <span className="text-violet-400">export default</span> hend<span className="animate-pulse text-cyan-300">▍</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        dir="ltr"
        className="absolute -bottom-12 -left-6 rounded-xl border border-white/10 bg-panel/90 px-4 py-3 shadow-xl backdrop-blur"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <p className="text-2xl font-bold text-white">50K+</p>
        <p className="text-xs text-gray-400">lines shipped</p>
      </motion.div>
      <motion.div
        dir="ltr"
        className="absolute -top-5 -right-3 rounded-xl border border-white/10 bg-panel/90 px-3 py-2 text-sm shadow-xl backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-semibold text-cyan-300">EN</span>
        <span className="mx-1.5 text-gray-500">⇄</span>
        <span className="font-semibold text-pink-300">عربي</span>
      </motion.div>
    </motion.div>
  )
}

function Line({ k, v, bool }: { k: string; v: string; bool?: boolean }) {
  return (
    <div className="ps-5">
      <span className="text-gray-200">{k}</span>
      <span className="text-gray-500">: </span>
      <span className={bool ? 'text-orange-300' : 'text-emerald-300'}>{v}</span>
      <span className="text-gray-500">,</span>
    </div>
  )
}
