# Master Build Prompt — Dev’s Premium Interactive Portfolio

## Role and Mission

Act as a **senior product designer, creative director, UX strategist, and staff-level Next.js engineer**. Design and build a production-ready personal portfolio for **Dev**, a Full Stack Developer based in Surat, Gujarat, India.

This must not look or behave like a conventional developer portfolio or a generic template. Treat it as a polished digital product whose interface is itself proof of Dev’s capabilities.

The final experience should combine:

- A premium SaaS product
- A client-conversion landing page
- An interactive engineering showcase
- A cinematic creative portfolio
- A clear and credible personal brand

The site’s primary business objective is to make qualified visitors think:

> “Dev understands products—not only code. He can take my idea, understand the business problem, design the experience, architect the solution, build it, integrate APIs or AI, and deliver a polished application.”

Do not merely list skills. **Demonstrate them through interaction, simulations, architecture, responsive behavior, and strong product storytelling.**

---

## 1. Source of Truth

Use only the following confirmed information.

### Personal information

- **Name:** Dev
- **Title:** Full Stack Developer
- **Location:** Surat, Gujarat, India
- **Email:** devdarji1828@gmail.com
- **Phone:** +91 9104635945
- **GitHub:** https://github.com/Dev-Darji
- **LinkedIn:** Use a clearly labeled placeholder; make it easy to update centrally
- **Domain:** Not available yet

### Positioning

**Primary statement:**

> I turn ideas into polished, scalable digital products.

**Expanded positioning:**

> From business websites and SaaS platforms to real-time and AI-powered applications.

**Introduction:**

> I’m Dev, a Full Stack Developer focused on building modern digital products that combine thoughtful user experiences, solid engineering, and emerging AI technologies. From business websites and SaaS platforms to real-time and AI-powered applications, I turn ideas into products built to work, scale, and make an impact.

### Confirmed projects and experience

1. Vitta — Accounting Software / Accounting SaaS
2. Elite Interior Designing — Business Website / Interior Design
3. Shiv Car Rental — Business Website / Car Rental
4. Elicit Interior Designing — include only if genuinely separate from Elite
5. Silai Book — project details currently incomplete
6. Superworks — professional HRMS production experience, not an independently owned product

### Confirmed professional experience

- **Company/product context:** Superworks
- **Role:** Full Stack / MERN Developer
- **Experience:** 1+ year
- Relevant areas may include attendance, leave, payroll, expenses, employee management, email-notification configuration, dashboards, business workflows, production enhancements, and bug fixing.

### Confirmed technologies

**Frontend:** React.js, Next.js, JavaScript, HTML, CSS, SCSS, Bootstrap, Tailwind CSS  
**Backend:** Node.js, Express.js, FastAPI  
**Databases:** MongoDB, MongoDB Atlas, SQL  
**API work:** REST API, Axios, Fetch  
**Tools:** Git, GitHub, VS Code, Figma, MongoDB Compass  
**Deployment:** Vercel, Render  
**Modern AI integration interests/capabilities:** AI APIs/LLMs, prompt engineering, RAG, vector databases, AI agents, MCP, LangChain, LangGraph, OpenAI, Anthropic, Gemini, Voice AI, LiveKit, Twilio

Do not portray Dev as an AI researcher. Present AI as a modern product-development capability that can be integrated where it creates genuine value.

---

## 2. Non-Negotiable Truthfulness Rules

Never fabricate or imply unverified facts. Do not invent:

- Testimonials or review quotes
- Client names or logos
- Revenue, growth, conversion, or user metrics
- Awards, certifications, employment claims, or results
- Live URLs, domains, GitHub repositories, screenshots, or product data
- Features for projects whose details have not been provided
- Technologies used on specific projects unless confirmed
- Ownership of the complete Superworks product

When information is missing:

1. Omit the claim, or
2. Display a neutral, clearly marked placeholder in the content data, or
3. Build a tasteful simulated interface labeled **“Interactive product concept”** or **“Portfolio simulation”**—never represent it as live client data.

For Silai Book and Elicit Interior Designing, use honest “details to be added” content until verified information is supplied. If Elite and Elicit are the same project, keep only one entry.

