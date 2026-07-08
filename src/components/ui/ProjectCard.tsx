import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import { useTilt } from '../../hooks/useTilt'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }: { project: Project }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt<HTMLElement>()

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {project.image && (
        <div className={styles.imageWrap}>
          <img src={project.image} alt="" className={styles.image} loading="lazy" />
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.top}>
          <span className={styles.year}>{project.year}</span>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener"
              className={styles.repoLink}
              aria-label={`${project.title} GitHub repository`}
            >
              <ArrowUpRight size={16} />
              <span>Repo</span>
            </a>
          )}
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>

        <dl className={styles.caseStudy}>
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>

        <ul className={styles.tags} aria-label="Tech stack">
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
