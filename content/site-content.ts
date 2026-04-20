export type Locale = "en" | "pt";

export type NavItem = {
  label: string;
  href: string;
};

export type Principle = {
  title: string;
  statement: string;
};

export const siteConfig = {
  name: "MAGNUS PROTOCOL",
  shortName: "Magnus Protocol",
  domain: "https://magnusprotocol.com",
  description:
    "Magnus Protocol is a global technology ecosystem focused on intelligence, infrastructure, secure digital systems, and future-ready innovation.",
  ogImage: "/og-image.jpg"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Principles", href: "/principles" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Vision", href: "/vision" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = {
  quickLinks: navItems,
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Cookie Policy", href: "/cookie-policy" }
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "GitHub", href: "#" }
  ],
  description:
    "Magnus Protocol is a global technology ecosystem building secure, scalable intelligence infrastructure for long-term institutional impact.",
  email: "contact@magnusprotocol.com",
  copyright: "(C) 2026 MAGNUS PROTOCOL. All rights reserved."
};

export const homepage = {
  hero: {
    eyebrow: "Global Technology Ecosystem",
    title: "Engineering the Trusted Intelligence Layer for a Changing World.",
    subtitle:
      "Magnus Protocol unifies advanced intelligence, digital infrastructure, and security architecture to help institutions and enterprises operate with confidence at global scale.",
    primaryCta: { label: "Request Strategic Briefing", href: "/contact" },
    secondaryCta: { label: "Explore the Ecosystem", href: "/ecosystem" },
    stats: [
      { label: "Strategic Layers", value: "4" },
      { label: "Core Principles", value: "12" },
      { label: "Deployment Focus", value: "Global" }
    ]
  },
  mission: {
    title: "Mission",
    copy:
      "Our mission is to design technology systems that are intelligent, secure, and globally interoperable. We build with institutional rigor and long-term responsibility."
  },
  principlesPreview: {
    title: "Principles That Govern Every Layer",
    intro:
      "Magnus Protocol is built on operational doctrine, not trend language. These principles guide every architecture and governance decision.",
    items: [
      "Intelligence with Purpose",
      "Human Dignity as a Constraint",
      "Security by Design",
      "Clarity Over Chaos",
      "Systems Thinking at Every Layer",
      "Technology in Service of Humanity"
    ],
    cta: { label: "View All Principles", href: "/principles" }
  },
  ecosystem: {
    title: "A Modular Ecosystem for Global Deployment",
    intro:
      "Our architecture is structured to evolve from infrastructure foundation to applied intelligence and institutional integration.",
    cards: [
      {
        title: "Magnus Core",
        body: "Distributed digital infrastructure built for resilient operations and long-term reliability."
      },
      {
        title: "Magnus Intelligence",
        body: "Applied intelligence services for analysis, automation, and decision support."
      },
      {
        title: "Magnus Secure",
        body: "Governance, identity, and protection frameworks for mission-critical systems."
      },
      {
        title: "Magnus Nexus",
        body: "Partnership and integration layer connecting enterprise and institutional ecosystems."
      }
    ]
  },
  why: {
    title: "Why Magnus Protocol",
    bullets: [
      "Institutional-grade architecture built for trust-sensitive environments.",
      "Strategic depth combining technical capability with governance discipline.",
      "Operational resilience designed for scale, complexity, and compliance.",
      "Long-horizon execution focused on durable global value."
    ]
  },
  vision: {
    title: "Global Vision",
    copy:
      "The next decade will be shaped by organizations that align intelligence with responsibility. Magnus Protocol is building the systems that make that alignment operational."
  },
  cta: {
    title: "Build the Next Infrastructure Era With Us",
    copy:
      "We collaborate with investors, institutions, and strategic operators committed to trusted technology at meaningful scale.",
    primaryCta: { label: "Start a Strategic Conversation", href: "/contact" },
    secondaryCta: { label: "Investor & Partnership Access", href: "/contact" }
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is Magnus Protocol?",
        answer:
          "Magnus Protocol is a global technology ecosystem focused on intelligence, infrastructure, secure digital systems, and future-ready innovation."
      },
      {
        question: "Who is Magnus Protocol built for?",
        answer:
          "Our architecture is designed for institutions, enterprises, strategic partners, and organizations operating in high-impact environments."
      },
      {
        question: "How does Magnus Protocol approach security?",
        answer:
          "Security is engineered into system design from the beginning through layered controls, explicit governance, and continuous hardening."
      },
      {
        question: "Can we partner early?",
        answer:
          "Yes. We welcome qualified strategic conversations with investors, institutional partners, and ecosystem operators."
      }
    ]
  },
  newsletter: {
    title: "Receive Strategic Updates",
    copy:
      "Get periodic updates on ecosystem milestones, product development, and partnership opportunities."
  }
};

