import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Content drifts up and fades as the hero scrolls away; glow drifts slower (parallax layers)
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80])

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <motion.div className={styles.glow} style={{ y: glowY }} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <motion.div
        className={`container ${styles.content}`}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <p className="eyebrow">Forward Deployed Engineer · AI Solutions</p>
        <h1 className={styles.headline}>
          From ambiguous requirements
          <br />
          to <span className={styles.accent}>production AI systems.</span>
        </h1>
        <p className={styles.sub}>
          I&rsquo;m Jason Gu. I embed with clients, scope the real problem, and ship LLM agent
          systems that run live operations — 10+ deployments across mortgage, solar, insurance,
          and real estate.
        </p>
        <div className={styles.ctas}>
          <MagneticButton href="#contact">Let&rsquo;s talk</MagneticButton>
          <MagneticButton href="#projects" variant="ghost">
            View work
          </MagneticButton>
        </div>
      </motion.div>

      <a href="#about" className={styles.scrollHint} aria-label="Scroll to about section">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