All editable content—project details, URLs, contact information, social links, technology relationships, and experience—must live in centralized typed data files, not scattered through components.

---

## 3. Audience and Conversion Strategy

Design for a mixed audience:

- Founders seeking MVP or SaaS development
- Small and medium businesses needing websites or internal software
- Agencies seeking a reliable development partner
- Product managers and technical leads
- Clients needing dashboards, APIs, real-time systems, automation, or AI integration
- Businesses in accounting, HR, interiors, transport, hospitality, and other industries

The site must communicate:

> Different industries. One capability: turning ideas into working digital products.

Use layered explanations:

- Plain business language first
- Product and UX detail second
- Optional technical depth through expandable panels, tabs, or diagrams

The conversion journey should feel like:

- **First 5 seconds:** “This feels distinctive and premium.”
- **After 20 seconds:** “He builds real products.”
- **After 1 minute:** “He understands design, engineering, and business workflows.”
- **After 2–3 minutes:** “He could build what I need.”
- **Before leaving:** “I should start a conversation.”

---

## 4. Creative Direction

### Overall visual language

Create a restrained premium system inspired by modern SaaS, product studios, editorial layouts, and emerging AI interfaces. The result may feel Awwwards-level in craft, but usability and client conversion take priority over spectacle.

Aim for:

- Deep visual hierarchy
- Strong editorial typography
- Carefully controlled contrast
- Soft depth and layered surfaces
- Precise grids with occasional deliberate asymmetry
- High-quality motion with clear purpose
- Distinct visual identities inside project previews

Avoid:

- Generic portfolio templates
- Excessive glassmorphism
- Gamer or cyberpunk styling
- Constant neon glow
- Random gradients everywhere
- Overloaded particle effects
- Stock laptop mockups repeated in every section
- Decorative animation that delays access to content
- Identical cards for every content type

### Color system

Support dark and light modes. Default to dark and respect system preference after the visitor makes an explicit choice.

**Dark foundation:** near-black, charcoal, graphite, soft off-white text  
**Light foundation:** warm white, pale gray, ink text  
**Primary accent:** electric but controlled blue  
**Secondary accent:** refined violet/purple  
**Optional project accents:** project-specific, used sparingly

Use CSS design tokens for all colors, spacing, radii, shadows, typography, and motion. Both themes must meet WCAG AA contrast standards.

### Typography

Use a premium variable sans-serif with excellent loading performance and a distinctive display treatment. Prefer a pairing such as:

- Display: Space Grotesk, Sora, or Manrope
- Body/UI: Inter or Geist
- Technical labels: Geist Mono or IBM Plex Mono

Use next/font or locally optimized fonts. Hero typography should be expressive and responsive through `clamp()`, never clip at common viewport sizes, and maintain a strong hierarchy.

### Signature visual motif

Use one consistent motif throughout the experience: **connected product nodes / system pathways**. It can appear in the hero object, capability demos, architecture diagrams, transitions, and section dividers. This gives the portfolio a recognizable visual identity instead of unrelated effects.

---

## 5. Motion and Interaction Principles

Every animation must do at least one of the following:

- Clarify hierarchy
- Explain a process
- Reveal cause and effect
- Provide feedback
- Connect one section to the next
- Demonstrate product behavior

Use:

- Smooth but native-feeling scrolling
- Scroll progress
- Text and mask reveals
- Subtle parallax
- Magnetic primary buttons on precise-pointer devices only
- Purposeful hover and focus transitions
- Shared-layout transitions for project case studies
- Animated diagrams and product simulations
- Cursor-responsive depth in the hero
- A restrained custom cursor on desktop only

Motion guidance:

- Prefer transform and opacity
- Avoid layout-thrashing animation
- Keep common interactions around 160–300 ms
- Use longer cinematic transitions only for major narrative moments
- Never lock the user into long scroll-jacking sequences
- Respect `prefers-reduced-motion`; replace complex motion with clear static states
- Disable custom cursor, magnetic behavior, and hover-only interactions on touch devices

### 3D strategy

