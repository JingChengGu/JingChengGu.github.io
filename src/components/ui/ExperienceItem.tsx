import type { ExperienceEntry } from '../../data/experience'
import styles from './ExperienceItem.module.css'

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className={styles.item}>
      <div className={styles.meta}>
        {entry.logo ? (
          <img src={entry.logo} alt="" className={styles.logo} width={48} height={48} loading="lazy" />
        ) : (
          <span className={styles.logoFallback} aria-hidden="true">
            {entry.company[0]}
          </span>
        )}
        <div>
          <h3 className={styles.role}>{entry.role}</h3>
          <p className={styles.company}>
            {entry.company} · {entry.location}
          </p>
          <p className={styles.dates}>{entry.dates}</p>
        </div>
      </div>
      <ul className={styles.bullets}>
        {entry.bullets.map((bullet, i) => (
          <li key={i} className={styles.bullet}>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}
