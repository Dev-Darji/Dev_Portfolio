# Dev — Premium Interactive Portfolio

A production-ready personal portfolio built for **Dev** (Full Stack / MERN & AI Developer based in Surat, Gujarat, India).

Designed to combine SaaS product polish, client-conversion landing pages, interactive engineering simulations, and a clear personal brand.

---

## Key Features

- **Flagship Vitta Interactive Dashboard**: Stateful financial simulation with real-time balance calculations, expense filters, and deterministic demo reset.
- **AI & Next-Gen Development**: Interactive RAG vector context search and autonomous AI Agent reasoning loop simulations.
- **What I Build Bento Canvas**: 9 modular capability cards with live mini-demos.
- **Behind the Build System Architecture**: Interactive 6-tier packet trace showing request pathways and error handling states.
- **Superworks Professional Experience**: Dedicated enterprise HRMS contribution card explicitly clarifying 1+ year developer role scope.
- **Truthful Content Model**: All project stats, facts, and claims strictly adhere to verified information.
- **Theme & Accessibility System**: Dark & Light mode toggle, WCAG AA contrast compliance, keyboard navigation focus traps, and reduced motion fallbacks.
- **3D & 2D Node Visual**: React Three Fiber 3D hero node network with high-performance 2D SVG canvas fallback.

---

## Tech Stack

- **Framework**: Next.js App Router (React 19, TypeScript)
- **Styling**: Tailwind CSS v4 & custom token system
- **Motion & 3D**: Framer Motion, Three.js / React Three Fiber / Drei
- **Icons**: Lucide React
- **Analytics & Charts**: Custom SVG & Recharts

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Install project dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

```text
src/
├── app/                  # Next.js App Router (layout, page, sitemap, robots)
│   ├── globals.css       # Design tokens & glassmorphism utilities
│   ├── layout.tsx        # Root layout with JSON-LD structured data
│   ├── page.tsx          # Assembled portfolio landing page
├── components/
│   ├── ThemeProvider.tsx # Dark/Light theme context
│   ├── nav/              # Navbar & ScrollProgress
│   ├── hero/             # HeroSection, 3D Canvas & 2D SVG fallback
│   ├── bento/            # CapabilitiesBento with mini-demos
│   ├── process/          # IdeaToProduct & ClientJourney
│   ├── projects/         # ProjectShowcase, VittaDemo & SuperworksCard
│   ├── tech/             # TechEcosystem filterable node grid
│   ├── ai/               # AiCapabilities, RagDemo & AgentDemo
│   ├── architecture/     # BehindTheBuild request packet tracer
│   ├── about/            # WhyWorkWithMe, ExperienceTimeline & AboutDev
│   ├── contact/          # ProjectPlannerForm multi-step inquiry form
│   └── footer/           # Footer component
├── data/                 # Centralized content models
│   ├── site.ts           # Personal info, contact details & SEO
│   ├── projects.ts       # Verified projects & art direction
│   ├── capabilities.ts   # What I build capabilities
│   ├── technologies.ts   # Tech ecosystem & verified scope
│   ├── experience.ts     # Superworks experience details
│   └── journey.ts        # 8-step client conversion roadmap
└── lib/
    └── utils.ts          # Class merging & currency formatters
```

---

## Updating Content & Links

All editable content is centralized in `src/data/`:

1. **Personal Information**: Edit `src/data/site.ts` to update email, phone, location, or domain.
2. **Project Case Studies**: Edit `src/data/projects.ts` to add authentic screenshots, live client URLs, or update Silai Book once verified.
3. **LinkedIn Link**: Update `siteConfig.linkedin` in `src/data/site.ts` once your profile URL is ready.
4. **Form Integration**: Replace the mailto fallback in `src/components/contact/ProjectPlannerForm.tsx` with your preferred form provider API (e.g. Formspree, Resend, or Next.js Server Action).

---

## Building for Production

```bash
# Check TypeScript types & compile production bundle
npm run build

# Start production server locally
npm start
```

---

## Deployment

Deploy directly to **Vercel** or **Render**:

```bash
npx vercel
```
