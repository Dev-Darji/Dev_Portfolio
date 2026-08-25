# Master Blueprint Prompt: Cyber-Luxe 3D Planet Collision Portfolio Theme

You can copy and save the exact prompt below. Whenever you paste this prompt in a new chat or project, any AI assistant or developer will be able to reconstruct this exact theme, 3D WebGL physics, and layout with 100% precision.

---

```markdown
Create an ultra-modern, high-performance "Cyber-Luxe Obsidian & Neon" developer portfolio web application using Next.js (App Router), React 19, TypeScript, Tailwind CSS, Three.js (@react-three/fiber, @react-three/drei), and Framer Motion with the following exact design system, 3D background collision physics, and streamlined 6-section architecture:

### 1. Visual Theme & Global Design Tokens:
- **Color Palette**: Obsidian Base (`#030712`), Cyber Cyan (`#06b6d4`), Hyper Violet (`#8b5cf6`), Laser Emerald (`#10b981`), Sunset Amber (`#f59e0b`).
- **Global Seamless Matrix Background**: The root body/layout must have a continuous glowing neon grid pattern (`bg-grid-pattern`) and all sections must have transparent backgrounds (`bg-transparent`) so that the cyber matrix grid and floating particles flow 100% seamlessly from top to bottom with ZERO horizontal cuts, seams, or color boundaries.
- **Glassmorphism & Micro-interactions**: Frosted glass cards (`backdrop-blur-xl`, `bg-slate-900/90`, `border-white/10`), ambient desktop cursor glow follower (`CyberCursorGlow`), and 3D spring tilt cards (`TiltCard`) with internal radial mouse spotlight tracking that never clips shadows or card borders.

### 2. Full-Page 3D WebGL Background Canvas with Viewport-Pinned Planet Collision Physics:
Build a continuous full-page 3D Three.js canvas (`CinematicScrollCanvas.tsx`) fixed in the background (`fixed inset-0 pointer-events-none`) with:
1. **Celestial Particle Galaxy**: 1600+ additive blending cyber particles in 3D space with subtle scroll-linked rotation and depth.
2. **Two Viewport-Pinned 3D Quantum Plasma Planet Orbs**:
   - **Left Planet**: Glowing Cyan wireframe sphere (`#06b6d4`) with an inclined orbital ring (`#38bdf8`).
   - **Right Planet**: Glowing Hyper Violet wireframe sphere (`#8b5cf6`) with an opposing orbital ring (`#a78bfa`).
   - **Fixed Viewport Stability**: Planets must NEVER drift down or disappear off-screen during long sections (keep `baseY = -0.35` in camera space).
3. **Plateaued Collision & Inverted Vertical Heights Choreography**:
   - **Hero Section (`p = 0.0`)**: Both planets are stationary on the flanks (Left at `X: -5.8, Y: +0.30`, Right at `X: +5.8, Y: -1.00`), positioned nicely in the mid-lower viewport.
   - **Transition between Hero ➔ Work (`p ~ 0.1`)**: Both planets dynamically glide horizontally inward to center (`X: ±0.4`), align at exact center height (`Y = 0`), collide with a luminous shockwave ring pulse, and separate!
   - **Featured Work Section (`p = 0.2`)**: Planets remain stationary in the viewport at **inverted vertical heights** (Left at `Y: -1.00`, Right at `Y: +0.30`) throughout your entire scroll across all project cards.
   - **Transition between Work ➔ Tech Matrix (`p ~ 0.3`)**: Both planets glide inward, collide at center (`Y = 0`), and separate back to (Left `Y: +0.30`, Right `Y: -1.00`).
   - **Repeating Plateau Cycle**: Alternates seamlessly between dwell plateaus (`frac < 0.25` or `frac > 0.75`) and collision transitions (`0.25 <= frac <= 0.75`) across all 6 sections.

### 3. Streamlined 6-Section High-Impact Architecture:

#### Section 01 — Hero // Launchpad:
- Display name ("DEV") with generous padding and overflow room so the letter "V" is never clipped.
- Live availability badge with pulsing green beacon and location.
- **Interactive Mode Switcher**:
  - `3D Cyber Mode`: Displays the clean, unobstructed 3D background with punchy headline and magnetic CTA buttons.
  - `Interactive CLI Terminal`: A functional in-browser terminal where visitors can execute real commands (`whoami`, `skills`, `projects`, `stats`, `contact`, `clear`) or click command chips.

#### Section 02 — Featured Work:
- Flagship project showcase with embedded live interactive product simulations:
  - **Vitta**: Real-time accounting SaaS ledger simulation with net balance calculations and zero-overflow transaction addition.
  - **Superworks**: Enterprise HRMS platform with interactive module tabs (Attendance, Leaves, Payroll, Expenses).
  - **Elite Interior**: Editorial architecture gallery.
  - **Shiv Car Rental**: Fleet category selector.
- Direct **Live Preview** (`liveUrl`) and **GitHub Repository** (`githubUrl`) redirection buttons + Case Study architecture modal.

#### Section 03 — Tech Matrix:
- Responsive grid with **exact uniform height and width** across all cards (`min-h-[148px]`).
- **Authentic Brand SVG Logos** for every technology: React, Next.js, TypeScript, JavaScript, Tailwind CSS, SCSS, Node.js, Express.js, FastAPI, MongoDB, MongoDB Atlas, SQL, REST API, Axios, Git & GitHub, Figma, Vercel, OpenAI/LLMs, Vector Search, AI Agents.
- Interactive **SaaS ARR Growth Calculator** + **REST API Controller Route Tracer** mini-widgets.
- Clickable **Verified Implementation Scope Inspector** drawer.

#### Section 04 — AI Labs // Applied Intelligence:
- Visual neural pipeline step flow (Prompt ➔ App Layer ➔ LLM Reasoning ➔ RAG Vector ➔ Tool APIs ➔ Cited Output).
- Side-by-side live interactive **RAG Context Search Simulator** & **Autonomous Agent Execution Loop**.

#### Section 05 — Track Record & Developer Dossier:
- Unified 2-column cyber HUD with tab switcher:
  - **Dossier Tab**: Developer profile, 4 core architectural pillars, location radar, and direct touchpoint pills (email `mailto:`, phone `tel:`, GitHub).
  - **Experience Tab**: Superworks enterprise production experience timeline, responsibilities matrix, and verified technologies.

#### Section 06 — Let's Build // Project Planner & Contact:
- Interactive project scope estimator with multi-select service pills, budget/timeline dropdowns, instant inquiry dispatch, and celebratory confetti.
- Direct copy-to-clipboard email helper and direct contact buttons.

### 4. Floating Navigation & SEO:
- Sleek floating frosted dock with 5 clean links: `["Work", "Tech Matrix", "AI Labs", "Track Record", "Contact"]`, dark/light mode toggle, and "Start a Project" button.
- Comprehensive metadata, OpenGraph tags, sitemap, and robots.txt.
```
