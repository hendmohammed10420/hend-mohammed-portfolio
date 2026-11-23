import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { profile, ui } from '../data/content'
import { useLang } from '../lang'
import { GithubIcon, LeetcodeIcon, LinkedinIcon, Reveal } from './ui'

export default function Contact() {
  const { t, isAr } = useLang()
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'LinkedIn', value: 'hend-mohammed', href: profile.linkedin, Icon: LinkedinIcon },
    { label: 'GitHub', value: 'hendmohammed10420', href: profile.github, Icon: GithubIcon },
    { label: 'LeetCode', value: 'Hend_Mohammed', href: profile.leetcode, Icon: LeetcodeIcon },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/40 via-panel to-cyan-900/30 p-8 md:p-14">
          <motion.div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="relative">
            <p className="mb-3 font-mono text-sm text-cyan-300/80">
              <span className="text-violet-400">//</span> {isAr ? 'تواصل' : 'contact'}
            </p>
            <h2 className="max-w-2xl text-3xl font-bold text-white md:text-5xl">{t(ui.sections.contactTitle)}</h2>
            <p className="mt-4 max-w-xl text-gray-300">{t(ui.sections.contactSub)}</p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" /> {t(ui.hireMe)}
            </a>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {links.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink/40 p-4 transition hover:border-violet-400/50 hover:bg-ink/60"
                >
                  <span className="rounded-lg bg-white/5 p-2.5 text-gray-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-gray-500">{label}</span>
                    <span dir="ltr" className="block truncate text-sm text-gray-200">{value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white rtl:-scale-x-100" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-8 text-sm text-gray-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {t(profile.name)}</p>
        <p className="font-mono">
          {isAr ? 'معمول بـ' : 'Built with'} React · TypeScript · Tailwind · Framer Motion
        </p>
      </footer>
    </section>
  )
}
