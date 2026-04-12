import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Popup from '../components/Popup'
import { socProjects } from '../data/socProjects'
import avatarImage from '../assets/imag1.jpg';

const SOC_SKILLS = [
  {
    icon: 'fas fa-satellite-dish',
    label: 'SIEM & Detection',
    color: 'soc',
    tags: ['Wazuh v4.7.5', 'Elastic Stack', 'Kibana', 'Sigma Rules', 'Sysmon'],
  },
  {
    icon: 'fas fa-bug',
    label: 'Attack Tools (Lab)',
    color: 'soc',
    tags: ['Kali Linux', 'Nmap', 'Hydra', 'Mimikatz', 'Metasploit'],
  },
  {
    icon: 'fas fa-shield-halved',
    label: 'SOC Platforms',
    color: 'soc',
    tags: ['TheHive 5', 'Cortex', 'MISP', 'VirtualBox', 'Ubuntu Server'],
  },
  {
    icon: 'fas fa-magnifying-glass-chart',
    label: 'Frameworks & Methods',
    color: 'neutral',
    tags: ['MITRE ATT&CK', 'Incident Response', 'Log Analysis', 'Threat Hunting', 'Alert Triage'],
  },
]

const SOC_CERTS = [
  { icon: '🛡️', name: 'SOC Home Lab — Wazuh & TheHive', org: 'Self-Built · Completed March 2026', year: 'March 2026', color: 'soc' },
  { icon: '⚔️', name: 'MITRE ATT&CK Applied', org: 'Lab Simulations — T1003, T1110, T1046', year: '2026', color: 'soc' },
  { icon: '🔴', name: 'Incident Report IR-2026-001', org: 'Mimikatz CRITICAL — Documented & Resolved', year: 'March 2026', color: 'soc' },
  { icon: '📋', name: 'CompTIA Security+ (Studying)', org: 'Planned · Self-Study', year: 'In Progress', color: 'soc' },
]

function SectionDivider() {
  return <div className="section-divider" />
}

