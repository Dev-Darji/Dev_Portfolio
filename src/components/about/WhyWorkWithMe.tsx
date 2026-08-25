"use client";

import React, { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../motion/ScrollReveal";
import { TiltCard } from "../motion/TiltCard";
import { Brain, Layers, Sparkles, Building, ShieldCheck, Zap } from "lucide-react";

export function WhyWorkWithMe() {
  const [activeDiff, setActiveDiff] = useState<number>(0);

  const differentiators = [
    {
      title: "Product Thinking First",
      subtitle: "Workflows, users, and business requirements—not just static screens.",
      icon: <Brain size={22} className="text-cyan-400" />,
      cause: "Client shares raw operational problem",
      effect: "Architected user flow & database schema aligned with business logic",
    },
    {
      title: "Complete Full-Stack Scope",
      subtitle: "Frontend interfaces, backend APIs, database indexing, and deployment.",
      icon: <Layers size={22} className="text-indigo-400" />,
      cause: "Single point of contact engineering",
      effect: "Zero integration friction between disparate frontend and backend teams",
    },
    {
      title: "Applied AI Integration",
      subtitle: "Applied AI (LLMs, RAG, tool agents) where it creates true value.",
      icon: <Sparkles size={22} className="text-violet-400" />,
      cause: "High manual data processing overhead",
      effect: "Automated vector context search and cited AI summaries",
    },
    {
      title: "Cross-Industry Adaptability",
      subtitle: "Accounting SaaS, enterprise HRMS, luxury interiors, car rentals.",
      icon: <Building size={22} className="text-emerald-400" />,
      cause: "Diverse domain requirements",
      effect: "Tailored visual art direction & custom workflow logic per industry",
    },
    {
      title: "Built for Real Production",
      subtitle: "Clean TypeScript code, defensive validation, and high performance.",
      icon: <ShieldCheck size={22} className="text-amber-400" />,
      cause: "High user traffic and edge cases",
      effect: "Lighthouse 95+ score, WCAG AA accessibility, zero console errors",
    },
  ];

  return (
    <section className="py-28 relative bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border-y border-white/5 light:border-black/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Differentiators
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            Why clients & teams <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">work with me.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Evidence-driven value creation with interactive cause-and-effect proof.
          </p>
        </ScrollReveal>

        {/* Interactive Staggered Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {differentiators.map((diff, idx) => {
            const isActive = activeDiff === idx;
            return (
              <StaggerItem key={diff.title} direction="up">
                <TiltCard>
                  <button
                    onClick={() => setActiveDiff(idx)}
                    className={`w-full glass-card rounded-2xl p-5 text-left transition-all relative overflow-hidden flex flex-col justify-between h-full cursor-pointer group ${
                      isActive
                        ? "border-emerald-500 bg-emerald-950/30 dark:bg-emerald-950/30 light:bg-emerald-50 shadow-xl shadow-emerald-500/20 scale-[1.02]"
                        : "hover:border-emerald-500/40"
                    }`}
                  >
                    <div>
                      <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 border border-white/10 light:border-black/10 w-fit mb-4 group-hover:border-emerald-500/30 transition-colors">
                        {diff.icon}
                      </div>
                      <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2">{diff.title}</h3>
                      <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{diff.subtitle}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 light:border-black/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <Zap size={11} /> {isActive ? "Active Impact Visual" : "Click to inspect impact"}
                    </div>
                  </button>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Cause-and-Effect Visual Display */}
        <ScrollReveal delay={0.25} className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white max-w-4xl mx-auto shadow-2xl">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">
            Interactive Cause & Effect Simulation — {differentiators[activeDiff].title}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center font-mono text-xs">
            <div className="bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 p-4 rounded-2xl border border-rose-500/20">
              <span className="text-rose-400 font-bold block mb-1.5">Business Friction (Cause):</span>
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans leading-relaxed">{differentiators[activeDiff].cause}</span>
            </div>

            <div className="bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 p-4 rounded-2xl border border-emerald-500/25">
              <span className="text-emerald-400 font-bold block mb-1.5">Delivered Engineering Impact (Effect):</span>
              <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-sans leading-relaxed">{differentiators[activeDiff].effect}</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
