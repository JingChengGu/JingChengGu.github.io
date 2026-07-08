import SectionHeading from '../ui/SectionHeading'
import ExperienceItem from '../ui/ExperienceItem'
import Reveal from '../ui/Reveal'
import { experience, education } from '../../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Production systems, real operations."
          lede="Every role below ends the same way: something shipped, running, and adopted by the people it was built for."
        />

        <Reveal.Group className={styles.list} stagger={0.08}>
          {experience.map((entry) => (
            <Reveal.Item key={entry.company}>
              <ExperienceItem entry={entry} />
            </Reveal.Item>
          ))}

          <Reveal.Item>
            <article className={styles.education}>
              <img
                src={education.logo}
                alt=""
                className={styles.eduLogo}
                width={48}
                height={48}
                loading="lazy"
              />
              <div>
                <h3 className={styles.eduSchool}>{education.school}</h3>
                <p className={styles.eduDegree}>{education.degree}</p>
                {education.details.map((detail) => (
                  <p key={detail} className={styles.eduDetail}>
                    {detail}
                  </p>
                ))}
              </div>
            </article>
          </Reveal.Item>
        </Reveal.Group>
      </div>
    </section>
  )
}
