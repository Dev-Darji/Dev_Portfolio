"use client";

import React, { useState } from "react";
import { capabilitiesData } from "@/data/capabilities";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../motion/ScrollReveal";
import { TiltCard } from "../motion/TiltCard";
import {
  LayoutDashboard,
  Layers,
  Globe,
  LineChart,
  Server,
  Zap,
  Sparkles,
  Database,
  Bot,
  Play,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={22} className="text-cyan-400" />,
  Layers: <Layers size={22} className="text-indigo-400" />,
  Globe: <Globe size={22} className="text-emerald-400" />,
  LineChart: <LineChart size={22} className="text-violet-400" />,
  Server: <Server size={22} className="text-amber-400" />,
  Zap: <Zap size={22} className="text-yellow-400" />,
  Sparkles: <Sparkles size={22} className="text-pink-400" />,
  Database: <Database size={22} className="text-sky-400" />,
  Bot: <Bot size={22} className="text-teal-400" />,
};

export function CapabilitiesBento() {
  const [saasRevenue, setSaasRevenue] = useState(148500);
  const [apiStep, setApiStep] = useState(0);
  const [agentStep, setAgentStep] = useState(0);

  const runApiTrace = () => {
    setApiStep(1);
    setTimeout(() => setApiStep(2), 500);
    setTimeout(() => setApiStep(3), 1000);
    setTimeout(() => setApiStep(4), 1500);
  };

  const runAgentTrace = () => {
    setAgentStep(1);
    setTimeout(() => setAgentStep(2), 600);
    setTimeout(() => setAgentStep(3), 1200);
  };

  return (
    <section id="capabilities" className="py-28 relative bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border-y border-white/5 light:border-black/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Diagonal Reveal */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/25">
            Core Engineering Scope
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            More than websites. I build <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400">digital products.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Interactive modular architecture designed for security, scalability, and measurable business impact.
          </p>
        </ScrollReveal>

        {/* Bento Canvas Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesData.map((cap) => (
            <StaggerItem key={cap.id} direction="up">
              <TiltCard className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full relative group hover:border-cyan-500/40">
                
                {/* Header Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-white/10 light:border-black/10 group-hover:border-cyan-500/30 transition-colors">
                      {iconMap[cap.iconName] || <Zap size={22} className="text-cyan-400" />}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-cyan-300 dark:text-cyan-300 light:text-cyan-800 border border-cyan-500/20">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cap.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/5 light:border-black/5">
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Embedded Interactive Mini Demos */}
                <div className="mt-2 pt-4 border-t border-white/10 light:border-black/10">
                  {cap.id === "saas-apps" && (
                    <div className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-white rounded-xl p-3.5 border border-white/10 light:border-black/10 text-xs font-mono">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">ARR Growth Simulator:</span>
                        <button
                          onClick={() => setSaasRevenue((prev) => prev + 12500)}
                          className="px-2.5 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-sans text-[11px] transition-colors shadow-sm cursor-pointer"
                        >
                          + Add Sub
                        </button>
                      </div>
                      <div className="text-lg font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                        ₹{saasRevenue.toLocaleString("en-IN")}
                      </div>
                      <div className="w-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-emerald-400 h-full transition-all duration-300" style={{ width: `${Math.min(100, (saasRevenue / 200000) * 100)}%` }} />
                      </div>
                    </div>
                  )}

                  {cap.id === "rest-apis" && (
                    <div className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-white rounded-xl p-3.5 border border-white/10 light:border-black/10 text-xs font-mono">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">API Pipeline Trace:</span>
                        <button
                          onClick={runApiTrace}
                          className="flex items-center gap-1 px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-500 text-white font-sans text-[11px] cursor-pointer"
                        >
                          <Play size={10} /> Test Route
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <span className={apiStep >= 1 ? "text-amber-400 font-bold" : "opacity-40"}>POST</span>
                        <ArrowRight size={10} className="text-slate-500" />
                        <span className={apiStep >= 2 ? "text-indigo-400 font-bold" : "opacity-40"}>Auth</span>
                        <ArrowRight size={10} className="text-slate-500" />
                        <span className={apiStep >= 3 ? "text-cyan-400 font-bold" : "opacity-40"}>Mongo</span>
                        <ArrowRight size={10} className="text-slate-500" />
                        <span className={apiStep >= 4 ? "text-emerald-400 font-bold" : "opacity-40"}>200 OK</span>
                      </div>
                    </div>
                  )}

                  {cap.id === "ai-agents" && (
                    <div className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-white rounded-xl p-3.5 border border-white/10 light:border-black/10 text-xs font-mono">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">Agent Reasoning Step:</span>
                        <button
                          onClick={runAgentTrace}
                          className="flex items-center gap-1 px-2.5 py-1 rounded bg-teal-600 hover:bg-teal-500 text-white font-sans text-[11px] cursor-pointer"
                        >
                          <Play size={10} /> Execute Goal
                        </button>
                      </div>
                      <div className="space-y-1 text-[11px]">
                        <div className={agentStep >= 1 ? "text-teal-400 font-semibold" : "opacity-40"}>1. Goal: Summarize Invoices</div>
                        <div className={agentStep >= 2 ? "text-cyan-400 font-semibold" : "opacity-40"}>2. Tool: db.inquiryQuery()</div>
                        <div className={agentStep >= 3 ? "text-emerald-400 font-bold" : "opacity-40"}>3. 24 Processed ✓</div>
                      </div>
                    </div>
                  )}

                  {cap.id !== "saas-apps" && cap.id !== "rest-apis" && cap.id !== "ai-agents" && (
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-center justify-between font-mono bg-slate-950/50 p-2.5 rounded-lg border border-white/5">
                      <span className="flex items-center gap-1"><ShieldCheck size={13} className="text-cyan-400" /> Benefit:</span>
                      <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">{cap.businessBenefit}</span>
                    </div>
                  )}
                </div>

              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
