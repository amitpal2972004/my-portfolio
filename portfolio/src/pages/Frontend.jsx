import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { frontendProjects } from '../data/frontendProjects'
import avatarImage from '../assets/imag1.jpg';

const FE_SKILLS = [
  {
    icon: 'fas fa-atom',
    label: 'Frontend Core',
    color: 'fe',
    tags: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    icon: 'fas fa-paintbrush',
    label: 'Styling & UI',
    color: 'fe',
    tags: ['Tailwind CSS', 'Flexbox', 'CSS Grid', 'Responsive Design', 'Glassmorphism'],
  },
  {
    icon: 'fas fa-plug',
    label: 'APIs & Tools',
    color: 'neutral',
    tags: ['REST APIs', 'Axios', 'Fetch API', 'localStorage', 'Context API'],
  },
  {
    icon: 'fas fa-wrench',
    label: 'Dev Tools',
    color: 'neutral',
    tags: ['Git', 'GitHub', 'Vite', 'VS Code', 'Chrome DevTools'],
  },
]

const FE_CERTS = [
  { icon: '⚛️', name: 'React.js Development', org: 'Internship — Live Project Experience', year: '2024', color: 'fe' },
  { icon: '💼', name: 'Frontend Developer (Job)', org: 'Current Role — Production Apps', year: '2024–2025', color: 'fe' },
  { icon: '🌐', name: 'Web Development Fundamentals', org: 'HTML5 · CSS3 · JavaScript', year: '2024', color: 'fe' },
  { icon: '📱', name: 'Responsive UI Design', org: 'Tailwind CSS · Flexbox · Grid', year: '2024', color: 'fe' },
]

function SectionDivider() {
  return <div className="section-divider" />
}

