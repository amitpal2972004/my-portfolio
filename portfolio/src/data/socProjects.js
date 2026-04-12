import homeLabDoc from '../assets/HOME_LAB_DOC.pdf'
import phishingDoc from '../assets/Phishing_Investigation_PHISH-2026-001.pdf'
import phishingDoc2 from '../assets/Phishing_Investigation_PHISH-2026-002.pdf'
import splunkDoc from '../assets/Splunk_SOC_Project_Documentation_001.pdf'
import networkDoc from '../assets/Network_Analysis_001.pdf'

export const socProjects = [

  // ════════════════════════════════════════════════════════════
  //  PROJECT 1 — SOC HOME LAB
  // ════════════════════════════════════════════════════════════
  {
    id: 1,
    icon: '🛡️',
    title: 'SOC Home Lab — Wazuh & TheHive',
    subtitle: 'COMPLETE SOC ENVIRONMENT · 4 VMs',
    description:
      'Full Security Operations Centre with Kali attacker, Windows 10 victim, Wazuh SIEM, and TheHive case management. Simulated 3 real-world attacks with 100% detection coverage.',
    fullDescription:
      'This home lab simulates a real-world Security Operations Centre (SOC) environment using 4 virtual machines. A Kali Linux attacker launches real cyber attacks against a Windows 10 victim. Wazuh SIEM detects the attacks automatically and creates cases in TheHive for investigation.\n\nDemonstrates practical SOC Analyst L1 skills including threat detection, alert triage, and incident response. This is my first cybersecurity project — built while working full-time as a Frontend Developer, targeting SOC Analyst L1 roles.',
    labMachines: [
      { machine: 'Machine 1', os: 'Windows 10',  role: 'VICTIM',       tools: 'Wazuh Agent + Sysmon',       ip: '192.168.1.4'  },
      { machine: 'Machine 2', os: 'Ubuntu',       role: 'DEFENDER',     tools: 'Wazuh Manager + Dashboard',  ip: '192.168.1.10' },
      { machine: 'Machine 3', os: 'Ubuntu',       role: 'SOC PLATFORM', tools: 'TheHive 5 Case Management',  ip: '192.168.1.9'  },
      { machine: 'Machine 4', os: 'Kali Linux',   role: 'ATTACKER',     tools: 'Nmap, Hydra, Mimikatz',      ip: '192.168.1.11' },
    ],
    tools: ['Wazuh v4.7.5', 'TheHive 5.6.1', 'Kali Linux', 'Nmap', 'Hydra', 'Mimikatz 2.2.0', 'Sysmon', 'Windows 10', 'Ubuntu'],
    reportFile: homeLabDoc,
    attacks: [
      {
        name: 'Nmap Port Scan',
        mitre: 'T1046',
        mitreLabel: 'Network Service Discovery',
        severity: 'low',
        tool: 'Nmap',
        attacker: 'Kali Linux — 192.168.1.11',
        target: 'Windows 10 — 192.168.1.7',
        command: 'nmap -sV -sC 192.168.1.7',
        wazuhRule: 'Rule 4151 — Multiple Firewall drop events',
        thehiveAlerts: '97 alerts',
        date: 'March 28, 2026',
        desc: 'Network reconnaissance via aggressive port scan. Triggered multiple firewall drop events in Wazuh. TheHive automatically created 97 alerts including DLL hijack detections.',
      },
      {
        name: 'Brute Force Login Attack',
        mitre: 'T1110',
        mitreLabel: 'Brute Force',
        severity: 'medium',
        tool: 'net use (Windows PowerShell)',
        attacker: 'Windows PowerShell',
        target: 'Windows 10 local administrator',
        command: 'net use \\\\localhost\\IPC$ /user:administrator wrongpassword',
        wazuhRule: 'Multiple authentication failures — T1567, T1059',
        thehiveAlerts: '231 alerts',
        date: 'March 29, 2026 — 5:41 AM',
        desc: '7 failed login attempts triggered authentication failure alerts. Wazuh correlated events to T1567 Exfiltration and T1059 Execution MITRE techniques. 231 total alerts in TheHive.',
      },
      {
        name: 'Mimikatz Credential Dumping',
        mitre: 'T1003',
        mitreLabel: 'OS Credential Dumping',
        severity: 'critical',
        tool: 'Mimikatz 2.2.0 x64',
        attacker: 'Windows 10 — Local Execution',
        target: 'LSASS Memory — 192.168.1.4',
        location: 'C:\\Users\\amit\\Downloads\\mimikatz_trunk\\x64',
        wazuhRule: 'Rule 100002 — Mimikatz Usage Detected — Level 15 CRITICAL',
        thehiveAlerts: 'IR-2026-001 Created',
        date: 'March 29, 2026 — 16:02',
        desc: 'Mimikatz 2.2.0 executed on Windows 10. Sysmon detected LSASS process access which triggered custom Wazuh Rule 100002 at Level 15 CRITICAL. Incident Report IR-2026-001 auto-generated.',
      },
    ],
    incidentReport: {
      'Incident ID':   'IR-2026-001',
      'Title':         'Mimikatz Credential Dumping on Windows 10 Endpoint',
      'Date & Time':   'March 29, 2026 — 16:02',
      'Severity':      'CRITICAL',
      'Analyst':       'Amit',
      'Victim':        '192.168.1.4 — Windows 10 — amit01',
      'Wazuh Rule':    '100002 — Mimikatz Usage Detected — Level 15',
      'MITRE ATT&CK':  'T1003 — OS Credential Dumping',
      'Status':        'Resolved',
    },
  },

  // ════════════════════════════════════════════════════════════
  //  PROJECT 2 — PHISHING EMAIL ANALYSIS COLLECTION
  // ════════════════════════════════════════════════════════════
  {
    id: 2,
    icon: '📧',
    title: 'Phishing Email Analysis',
    subtitle: 'EMAIL FORENSICS COLLECTION',
    description:
      'A growing collection of real phishing email investigations. Each case includes full header analysis, IP reputation, URL inspection, IOC extraction, and MITRE ATT&CK mapping.',
    isCollection: true,
    tools: ['CyberChef', 'AbuseIPDB', 'MXToolbox', 'VirusTotal', 'Thunderbird', 'WHOIS'],
    cases: [

      // ── CASE 1 ──────────────────────────────────────────────
      {
        id: 'PHI-2026-001',
        icon: '🏦',
        title: 'Banco Bradesco — Livelo Rewards Impersonation',
        date: 'March 2026',
        riskLevel: 'HIGH',
        status: 'Documented',
        reportFile: phishingDoc,
        summary: 'Phishing email impersonating Banco Bradesco to steal banking credentials via fake rewards link.',
        fullDescription:
          'A phishing email impersonating Banco Bradesco (Livelo Rewards Program) was analyzed. The email attempts to trick users into clicking a malicious link to redeem reward points.\n\nFull analysis: email header inspection (SPF/DKIM/DMARC all failed), IP geolocation and AbuseIPDB reputation check, Base64 HTML content decoded via CyberChef, malicious URL investigation, and IOC extraction.\n\nSample source: github.com/rf-peixoto/phishing_pot',
        emailDetails: {
          'Subject':       'CLIENTE PRIME - BRADESCO LIVELO',
          'Sender':        'banco.bradesco@atendimento.com.br',
          'Return-Path':   'root@ubuntu server',
          'Content-Type':  'Base64 Encoded HTML',
          'Finding':       'Sender spoofing detected',
        },
        headerAnalysis: {
          'SPF':        'FAIL',
          'DKIM':       'NONE',
          'DMARC':      'FAIL',
          'CompAuth':   'FAIL',
          'Conclusion': 'Email authentication failed → Highly suspicious',
        },
        attacks: [
          {
            name: 'Sender Spoofing',
            mitre: 'T1566.001',
            mitreLabel: 'Phishing: Spearphishing Attachment',
            severity: 'critical',
            desc: 'Sender spoofed as banco.bradesco@atendimento.com.br. Return-Path revealed root@ubuntu server. All authentication checks failed.',
          },
          {
            name: 'Malicious Phishing URL',
            mitre: 'T1566.002',
            mitreLabel: 'Phishing: Spearphishing Link',
            severity: 'critical',
            target: 'https://blog1seguimentmydomaine2bra.me/',
            desc: 'Fake banking domain designed to steal credentials. Base64 encoded HTML used to evade detection. Suspicious TLD impersonating Bradesco.',
          },
          {
            name: 'Malicious IP Infrastructure',
            mitre: 'T1583.003',
            mitreLabel: 'Acquire Infrastructure: VPS',
            severity: 'medium',
            attacker: '137.184.34.4 — DigitalOcean — USA',
            desc: 'Email originated from DigitalOcean VPS. AbuseIPDB shows 10 reports. Fresh phishing infrastructure — low confidence score does not mean safe.',
          },
          {
            name: 'Social Engineering — Urgency Tactic',
            mitre: 'T1566',
            mitreLabel: 'Phishing',
            severity: 'medium',
            desc: 'Base64 decoded HTML revealed fake bank message with urgency language — "redeem reward points before expiry". Classic social engineering.',
          },
        ],
        iocs: [
          { type: 'IP',     value: '137.184.34.4',                    note: 'DigitalOcean VPS — USA' },
          { type: 'Domain', value: 'blog1seguimentmydomaine2bra.me',   note: 'Phishing landing page' },
          { type: 'Email',  value: 'atendimento.com.br',               note: 'Spoofed sender domain' },
        ],
      },

      // ── CASE 2 ──────────────────────────────────────────────
      {
        id: 'PHISH-2026-002',
        icon: '🪟',
        title: 'Microsoft Account — Unusual Sign-in Activity',
        date: 'April 2026',
        riskLevel: 'HIGH',
        status: 'Documented',
        reportFile: phishingDoc2,
        summary: 'Phishing email impersonating Microsoft Account security alert. Used fear + urgency tactics (fake Russia login) to steal credentials via thebandalisty.com.',
        fullDescription:
          'A sophisticated phishing email impersonating a Microsoft Account security alert was identified and analysed. The attacker used social engineering — creating urgency and fear through a fake "Unusual sign-in activity" notification from Moscow, Russia — to pressure the victim into clicking a malicious tracking link leading to a credential harvesting page.\n\nFull investigation: URL reputation via VirusTotal (9/95 vendors flagged), IP infrastructure analysis via WHOIS, email content analysis with social engineering identification, IOC extraction, and MITRE ATT&CK mapping across 6 techniques.',
        emailDetails: {
          'Subject':            'Microsoft Account - Unusual Sign-in Activity',
          'Impersonated Brand': 'Microsoft Account Security Team',
          'Attack Type':        'Phishing — Credential Harvesting',
          'Delivery Method':    'HTML email with embedded malicious tracking link',
          'Social Engineering': 'Urgency + Fear + Authority Impersonation',
          'Claimed Event':      'Unusual sign-in from Moscow, Russia',
        },
        headerAnalysis: {
          'Phishing URL':      'http://thebandalisty.com/track/...',
          'Protocol':          'HTTP — NOT HTTPS (red flag for Microsoft)',
          'Domain Relevance':  'Zero connection to Microsoft',
          'VirusTotal Result': '9/95 vendors flagged MALICIOUS',
          'Attacker IP':       '89.144.44.2 — Warsaw, Poland — MSCode datacenter',
          'Expected Hosting':  'Microsoft Azure / Office 365',
          'Conclusion':        'Server has absolutely no connection to Microsoft → CONFIRMED PHISHING',
        },
        attacks: [
          {
            name: 'Microsoft Brand Impersonation',
            mitre: 'T1036.005',
            mitreLabel: 'Masquerading: Match Legitimate Name or Location',
            severity: 'critical',
            desc: 'Email copies Microsoft Account security email template exactly — logo, colours, fonts, and language. Classic brand impersonation to establish false trust before the victim clicks.',
          },
          {
            name: 'Malicious Phishing URL',
            mitre: 'T1566.001',
            mitreLabel: 'Phishing: Spearphishing Link',
            severity: 'critical',
            target: 'http://thebandalisty.com/track/...',
            desc: 'VirusTotal flagged thebandalisty.com as malicious (9/95 vendors). HTTP protocol used — real Microsoft always uses HTTPS. Domain has zero connection to Microsoft. Redirect tracking path typical of phishing campaigns.',
          },
          {
            name: 'Credential Harvesting via Fake Portal',
            mitre: 'T1056.003',
            mitreLabel: 'Web Portal Capture',
            severity: 'critical',
            desc: 'thebandalisty.com landing page designed to capture Microsoft account credentials via a fake login form after redirect from the "Report the user" button.',
          },
          {
            name: 'Social Engineering — Fear + Urgency + Authority',
            mitre: 'T1598',
            mitreLabel: 'Phishing for Information',
            severity: 'high',
            desc: 'Three simultaneous social engineering tactics: FEAR ("Unauthorized login from Russia"), URGENCY ("Immediate action required"), AUTHORITY ("Microsoft Security Team"). Moscow/Russia location chosen to maximise victim alarm.',
          },
          {
            name: 'Non-Microsoft Attacker Infrastructure',
            mitre: 'T1583.003',
            mitreLabel: 'Acquire Infrastructure: Virtual Private Server',
            severity: 'medium',
            attacker: '89.144.44.2 — MSCode datacenter — Warsaw, Poland',
            desc: "Genuine Microsoft emails originate from Microsoft Azure (40.x.x.x, 52.x.x.x, 104.x.x.x). This email links to a Polish datacenter server — completely unrelated to Microsoft's global infrastructure.",
          },
          {
            name: 'User Execution via Malicious Link',
            mitre: 'T1204.001',
            mitreLabel: 'User Execution: Malicious Link',
            severity: 'medium',
            desc: '"Report the user" CTA button framed as a protective action — victim believes clicking it is safe and helpful, not realising it activates the attack by sending them to the phishing domain.',
          },
        ],
        iocs: [
          { type: 'IP',        value: '89.144.44.2',                               note: 'MSCode datacenter — Warsaw, Poland' },
          { type: 'Domain',    value: 'thebandalisty.com',                          note: 'Phishing domain — 9/95 VirusTotal detections' },
          { type: 'URL',       value: 'http://thebandalisty.com/track/',            note: 'Tracking redirect path' },
          { type: 'Protocol',  value: 'HTTP (not HTTPS)',                           note: 'Red flag — real Microsoft always uses HTTPS' },
          { type: 'Subject',   value: 'Microsoft Account - Unusual Sign-in Activity', note: 'Phishing email subject line' },
          { type: 'Brand',     value: 'Microsoft Account Security Team',            note: 'Impersonated sender identity' },
          { type: 'Trigger',   value: 'Moscow/Russia login location',               note: 'Social engineering geographic manipulation' },
          { type: 'ISP',       value: 'MSCode sp. z o.o.',                         note: 'Attacker hosting provider — Poland' },
          { type: 'Detection', value: '9/95 VirusTotal vendors',                   note: 'Confirmed malicious classification' },
        ],
      },

      // ── ADD MORE PHISHING CASES HERE IN THE FUTURE ──────────
      // Copy a case object above, change id/title/date, fill in details.
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  PROJECT 3 — SPLUNK SIEM COLLECTION
  // ════════════════════════════════════════════════════════════
  {
    id: 3,
    icon: '🔎',
    title: 'Splunk SIEM — Log Analysis & Threat Investigation',
    subtitle: 'SIEM INVESTIGATIONS COLLECTION',
    description:
      'A growing collection of security log analysis investigations using Splunk Enterprise. Each case covers SPL query building, multi-phase attack correlation, MITRE ATT&CK mapping, and incident reporting.',
    isCollection: true,
    tools: ['Splunk Enterprise 10.0.1', 'SPL', 'Windows 10', 'BOTS Dataset', 'Security-Datasets', 'MITRE ATT&CK'],
    cases: [

      // ── CASE 1 ──────────────────────────────────────────────
      {
        id: 'SPLUNK-2026-001',
        icon: '⚔️',
        title: 'Multi-Stage Attack — Recon to Reverse Shell',
        date: 'April 2026',
        riskLevel: 'CRITICAL',
        status: 'Documented',
        reportFile: splunkDoc,
        summary: 'Complete 7-phase attack chain detected via Splunk SPL — Port Scan → Brute Force → Mimikatz → Data Exfiltration → Reverse Shell. 8 CRITICAL events across 21 total logs.',
        fullDescription:
          'A comprehensive security incident investigation conducted using Splunk Enterprise 10.0.1 as the primary SIEM platform. Analyzed open-source security log datasets (BOTS, Security-Datasets) to identify, correlate, and document a multi-stage cyberattack scenario.\n\nThe analysis uncovered a complete attack chain — from initial network reconnaissance through privilege escalation, credential theft, and data exfiltration — all identified through structured log analysis and Splunk SPL queries.\n\nAttacker IP: 192.168.1.105 → Victim IP: 192.168.1.10\nTotal events analyzed: 21 | Critical severity events: 8\nAttack duration: 7 minutes 30 seconds (08:15:00 – 08:22:30 UTC)',
        emailDetails: {
          'Platform':                'Splunk Enterprise 10.0.1 (127.0.0.1:8000)',
          'Data Source':             'Open-source security log datasets (BOTS, Security-Datasets)',
          'Total Events Analyzed':   '21 events across all investigations',
          'Critical Severity Events':'8 CRITICAL-level alerts identified',
          'Attacker IP':             '192.168.1.105',
          'Victim IP':               '192.168.1.10',
          'Investigation Date':      'November 15, 2024 (log timestamps)',
        },
        headerAnalysis: {
          'Phase 1 — 08:15:00':       'PORT_SCAN — Reconnaissance — MEDIUM',
          'Phase 2 — 08:15–08:17':    'BRUTE_FORCE — RDP attack — Account compromised — CRITICAL',
          'Phase 3 — 08:17:10':       'PRIVILEGE ESCALATION — Admin rights assigned — CRITICAL',
          'Phase 4 — 08:20–08:20:10': 'CREDENTIAL_DUMP — Mimikatz + LSASS + Pass-the-Hash — CRITICAL',
          'Phase 5 — 08:22:00':       'DATA_EXFIL — 50MB to 185.220.101.45 (Tor exit node) — CRITICAL',
          'Phase 6 — 08:22:30':       'REVERSE_SHELL — Metasploit persistence established — CRITICAL',
          'Correlation':              '192.168.1.105 generated 16/21 events (76% of all attack traffic)',
        },
        attacks: [
          {
            name: 'Port Scan — Network Reconnaissance',
            mitre: 'T1046',
            mitreLabel: 'Network Service Discovery',
            severity: 'medium',
            attacker: '192.168.1.105',
            target: '192.168.1.10',
            desc: 'SPL: index=main attack_type="PORT_SCAN" | stats count by src_ip, dst_port | sort -count\n\n5 events. Ports targeted: 22 (SSH), 80 (HTTP), 445 (SMB), 3389 (RDP). Port 445 and 3389 flagged as high-value Windows targets indicating planned RDP brute force follow-up.',
          },
          {
            name: 'RDP Brute Force — Account Compromise',
            mitre: 'T1110',
            mitreLabel: 'Brute Force',
            severity: 'critical',
            attacker: '192.168.1.105',
            target: '192.168.1.10 — administrator account',
            desc: 'SPL: index=main attack_type="BRUTE_FORCE" | table timestamp, src_ip, user, severity, description\n\n7 events. 20+ failed logins within 2-minute window. Successful compromise at 08:17:05. Admin privileges assigned 5 seconds later — pre-configured escalation script confirmed.',
          },
          {
            name: 'Mimikatz — Credential Dumping + Pass-the-Hash',
            mitre: 'T1003.001',
            mitreLabel: 'OS Credential Dumping: LSASS Memory',
            severity: 'critical',
            attacker: '192.168.1.105',
            target: 'LSASS Memory — 192.168.1.10',
            desc: 'SPL: index=main attack_type="CREDENTIAL_DUMP" OR attack_type="DATA_EXFIL" | table timestamp, severity, src_ip, description\n\nSequence: mimikatz.exe (08:20:00) → LSASS handle opened (08:20:03) → sekurlsa::logonpasswords (08:20:05) → Pass-the-Hash with NTLM hash (08:20:10). All 5 events CRITICAL.',
          },
          {
            name: 'Data Exfiltration to C2 / Tor Exit Node',
            mitre: 'T1048',
            mitreLabel: 'Exfiltration Over Alternative Protocol',
            severity: 'critical',
            attacker: '192.168.1.105',
            target: '185.220.101.45 — Tor exit node',
            desc: '50MB of data exfiltrated at 08:22:00 to 185.220.101.45 — a known Tor exit node IP range, indicating the attacker routed stolen data through anonymization infrastructure to evade attribution.',
          },
          {
            name: 'Reverse Shell — Metasploit Persistence',
            mitre: 'T1059.004',
            mitreLabel: 'Command and Scripting Interpreter',
            severity: 'critical',
            attacker: '192.168.1.105',
            target: '192.168.1.10',
            desc: 'Metasploit reverse shell established at 08:22:30 providing persistent C2 access. Final kill chain phase — attacker maintained access even after the initial brute force session.',
          },
          {
            name: 'Full Attack Chain Correlation Query',
            mitre: 'T1078',
            mitreLabel: 'Valid Accounts',
            severity: 'critical',
            desc: 'SPL: index=main severity="CRITICAL" | table timestamp, attack_type, src_ip, dst_ip, description | sort timestamp\n\n8 CRITICAL events confirmed spanning 08:17:05–08:22:30. Attacker generated 76% of all 21 logged events from single IP.',
          },
        ],
        iocs: [
          { type: 'IP',   value: '192.168.1.105',                    note: 'Attacker source IP — generated 16/21 events' },
          { type: 'IP',   value: '185.220.101.45',                   note: 'C2 server / Tor exit node — exfiltration target' },
          { type: 'Host', value: '192.168.1.10',                     note: 'Victim host — fully compromised' },
          { type: 'Port', value: '3389 (RDP)',                       note: 'Brute forced — initial access vector' },
          { type: 'Port', value: '445 (SMB)',                        note: 'Scanned — targeted for lateral movement' },
          { type: 'Tool', value: 'Mimikatz / sekurlsa::logonpasswords', note: 'Credential dumping from LSASS' },
          { type: 'Tool', value: 'Metasploit Framework',             note: 'Reverse shell persistence' },
          { type: 'Hash', value: 'NTLM hash (stolen)',               note: 'Used in Pass-the-Hash lateral movement' },
          { type: 'Data', value: '50MB outbound transfer',           note: 'Exfiltrated at 08:22:00 UTC' },
        ],
      },

      // ── ADD MORE SPLUNK INVESTIGATIONS HERE IN THE FUTURE ───
      // Copy a case object above, change id/title/date, fill in details.
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  PROJECT 4 — NETWORK TRAFFIC ANALYSIS COLLECTION
  // ════════════════════════════════════════════════════════════
  {
    id: 4,
    icon: '🌐',
    title: 'Network Traffic Analysis — PCAP & Wireshark',
    subtitle: 'NETWORK FORENSICS COLLECTION',
    description:
      'A growing collection of network traffic investigations using Wireshark and pcap analysis. Each case covers protocol inspection, C2 detection, infected host identification, IOC extraction, and MITRE ATT&CK mapping.',
    isCollection: true,
    tools: ['Wireshark', 'PCAP Analysis', 'DHCP Forensics', 'Kerberos Analysis', 'NBNS', 'HTTP Inspection', 'malware-traffic-analysis.net'],
    cases: [

      // ── CASE 1 ──────────────────────────────────────────────
      {
        id: 'NET-2026-001',
        icon: '🐀',
        title: 'NetSupport Manager RAT — C2 Beacon Detection',
        date: 'February 2026',
        riskLevel: 'HIGH',
        status: 'Documented',
        reportFile: networkDoc,
        summary: 'Infected Windows host DESKTOP-TEYQ2NR (user: brolf) detected beaconing to C2 45.131.214.85 via NetSupport Manager RAT v1.3. Full host identified via DHCP, NBNS, and Kerberos pcap analysis.',
        fullDescription:
          'SOC exercise from malware-traffic-analysis.net. The SIEM generated multiple signature alerts for NetSupport Manager RAT activity originating from an internal host communicating with external C2 server 45.131.214[.]85 over TCP port 443.\n\nPcap analysis confirmed that Windows workstation DESKTOP-TEYQ2NR, assigned to user Brad Rolf (account: brolf), was actively infected and beaconing to the attacker-controlled C2 server using the NetSupport Manager RAT protocol.\n\nPcap file: 2026-02-28-traffic-analysis-exercise.pcap\nExercise source: malware-traffic-analysis.net',
        emailDetails: {
          'Incident Time (UTC)': '2026-02-28 19:55:51',
          'Infected Host IP':    '10.2.28.88',
          'MAC Address':         '00:19:d1:b2:4d:ad',
          'Hostname':            'DESKTOP-TEYQ2NR',
          'AD Domain':           'EASYAS123 / easyas123.tech',
          'User Account':        'brolf (Brad Rolf)',
          'C2 Server':           '45.131.214[.]85 — TCP port 443',
          'Malware':             'NetSupport Manager RAT v1.3',
          'Severity':            'HIGH — UNDER INVESTIGATION',
        },
        headerAnalysis: {
          'Step 1 — Protocol Hierarchy': 'Statistics → Protocol Hierarchy — HTTP (RAT beacons), Kerberos, NBNS, DHCP identified',
          'Step 2 — Conversations':      'Statistics → Conversations → IPv4 — 10.2.28.88 highest external volume → C2 confirmed',
          'Step 3 — DHCP Analysis':      'Filter: dhcp — Frame 103: MAC 00:19:d1:b2:4d:ad (Option 50), IP 10.2.28.88, Hostname DESKTOP-TEYQ2NR (Option 12)',
          'Step 4 — NBNS Confirmation':  'Filter: nbns and ip.src == 10.2.28.88 — Hostname DESKTOP-TEYQ2NR independently confirmed via NetBIOS broadcasts',
          'Step 5 — AD User (Kerberos)': 'Filter: kerberos.CNameString — TGS-REP: CNameString: brolf, Realm: EASYAS123.TECH — compromised AD user identified',
          'Step 6 — RAT C2 Beacon':      'Filter: http.request.method == POST and ip.dst == 45.131.214.85 — User-Agent: NetSupport Manager/1.3, Frame 2638: CMD=POLL (plaintext), subsequent: CMD=ENCD (XOR-encrypted)',
        },
        attacks: [
          {
            name: 'NetSupport Manager RAT — Active C2 Beaconing',
            mitre: 'T1219',
            mitreLabel: 'Remote Access Software',
            severity: 'critical',
            attacker: '45.131.214[.]85 — External C2 Server',
            target: '10.2.28.88 — DESKTOP-TEYQ2NR',
            desc: 'NetSupport Manager RAT v1.3 detected via HTTP POST beacons to 45.131.214.85/fakeurl.htm. First beacon (frame 2638) in plaintext — User-Agent: NetSupport Manager/1.3, payload CMD=POLL. Subsequent payloads CMD=ENCD (XOR-encrypted C2 commands). Active attacker session confirmed.',
          },
          {
            name: 'C2 Port Mimicry — TCP 443 Unencrypted',
            mitre: 'T1571',
            mitreLabel: 'Non-Standard Port',
            severity: 'critical',
            attacker: '45.131.214[.]85',
            target: 'TCP port 443 (HTTP, not HTTPS)',
            desc: 'Attacker used TCP port 443 for unencrypted HTTP C2 traffic to bypass firewall rules that allow HTTPS/443 outbound. Classic port mimicry — traffic looks like HTTPS by port number but is plaintext HTTP RAT beacons.',
          },
          {
            name: 'Infected Host Identification — DHCP Forensics',
            mitre: 'T1016',
            mitreLabel: 'System Network Configuration Discovery',
            severity: 'medium',
            desc: 'Wireshark filter (dhcp) on DHCP Request frame 103 revealed all three host identifiers from a single packet: MAC address 00:19:d1:b2:4d:ad (Ethernet II Source), IP 10.2.28.88 (Option 50), Hostname DESKTOP-TEYQ2NR (Option 12).',
          },
          {
            name: 'AD User Identification — Kerberos Analysis',
            mitre: 'T1078',
            mitreLabel: 'Valid Accounts',
            severity: 'medium',
            desc: 'Wireshark filter (kerberos.CNameString) on TGS-REP packets revealed CNameString: brolf and Realm: EASYAS123.TECH — identifying the logged-in Active Directory user Brad Rolf. Account must be disabled immediately pending investigation.',
          },
          {
            name: 'Persistent RAT — Encrypted C2 Commands',
            mitre: 'T1543',
            mitreLabel: 'Create or Modify System Process',
            severity: 'high',
            desc: 'After initial CMD=POLL check-in, subsequent CMD=ENCD payloads confirmed the attacker was issuing XOR-encrypted commands to the infected host — indicating an active hands-on-keyboard C2 session with persistent access.',
          },
        ],
        iocs: [
          { type: 'IP',         value: '45.131.214[.]85',                    note: 'C2 server — NetSupport Manager RAT controller' },
          { type: 'URL',        value: 'hxxp://45.131.214[.]85/fakeurl.htm', note: 'C2 beacon HTTP POST endpoint' },
          { type: 'User-Agent', value: 'NetSupport Manager/1.3',             note: 'Malware identification string in HTTP header' },
          { type: 'Port',       value: 'TCP 443 (HTTP not HTTPS)',           note: 'Port mimicry to bypass firewall egress rules' },
          { type: 'IP',         value: '10.2.28.88',                         note: 'Infected workstation — DESKTOP-TEYQ2NR' },
          { type: 'MAC',        value: '00:19:d1:b2:4d:ad',                  note: 'Infected workstation NIC — from DHCP frame 103' },
          { type: 'Account',    value: 'brolf (Brad Rolf)',                   note: 'Compromised AD account — EASYAS123 domain' },
          { type: 'Payload',    value: 'CMD=POLL / CMD=ENCD',                note: 'NetSupport RAT C2 beacon commands (plaintext + XOR)' },
          { type: 'Domain',     value: 'easyas123.tech',                     note: 'Active Directory domain of infected host' },
        ],
      },

      // ── ADD MORE NETWORK INVESTIGATIONS HERE IN THE FUTURE ──
      // Copy a case object above, change id/title/date, fill in details.
    ],
  },

]