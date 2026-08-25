"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "../motion/ScrollReveal";
import { Sparkles, Send, CheckCircle2, ShieldCheck, Mail, Phone, Lock, ArrowRight, Building, Check } from "lucide-react";
import confetti from "canvas-confetti";

export function ProjectPlannerForm() {
  const [projectTypes, setProjectTypes] = useState<string[]>(["Enterprise SaaS"]);
  const [budgetTier, setBudgetTier] = useState("");
  const [timeline, setTimeline] = useState("4 - 8 Weeks");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTypes = [
    "Enterprise SaaS",
    "Full-Stack Web App",
    "Microservices Backend & APIs",
    "Applied AI & RAG Pipeline",
    "HRMS / Enterprise Systems",
    "Cloud Architecture & SLA"
  ];

  const timelineOptions = [
    "Immediate (< 2 Weeks)",
    "2 - 4 Weeks",
    "4 - 8 Weeks",
    "2 - 3 Months",
    "Ongoing Retainer"
  ];

  const toggleType = (t: string) => {
    if (projectTypes.includes(t)) {
      setProjectTypes(projectTypes.filter((item) => item !== t));
    } else {
      setProjectTypes([...projectTypes, t]);
    }
  };

  const mailtoLink = `mailto:${siteConfig.email}?subject=Project Proposal Inquiry - ${encodeURIComponent(
    name || "Client"
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nScope: ${projectTypes.join(
      ", "
    )}\nBudget: ${budgetTier || "1 Lakh - 3 Lakh"}\nTimeline: ${timeline}\n\nProject Details:\n${details || "Interested in starting a project."}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#38bdf8", "#6366f1", "#10b981"],
      });
    } catch {
      // Confetti fallback
    }

    setIsSubmitted(true);

    // Automatically trigger pre-filled email in client's mail application
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/25">
            Engagement & Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Request a Consultation & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Custom Proposal.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tell us about your project requirements and target timeline. We will respond with an architectural blueprint & commercial proposal within 24 hours.
          </p>
        </ScrollReveal>

        {/* Planner Workspace */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.15}>
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-blue-500/30 bg-slate-900/90 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Scope Selection */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-400" />
                      <span>1. Select Required Engineering Scope:</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableTypes.map((type) => {
                        const isSelected = projectTypes.includes(type);
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => toggleType(type)}
                            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                              isSelected
                                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 scale-[1.02]"
                                : "bg-slate-950/70 text-slate-400 border border-white/10 hover:text-white"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">
                        2. Estimated Budget (INR):
                      </label>
                      <input
                        type="text"
                        placeholder="1 Lakh - 3 Lakh"
                        value={budgetTier}
                        onChange={(e) => setBudgetTier(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">
                        3. Target Delivery Timeline:
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Client Info Inputs */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      4. Your Contact Information:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Corporate Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Company / Organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <textarea
                      rows={3}
                      placeholder="Brief overview of project goals, features, or architecture requirements..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Submission and NDA Badge */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Lock size={13} className="text-blue-400" />
                      <span>Strict Mutual NDA Protected • Direct Mail Dispatch</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-600 text-white font-semibold text-xs shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.03]"
                    >
                      <Send size={14} />
                      <span>Submit Proposal Request</span>
                    </button>
                  </div>

                </form>
              ) : (
                /* Success View */
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Proposal Request Dispatched!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Your proposal inquiry has been generated and routed to <span className="text-blue-400 font-semibold">{siteConfig.email}</span>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href={mailtoLink}
                      className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                    >
                      <Mail size={14} />
                      <span>Send Direct via Mail Client</span>
                      <ArrowRight size={13} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Edit Form
                    </button>
                  </div>
                </div>
              )}

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