function Frontend() {
  return (
    <div className="page-wrapper">
      {/* ────── HERO ────── */}
      <section className="section-padding">
        <div className="container">
          <div className="hero-section">
            {/* Left */}
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="hero-eyebrow fe">
                <span className="hero-eyebrow-dot" />
                Currently Working · Frontend Developer
              </div>

              <h1 className="hero-name">Amit Pal</h1>
              <span className="hero-role fe">Frontend Developer</span>

              <p className="hero-bio">
                React.js developer with{' '}
                <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>
                  6 months internship + 4 months full-time
                </strong>{' '}
                experience building responsive, production-grade web applications. Shipped 5+ live
                projects with real users. Currently exploring cybersecurity and targeting a career
                switch into SOC Analysis.
              </p>

              {/* Stats */}
              {/* <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-val fe">5+</div>
                  <div className="hero-stat-label">Live Projects</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val fe">6 mo</div>
                  <div className="hero-stat-label">Internship</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val fe">4 mo</div>
                  <div className="hero-stat-label">Job Exp.</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val fe">10+</div>
                  <div className="hero-stat-label">Total Projects</div>
                </div>
              </div> */}

              <div className="hero-cta">
                <motion.a
                  href="https://github.com/amitpal2972004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-fe-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fab fa-github" /> GitHub Profile
                </motion.a>
                <motion.button
                  className="btn btn-fe-outline"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-folder-open" /> View Projects
                </motion.button>
                <motion.a
                  href="mailto:amitpal2972004@gmail.com"
                  className="btn btn-ghost"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-envelope" /> Hire Me
                </motion.a>
              </div>
            </motion.div>

            {/* Right — Avatar */}
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <div style={{ position: 'relative' }}>
                <div className="avatar-card">
                  <img 
  className="avatar-img"
  src={avatarImage}
  alt="Amit Pal"
/>
                </div>
                <div className="avatar-badge fe">
                   Frontend Developer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ────── ABOUT ────── */}
      <section className="section-padding" id="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-eyebrow fe">
              <i className="fas fa-user" /> About
            </div>
            <h2 className="section-title">My Story & Experience</h2>
            <p className="section-desc">
              10 months of hands-on frontend development with real-world projects and users.
            </p>
          </motion.div>

          <div className="about-grid">
            {/* Story */}
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="about-card-title">
                <div className="about-card-icon fe"><i className="fas fa-code" /></div>
                Who I Am
              </div>
              <p>
                I'm Amit Pal, a frontend developer from India with 10 months of professional
                experience — 6 months as an intern and 4 months in a full-time role. I started
                my journey with vanilla HTML/CSS/JS before moving into React.js and the modern
                frontend ecosystem.
              </p>
              <p style={{ marginTop: '0.9rem' }}>
                I love building clean, fast UIs with great user experiences. Every project I
                build teaches me something new about performance, accessibility, and design. I'm
                now actively transitioning into cybersecurity, particularly SOC Analysis, while
                continuing to grow as a developer.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div className="about-card-title">
                <div className="about-card-icon fe"><i className="fas fa-timeline" /></div>
                Experience Timeline
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot fe"><i className="fas fa-circle" style={{ fontSize: '5px' }} /></div>
                  <div className="timeline-body">
                    <div className="timeline-title">Frontend Developer — Job</div>
                    <div className="timeline-meta fe">Current · 4 months · React.js</div>
                    <div className="timeline-desc">
                      Building production web applications with React.js, Tailwind CSS, and REST API
                      integrations. Working on real client-facing products.
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot fe"><i className="fas fa-circle" style={{ fontSize: '5px' }} /></div>
                  <div className="timeline-body">
                    <div className="timeline-title">Frontend Intern</div>
                    <div className="timeline-meta fe">6 months · HTML · CSS · JavaScript · React</div>
                    <div className="timeline-desc">
                      Built Weather App, GIF Search, Netflix Clone, and URL Shortener as part of
                      internship. Learned responsive design and API integration.
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot neutral"><i className="fas fa-circle" style={{ fontSize: '5px' }} /></div>
                  <div className="timeline-body">
                    <div className="timeline-title">Self-learning & Personal Projects</div>
                    <div className="timeline-meta">Ongoing · Tailwind CSS · React Ecosystem</div>
                    <div className="timeline-desc">
                      Employee Management System, exploring Framer Motion, Context API patterns, and
                      now studying for cybersecurity transition.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ────── SKILLS ────── */}
      <section className="section-padding" id="skills">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-eyebrow fe">
              <i className="fas fa-layer-group" /> Tech Stack
            </div>
            <h2 className="section-title">Frontend Skills</h2>
            <p className="section-desc">Tools and technologies I use to build modern web apps.</p>
          </motion.div>

          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {FE_SKILLS.map((cat) => (
              <div key={cat.label} className="skill-category">
                <div className="skill-cat-header">
                  <div className={`skill-cat-icon ${cat.color}`}>
                    <i className={cat.icon} />
                  </div>
                  <span className={`skill-cat-name ${cat.color}`}>{cat.label}</span>
                </div>
                <div className="skill-tags">
                  {cat.tags.map((t) => (
                    <span key={t} className={`skill-tag ${cat.color}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ────── PROJECTS ────── */}
      <section className="section-padding" id="projects">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-eyebrow fe">
              <i className="fas fa-folder-open" /> Portfolio
            </div>
            <h2 className="section-title">Frontend Projects</h2>
            <p className="section-desc">
              5 live-deployed projects built during my internship and job — all with real users.
            </p>
          </motion.div>

          <div className="projects-grid">
            {frontendProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} mode="frontend" index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ────── CERTS ────── */}
      <section className="section-padding" id="certs">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-eyebrow fe">
              <i className="fas fa-certificate" /> Credentials
            </div>
            <h2 className="section-title">Experience & Skills Earned</h2>
          </motion.div>
          <div className="certs-grid">
            {FE_CERTS.map((c, i) => (
              <motion.div
                key={i}
                className={`cert-card ${c.color}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className={`cert-icon ${c.color}`}>{c.icon}</div>
                <div className="cert-info">
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.org}</div>
                  <div className="cert-year">{c.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ────── CONTACT ────── */}
      <section className="section-padding" id="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-eyebrow fe">
              <i className="fas fa-envelope" /> Contact
            </div>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-desc">
              Open to new frontend opportunities, freelance projects, and collaborations.
            </p>
          </motion.div>

          <div className="contact-grid">
            <div>
              <a href="mailto:amitpal2972004@gmail.com" className="contact-item">
                <div className="contact-icon fe"><i className="fas fa-envelope" /></div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-val">amitpal2972004@gmail.com</div>
                </div>
              </a>
              <a
                href="https://github.com/amitpal2972004"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon fe"><i className="fab fa-github" /></div>
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-val">github.com/amitpal2972004</div>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-icon fe"><i className="fas fa-location-dot" /></div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-val">India · Open to Remote & On-site</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon fe"><i className="fas fa-briefcase" /></div>
                <div>
                  <div className="contact-label">Status</div>
                  <div className="contact-val" style={{ color: '#60a5fa' }}>
                    Frontend Dev · Open to New Opportunities
                  </div>
                </div>
              </div>
            </div>

            <div className="hire-box fe">
              <div className="hire-status fe">
                <div className="hire-status-dot" />
                Available for Frontend Roles
              </div>
              <h3>Hire Me as Frontend Developer</h3>
              <p>
                10 months experience with React.js and production web apps. Ready to join your
                team and help build great products. Fast learner, team player, and always
                shipping quality code.
              </p>
              <div className="hire-box-btns">
                <motion.a
                  href="mailto:amitpal2972004@gmail.com"
                  className="btn btn-fe-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-paper-plane" /> Send Email
                </motion.a>
                <motion.a
                  href="https://github.com/amitpal2972004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-fe-outline"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fab fa-github" /> View GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── FOOTER ────── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-name">Amit Pal</div>
          <div className="footer-sub">Frontend Developer · India</div>
          <div className="footer-mono">React.js · JavaScript · Tailwind CSS · Vite · 2025–2026</div>
        </div>
      </footer>
    </div>
  )
}

export default Frontend