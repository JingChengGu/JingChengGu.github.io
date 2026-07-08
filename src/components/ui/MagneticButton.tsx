import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { useMagnetic } from '../../hooks/useMagnetic'
import styles from './MagneticButton.module.css'

interface Props {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  external?: boolean
}

export default function MagneticButton({ href, children, variant = 'primary', external }: Props) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>()

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${styles.button} ${variant === 'ghost' ? styles.ghost : styles.primary}`}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </motion.a>
  )
}
