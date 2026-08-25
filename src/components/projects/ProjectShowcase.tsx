"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import { ScrollReveal } from "../motion/ScrollReveal";
import { CaseStudyModal } from "./CaseStudyModal";
import { VittaInteractiveDemo } from "./VittaInteractiveDemo";
import { Layers, ArrowUpRight, Sparkles, ExternalLink, Globe, CheckCircle2, Image as ImageIcon, Laptop } from "lucide-react";

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: string]: number }>({
    vitta: 0,
    "elicit-interior": 0,
    "elegant-design-studio": 0,
    "shiv-car-rentals": 0,
  });
  const [showVittaSimulator, setShowVittaSimulator] = useState(false);

  const toggleImage = (projectId: string, index: number) => {
    setActiveImageIndex((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section id="work" className="py-24 relative bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="right" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/25">
            Proven Client Deployments
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            Client Solutions & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Production Case Studies.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Real production software engineered for high performance, custom CMS control, and seamless user experiences.
          </p>
        </ScrollReveal>

        {/* Project Showcase List */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => {
            const currentImgIdx = activeImageIndex[project.id] || 0;
            const currentImgSrc = project.images[currentImgIdx] || project.images[0];

            return (
              <ScrollReveal key={project.id} delay={0.1 * idx} direction="up">
                <div
                  className={`glass-card rounded-3xl p-6 sm:p-9 border border-white/10 light:border-black/10 relative overflow-hidden bg-gradient-to-br ${project.artDirection.bgGradient} hover:border-blue-500/40 transition-all shadow-2xl`}
                >
                  {/* Flagship Tag */}
                  {project.isFlagship && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 dark:text-blue-300 light:text-blue-800 text-xs font-mono mb-4 backdrop-blur-sm shadow-md">
                      <Sparkles size={12} className="text-blue-400" />
                      <span>Flagship Client Architecture</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Info Panel */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-blue-300 dark:text-blue-300 light:text-blue-800 border border-blue-500/20 whitespace-nowrap shrink-0">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 whitespace-nowrap">• {project.industry}</span>
                      </div>

                      <h3 className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm font-mono text-blue-300 dark:text-blue-300 light:text-blue-600 font-medium">
                        {project.tagline}
                      </p>

                      <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/10 light:border-black/10">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons: Visit Live Site + Case Study */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 hover:scale-[1.02] group"
                        >
                          <Globe size={13} className="text-sky-300 animate-spin [animation-duration:6s]" />
                          <span>Visit Live Platform</span>
                          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white hover:bg-slate-800 text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs font-semibold border border-white/15 hover:border-blue-500/50 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                        >
                          <Layers size={14} className="text-blue-400" />
                          <span>Case Study</span>
                        </button>

                        {project.id === "vitta" && (
                          <button
                            onClick={() => setShowVittaSimulator(!showVittaSimulator)}
                            className="px-3.5 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-sky-400 text-xs font-mono border border-sky-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <Laptop size={13} />
                            <span>{showVittaSimulator ? "Show Screenshots" : "Test Live Ledger"}</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Visual Screenshot Showcase / Device Mockup */}
                    <div className="lg:col-span-7 w-full space-y-3">
                      {project.id === "vitta" && showVittaSimulator ? (
                        <VittaInteractiveDemo />
                      ) : (
                        <div className="glass-card rounded-2xl p-3 sm:p-4 border border-white/15 bg-slate-950/90 shadow-2xl space-y-3">
                          {/* Browser Window Header */}
                          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 px-2">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            </div>

                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 max-w-sm mx-3 bg-slate-900/90 hover:bg-slate-800 rounded-lg px-3 py-1.5 text-[11px] font-mono text-slate-400 hover:text-blue-300 flex items-center gap-2 truncate border border-white/10 hover:border-blue-500/50 transition-all group/link cursor-pointer shadow-sm"
                              title="Click to open live website"
                            >
                              <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                              </span>
                              <Globe size={12} className="text-blue-400 shrink-0 animate-spin [animation-duration:8s] group-hover/link:text-sky-300" />
                              <span className="truncate group-hover/link:underline">{project.liveUrl}</span>
                              <ArrowUpRight size={11} className="text-slate-500 group-hover/link:text-blue-400 shrink-0 ml-auto group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>

                            {/* Screenshot 1 vs 2 Tabs */}
                            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/10 text-[10px] font-mono">
                              {project.images.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => toggleImage(project.id, i)}
                                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                                    currentImgIdx === i
                                      ? "bg-blue-600 text-white font-bold"
                                      : "text-slate-400 hover:text-white"
                                  }`}
                                >
                                  View {i + 1}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Screenshot Image View */}
                          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/5 group">
                            <Image
                              src={currentImgSrc}
                              alt={`${project.title} Screenshot ${currentImgIdx + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 600px"
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            
                            {/* Live Badge Overlay */}
                            <div className="absolute bottom-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-lg">
                              <CheckCircle2 size={11} />
                              <span>Live Production Build</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Case Study Deep-Dive Modal Overlay */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
