export const SITE = {
  name: "Prashin More",
  role: "Full Stack Developer (SDE-3)",
  tagline:
    "Building scalable systems, SaaS products, and high-performance backends",
  email: "prashinmore@gmail.com",
  phone: "+91-9324115782",
} as const;

/** Served from `public/Prashin_More_2026.pdf` */
export const RESUME_URL = "/Prashin_More_2026.pdf";

/** Google Doc (view / share) */
export const RESUME_GOOGLE_DOC_URL =
  "https://docs.google.com/document/d/1RxM2afCZAsczj0V-EX1PiEzARjxEqGNw/preview?usp=sharing";

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/prashin-more-81512a203",
  github: "https://github.com/PrashinMore",
  leetcode: "https://leetcode.com/u/PrashinMore/",
  saasDemo: "https://www.ezcommerse.com/dashboard",
} as const;

export const ABOUT = {
  summary: [
    "I am a backend-heavy full-stack engineer with 5+ years shipping production systems across fintech, telecom, and SaaS. I own architecture decisions end to end—from service boundaries and data models to CI/CD, observability, and on-call readiness.",
    "Recent focus: microservices migration, Kubernetes workloads on cloud, high-throughput APIs, and platform features (WebRTC, server-driven UI) at scale.",
  ],
  counters: [
    { label: "Years of experience", value: 5, suffix: "+" },
    { label: "Production systems shipped", value: 20, suffix: "+" },
    { label: "Domains (fintech, SaaS, infra)", value: 5, suffix: "" },
  ],
} as const;

export const SKILL_GROUPS = [
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 95 },
      { name: "Express", level: 92 },
      { name: "GraphQL", level: 88 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", level: 94 },
      { name: "Vue", level: 86 },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 90 },
      { name: "Azure", level: 84 },
      { name: "AWS", level: 88 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", level: 93 },
      { name: "SQL", level: 95 },
    ],
  },
  {
    title: "Architecture",
    items: [
      { name: "Microservices", level: 92 },
      { name: "CI/CD", level: 90 },
    ],
  },
] as const;

export type ExperienceEntry = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    company: "Jio Platforms",
    role: "SDE-3 · Full Stack / Backend Lead",
    period: "Present",
    highlights: [
      "Backend lead and system architect for high-traffic platform capabilities.",
      "Led microservices migration: decomposition, contracts, and rollout strategy.",
      "Shipped WebRTC and server-driven UI integrations with strict latency budgets.",
      "Owned CI/CD pipelines and Kubernetes deployments for core services.",
    ],
  },
  {
    company: "Enovate IT",
    role: "Full Stack Engineer",
    period: "Previous",
    highlights: [
      "Built fintech systems: payouts, reconciliations, and banking integrations.",
      "Designed APIs and workflows resilient to partner idempotency and retries.",
      "Collaborated on compliance-aware data handling and audit trails.",
    ],
  },
  {
    company: "Enalo Technologies",
    companyUrl: "https://enalo.in/",
    role: "Full Stack Engineer",
    period: "Earlier",
    highlights: [
      "Integrated payment gateways and subscription flows end to end.",
      "Deployed and operated services on AWS with focus on cost and reliability.",
      "Improved observability and incident response for money-moving paths.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Landing Page",
    subtitle: "Portfolio-grade marketing surface",
    description:
      "A conversion-focused landing experience with motion-led storytelling, crisp typography, and performance budgets. Built to demonstrate UI craft, accessibility, and measurable engagement patterns.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://web-dev-landing-page-phi.vercel.app/",
    repoUrl: "https://github.com/PrashinMore",
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    title: "Restaurant SaaS Dashboard",
    subtitle: "Multi-tenant operations product",
    description:
      "Real-world SaaS for restaurants: tenants, roles, billing, inventory, and reporting. Emphasizes data isolation, billing accuracy, and operator workflows that scale from single outlets to small chains.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    liveUrl: "https://www.ezcommerse.com/dashboard",
    repoUrl: "https://github.com/PrashinMore",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Solar Marketplace Platform",
    subtitle: "Solar Easy · bids, payments, and governance",
    description:
      "Marketplace for solar projects with competitive bidding, escrow-style payments, and RBAC across buyers, vendors, and admins. Backend designed for idempotent money flows and clear audit history.",
    stack: ["Vue", "GraphQL", "PostgreSQL", "AWS", "RBAC"],
    liveUrl: "https://solareasy.in/",
    repoUrl: "https://github.com/PrashinMore",
    accent: "from-amber-500/20 to-orange-500/10",
  },
] as const;

export const SYSTEM_TOPICS = [
  {
    title: "Microservices architecture",
    description:
      "Domain-aligned services behind an API gateway, async events for decoupling, and shared standards for auth, config, and tracing.",
    nodes: ["Gateway", "Auth", "Orders", "Payments", "Events", "Workers"],
  },
  {
    title: "Scalable backend under load",
    description:
      "Horizontal scale-out, connection pooling, caching layers, and backpressure-aware queues to protect core databases during spikes.",
    nodes: ["LB", "API", "Cache", "Queue", "DB Primary", "Replicas"],
  },
  {
    title: "CI/CD pipeline flow",
    description:
      "Lint, test, build, scan, and progressive rollout with canaries, automated rollback hooks, and environment promotion gates.",
    nodes: ["PR", "CI", "Artifact", "Staging", "Prod", "Monitor"],
  },
] as const;
