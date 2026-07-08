import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import gradPhoto from '../../assets/images/jason-grad.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Content drifts up and fades as the hero scrolls away; the portrait
  // drifts slightly less, giving gentle parallax separation between columns
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48])

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <motion.div
        className={`container ${styles.content}`}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className={styles.text}>
          <p className="eyebrow">Forward Deployed Engineer · AI Solutions</p>
          <h1 className={styles.name}>Jason Gu</h1>
          <p className={styles.subhead}>
            From ambiguous requirements to{' '}
            <span className={styles.accent}>production AI systems.</span>
          </p>
          <p className={styles.sub}>
            I embed with clients, scope the real problem, and ship LLM agent systems that run live
            operations — 10+ deployments across mortgage, solar, insurance, and real estate.
          </p>
          <div className={styles.ctas}>
            <MagneticButton href="#contact">Let&rsquo;s talk</MagneticButton>
            <MagneticButton href="#projects" variant="ghost">
              View work
            </MagneticButton>
            <MagneticButton href="/docs/jason-gu-resume.pdf" variant="ghost" external>
              View Resume
            </MagneticButton>
          </div>
          <p className={styles.meta}>San Diego, CA · U.S. Citizen</p>
        </div>

        <motion.div className={styles.portraitWrap} style={{ y: portraitY }}>
          <img
            src={gradPhoto}
            alt="Jason Gu at UC San Diego's Geisel Library, wearing a Class of 2025 graduation stole"
            className={styles.portrait}
            width={1050}
            height={1400}
          />
        </motion.div>
      </motion.div>

      <a href="#about" className={styles.scrollHint} aria-label="Scroll to about section">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
