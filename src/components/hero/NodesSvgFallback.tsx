"use client";

import React from "react";

export function NodesSvgFallback() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center pointer-events-none">
      <svg
        className="w-72 h-72 sm:w-96 sm:h-96 animate-spin-slow opacity-60"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: "35s" }}
      >
        <circle cx="100" cy="100" r="80" stroke="url(#cyberGrad)" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="100" cy="100" r="60" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.4" />
        <polygon points="100,30 160,140 40,140" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.6" />
        <polygon points="100,170 160,60 40,60" stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="100" cy="100" r="12" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1" />
        
        <defs>
          <linearGradient id="cyberGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" />
            <stop offset="0.5" stopColor="#6366f1" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
