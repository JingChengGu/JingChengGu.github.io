import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../ui/SkillCard'
import Reveal from '../ui/Reveal'
import { skills } from '../../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the deployments."
          lede="Weighted toward what forward deployed work actually demands: integration surface area, agent configuration, and the infrastructure to ship it."
        />

        <Reveal.Group className={styles.bento} stagger={0.05} direction="right">
          {skills.map((category) => (
            <Reveal.Item
              key={category.title}
              className={styles.cell}
              style={{ '--col-span': category.colSpan } as React.CSSProperties}
            >
              <SkillCard category={category} />
            </Reveal.Item>
          ))}
        </Reveal.Group>
      </div>
    </section>
  )
}
