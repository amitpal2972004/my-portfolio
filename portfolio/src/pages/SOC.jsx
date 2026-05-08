import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Popup from '../components/Popup'
import { socProjects } from '../data/socProjects'
import avatarImage from '../assets/profilepicture.jpeg';
import splunkCert from '../assets/Splunk_Intro_Cert.pdf';

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
  { icon: '📊', name: 'Intro to Splunk (eLearning)', org: 'Splunk', year: 'April 2026', url: splunkCert, color: 'soc' },
  { icon: '🛡️', name: 'SOC Home Lab — Wazuh & TheHive', org: 'Self-Built · Completed March 2026', year: 'March 2026', color: 'soc' },
  { icon: '⚔️', name: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy', year: 'Feb 2026', url: 'https://www.credly.com/badges/bbacbb17-3ee3-488e-87a9-a6909f4b85d6/whatsapp', color: 'soc' },
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

      <section className="section-padding">
        <div className="container">
          <div className="hero-section">

            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="hero-eyebrow soc">
                <span className="hero-eyebrow-dot" />
                Aspiring SOC Analyst · Open to Security Opportunities
              </div>

              <h1 className="hero-name">Amit Pal</h1>
              <span className="hero-role soc">Cybersecurity Analyst & Researcher</span>

              <p className="hero-bio">
                A{' '}
                <strong style={{ color: '#f1f5f9', fontWeight: 600 }}>Frontend Developer</strong>{' '}
                with a strong technical foundation, now specializing in Security Operations and
                Threat Detection. I have developed hands-on proficiency in{' '}
                <strong style={{ color: '#c084fc', fontWeight: 600 }}>
                  SIEM implementation, phishing forensics, network traffic analysis, and log
                  investigation
                </strong>{' '}
                through rigorous lab environments. My background in software development
                provides a unique perspective on application security and system
                vulnerabilities—bridging the gap between building resilient systems and
                defending them.
              </p>



              <div className="hero-cta">

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
                I am Amit Pal—a Frontend Developer with 10 months of professional experience
                who has been parallelly cultivating a deep expertise in cybersecurity. For me,
                security is more than a career pivot; it is a discipline I have pursued with
                dedicated focus, starting with a comprehensive SOC home lab and expanding into
                areas like phishing forensics, Splunk log analysis, and network traffic
                investigation with Wireshark.
              </p>
              <p style={{ marginTop: '0.9rem' }}>
                My development background offers a distinct advantage in this field. By
                understanding web application architecture, API integrations, and client-side
                attack surfaces (such as XSS and CSRF), I can approach security analysis with a
                comprehensive understanding of how modern applications are structured,
                deployed, and potentially exploited.
              </p>
              <p style={{ marginTop: '0.9rem' }}>
                I am currently seeking opportunities to leverage my skills in a dedicated
                security role—whether as a SOC Analyst, Security Intern, or Threat Analyst. I am
                committed to continuous learning and am eager to contribute to a proactive
                security team while growing into a high-impact security professional.
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
                      Engineered a comprehensive 4-VM SOC environment. Successfully identified and
                      mitigated critical threats including Mimikatz credential dumping, brute force
                      attacks, and reconnaissance scans. Authored detailed incident report IR-2026-001.
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
<div className="timeline-meta soc">Goal · Strategic Security Transition</div>
<div className="timeline-desc">
  Actively pursuing opportunities to apply my technical background and security
  training in a professional environment. Open to SOC Analyst roles, Security
  Internships, and junior-level security positions where I can contribute to
  organizational defense.
</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />


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
            {SOC_CERTS.map((c, i) => {
              const CardContent = (
                <motion.div
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
              );

              return c.url ? (
                <a key={i} href={c.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  {CardContent}
                </a>
              ) : (
                <div key={i}>{CardContent}</div>
              );
            })}
          </div>


        </div>
      </section>

      <SectionDivider />


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
  I have successfully executed hands-on projects across SIEM detection, phishing
  analysis, Splunk log investigation, and network forensics—all documented with
  a focus on actionable insights. My development expertise allows me to
  understand the "how" behind system vulnerabilities, making me a more effective
  defender. I am ready to bring this combined skill set to your security team.
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

              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="site-footer">
        <div className="container">
          <div className="footer-name">Amit Pal</div>
          <div className="footer-sub">Aspiring SOC Analyst · Cybersecurity & Frontend Engineering</div>
          <div className="footer-mono">Wazuh · TheHive · Kali Linux · MITRE ATT&CK · March 2026</div>
        </div>
      </footer>


      {selectedProject && (
        <Popup project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}

export default SOC