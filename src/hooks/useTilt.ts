import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'motion/react'

const FINE_POINTER =
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

/**
 * Subtle 3D card tilt following the cursor, spring-damped.
 * Disabled on touch devices and under prefers-reduced-motion.
 */
export function useTilt<T extends HTMLElement>(maxDeg = 4) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()
  const rawRX = useMotionValue(0)
  const rawRY = useMotionValue(0)
  const rotateX = useSpring(rawRX, { damping: 20, stiffness: 120, mass: 0.5 })
  const rotateY = useSpring(rawRY, { damping: 20, stiffness: 120, mass: 0.5 })

  function onMouseMove(e: MouseEvent<T>) {
    if (reduced || !FINE_POINTER || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rawRX.set(-py * maxDeg)
    rawRY.set(px * maxDeg)
  }

  function onMouseLeave() {
    rawRX.set(0)
    rawRY.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