function SOC() {
  const [selectedProject, setSelectedProject] = useState(null)

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
              <div className="hero-eyebrow soc">
                <span className="hero-eyebrow-dot" />
                First SOC Project · Open to SOC Analyst L1 Roles
              </div>

              <h1 className="hero-name">Amit Pal</h1>
              <span className="hero-role soc">SOC Analyst L1 Candidate</span>

              <p className="hero-bio">
                Currently a{' '}
                <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>Frontend Developer</strong>{' '}
                actively transitioning into cybersecurity. Built a complete{' '}
                <strong style={{ color: '#c084fc', fontWeight: 600 }}>
                  SOC Home Lab
                </strong>{' '}
                — 4 VMs, Wazuh SIEM, TheHive case management, real attack simulations including
                Mimikatz CRITICAL detection. My frontend engineering background gives me deep
                understanding of web application security threats.




              </p>

              {/* Stats */}
              {/* <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-val soc">4</div>
                  <div className="hero-stat-label">VMs Built</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val soc">3</div>
                  <div className="hero-stat-label">Attacks Found</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val danger">CRIT</div>
                  <div className="hero-stat-label">Mimikatz</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-val soc">100%</div>
                  <div className="hero-stat-label">Detect Rate</div>
                </div>
              </div> */}

              <div className="hero-cta">
                {/* <motion.button
                  className="btn btn-soc-primary"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-shield-halved" /> View SOC Lab
                </motion.button>
                <motion.button
                  className="btn btn-soc-outline"
                  onClick={() => setSelectedProject(socProjects[0])}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-file-shield" /> View Incident Report
                </motion.button> */}
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
                <div className="avatar-badge soc">SOC Analyst </div>
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
            <div className="section-eyebrow soc">
              <i className="fas fa-user-shield" /> About
            </div>
            <h2 className="section-title">Career Transition Story</h2>
            <p className="section-desc">
              From building frontends to defending them — my path into cybersecurity.
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="about-card-title">
                <div className="about-card-icon soc"><i className="fas fa-crosshairs" /></div>
                Why Cybersecurity?
              </div>
              <p>
                I'm Amit Pal — a frontend developer with 10 months of professional experience.
                I've always been curious about how the systems I build can be attacked and
                defended. That curiosity led me to build this SOC Home Lab as my first
                cybersecurity project.
              </p>
              <p style={{ marginTop: '0.9rem' }}>
                My frontend engineering background is a real advantage in cybersecurity — I
                understand web application architecture, client-side attack vectors like XSS and
                CSRF, API security, and how modern web apps are structured. I want to use that
                knowledge on the defensive side.
              </p>
              <p style={{ marginTop: '0.9rem' }}>
                I'm actively seeking SOC Analyst L1 roles and freelance cybersecurity work. I
                will work hard to prove myself and grow into a strong security professional.
              </p>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <div className="about-card-title">
                <div className="about-card-icon soc"><i className="fas fa-route" /></div>
                Transition Timeline
              </div>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot soc"><i className="fas fa-circle" style={{ fontSize: '5px' }} /></div>
                  <div className="timeline-body">
                    <div className="timeline-title">SOC Home Lab — First Project</div>
                    <div className="timeline-meta soc">March 2026 · Wazuh + TheHive + Kali</div>
                    <div className="timeline-desc">
                      Built complete 4-VM SOC. Detected Mimikatz (CRITICAL), Brute Force, and Nmap
                      scan. Wrote incident report IR-2026-001. 100% detection rate.
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot fe"><i className="fas fa-circle" style={{ fontSize: '5px' }} /></div>
                  <div className="timeline-body">
                    <div className="timeline-title">Frontend Developer (Current Job)</div>
                    <div className="timeline-meta fe">4 months · React.js · Production Apps</div>
                    <div className="timeline-desc">
                      Still working as a frontend developer while studying cybersecurity and
                      building lab projects in parallel.
                    </div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot soc"><i className="fas fa-circle" style={{ fontSize: '5px' }} /></div>
                  <div className="timeline-body">
                    <div className="timeline-title">Targeting SOC Analyst L1</div>
                    <div className="timeline-meta soc">Goal · Open to opportunities</div>
                    <div className="timeline-desc">
                      Actively seeking first cybersecurity role. Also open to freelance SOC work,
                      penetration testing assistance, and security advisory roles.
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
            <div className="section-eyebrow soc">
              <i className="fas fa-layer-group" /> Arsenal
            </div>
            <h2 className="section-title">Cybersecurity Skills</h2>
            <p className="section-desc">
              Tools and frameworks applied in my SOC Home Lab and ongoing learning.
            </p>
          </motion.div>

          <motion.div
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {SOC_SKILLS.map((cat) => (
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
            <div className="section-eyebrow soc">
              <i className="fas fa-flask" /> Security Labs
            </div>
            <h2 className="section-title">SOC Projects & Labs</h2>
            <p className="section-desc">
              Hands-on labs with real attack simulations, documented detection, and incident response.
              Click any card to view the full report.
            </p>
          </motion.div>

          <div className="projects-grid">
            {socProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                mode="soc"
                index={i}
                onClick={() => setSelectedProject(project)}
              />
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
            <div className="section-eyebrow soc">
              <i className="fas fa-certificate" /> Credentials
            </div>
            <h2 className="section-title">SOC Certifications & Labs</h2>
          </motion.div>

          <div className="certs-grid">
            {SOC_CERTS.map((c, i) => (
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

          {/* Note box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(168,85,247,0.05)',
              border: '1px solid rgba(168,85,247,0.18)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--soc-accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              📌 Note for Recruiters
            </div>
            <p style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This SOC Home Lab (Wazuh + TheHive + real Mimikatz / Brute Force / Nmap attacks) is
              my first cybersecurity project, completed March 2026. I am actively working
              towards <strong style={{ color: '#c084fc' }}>CompTIA Security+</strong> and{' '}
              <strong style={{ color: '#c084fc' }}>Blue Team Labs Online (BTL1)</strong>. I am
              open to entry-level SOC Analyst, junior threat hunter, and freelance security
              project opportunities. I'm a fast learner and will work hard to prove my value.
            </p>
          </motion.div>
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
            <div className="section-eyebrow soc">
              <i className="fas fa-envelope" /> Contact
            </div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-desc">
              Actively seeking SOC Analyst L1 positions, freelance cybersecurity work, and
              security mentorship.
            </p>
          </motion.div>

          <div className="contact-grid">
            <div>
              <a href="mailto:amitpal2972004@gmail.com" className="contact-item">
                <div className="contact-icon soc"><i className="fas fa-envelope" /></div>
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
                <div className="contact-icon soc"><i className="fab fa-github" /></div>
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-val">github.com/amitpal2972004</div>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-icon soc"><i className="fas fa-location-dot" /></div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-val">India · Open to Remote & On-site</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon soc"><i className="fas fa-shield-halved" /></div>
                <div>
                  <div className="contact-label">Status</div>
                  <div className="contact-val" style={{ color: '#c084fc' }}>
                    Actively Seeking SOC Analyst L1 Roles
                  </div>
                </div>
              </div>
            </div>

            <div className="hire-box soc">
              <div className="hire-status soc">
                <div className="hire-status-dot" />
                Open to SOC Analyst Roles
              </div>
              <h3>Hire Me as SOC Analyst</h3>
              <p>
                I built a complete SOC Home Lab, detected real attacks with Wazuh SIEM, wrote
                formal incident reports, and mapped everything to MITRE ATT&CK. I'm a frontend
                developer who understands how web apps work — and how they get attacked.
              </p>
              <div className="hire-box-btns">
                <motion.a
                  href="mailto:amitpal2972004@gmail.com"
                  className="btn btn-soc-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-paper-plane" /> Send Email
                </motion.a>
                <motion.button
                  className="btn btn-soc-outline"
                  onClick={() => setSelectedProject(socProjects[0])}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-file-shield" /> View SOC Report
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── FOOTER ────── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-name">Amit Pal</div>
          <div className="footer-sub">SOC Analyst L1 Candidate · India</div>
          <div className="footer-mono">Wazuh · TheHive · Kali Linux · MITRE ATT&CK · March 2026</div>
        </div>
      </footer>

      {/* ────── POPUP MODAL ────── */}
      {selectedProject && (
        <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}

export default SOC