import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang, T } from './data/content'

type Ctx = { lang: Lang; toggle: () => void; t: (v: T) => string; isAr: boolean }
const LangContext = createContext<Ctx | null>(null)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'ar') return saved
  } catch {
    /* storage unavailable */
  }
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const value: Ctx = {
    lang,
    isAr: lang === 'ar',
    toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
    t: (v) => v[lang],
  }
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
