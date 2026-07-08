import SectionHeading from '../ui/SectionHeading'
import StatCard from '../ui/StatCard'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/stats'
import pfp from '../../assets/images/jason-grad.jpg'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="Embedded, technical, and fast." />

        <div className={styles.grid}>
          <div className={styles.bio}>
            <img
              src={pfp}
              alt="Jason Gu"
              className={styles.photo}
              width={112}
              height={112}
              loading="lazy"
            />
            <p className={styles.paragraph}>
              I&rsquo;m a forward deployed engineer with production experience designing and
              delivering AI agent integrations, low-code automation workflows, and
              cross-functional technical deployments for SMB clients. My default operating mode:
              sit with the customer, translate an ambiguous business requirement into a scoped
              technical solution, and ship it — then measure adoption, find the edge cases, and
              iterate against real interaction data.
            </p>
            <p className={styles.paragraph}>
              Before the AI agent work, I managed outbound call center operations across 50+
              agents in multiple countries — owning call workflows, dispositions, and performance
              tracking. That operational context shapes every deployment I run: I build for the
              people who have to use the system on Monday morning, not for the demo.
            </p>
          </div>

          <Reveal.Group className={styles.stats}>
            {stats.map((stat) => (
              <Reveal.Item key={stat.label}>
                <StatCard stat={stat} />
              </Reveal.Item>
            ))}
          </Reveal.Group>
        </div>
      </div>
    </section>
  )
}
