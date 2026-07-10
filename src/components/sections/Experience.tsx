import SectionHeading from '../ui/SectionHeading'
import ExperienceItem from '../ui/ExperienceItem'
import Reveal from '../ui/Reveal'
import { experience } from '../../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          title="Experience"
          lede="Every role below ends the same way: something shipped, running, and adopted by the people it was built for."
        />

        <Reveal.Group className={styles.list} stagger={0.08} direction="left">
          {experience.map((entry) => (
            <Reveal.Item key={entry.company}>
              <ExperienceItem entry={entry} />
            </Reveal.Item>
          ))}
        </Reveal.Group>
      </div>
    </section>
  )
}
