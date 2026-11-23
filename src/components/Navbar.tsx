import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Languages, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile, ui } from '../data/content'
import { useLang } from '../lang'

const links = ['about', 'experience', 'projects', 'skills', 'contact'] as const

export default function Navbar() {
  const { t, toggle, isAr } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LangBtn = (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200 transition hover:border-violet-400/60 hover:bg-violet-500/10"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      {isAr ? 'English' : 'العربية'}
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 rtl:origin-right"
        style={{ scaleX: progress }}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" dir="ltr" className="font-mono text-lg font-semibold text-white">
          <span className="text-violet-400">&lt;</span>
          Hend
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="rounded-full px-3 py-1.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white">
              {t(ui.nav[l])}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {LangBtn}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition hover:brightness-110"
          >
            {t(ui.hireMe)}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {LangBtn}
          <button onClick={() => setOpen((o) => !o)} className="rounded-lg p-2 text-gray-200" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-5 py-3">
              {links.map((l) => (
                <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className="py-2.5 text-gray-300">
                  {t(ui.nav[l])}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
