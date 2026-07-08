import type { Stat } from '../../data/stats'
import styles from './StatCard.module.css'

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className={styles.card}>
      <span className={styles.value}>{stat.value}</span>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.detail}>{stat.detail}</span>
    </div>
  )
}
