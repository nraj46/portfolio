export const PROFILE = {
  name: "Nagaraju Chinthalacheruvu",
  title: "Senior Frontend Engineer | AI Engineer",
  tagline:
    "10 years building React, TypeScript and Next.js products used by 1M+ users. At Intuit, I build production AI features — LLM integrations, RAG pipelines, AI agents and MCP tools — in Python and TypeScript.",
  location: "Dallas, TX",
  email: "chnagaraj68@gmail.com",
  github: "https://github.com/nraj46",
  linkedin: "https://www.linkedin.com/in/nagr",
};

export const STATS = [
  { value: "10", label: "Years experience" },
  { value: "1M+", label: "Users reached" },
  { value: "11", label: "Live apps" },
  { value: "85%", label: "Test coverage" },
];

export const SKILL_GROUPS: { title: string; skills: string[] }[] = [
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "Kotlin",
      "Swift",
      "Java",
      "HTML5",
      "CSS3",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "AG Grid",
      "D3.js",
      "Micro Frontends",
      "Accessibility (WCAG/ARIA)",
    ],
  },
  {
    title: "AI / LLM",
    skills: [
      "LLM Applications",
      "AI Agents & Deep Agents",
      "RAG",
      "LangChain",
      "LangGraph",
      "MCP Tools",
      "Chat Assistants & Chatbots",
      "Vector Databases",
      "Evals",
      "Guardrails",
      "OpenAI (ChatGPT)",
      "Anthropic Claude",
      "xAI Grok",
      "Claude Code",
      "Codex",
      "Cursor",
      "Windsurf",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Python",
      "Java (Spring Boot)",
      "REST APIs",
      "GraphQL",
      "SQL Databases",
      "Microservices",
    ],
  },
  {
    title: "Testing & DevOps",
    skills: [
      "Jest",
      "Pathfinder",
      "Playwright",
      "Cypress",
      "Webpack",
      "CI/CD",
      "Git/GitHub",
      "Jenkins",
      "AWS (S3)",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "Intuit",
    role: "Software Engineer (Full-Time)",
    location: "Plano, TX",
    period: "Jul 2022 – Present",
    summary:
      "Front-end and AI features across QuickBooks, TurboTax and Intuit Tax Advisory serving 1M+ users: LLM/RAG features in Python, MCP tool integrations, deep-agent workflows with LangGraph, AI chat assistants with evals and guardrails.",
  },
  {
    company: "Intuit",
    role: "Contract Software Engineer",
    location: "Plano, TX",
    period: "May 2021 – Jul 2022",
    summary:
      "React checkout and payment flows for QuickBooks Insurance used by 50,000+ users; GraphQL and REST integrations; micro frontends with Webpack.",
  },
  {
    company: "UBS Financial Services",
    role: "Contract Software Engineer",
    location: "New Jersey",
    period: "Nov 2020 – Apr 2021",
    summary:
      "Investment tracking tool in React and Redux backed by Java Spring Boot REST APIs; dashboards, data grids and automated tests.",
  },
  {
    company: "AIG Insurance",
    role: "Contract Software Engineer",
    location: "Farmington, CT",
    period: "Jul 2018 – May 2020",
    summary:
      "Migrated a .NET annuities and BOP application to React and Redux across three insurance projects; reusable component libraries and AG Grid policy tables.",
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  live: string;
  code: string;
};

export const PROJECTS: Project[] = [
  {
    name: "SupportPilot",
    description:
      "End-to-end AI support-resolution agent: LangGraph state graph, RAG with citations, LLMOps dashboard, evals, guardrails.",
    tags: ["Next.js", "LangGraph", "RAG", "LLMOps"],
    live: "https://supportpilot-eight.vercel.app",
    code: "https://github.com/nraj46/supportpilot",
  },
  {
    name: "InvoicePilot",
    description:
      "AI invoice & expense manager: Angular UI, Node.js REST + GraphQL APIs, real SQL database, MCP tool server, RAG policy assistant, evals 10/10.",
    tags: ["Angular", "Node.js", "GraphQL", "SQL", "MCP"],
    live: "https://invoicepilot-livid.vercel.app",
    code: "https://github.com/nraj46/invoicepilot",
  },
  {
    name: "MarsRAG",
    description:
      "Production-style RAG over Mars mission reports: hybrid retrieval + reranking, cited answers, refusal gate, 13/13 evals.",
    tags: ["RAG", "Retrieval", "Evals"],
    live: "https://marsrag.vercel.app",
    code: "https://github.com/nraj46/marsrag",
  },
  {
    name: "VoicePilot",
    description:
      "Real-time voice AI agent for appointment booking with traced tool calls and guardrails.",
    tags: ["Voice AI", "Agents", "Tool Calling"],
    live: "https://voicepilot-ten.vercel.app",
    code: "https://github.com/nraj46/voicepilot",
  },
  {
    name: "ModGuard",
    description:
      "Comment moderation: logistic regression from scratch + LLM reviewer routing, 97.2% routed accuracy.",
    tags: ["ML", "Classification", "Cost Routing"],
    live: "https://modguard-dun.vercel.app",
    code: "https://github.com/nraj46/modguard",
  },
  {
    name: "MCP Guard",
    description:
      "Governance console for MCP tool calls: risk classification, human approvals, audit log.",
    tags: ["MCP", "Governance", "Next.js"],
    live: "https://mcp-guard-three.vercel.app",
    code: "https://github.com/nraj46/mcp-guard",
  },
  {
    name: "FrontDesk AI",
    description:
      "24/7 AI receptionist for small businesses: RAG Q&A, appointment booking, owner dashboard.",
    tags: ["RAG", "Chatbot", "Next.js"],
    live: "https://frontdesk-ai-nine-hazel.vercel.app",
    code: "https://github.com/nraj46/frontdesk-ai",
  },
  {
    name: "WebPilot",
    description:
      "Browser agent with human sign-in handoff for steps that need a person.",
    tags: ["Browser Agent", "Automation"],
    live: "https://webpilot-rosy.vercel.app",
    code: "https://github.com/nraj46/webpilot",
  },
  {
    name: "EdgeMind",
    description:
      "On-device browser AI (DistilBERT via Transformers.js) — no server, private by design.",
    tags: ["On-device AI", "Transformers.js"],
    live: "https://edgemind-six.vercel.app",
    code: "https://github.com/nraj46/edgemind",
  },
  {
    name: "ReelForge AI",
    description:
      "AI promo-reel maker for local businesses: offer in, vertical reel with voiceover out. $20/month, everything included.",
    tags: ["SaaS", "Video AI", "Stripe"],
    live: "https://reelforge-five-sooty.vercel.app",
    code: "https://github.com/nraj46/reelforge",
  },
  {
    name: "KidsPlay",
    description:
      "Toddler play-and-learn app (ABC, numbers, music) — also an installable mobile PWA; all sound synthesized in the browser, no ads.",
    tags: ["PWA", "Education", "Mobile"],
    live: "https://kidsplay-tau.vercel.app",
    code: "https://github.com/nraj46/kidsplay",
  },
];

export const SERVICES = [
  {
    title: "AI Chatbots & RAG Assistants",
    description:
      "Chatbots and assistants grounded in your business data — documents, help centers, product catalogs — with cited answers and guardrails.",
  },
  {
    title: "AI Agents & MCP Integrations",
    description:
      "Agents that take action with tool calling and MCP integrations: booking, lookups, workflows — with human approval where it matters.",
  },
  {
    title: "Web Apps — React / Next.js / Angular",
    description:
      "Fast, accessible front ends and full product builds: dashboards, SaaS products, design systems and micro frontends.",
  },
  {
    title: "APIs & Data — Node.js, REST & GraphQL",
    description:
      "Backend services and integrations in Node.js and Python, with SQL databases, auth and clean REST or GraphQL APIs.",
  },
];
