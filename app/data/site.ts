// Single source of truth for every fact shown on the site.
// Kept in sync with kashan_iqbal_full_stack.pdf — if the resume changes, change it here.

export const site = {
  url: "https://kashan-iqbal.dev",
  name: "Kashan Iqbal",
  role: "Full Stack Engineer",
  niche: "Fintech",
  headline: "Full Stack Engineer — Fintech",
  location: "Karachi, Pakistan",
  email: "kashan.tech.io@gmail.com",
  phone: "+92 319 8167101",
  phoneHref: "tel:+923198167101",
  github: "https://github.com/kashan-iqbal",
  linkedin: "https://linkedin.com/in/kashan-iqbal",
  resume: "/kashan-iqbal-resume.pdf",
  summary:
    "Full Stack Engineer with 3+ years shipping end-to-end features across Node.js backends and React/Next.js frontends for fintech and high-traffic consumer platforms. Strong in REST/GraphQL API design, PostgreSQL/MongoDB modeling, and production delivery on AWS with Docker and CI/CD.",
} as const;

/** Headline proof points. Each one is tied to where it happened — no floating numbers. */
export const metrics = [
  { value: "20K+", unit: "transactions/day", context: "payments & lending, Greens Fintech" },
  { value: "99.9%", unit: "uptime", context: "core backend services under on-call ownership" },
  { value: "$500K+", unit: "monthly volume", context: "BNPL marketplace platform" },
  { value: "3", unit: "banking partners", context: "integrated via secure REST & GraphQL APIs" },
] as const;

export const about = {
  paragraphs: [
    "I build the systems money moves through. For the last two years that has meant payment and lending services at a UAE fintech — designing the APIs banking partners integrate against, modelling the data underneath them, and carrying the pager when they misbehave in production.",
    "Fintech is where I do my most careful work, because it is where mistakes are expensive. Auth and RBAC, input validation, audit trails, reconciliation, idempotent retries — these are habits, not features I add at the end.",
    "I am genuinely full stack: the same years include shipping React and Next.js interfaces for platforms serving tens of thousands of concurrent users. That range is deliberate. It means I can own a feature from the schema to the screen without a handoff, which on a small team is usually the difference between a two-week delivery and a two-month one.",
  ],
  /** Deliberately narrow. Four things I actually do, not everything I have touched. */
  focus: [
    {
      icon: "Landmark",
      title: "Payments & Lending",
      description:
        "Transaction processing, multi-party settlement, reconciliation and audit trails.",
    },
    {
      icon: "Plug",
      title: "API & Partner Integration",
      description:
        "REST and GraphQL surfaces for internal teams and external banking partners.",
    },
    {
      icon: "Gauge",
      title: "Performance & Reliability",
      description:
        "Query tuning, Redis caching, monitoring and alerting, on-call incident response.",
    },
    {
      icon: "Layers",
      title: "Product Delivery",
      description:
        "Next.js dashboards and flows wired to the services behind them, shipped on CI/CD.",
    },
  ],
} as const;

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Greens Fintech Innovation Ltd",
    location: "UAE (Remote)",
    period: "Oct 2024 — Present",
    current: true,
    domain: "Fintech",
    responsibilities: [
      "Built and operated core backend services processing 20K+ transactions/day at 99.9% uptime across payment and lending workflows.",
      "Designed secure REST and GraphQL APIs for 4 internal teams and 3 banking partners, enforcing JWT, RBAC, and input validation for compliance.",
      "Cut deployment time from 25 min to 8 min via Docker + GitHub Actions CI/CD, enabling 5+ zero-downtime releases per week.",
      "Owned on-call; resolved 40+ incidents within SLA and reduced recurring incidents ~35% through root-cause fixes and improved alerting.",
      "Mentored 3 junior engineers on API design and testing, improving code-review turnaround ~40%.",
    ],
    stack: ["Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    role: "Software Engineer (Backend & React)",
    company: "Darul Solutions",
    location: "Karachi, Pakistan",
    period: "Jun 2023 — Oct 2024",
    current: false,
    domain: "Consumer platforms",
    responsibilities: [
      "Reduced average API response time ~30% (320 ms → 215 ms) by profiling Node.js/Express endpoints and indexing slow PostgreSQL queries.",
      "Shipped 15+ full-stack features with Next.js and TypeScript across two-week agile sprints.",
      "Designed PostgreSQL/MongoDB data models supporting 100K+ registered users and multi-step workflows.",
      "Raised backend test coverage to 80% with Jest, cutting production bug reports ~40%.",
    ],
    stack: ["Node.js", "Express", "Next.js", "TypeScript", "PostgreSQL", "Jest"],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Upwork",
    location: "Remote",
    period: "Mar 2020 — May 2023",
    current: false,
    domain: "Client work",
    responsibilities: [
      "Delivered 20+ projects for 15+ international clients with a 100% job-success score, spanning API design, databases, and AWS deployment.",
    ],
    stack: ["React", "Node.js", "MongoDB", "AWS"],
  },
] as const;

