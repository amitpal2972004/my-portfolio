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
    tags: ['Wazuh', 'Elastic Stack', 'Sysmon', 'Wireshark'],
  },
  {
    icon: 'fas fa-bug',
    label: 'Attack Tools',
    color: 'soc',
    tags: ['Kali Linux', 'Nmap', 'Metasploit'],
  },
  {
    icon: 'fas fa-shield-halved',
    label: 'SOC Platforms',
    color: 'soc',
    tags: ['TheHive ', 'VirtualBox', 'Ubuntu Server'],
  },
  {
    icon: 'fas fa-magnifying-glass-chart',
    label: 'Frameworks & Methods',
    color: 'neutral',
    tags: ['MITRE ATT&CK', 'Incident Response', 'Log Analysis', 'Alert Triage'],
  },
]

const SOC_CERTS = [
  { icon: '🛡️', name: 'SOC Home Lab — Wazuh & TheHive', org: 'Self-Built · Completed March 2026', year: 'March 2026', color: 'soc' },
  { icon: '⚔️', name: 'Introduction to cybersecurity', org: 'Cisco Networking Academy', year: '2026', color: 'soc' },
  { icon: '🛡️', name: 'Cyber Security-SOC and SIEM (SPLUNK & ELK) for Beginners', org: 'Udemy', year: '2026', color: 'soc' },
  { icon: '📋', name: 'Tata Group - Cybersecurity Analyst Job Simulation', org: 'Forage', year: '2024', color: 'soc' },
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
                Cybersecurity Enthusiast · Open to Security Roles
              </div>

              <h1 className="hero-name">Amit Pal</h1>
              <span className="hero-role soc">Cybersecurity Analyst & Researcher</span>

              <p className="hero-bio">
               A{' '}
<strong style={{ color: '#f1f5f9', fontWeight: 600 }}>Frontend Developer</strong>{' '}
who fell in love with cybersecurity. I built hands-on labs covering{' '}
<strong style={{ color: '#c084fc', fontWeight: 600 }}>
  SIEM detection, phishing forensics, network traffic analysis, and log investigation
</strong>{' '}
— because the best way to learn security is to attack, detect, and document it yourself.
My engineering background means I understand how systems are built — and how they break.




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
  I'm Amit Pal — a frontend developer with 10 months of professional experience
  who has been building cybersecurity skills in parallel. Security isn't a pivot
  for me — it's something I've been genuinely obsessed with. I started with a
  SOC home lab and kept going: phishing forensics, Splunk log analysis, network
  traffic investigation with Wireshark. Every project taught me something real.
</p>
<p style={{ marginTop: '0.9rem' }}>
  My development background is a genuine advantage here — I understand web
  application architecture, how APIs work, client-side attack surfaces like XSS
  and CSRF, and how modern apps are structured and deployed. That makes me a
  stronger analyst, not just a tool operator.
</p>
<p style={{ marginTop: '0.9rem' }}>
  I'm open to any cybersecurity role — SOC analyst, security intern, threat
  analyst, junior penetration tester, or any position where I can contribute,
  learn fast, and grow into a strong security professional.
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
                    <div className="timeline-title">Targeting Cybersecurity Roles</div>
<div className="timeline-meta soc">Goal · Open to any security opportunity</div>
<div className="timeline-desc">
  Actively seeking internships, SOC analyst roles, security analyst positions,
  or any cybersecurity role where I can contribute and grow. Open to freelance
  security project work too.
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
          {/* <motion.div
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
             My cybersecurity projects span SIEM detection (Wazuh), phishing email forensics,
Splunk log analysis, and Wireshark network investigation — all completed while
working full-time as a frontend developer. I am actively working towards{' '}
<strong style={{ color: '#c084fc' }}>CompTIA Security+</strong> and{' '}
<strong style={{ color: '#c084fc' }}>Blue Team Labs Online (BTL1)</strong>. I am
open to security internships, SOC analyst roles, threat analyst positions, and
any cybersecurity opportunity where I can learn and prove my value.
            </p>
          </motion.div> */}
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
  Open to Cybersecurity Internships & Security Roles
</div>
                </div>
              </div>
            </div>

            <div className="hire-box soc">
              <div className="hire-status soc">
                <div className="hire-status-dot" />
                Open to Cybersecurity Roles
              </div>
             <h3>Hire Me in Cybersecurity</h3>
<p>
  I've built hands-on projects across SIEM detection, phishing analysis, Splunk
  log investigation, and network forensics — all self-driven, all documented. I
  understand how web systems are built and how attackers exploit them. Ready to
  contribute from day one.
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
                {/* <motion.button
                  className="btn btn-soc-outline"
                  onClick={() => setSelectedProject(socProjects[0])}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <i className="fas fa-file-shield" /> View SOC Report
                </motion.button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────── FOOTER ────── */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-name">Amit Pal</div>
          <div className="footer-sub">SOC Analyst Candidate · India</div>
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