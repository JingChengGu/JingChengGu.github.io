import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { education } from '../../data/experience'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title="Education" />

        <Reveal.Group>
          <Reveal.Item>
            <article className={styles.card}>
              <img
                src={education.logo}
                alt=""
                className={styles.logo}
                width={48}
                height={48}
                loading="lazy"
              />
              <div>
                <h3 className={styles.school}>{education.school}</h3>
                <p className={styles.degree}>{education.degree}</p>
                {education.details.map((detail) => (
                  <p key={detail} className={styles.detail}>
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
