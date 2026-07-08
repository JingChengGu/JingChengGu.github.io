import type { SkillCategory } from '../../data/skills'
import styles from './SkillCard.module.css'

export default function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon
  return (
    <div className={`${styles.card} ${category.featured ? styles.featured : ''}`}>
      <div className={styles.header}>
        <span className={styles.iconWrap}>
          <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className={styles.title}>{category.title}</h3>
      </div>
      <ul className={styles.items}>
        {category.items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