export const principles: Principle[] = [
  {
    title: "Intelligence with Purpose",
    statement:
      "We build intelligent systems to solve consequential problems, not to produce novelty without durable value."
  },
  {
    title: "Human Dignity as a Constraint",
    statement: "Every system must protect agency, privacy, and fairness for the people it affects."
  },
  {
    title: "Security by Design",
    statement: "Trust is engineered into architecture from the first decision, never deferred."
  },
  {
    title: "Ethical Innovation in Practice",
    statement: "Innovation is responsible only when it remains testable, auditable, and governable."
  },
  {
    title: "Clarity Over Chaos",
    statement:
      "We prioritize explicit models, explainable behavior, and operational clarity over opaque complexity."
  },
  {
    title: "Systems Thinking at Every Layer",
    statement:
      "We design with awareness of technical, institutional, regulatory, and societal interdependence."
  },
  {
    title: "Global Scalability with Local Accountability",
    statement: "Our systems scale internationally while respecting local law and operational context."
  },
  {
    title: "Decentralized Resilience",
    statement: "We reduce systemic fragility through distributed architecture and recovery-first operations."
  },
  {
    title: "Transparency Where Possible",
    statement:
      "We communicate methods and governance openly while safeguarding sensitive assets and integrity."
  },
  {
    title: "Excellence in Execution",
    statement: "Credibility is earned through precision, reliability, and consistent delivery quality."
  },
  {
    title: "Long-Term Vision",
    statement: "We optimize for durable infrastructure and compounding value over short-cycle incentives."
  },
  {
    title: "Technology in Service of Humanity",
    statement: "Our benchmark is simple: technology should expand human and institutional capacity responsibly."
  }
];

