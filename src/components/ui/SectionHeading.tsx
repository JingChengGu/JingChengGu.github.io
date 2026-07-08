import styles from './SectionHeading.module.css'

interface Props {
  eyebrow: string
  title: string
  lede?: string
}

export default function SectionHeading({ eyebrow, title, lede }: Props) {
  return (
    <div className={styles.wrap}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </div>
  )
}
