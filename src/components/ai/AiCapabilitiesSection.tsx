"use client";

import React, { useState } from "react";
import { RagDemo } from "./RagDemo";
import { AgentDemo } from "./AgentDemo";
import { Sparkles, Bot, Database, Cpu, ArrowRight, Zap } from "lucide-react";
import { ScrollReveal } from "../motion/ScrollReveal";

export function AiCapabilitiesSection() {
  const [activePipelineStep, setActivePipelineStep] = useState(2);

  const aiTags = [
    "AI APIs & LLMs", "Prompt Engineering", "RAG Systems", "Vector Databases",
    "AI Agents", "MCP Protocol", "LangChain", "OpenAI & Anthropic", "Gemini", "LiveKit Voice"
  ];

  const pipelineSteps = [
    { label: "1. Prompt", detail: "Natural intent or audio" },
    { label: "2. App Layer", detail: "Auth & Memory" },
    { label: "3. LLM Reasoning", detail: "Claude / GPT / Gemini" },
    { label: "4. RAG Vector", detail: "Pinecone / Chroma search" },
    { label: "5. Tool APIs", detail: "MongoDB & MCP actions" },
    { label: "6. Cited Output", detail: "Verified factual response" },
  ];

  return (
    <section id="ai" className="py-24 relative bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase bg-violet-500/10 px-3.5 py-1.5 rounded-full border border-violet-500/25">
            Applied Intelligence Labs
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            AI Labs // <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">Next-Gen Applications.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Practical AI integration: enhancing SaaS workflows with LLMs, contextual knowledge vectors, and autonomous tool agents.
          </p>
        </ScrollReveal>

        {/* Neural Pipeline Quick Trace */}
        <ScrollReveal delay={0.15} className="glass-card rounded-2xl p-5 border border-violet-500/30 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white max-w-5xl mx-auto shadow-xl">
          <div className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-4 text-center flex items-center justify-center gap-2">
            <Zap size={14} className="text-violet-400" /> Applied AI Architecture Flow
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs font-mono">
            {pipelineSteps.map((step, idx) => (
              <button
                key={step.label}
                onClick={() => setActivePipelineStep(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                  activePipelineStep === idx
                    ? "bg-violet-950/70 border-violet-500 text-violet-200 shadow-md shadow-violet-500/20 scale-[1.02]"
                    : "bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border-white/10 light:border-black/10 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-violet-500/30"
                }`}
              >
                <div className="font-bold text-xs mb-0.5 text-violet-300 dark:text-violet-300 light:text-violet-700 truncate">
                  {step.label}
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 truncate">
                  {step.detail}
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Interactive Demos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ScrollReveal delay={0.2} direction="left">
            <RagDemo />
          </ScrollReveal>
          <ScrollReveal delay={0.25} direction="right">
            <AgentDemo />
          </ScrollReveal>
        </div>

        {/* AI Stack Badges */}
        <ScrollReveal delay={0.3} className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pt-2">
          {aiTags.map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/10 light:border-black/10 hover:border-violet-500/40 transition-colors"
            >
              • {tag}
            </span>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
