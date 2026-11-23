import About from './components/About'
import Background from './components/Background'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { LangProvider } from './lang'

export default function App() {
  return (
    <LangProvider>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </LangProvider>
  )
}