Use React Three Fiber/Three.js only for a moderate hero visualization—an abstract connected product system made from nodes, paths, planes, or data layers. It should respond subtly to pointer movement and scroll.

Requirements:

- Lazy-load the 3D scene after critical content
- Provide an attractive CSS/SVG fallback
- Lower device-pixel ratio and geometry complexity on low-power devices
- Pause rendering when offscreen or when the tab is hidden
- Avoid large textures
- Simplify or disable heavy 3D on mobile and reduced-motion devices
- The hero must remain impressive and usable if WebGL fails

---

## 6. Information Architecture and Page Experience

Use a single highly polished landing page with accessible project case-study overlays, drawers, or dedicated routes. Navigation should remain easy and predictable.

Recommended header:

- Dev wordmark
- Work
- Process
- AI
- About
- Contact
- Animated theme toggle
- Compact mobile menu

The header may begin minimal/transparent and gain a solid background as the page scrolls. Include a thin unobtrusive scroll-progress indicator.

### Section 01 — Hero

Create a full-viewport cinematic opening.

Content:

- Large display text: **DEV**
- Eyebrow/title: **Full Stack Developer**
- Main message: **I turn ideas into polished, scalable digital products.**
- Capability line: **SaaS · Web Applications · Business Websites · APIs · AI**
- Primary CTA: **Explore My Work**
- Secondary CTA: **Let’s Build Something**
- Location detail: Surat, Gujarat, India
- Subtle scroll cue

Place the abstract connected-system 3D visual beside or behind the content without compromising readability. Pointer movement should create restrained depth. As the visitor scrolls, transition the system motif into the next section.

On mobile, prioritize typography and CTA clarity; use a lightweight static or CSS-animated version of the visual.

### Section 02 — What I Build

Heading:

> More than websites. I build digital products.

Capabilities:

1. SaaS Applications
2. Full-Stack Web Applications
3. Business Websites
4. Admin Dashboards
5. REST APIs
6. Real-Time Applications
7. AI Integrations
8. RAG Systems
9. AI Agents

Do not use a repetitive rectangular icon-card grid. Use a modular interactive canvas or bento-style system with varied card proportions and embedded mini-demos.

Examples:

- SaaS: tiny dashboard whose values respond to a control
- REST API: request → route → service → database → response
- AI Agent: goal → reasoning step → tool selection → result
- Real-Time: synchronized status/activity feed
- Business Website: lead journey from discovery to inquiry

Each capability must remain understandable without hovering. Tap should reveal or activate the demo on touch devices.

### Section 03 — From Idea to Product

Heading:

> From idea to product.

Create a scroll-driven but user-controlled transformation:

> “We need software to manage our business.”

becomes:

1. Understand
2. Plan
3. Design
4. Build
5. Test
6. Deploy
7. Improve

Visually transform a loose note into requirements, user flow, interface, system architecture, data model, deployment, and feedback loop. The narrative should show product thinking, not a decorative timeline. Provide a static stacked version on mobile/reduced motion.

### Section 04 — Featured Work

Heading:

> Products I’ve built.

Use large immersive project chapters rather than uniform thumbnail cards. Give each project a distinct art direction while keeping shared typography and navigation consistent.

#### Vitta — Accounting SaaS

Present Vitta as the flagship technical case study.

Include verified/general areas only:

- Dashboard
- Accounts
- Transactions
- Reports
- Income and expenses
- Cash flow
- Spending distribution
- Financial data

Confirmed stack:

- React.js
- Node.js
- Express.js
- MongoDB

Build a simulated interactive dashboard clearly labeled as a portfolio simulation. Let visitors add or adjust sample transactions and see balance, income, expense, and chart values update immediately. Use deterministic sample data and include a Reset Demo action. Do not imply these figures are real business data.

Case-study structure:

- Problem
- Product thinking
- Solution
- Key workflows
- Dev’s contribution
- Architecture
- Technology
- Interactive preview

Do not invent measurable results.

#### Elite Interior Designing

Category: Business Website / Interior Design

