"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ArrowRight, ShieldCheck, Sparkles, Code2, CheckCircle2, Cpu, Zap } from "lucide-react";

export function HeroSection() {
  const phrases = [
    "Enterprise SaaS Platforms.",
    "Full-Stack Web Applications.",
    "Scalable Microservice APIs.",
    "Applied AI & RAG Workflows.",
    "Custom Supabase CMS Systems.",
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentFullPhrase = phrases[phraseIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setDisplayText(currentFullPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === currentFullPhrase) {
          // Pause when full phrase is typed
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Deleting characters
        setDisplayText(currentFullPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIdx, phrases, typingSpeed]);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 sm:pt-32 pb-12 overflow-hidden bg-transparent">
      {/* Ambient Corporate Sapphire Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[340px] sm:h-[680px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-4 sm:right-12 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none"
      />

      {/* Hero Content Layer - Perfectly Centered & Responsive */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-6 sm:mt-10">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-mono text-slate-200 shadow-xl shadow-blue-500/10 mb-5 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <ShieldCheck size={14} className="text-blue-400" />
          <span className="text-white font-semibold">{siteConfig.name}</span>
          <span className="text-slate-600">|</span>
          <span className="text-blue-400 font-medium">Enterprise Software Consultancy</span>
        </motion.div>

        {/* Corporate Headline: D&D Solutions */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-3 font-sans select-none"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            D&D Solutions
          </span>
        </motion.h1>

        {/* Animated Typewriter Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight max-w-4xl leading-snug mb-3 min-h-[38px] sm:min-h-[48px] flex items-center justify-center flex-wrap gap-2"
        >
          <span className="text-slate-300">We Engineer</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-300">
            {displayText}
          </span>
          <span className="inline-block w-0.5 h-6 sm:h-8 bg-blue-400 animate-pulse ml-0.5" />
        </motion.div>

        {/* Sub-positioning description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-6 font-sans"
        >
          Custom enterprise SaaS, high-performance web platforms, and applied AI systems.
        </motion.p>

        {/* Executive Metric Cards (Responsive Grid) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl w-full mb-6 font-mono text-xs text-left"
        >
          <div className="bg-slate-900/80 p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
            <div>
              <div className="text-white font-bold text-xs">100% Ownership</div>
              <div className="text-[10px] text-slate-400">Full IP & Code Rights</div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5">
            <Zap size={16} className="text-blue-400 shrink-0" />
            <div>
              <div className="text-white font-bold text-xs">Microservices</div>
              <div className="text-[10px] text-slate-400">Scalable REST APIs</div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5">
            <ShieldCheck size={16} className="text-sky-400 shrink-0" />
            <div>
              <div className="text-white font-bold text-xs">Production SLA</div>
              <div className="text-[10px] text-slate-400">Post-Launch Support</div>
            </div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-2xl border border-white/10 shadow-sm flex items-center gap-2.5">
            <Cpu size={16} className="text-indigo-400 shrink-0" />
            <div>
              <div className="text-white font-bold text-xs">Applied AI</div>
              <div className="text-[10px] text-slate-400">RAG & Automation</div>
            </div>
          </div>
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-600 text-white font-semibold text-xs shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group hover:scale-[1.02]"
          >
            <Sparkles size={14} />
            <span>Request a Consultation & Proposal</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-white/15 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
          >
            <Code2 size={14} className="text-blue-400" />
            <span>Explore Client Case Studies</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href="#work"
            aria-label="Scroll to solutions"
            className="text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1 group"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Explore Solutions</span>
            <div className="w-5 h-7 border border-slate-700 group-hover:border-blue-400 rounded-full flex items-start justify-center p-1 transition-colors">
              <div className="w-1 h-1.5 bg-blue-400 rounded-full animate-bounce" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
