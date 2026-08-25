export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  industry: string;
  artDirection: {
    theme: string;
    accentColor: string;
    bgGradient: string;
  };
  isFlagship?: boolean;
  technologies: string[];
  summary: string;
  problem: string;
  thinking: string;
  solution: string;
  liveUrl: string;
  images: string[];
  architecture: {
    frontend: string;
    apiLayer: string;
    backend: string;
    database: string;
    deployment: string;
  };
  keyWorkflows: string[];
  devContribution: string;
}

export const projectsData: Project[] = [
  {
    id: "vitta",
    slug: "vitta",
    title: "Vitta",
    tagline: "Modern Accounting & Financial Management SaaS",
    category: "SaaS Platform",
    industry: "Fintech & Accounting",
    artDirection: {
      theme: "dark-precision",
      accentColor: "#2563EB",
      bgGradient: "from-blue-950/40 via-slate-900/60 to-indigo-950/30",
    },
    isFlagship: true,
    liveUrl: "https://vitta-theta.vercel.app/",
    images: ["/projects/vitta1.png", "/projects/vitta2.png"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    summary: "A full-featured cloud accounting SaaS application engineered for businesses to manage ledgers, track income/expenses in real time, monitor net cash flows, and generate financial reports.",
    problem: "Small and medium business operators often struggle with fragmented ledger sheets, complex legacy desktop tools, and a lack of instant visibility into cash balance.",
    thinking: "Architected a responsive financial workspace with automated balance math, categorical ledger updates, and dynamic cash flow visualizers.",
    solution: "Designed and built the full-stack accounting platform with real-time balance calculations, spending breakdown analytics, and categorical transaction logging.",
    architecture: {
      frontend: "React.js SPA with reactive financial dashboards & state management",
      apiLayer: "Express.js REST API with structured controllers & validation middleware",
      backend: "Node.js runtime handling transaction math and business logic",
      database: "MongoDB with indexed collections for accounts, income, and expense records",
      deployment: "Vercel / Render cloud infrastructure",
    },
    keyWorkflows: [
      "Dashboard summary with real-time cash balance & monthly inflow/outflow",
      "Categorized Income & Expense logging with instant ledger recalculation",
      "Interactive spending distribution breakdown",
      "Multi-account ledger status tracking and reporting"
    ],
    devContribution: "Full Stack Engineering — Architected full frontend data flow, built backend Express REST routes, designed MongoDB schema, and built interactive financial ledger simulator."
  },
  {
    id: "elicit-interior",
    slug: "elicit-interior",
    title: "Elicit Interior Designer",
    tagline: "Customizable Interior Architecture CMS with Supabase Admin",
    category: "Custom CMS",
    industry: "Interior Studio",
    artDirection: {
      theme: "modern-studio",
      accentColor: "#0284C7",
      bgGradient: "from-sky-950/40 via-slate-900/60 to-blue-950/30",
    },
    isFlagship: true,
    liveUrl: "https://elicit-interior-designer.vercel.app/",
    images: ["/projects/elicit1.png", "/projects/elicit2.png"],
    technologies: ["React.js", "Supabase", "Tailwind CSS", "PostgreSQL", "Node.js", "REST API"],
    summary: "A dynamic, full-featured interior design platform powered by a custom Supabase admin CMS. Empowers the design studio to manage architectural projects, upload gallery assets, update service tiers, and track client inquiries in real time.",
    problem: "Boutique interior firms frequently need to update their visual portfolio with newly completed residential and commercial projects without relying on code changes every time.",
    thinking: "Built a customized Supabase backend with authenticated admin management, enabling non-technical studio teams to upload high-res imagery, manage project details, and review incoming consultation leads directly.",
    solution: "Developed an integrated web application combining a public-facing architectural gallery with a secure Supabase admin portal for real-time CMS management.",
    architecture: {
      frontend: "React.js dynamic client with modular gallery grids & admin dashboard",
      apiLayer: "Supabase REST Client & Serverless Edge Functions",
      backend: "Supabase Backend-as-a-Service with Row Level Security (RLS)",
      database: "PostgreSQL database storing projects, categories, and client inquiry entries",
      deployment: "Vercel global edge deployment",
    },
    keyWorkflows: [
      "Supabase Admin CMS for live project creation, asset uploads, and gallery curation",
      "Interactive architectural project showcase with category filters (Living, Commercial, Luxury)",
      "Consultation lead capture and customer inquiry management",
      "Dynamic service packages and design process presentations"
    ],
    devContribution: "Full Stack Development & CMS Architecture — Configured Supabase PostgreSQL database, built secure admin panel for project management, and created responsive public gallery."
  },
  {
    id: "elegant-design-studio",
    slug: "elegant-design-studio",
    title: "Elegant Design Studio",
    tagline: "High-End Luxury Residential & Commercial Interior Portfolio",
    category: "Editorial Portfolio",
    industry: "Luxury Interiors",
    artDirection: {
      theme: "warm-editorial",
      accentColor: "#D97706",
      bgGradient: "from-amber-950/40 via-stone-900/60 to-yellow-950/30",
    },
    liveUrl: "https://elegantdesignstudio.vercel.app/",
    images: ["/projects/elite1.png", "/projects/elite2.png"],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    summary: "An ultra-premium, editorial landing page and portfolio experience for a luxury interior architecture firm. Features bespoke typography, curated image transitions, design philosophy storytelling, and a frictionless consultation booking funnel.",
    problem: "High-ticket architectural and luxury interior clients expect a sophisticated digital experience that mirrors the craftsmanship, textures, and bespoke quality of physical spaces.",
    thinking: "Emphasized editorial typography, tactile warm color palettes, smooth scroll animations, and clear service breakdowns to drive high-value architectural consultations.",
    solution: "Crafted an immersive editorial visual identity with smooth micro-interactions, responsive image grids, and an intuitive client inquiry flow optimized for conversions.",
    architecture: {
      frontend: "Next.js App Router with image-optimized rendering & Framer Motion transitions",
      apiLayer: "Next.js Server Actions & API routes for consultation dispatch",
      backend: "Node.js automated email notification handler",
      database: "MongoDB for lead storage and client consultation entries",
      deployment: "Vercel platform with global CDN caching",
    },
    keyWorkflows: [
      "Curated visual project showcase with smooth motion transitions",
      "Editorial storytelling of architectural design philosophy and material selection",
      "Interactive consultation discovery & estimate request form",
      "Comprehensive service scope breakdown (Turnkey, Residential, Commercial)"
    ],
    devContribution: "Frontend & UX Engineering — Designed editorial design system, built responsive Next.js component suite, implemented fluid layout transitions, and integrated inquiry funnel."
  },
  {
    id: "shiv-car-rentals",
    slug: "shiv-car-rentals",
    title: "Shiv Car Rentals",
    tagline: "Vehicle Fleet Booking & Instant Rental Discovery Platform",
    category: "Fleet Booking",
    industry: "Vehicle Logistics",
    artDirection: {
      theme: "dynamic-speed",
      accentColor: "#10B981",
      bgGradient: "from-emerald-950/40 via-zinc-900/60 to-teal-950/30",
    },
    liveUrl: "https://shiv-car-rentals.vercel.app/",
    images: ["/projects/car1.png", "/projects/car2.png"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap / Tailwind"],
    summary: "A practical vehicle rental discovery and booking reservation platform. Enables commuters and travelers to browse vehicle categories (SUVs, Sedans, Luxury), check transparent pricing, review vehicle specifications, and dispatch rental inquiries.",
    problem: "Travelers and businesses need a fast, transparent way to check car availability, compare fleet categories, and book vehicles without complicated booking friction.",
    thinking: "Focused on speed, clarity, and bold transport aesthetics—allowing users to filter vehicles by category, review specs, and send booking requests immediately.",
    solution: "Developed an interactive vehicle catalog with instant category tabs, specs comparison, driver options, and rental request validation.",
    architecture: {
      frontend: "React.js dynamic frontend with responsive filter components",
      apiLayer: "Express REST routes for booking inquiries & vehicle specs lookup",
      backend: "Node.js server managing vehicle availability and booking leads",
      database: "MongoDB collection of vehicles, categories, and booking logs",
      deployment: "Render / Vercel cloud deployment",
    },
    keyWorkflows: [
      "Interactive vehicle fleet browser with category toggles (SUV, Sedan, Executive)",
      "Rental inquiry booking form with date & route selector",
      "Vehicle specification cards (Seating capacity, Fuel type, Transmission)",
      "Transparent local & outstation rental pricing guidance"
    ],
    devContribution: "Full Stack Development — Built vehicle showcase components, designed intuitive booking request flows, and implemented responsive client layout."
  }
];
