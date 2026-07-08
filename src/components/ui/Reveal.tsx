import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

interface GroupProps {
  children: ReactNode
  className?: string
  /** Per-child stagger delay in seconds */
  stagger?: number
}

/**
 * Entrance choreography: children wrapped in <Reveal.Item> rise and fade in,
 * staggered, the first time the group scrolls into view.
 */
function Group({ children, className, stagger = 0.06 }: GroupProps) {
  const reduced = useReducedMotion()
  return (
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
  )
}

interface ItemProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

function Item({ children, className, style }: ItemProps) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

const Reveal = { Group, Item }
export default Reveal
