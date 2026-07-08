import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Nav.module.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null,
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.wordmark} onClick={() => setOpen(false)}>
          Jason Gu
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${active === link.href ? styles.active : ''}`}
              aria-current={active === link.href ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="/docs/jason-gu-resume.pdf" target="_blank" rel="noopener" className={styles.link}>
            Resume
          </a>
          <a href="#contact" className={styles.cta}>
            Let&rsquo;s talk
          </a>
        </nav>

        <button
          className={styles.menuButton}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="/docs/jason-gu-resume.pdf"
            target="_blank"
            rel="noopener"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <a href="#contact" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={() => setOpen(false)}>
            Let&rsquo;s talk
          </a>
        </nav>
      )}
    </header>
  )
}
