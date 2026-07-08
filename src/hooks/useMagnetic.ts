import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'motion/react'

/**
 * Magnetic hover: element eases toward the cursor while hovered,
 * springs back to rest on leave. No-ops under prefers-reduced-motion.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.22) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { damping: 18, stiffness: 160, mass: 0.4 })
  const y = useSpring(rawY, { damping: 18, stiffness: 160, mass: 0.4 })

  function onMouseMove(e: MouseEvent<T>) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - rect.left - rect.width / 2) * strength)
    rawY.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  function onMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return { ref, x, y, onMouseMove, onMouseLeave }
}
