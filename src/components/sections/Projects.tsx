import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          title="Projects"
          lede="Problem in, working system out. Each of these ran (or runs) in front of real users — not in a notebook."
        />

        <Reveal.Group className={styles.bento} stagger={0.07}>
          {projects.map((project) => (
            <Reveal.Item
              key={project.title}
              className={styles.cell}
              style={{ '--col-span': project.colSpan } as React.CSSProperties}
            >
              <ProjectCard project={project} />
            </Reveal.Item>
          ))}
        </Reveal.Group>
      </div>
    </section>
  )
}
