"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#work" },
    { label: "Tech Matrix", href: "#matrix" },
    { label: "AI Labs", href: "#ai" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram: D&D Solutions */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-mono font-extrabold text-xs shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform">
            D&D
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-slate-950 animate-pulse" />
          </div>
          <span className="font-bold text-slate-100 tracking-tight">
            {siteConfig.name}
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Consultancy
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Request Proposal CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-600 text-white shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 transition-all hover:scale-[1.03] active:scale-95"
          >
            Request Proposal
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open navigation menu"
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 text-slate-300 border border-white/10 cursor-pointer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl p-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
            >
              Request Proposal
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