export const pageCopy = {
  about: {
    title: "Built to Power the Next Standard of Trusted Technology",
    subtitle:
      "Magnus Protocol is a global initiative creating institutional-grade digital infrastructure for the intelligence era.",
    sections: [
      {
        heading: "Who We Are",
        body: "We are a multidisciplinary technology organization focused on the convergence of AI, infrastructure, security, and governance. Our work is designed for long-term relevance in high-impact environments."
      },
      {
        heading: "What We Build",
        body: "We build interoperable systems that help organizations deploy advanced intelligence capabilities with operational control and strategic confidence."
      },
      {
        heading: "How We Operate",
        body: "Our operating model combines deep technical execution with disciplined governance and partnership-first implementation."
      },
      {
        heading: "Leadership Intent",
        body: "Magnus Protocol is guided by a practical thesis: the future belongs to institutions that can scale intelligence responsibly."
      }
    ],
    cta: "Connect With Our Team"
  },
  ecosystem: {
    title: "One Ecosystem. Multiple Strategic Layers.",
    subtitle:
      "Magnus Protocol is structured as a modular technology ecosystem that can evolve with institutional requirements and global scale.",
    sections: [
      {
        heading: "Ecosystem Thesis",
        body: "Complex transformation requires integrated systems. Magnus Protocol unifies intelligence, infrastructure, security, and institutional integration in one coherent architecture."
      },
      {
        heading: "Platform Layer: Magnus Core",
        body: "Distributed digital infrastructure engineered for performance, resilience, and trusted operations."
      },
      {
        heading: "Applied Layer: Magnus Intelligence",
        body: "AI orchestration capabilities for analysis, automation, and decision support in high-stakes environments."
      },
      {
        heading: "Governance Layer: Magnus Secure",
        body: "Security, identity, and compliance controls designed for regulated and mission-critical contexts."
      },
      {
        heading: "Integration Layer: Magnus Nexus",
        body: "Partnership interfaces that connect organizations to ecosystem capabilities with implementation clarity."
      }
    ],
    cta: "Discuss Product and Integration Access"
  },
  vision: {
    title: "A Long-Horizon Vision for Global Digital Trust",
    subtitle:
      "Magnus Protocol is building the foundational systems required for a secure, intelligent, and interoperable future.",
    sections: [
      {
        heading: "Our Thesis",
        body: "The defining challenge of this decade is not only creating intelligent systems, but governing them with reliability and trust at global scale."
      },
      {
        heading: "Strategic Horizons",
        body: "We are advancing toward a world where institutions can deploy AI with confidence while maintaining operational control."
      },
      {
        heading: "Impact Domains",
        body: "Our long-term focus includes enterprise modernization, institutional infrastructure, cross-border digital systems, and responsible intelligence adoption."
      },
      {
        heading: "Execution Model",
        body: "We pair technical architecture with disciplined partnerships, staged deployment, and governance-aware product expansion."
      }
    ],
    cta: "Partner in the Long-Term Vision"
  },
  contact: {
    title: "Start a Strategic Conversation",
    subtitle: "For partnerships, investor relations, institutional collaboration, and media inquiries.",
    intro:
      "Tell us about your objectives, operating context, and timeline. Our team will route your message to the appropriate strategic lead.",
    responseSla: "We aim to respond to qualified inquiries within 2 business days.",
    inquiryTypes: ["Partnership", "Investor", "Institutional Program", "Media", "General"]
  }
};

export const manifesto =
  "The next era of technology will not be defined by speed alone, but by trust, governance, and execution quality at scale. Magnus Protocol exists to establish that standard: intelligent by design, secure by default, globally interoperable, and accountable in practice.";

export const legalCopy = {
  privacy: {
    title: "Privacy Policy",
    effectiveDate: "Effective Date: [Month DD, YYYY]",
    intro:
      "Magnus Protocol respects user privacy and is committed to responsible data practices across all digital properties and communications.",
    sections: [
      "Information We Collect",
      "How We Use Information",
      "Data Retention and Security",
      "Third-Party Service Providers",
      "International Data Transfers",
      "User Rights and Requests",
      "Contact: privacy@magnusprotocol.com"
    ]
  },
  terms: {
    title: "Terms of Use",
    effectiveDate: "Effective Date: [Month DD, YYYY]",
    intro:
      "These Terms govern access to and use of Magnus Protocol websites, content, and related digital services.",
    sections: [
      "Acceptance of Terms",
      "Permitted and Restricted Use",
      "Intellectual Property Rights",
      "Service Disclaimers",
      "Limitation of Liability",
      "Termination of Access",
      "Contact: legal@magnusprotocol.com"
    ]
  },
  cookie: {
    title: "Cookie Policy",
    effectiveDate: "Effective Date: [Month DD, YYYY]",
    intro:
      "Magnus Protocol uses cookies and related technologies to support security, analytics, and user experience quality.",
    sections: [
      "What Cookies Are",
      "Cookie Categories We Use",
      "Purpose of Cookies",
      "Managing Cookie Preferences",
      "Third-Party Cookies",
      "Policy Updates",
      "Contact: privacy@magnusprotocol.com"
    ]
  }
};
