"use client";

import React, { useState } from "react";
import { Search, Database, Sparkles, CheckCircle2, Play, RotateCcw } from "lucide-react";

export function RagDemo() {
  const [step, setStep] = useState(0);

  const runRagFlow = () => {
    setStep(1);
    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1400);
    setTimeout(() => setStep(4), 2100);
  };

  const handleReset = () => setStep(0);

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-cyan-500/30 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="text-xs font-mono text-cyan-400">RAG Context Search Simulator</div>
          <h3 className="text-lg font-bold text-white">Retrieval-Augmented Generation</h3>
        </div>

        <div className="flex items-center gap-2">
          {step === 0 ? (
            <button
              onClick={runRagFlow}
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <Play size={12} /> Run RAG Simulation
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1"
            >
              <RotateCcw size={12} /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Pipeline Steps */}
      <div className="space-y-3 font-mono text-xs">
        {/* Step 1: User Query */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 1 ? "bg-cyan-950/40 border-cyan-500 text-cyan-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">1. User Query:</span>
            {step >= 1 && <CheckCircle2 size={14} className="text-cyan-400" />}
          </div>
          <p className="text-slate-300 font-sans">“What is our company annual leave policy?”</p>
        </div>

        {/* Step 2: Vector Search */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 2 ? "bg-cyan-950/40 border-cyan-500 text-cyan-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">2. Vector Index Retrieval:</span>
            {step >= 2 && <CheckCircle2 size={14} className="text-cyan-400" />}
          </div>
          <p className="text-slate-300 font-sans">Embedding query ➔ Searching Pinecone vector index ➔ Match score: 0.94</p>
        </div>

        {/* Step 3: Knowledge Snippet */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 3 ? "bg-cyan-950/40 border-cyan-500 text-cyan-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">3. Retrieved Knowledge Snippet:</span>
            {step >= 3 && <CheckCircle2 size={14} className="text-cyan-400" />}
          </div>
          <div className="text-[11px] text-slate-400 bg-slate-950 p-2 rounded border border-white/5">
            [Doc #HR-2024-LEAVE]: "Employees receive 18 paid annual leaves plus 10 public holidays per year. Unused leave rolls over up to 5 days."
          </div>
        </div>

        {/* Step 4: Cited Synthesis */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 4 ? "bg-emerald-950/40 border-emerald-500 text-emerald-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">4. Factual AI Response (Cited):</span>
            {step >= 4 && <Sparkles size={14} className="text-emerald-400" />}
          </div>
          <p className="text-slate-200 font-sans text-xs leading-relaxed">
            “Based on [Doc #HR-2024-LEAVE], full-time team members are entitled to 18 paid annual leaves alongside 10 public holidays annually. A maximum of 5 unused days may roll over to the subsequent calendar year.”
          </p>
        </div>
      </div>
    </div>
  );
}
