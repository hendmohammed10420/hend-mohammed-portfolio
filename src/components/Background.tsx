import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'
import { useEffect } from 'react'

/** Animated gradient blobs + grid + a soft spotlight that follows the cursor */
export default function Background() {
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const sx = useSpring(x, { stiffness: 120, damping: 25 })
  const sy = useSpring(y, { stiffness: 120, damping: 25 })
  const spotlight = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, rgba(139,92,246,0.10), transparent 70%)`

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <motion.div
        className="absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-violet-600/25 blur-[120px]"
        animate={{ x: [0, 80, -40, 0], y: [0, 60, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[30%] right-[5%] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, -40, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] h-[460px] w-[460px] rounded-full bg-pink-600/15 blur-[130px]"
        animate={{ x: [0, 50, -70, 0], y: [0, -30, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
    </div>
  )
}
