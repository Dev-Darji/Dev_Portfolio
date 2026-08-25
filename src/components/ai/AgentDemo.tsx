"use client";

import React, { useState } from "react";
import { Bot, Play, RotateCcw, CheckCircle2, Wrench, Terminal } from "lucide-react";

export function AgentDemo() {
  const [step, setStep] = useState(0);

  const runAgentFlow = () => {
    setStep(1);
    setTimeout(() => setStep(2), 800);
    setTimeout(() => setStep(3), 1600);
    setTimeout(() => setStep(4), 2400);
  };

  const handleReset = () => setStep(0);

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-teal-500/30 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <div className="text-xs font-mono text-teal-400">Autonomous Agent Loop Simulator</div>
          <h3 className="text-lg font-bold text-white">AI Agent & Tool Orchestration</h3>
        </div>

        <div className="flex items-center gap-2">
          {step === 0 ? (
            <button
              onClick={runAgentFlow}
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
            >
              <Play size={12} /> Run Agent Simulation
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

      {/* Steps */}
      <div className="space-y-3 font-mono text-xs">
        {/* Step 1: User Goal */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 1 ? "bg-teal-950/40 border-teal-500 text-teal-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">1. High-Level User Goal:</span>
            {step >= 1 && <CheckCircle2 size={14} className="text-teal-400" />}
          </div>
          <p className="text-slate-300 font-sans">“Find all pending invoice claims over ₹50,000 and email summary report to Finance Lead.”</p>
        </div>

        {/* Step 2: Agent Reasoning */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 2 ? "bg-teal-950/40 border-teal-500 text-teal-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">2. Agent Thought & Tool Selection:</span>
            {step >= 2 && <CheckCircle2 size={14} className="text-teal-400" />}
          </div>
          <p className="text-slate-300 font-sans">
            Thought: I need to query MongoDB for pending status & amount &gt; 50000, then call email Service API.
          </p>
        </div>

        {/* Step 3: Tool Execution */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 3 ? "bg-teal-950/40 border-teal-500 text-teal-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">3. Tool Invocation Result:</span>
            {step >= 3 && <Wrench size={14} className="text-amber-400" />}
          </div>
          <div className="text-[11px] text-slate-300 bg-slate-950 p-2 rounded border border-white/5 font-mono">
            db.invoices.find(&#123; status: "pending", amount: &#123; $gt: 50000 &#125; &#125;) ➔ Returned 3 Records (Total: ₹1,85,000)
          </div>
        </div>

        {/* Step 4: Final Action */}
        <div className={`p-3 rounded-xl border transition-all ${step >= 4 ? "bg-emerald-950/40 border-emerald-500 text-emerald-200" : "bg-slate-950 border-white/5 opacity-50"}`}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold">4. Action Execution & Verification:</span>
            {step >= 4 && <CheckCircle2 size={14} className="text-emerald-400" />}
          </div>
          <p className="text-slate-200 font-sans text-xs">
            ✓ Sent email notification with PDF summary attachment to finance@company.com via Twilio SendGrid API. Goal completed successfully.
          </p>
        </div>
      </div>
    </div>
  );
}
