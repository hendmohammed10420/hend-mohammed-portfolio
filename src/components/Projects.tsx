import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, ImagePlus } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import { asset, projects, ui, type Project } from '../data/content'
import { useLang } from '../lang'
import { GithubIcon, Reveal, SectionHeader } from './ui'

export default function Projects() {
  const { t, isAr } = useLang()
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeader kicker={isAr ? 'المشاريع' : 'projects'} title={t(ui.sections.projectsTitle)} sub={t(ui.sections.projectsSub)} />
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.1}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const { t } = useLang()
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 })

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group glow-card relative h-full overflow-hidden rounded-2xl"
    >
      {/* Screenshot slot */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-gradient-to-br from-violet-950/60 via-ink to-cyan-950/40">
        {p.image ? (
          <img src={asset(p.image)} alt={t(p.title)} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
        ) : (
          <>
            <div className="absolute inset-0 p-5 transition duration-700 group-hover:scale-[1.03]">
              <Mock kind={p.mock} />
            </div>
            <div className="absolute end-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/80 px-3 py-1 text-xs text-gray-300 backdrop-blur">
              <ImagePlus className="h-3.5 w-3.5 text-cyan-300" />
              {t(ui.screenshotSoon)}
            </div>
          </>
        )}
        {p.status === 'wip' && (
          <span className="absolute start-3 top-3 rounded-full border border-amber-300/30 bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
            {t(ui.comingSoon)}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{t(p.title)}</h3>
        <p className="mt-2 leading-relaxed text-gray-400">{t(p.desc)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        {(p.demo || p.repo) && (
          <div className="mt-5 flex gap-3">
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200">
                <ExternalLink className="h-4 w-4" /> {t(ui.liveDemo)}
              </a>
            )}
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white">
                <GithubIcon className="h-4 w-4" /> {t(ui.code)}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ---------- Animated placeholder mockups (shown until a real screenshot is added) ---------- */

function Browser({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-panel/90 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
        <span className="shimmer ms-3 h-2 w-32 rounded-full" />
      </div>
      <div className="flex-1 p-3">{children}</div>
    </div>
  )
}

const bar = (h: number, i: number) => (
  <motion.div
    key={i}
    className="w-full origin-bottom rounded-t bg-gradient-to-t from-violet-600 to-cyan-400"
    initial={{ scaleY: 0.1 }}
    whileInView={{ scaleY: h / 100 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: i * 0.06, ease: 'easeOut' }}
  />
)

function Mock({ kind }: { kind: Project['mock'] }) {
  if (kind === 'dashboard')
    return (
      <Browser>
        <div className="flex h-full gap-3">
          <div className="hidden w-1/5 flex-col gap-2 sm:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-2.5 rounded ${i === 1 ? 'bg-violet-500/60' : 'shimmer'}`} />
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-2.5">
            <div className="grid grid-cols-3 gap-2">
              {['text-cyan-300', 'text-pink-300', 'text-violet-300'].map((c, i) => (
                <div key={i} className="rounded-md border border-white/5 bg-white/[0.04] p-2">
                  <div className="shimmer mb-1.5 h-1.5 w-1/2 rounded" />
                  <div className={`text-xs font-bold ${c}`}>{['12.4K', '+18%', '842'][i]}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-1 gap-1.5 rounded-md border border-white/5 bg-white/[0.03] p-2">
              {[40, 65, 50, 80, 55, 90, 70, 95].map(bar)}
            </div>
          </div>
        </div>
      </Browser>
    )

  if (kind === 'invoice')
    return (
      <Browser>
        <div className="mx-auto flex h-full max-w-[75%] flex-col gap-2 rounded-md bg-white/95 p-3 text-[9px] text-gray-700" dir="rtl">
          <div className="flex items-center justify-between">
            <span className="font-bold text-violet-700">فاتورة ضريبية</span>
            <span className="rounded bg-violet-100 px-1.5 text-violet-700">#INV-0042</span>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex justify-between border-b border-gray-200 pb-1">
              <span className="h-1.5 w-1/3 rounded bg-gray-200" />
              <span className="h-1.5 w-1/6 rounded bg-gray-300" />
            </div>
          ))}
          <div className="mt-auto space-y-0.5">
            <div className="flex justify-between"><span>المجموع</span><span>1,000.00</span></div>
            <div className="flex justify-between text-pink-600"><span>ضريبة 15%</span><span>150.00</span></div>
            <motion.div
              className="flex justify-between rounded bg-violet-600 px-1.5 py-0.5 font-bold text-white"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span>الإجمالي</span><span>1,150.00 ر.س</span>
            </motion.div>
          </div>
        </div>
      </Browser>
    )

  if (kind === 'landing')
    return (
      <Browser>
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center" dir="rtl">
          <motion.div
            className="text-sm font-extrabold text-gradient"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            أدِر أعمالك بذكاء
          </motion.div>
          <div className="shimmer h-1.5 w-2/3 rounded" />
          <div className="shimmer h-1.5 w-1/2 rounded" />
          <div className="mt-1 flex gap-2">
            <div className="h-4 w-14 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            <div className="h-4 w-14 rounded-full border border-white/20" />
          </div>
          <div className="mt-2 grid w-full grid-cols-3 gap-2 px-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-8 rounded-md border border-white/5 bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </Browser>
    )

  return (
    <Browser>
      <div className="grid h-full grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-1 rounded-md border border-white/5 bg-white/[0.04] p-1.5"
            whileHover={{ y: -3 }}
          >
            <div className={`flex-1 rounded bg-gradient-to-br ${i % 2 ? 'from-pink-500/30 to-violet-500/20' : 'from-cyan-500/30 to-violet-500/20'}`} />
            <div className="shimmer h-1.5 w-3/4 rounded" />
            <div className="h-1.5 w-1/3 rounded bg-emerald-400/50" />
          </motion.div>
        ))}
      </div>
    </Browser>
  )
}
