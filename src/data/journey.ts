export interface JourneyStep {
  stepNumber: number;
  title: string;
  clientProvides: string;
  devDoes: string;
  clientReceives: string;
  iconName: string;
  details: string[];
}

export const journeySteps: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Tell me the idea",
    clientProvides: "Raw business goals, napkin sketches, or problem description",
    devDoes: "Listens, asks targeted questions, and analyzes project scope",
    clientReceives: "Initial feasibility assessment and strategic perspective",
    iconName: "MessageSquare",
    details: [
      "Discovery conversation to map core objectives",
      "Identification of user roles and essential workflows",
      "Scope alignment without confusing jargon"
    ]
  },
  {
    stepNumber: 2,
    title: "Understand requirements",
    clientProvides: "Business domain context & reference examples",
    devDoes: "Translates goals into user stories, technical specs, and feature priorities",
    clientReceives: "Structured product blueprint and functional scope checklist",
    iconName: "FileSearch",
    details: [
      "User journey mapping for critical conversion points",
      "Data requirements (inputs, calculations, outputs)",
      "Integration & API identification"
    ]
  },
  {
    stepNumber: 3,
    title: "Plan the product",
    clientProvides: "Feedback on scope and priority decisions",
    devDoes: "Architects system data model, API routes, tech stack & milestone plan",
    clientReceives: "Clear timeline, technical architecture, and milestone roadmap",
    iconName: "Compass",
    details: [
      "Database schema and entity relationships",
      "Frontend component architecture map",
      "Milestone schedule with transparent deliverables"
    ]
  },
  {
    stepNumber: 4,
    title: "Design the experience",
    clientProvides: "Brand guidelines, visual preferences, or content assets",
    devDoes: "Creates wireframes, interactive UI components, design tokens, and theme system",
    clientReceives: "Interactive UI mockup and visual design prototype",
    iconName: "Palette",
    details: [
      "Responsive layout design (Mobile to 4K Desktop)",
      "Accessible color tokens and typography hierarchy",
      "Interactive component micro-animations"
    ]
  },
  {
    stepNumber: 5,
    title: "Build the product",
    clientProvides: "Regular review check-ins",
    devDoes: "Writes clean, typed frontend code, builds REST APIs, and configures databases",
    clientReceives: "Weekly staging URL demo builds to test real functionality",
    iconName: "Code",
    details: [
      "Modular, reusable TypeScript code structure",
      "API payload validation & database indexing",
      "Stateful user dashboards & dynamic UI controls"
    ]
  },
  {
    stepNumber: 6,
    title: "Test and refine",
    clientProvides: "User acceptance feedback on staging environment",
    devDoes: "Performs cross-browser testing, mobile audit, error edge case fixes & performance tuning",
    clientReceives: "Hardened, bug-free web application ready for production load",
    iconName: "CheckCircle2",
    details: [
      "Lighthouse performance & accessibility auditing",
      "Mobile touch target and keyboard navigation checks",
      "Form validation and network exception fallbacks"
    ]
  },
  {
    stepNumber: 7,
    title: "Deploy",
    clientProvides: "Domain name & production access keys",
    devDoes: "Configures Vercel/Render hosting, SSL certificates, metadata & SEO setup",
    clientReceives: "Live production URL accessible worldwide to your customers",
    iconName: "Rocket",
    details: [
      "Production build bundle optimization",
      "Open Graph social previews and search engine sitemaps",
      "Continuous deployment git integration"
    ]
  },
  {
    stepNumber: 8,
    title: "Improve and scale",
    clientProvides: "User feedback & future feature requests",
    devDoes: "Monitors performance, adds feature enhancements, integrates AI or analytics",
    clientReceives: "Long-term engineering reliability and scalable software evolution",
    iconName: "TrendingUp",
    details: [
      "Post-launch feature additions & iterative updates",
      "AI API or RAG knowledge base integration",
      "Performance and database scaling as user base grows"
    ]
  }
];
