import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── helpers ─── */
const SEVERITY_ORDER = { critical: 0, high: 1, medium: 2, low: 3 }

function SeverityBadge({ level }) {
  return (
    <span className={`attack-severity ${level}`}>
      {level?.toUpperCase()}
    </span>
  )
}

/* ─── COLLECTION VIEW — list of all cases ─── */
function CollectionView({ project, onSelectCase }) {
  return (
    <div className="popup-body">
      <div className="popup-section">
        <div className="popup-section-title">
          <i className="fas fa-folder-open" /> Investigation Collection
        </div>
        <p className="popup-text" style={{ marginBottom: '1.25rem' }}>
          {project.description} Click any case to view the full investigation report.
        </p>
      </div>

      <div className="popup-section">
        <div className="popup-section-title">
          <i className="fas fa-list-ul" /> All Cases ({project.cases.length})
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {project.cases.map((c) => {
            const worstSeverity = c.attacks
              ? [...c.attacks].sort((a, b) =>
                  (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9)
                )[0]?.severity
              : null

            return (
              <motion.div
                key={c.id}
                whileHover={{ x: 4 }}
                onClick={() => onSelectCase(c)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.9rem 1.1rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(168,85,247,0.15)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'
                  e.currentTarget.style.background = 'rgba(168,85,247,0.05)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.15)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 38, height: 38, borderRadius: 8, flexShrink: 0,
                  background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem'
                }}>
                  {c.icon}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.88rem', fontWeight: 600,
                    color: 'var(--theme-text-primary)',
                    marginBottom: 2, whiteSpace: 'nowrap',
                    overflow: 'hidden', textOverflow: 'ellipsis'
                  }}>
                    {c.title}
                  </div>
                  <div style={{
                    fontSize: '0.75rem', color: 'var(--theme-text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {c.id} · {c.date}
                  </div>
                </div>

                {/* Right side badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  {worstSeverity && <SeverityBadge level={worstSeverity} />}
                  <span style={{
                    fontSize: '0.68rem', fontFamily: 'var(--font-mono)',
                    padding: '2px 8px', borderRadius: '4px',
                    background: c.status === 'Documented'
                      ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                    color: c.status === 'Documented' ? '#34d399' : '#fbbf24',
                    border: `1px solid ${c.status === 'Documented'
                      ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
                  }}>
                    {c.status}
                  </span>
                  <i className="fas fa-chevron-right"
                    style={{ fontSize: '0.7rem', color: 'var(--theme-text-muted)' }} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Tools used across collection */}
      <div className="popup-section">
        <div className="popup-section-title">
          <i className="fas fa-screwdriver-wrench" /> Tools Used
        </div>
        <div className="skill-tags">
          {(project.tools || []).map(t => (
            <span key={t} className="skill-tag soc">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── CASE DETAIL VIEW — full investigation ─── */
function CaseDetailView({ c, onBack, onDownload }) {
  const sortedAttacks = [...(c.attacks || [])].sort(
    (a, b) => (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9)
  )

  return (
    <div className="popup-body">

      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '6px', color: 'var(--theme-text-muted)',
          padding: '5px 12px', fontSize: '0.78rem', cursor: 'pointer',
          fontFamily: 'var(--font-body)', marginBottom: '1.5rem',
          transition: 'all 0.18s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--soc-accent)'
          e.currentTarget.style.borderColor = 'var(--soc-border)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'var(--theme-text-muted)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
        }}
      >
        <i className="fas fa-arrow-left" /> Back to all cases
      </button>

      {/* Case ID + risk */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700,
          padding: '3px 10px', borderRadius: '4px',
          background: 'rgba(168,85,247,0.12)', color: 'var(--soc-accent)',
          border: '1px solid var(--soc-border)',
        }}>
          {c.id}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700,
          padding: '3px 10px', borderRadius: '4px',
          background: 'rgba(239,68,68,0.12)', color: '#f87171',
          border: '1px solid rgba(239,68,68,0.3)',
        }}>
          RISK: {c.riskLevel}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)', fontFamily: 'var(--font-mono)' }}>
          {c.date}
        </span>
      </div>

      {/* Overview */}
      <div className="popup-section">
        <div className="popup-section-title">
          <i className="fas fa-circle-info" /> Overview
        </div>
        <p className="popup-text" style={{ whiteSpace: 'pre-line' }}>{c.fullDescription}</p>
      </div>

      {/* Email Details */}
      {c.emailDetails && (
        <div className="popup-section">
          <div className="popup-section-title">
            <i className="fas fa-envelope-open-text" /> Email Details
          </div>
          <div className="incident-block">
            {Object.entries(c.emailDetails).map(([k, v]) => (
              <div key={k} className="incident-row">
                <span className="incident-key">{k}</span>
                <span className="incident-val">{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header Analysis */}
      {c.headerAnalysis && (
        <div className="popup-section">
          <div className="popup-section-title">
            <i className="fas fa-code" /> Header Analysis (SPF / DKIM / DMARC)
          </div>
          <div className="incident-block">
            {Object.entries(c.headerAnalysis).map(([k, v]) => (
              <div key={k} className="incident-row">
                <span className="incident-key">{k}</span>
                <span className="incident-val" style={{
                  color: v === 'FAIL' || v === 'NONE'
                    ? '#f87171'
                    : v === 'PASS' ? '#34d399'
                    : 'var(--theme-text-primary)'
                }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Attacks / Findings */}
      {sortedAttacks.length > 0 && (
        <div className="popup-section">
          <div className="popup-section-title">
            <i className="fas fa-skull-crossbones" /> Findings & MITRE ATT&CK Mapping
          </div>
          {sortedAttacks.map((attack, i) => (
            <div key={i} className="attack-item">
              <SeverityBadge level={attack.severity} />
              <div className="attack-info">
                <div className="attack-name">
                  {attack.name}
                  <span className="attack-mitre">{attack.mitre}</span>
                </div>
                <div style={{
                  fontSize: '0.72rem', color: 'var(--theme-text-muted)',
                  marginBottom: 4, fontFamily: 'var(--font-mono)',
                }}>
                  {attack.mitreLabel}
                  {attack.target && ` · ${attack.target}`}
                </div>
                <div className="attack-meta">{attack.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* IOCs */}
      {c.iocs && c.iocs.length > 0 && (
        <div className="popup-section">
          <div className="popup-section-title">
            <i className="fas fa-biohazard" /> Indicators of Compromise (IOCs)
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {c.iocs.map((ioc, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'center',
                padding: '0.6rem 0.9rem',
                background: 'rgba(239,68,68,0.04)',
                border: '1px solid rgba(239,68,68,0.15)',
                borderRadius: '8px', flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem', fontWeight: 700,
                  padding: '2px 7px', borderRadius: '4px', flexShrink: 0,
                  background: 'rgba(239,68,68,0.12)', color: '#f87171',
                  border: '1px solid rgba(239,68,68,0.25)',
                }}>
                  {ioc.type}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                  color: 'var(--theme-text-primary)', flex: 1,
                  wordBreak: 'break-all',
                }}>
                  {ioc.value}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--theme-text-muted)' }}>
                  {ioc.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Download + back */}
      <div className="popup-footer">
        <motion.button
          whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
          className="btn btn-soc-primary"
          onClick={() => onDownload(c)}
        >
          <i className="fas fa-download" /> Download Report
        </motion.button>
        <button className="btn btn-ghost" onClick={onBack}>
          <i className="fas fa-arrow-left" /> All Cases
        </button>
      </div>
    </div>
  )
}

/* ─── STANDARD (non-collection) popup — unchanged ─── */
function StandardPopupBody({ project, onClose }) {
  const sortedAttacks = [...(project.attacks || [])].sort(
    (a, b) => (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9)
  )

  const handleDownload = () => downloadReport(project, project)

  return (
    <div className="popup-body">
      <div className="popup-section">
        <div className="popup-section-title"><i className="fas fa-circle-info" /> Overview</div>
        <p className="popup-text" style={{ whiteSpace: 'pre-line' }}>
          {project.fullDescription || project.description}
        </p>
      </div>

      {project.labMachines && (
        <div className="popup-section">
          <div className="popup-section-title"><i className="fas fa-network-wired" /> Lab Architecture</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.labMachines.map((m, i) => (
              <div key={i} style={{
                display: 'flex', gap: '0.75rem', alignItems: 'center',
                padding: '0.65rem 0.9rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px', fontSize: '0.82rem', flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  padding: '2px 8px', borderRadius: '4px', fontWeight: 700,
                  letterSpacing: '0.06em',
                  background: m.role === 'ATTACKER' ? 'rgba(239,68,68,0.12)'
                    : m.role === 'VICTIM' ? 'rgba(245,158,11,0.12)'
                    : m.role === 'DEFENDER' ? 'rgba(16,185,129,0.12)'
                    : 'rgba(168,85,247,0.12)',
                  color: m.role === 'ATTACKER' ? '#f87171'
                    : m.role === 'VICTIM' ? '#fbbf24'
                    : m.role === 'DEFENDER' ? '#34d399' : '#c084fc',
                  border: '1px solid',
                  borderColor: m.role === 'ATTACKER' ? 'rgba(239,68,68,0.25)'
                    : m.role === 'VICTIM' ? 'rgba(245,158,11,0.25)'
                    : m.role === 'DEFENDER' ? 'rgba(16,185,129,0.25)'
                    : 'rgba(168,85,247,0.25)',
                }}>
                  {m.role}
                </span>
                <span style={{ color: 'var(--theme-text-secondary)', flex: 1 }}>{m.os}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--theme-text-muted)' }}>
                  {m.ip}
                </span>
                <span style={{ color: 'var(--theme-text-secondary)', fontSize: '0.78rem' }}>{m.tools}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="popup-section">
        <div className="popup-section-title"><i className="fas fa-screwdriver-wrench" /> Tools & Technologies</div>
        <div className="skill-tags">
          {(project.tools || []).map(t => (
            <span key={t} className="skill-tag soc">{t}</span>
          ))}
        </div>
      </div>

      <div className="popup-section">
        <div className="popup-section-title"><i className="fas fa-skull-crossbones" /> Attack Simulations Detected</div>
        {sortedAttacks.map((attack, i) => (
          <div key={i} className="attack-item">
            <SeverityBadge level={attack.severity} />
            <div className="attack-info">
              <div className="attack-name">
                {attack.name}
                <span className="attack-mitre">{attack.mitre}</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--theme-text-muted)', marginBottom: 4, fontFamily: 'var(--font-mono)' }}>
                {attack.mitreLabel}{attack.date && ` · ${attack.date}`}
              </div>
              <div className="attack-meta">{attack.desc}</div>
              {attack.command && (
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                  background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '5px', padding: '4px 8px', marginTop: '6px',
                  color: '#34d399', wordBreak: 'break-all',
                }}>
                  $ {attack.command}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {project.incidentReport && (
        <div className="popup-section">
          <div className="popup-section-title"><i className="fas fa-file-circle-exclamation" /> Incident Report</div>
          <div className="incident-block">
            {Object.entries(project.incidentReport).map(([key, val]) => (
              <div key={key} className="incident-row">
                <span className="incident-key">{key}</span>
                <span className={`incident-val ${val === 'CRITICAL' ? 'critical' : val === 'Resolved' ? 'resolved' : ''}`}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="popup-footer">
        <motion.button
          whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
          className="btn btn-soc-primary"
          onClick={handleDownload}
        >
          <i className="fas fa-download" /> Download Full Report
        </motion.button>
        <button className="btn btn-ghost" onClick={onClose}>
          <i className="fas fa-xmark" /> Close
        </button>
      </div>
    </div>
  )
}



/* ─── forceDownload — fetches file as blob, forces save dialog ─── */
async function forceDownload(filePath) {
  try {
    const response = await fetch(filePath)
    if (!response.ok) throw new Error(`File not found: ${filePath}`)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filePath.split('/').pop()   // use the actual filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5000)
  } catch (err) {
    console.error('Download failed:', err)
    alert(`Could not download file.\n\nMake sure the file exists at:\n${filePath}\n\nPlace it in your portfolio-new/public/assets/ folder.`)
  }
}


/* ─── DOWNLOAD helper ─────────────────────────────────────────
   Priority order:
   1. caseData.reportFile  → specific case docx  (phishing cases)
   2. project.reportFile   → project-level docx  (home lab)
   3. fallback             → generated .txt      (no docx provided)
─────────────────────────────────────────────────────────────── */
function downloadReport(project, caseData) {
  // 1 — case-level docx (e.g. PHI-2026-001)
 // 1 — case-level file (e.g. PHI-2026-001)
if (caseData.reportFile) {
  forceDownload(caseData.reportFile)
  return
}

// 2 — project-level file (e.g. Home Lab)
if (project.reportFile) {
  forceDownload(project.reportFile)
  return
}

  // 3 — fallback: generate .txt (for any project without a docx yet)
  const attacks = (caseData.attacks || [])
    .map(a => `\n  [${a.severity?.toUpperCase()}] ${a.name}
  MITRE: ${a.mitre} — ${a.mitreLabel || ''}
  ${a.desc}`)
    .join('\n')

  const iocBlock = caseData.iocs
    ? `\nIOCS\n-----\n${caseData.iocs.map(i => `  [${i.type}] ${i.value} — ${i.note}`).join('\n')}`
    : ''

  const reportTitle = caseData.id
    ? `${project.title} — ${caseData.title}`
    : project.title

  const content = `
================================================================================
  SOC ANALYST REPORT
  ${reportTitle}
  Analyst: Amit Pal  |  Role Target: SOC Analyst L1
  Generated: ${new Date().toLocaleString()}
================================================================================

OVERVIEW
--------
${caseData.fullDescription || caseData.description || project.description}

${caseData.emailDetails
  ? `EMAIL DETAILS\n-------------\n${Object.entries(caseData.emailDetails).map(([k,v]) => `  ${k.padEnd(16)}: ${v}`).join('\n')}`
  : ''}

${caseData.headerAnalysis
  ? `HEADER ANALYSIS\n---------------\n${Object.entries(caseData.headerAnalysis).map(([k,v]) => `  ${k.padEnd(16)}: ${v}`).join('\n')}`
  : ''}

${project.labMachines
  ? `LAB ARCHITECTURE\n-----------------\n${project.labMachines.map(m => `  ${m.role.padEnd(14)} | ${m.os.padEnd(12)} | ${m.ip.padEnd(16)} | ${m.tools}`).join('\n')}`
  : ''}

FINDINGS / ATTACKS
------------------
${attacks}
${iocBlock}

CONTACT
-------
  Email : amitpal2972004@gmail.com
  GitHub: https://github.com/amitpal2972004

================================================================================
  END OF REPORT
================================================================================
`
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `SOC_Report_${(caseData.id || project.title).replace(/[^a-z0-9]/gi, '_')}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

/* ─── MAIN POPUP COMPONENT ─── */
function Popup({ project, onClose }) {
  const [selectedCase, setSelectedCase] = useState(null)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') { if (selectedCase) setSelectedCase(null); else onClose() } }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, selectedCase])

  if (!project) return null

  const isCollection = project.isCollection === true

  /* Dynamic header title */
  const headerTitle = selectedCase
    ? `${project.icon} ${selectedCase.title}`
    : `${project.icon} ${project.title}`

  const headerSubtitle = selectedCase
    ? `${project.subtitle} · Case ${selectedCase.id}`
    : project.subtitle || 'SOC PROJECT DOCUMENTATION'

  return (
    <AnimatePresence>
      <motion.div
        className="popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => { if (e.target === e.currentTarget) { if (selectedCase) setSelectedCase(null); else onClose() } }}
      >
        <motion.div
          className="popup-modal"
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header */}
          <div className="popup-header">
            <div className="popup-header-left">
              <div className="popup-title">{headerTitle}</div>
              <div className="popup-subtitle">{headerSubtitle}</div>
            </div>
            <button className="popup-close" onClick={onClose} aria-label="Close">
              <i className="fas fa-xmark" />
            </button>
          </div>

          {/* Body — switches between collection list, case detail, and standard */}
          <AnimatePresence mode="wait">
            {isCollection ? (
              selectedCase ? (
                <motion.div
                  key={selectedCase.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <CaseDetailView
                    c={selectedCase}
                    onBack={() => setSelectedCase(null)}
                    onDownload={(c) => downloadReport(project, c)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="collection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.22 }}
                >
                  <CollectionView project={project} onSelectCase={setSelectedCase} />
                </motion.div>
              )
            ) : (
              <motion.div key="standard" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <StandardPopupBody project={project} onClose={onClose} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Popup