Demonstrate visual versatility through an elegant editorial preview featuring project imagery placeholders, service discovery, project gallery, inquiry/contact, and lead-generation flow. If authentic photography is unavailable, use tasteful clearly replaceable image placeholders or licensed remote placeholders—not fake client work.

The style should differ meaningfully from the SaaS interface: warmer palette, image-led layout, softer motion, refined typography.

#### Shiv Car Rental

Category: Business Website / Car Rental

Show a practical booking-oriented product concept: vehicle discovery, categories, vehicle detail, availability/booking inquiry, driver information, contact, and location. Treat unverified workflows as concept-preview UI, not confirmed production features.

Use a distinct confident transport aesthetic and an interactive vehicle/category selector.

#### Elicit Interior Designing

Keep this project disabled or marked for confirmation in the data model until it is verified as separate from Elite. Never show duplicated content to inflate the portfolio.

#### Silai Book

Create a reserved project entry with honest copy: “Detailed case study coming after project information is verified.” Do not invent purpose, workflow, features, stack, or contribution. Make all fields easy to complete later.

#### Superworks — Professional Experience

Label clearly:

- **Professional Experience — Superworks**
- **Role — Full Stack / MERN Developer**
- **Experience — 1+ year**

Do not claim ownership of the overall platform. Explain that this represents experience contributing to a production HRMS environment. Show relevant business domains such as attendance, leave, payroll, expenses, employee management, notification configuration, dashboards, workflow enhancements, and bug fixing only as areas of contribution/experience.

Use a restrained HR workflow visualization and clearly word contribution boundaries.

### Section 05 — Case-Study Experience

Opening a project should feel like entering the product, using a smooth shared-element transition. Use an accessible modal/drawer for short content or a dedicated route for full case studies.

Provide tabs:

- Overview
- Product
- Architecture
- Technology

Narrative structure:

Problem → Thinking → Solution → Architecture → Implementation → Outcome/Status

For technical projects:

Frontend → API Layer → Backend → Database → Deployment

Requirements:

- Deep links for projects where practical
- Back button works correctly
- Focus trap and Escape close for modal experiences
- Focus returns to the triggering element
- Content remains usable without animation

### Section 06 — Technology Ecosystem

Do not use percentages, ratings, or skill bars.

Create an interactive but accessible ecosystem grouped by Frontend, Backend, Database, APIs, Tools, and Deployment. Use connected nodes or a structured orbit/grid that remains readable.

Hover/focus/tap on a technology should reveal only verified relationships. Example:

- React.js → Vitta
- Node.js → Vitta
- Express.js → Vitta
- MongoDB → Vitta
- MERN-related technologies → Superworks experience, phrased carefully

Do not create project relationships without evidence. Include a list-based accessible fallback beneath or within the same semantic structure.

### Section 07 — AI and Next-Generation Development

Heading:

> Building beyond traditional web applications.

Position this as practical AI product integration, not research expertise.

Create an interactive architecture:

User → AI Application → Model → RAG / Tools / Agent → Knowledge / API / Database → Response

Capability labels may include:

- AI APIs and LLMs
- Prompt engineering
- RAG
- Vector databases
- AI agents
- MCP
- LangChain
- LangGraph
- OpenAI
- Anthropic
- Gemini
- Voice AI
- LiveKit
- Twilio

Include two educational simulations:

**RAG demo**  
Question: “What is our leave policy?”  
Animate: question → retrieval → relevant knowledge snippet → LLM synthesis → cited answer. Use clearly fictional sample policy content and label it as a demonstration.

**Agent demo**  
Animate: user goal → agent → tool selection → API/database → result → response. Let visitors start/replay the flow and inspect each step.

Avoid pretending the demos contact real models unless an actual backend/API is configured. If no API key or backend exists, implement deterministic client-side simulations and label them accurately.

### Section 08 — Behind the Build

Heading:

> What happens behind the interface?

Build an interactive architecture diagram:

Frontend → API Layer → Backend Services → Database → External APIs → Deployment

Each layer should be keyboard-focusable and reveal:

- Its purpose in plain language
- A concise technical explanation
- Example technologies Dev uses

