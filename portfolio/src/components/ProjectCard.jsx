import { motion } from 'framer-motion'

/**
 * ProjectCard — works for both Frontend and SOC modes.
 *
 * Props:
 *   project  — project data object
 *   mode     — 'frontend' | 'soc'
 *   onClick  — optional click handler (used for SOC popup)
 *   index    — animation stagger index
 */
function ProjectCard({ project, mode, onClick, index = 0 }) {
  const isSoc = mode === 'soc'

  return (
    <motion.div
      className={`project-card ${isSoc ? 'soc-card' : 'fe-card'}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: isSoc ? -5 : -4 }}
      onClick={onClick}
    >
      {/* Icon */}
      <div className={`card-icon-wrap ${isSoc ? 'soc' : 'fe'}`}>
        {project.icon}
      </div>

      {/* Title */}
      <h3 className="card-title">{project.title}</h3>

      {/* Description */}
      <p className="card-desc">{project.description}</p>

      {/* Tech / Tools tags */}
      <div className="card-tags">
        {(project.tech || project.tools || []).slice(0, 5).map((tag) => (
          <span key={tag} className={`skill-tag ${isSoc ? 'soc' : 'fe'}`}>
            {tag}
          </span>
        ))}
      </div>

      {/* Links — FE only */}
      {!isSoc && (
        <div className="card-links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link fe"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-arrow-up-right-from-square" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fab fa-github" />
              GitHub
            </a>
          )}
        </div>
      )}

      {/* SOC click hint */}
      {isSoc && (
        <div className="soc-hint">
          <i className="fas fa-file-shield" />
          Click to view full SOC report & incident details →
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard