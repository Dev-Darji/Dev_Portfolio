"use client";

import React, { useState } from "react";
import { technologiesData, TechItem } from "@/data/technologies";
import { ScrollReveal } from "../motion/ScrollReveal";
import { TiltCard } from "../motion/TiltCard";
import { TechLogo } from "../icons/TechLogos";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Play, ArrowRight, TrendingUp, Zap } from "lucide-react";

export function TechEcosystem() {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Mini interactive demo states
  const [saasRevenue, setSaasRevenue] = useState(148500);
  const [apiStep, setApiStep] = useState(0);

  const runApiTrace = () => {
    setApiStep(1);
    setTimeout(() => setApiStep(2), 500);
    setTimeout(() => setApiStep(3), 1000);
    setTimeout(() => setApiStep(4), 1500);
  };

  const categories = ["All", "Frontend", "Backend", "Databases", "AI Stack", "Deployment"];

  const getCount = (cat: string) => {
    if (cat === "All") return technologiesData.length;
    if (cat === "Frontend") return technologiesData.filter((t) => t.category === "Frontend").length;
    if (cat === "Backend") return technologiesData.filter((t) => t.category === "Backend" || t.category === "API & Protocols").length;
    if (cat === "Databases") return technologiesData.filter((t) => t.category === "Databases").length;
    if (cat === "AI Stack") return technologiesData.filter((t) => t.category === "AI Stack").length;
    if (cat === "Deployment") return technologiesData.filter((t) => t.category === "Deployment" || t.category === "Tools").length;
    return 0;
  };

  const filteredTech = technologiesData.filter((tech) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Frontend") return tech.category === "Frontend";
    if (selectedCategory === "Backend") return tech.category === "Backend" || tech.category === "API & Protocols";
    if (selectedCategory === "Databases") return tech.category === "Databases";
    if (selectedCategory === "AI Stack") return tech.category === "AI Stack";
    if (selectedCategory === "Deployment") return tech.category === "Deployment" || tech.category === "Tools";
    return tech.category === selectedCategory;
  });

  return (
    <section id="matrix" className="py-24 relative bg-transparent border-y border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/25">
            Full-Stack Engineering Matrix
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Tech Matrix & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">Verified Proof.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No hypothetical skill bars. Click any technology to inspect verified architectural implementations and live code scopes.
          </p>
        </ScrollReveal>

        {/* Live Interactive Capability Banners */}
        <ScrollReveal delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Interactive ARR Calculator widget */}
          <div className="glass-card rounded-2xl p-5 border border-cyan-500/30 bg-slate-900/90 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
                <TrendingUp size={15} /> SaaS Revenue Engine
              </div>
              <button
                onClick={() => setSaasRevenue((prev) => prev + 12500)}
                className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-sans text-xs transition-colors shadow-sm cursor-pointer active:scale-95"
              >
                + Add Subscription
              </button>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold text-emerald-400 font-mono">
                ₹{saasRevenue.toLocaleString("en-IN")}
              </div>
              <span className="text-[11px] font-mono text-slate-400">Monthly ARR Stream</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full transition-all duration-300"
                style={{ width: `${Math.min(100, (saasRevenue / 200000) * 100)}%` }}
              />
            </div>
          </div>

          {/* Interactive API Route Trace widget */}
          <div className="glass-card rounded-2xl p-5 border border-indigo-500/30 bg-slate-900/90 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 font-bold">
                <Zap size={15} /> REST Controller Pipeline
              </div>
              <button
                onClick={runApiTrace}
                className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs transition-colors shadow-sm cursor-pointer active:scale-95"
              >
                <Play size={11} /> Test Route
              </button>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1">
              <span className={apiStep >= 1 ? "text-amber-400 font-bold" : "opacity-40"}>POST /api</span>
              <ArrowRight size={12} className="text-slate-500" />
              <span className={apiStep >= 2 ? "text-indigo-400 font-bold" : "opacity-40"}>JWT Auth</span>
              <ArrowRight size={12} className="text-slate-500" />
              <span className={apiStep >= 3 ? "text-cyan-400 font-bold" : "opacity-40"}>MongoDB</span>
              <ArrowRight size={12} className="text-slate-500" />
              <span className={apiStep >= 4 ? "text-emerald-400 font-bold" : "opacity-40"}>200 OK</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-3 flex items-center justify-between">
              <span>Verified API Latency</span>
              <span className="text-emerald-400 font-semibold">~42ms Edge Response</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filters with Item Counts */}
        <ScrollReveal delay={0.15} className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const count = getCount(cat);
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 scale-[1.03]"
                    : "bg-slate-900/90 text-slate-400 border border-white/10 hover:text-slate-200 hover:border-white/20"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Unified Equal Height & Width Grid with Brand SVG Logos */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech?.id === tech.id;
              return (
                <motion.div
                  key={tech.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <button
                      onClick={() => setSelectedTech(isSelected ? null : tech)}
                      className={`w-full h-full min-h-[148px] glass-card rounded-2xl p-4 sm:p-5 text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer group ${
                        isSelected
                          ? "border-cyan-500 bg-cyan-950/50 shadow-xl shadow-cyan-500/20 scale-[1.02]"
                          : "hover:border-cyan-500/40"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                            <TechLogo name={tech.id} className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-400 border border-white/5">
                            {tech.category}
                          </span>
                        </div>

                        <div className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors truncate">
                          {tech.name}
                        </div>
                      </div>

                      <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {tech.description}
                      </div>
                    </button>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Selected Technology Proof Box */}
        {selectedTech && (
          <ScrollReveal className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/40 bg-slate-900/95 shadow-2xl animate-in fade-in duration-300 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-950 border border-white/10">
                  <TechLogo name={selectedTech.id} className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{selectedTech.category}</span>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {selectedTech.name}
                    <CheckCircle2 size={18} className="text-emerald-400" />
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedTech(null)}
                className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer w-fit shadow-sm"
              >
                <X size={14} /> Close Inspector
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1.5">Verified Implementation Scope:</div>
                <p className="text-xs text-slate-200 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-white/10">
                  {selectedTech.verifiedScope}
                </p>
              </div>

              {selectedTech.relatedProjects.length > 0 && (
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">Linked Project Work:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTech.relatedProjects.map((pId) => (
                      <a
                        key={pId}
                        href="#work"
                        className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/20 transition-colors"
                      >
                        • {pId.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