Animate requests flowing through the system when the visitor selects “Run request.” Include loading, success, and failure states to demonstrate realistic product behavior.

### Section 09 — Client Journey

Heading:

> From your idea to something real.

Steps:

1. Tell me the idea
2. Understand the requirements
3. Plan the product
4. Design the experience
5. Build the product
6. Test and refine
7. Deploy
8. Improve and scale

Focus on reducing uncertainty. For every step, explain what the client provides, what Dev does, and what the client receives. Use concise expandable content and a visual progress pathway.

### Section 10 — Why Work With Me

Use evidence-driven differentiators, not generic icon cards:

- **Product Thinking:** Workflows, users, and business requirements—not only screens
- **Full-Stack Capability:** Frontend, backend, APIs, and databases
- **Modern AI Integration:** Applied where it creates real product value
- **Flexible Across Industries:** Accounting, HRMS, interiors, car rental, and broader business applications
- **Built for Real Use:** Maintainability, usability, and scalable architecture

Pair each point with a small cause-and-effect visual rather than a decorative icon.

### Section 11 — Experience

Create an interactive vertical timeline for Superworks:

- Full Stack / MERN Developer
- 1+ year
- Production HRMS experience
- Relevant responsibilities and product areas, phrased without exaggeration

Do not invent dates if none are provided. Use “1+ year” rather than creating a start date.

### Section 12 — About Dev

Heading:

> Behind the code.

Copy:

> I’m Dev, a Full Stack Developer from Surat, Gujarat, focused on turning ideas into modern digital products. I enjoy working across the entire development process—from understanding a problem and designing the experience to building APIs, databases, interfaces, and intelligent features.

Show location, current focus, core technology areas, interests, and professional experience. Do not generate a realistic portrait. Use a tasteful abstract monogram/avatar or the connected-system motif.

### Section 13 — Proof and Trust

Show only genuine proof:

- Real project case studies
- Professional experience
- GitHub profile link
- Live links only when later supplied and verified
- Testimonials only when later supplied and approved

If proof is unavailable, omit it. Empty space is more credible than fabricated social proof.

### Section 14 — Start a Project

Heading:

> Have an idea?

Subheading:

> Let’s turn it into something real.

Create a polished multi-step or intelligently grouped inquiry form:

- Name
- Email
- Project type
- Project description
- Budget range
- Timeline

Project type options:

- Business Website
- SaaS
- Web Application
- Dashboard
- AI Product
- API / Backend
- Real-Time Application
- Other

UX requirements:

- Explain that rough ideas are welcome
- Use clear labels, not placeholder-only fields
- Inline validation
- Helpful error and success states
- Keyboard and screen-reader accessible
- Consent/privacy note if data is sent or stored
- If no backend/email service is configured, provide a graceful mailto fallback and clearly document how to connect a form provider or server action later
- Include direct email and phone alternatives

Primary CTA: **Start a Project**

### Section 15 — Footer

Keep it minimal:

- Dev — Full Stack Developer
- Work, Process, AI, About, Contact
- GitHub
- LinkedIn placeholder
- Email
- Phone
- “Built with curiosity, code and caffeine.”

Do not make a nonfunctional placeholder LinkedIn link clickable. Label it “LinkedIn — coming soon” or hide it through configuration.

---

## 7. Technical Implementation

Use a current stable production stack:

- Next.js App Router
- React
- TypeScript with strict mode
- Tailwind CSS or a well-structured token-based styling system
- Framer Motion or GSAP, selecting the minimum needed
- React Three Fiber/Three.js only for the hero visualization
- Recharts, lightweight SVG, or custom canvas/SVG for dashboard visuals

Do not install multiple overlapping animation libraries without a clear reason. Prefer Framer Motion for component transitions and GSAP only if a complex scroll sequence genuinely needs it.

Recommended structure:

```text
app/
  layout.tsx
  page.tsx
  projects/[slug]/page.tsx
  sitemap.ts
  robots.ts
components/
  ui/
  navigation/
  diagrams/
  demos/
  projects/
sections/
animations/
three/
data/
  site.ts
  projects.ts
  technologies.ts
  experience.ts
hooks/
lib/
public/
```

