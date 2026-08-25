"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-mono font-extrabold text-xs shadow-md shadow-blue-600/20">
                D&D
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-mono">
              {siteConfig.tagline}. Co-Founded by Dev Darji & Deep Gadhiya.
            </p>

            <div className="text-xs font-mono text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-blue-400" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>Enterprise SLA & NDA Protected</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Capabilities
            </div>
            <ul className="space-y-2 text-slate-400">
              {siteConfig.capabilitiesList.map((item) => (
                <li key={item} className="hover:text-blue-400 transition-colors">
                  <a href="#work">• {item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Consultation */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Founding Partners Direct Contact
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={13} className="text-emerald-400" />
                <span>Dev Darji:</span>
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-emerald-400 transition-colors font-semibold">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone size={13} className="text-sky-400" />
                <span>Deep Gadhiya:</span>
                <a href={`tel:${siteConfig.secondaryPhone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-sky-400 transition-colors font-semibold">
                  {siteConfig.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail size={13} className="text-blue-400" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-blue-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02]"
              >
                Request Proposal / Call
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.name} (Dev Darji & Deep Gadhiya). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
