export interface Capability {
  id: string;
  title: string;
  category: string;
  description: string;
  businessBenefit: string;
  iconName: string;
  badge: string;
  demoType: "saas-widget" | "api-tracer" | "ai-agent" | "realtime-feed" | "website-journey" | "rag-system" | "admin-dash" | "workflow-engine" | "web-app";
  highlights: string[];
}

export const capabilitiesData: Capability[] = [
  {
    id: "saas-apps",
    title: "SaaS Applications",
    category: "Software as a Service",
    description: "Multi-tenant web applications built with scalable state management, user authentication, billing integration, and responsive data analytics.",
    businessBenefit: "Turns complex recurring business operations into self-service digital platforms.",
    iconName: "LayoutDashboard",
    badge: "Full Stack",
    demoType: "saas-widget",
    highlights: ["Reactive Financial Math", "Role-Based Access", "Modular Ledger Views"]
  },
  {
    id: "fullstack-apps",
    title: "Full-Stack Web Apps",
    category: "Custom Engineering",
    description: "End-to-end web applications connecting modern React/Next.js interfaces with Node.js/Express REST APIs and structured MongoDB/SQL databases.",
    businessBenefit: "Single-source engineering from front-end design to database schemas.",
    iconName: "Layers",
    badge: "MERN Stack",
    demoType: "web-app",
    highlights: ["State Synchronized", "Rest API Pipelines", "Optimized Query Specs"]
  },
  {
    id: "business-websites",
    title: "Business Websites",
    category: "Digital Experience",
    description: "High-conversion digital brand websites tailored for interior studios, transportation, services, and corporate enterprises.",
    businessBenefit: "Drives prospective customer trust and converts casual traffic into qualified inquiries.",
    iconName: "Globe",
    badge: "High Conversion",
    demoType: "website-journey",
    highlights: ["Editorial Layouts", "Lead Generation Flow", "Sub-Second Loading"]
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    category: "Internal Tooling",
    description: "Dense, intuitive operational control panels for managing users, transactions, permissions, and complex system metrics.",
    businessBenefit: "Reduces operational error rate and streamlines manager workflows.",
    iconName: "LineChart",
    badge: "Operations",
    demoType: "admin-dash",
    highlights: ["Data Filtering", "Real-time Metrics", "Exportable Reports"]
  },
  {
    id: "rest-apis",
    title: "REST APIs & Backend Services",
    category: "API & Backend",
    description: "Production RESTful endpoints with clean routing, strict payload validation, authentication middleware, and database indexing.",
    businessBenefit: "Ensures secure, predictable data exchange between mobile, web, and external partners.",
    iconName: "Server",
    badge: "Node / Express",
    demoType: "api-tracer",
    highlights: ["Clean JSON Schema", "Token Auth Headers", "Low Latency Routing"]
  },
  {
    id: "realtime-apps",
    title: "Real-Time Systems",
    category: "Live Connectivity",
    description: "Event-driven system features for live notifications, attendance punches, state sync, and real-time activity feeds.",
    businessBenefit: "Keeps teams and users instantly informed without manual page refreshes.",
    iconName: "Zap",
    badge: "Live Feeds",
    demoType: "realtime-feed",
    highlights: ["Instant Event Push", "Activity Logging", "State Sync"]
  },
  {
    id: "ai-integrations",
    title: "AI Integrations",
    category: "Intelligent Features",
    description: "Practical integration of OpenAI, Gemini, and Claude LLM APIs to power smart text generation, data extraction, and document processing.",
    businessBenefit: "Automates repetitive cognitive tasks directly inside existing software workflows.",
    iconName: "Sparkles",
    badge: "Applied AI",
    demoType: "rag-system",
    highlights: ["Structured Output", "Prompt Engineering", "LLM Pipelines"]
  },
  {
    id: "rag-systems",
    title: "RAG Systems",
    category: "Knowledge Base AI",
    description: "Retrieval-Augmented Generation architectures connecting internal business docs with vector context to deliver factual, cited AI answers.",
    businessBenefit: "Unlocks internal corporate documentation for instant employee or customer Q&A.",
    iconName: "Database",
    badge: "Context Search",
    demoType: "rag-system",
    highlights: ["Vector Retrieval", "Factual Grounding", "Source Citation"]
  },
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    category: "Autonomous Logic",
    description: "Goal-driven AI agent workflows that evaluate user requests, select appropriate tool APIs, execute steps, and verify results.",
    businessBenefit: "Transforms multi-step manual procedures into autonomous digital assistants.",
    iconName: "Bot",
    badge: "Tool Call AI",
    demoType: "ai-agent",
    highlights: ["Multi-step Reasoning", "Tool Selection", "Autonomous Execution"]
  }
];