Engineering requirements:

- Reusable, typed components
- Content separated from presentation
- No giant monolithic page component
- Server Components by default; Client Components only where interaction requires them
- Dynamic imports for 3D, charts, heavy demos, and case-study interactions
- Error boundaries/fallbacks for complex visuals
- No runtime console errors or warnings
- No dead links or buttons
- No horizontal overflow at any supported viewport
- Use clean comments only where implementation intent is not obvious
- Include a concise README with setup, scripts, content-update locations, and deployment instructions

---

## 8. Responsive Behavior

Design intentionally for:

- Large desktop: 1440px+
- Laptop: 1024–1439px
- Tablet: 768–1023px
- Mobile: 320–767px

Do not simply shrink the desktop design.

Mobile requirements:

- Simplified hero visual
- No custom cursor or magnetic effects
- Tap-accessible capability demos
- No essential hover-only content
- Large but controlled responsive typography
- Comfortable touch targets of at least 44×44 px
- Compact navigation with correct focus management
- Reduced pinned/scroll-driven sequences
- Project demos adapted to narrow screens
- Forms optimized for mobile keyboards and autocomplete

Test at minimum: 320×568, 390×844, 768×1024, 1366×768, and 1440×900.

---

## 9. Performance Budget

Visual polish must not compromise the first load.

Targets:

- Lighthouse Performance: aim for 90+ on a production mobile audit
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+
- LCP under 2.5 seconds on a typical fast mobile connection
- CLS under 0.1
- INP under 200 ms where practical

Implementation rules:

- Render critical hero text immediately
- Lazy-load below-the-fold sections and heavy interactive modules
- Use next/image with explicit dimensions and responsive sizes
- Prefer AVIF/WebP assets
- Avoid autoplay video unless lightweight, muted, and nonessential
- Minimize font families and weights
- Tree-shake icons; do not import huge icon bundles
- Pause offscreen animation and WebGL rendering
- Avoid expensive continuous blur and filters
- Keep particle counts low
- Prevent unnecessary React re-renders
- Ensure the site still communicates well before JavaScript finishes loading

---

## 10. Accessibility

Meet WCAG 2.2 AA as closely as possible.

Include:

- Semantic landmarks and heading hierarchy
- Skip-to-content link
- Visible focus states
- Full keyboard navigation
- Accessible dialogs, tabs, accordions, menus, and forms
- ARIA only where native semantics are insufficient
- Alt text for meaningful imagery; empty alt for decoration
- Sufficient contrast in both themes
- Reduced-motion behavior
- No color-only status communication
- Screen-reader labels for visual diagrams and demo controls
- Pause/replay controls for animated demonstrations where needed
- Focus restoration after closing project overlays

The custom cursor must never replace the native pointer or hide focus visibility.

---

## 11. SEO and Metadata

Implement:

- Title: **Dev — Full Stack Developer | SaaS, Web Applications & AI**
- Description: **Dev is a Full Stack Developer building modern web applications, SaaS products, business websites and AI-powered digital experiences.**
- Canonical URL as a centralized placeholder until a domain exists
- Open Graph and social metadata
- Configurable social preview image
- `sitemap.ts`
- `robots.ts`
- Semantic content and internal links
- JSON-LD for `Person` and `ProfessionalService` only using confirmed facts
- Correct favicon/app icon placeholders

Do not publish false employer, client, review, or address details in structured data.

---

## 12. Recommended Design Enhancements

Incorporate these ideas to improve coherence and conversion:

