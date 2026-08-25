"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { ScrollReveal } from "../motion/ScrollReveal";
import { Calendar, MapPin, CheckCircle2, ShieldCheck, Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-28 relative bg-slate-950 dark:bg-slate-950 light:bg-slate-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-violet-400 uppercase bg-violet-500/10 px-3.5 py-1.5 rounded-full border border-violet-500/25">
            Confirmed Industry Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mt-4 mb-4">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-indigo-400">Engineering Experience.</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Production experience contributing to complex enterprise software environments.
          </p>
        </ScrollReveal>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <ScrollReveal key={exp.id} delay={0.15 * idx} direction="up">
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-violet-500/30 relative overflow-hidden bg-gradient-to-br from-violet-950/20 to-slate-900/90 dark:from-violet-950/20 dark:to-slate-900/90 light:from-violet-50 light:to-white shadow-2xl hover:border-violet-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 light:border-black/10 pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 dark:text-violet-300 light:text-violet-800 border border-violet-500/30 flex items-center gap-1.5">
                        <Briefcase size={12} /> {exp.company}
                      </span>
                      <span className="text-xs font-mono text-slate-400">• {exp.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">{exp.role}</h3>
                  </div>

                  <div className="text-right space-y-1 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 sm:justify-end text-violet-400 font-semibold">
                      <Calendar size={14} /> {exp.duration}
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                  {exp.summary}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Key Engineering Contributions:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {exp.responsibilities.map((resp) => (
                      <div key={resp} className="flex items-start gap-2 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 p-3 rounded-xl border border-white/5 light:border-black/5">
                        <CheckCircle2 size={14} className="text-violet-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 light:border-black/10">
                  {exp.technologies.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 dark:bg-slate-950 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/10 light:border-black/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-[11px] font-mono text-slate-400 italic bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 p-3.5 rounded-xl border border-white/5 light:border-black/5 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-violet-400 shrink-0" />
                  <span>{exp.contextNote}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
