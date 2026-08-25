"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, Code2, Layers, Cpu, Database, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "product" | "architecture" | "tech">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-card w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col border border-white/20 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/90">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">• {project.industry}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-slate-950/90 px-6 gap-2 text-xs font-mono">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "overview" ? "border-blue-500 text-white font-bold" : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("product")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "product" ? "border-blue-500 text-white font-bold" : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Product Thinking
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "architecture" ? "border-blue-500 text-white font-bold" : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveTab("tech")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "tech" ? "border-blue-500 text-white font-bold" : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Technologies
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 flex-1">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest mb-2">Project Summary</h3>
                <p className="text-base leading-relaxed text-slate-300">{project.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/10">
                  <h4 className="text-xs font-mono text-red-400 uppercase mb-2">Problem Context</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.problem || "Information pending verification."}</p>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/10">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase mb-2">Solution Delivered</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{project.solution || "Information pending verification."}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-3">D&D Solutions Engineering Scope</h3>
                <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                  {project.devContribution}
                </div>
              </div>
            </div>
          )}

          {activeTab === "product" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono text-purple-400 uppercase tracking-widest mb-2">UX & Product Thinking</h3>
                <p className="text-sm leading-relaxed text-slate-300">{project.thinking || "Product design strategy."}</p>
              </div>

              <div>
                <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-3">Key Workflows Supported</h3>
                <div className="space-y-2">
                  {project.keyWorkflows.map((wf) => (
                    <div key={wf} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-white/5 text-xs">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                      <span>{wf}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <span className="text-blue-400 font-bold block mb-1">Frontend Layer:</span>
                <span className="text-slate-300 font-sans">{project.architecture.frontend}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <span className="text-indigo-400 font-bold block mb-1">API Protocol Layer:</span>
                <span className="text-slate-300 font-sans">{project.architecture.apiLayer}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <span className="text-purple-400 font-bold block mb-1">Backend Runtime:</span>
                <span className="text-slate-300 font-sans">{project.architecture.backend}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <span className="text-emerald-400 font-bold block mb-1">Database Layer:</span>
                <span className="text-slate-300 font-sans">{project.architecture.database}</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <span className="text-amber-400 font-bold block mb-1">Deployment Infrastructure:</span>
                <span className="text-slate-300 font-sans">{project.architecture.deployment}</span>
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-widest">Technologies & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-mono text-blue-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-slate-950/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