1. **One signature system motif:** Reuse connected nodes and pathways throughout the hero, architecture, AI, and transitions.
2. **Project-specific art direction:** Vitta should feel precise and data-driven; interiors should feel editorial and warm; car rental should feel practical and energetic; Superworks should feel operational and workflow-focused.
3. **Layered technical depth:** Default to benefits and workflows; allow technical visitors to inspect architecture without overwhelming nontechnical clients.
4. **Persistent but subtle conversion path:** Keep a small “Start a Project” action available in navigation after the hero, without turning the site into an aggressive sales funnel.
5. **Demo honesty labels:** Clearly distinguish simulated product previews from live products. This increases credibility rather than weakening the presentation.
6. **Useful loading states:** Use the connected-system motif for short skeleton/loading states—not a long cinematic preloader.
7. **Stateful demos:** Let visitors manipulate a few meaningful variables, then offer Reset/Replay controls. Avoid fake complexity.
8. **No forced audio:** The experience must be silent by default.
9. **Progressive enhancement:** Core content, navigation, and contact details must remain available if advanced motion or WebGL fails.
10. **Content maintenance mode:** Include a single configuration flag for hiding incomplete projects and placeholder social links.

---

## 13. Build Order

Follow this priority order so the result remains coherent:

### Phase 1 — Foundation

- Establish content model and truth-safe project data
- Create design tokens, themes, typography, layout grid, and responsive system
- Build semantic page structure and navigation

### Phase 2 — Core conversion experience

- Hero
- Featured work
- Vitta interactive preview
- Client journey
- Contact form
- About and experience

### Phase 3 — Capability demonstrations

- What I Build mini-demos
- Technology ecosystem
- AI simulations
- Architecture diagram
- Case-study interactions

### Phase 4 — Motion and 3D polish

- Hero 3D/fallback
- Shared project transitions
- Scroll reveals
- Custom cursor and magnetic interactions on supported desktop devices

### Phase 5 — Quality

- Responsive review
- Accessibility review
- Performance optimization
- Metadata and structured data
- Cross-browser testing
- Final content-truth audit

Do not spend most of the implementation budget on the hero while leaving projects or contact unfinished.

---

## 14. Required States and Edge Cases

Design and implement:

- Loading, empty, error, success, disabled, hover, focus, and active states
- No-WebGL fallback
- Reduced-motion mode
- Keyboard-only navigation
- Touch-device behavior
- Missing project image fallback
- Missing project URL behavior
- Placeholder LinkedIn behavior
- Contact-form validation and submission failure
- Very long project descriptions without layout breakage
- Light and dark system preference changes
- Refresh/deep-link behavior for project case studies

---

## 15. Definition of Done

The implementation is complete only when:

- The site feels premium without resembling a generic template
- The first screen clearly communicates Dev’s positioning and offers two meaningful CTAs
- Projects—not technology logos—form the core evidence
- Vitta has a convincing, clearly labeled interactive SaaS simulation
- AI and architecture sections visually explain real product flows
- Superworks is presented as professional contribution, not product ownership
- Unknown project details remain honest and easy to update
- All navigation, buttons, demos, tabs, dialogs, forms, and theme controls work
- There are no fake claims, fake URLs, fake results, or fake testimonials
- Desktop, tablet, and mobile layouts are intentionally designed
- Reduced motion, keyboard navigation, and screen-reader basics work
- Performance-heavy features are lazy-loaded and have fallbacks
- Metadata, sitemap, robots, and structured data are present
- The project builds successfully with no TypeScript or lint errors
- The README explains setup, editing content, adding project assets, configuring form delivery, and deploying

---

## 16. Final Output Required from the Coding Agent

Deliver:

1. A complete working Next.js project
2. Clean, reusable, typed source code
3. Responsive dark and light themes
4. All interactions and simulations described above, with sensible fallbacks
5. A README containing:
   - Local setup
   - Available scripts
   - Folder structure
   - Where to update personal details, projects, technologies, and links
   - How to add authentic screenshots/assets
   - How to configure contact-form delivery
   - How to deploy to Vercel or another supported platform
6. A short implementation summary listing:
   - Major design decisions
   - Performance choices
   - Accessibility choices
   - Which content remains placeholder/incomplete
7. A final self-audit against the Definition of Done

If an asset or fact is missing, proceed with a tasteful, clearly labeled placeholder and document exactly what must be replaced. Do not block the entire build for missing optional content.

The final result should be technically impressive, easy to explore, credible, fast, and conversion-focused. The benchmark is not “the most animation.” The benchmark is:

> **A potential client understands what Dev can build, trusts how he thinks, and wants to start a project with him.**
