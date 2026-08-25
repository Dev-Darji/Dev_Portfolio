"use client";

import React, { useState } from "react";
import { journeySteps } from "@/data/journey";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../motion/ScrollReveal";
import { MessageSquare, FileSearch, Compass, Palette, Code, CheckCircle2, Rocket, TrendingUp, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={20} className="text-amber-400" />,
  FileSearch: <FileSearch size={20} className="text-cyan-400" />,
  Compass: <Compass size={20} className="text-indigo-400" />,
  Palette: <Palette size={20} className="text-violet-400" />,
  Code: <Code size={20} className="text-pink-400" />,
  CheckCircle2: <CheckCircle2 size={20} className="text-emerald-400" />,
  Rocket: <Rocket size={20} className="text-sky-400" />,
  TrendingUp: <TrendingUp size={20} className="text-teal-400" />,
};

export function ClientJourney() {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <section className="py-28 relative bg-slate-950 dark:bg-slate-950 light:bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
            Client Conversion Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            From your idea <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">to live deployment.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Zero ambiguity. Exact transparency on what you provide, what I engineer, and what you receive at every stage.
          </p>
        </ScrollReveal>

        {/* 8 Step Expandable Cards Grid */}
        <StaggerContainer className="space-y-4 max-w-4xl mx-auto">
          {journeySteps.map((step) => {
            const isExpanded = expandedStep === step.stepNumber;
            return (
              <StaggerItem key={step.stepNumber} direction="up">
                <div className="glass-card rounded-2xl border border-white/10 light:border-black/10 overflow-hidden transition-all hover:border-cyan-500/30">
                  {/* Accordion Header */}
                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : step.stepNumber)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-white/5 light:hover:bg-black/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 border border-white/10 light:border-black/10 shadow-md">
                        {iconMap[step.iconName] || <Sparkles size={20} className="text-cyan-400" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-cyan-400 font-semibold">Phase 0{step.stepNumber}</div>
                        <div className="text-lg font-bold text-white dark:text-white light:text-slate-900">{step.title}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                        {isExpanded ? "Hide Details" : "View Deliverables"}
                      </span>
                      <div className="p-2 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-700">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Details Body */}
                  {isExpanded && (
                    <div className="p-6 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border-t border-white/10 light:border-black/10 space-y-5 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                        {/* You Provide */}
                        <div className="bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 p-4 rounded-2xl border border-amber-500/20 shadow-sm">
                          <span className="text-amber-400 font-bold block mb-1.5">What You Provide:</span>
                          <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans leading-relaxed">{step.clientProvides}</span>
                        </div>

                        {/* Dev Does */}
                        <div className="bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 p-4 rounded-2xl border border-cyan-500/20 shadow-sm">
                          <span className="text-cyan-400 font-bold block mb-1.5">What Dev Engineers:</span>
                          <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans leading-relaxed">{step.devDoes}</span>
                        </div>

                        {/* You Receive */}
                        <div className="bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 p-4 rounded-2xl border border-emerald-500/20 shadow-sm">
                          <span className="text-emerald-400 font-bold block mb-1.5">What You Receive:</span>
                          <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-sans leading-relaxed">{step.clientReceives}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/10 light:border-black/10">
                        <div className="text-xs font-mono text-slate-400 mb-2">Milestone Checklist:</div>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((d) => (
                            <span key={d} className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-800 border border-white/10 light:border-black/10 flex items-center gap-1.5">
                              <CheckCircle2 size={13} className="text-cyan-400" /> {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
