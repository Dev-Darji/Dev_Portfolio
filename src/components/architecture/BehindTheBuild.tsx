"use client";

import React, { useState } from "react";
import { ScrollReveal } from "../motion/ScrollReveal";
import { Monitor, Network, Server, Database, Cloud, Globe, Play, CheckCircle2, AlertCircle, RotateCcw, ShieldCheck } from "lucide-react";

export function BehindTheBuild() {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);
  const [packetState, setPacketState] = useState<"idle" | "running" | "success" | "error">("idle");
  const [shouldFail, setShouldFail] = useState(false);

  const layers = [
    {
      name: "Frontend Layer",
      icon: <Monitor size={20} className="text-cyan-400" />,
      plainLanguage: "The user interface you see and click on your screen.",
      technical: "React.js / Next.js client components managing state, accessibility, micro-animations, and client-side payload validation.",
      techStack: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    },
    {
      name: "API & Route Layer",
      icon: <Network size={20} className="text-indigo-400" />,
      plainLanguage: "The secure messenger carrying information back and forth.",
      technical: "Next.js Server Actions & Express REST controllers checking CORS, JWT headers, payload schemas, and rate limits.",
      techStack: ["Express.js", "REST API", "Axios", "JSON Schema", "JWT Auth"],
    },
    {
      name: "Backend Services",
      icon: <Server size={20} className="text-violet-400" />,
      plainLanguage: "The business engine doing calculations and enforcing rules.",
      technical: "Node.js runtime handling domain business logic, financial ledger math, notification queues, and background jobs.",
      techStack: ["Node.js", "Express.js", "FastAPI", "Async Workflows"],
    },
    {
      name: "Database Layer",
      icon: <Database size={20} className="text-emerald-400" />,
      plainLanguage: "The organized memory vault storing business records.",
      technical: "MongoDB document store with indexed query collections, relational references, and ACID transaction support.",
      techStack: ["MongoDB", "MongoDB Atlas", "SQL", "Mongoose"],
    },
    {
      name: "External Integrations",
      icon: <Cloud size={20} className="text-amber-400" />,
      plainLanguage: "Third-party tools for emails, AI, payments, and SMS.",
      technical: "API gateways connecting OpenAI, Gemini, Twilio SendGrid, LiveKit, and payment webhooks.",
      techStack: ["OpenAI API", "Gemini API", "Twilio", "RAG Embeddings"],
    },
    {
      name: "Deployment & CDN",
      icon: <Globe size={20} className="text-sky-400" />,
      plainLanguage: "The global cloud network hosting the live application 24/7.",
      technical: "Vercel / Render cloud deployment with global edge CDN caching, SSL certificates, and CI/CD pipelines.",
      techStack: ["Vercel", "Render", "Git & GitHub", "Edge Network"],
    },
  ];

  const handleRunRequest = () => {
    setPacketState("running");
    setSelectedLayer(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < layers.length) {
        setSelectedLayer(step);
      } else {
        clearInterval(interval);
        setPacketState(shouldFail ? "error" : "success");
      }
    }, 550);
  };

  const handleReset = () => {
    setPacketState("idle");
    setSelectedLayer(0);
  };

  return (
    <section id="architecture" className="py-28 relative bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border-y border-white/5 light:border-black/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/25">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            What happens <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-sky-400">behind the interface?</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Interactive system architecture tracer. Run a simulated request packet to inspect data flow through each layer.
          </p>
        </ScrollReveal>

        {/* Request Packet Simulation Controls */}
        <ScrollReveal delay={0.2} className="flex flex-wrap items-center justify-between gap-4 glass-card p-5 rounded-3xl border border-white/10 light:border-black/10 shadow-xl">
          <div className="flex items-center gap-3">
            <button
              onClick={handleRunRequest}
              disabled={packetState === "running"}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              <Play size={14} /> {packetState === "running" ? "Tracing Packet..." : "Run Request Trace"}
            </button>

            <button
              onClick={handleReset}
              className="px-4 py-2.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-white/10 hover:border-cyan-500/30"
            >
              <RotateCcw size={14} /> Reset
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300 dark:text-slate-300 light:text-slate-700">
              <input
                type="checkbox"
                checked={shouldFail}
                onChange={(e) => setShouldFail(e.target.checked)}
                className="rounded border-slate-700 text-cyan-600 focus:ring-cyan-500 cursor-pointer"
              />
              <span>Simulate Network Failure State</span>
            </label>

            {packetState === "success" && (
              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 size={16} /> 200 OK — Packet Trace Complete
              </span>
            )}
            {packetState === "error" && (
              <span className="text-rose-400 dark:text-rose-400 light:text-rose-600 font-bold flex items-center gap-1">
                <AlertCircle size={16} /> 500 Error — Handled Gracefully
              </span>
            )}
          </div>
        </ScrollReveal>

        {/* 6 Layer Pipeline Nodes */}
        <ScrollReveal delay={0.25} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {layers.map((layer, idx) => {
            const isActive = selectedLayer === idx;
            return (
              <button
                key={layer.name}
                onClick={() => setSelectedLayer(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-cyan-950/60 dark:bg-cyan-950/60 light:bg-cyan-50 border-cyan-500 shadow-xl shadow-cyan-500/20 scale-[1.03]"
                    : "bg-slate-900/70 dark:bg-slate-900/70 light:bg-white border-white/10 light:border-black/10 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-slate-500 font-bold">0{idx + 1}</span>
                  {layer.icon}
                </div>
                <div className="text-xs font-bold text-white dark:text-white light:text-slate-900 mb-1">{layer.name}</div>
                {isActive && (
                  <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                    <span className="animate-pulse">●</span> Active Layer
                  </div>
                )}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Selected Layer Plain & Technical Explanation Panel */}
        <ScrollReveal delay={0.3} className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
              <span>Layer 0{selectedLayer + 1}</span>
              <span>•</span>
              <span>{layers[selectedLayer].name}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
              {layers[selectedLayer].plainLanguage}
            </h3>

            <div className="p-4 rounded-2xl bg-slate-950 dark:bg-slate-950 light:bg-slate-100 border border-white/10 light:border-black/10 text-xs text-slate-300 dark:text-slate-300 light:text-slate-800 leading-relaxed font-mono">
              <span className="text-cyan-400 font-bold block mb-1.5">Technical Architecture:</span>
              {layers[selectedLayer].technical}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 dark:bg-slate-950 light:bg-slate-100 p-6 rounded-2xl border border-white/10 light:border-black/10 space-y-3">
            <div className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">Layer Technologies:</div>
            <div className="flex flex-wrap gap-2">
              {layers[selectedLayer].techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white text-xs font-mono text-cyan-300 dark:text-cyan-300 light:text-cyan-700 border border-white/10 light:border-black/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}
