import homeLabDoc from "../assets/HOME_LAB_DOC.pdf";
import phishingDoc from "../assets/Phishing_Investigation_PHISH-2026-001.pdf";
import phishingDoc2 from "../assets/Phishing_Investigation_PHISH-2026-002.pdf";
import phishingDoc3 from "../assets/Phishing_Investigation_PHISH-2026-003.pdf";
import phishingDoc5 from "../assets/Phishing_Investigation_PHISH-2026-005.pdf";
import phishingDoc4 from "../assets/Phishing_Investigation_PHISH-2026-004.pdf";
import splunkDoc from "../assets/Splunk_SOC_Project_Documentation_001.pdf";
import networkDoc from "../assets/Network_Analysis_001.pdf";

export const socProjects = [
  // ════════════════════════════════════════════════════════════
  //  PROJECT 1 — SOC HOME LAB
  // ════════════════════════════════════════════════════════════
  {
    id: 1,
    icon: "🛡️",
    title: "SOC Home Lab — Wazuh & TheHive",
    subtitle: "COMPLETE SOC ENVIRONMENT · 4 VMs",
    description:
      "Full Security Operations Centre with Kali attacker, Windows 10 victim, Wazuh SIEM, and TheHive case management. Simulated 3 real-world attacks with 100% detection coverage.",
    fullDescription:
      "This home lab simulates a real-world Security Operations Centre (SOC) environment using 4 virtual machines. A Kali Linux attacker launches real cyber attacks against a Windows 10 victim. Wazuh SIEM detects the attacks automatically and creates cases in TheHive for investigation.\n\nDemonstrates practical SOC Analyst L1 skills including threat detection, alert triage, and incident response. This is my first cybersecurity project — built while working full-time as a Frontend Developer, targeting SOC Analyst L1 roles.",
    labMachines: [
      {
        machine: "Machine 1",
        os: "Windows 10",
        role: "VICTIM",
        tools: "Wazuh Agent + Sysmon",
        ip: "192.168.1.4",
      },
      {
        machine: "Machine 2",
        os: "Ubuntu",
        role: "DEFENDER",
        tools: "Wazuh Manager + Dashboard",
        ip: "192.168.1.10",
      },
      {
        machine: "Machine 3",
        os: "Ubuntu",
        role: "SOC PLATFORM",
        tools: "TheHive 5 Case Management",
        ip: "192.168.1.9",
      },
      {
        machine: "Machine 4",
        os: "Kali Linux",
        role: "ATTACKER",
        tools: "Nmap, Hydra, Mimikatz",
        ip: "192.168.1.11",
      },
    ],
    tools: [
      "Wazuh v4.7.5",
      "TheHive 5.6.1",
      "Kali Linux",
      "Nmap",
      "Hydra",
      "Mimikatz 2.2.0",
      "Sysmon",
      "Windows 10",
      "Ubuntu",
    ],
    reportFile: homeLabDoc,
    attacks: [
      {
        name: "Nmap Port Scan",
        mitre: "T1046",
        mitreLabel: "Network Service Discovery",
        severity: "low",
        tool: "Nmap",
        attacker: "Kali Linux — 192.168.1.11",
        target: "Windows 10 — 192.168.1.7",
        command: "nmap -sV -sC 192.168.1.7",
        wazuhRule: "Rule 4151 — Multiple Firewall drop events",
        thehiveAlerts: "97 alerts",
        date: "March 28, 2026",
        desc: "Network reconnaissance via aggressive port scan. Triggered multiple firewall drop events in Wazuh. TheHive automatically created 97 alerts including DLL hijack detections.",
      },
      {
        name: "Brute Force Login Attack",
        mitre: "T1110",
        mitreLabel: "Brute Force",
        severity: "medium",
        tool: "net use (Windows PowerShell)",
        attacker: "Windows PowerShell",
        target: "Windows 10 local administrator",
        command:
          "net use \\\\localhost\\IPC$ /user:administrator wrongpassword",
        wazuhRule: "Multiple authentication failures — T1567, T1059",
        thehiveAlerts: "231 alerts",
        date: "March 29, 2026 — 5:41 AM",
        desc: "7 failed login attempts triggered authentication failure alerts. Wazuh correlated events to T1567 Exfiltration and T1059 Execution MITRE techniques. 231 total alerts in TheHive.",
      },
      {
        name: "Mimikatz Credential Dumping",
        mitre: "T1003",
        mitreLabel: "OS Credential Dumping",
        severity: "critical",
        tool: "Mimikatz 2.2.0 x64",
        attacker: "Windows 10 — Local Execution",
        target: "LSASS Memory — 192.168.1.4",
        location: "C:\\Users\\amit\\Downloads\\mimikatz_trunk\\x64",
        wazuhRule: "Rule 100002 — Mimikatz Usage Detected — Level 15 CRITICAL",
        thehiveAlerts: "IR-2026-001 Created",
        date: "March 29, 2026 — 16:02",
        desc: "Mimikatz 2.2.0 executed on Windows 10. Sysmon detected LSASS process access which triggered custom Wazuh Rule 100002 at Level 15 CRITICAL. Incident Report IR-2026-001 auto-generated.",
      },
    ],
    incidentReport: {
      "Incident ID": "IR-2026-001",
      Title: "Mimikatz Credential Dumping on Windows 10 Endpoint",
      "Date & Time": "March 29, 2026 — 16:02",
      Severity: "CRITICAL",
      Analyst: "Amit",
      Victim: "192.168.1.4 — Windows 10 — amit01",
      "Wazuh Rule": "100002 — Mimikatz Usage Detected — Level 15",
      "MITRE ATT&CK": "T1003 — OS Credential Dumping",
      Status: "Resolved",
    },
  },

  // ════════════════════════════════════════════════════════════
  //  PROJECT 2 — PHISHING EMAIL ANALYSIS COLLECTION
  // ════════════════════════════════════════════════════════════
  {
    id: 2,
    icon: "📧",
    title: "Phishing Email Analysis",
    subtitle: "EMAIL FORENSICS COLLECTION",
    description:
      "A growing collection of real phishing email investigations. Each case includes full header analysis, IP reputation, URL inspection, IOC extraction, and MITRE ATT&CK mapping.",
    isCollection: true,
    tools: [
      "CyberChef",
      "AbuseIPDB",
      "MXToolbox",
      "VirusTotal",
      "Thunderbird",
      "WHOIS",
    ],
    cases: [
      // ── CASE 1 ──────────────────────────────────────────────
      {
        id: "PHI-2026-001",
        icon: "🏦",
        title: "Banco Bradesco — Livelo Rewards Impersonation",
        date: "March 2026",
        riskLevel: "HIGH",
        status: "Documented",
        reportFile: phishingDoc,
        summary:
          "Phishing email impersonating Banco Bradesco to steal banking credentials via fake rewards link.",
        fullDescription:
          "A phishing email impersonating Banco Bradesco (Livelo Rewards Program) was analyzed. The email attempts to trick users into clicking a malicious link to redeem reward points.\n\nFull analysis: email header inspection (SPF/DKIM/DMARC all failed), IP geolocation and AbuseIPDB reputation check, Base64 HTML content decoded via CyberChef, malicious URL investigation, and IOC extraction.\n\nSample source: github.com/rf-peixoto/phishing_pot",
        emailDetails: {
          Subject: "CLIENTE PRIME - BRADESCO LIVELO",
          Sender: "banco.bradesco@atendimento.com.br",
          "Return-Path": "root@ubuntu server",
          "Content-Type": "Base64 Encoded HTML",
          Finding: "Sender spoofing detected",
        },
        headerAnalysis: {
          SPF: "FAIL",
          DKIM: "NONE",
          DMARC: "FAIL",
          CompAuth: "FAIL",
          Conclusion: "Email authentication failed → Highly suspicious",
        },
        attacks: [
          {
            name: "Sender Spoofing",
            mitre: "T1566.001",
            mitreLabel: "Phishing: Spearphishing Attachment",
            severity: "critical",
            desc: "Sender spoofed as banco.bradesco@atendimento.com.br. Return-Path revealed root@ubuntu server. All authentication checks failed.",
          },
          {
            name: "Malicious Phishing URL",
            mitre: "T1566.002",
            mitreLabel: "Phishing: Spearphishing Link",
            severity: "critical",
            target: "https://blog1seguimentmydomaine2bra.me/",
            desc: "Fake banking domain designed to steal credentials. Base64 encoded HTML used to evade detection. Suspicious TLD impersonating Bradesco.",
          },
          {
            name: "Malicious IP Infrastructure",
            mitre: "T1583.003",
            mitreLabel: "Acquire Infrastructure: VPS",
            severity: "medium",
            attacker: "137.184.34.4 — DigitalOcean — USA",
            desc: "Email originated from DigitalOcean VPS. AbuseIPDB shows 10 reports. Fresh phishing infrastructure — low confidence score does not mean safe.",
          },
          {
            name: "Social Engineering — Urgency Tactic",
            mitre: "T1566",
            mitreLabel: "Phishing",
            severity: "medium",
            desc: 'Base64 decoded HTML revealed fake bank message with urgency language — "redeem reward points before expiry". Classic social engineering.',
          },
        ],
        iocs: [
          { type: "IP", value: "137.184.34.4", note: "DigitalOcean VPS — USA" },
          {
            type: "Domain",
            value: "blog1seguimentmydomaine2bra.me",
            note: "Phishing landing page",
          },
          {
            type: "Email",
            value: "atendimento.com.br",
            note: "Spoofed sender domain",
          },
        ],
      },

      // ── CASE 2 ──────────────────────────────────────────────
      {
        id: "PHISH-2026-002",
        icon: "🪟",
        title: "Microsoft Account — Unusual Sign-in Activity",
        date: "April 2026",
        riskLevel: "HIGH",
        status: "Documented",
        reportFile: phishingDoc2,
        summary:
          "Phishing email impersonating Microsoft Account security alert. Used fear + urgency tactics (fake Russia login) to steal credentials via thebandalisty.com.",
        fullDescription:
          'A sophisticated phishing email impersonating a Microsoft Account security alert was identified and analysed. The attacker used social engineering — creating urgency and fear through a fake "Unusual sign-in activity" notification from Moscow, Russia — to pressure the victim into clicking a malicious tracking link leading to a credential harvesting page.\n\nFull investigation: URL reputation via VirusTotal (9/95 vendors flagged), IP infrastructure analysis via WHOIS, email content analysis with social engineering identification, IOC extraction, and MITRE ATT&CK mapping across 6 techniques.',
        emailDetails: {
          Subject: "Microsoft Account - Unusual Sign-in Activity",
          "Impersonated Brand": "Microsoft Account Security Team",
          "Attack Type": "Phishing — Credential Harvesting",
          "Delivery Method": "HTML email with embedded malicious tracking link",
          "Social Engineering": "Urgency + Fear + Authority Impersonation",
          "Claimed Event": "Unusual sign-in from Moscow, Russia",
        },
        headerAnalysis: {
          "Phishing URL": "http://thebandalisty.com/track/...",
          Protocol: "HTTP — NOT HTTPS (red flag for Microsoft)",
          "Domain Relevance": "Zero connection to Microsoft",
          "VirusTotal Result": "9/95 vendors flagged MALICIOUS",
          "Attacker IP": "89.144.44.2 — Warsaw, Poland — MSCode datacenter",
          "Expected Hosting": "Microsoft Azure / Office 365",
          Conclusion:
            "Server has absolutely no connection to Microsoft → CONFIRMED PHISHING",
        },
        attacks: [
          {
            name: "Microsoft Brand Impersonation",
            mitre: "T1036.005",
            mitreLabel: "Masquerading: Match Legitimate Name or Location",
            severity: "critical",
            desc: "Email copies Microsoft Account security email template exactly — logo, colours, fonts, and language. Classic brand impersonation to establish false trust before the victim clicks.",
          },
          {
            name: "Malicious Phishing URL",
            mitre: "T1566.001",
            mitreLabel: "Phishing: Spearphishing Link",
            severity: "critical",
            target: "http://thebandalisty.com/track/...",
            desc: "VirusTotal flagged thebandalisty.com as malicious (9/95 vendors). HTTP protocol used — real Microsoft always uses HTTPS. Domain has zero connection to Microsoft. Redirect tracking path typical of phishing campaigns.",
          },
          {
            name: "Credential Harvesting via Fake Portal",
            mitre: "T1056.003",
            mitreLabel: "Web Portal Capture",
            severity: "critical",
            desc: 'thebandalisty.com landing page designed to capture Microsoft account credentials via a fake login form after redirect from the "Report the user" button.',
          },
          {
            name: "Social Engineering — Fear + Urgency + Authority",
            mitre: "T1598",
            mitreLabel: "Phishing for Information",
            severity: "high",
            desc: 'Three simultaneous social engineering tactics: FEAR ("Unauthorized login from Russia"), URGENCY ("Immediate action required"), AUTHORITY ("Microsoft Security Team"). Moscow/Russia location chosen to maximise victim alarm.',
          },
          {
            name: "Non-Microsoft Attacker Infrastructure",
            mitre: "T1583.003",
            mitreLabel: "Acquire Infrastructure: Virtual Private Server",
            severity: "medium",
            attacker: "89.144.44.2 — MSCode datacenter — Warsaw, Poland",
            desc: "Genuine Microsoft emails originate from Microsoft Azure (40.x.x.x, 52.x.x.x, 104.x.x.x). This email links to a Polish datacenter server — completely unrelated to Microsoft's global infrastructure.",
          },
          {
            name: "User Execution via Malicious Link",
            mitre: "T1204.001",
            mitreLabel: "User Execution: Malicious Link",
            severity: "medium",
            desc: '"Report the user" CTA button framed as a protective action — victim believes clicking it is safe and helpful, not realising it activates the attack by sending them to the phishing domain.',
          },
        ],
        iocs: [
          {
            type: "IP",
            value: "89.144.44.2",
            note: "MSCode datacenter — Warsaw, Poland",
          },
          {
            type: "Domain",
            value: "thebandalisty.com",
            note: "Phishing domain — 9/95 VirusTotal detections",
          },
          {
            type: "URL",
            value: "http://thebandalisty.com/track/",
            note: "Tracking redirect path",
          },
          {
            type: "Protocol",
            value: "HTTP (not HTTPS)",
            note: "Red flag — real Microsoft always uses HTTPS",
          },
          {
            type: "Subject",
            value: "Microsoft Account - Unusual Sign-in Activity",
            note: "Phishing email subject line",
          },
          {
            type: "Brand",
            value: "Microsoft Account Security Team",
            note: "Impersonated sender identity",
          },
          {
            type: "Trigger",
            value: "Moscow/Russia login location",
            note: "Social engineering geographic manipulation",
          },
          {
            type: "ISP",
            value: "MSCode sp. z o.o.",
            note: "Attacker hosting provider — Poland",
          },
          {
            type: "Detection",
            value: "9/95 VirusTotal vendors",
            note: "Confirmed malicious classification",
          },
        ],
      },

      {
        id: "PHISH-2026-003",
        icon: "☀️",
        title: "Solar Panel Scam — Marketing Phishing Campaign",
        date: "April 2026",
        riskLevel: "HIGH",
        status: "Documented",
        reportFile: phishingDoc3,
        summary:
          "Phishing email promoting solar panel offers using tracking links and domain spoofing to lure users into clicking malicious redirects.",
        fullDescription:
          "A phishing email disguised as a promotional solar panel offer was analysed. The attacker used marketing-style content and urgency tactics to trick users into clicking a tracking URL (go.nltrck.com), which may redirect to malicious or data-harvesting pages.\n\nFull investigation included: email header analysis (SPF/DKIM/DMARC all missing), sender IP reputation check (blacklisted), DNS & URL analysis (AWS-hosted tracking domain), and social engineering evaluation. Despite clean VirusTotal results, context-based analysis confirmed phishing behavior.",

        emailDetails: {
          Subject: "Zonnepanelen voor een goede prijs",
          Sender: "zonnepaneel@appjj.serenitepure.fr",
          "Reply-To": "news@aichakandisha.com",
          "Return-Path": "return@dturm.de",
          Language: "Dutch",
          "Attack Type": "Phishing — Marketing Scam",
          Finding: "Multiple domain mismatch detected",
        },

        headerAnalysis: {
          SPF: "NONE",
          DKIM: "NONE",
          DMARC: "NONE",
          CompAuth: "FAIL",
          "Sender IP": "57.128.69.202",
          Blacklist: "Listed (UCEPROTECTL3)",
          Conclusion:
            "Authentication failed + blacklisted IP → HIGHLY SUSPICIOUS",
        },

        attacks: [
          {
            name: "Domain Spoofing & Mismatch",
            mitre: "T1036.005",
            mitreLabel: "Masquerading: Match Legitimate Name or Location",
            severity: "critical",
            desc: "Multiple unrelated domains used (serenitepure.fr, aichakandisha.com, dturm.de), indicating spoofing and lack of legitimate identity.",
          },
          {
            name: "Malicious Tracking URL",
            mitre: "T1566.002",
            mitreLabel: "Phishing: Spearphishing Link",
            severity: "critical",
            target: "http://go.nltrck.com/?c=495...",
            desc: "Tracking/redirect link hosted on AWS infrastructure. Used to hide final destination and potentially redirect victims to phishing pages.",
          },
          {
            name: "Malicious IP Infrastructure",
            mitre: "T1583.003",
            mitreLabel: "Acquire Infrastructure: Virtual Private Server",
            severity: "medium",
            attacker: "57.128.69.202 — Blacklisted (UCEPROTECTL3)",
            desc: "Sender IP is listed on spam blacklist, indicating previous malicious or spam activity.",
          },
          {
            name: "Social Engineering — Financial Pressure",
            mitre: "T1566",
            mitreLabel: "Phishing",
            severity: "medium",
            desc: "Email uses rising electricity cost and inflation concerns to manipulate users into clicking the link.",
          },
          {
            name: "User Execution via CTA Button",
            mitre: "T1204.001",
            mitreLabel: "User Execution: Malicious Link",
            severity: "medium",
            desc: 'CTA button ("JA, ik wil zonnepanelen offertes") encourages user interaction, leading to potential phishing redirection.',
          },
        ],

        iocs: [
          {
            type: "IP",
            value: "57.128.69.202",
            note: "Blacklisted sender IP (UCEPROTECTL3)",
          },
          {
            type: "Domain",
            value: "serenitepure.fr",
            note: "Spoofed sender domain",
          },
          {
            type: "Domain",
            value: "aichakandisha.com",
            note: "Reply-To domain mismatch",
          },
          { type: "Domain", value: "dturm.de", note: "Return-Path domain" },
          {
            type: "Domain",
            value: "go.nltrck.com",
            note: "Tracking/redirect domain hosted on AWS",
          },
          {
            type: "IP",
            value: "44.235.1.38",
            note: "AWS infrastructure (URL resolution)",
          },
          { type: "IP", value: "50.112.118.65", note: "DNS A record (AWS)" },
          {
            type: "URL",
            value: "http://go.nltrck.com/?c=495",
            note: "Suspicious tracking URL",
          },
        ],
      },







      {
  id: 'PHISH-2026-004',
  icon: '📧',
  title: 'Financial Credit Scam — PDF Attachment Phishing',
  date: 'April 2026',
  riskLevel: 'HIGH',
  status: 'Documented',
  reportFile: phishingDoc4,

  summary: 'Phishing email impersonating financial credit notification using a PDF attachment generated via IronPDF to lure victims into opening potentially malicious content.',

  fullDescription:
    'A phishing email written in Portuguese was analysed, claiming a financial balance credit. The message used minimal content and directed the victim to open an attached PDF file. The attachment was Base64 encoded and generated using IronPDF, a tool commonly abused in phishing campaigns.\n\nFull investigation included: email header analysis (SPF/DKIM/DMARC passed but misleading), sender infrastructure analysis (external IP mismatch with Gmail), attachment decoding (Base64 → PDF), and static file inspection. Despite valid authentication, multiple indicators confirmed phishing behavior.',

  emailDetails: {
    'Subject':            'Liberação de IRPF',
    'Sender':             'prestonconstance587@gmail.com',
    'Return-Path':        'prestonconstance587@gmail.com',
    'Language':           'Portuguese',
    'Attack Type':        'Phishing — Attachment Delivery',
    'Finding':            'Financial lure with malicious PDF attachment',
  },

  headerAnalysis: {
    'SPF':        'PASS',
    'DKIM':       'PASS',
    'DMARC':      'PASS',
    'CompAuth':   'PASS',
    'Sender IP':  '20.97.213.223',
    'Infrastructure': 'External host used despite Gmail sender',
    'Conclusion': 'Authentication passed but infrastructure mismatch → SUSPICIOUS',
  },

  attacks: [
    {
      name: 'Attachment-Based Phishing',
      mitre: 'T1566.001',
      mitreLabel: 'Phishing: Spearphishing Attachment',
      severity: 'critical',
      desc: 'Email delivers a PDF attachment designed to trick users into opening malicious or deceptive content.',
    },
    {
      name: 'Legitimate Service Abuse (Gmail)',
      mitre: 'T1586.002',
      mitreLabel: 'Compromise Accounts: Email Accounts',
      severity: 'medium',
      desc: 'Attacker uses a legitimate Gmail account to bypass SPF, DKIM, and DMARC checks.',
    },
    {
      name: 'Cloud Infrastructure Abuse',
      mitre: 'T1583.003',
      mitreLabel: 'Acquire Infrastructure: Virtual Private Server',
      severity: 'medium',
      attacker: '20.97.213.223',
      desc: 'Email originated from cloud-hosted infrastructure (likely Azure), commonly used for phishing campaigns.',
    },
    {
      name: 'Social Engineering — Financial Lure',
      mitre: 'T1566',
      mitreLabel: 'Phishing',
      severity: 'medium',
      desc: 'Email uses financial incentive (“balance credit”) to create urgency and trick users.',
    },
    {
      name: 'Obfuscated Subject Encoding',
      mitre: 'T1027',
      mitreLabel: 'Obfuscated Files or Information',
      severity: 'low',
      desc: 'Subject line encoded in Base64 to hide real message content and evade detection.',
    },
  ],

  iocs: [
    { type: 'Email', value: 'prestonconstance587@gmail.com', note: 'Suspicious sender email' },
    { type: 'IP',    value: '20.97.213.223',                 note: 'Originating IP (cloud infrastructure)' },
    { type: 'Domain',value: 'gmail.com',                     note: 'Legitimate service abused for phishing' },
    { type: 'File',  value: 'csWuYjyqO2IR.pdf',              note: 'Suspicious PDF attachment' },
    { type: 'Hash',  value: 'N/A',                           note: 'Hash can be extracted from VirusTotal' },
  ],
},



{
  id: 'PHISH-2026-005',
  icon: '🪙',
  title: 'Crypto Reward Scam — Ripple / CoinDesk Impersonation',
  date: 'April 2026',
  riskLevel: 'HIGH',
  status: 'Documented',
  reportFile: phishingDoc5,

  summary: 'Phishing email impersonating CoinDesk newsletter promoting fake Ripple (XRP) rewards using malicious redirect links and email marketing infrastructure abuse.',

  fullDescription:
    'A phishing email disguised as a CoinDesk crypto newsletter was analysed. The attacker used a legitimate-looking email template and branding to promote a fake Ripple (XRP) reward program. The email encourages users to click on embedded links leading to a suspicious domain (mail123-ripple.net).\n\nFull investigation included: header analysis (SPF/DKIM/DMARC passed), infrastructure analysis (Mailgun service abuse), URL inspection (redirect-based phishing domain), and social engineering tactics. Despite valid authentication, multiple red flags confirm phishing activity.',

  emailDetails: {
    'Subject':            'More benefits from Ripple with the Allocation Program',
    'Sender':             'CoinDesk <coindesk@mg.areafellowship.com>',
    'Return-Path':        'mg.areafellowship.com',
    'Reply-To':           'Not clearly defined (hidden/mismatch)',
    'Language':           'English',
    'Attack Type':        'Phishing — Crypto Scam',
    'Finding':            'Brand impersonation (CoinDesk + Ripple)',
  },

  headerAnalysis: {
    'SPF':        'PASS',
    'DKIM':       'PASS',
    'DMARC':      'BESTGUESSPASS',
    'CompAuth':   'PASS',
    'Sender IP':  '198.61.254.55',
    'Service':    'Mailgun (mailgun.net)',
    'SCL Score':  '9 (High Spam Confidence)',
    'Conclusion': 'Legitimate service used but flagged as spam → HIGHLY SUSPICIOUS',
  },

  attacks: [
    {
      name: 'Brand Impersonation',
      mitre: 'T1036.005',
      mitreLabel: 'Masquerading: Match Legitimate Name',
      severity: 'critical',
      desc: 'Email impersonates CoinDesk and references Ripple to gain user trust.',
    },
    {
      name: 'Malicious Redirect URL',
      mitre: 'T1566.002',
      mitreLabel: 'Phishing: Spearphishing Link',
      severity: 'critical',
      target: 'https://mail123-ripple.net/...',
      desc: 'Embedded links redirect users to a suspicious domain likely used for credential harvesting or scams.',
    },
    {
      name: 'Email Service Abuse (Mailgun)',
      mitre: 'T1586.002',
      mitreLabel: 'Compromise Accounts: Email Accounts',
      severity: 'medium',
      desc: 'Attacker uses Mailgun infrastructure to send bulk phishing emails while passing authentication checks.',
    },
    {
      name: 'Tracking Pixel & User Monitoring',
      mitre: 'T1056',
      mitreLabel: 'Input Capture / Tracking',
      severity: 'medium',
      desc: 'Hidden tracking pixel (1x1 image) used to monitor email opens and user activity.',
    },
    {
      name: 'Social Engineering — Financial Incentive',
      mitre: 'T1566',
      mitreLabel: 'Phishing',
      severity: 'medium',
      desc: 'Email promises rewards (15%–30% XRP bonus) to create urgency and attract victims.',
    },
    {
      name: 'User Execution via CTA Links',
      mitre: 'T1204.001',
      mitreLabel: 'User Execution: Malicious Link',
      severity: 'medium',
      desc: 'Multiple CTA links encourage users to click and interact with malicious content.',
    },
  ],

  iocs: [
    { type: 'IP',     value: '198.61.254.55',           note: 'Mailgun sending IP' },
    { type: 'Domain', value: 'mg.areafellowship.com',   note: 'Sender domain (suspicious usage)' },
    { type: 'Domain', value: 'mailgun.net',             note: 'Email service provider (abused)' },
    { type: 'Domain', value: 'mail123-ripple.net',      note: 'Malicious phishing domain' },
    { type: 'URL',    value: 'https://mail123-ripple.net/...', note: 'Phishing redirect link' },
    { type: 'Brand',  value: 'CoinDesk / Ripple (XRP)', note: 'Impersonated entities' },
  ],
},

{
  id: "PHISH-2026-006",
  icon: "📧",
  title: "QuantInsti — Momentum Trading Email (Legitimate Marketing - False Positive)",
  date: "July 2023",
  riskLevel: "NONE",
  status: "Closed - Legitimate Email / Not Phishing",
  // reportFile: "SOC_QuantInsti_False_Positive",
  summary: "This is a legitimate marketing email from QuantInsti. SPF, DKIM, and DMARC all passed. No malicious links, attachments, or credential harvesting forms detected. The recipient address 'phishing@pot' is anomalous but indicates a security researcher sandbox submission or marketing test, not an attack.",
  fullDescription: "An email from Raunaq Sahni (raunaq.s@quantinsti.com) promoting a Momentum Trading course in Portuguese was submitted for forensic analysis. The email was addressed to 'phishing@pot', which triggered suspicion.\n\nFull analysis: header inspection revealed SPF PASS (149.72.51.63 permitted by em.quantinsti.com), DKIM PASS (signature verified for quantinsti.com), and DMARC PASS. Sender IP traced to SendGrid (Twilio), a legitimate email marketing platform. HTML content analysis showed no obfuscated scripts, no attachments, no credential forms, and no exploit code. All embedded URLs decoded via CyberChef: SendGrid tracking URLs redirected to legitimate quantinsti.com domains.\n\nVerdict: NOT PHISHING. This is a legitimate marketing email. The anomalous recipient address 'phishing@pot' suggests this was either (1) a security researcher submitting the email to a honeypot/sandbox for analysis, or (2) a misconfigured marketing test email sent to the wrong address.\n\nNo user action required. No blocks needed.",
  emailDetails: {
    Subject: "Desvende os Segredos do Momentum Trading em Português",
    Sender: "Raunaq Sahni <raunaq.s@quantinsti.com>",
    Recipient: "phishing@pot",
    "Return-Path": "bounces+13167954-ab87-phishing@pot=hotmail.com@em.quantinsti.com",
    Date: "Fri, 28 Jul 2023 19:32:27 +0000",
    "Message-ID": "<USPP9TOgSja8rIXka996_A@geopod-ismtpd-0>",
    "Sender-IP": "149.72.51.63",
    "Content-Type": "text/html; charset=iso-8859-1",
    Language: "Portuguese (Brazil)",
    Finding: "Legitimate marketing email — NOT phishing"
  },
  headerAnalysis: {
    SPF: "PASS",
    DKIM: "PASS",
    DMARC: "PASS",
    CompAuth: "PASS (reason 100)",
    "Received-SPF": "Pass (149.72.51.63 permitted by em.quantinsti.com)",
    "X-SID-Result": "PASS",
    "X-MS-Exchange-Organization-SCL": "1",
    "X-Microsoft-Antispam-BCL": "0",
    Conclusion: "All authentication checks passed. Email is legitimate and authorized by quantinsti.com."
  },
  is_phishing: false,
  verdict: "NOT PHISHING — LEGITIMATE MARKETING EMAIL",
  reasons_not_phishing: [
    "SPF check: PASS — email came from authorized server",
    "DKIM check: PASS — email signature is valid and unmodified",
    "DMARC check: PASS — domain owner approved this email",
    "Links: All resolve to quantinsti.com (legitimate company website)",
    "Attachments: None detected",
    "Credential harvesting: No login forms or password requests in HTML",
    "Sender: Real QuantInsti employee (raunaq.s@quantinsti.com)",
    "Infrastructure: SendGrid — legitimate email marketing platform"
  ],
  anomalies_found: [
    {
      anomaly: "Recipient address: phishing@pot",
      explanation: "Not a real user address. Indicates security researcher sandbox submission or marketing test email.",
      malicious: false
    },
    {
      anomaly: "Return-Path contains malformed syntax: phishing@pot=hotmail.com",
      explanation: "Unusual formatting. May indicate email was rerouted or manually submitted to sandbox.",
      malicious: false
    },
    {
      anomaly: "Email language: Portuguese — Sender region: India",
      explanation: "Language mismatch. QuantInsti is India-based but targets Brazilian Portuguese audience. This is legitimate marketing, not an attack.",
      malicious: false
    }
  ],
  iocs: [
    {
      type: "IP (Legitimate - Whitelist)",
      value: "149.72.51.63",
      note: "SendGrid (Twilio) — Legitimate email marketing infrastructure. NOT malicious."
    },
    {
      type: "Domain (Legitimate)",
      value: "em.quantinsti.com",
      note: "Authorized SendGrid sending domain for QuantInsti. NOT malicious."
    },
    {
      type: "Domain (Legitimate)",
      value: "quantinsti.com",
      note: "Final destination of all links — legitimate trading education company. NOT malicious."
    },
    {
      type: "CDN (Legitimate)",
      value: "d15k2d11r6t6rl.cloudfront.net",
      note: "AWS CloudFront — Legitimate image hosting for QuantInsti. NOT malicious."
    }
  ],
  recommendation: "No action required. No blocks needed. This is a false positive."
},

{
  id: "PHI-2026-007",
  icon: "🎣",
  title: "Elizabeth Ray — Cancer Fund Partnership Scam (419/Nigerian Prince Variant)",
  date: "August 2023",
  riskLevel: "HIGH",
  status: "Documented",
  reportFile: "SOC_Elizabeth_Ray_Phishing_Analysis.pdf",
  summary: "Classic advance-fee fraud (419 scam) email impersonating a dying widow seeking a partner to handle 'allocated funds'. All email authentication checks failed. Sender spoofed, infrastructure compromised, and social engineering uses cancer/urgency tactics.",
  fullDescription: "Email from 'shore@suksapan.or.th' claiming to be Elizabeth Ray, a woman dying of cancer seeking a partner to handle funds from her late husband. This is a classic 419/Nigerian Prince advance-fee fraud scam.\n\nFull analysis: header inspection revealed SPF SOFTFAIL, DKIM NONE, DMARC NONE, and COMPAUTH FAIL. Sender IP 202.129.206.234 traced to Thailand (host4.ns.co.th). Email chain shows relay through compromised Thai hosting provider. Return-Path and From mismatch. Reply-To set to elizabethray993@gmail.com (Google address) — clear red flag. Content uses emotional manipulation (cancer, limited time, late husband) and urgency tactics. HTML and plain text versions both present with identical scam message.\n\nVerdict: CONFIRMED PHISHING/SCAM. This is an advance-fee fraud scheme designed to trick victims into responding, then extracting money under false pretenses (legal fees, transfer fees, taxes, etc.).",
  emailDetails: {
    Subject: "Hi",
    Sender: "shore@suksapan.or.th",
    "From": "shore@suksapan.or.th",
    "Reply-To": "elizabethray993@gmail.com",
    To: "Recipients <shore@suksapan.or.th>",
    "Return-Path": "shore@suksapan.or.th",
    Date: "Tue, 01 Aug 2023 17:09:24 +0100",
    "Sender-IP": "202.129.206.234",
    "X-Sender-IP": "202.129.206.234",
    "X-SID-PRA": "SHORE@SUKSAPAN.OR.TH",
    "X-SID-Result": "FAIL",
    "X-MS-Exchange-Organization-SCL": "5",
    "Content-Type": "multipart/alternative",
    Finding: "CONFIRMED PHISHING / ADVANCE-FEE FRAUD"
  },
  headerAnalysis: {
    SPF: "SOFTFAIL",
    DKIM: "NONE",
    DMARC: "NONE",
    CompAuth: "FAIL (reason 001)",
    "Received-SPF": "SoftFail (domain of transitioning suksapan.or.th discourages use of 202.129.206.234 as permitted sender)",
    "X-SID-Result": "FAIL",
    "X-MS-Exchange-Organization-SCL": "5 (Spam)",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:J (Junk Email)",
    Conclusion: "All authentication checks failed. Email is spoofed or sent from compromised infrastructure. Microsoft marked as Junk (SCL 5)."
  },
  is_phishing: true,
  verdict: "CONFIRMED PHISHING — ADVANCE-FEE FRAUD (419 SCAM)",
  reasons_phishing: [
    "SPF SOFTFAIL — sender IP not authorized by domain owner",
    "DKIM NONE — email not signed by sending domain",
    "DMARC NONE — no domain protection policy",
    "COMPAUTH FAIL — authentication completely failed",
    "Reply-To points to Gmail (elizabethray993@gmail.com) — not the claimed organization",
    "Sender IP 202.129.206.234 — Thailand hosting, not legitimate business infrastructure",
    "X-SID-Result: FAIL — Microsoft could not validate sender",
    "Email routed through compromised Thai hosting (host4.ns.co.th)",
    "Emotional manipulation: 'cancer', 'limited timeframe', 'late husband'",
    "Urgency tactics: 'Urgent Situation', 'limited timeframe'",
    "Classic 419 scam pattern: stranger offering large funds partnership",
    "Microsoft SCL 5 — automatically classified as spam/junk"
  ],
  attacks: [
    {
      name: "Sender Spoofing / Domain Impersonation",
      mitre: "T1566.001",
      mitreLabel: "Phishing: Spearphishing Attachment",
      severity: "critical",
      desc: "Sender spoofed as shore@suksapan.or.th (Thai educational domain). SPF SOFTFAIL, DKIM NONE, DMARC NONE. Reply-To redirects to elizabethray993@gmail.com — a clear deception tactic."
    },
    {
      name: "Advance-Fee Fraud (419 Scam)",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "critical",
      desc: "Classic Nigerian Prince variant. Claims dying of cancer, needs partner for 'allocated funds' from late husband. Victim will be asked to pay fees, taxes, or bribes to release non-existent funds."
    },
    {
      name: "Social Engineering — Emotional Manipulation",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "high",
      target: "Victim's empathy",
      desc: "Uses cancer diagnosis, limited timeframe, late husband's legacy, and 'meaningful impact' to manipulate victim's emotions and bypass rational thinking."
    },
    {
      name: "Urgency Tactic",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "medium",
      desc: "Phrases like 'Urgent Situation', 'limited timeframe due to cancer', and 'seeking a reliable partner' pressure victim to respond quickly without verification."
    },
    {
      name: "Compromised Infrastructure",
      mitre: "T1583.003",
      mitreLabel: "Acquire Infrastructure: VPS",
      severity: "medium",
      attacker: "host4.ns.co.th (202.129.206.234) — Thailand",
      desc: "Email routed through compromised Thai web hosting provider. The server host4.ns.co.th was used to relay the scam email. Abuse report should be filed."
    },
    {
      name: "Mismatched Reply-To Address",
      mitre: "T1036",
      mitreLabel: "Masquerading",
      severity: "high",
      desc: "From: shore@suksapan.or.th (Thai educational domain). Reply-To: elizabethray993@gmail.com (free Gmail). Legitimate businesses never use free email providers for official correspondence."
    }
  ],
  iocs: [
    {
      type: "IP",
      value: "202.129.206.234",
      note: "host4.ns.co.th — Thailand — Compromised hosting infrastructure"
    },
    {
      type: "IP",
      value: "102.69.133.254",
      note: "btclanki122-everest.nord — Original sender source before relay"
    },
    {
      type: "Domain",
      value: "suksapan.or.th",
      note: "Spoofed domain — legitimate Thai educational institution (likely unaware)"
    },
    {
      type: "Email",
      value: "shore@suksapan.or.th",
      note: "Spoofed sender — compromised or impersonated account"
    },
    {
      type: "Email",
      value: "elizabethray993@gmail.com",
      note: "Reply-To address — attacker-controlled Gmail account"
    },
    {
      type: "Domain",
      value: "host4.ns.co.th",
      note: "Thai hosting provider — used to relay scam email"
    },
    {
      type: "Pattern",
      value: "419 / Nigerian Prince / Advance-Fee Fraud",
      note: "Classic scam pattern: dying person, large funds, seeking partner"
    }
  ],
  scam_indicators: [
    "Unsolicited email from stranger",
    "Story involves large sums of money",
    "Emotional manipulation (cancer, death, legacy)",
    "Urgency to act quickly",
    "Reply-To is free email service (Gmail)",
    "Poor grammar and vague details",
    "No specific information about the funds",
    "Request to reply for 'more details' (first step of scam)"
  ],
  recommendation: "BLOCK sender IP 202.129.206.234. BLOCK domain suksapan.or.th if not needed. Report elizabethray993@gmail.com to Google. File abuse report with host4.ns.co.th. User education: Never respond to unsolicited partnership offers. No action required for recipient beyond deleting the email."
},


{
  id: "PHI-2026-008",
  icon: "💰",
  title: "Warren Buffett $5 Million Charity Donation Scam (419 Advance-Fee Fraud)",
  date: "August 2023",
  riskLevel: "HIGH",
  status: "Documented",
  // reportFile: "SOC_Warren_Buffett_Scam_Analysis.pdf",
  summary: "Classic 419 advance-fee fraud impersonating Warren Buffett. Claims $5 million donation but requests personal information (name, address, phone). All authentication checks failed. Uses emotional manipulation (cancer, death, dying in hospital) and authority impersonation (Warren Buffett).",
  fullDescription: "Email impersonating Warren Buffett, the famous billionaire investor, claiming the recipient has been selected for a $5 million donation. The scammer uses real news articles about Buffett's charity work to appear legitimate. Email requests personal information including full name, address, and phone number — the first step in an advance-fee fraud scheme where victims will later be asked to pay 'fees' or 'taxes' to release the non-existent funds.\n\nFull analysis: SPF NONE, DKIM NONE, DMARC NONE, COMPAUTH FAIL. Sender IP 117.121.214.50 traced to unknown server (mail.srv.world). Private IP 192.168.0.254 in received chain indicates home network origin. Reply-To set to mrwarrenb55@gmail.com — free Gmail account. X-Mailer shows Outlook Express 6.0 (released 2001) — obvious fake header. Microsoft SCL 5 and dest:J confirm delivery to junk folder.\n\nVerdict: CONFIRMED PHISHING / ADVANCE-FEE FRAUD (419 SCAM) — Impersonating Warren Buffett.",
  emailDetails: {
    Subject: "52Greetings to You my good friend",
    From: "\"Mr.Warren Buffett Billionaire investor\" <test@central.mercfresh.com>",
    "Reply-To": "mrwarrenb55@gmail.com",
    To: "Undisclosed recipients:",
    "Return-Path": "test@central.mercfresh.com",
    Date: "Wed, 2 Aug 2023 16:40:17 -0700",
    "Sender-IP": "117.121.214.50",
    "X-Sender-IP": "117.121.214.50",
    "X-SID-PRA": "TEST@CENTRAL.MERCFRESH.COM",
    "X-SID-Result": "NONE",
    "X-MS-Exchange-Organization-SCL": "5",
    "X-Mailer": "Microsoft Outlook Express 6.00.2600.0000",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:J",
    "X-Microsoft-Antispam-BCL": "9",
    Finding: "CONFIRMED PHISHING — 419 Advance-Fee Fraud"
  },
  headerAnalysis: {
    SPF: "NONE",
    DKIM: "NONE",
    DMARC: "NONE",
    CompAuth: "FAIL (reason 001)",
    "Received-SPF": "None (central.mercfresh.com does not designate permitted sender hosts)",
    "X-SID-Result": "NONE",
    "X-MS-Exchange-Organization-SCL": "5 (Spam)",
    "X-Microsoft-Antispam-BCL": "9 (Very likely spam)",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:J (Delivered to Junk)",
    Conclusion: "All authentication checks failed or returned NONE. Microsoft delivered directly to Junk folder. BCL 9 indicates very high spam confidence."
  },
  is_phishing: true,
  verdict: "CONFIRMED PHISHING — 419 ADVANCE-FEE FRAUD (Impersonating Warren Buffett)",
  reasons_phishing: [
    "SPF NONE — domain has no SPF record or no authorized IPs",
    "DKIM NONE — no digital signature, email could be completely forged",
    "DMARC NONE — no domain protection policy",
    "COMPAUTH FAIL — Microsoft authentication failed",
    "X-SID-Result: NONE — no sender validation possible",
    "Reply-To is Gmail (mrwarrenb55@gmail.com) — not legitimate",
    "From domain central.mercfresh.com — NOT Berkshire Hathaway",
    "Sender IP 117.121.214.50 — unknown server (mail.srv.world)",
    "Private IP 192.168.0.254 in received chain — originated from home network",
    "X-Mailer: Outlook Express 6.0 — software from 2001, obvious fake header",
    "Microsoft SCL 5 — flagged as spam",
    "Microsoft BCL 9 — very high spam confidence",
    "Dest: J — delivered to junk folder",
    "Impersonates Warren Buffett — famous billionaire (authority figure)",
    "Claims $5 million donation to stranger — unrealistic",
    "Emotional manipulation: 'cancer', 'wife died', 'I am sick', 'writing from hospital'",
    "Requests personal information: name, address, phone number",
    "Classic 419 pattern: famous name + large sum + emotional story + request for info"
  ],
  attacks: [
    {
      name: "Authority Impersonation (Warren Buffett)",
      mitre: "T1566.002",
      mitreLabel: "Spearphishing Link",
      severity: "critical",
      desc: "Scammer impersonates Warren Buffett, one of the world's most famous billionaires, to appear legitimate. Uses real LA Times article about Buffett's charity work as 'proof'."
    },
    {
      name: "Sender Spoofing / Domain Impersonation",
      mitre: "T1566.001",
      mitreLabel: "Phishing: Spearphishing Attachment",
      severity: "critical",
      desc: "From address uses test@central.mercfresh.com — completely unrelated to Warren Buffett. SPF/DKIM/DMARC all NONE or FAIL."
    },
    {
      name: "Advance-Fee Fraud (419 Scam)",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "critical",
      desc: "Classic 419 variant. Claims $5 million donation but first requests personal information. Next steps would include requests for 'fees', 'taxes', or 'legal costs' to release the non-existent funds."
    },
    {
      name: "Emotional Manipulation — Death and Cancer",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "high",
      desc: "Uses wife's cancer, wife's death, sender's own illness, hospital computer, and dying within months. Designed to bypass rational thinking through sympathy."
    },
    {
      name: "Urgency Tactic — Impending Death",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "high",
      desc: "'I don't know when I will die', 'I only have a few months left on earth' — pressures victim to act quickly without verification."
    },
    {
      name: "Free Email Provider Abuse",
      mitre: "T1036",
      mitreLabel: "Masquerading",
      severity: "medium",
      desc: "Reply-To: mrwarrenb55@gmail.com — attacker-controlled Gmail account. Legitimate billionaires do not use free email services."
    },
    {
      name: "Fake Email Headers / Obsolete Software",
      mitre: "T1036",
      mitreLabel: "Masquerading",
      severity: "medium",
      desc: "X-Mailer shows 'Microsoft Outlook Express 6.00.2600.0000' — software released in 2001, discontinued for years. Obvious fake header used by scammer."
    },
    {
      name: "Home Network Origin",
      mitre: "T1583",
      mitreLabel: "Acquire Infrastructure",
      severity: "low",
      desc: "Private IP 192.168.0.254 in received chain indicates email originated from a home or small office network, not professional email infrastructure."
    }
  ],
  iocs: [
    {
      type: "IP",
      value: "117.121.214.50",
      note: "mail.srv.world — Unknown server, likely compromised or malicious"
    },
    {
      type: "IP (Private)",
      value: "192.168.0.254",
      note: "Internal/home network — indicates non-professional origin"
    },
    {
      type: "Domain",
      value: "central.mercfresh.com",
      note: "Spoofed sender domain — NOT affiliated with Warren Buffett"
    },
    {
      type: "Domain",
      value: "mail.srv.world",
      note: "Relay server — unknown reputation"
    },
    {
      type: "Email",
      value: "mrwarrenb55@gmail.com",
      note: "Reply-To address — attacker-controlled Gmail account"
    },
    {
      type: "Email",
      value: "test@central.mercfresh.com",
      note: "Spoofed sender — 'test' account used"
    },
    {
      type: "Pattern",
      value: "419 / Nigerian Prince / Advance-Fee Fraud",
      note: "Classic scam pattern: famous person + large sum + emotional story + request for personal info"
    },
    {
      type: "Pattern",
      value: "Warren Buffett Impersonation Scam",
      note: "Well-documented scam variant. Real Warren Buffett has publicly warned about these scams."
    }
  ],
  red_flags_quick_list: [
    "🚩 Warren Buffett using Gmail? NO — he uses Berkshire Hathaway",
    "🚩 $5 million to a random stranger? NO — doesn't happen",
    "🚩 Writing from hospital computer? NO — emotional manipulation",
    "🚩 Wife died of cancer + I'm dying too? NO — classic scam script",
    "🚩 Outlook Express 6.0 in 2023? NO — software from 2001",
    "🚩 Private IP 192.168.x.x in email trace? NO — came from home network",
    "🚩 SPF NONE, DKIM NONE, DMARC NONE? NO — no authentication",
    "🚩 Microsoft sent it to JUNK folder? YES — they already knew"
  ],
  recommendation: "BLOCK domain central.mercfresh.com. BLOCK IP 117.121.214.50. Report mrwarrenb55@gmail.com to Google. File abuse report with mail.srv.world hosting provider. User education: No billionaire gives $5 million to random strangers via email. Delete immediately. Do not reply. Do not send personal information."
},
{
  id: "PHI-2026-009",
  icon: "🍏",
  title: "Apple iCloud Storage Full Scam — Credit Card Phishing (Impersonating Apple)",
  date: "July 2023",
  riskLevel: "HIGH",
  status: "Documented",
  // reportFile: "SOC_Apple_iCloud_Phishing_Analysis.pdf",
  summary: "Phishing email impersonating Apple iCloud. Claims storage is full and offers 50GB free, but requires credit card information for 'Apple ID validation'. From address spoofs Otto.de (German retailer) while content impersonates Apple. All authentication checks failed. Links go to malicious firiri.shop domain via t.co shortener.",
  fullDescription: "Phishing email targeting German-speaking users, impersonating Apple iCloud. Email claims the user's iCloud storage is full and offers 50GB free as part of a 'loyalty program'. To claim the free storage, the user must enter credit card information for 'Apple ID validation' with a false promise that no charges will be made.\n\nFull analysis: From address spoofs newsletter.otto.de (German retail company) while the email content displays Apple logo and branding — complete mismatch. SPF SOFTFAIL, DKIM NONE, DMARC FAIL. Reply-To and Return-Point to winner-win.art — suspicious domain. Sender IP 80.96.157.91 traced to unknown host with random gibberish hostname 'qktfxzqsjmwfnksijbkrjpmhgadbswa.whskk2'. Links use t.co (Twitter shortener) to hide final destination: bsq2.firiri.shop (malicious .shop domain). Email contains tracking pixel to confirm open rates.\n\nVerdict: CONFIRMED PHISHING — Credential Harvesting (Apple ID / Credit Card)",
  emailDetails: {
    Subject: "phishing@pot, 𝕀𝕙𝕣 𝕚ℂ𝕝𝕠𝕦𝕕-𝕊𝕡𝕖𝕚𝕔𝕙𝕖𝕣 𝕚𝕤𝕥 𝕧𝕠𝕝𝕝",
    From: "Dringend->Icloud📱❌ <otto-newsletter@newsletter.otto.de>",
    "Reply-To": "reply_to@winner-win.art",
    To: "phishing@pot",
    Cc: "phishing@pot",
    "Return-Path": "return@winner-win.art",
    Date: "Sat, 29 Jul 2023 19:16:53 +0200",
    Sender: "hello <otto-newsletter@newsletter.otto.de>",
    "Sender-IP": "80.96.157.91",
    "X-Sender-IP": "80.96.157.91",
    "X-SID-PRA": "OTTO-NEWSLETTER@NEWSLETTER.OTTO.DE",
    "X-SID-Result": "NONE",
    "X-MS-Exchange-Organization-SCL": "5",
    "X-Microsoft-Antispam-BCL": "8",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:I",
    "Message-Id": "<naCPZlN.28948.177+=phishing@pot@winner-win.art>",
    Finding: "CONFIRMED PHISHING — Apple iCloud Impersonation / Credit Card Harvesting"
  },
  headerAnalysis: {
    SPF: "SOFTFAIL",
    DKIM: "NONE",
    DMARC: "FAIL (action=none header.from=newsletter.otto.de)",
    CompAuth: "Not present",
    "Received-SPF": "SoftFail (domain of transitioning winner-win.art discourages use of 80.96.157.91 as permitted sender)",
    "X-SID-Result": "NONE",
    "X-MS-Exchange-Organization-SCL": "5 (Spam)",
    "X-Microsoft-Antispam-BCL": "8 (Very high bulk/spam confidence)",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:I (Inbox delivery despite spam flags)",
    Conclusion: "All authentication checks failed. Microsoft BCL 8 indicates very high spam confidence."
  },
  is_phishing: true,
  verdict: "CONFIRMED PHISHING — Apple iCloud Impersonation / Credit Card Harvesting",
  reasons_phishing: [
    "SPF SOFTFAIL — sender IP not fully authorized",
    "DKIM NONE — no digital signature",
    "DMARC FAIL — domain authentication failed",
    "From domain is otto.de (German retailer) but email claims to be Apple iCloud — COMPLETE MISMATCH",
    "Reply-To and Return-Path use winner-win.art — different from From domain",
    "winner-win.art is a suspicious .art TLD (cheap, easy to register)",
    "Sender hostname is random gibberish: qktfxzqsjmwfnksijbkrjpmhgadbswa.whskk2",
    "Sender IP 80.96.157.91 — unknown, not Apple infrastructure",
    "Links use t.co (Twitter shortener) to hide real destination",
    "Real destination: bsq2.firiri.shop — malicious .shop domain",
    "Email asks for credit card information — credential harvesting",
    "Fake promise: 'We will not charge any amount' — classic scam lie",
    "Contains tracking pixel to confirm email opens",
    "Subject contains phishing@pot — test/honeypot address",
    "Subject uses fancy Unicode bold characters — filter evasion tactic",
    "Microsoft BCL 8 — very high spam confidence",
    "Microsoft SCL 5 — flagged as spam"
  ],
  attacks: [
    {
      name: "Brand Impersonation — Apple iCloud",
      mitre: "T1566.002",
      mitreLabel: "Spearphishing Link",
      severity: "critical",
      desc: "Email displays Apple logo and iCloud branding but is sent from otto.de domain. Complete brand mismatch designed to trick users who see the Apple logo and don't check the sender address."
    },
    {
      name: "Credential Harvesting — Credit Card / Apple ID",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "critical",
      desc: "Email explicitly asks users to enter credit card information for 'Apple ID validation'. This is the primary goal — stealing credit card details and Apple ID credentials."
    },
    {
      name: "Domain Spoofing — Otto.de",
      mitre: "T1566.001",
      mitreLabel: "Phishing: Spearphishing Attachment",
      severity: "high",
      desc: "From address spoofs newsletter.otto.de — a legitimate German retail company. SPF SOFTFAIL, DKIM NONE, DMARC FAIL means the email is not authorized by Otto."
    },
    {
      name: "URL Obfuscation — t.co Shortener",
      mitre: "T1566.002",
      mitreLabel: "Spearphishing Link",
      severity: "medium",
      desc: "All buttons and links use t.co (Twitter link shortener) to hide the malicious destination bsq2.firiri.shop."
    },
    {
      name: "Malicious Infrastructure — firiri.shop",
      mitre: "T1583.003",
      mitreLabel: "Acquire Infrastructure: VPS",
      severity: "high",
      attacker: "bsq2.firiri.shop — malicious phishing domain",
      desc: "The phishing landing page is hosted on firiri.shop — a cheap .shop TLD commonly used by scammers. Domain should be blocked."
    },
    {
      name: "Social Engineering — Urgency + Free Offer",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "high",
      desc: "Claims iCloud storage is full (urgency) and offers 50GB free (too good to be true). Combined with 'Dringend' (Urgent) in display name."
    },
    {
      name: "Tracking Pixel — Open Rate Tracking",
      mitre: "T1189",
      mitreLabel: "Drive-by Compromise",
      severity: "low",
      desc: "1x1 hidden image from firiri.shop confirms to the scammer that the email was opened and the victim is active."
    },
    {
      name: "Filter Evasion — Unicode Bold Characters",
      mitre: "T1036",
      mitreLabel: "Masquerading",
      severity: "low",
      desc: "Subject uses mathematical bold characters (𝕀𝕙𝕣) instead of normal text to bypass spam filters."
    }
  ],
  iocs: [
    {
      type: "IP",
      value: "80.96.157.91",
      note: "Sender IP — Unknown, needs reputation check"
    },
    {
      type: "Domain",
      value: "winner-win.art",
      note: "Suspicious .art TLD — used in Reply-To and Return-Path"
    },
    {
      type: "Domain",
      value: "newsletter.otto.de",
      note: "Spoofed domain — legitimate German retailer (not involved in scam)"
    },
    {
      type: "Domain",
      value: "bsq2.firiri.shop",
      note: "Malicious phishing domain — hosts credential harvesting page"
    },
    {
      type: "Domain",
      value: "firiri.shop",
      note: "Malicious .shop TLD — block immediately"
    },
    {
      type: "URL (Shortened)",
      value: "https://t.co/gDHura2rGc",
      note: "Twitter shortener hiding malicious destination"
    },
    {
      type: "URL (Malicious)",
      value: "http://bsq2.firiri.shop/V0RPUjMzbjdPeHRLVlo2RFZ4WXBqZklYbTBnY1Btc1R5aUp4cWNUMzNOUjJnNDNjUUg5NUt2U1hYQkFpYlIyVi82NHBrdDVpRnhPdG1tQWlZbWVWMUE9PQ__",
      note: "Base64-encoded phishing page"
    },
    {
      type: "Email",
      value: "reply_to@winner-win.art",
      note: "Attacker-controlled reply address"
    },
    {
      type: "Email",
      value: "return@winner-win.art",
      note: "Attacker-controlled return path"
    },
    {
      type: "Pattern",
      value: "Apple iCloud Storage Phishing",
      note: "Well-known phishing variant — fake storage alerts asking for credit card"
    },
    {
      type: "Pattern",
      value: "phishing@pot in subject and Message-Id",
      note: "Indicates security researcher submission or honeypot"
    }
  ],
  red_flags_quick_list: [
    "🚩 Apple email from @otto.de? NO — Otto is a German RETAILER",
    "🚩 Apple using t.co shortener? NO — they use their own domains",
    "🚩 Apple using .shop domain? NO — they use apple.com or icloud.com",
    "🚩 Asking for credit card via email? NO — Apple never does this",
    "🚩 'We won't charge you' — classic scam promise",
    "🚩 Random gibberish hostname in Received line? YES — scammer infrastructure",
    "🚩 SPF SOFTFAIL, DKIM NONE, DMARC FAIL? YES — all failed",
    "🚩 Tracking pixel in email? YES — scammers tracking opens",
    "🚩 Unicode bold characters in subject? YES — filter evasion"
  ],
  what_apple_actually_does: [
    "Apple sends iCloud storage alerts from @icloud.com or @apple.com",
    "Apple NEVER asks for credit card information via email",
    "Apple NEVER uses link shorteners (t.co, bit.ly, etc.) for account alerts",
    "Apple NEVER offers 'free storage' via email links",
    "Apple always directs you to log in directly at iCloud.com, not click email links"
  ],
  recommendation: "BLOCK domains: winner-win.art, firiri.shop, bsq2.firiri.shop. BLOCK IP 80.96.157.91. Report malicious URLs to Twitter (t.co abuse) and to Google Safe Browsing. User education: Apple will never ask for credit card information via email. Always go directly to iCloud.com to check storage. Never click links in unexpected emails. Delete immediately."
},

{
  id: "PHI-2026-010",
  icon: "📎",
  title: "PayPal Invoice Scam — Malicious PDF Attachment (Credential/Financial Harvesting)",
  date: "August 2023",
  riskLevel: "HIGH",
  status: "Documented",
  // reportFile: "SOC_PayPal_PDF_Phishing_Analysis.pdf",
  summary: "Phishing email impersonating PayPal with a malicious PDF attachment. Email body is empty to evade filters. PDF named 'DocumentActionRequired-(PP)#...pdf' designed to look like an official PayPal invoice. Sender domain is freeducation.co.uk (UK education), not PayPal. SPF NONE, DKIM passed via Google, DMARC NONE. Email delivered to Inbox (SCL 1, dest:I).",
  fullDescription: "Phishing email targeting PayPal users. The email comes from cscservdab-01774233358@freeducation.co.uk with display name 'support@inlt.payp... .com' (truncated to look like PayPal). The email body is completely empty — a technique used to bypass spam filters that scan email text. The malicious content is contained in a PDF attachment named 'DocumentActionRequired-(PP)#645764584 (11).pdf'.\n\nFull analysis: SPF NONE, DKIM PASS (but via Google's gappssmtp.com, not proof of legitimacy), DMARC NONE. X-SID-Result NONE. Microsoft SCL 1 (low spam score) and dest:I (Inbox delivery) — this email likely reached the user's inbox. The PDF contains a PayPal logo and fake invoice/document requesting action. Victims are likely asked to call a phone number or visit a phishing website to enter credentials or financial information.\n\nVerdict: CONFIRMED PHISHING — Malicious PDF Attachment (PayPal Impersonation)",
  emailDetails: {
    Subject: "Action required for validate. Ref-325234325",
    From: "\"support@inlt.payp... .com\" <cscservdab-01774233358@freeducation.co.uk>",
    To: "undisclosed-recipients:",
    Bcc: "phishing@pot",
    "Return-Path": "cscservdab-01774233358@freeducation.co.uk",
    Date: "Mon, 7 Aug 2023 04:55:46 +0800",
    "Message-ID": "<CADi0ko-tPf0tWWHSJoXxS68EBrbkU9AX8ki1wjstOd93E6Hw5w@mail.gmail.com>",
    "Sender-IP": "209.85.160.41",
    "X-Sender-IP": "209.85.160.41",
    "X-SID-PRA": "CSCSERVDAB-01774233358@FREEDUCATION.CO.UK",
    "X-SID-Result": "NONE",
    "X-MS-Exchange-Organization-SCL": "1",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:I",
    "Attachment": "DocumentActionRequired-(PP)#645764584 (11).pdf (application/pdf)",
    "Email Body": "Empty (only HTML wrapper)",
    Finding: "CONFIRMED PHISHING — Malicious PDF Attachment"
  },
  headerAnalysis: {
    SPF: "NONE",
    DKIM: "PASS (but from freeducation-co-uk.20221208.gappssmtp.com — Google, not the claimed domain)",
    DMARC: "NONE",
    CompAuth: "Not present",
    "Received-SPF": "None (freeducation.co.uk does not designate permitted sender hosts)",
    "X-SID-Result": "NONE",
    "X-MS-Exchange-Organization-SCL": "1 (Low spam score — dangerous, went to Inbox)",
    "X-Microsoft-Antispam-Mailbox-Delivery": "dest:I (Inbox delivery)",
    "X-Microsoft-Antispam-BCL": "0",
    Conclusion: "Email sent via Google infrastructure. SPF/DMARC failures indicate spoofing. Low SCL allowed delivery to Inbox."
  },
  is_phishing: true,
  verdict: "CONFIRMED PHISHING — Malicious PDF Attachment (PayPal Impersonation)",
  reasons_phishing: [
    "From domain is freeducation.co.uk (UK education) — NOT PayPal",
    "Display name tries to look like PayPal but is truncated",
    "SPF NONE — no authorization for sending IP",
    "DMARC NONE — no domain protection",
    "Email body is completely empty — evasion technique",
    "Contains PDF attachment named to look like PayPal document",
    "PDF likely contains fake invoice/phishing content",
    "X-SID-Result NONE — no sender validation",
    "Recipient is 'undisclosed-recipients' + Bcc — hides real targets"
  ],
  attacks: [
    {
      name: "Malicious PDF Attachment",
      mitre: "T1566.001",
      mitreLabel: "Phishing: Spearphishing Attachment",
      severity: "critical",
      desc: "Email contains a PDF attachment named 'DocumentActionRequired-(PP)#645764584 (11).pdf'. The PDF likely contains a fake PayPal invoice or notification designed to trick the victim into calling a phone number or visiting a phishing website to enter credentials/financial information."
    },
    {
      name: "Brand Impersonation — PayPal",
      mitre: "T1566.002",
      mitreLabel: "Spearphishing Link",
      severity: "critical",
      desc: "Email impersonates PayPal using display name 'support@inlt.payp... .com' and PDF filename with '(PP)' to suggest PayPal. The PDF likely contains PayPal branding."
    },
    {
      name: "Domain Spoofing — freeducation.co.uk",
      mitre: "T1566.001",
      mitreLabel: "Phishing: Spearphishing Attachment",
      severity: "high",
      desc: "Sender domain is freeducation.co.uk — a legitimate UK education domain (likely compromised or impersonated). SPF NONE and DMARC NONE allowed this spoof to succeed."
    },
    {
      name: "Empty Email Body — Filter Evasion",
      mitre: "T1036",
      mitreLabel: "Masquerading",
      severity: "medium",
      desc: "Email body is completely empty (only HTML wrapper with <br>). This technique is used to bypass spam filters that scan email text for malicious keywords."
    },
    {
      name: "Bcc Phishing",
      mitre: "T1566",
      mitreLabel: "Phishing",
      severity: "medium",
      desc: "Email sent to 'undisclosed-recipients:' with Bcc: phishing@pot. Hides the true recipients from each other."
    }
  ],
  iocs: [
    {
      type: "IP",
      value: "209.85.160.41",
      note: "Google mail server — legitimate infrastructure abused by scammer"
    },
    {
      type: "Domain",
      value: "freeducation.co.uk",
      note: "Spoofed sender domain — legitimate UK education domain (likely compromised or impersonated)"
    },
    {
      type: "Email",
      value: "cscservdab-01774233358@freeducation.co.uk",
      note: "Spoofed sender address"
    },
    {
      type: "Filename",
      value: "DocumentActionRequired-(PP)#645764584 (11).pdf",
      note: "Malicious PDF attachment — DO NOT OPEN"
    },
    {
      type: "Pattern",
      value: "PayPal Invoice Phishing",
      note: "Common scam — fake invoice with malicious PDF or link"
    },
    {
      type: "Pattern",
      value: "Empty email body with PDF attachment",
      note: "Filter evasion technique"
    }
  ],
  red_flags_quick_list: [
    "🚩 Email claims to be PayPal but sent from freeducation.co.uk? NO",
    "🚩 PayPal using PDF attachments? NO — they use secure messages within your account",
    "🚩 Email body completely empty? YES — suspicious",
    "🚩 SPF NONE, DMARC NONE? YES — authentication failed",
    "🚩 Attachment named 'Action Required' with random numbers? YES — social engineering",
    "🚩 Sent to 'undisclosed-recipients'? YES — hiding true targets"
  ],
  what_paypal_actually_does: [
    "PayPal sends emails from @paypal.com or @paypal.co.uk",
    "PayPal never sends unexpected PDF attachments",
    "PayPal always addresses you by your full name, not 'Customer' or 'User'",
    "PayPal tells you to log into your account directly, not open attachments",
    "PayPal has SPF/DKIM/DMARC properly configured — their emails PASS all checks"
  ],
  recommendation: "DO NOT OPEN the PDF attachment. DO NOT REPLY. Delete the email immediately. If you have already opened the PDF and entered any information, contact your bank and PayPal immediately. Block domain freeducation.co.uk if not needed. Report the email to PayPal at phishing@paypal.com. User education: Never open unexpected attachments, even if they appear to be from companies you trust. Always log into your accounts directly, not via email links or attachments."
}






      // ── ADD MORE PHISHING CASES HERE IN THE FUTURE ──────────
     
    ],
  },

  // ════════════════════════════════════════════════════════════
  //  PROJECT 3 — SPLUNK SIEM COLLECTION
  // ════════════════════════════════════════════════════════════
  {
    id: 3,
    icon: "🔎",
    title: "Splunk SIEM — Log Analysis & Threat Investigation",
    subtitle: "SIEM INVESTIGATIONS COLLECTION",
    description:
      "A growing collection of security log analysis investigations using Splunk Enterprise. Each case covers SPL query building, multi-phase attack correlation, MITRE ATT&CK mapping, and incident reporting.",
    isCollection: true,
    tools: [
      "Splunk Enterprise 10.0.1",
      "SPL",
      "Windows 10",
      "BOTS Dataset",
      "Security-Datasets",
      "MITRE ATT&CK",
    ],
    cases: [
      // ── CASE 1 ──────────────────────────────────────────────
      {
        id: "SPLUNK-2026-001",
        icon: "⚔️",
        title: "Multi-Stage Attack — Recon to Reverse Shell",
        date: "April 2026",
        riskLevel: "CRITICAL",
        status: "Documented",
        reportFile: splunkDoc,
        summary:
          "Complete 7-phase attack chain detected via Splunk SPL — Port Scan → Brute Force → Mimikatz → Data Exfiltration → Reverse Shell. 8 CRITICAL events across 21 total logs.",
        fullDescription:
          "A comprehensive security incident investigation conducted using Splunk Enterprise 10.0.1 as the primary SIEM platform. Analyzed open-source security log datasets (BOTS, Security-Datasets) to identify, correlate, and document a multi-stage cyberattack scenario.\n\nThe analysis uncovered a complete attack chain — from initial network reconnaissance through privilege escalation, credential theft, and data exfiltration — all identified through structured log analysis and Splunk SPL queries.\n\nAttacker IP: 192.168.1.105 → Victim IP: 192.168.1.10\nTotal events analyzed: 21 | Critical severity events: 8\nAttack duration: 7 minutes 30 seconds (08:15:00 – 08:22:30 UTC)",
        emailDetails: {
          Platform: "Splunk Enterprise 10.0.1 (127.0.0.1:8000)",
          "Data Source":
            "Open-source security log datasets (BOTS, Security-Datasets)",
          "Total Events Analyzed": "21 events across all investigations",
          "Critical Severity Events": "8 CRITICAL-level alerts identified",
          "Attacker IP": "192.168.1.105",
          "Victim IP": "192.168.1.10",
          "Investigation Date": "November 15, 2024 (log timestamps)",
        },
        headerAnalysis: {
          "Phase 1 — 08:15:00": "PORT_SCAN — Reconnaissance — MEDIUM",
          "Phase 2 — 08:15–08:17":
            "BRUTE_FORCE — RDP attack — Account compromised — CRITICAL",
          "Phase 3 — 08:17:10":
            "PRIVILEGE ESCALATION — Admin rights assigned — CRITICAL",
          "Phase 4 — 08:20–08:20:10":
            "CREDENTIAL_DUMP — Mimikatz + LSASS + Pass-the-Hash — CRITICAL",
          "Phase 5 — 08:22:00":
            "DATA_EXFIL — 50MB to 185.220.101.45 (Tor exit node) — CRITICAL",
          "Phase 6 — 08:22:30":
            "REVERSE_SHELL — Metasploit persistence established — CRITICAL",
          Correlation:
            "192.168.1.105 generated 16/21 events (76% of all attack traffic)",
        },
        attacks: [
          {
            name: "Port Scan — Network Reconnaissance",
            mitre: "T1046",
            mitreLabel: "Network Service Discovery",
            severity: "medium",
            attacker: "192.168.1.105",
            target: "192.168.1.10",
            desc: 'SPL: index=main attack_type="PORT_SCAN" | stats count by src_ip, dst_port | sort -count\n\n5 events. Ports targeted: 22 (SSH), 80 (HTTP), 445 (SMB), 3389 (RDP). Port 445 and 3389 flagged as high-value Windows targets indicating planned RDP brute force follow-up.',
          },
          {
            name: "RDP Brute Force — Account Compromise",
            mitre: "T1110",
            mitreLabel: "Brute Force",
            severity: "critical",
            attacker: "192.168.1.105",
            target: "192.168.1.10 — administrator account",
            desc: 'SPL: index=main attack_type="BRUTE_FORCE" | table timestamp, src_ip, user, severity, description\n\n7 events. 20+ failed logins within 2-minute window. Successful compromise at 08:17:05. Admin privileges assigned 5 seconds later — pre-configured escalation script confirmed.',
          },
          {
            name: "Mimikatz — Credential Dumping + Pass-the-Hash",
            mitre: "T1003.001",
            mitreLabel: "OS Credential Dumping: LSASS Memory",
            severity: "critical",
            attacker: "192.168.1.105",
            target: "LSASS Memory — 192.168.1.10",
            desc: 'SPL: index=main attack_type="CREDENTIAL_DUMP" OR attack_type="DATA_EXFIL" | table timestamp, severity, src_ip, description\n\nSequence: mimikatz.exe (08:20:00) → LSASS handle opened (08:20:03) → sekurlsa::logonpasswords (08:20:05) → Pass-the-Hash with NTLM hash (08:20:10). All 5 events CRITICAL.',
          },
          {
            name: "Data Exfiltration to C2 / Tor Exit Node",
            mitre: "T1048",
            mitreLabel: "Exfiltration Over Alternative Protocol",
            severity: "critical",
            attacker: "192.168.1.105",
            target: "185.220.101.45 — Tor exit node",
            desc: "50MB of data exfiltrated at 08:22:00 to 185.220.101.45 — a known Tor exit node IP range, indicating the attacker routed stolen data through anonymization infrastructure to evade attribution.",
          },
          {
            name: "Reverse Shell — Metasploit Persistence",
            mitre: "T1059.004",
            mitreLabel: "Command and Scripting Interpreter",
            severity: "critical",
            attacker: "192.168.1.105",
            target: "192.168.1.10",
            desc: "Metasploit reverse shell established at 08:22:30 providing persistent C2 access. Final kill chain phase — attacker maintained access even after the initial brute force session.",
          },
          {
            name: "Full Attack Chain Correlation Query",
            mitre: "T1078",
            mitreLabel: "Valid Accounts",
            severity: "critical",
            desc: 'SPL: index=main severity="CRITICAL" | table timestamp, attack_type, src_ip, dst_ip, description | sort timestamp\n\n8 CRITICAL events confirmed spanning 08:17:05–08:22:30. Attacker generated 76% of all 21 logged events from single IP.',
          },
        ],
        iocs: [
          {
            type: "IP",
            value: "192.168.1.105",
            note: "Attacker source IP — generated 16/21 events",
          },
          {
            type: "IP",
            value: "185.220.101.45",
            note: "C2 server / Tor exit node — exfiltration target",
          },
          {
            type: "Host",
            value: "192.168.1.10",
            note: "Victim host — fully compromised",
          },
          {
            type: "Port",
            value: "3389 (RDP)",
            note: "Brute forced — initial access vector",
          },
          {
            type: "Port",
            value: "445 (SMB)",
            note: "Scanned — targeted for lateral movement",
          },
          {
            type: "Tool",
            value: "Mimikatz / sekurlsa::logonpasswords",
            note: "Credential dumping from LSASS",
          },
          {
            type: "Tool",
            value: "Metasploit Framework",
            note: "Reverse shell persistence",
          },
          {
            type: "Hash",
            value: "NTLM hash (stolen)",
            note: "Used in Pass-the-Hash lateral movement",
          },
          {
            type: "Data",
            value: "50MB outbound transfer",
            note: "Exfiltrated at 08:22:00 UTC",
          },
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
    icon: "🌐",
    title: "Network Traffic Analysis — PCAP & Wireshark",
    subtitle: "NETWORK FORENSICS COLLECTION",
    description:
      "A growing collection of network traffic investigations using Wireshark and pcap analysis. Each case covers protocol inspection, C2 detection, infected host identification, IOC extraction, and MITRE ATT&CK mapping.",
    isCollection: true,
    tools: [
      "Wireshark",
      "PCAP Analysis",
      "DHCP Forensics",
      "Kerberos Analysis",
      "NBNS",
      "HTTP Inspection",
      "malware-traffic-analysis.net",
    ],
    cases: [
      // ── CASE 1 ──────────────────────────────────────────────
      {
        id: "NET-2026-001",
        icon: "🐀",
        title: "NetSupport Manager RAT — C2 Beacon Detection",
        date: "February 2026",
        riskLevel: "HIGH",
        status: "Documented",
        reportFile: networkDoc,
        summary:
          "Infected Windows host DESKTOP-TEYQ2NR (user: brolf) detected beaconing to C2 45.131.214.85 via NetSupport Manager RAT v1.3. Full host identified via DHCP, NBNS, and Kerberos pcap analysis.",
        fullDescription:
          "SOC exercise from malware-traffic-analysis.net. The SIEM generated multiple signature alerts for NetSupport Manager RAT activity originating from an internal host communicating with external C2 server 45.131.214[.]85 over TCP port 443.\n\nPcap analysis confirmed that Windows workstation DESKTOP-TEYQ2NR, assigned to user Brad Rolf (account: brolf), was actively infected and beaconing to the attacker-controlled C2 server using the NetSupport Manager RAT protocol.\n\nPcap file: 2026-02-28-traffic-analysis-exercise.pcap\nExercise source: malware-traffic-analysis.net",
        emailDetails: {
          "Incident Time (UTC)": "2026-02-28 19:55:51",
          "Infected Host IP": "10.2.28.88",
          "MAC Address": "00:19:d1:b2:4d:ad",
          Hostname: "DESKTOP-TEYQ2NR",
          "AD Domain": "EASYAS123 / easyas123.tech",
          "User Account": "brolf (Brad Rolf)",
          "C2 Server": "45.131.214[.]85 — TCP port 443",
          Malware: "NetSupport Manager RAT v1.3",
          Severity: "HIGH — UNDER INVESTIGATION",
        },
        headerAnalysis: {
          "Step 1 — Protocol Hierarchy":
            "Statistics → Protocol Hierarchy — HTTP (RAT beacons), Kerberos, NBNS, DHCP identified",
          "Step 2 — Conversations":
            "Statistics → Conversations → IPv4 — 10.2.28.88 highest external volume → C2 confirmed",
          "Step 3 — DHCP Analysis":
            "Filter: dhcp — Frame 103: MAC 00:19:d1:b2:4d:ad (Option 50), IP 10.2.28.88, Hostname DESKTOP-TEYQ2NR (Option 12)",
          "Step 4 — NBNS Confirmation":
            "Filter: nbns and ip.src == 10.2.28.88 — Hostname DESKTOP-TEYQ2NR independently confirmed via NetBIOS broadcasts",
          "Step 5 — AD User (Kerberos)":
            "Filter: kerberos.CNameString — TGS-REP: CNameString: brolf, Realm: EASYAS123.TECH — compromised AD user identified",
          "Step 6 — RAT C2 Beacon":
            "Filter: http.request.method == POST and ip.dst == 45.131.214.85 — User-Agent: NetSupport Manager/1.3, Frame 2638: CMD=POLL (plaintext), subsequent: CMD=ENCD (XOR-encrypted)",
        },
        attacks: [
          {
            name: "NetSupport Manager RAT — Active C2 Beaconing",
            mitre: "T1219",
            mitreLabel: "Remote Access Software",
            severity: "critical",
            attacker: "45.131.214[.]85 — External C2 Server",
            target: "10.2.28.88 — DESKTOP-TEYQ2NR",
            desc: "NetSupport Manager RAT v1.3 detected via HTTP POST beacons to 45.131.214.85/fakeurl.htm. First beacon (frame 2638) in plaintext — User-Agent: NetSupport Manager/1.3, payload CMD=POLL. Subsequent payloads CMD=ENCD (XOR-encrypted C2 commands). Active attacker session confirmed.",
          },
          {
            name: "C2 Port Mimicry — TCP 443 Unencrypted",
            mitre: "T1571",
            mitreLabel: "Non-Standard Port",
            severity: "critical",
            attacker: "45.131.214[.]85",
            target: "TCP port 443 (HTTP, not HTTPS)",
            desc: "Attacker used TCP port 443 for unencrypted HTTP C2 traffic to bypass firewall rules that allow HTTPS/443 outbound. Classic port mimicry — traffic looks like HTTPS by port number but is plaintext HTTP RAT beacons.",
          },
          {
            name: "Infected Host Identification — DHCP Forensics",
            mitre: "T1016",
            mitreLabel: "System Network Configuration Discovery",
            severity: "medium",
            desc: "Wireshark filter (dhcp) on DHCP Request frame 103 revealed all three host identifiers from a single packet: MAC address 00:19:d1:b2:4d:ad (Ethernet II Source), IP 10.2.28.88 (Option 50), Hostname DESKTOP-TEYQ2NR (Option 12).",
          },
          {
            name: "AD User Identification — Kerberos Analysis",
            mitre: "T1078",
            mitreLabel: "Valid Accounts",
            severity: "medium",
            desc: "Wireshark filter (kerberos.CNameString) on TGS-REP packets revealed CNameString: brolf and Realm: EASYAS123.TECH — identifying the logged-in Active Directory user Brad Rolf. Account must be disabled immediately pending investigation.",
          },
          {
            name: "Persistent RAT — Encrypted C2 Commands",
            mitre: "T1543",
            mitreLabel: "Create or Modify System Process",
            severity: "high",
            desc: "After initial CMD=POLL check-in, subsequent CMD=ENCD payloads confirmed the attacker was issuing XOR-encrypted commands to the infected host — indicating an active hands-on-keyboard C2 session with persistent access.",
          },
        ],
        iocs: [
          {
            type: "IP",
            value: "45.131.214[.]85",
            note: "C2 server — NetSupport Manager RAT controller",
          },
          {
            type: "URL",
            value: "hxxp://45.131.214[.]85/fakeurl.htm",
            note: "C2 beacon HTTP POST endpoint",
          },
          {
            type: "User-Agent",
            value: "NetSupport Manager/1.3",
            note: "Malware identification string in HTTP header",
          },
          {
            type: "Port",
            value: "TCP 443 (HTTP not HTTPS)",
            note: "Port mimicry to bypass firewall egress rules",
          },
          {
            type: "IP",
            value: "10.2.28.88",
            note: "Infected workstation — DESKTOP-TEYQ2NR",
          },
          {
            type: "MAC",
            value: "00:19:d1:b2:4d:ad",
            note: "Infected workstation NIC — from DHCP frame 103",
          },
          {
            type: "Account",
            value: "brolf (Brad Rolf)",
            note: "Compromised AD account — EASYAS123 domain",
          },
          {
            type: "Payload",
            value: "CMD=POLL / CMD=ENCD",
            note: "NetSupport RAT C2 beacon commands (plaintext + XOR)",
          },
          {
            type: "Domain",
            value: "easyas123.tech",
            note: "Active Directory domain of infected host",
          },
        ],
      },

      // ── ADD MORE NETWORK INVESTIGATIONS HERE IN THE FUTURE ──
      // Copy a case object above, change id/title/date, fill in details.
    ],
  },
];
