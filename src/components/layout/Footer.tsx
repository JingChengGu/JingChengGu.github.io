import { Github, Linkedin, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Jason Gu</p>
        <div className={styles.social}>
          <a href="mailto:jaesongu@gmail.com" aria-label="Email" className={styles.icon}>
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jingchenggu/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className={styles.icon}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/JingChengGu"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className={styles.icon}
          >
            <Github size={18} />
          </a>
        </div>
        <p className={styles.built}>Built with React + Vite</p>
      </div>
    </footer>
  )
}
