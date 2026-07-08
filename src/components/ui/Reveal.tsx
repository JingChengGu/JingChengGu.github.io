import { createContext, useContext } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export type RevealDirection = 'up' | 'left' | 'right'

const DirectionContext = createContext<RevealDirection>('up')

const OFFSETS: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  left: { x: -40, y: 12 },
  right: { x: 40, y: 12 },
}

interface GroupProps {
  children: ReactNode
  className?: string
  /** Per-child stagger delay in seconds */
  stagger?: number
  /** Entrance direction for all items in this group */
  direction?: RevealDirection
}

/**
 * Entrance choreography: children wrapped in <Reveal.Item> slide in from the
 * group's direction behind a soft clip-path wipe, staggered, the first time
 * the group scrolls into view. No-ops under prefers-reduced-motion.
 */
function Group({ children, className, stagger = 0.06, direction = 'up' }: GroupProps) {
  const reduced = useReducedMotion()
  return (
    <DirectionContext.Provider value={direction}>
      <motion.div
        className={className}
        initial={reduced ? undefined : 'hidden'}
        whileInView={reduced ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger } },
        }}
      >
        {children}
      </motion.div>
    </DirectionContext.Provider>
  )
}

interface ItemProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

function Item({ children, className, style }: ItemProps) {
  const direction = useContext(DirectionContext)
  const { x, y } = OFFSETS[direction]
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: {
          opacity: 0,
          x,
          y,
          clipPath: 'inset(6% 4% 12% 4% round 16px)',
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0% round 16px)',
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          // Clear the clip once settled so card hover glows aren't clipped
          transitionEnd: { clipPath: 'none' },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

const Reveal = { Group, Item }
export default Reveal
