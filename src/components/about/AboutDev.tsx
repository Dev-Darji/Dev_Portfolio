"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { experienceData } from "@/data/experience";
import { ScrollReveal } from "../motion/ScrollReveal";
import { MapPin, Mail, Phone, CheckCircle2, Briefcase, Calendar, ShieldCheck, Sparkles, Building2, Users, Code2, Lock } from "lucide-react";

export function AboutDev() {
  const [activeTab, setActiveTab] = useState<"firm" | "partners" | "track-record">("firm");
  const exp = experienceData[0];

  return (
    <section id="about" className="py-24 relative bg-transparent border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/25">
            Enterprise Leadership & Profile
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            About D&D Solutions & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Leadership.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Meet the founding partners, engineering standards, and enterprise delivery guarantees.
          </p>
        </ScrollReveal>

        {/* Tab Selector */}
        <ScrollReveal delay={0.1} className="flex justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab("firm")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "firm"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building2 size={13} /> Firm Overview
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "partners"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users size={13} /> Founding Partners (2)
            </button>
            <button
              onClick={() => setActiveTab("track-record")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "track-record"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Briefcase size={13} /> Track Record
            </button>
          </div>
        </ScrollReveal>

        {/* Main Content Card */}
        <ScrollReveal delay={0.2} className="glass-card rounded-3xl p-6 sm:p-10 border border-blue-500/30 bg-slate-900/95 shadow-2xl max-w-5xl mx-auto">
          
          {/* Tab 1: Firm Overview */}
          {activeTab === "firm" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              {/* Monogram Brand Badge */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-1 shadow-2xl shadow-blue-600/25 mb-4 flex items-center justify-center group hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                      D&D
                    </div>
                    <div className="text-[10px] font-mono text-blue-400/90 mt-1 uppercase tracking-widest">
                      Solutions
                    </div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1 font-mono text-xs text-slate-400">
                  <div className="text-white font-bold text-base font-sans">{siteConfig.name}</div>
                  <div>Dev Darji & Deep Gadhiya</div>
                  <div className="text-blue-400 flex items-center justify-center gap-1 font-semibold pt-0.5">
                    <MapPin size={12} /> {siteConfig.location}
                  </div>
                </div>
              </div>

              {/* Bio & Guarantees */}
              <div className="lg:col-span-8 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Architecting digital products with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">enterprise-grade reliability.</span>
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {siteConfig.positioning.intro}
                </p>

                {/* 4 Core Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  {siteConfig.guarantees.map((g) => (
                    <div key={g.title} className="bg-slate-950/80 p-3 rounded-xl border border-white/5 space-y-1">
                      <div className="flex items-center gap-2 text-blue-400 font-bold">
                        <CheckCircle2 size={14} className="shrink-0" />
                        <span>{g.title}</span>
                      </div>
                      <p className="text-[11px] font-sans text-slate-400 leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Direct Touchpoint Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-blue-500 hover:text-blue-300 transition-colors shadow-sm"
                  >
                    <Mail size={13} className="text-blue-400" />
                    <span>{siteConfig.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-emerald-500 hover:text-emerald-300 transition-colors shadow-sm"
                  >
                    <Phone size={13} className="text-emerald-400" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.secondaryPhone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-emerald-500 hover:text-emerald-300 transition-colors shadow-sm"
                  >
                    <Phone size={13} className="text-emerald-400" />
                    <span>{siteConfig.secondaryPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Founding Partners (2) */}
          {activeTab === "partners" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-2xl mx-auto space-y-2 mb-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Founding Leadership & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Technical Partners</span>
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  D&D Solutions is led by Co-Founders Dev Darji and Deep Gadhiya.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Partner 1: Dev Darji */}
                <div className="glass-card rounded-2xl p-6 border border-white/10 bg-slate-950/80 space-y-4 hover:border-blue-500/50 transition-all shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-extrabold text-xl text-white shadow-lg shadow-blue-600/30">
                      DD
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Dev Darji</h4>
                      <div className="text-xs font-mono text-blue-400 font-medium">Co-Founder & Lead Software Architect</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Leads full-stack web architectures, scalable SaaS engines, cloud databases, and REST microservices pipelines.
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-2 text-xs font-mono">
                    <a
                      href={`tel:+919104635945`}
                      className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <Phone size={13} className="text-emerald-400" />
                      <span>+91 9104635945</span>
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Mail size={13} className="text-blue-400" />
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </div>

                {/* Partner 2: Deep Gadhiya */}
                <div className="glass-card rounded-2xl p-6 border border-white/10 bg-slate-950/80 space-y-4 hover:border-blue-500/50 transition-all shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-600 flex items-center justify-center font-mono font-extrabold text-xl text-white shadow-lg shadow-indigo-600/30">
                      DG
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Deep Gadhiya</h4>
                      <div className="text-xs font-mono text-sky-400 font-medium">Co-Founder & Engineering Partner</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Specializes in modern frontend engineering, applied AI workflows, product design systems, and client delivery management.
                  </p>

                  <div className="pt-2 border-t border-white/10 space-y-2 text-xs font-mono">
                    <a
                      href={`tel:+916353935950`}
                      className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      <Phone size={13} className="text-emerald-400" />
                      <span>+91 6353935950</span>
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Mail size={13} className="text-blue-400" />
                      <span>{siteConfig.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/25 hover:scale-[1.02] transition-transform"
                >
                  <Sparkles size={13} />
                  <span>Connect with Founding Team</span>
                </a>
              </div>
            </div>
          )}

          {/* Tab 3: Experience Timeline */}
          {activeTab === "track-record" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                      <Briefcase size={12} /> {exp.company}
                    </span>
                    <span className="text-xs font-mono text-slate-400">• Enterprise Engineering Deployment</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                </div>

                <div className="text-right space-y-1 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 sm:justify-end text-blue-400 font-semibold">
                    <Calendar size={13} /> {exp.duration}
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin size={13} /> {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-2.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Enterprise Architecture Contributions:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 font-mono">
                  {exp.responsibilities.map((resp) => (
                    <div key={resp} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-white/5">
                      <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                      <span className="font-sans">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {exp.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="text-[11px] font-mono text-slate-400 italic bg-slate-950/60 p-3 rounded-xl border border-white/5 flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-400 shrink-0" />
                <span>{exp.contextNote}</span>
              </div>
            </div>
          )}

        </ScrollReveal>

      </div>
    </section>
  );
}
