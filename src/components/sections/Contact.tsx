import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Phone, Linkedin, Github, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import styles from './Contact.module.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xovaqovv'

type Status = 'idle' | 'loading' | 'success' | 'error'

const GENERIC_ERROR =
  'There was an error sending your message. Please try again, or email me directly at jaesongu@gmail.com.'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState(GENERIC_ERROR)
  const resetTimer = useRef<number>()

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        resetTimer.current = window.setTimeout(() => setStatus('idle'), 6000)
      } else {
        const data = await res.json().catch(() => null)
        const messages = data?.errors
          ?.map((err: { message?: string }) => err.message)
          .filter(Boolean)
          .join(', ')
        setErrorMessage(messages || GENERIC_ERROR)
        setStatus('error')
      }
    } catch {
      setErrorMessage(GENERIC_ERROR)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.info}>
          <p className="eyebrow">Contact</p>
          <h2 className={styles.headline}>
            Have an ambiguous problem?
            <br />
            <span className={styles.accent}>Let&rsquo;s scope it.</span>
          </h2>
          <p className={styles.lede}>
            Open to Forward Deployed Engineer and AI Solutions roles — or just a conversation
            about shipping LLM systems into real operations.
          </p>

          <ul className={styles.channels}>
            <li>
              <a href="mailto:jaesongu@gmail.com" className={styles.channel}>
                <Mail size={18} aria-hidden="true" />
                <span>jaesongu@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+16262778952" className={styles.channel}>
                <Phone size={18} aria-hidden="true" />
                <span>(626) 277-8952</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jingchenggu/"
                target="_blank"
                rel="noopener"
                className={styles.channel}
              >
                <Linkedin size={18} aria-hidden="true" />
                <span>linkedin.com/in/jingchenggu</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JingChengGu"
                target="_blank"
                rel="noopener"
                className={styles.channel}
              >
                <Github size={18} aria-hidden="true" />
                <span>github.com/JingChengGu</span>
              </a>
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={6} required />
          </div>

          <button type="submit" className={styles.submit} disabled={status === 'loading'}>
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className={styles.spinner} aria-hidden="true" />
                Sending…
              </>
            ) : (
              'Send message'
            )}
          </button>

          <div
            className={styles.status}
            role={status === 'error' ? 'alert' : 'status'}
            aria-live={status === 'error' ? 'assertive' : 'polite'}
          >
            {status === 'success' && (
              <p className={styles.success}>
                <CheckCircle2 size={18} aria-hidden="true" />
                Your message has been sent. Thank you — I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.error}>
                <AlertCircle size={18} aria-hidden="true" />
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
