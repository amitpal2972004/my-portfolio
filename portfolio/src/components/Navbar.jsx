import { motion } from 'framer-motion'


const NAV_LINKS_FE = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certs', id: 'certs' },
  { label: 'Contact', id: 'contact' },
]

const NAV_LINKS_SOC = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'SOC Labs', id: 'projects' },
  { label: 'Certs', id: 'certs' },
  { label: 'Contact', id: 'contact' },
]

function Navbar({ mode, setMode, theme, toggleTheme }) {
  const isFE = mode === 'frontend'

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = isFE ? NAV_LINKS_FE : NAV_LINKS_SOC

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <div className="nav-logo">
          <span className="nav-logo-name">Amit Pal</span>
          <span className="nav-logo-sub">
            {isFE ? '< Frontend Developer />' : '🔐 Cybersecurity '}
          </span>
        </div>

        {/* Nav links — desktop only */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="nav-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mode Toggle */}
        <div className="nav-toggle">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`toggle-btn ${isFE ? 'fe-active' : ''}`}
            onClick={() => setMode('frontend')}
            aria-label="Frontend Developer mode"
          >
            <i className="fas fa-code" />
            Frontend Dev
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`toggle-btn ${!isFE ? 'soc-active' : ''}`}
            onClick={() => setMode('soc')}
            aria-label="SOC Analyst mode"
          >
            <i className="fas fa-shield-halved" />
            Cybersecurity
          </motion.button>
           <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun" />
            ) : (
              <i className="fas fa-moon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar