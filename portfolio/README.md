# Amit Pal — Portfolio

**Dual-mode portfolio:** Frontend Developer + SOC Analyst L1 Candidate

## Features

- 🔀 **Toggle between Frontend Dev & SOC Analyst modes** — localStorage persisted
- ⚛️ **Frontend Mode** — 5 live-deployed projects, React/JS skills, experience timeline
- 🛡️ **SOC Mode** — Wazuh+TheHive lab, Mimikatz CRITICAL detection, incident report IR-2026-001
- 🖱️ **SOC popup modal** — full attack details, MITRE ATT&CK mapping, downloadable report
- 🎨 **Animated ambient background** — different color scheme per mode (blue FE / purple SOC)
- 📱 **Fully responsive** — mobile, tablet, desktop
- ✨ **Framer Motion** — smooth page transitions and scroll animations

## Stack

- React 18 + Vite
- Framer Motion
- React Icons + Font Awesome 6
- Google Fonts (Syne + JetBrains Mono + Inter)
- Pure CSS (no UI library)

## Run Locally

```bash
npm install
npm run dev
```

Runs at: http://localhost:3000

## Build

```bash
npm run build
```

## Deploy

Push to GitHub → Import to Vercel → Deploy with default settings.

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Mode toggle + navigation
│   ├── ProjectCard.jsx   # Reusable for FE + SOC
│   └── Popup.jsx         # SOC report modal
├── pages/
│   ├── Frontend.jsx      # Full FE portfolio page
│   └── SOC.jsx           # Full SOC portfolio page
├── data/
│   ├── frontendProjects.js
│   └── socProjects.js
├── App.jsx               # Mode switching + transitions
├── App.css               # All component styles
└── index.css             # Global reset + variables
```

---

Built by **Amit Pal** · amitpal2972004@gmail.com · github.com/amitpal2972004