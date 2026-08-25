export interface TechItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "API & Protocols" | "Tools" | "Deployment" | "AI Stack";
  iconName: string;
  description: string;
  relatedProjects: string[]; // project IDs like "vitta", "elicit-interior", "elegant-design-studio", "shiv-car-rentals"
  verifiedScope: string;
}

export const technologiesData: TechItem[] = [
  // Frontend
  { id: "react", name: "React.js", category: "Frontend", iconName: "Code2", description: "UI Component Architecture & SPA Systems", relatedProjects: ["vitta", "elicit-interior", "elegant-design-studio", "shiv-car-rentals"], verifiedScope: "Used in Vitta SaaS dashboard, Elicit Supabase CMS, and Shiv Car Rentals." },
  { id: "nextjs", name: "Next.js", category: "Frontend", iconName: "Globe", description: "App Router, SSR, Server Actions & High-Speed Static Sites", relatedProjects: ["elegant-design-studio"], verifiedScope: "Primary production framework for SEO-optimized platforms and enterprise editorial portfolios." },
  { id: "typescript", name: "TypeScript", category: "Frontend", iconName: "FileCode", description: "Strict typing for resilient software codebases", relatedProjects: ["vitta", "elegant-design-studio"], verifiedScope: "Strict type safety for data models, API payloads, and component props." },
  { id: "javascript", name: "JavaScript (ES6+)", category: "Frontend", iconName: "Code", description: "Core language for frontend interactivity & backend services", relatedProjects: ["vitta", "elicit-interior", "shiv-car-rentals"], verifiedScope: "Core foundation across all client architectures." },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", iconName: "Palette", description: "Design token systems with responsive layouts", relatedProjects: ["vitta", "elicit-interior", "elegant-design-studio"], verifiedScope: "Design system implementation for responsive layouts and theme tokens." },
  { id: "scss", name: "SCSS / Bootstrap", category: "Frontend", iconName: "Brush", description: "Structured styling and responsive grid frameworks", relatedProjects: ["shiv-car-rentals"], verifiedScope: "Used in fleet showcase layouts and responsive vehicle filters." },

  // Backend & CMS
  { id: "nodejs", name: "Node.js", category: "Backend", iconName: "Server", description: "Asynchronous event-driven runtime for microservices", relatedProjects: ["vitta", "shiv-car-rentals"], verifiedScope: "Powers Vitta transaction math, API controllers, and booking engines." },
  { id: "express", name: "Express.js", category: "Backend", iconName: "Cpu", description: "High-performance framework for building REST APIs", relatedProjects: ["vitta", "shiv-car-rentals"], verifiedScope: "Built REST route handlers, auth middleware, and validation controllers." },
  { id: "fastapi", name: "FastAPI", category: "Backend", iconName: "Zap", description: "High-throughput Python backend framework", relatedProjects: [], verifiedScope: "Backend capability for microservices and AI pipelines." },

  // Databases & Cloud BaaS
  { id: "mongodb", name: "MongoDB", category: "Databases", iconName: "Database", description: "Document-oriented NoSQL database schema modeling", relatedProjects: ["vitta", "shiv-car-rentals"], verifiedScope: "Schema design, collection indexing, and aggregation pipelines in Vitta & Shiv Rentals." },
  { id: "atlas", name: "MongoDB Atlas / Supabase", category: "Databases", iconName: "Cloud", description: "PostgreSQL & NoSQL cloud database architectures", relatedProjects: ["elicit-interior"], verifiedScope: "Supabase PostgreSQL database & real-time CMS storage in Elicit Interior Designer." },
  { id: "sql", name: "SQL & PostgreSQL", category: "Databases", iconName: "Table", description: "Relational database querying and structured tables", relatedProjects: ["elicit-interior"], verifiedScope: "Relational schema modeling and Supabase PostgreSQL queries." },

  // API & Protocols
  { id: "rest-api", name: "REST API", category: "API & Protocols", iconName: "Network", description: "HTTP method routing, JSON payloads, and status codes", relatedProjects: ["vitta", "elicit-interior", "shiv-car-rentals"], verifiedScope: "Primary architecture for client-server data synchronization." },
  { id: "axios", name: "Axios & Fetch", category: "API & Protocols", iconName: "ArrowLeftRight", description: "HTTP client integration with token interceptors and response handlers", relatedProjects: ["vitta", "shiv-car-rentals"], verifiedScope: "Client-side API call management with error boundary fallbacks." },

  // Tools & Deployment
  { id: "git", name: "Git Workflow", category: "Tools", iconName: "GitBranch", description: "Version control, feature branching, and pull request workflows", relatedProjects: ["vitta", "elicit-interior", "elegant-design-studio", "shiv-car-rentals"], verifiedScope: "Enterprise version control and release workflows." },
  { id: "figma", name: "Figma & UI Systems", category: "Tools", iconName: "Figma", description: "UI wireframing, component design, and UX design systems", relatedProjects: ["vitta", "elegant-design-studio"], verifiedScope: "Design-to-code translation and component system architecture." },
  { id: "vercel", name: "Vercel & Render", category: "Deployment", iconName: "UploadCloud", description: "Automated continuous deployment and cloud hosting", relatedProjects: ["vitta", "elicit-interior", "elegant-design-studio", "shiv-car-rentals"], verifiedScope: "Global edge CDN deployment for all client platforms." },

  // AI Stack
  { id: "ai-llms", name: "AI APIs & LLMs", category: "AI Stack", iconName: "Sparkles", description: "OpenAI, Anthropic & Gemini API integrations", relatedProjects: [], verifiedScope: "Enterprise LLM integration & custom prompt pipeline design." },
  { id: "rag-vectors", name: "RAG & Vector Search", category: "AI Stack", iconName: "Search", description: "Document embeddings & context retrieval architectures", relatedProjects: [], verifiedScope: "Architectural concepts for enterprise Q&A knowledge bases." },
  { id: "ai-agents", name: "AI Agents & LangChain", category: "AI Stack", iconName: "Bot", description: "Tool selection, agentic reasoning loops, and prompt workflows", relatedProjects: [], verifiedScope: "Autonomous agent simulation and workflow automation orchestration." }
];