export const projects = [
  {
    name: "BNPL Marketplace Integration Platform",
    tagline: "Multi-party Buy-Now-Pay-Later infrastructure",
    category: "Fintech",
    featured: true,
    stack: ["Node.js", "REST", "PostgreSQL"],
    link: null,
    points: [
      "Engineered a multi-party Buy-Now-Pay-Later system unifying marketplace, banks, vendors, and users, handling $500K+ monthly volume.",
      "Built role-based APIs with audit trails and reconciliation logic, cutting settlement discrepancies ~25%.",
    ],
  },
  {
    name: "API Rate-Limiting & Usage Service",
    tagline: "Shared infrastructure across 8 internal services",
    category: "Fintech",
    featured: true,
    stack: ["Node.js", "Redis", "Docker"],
    link: null,
    points: [
      "Built a centralised sliding-window rate limiter tracking usage across 8 internal services, exposing metrics and headers for observability.",
    ],
  },
  {
    name: "Tamasha",
    tagline: "Media streaming platform",
    category: "High-traffic consumer",
    featured: false,
    stack: ["React", "Next.js"],
    link: { label: "tamashaweb.com", href: "https://tamashaweb.com" },
    points: [
      "Built high-performance React/Next.js components serving 10K+ concurrent viewers.",
      "Improved Largest Contentful Paint ~35% under heavy traffic through render optimisation and code-splitting.",
    ],
  },
  {
    name: "Shadi Tayari",
    tagline: "Matrimonial platform",
    category: "High-traffic consumer",
    featured: false,
    stack: ["Next.js", "Redis"],
    link: { label: "shaditayari.pk", href: "https://shaditayari.pk" },
    points: [
      "Led backend; Next.js SSR with Redis caching reduced page load ~45% and database load ~30%.",
    ],
  },
] as const;

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "GraphQL",
      "REST",
      "WebSockets",
      "JWT / OAuth",
      "RBAC",
      "Webhooks",
    ],
  },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    group: "Data & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase (RLS)", "Query optimisation", "Indexing"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EC2, S3, CloudFront)", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    group: "Practices",
    items: ["CI/CD", "On-call", "Monitoring", "Jest", "Cypress", "Agile / Scrum", "Git", "Linux"],
  },
] as const;

export const services = [
  {
    icon: "CreditCard",
    title: "Payment & Lending Backends",
    description:
      "Transaction processing, ledgers, settlement and reconciliation built on Node.js and PostgreSQL — with the audit trails and role-based access a financial product needs from day one.",
  },
  {
    icon: "Plug",
    title: "API Design & Partner Integration",
    description:
      "REST and GraphQL APIs designed for other teams to consume, including third-party and banking-partner integrations, webhooks, and JWT/OAuth authorisation.",
  },
  {
    icon: "Gauge",
    title: "Performance & Reliability Work",
    description:
      "Profiling slow endpoints, indexing and tuning queries, adding Redis caching layers, and putting monitoring and alerting in place so problems surface before customers report them.",
  },
  {
    icon: "Rocket",
    title: "Full-Stack Feature Delivery",
    description:
      "Next.js dashboards and customer flows wired to the services behind them, tested with Jest and Cypress and shipped through Docker and GitHub Actions CI/CD.",
  },
] as const;

export const education = [
  {
    institution: "Virtual University of Pakistan",
    degree: "BS Computer Science",
    location: "Karachi, Pakistan",
    period: "Jan 2024 — Present",
  },
  {
    institution: "City College",
    degree: "Intermediate (Pre-Engineering)",
    location: "Karachi, Pakistan",
    period: "2019 — 2021",
  },
] as const;

export const achievements = [
  "1st Place, Full Stack Development Competition (2023) — first of 30+ teams, for a scalable, user-focused solution.",
] as const;

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
