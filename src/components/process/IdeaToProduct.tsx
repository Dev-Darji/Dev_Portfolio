"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../motion/ScrollReveal";
import {
  Lightbulb,
  Compass,
  Palette,
  Code2,
  CheckCircle,
  Rocket,
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";

export function IdeaToProduct() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      title: "Understand",
      subtitle: "Deconstruct the Problem",
      icon: <Lightbulb className="text-amber-400" size={22} />,
      transformation: "Loose Business Goal ➔ Verified Requirements",
      description: "Convert informal business goals and operational pain points into structured user stories, security constraints, and product boundaries.",
      codeSnippet: `// 1. Business Intent Extraction
const intent = {
  clientProblem: "Manual ledger overhead and error-prone invoicing",
  targetUsers: ["Finance Admins", "Operations Managers"],
  coreOutputs: ["Real-time ARR charts", "PDF Invoices", "Audit Logs"]
};`,
    },
    {
      step: "02",
      title: "Plan",
      subtitle: "System Blueprint & Schemas",
      icon: <Compass className="text-cyan-400" size={22} />,
      transformation: "Rough Idea ➔ Database & API Blueprint",
      description: "Architect normalized document schemas, REST endpoints, JWT authorization workflows, and milestone timelines.",
      codeSnippet: `// 2. Database Schema Definition
interface TransactionRecord {
  id: string;
  tenantId: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  timestamp: Date;
}`,
    },
    {
      step: "03",
      title: "Design",
      subtitle: "UX Flow & Design System",
      icon: <Palette className="text-violet-400" size={22} />,
      transformation: "Wireframe ➔ Responsive Cyber UI",
      description: "Design intuitive user flows with dark/light theme tokens, typography hierarchy, and micro-interactions.",
      codeSnippet: `/* 3. Theme & Token System */
:root {
  --primary-accent: #06b6d4;
  --surface-glass: rgba(12, 18, 34, 0.85);
  --border-glow: rgba(6, 182, 212, 0.4);
}`,
    },
    {
      step: "04",
      title: "Build",
      subtitle: "Full-Stack Development",
      icon: <Code2 className="text-indigo-400" size={22} />,
      transformation: "Mockup ➔ Full Production Codebase",
      description: "Engineer typed Next.js/React frontend interfaces, Node.js REST API routes, and optimized MongoDB queries.",
      codeSnippet: `// 4. Controller API Handler
export async function createLedgerEntry(req: Request) {
  const payload = await validatePayload(req);
  const entry = await db.ledgers.create(payload);
  return Response.json({ success: true, entry }, { status: 201 });
}`,
    },
    {
      step: "05",
      title: "Test",
      subtitle: "Hardening & Optimization",
      icon: <CheckCircle className="text-emerald-400" size={22} />,
      transformation: "Raw App ➔ 95+ Lighthouse Score",
      description: "Conduct cross-browser audits, responsive stress testing, WCAG 2.2 AA accessibility, and error boundaries.",
      codeSnippet: `// 5. Production Audit Verification
✓ Lighthouse Score: 98/100
✓ Zero Unhandled Console Exceptions
✓ Sub-100ms API Response Latency`,
    },
    {
      step: "06",
      title: "Deploy",
      subtitle: "Production Launch & CDN",
      icon: <Rocket className="text-sky-400" size={22} />,
      transformation: "Local Server ➔ Global Edge Deployment",
      description: "Deploy to Vercel/Render edge cloud with automated CI/CD pipelines, SSL certificates, and zero-downtime rollouts.",
      codeSnippet: `// 6. Cloud Deployment Telemetry
Edge Network: 300+ Locations Worldwide
Status: LIVE at https://vitta-app.com
SSL Certificate: Active (A+ Grade)`,
    },
    {
      step: "07",
      title: "Improve",
      subtitle: "Iteration & AI Expansion",
      icon: <TrendingUp className="text-pink-400" size={22} />,
      transformation: "V1 Launch ➔ Scalable AI Engine",
      description: "Monitor user telemetry, implement customer feedback, and integrate AI RAG knowledge agents to automate workflows.",
      codeSnippet: `// 7. Applied AI Integration
- RAG Vector Search for Instant Policy Lookups
- Automated Invoice OCR Processing
- Autonomous Tool Agents for Expense Routing`,
    },
  ];

  return (
    <section id="process" className="py-28 relative bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="left" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            Systematic Product Blueprint
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            From idea <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">to working product.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            How a vague business requirement transforms into a polished, high-performance digital application.
          </p>
        </ScrollReveal>

        {/* Stage Timeline Navigation Bar */}
        <ScrollReveal delay={0.15} className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {stages.map((st, idx) => (
            <button
              key={st.step}
              onClick={() => setActiveStage(idx)}
              className={`flex-1 min-w-[120px] p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStage === idx
                  ? "bg-indigo-950/60 dark:bg-indigo-950/60 light:bg-indigo-50 border-cyan-500 text-white dark:text-white light:text-indigo-950 shadow-lg shadow-cyan-500/15 scale-[1.02]"
                  : "bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border-white/10 light:border-black/10 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="font-bold text-cyan-400">0{idx + 1}</span>
                {st.icon}
              </div>
              <div className="text-xs font-bold truncate">{st.title}</div>
            </button>
          ))}
        </ScrollReveal>

        {/* Stage Detail Card with AnimatePresence */}
        <ScrollReveal delay={0.25} className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 light:border-black/10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Narrative */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 border border-cyan-500/20 text-xs font-mono">
                  <span>Phase {stages[activeStage].step}</span>
                  <span>•</span>
                  <span>{stages[activeStage].transformation}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900">
                  {stages[activeStage].subtitle}
                </h3>

                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base leading-relaxed">
                  {stages[activeStage].description}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    disabled={activeStage === 0}
                    onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer border border-white/10"
                  >
                    ← Previous Phase
                  </button>
                  <button
                    disabled={activeStage === stages.length - 1}
                    onClick={() => setActiveStage((prev) => Math.min(stages.length - 1, prev + 1))}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs font-mono text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    Next Phase <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* Right Interactive Code Preview */}
              <div className="lg:col-span-6">
                <div className="bg-slate-950/95 dark:bg-slate-950/95 light:bg-slate-950 rounded-2xl p-5 border border-cyan-500/20 text-xs text-slate-200 font-mono overflow-x-auto shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-cyan-400 flex items-center gap-1">
                      <Sparkles size={11} /> stage-0{activeStage + 1}-spec.ts
                    </span>
                  </div>
                  <pre className="text-cyan-300 leading-relaxed font-mono">
                    <code>{stages[activeStage].codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>

      </div>
    </section>
  );
}
