import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Frontend from './pages/Frontend'
import SOC from './pages/SOC'
import './App.css'

function App() {
  const [mode, setMode] = useState(
    () => localStorage.getItem('portfolioMode') || 'frontend'
  )
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolioTheme') || 'dark'
  )

  useEffect(() => {
    localStorage.setItem('portfolioMode', mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem('portfolioTheme', theme)
    if (theme === 'light') {
      document.body.classList.add('theme-light')
    } else {
      document.body.classList.remove('theme-light')
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const isFE = mode === 'frontend'

  return (
    <div className={`app ${isFE ? 'mode-fe' : 'mode-soc'}`}>
      <div className="bg-effects">
        <div className="bg-grid" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar mode={mode} setMode={setMode} theme={theme} toggleTheme={toggleTheme} />

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
        >
          {isFE ? <Frontend theme={theme} /> : <SOC theme={theme} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App