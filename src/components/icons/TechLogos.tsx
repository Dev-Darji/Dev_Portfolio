"use client";

import React from "react";

export function TechLogo({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "react":
    case "react.js":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "next.js":
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path
            d="M149.508 157.568L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.183 149.508 157.568Z"
            fill="url(#nextGrad)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#nextGrad2)" />
          <defs>
            <linearGradient id="nextGrad" x1="109.5" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="nextGrad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "typescript":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path
            d="M73.5 86.8c1.6 2.6 3.8 4.6 6.6 6.1 2.8 1.5 6 2.2 9.7 2.2 3.3 0 6.1-.6 8.4-1.8 2.3-1.2 4-2.8 5.2-4.8 1.2-2 1.8-4.3 1.8-6.9 0-2.4-.6-4.5-1.7-6.3-1.1-1.8-2.8-3.3-5-4.5-2.2-1.2-5.1-2.4-8.8-3.5-4.4-1.3-8-2.6-10.7-4-2.7-1.4-4.8-3.1-6.3-5.2-1.5-2.1-2.2-4.7-2.2-7.8 0-3.3.9-6.3 2.7-8.9 1.8-2.6 4.4-4.6 7.7-6.1 3.3-1.5 7.2-2.2 11.7-2.2 4.4 0 8.3.8 11.6 2.3 3.3 1.5 5.9 3.6 7.7 6.2l-9.1 7.4c-1.4-1.9-3-3.3-5-4.2-2-.9-4.2-1.4-6.6-1.4-2.7 0-4.9.5-6.7 1.6-1.8 1.1-2.7 2.6-2.7 4.7 0 1.9.7 3.5 2.1 4.7 1.4 1.2 3.8 2.3 7.3 3.4 4.5 1.4 8.2 2.8 11 4.3 2.8 1.5 4.9 3.4 6.4 5.6 1.5 2.2 2.2 4.9 2.2 8.1 0 3.6-.9 6.8-2.8 9.5-1.9 2.7-4.6 4.9-8.1 6.4-3.5 1.5-7.7 2.3-12.7 2.3-5.8 0-10.8-1-15-3-4.2-2-7.4-4.8-9.6-8.5l9.9-7.1zM42.8 35.8h14.7v57.8H42.8V35.8z"
            fill="#FFFFFF"
          />
          <path d="M19.3 35.8h61.7v12.2H19.3V35.8z" fill="#FFFFFF" />
        </svg>
      );

    case "javascript":
    case "javascript (es6+)":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path
            d="M67.3 90.1c1.8 3 4.1 5.3 7.1 6.9 3 1.6 6.5 2.5 10.4 2.5 3.5 0 6.5-.6 9-1.9 2.5-1.3 4.3-3 5.5-5.2 1.3-2.1 1.9-4.7 1.9-7.5 0-2.6-.6-4.9-1.8-6.8-1.2-1.9-3-3.6-5.4-4.9-2.4-1.3-5.5-2.6-9.5-3.8-4.8-1.4-8.7-2.8-11.6-4.3-2.9-1.5-5.2-3.4-6.8-5.7-1.6-2.3-2.4-5.1-2.4-8.5 0-3.6 1-6.8 3-9.6 2-2.8 4.8-5 8.4-6.6 3.6-1.6 7.8-2.4 12.7-2.4 4.8 0 9 .9 12.6 2.5 3.6 1.6 6.4 3.9 8.4 6.7l-9.8 8.1c-1.5-2.1-3.3-3.6-5.4-4.6-2.1-1-4.6-1.5-7.2-1.5-2.9 0-5.3.6-7.3 1.7-2 1.2-2.9 2.9-2.9 5.1 0 2.1.8 3.8 2.3 5.1 1.5 1.3 4.1 2.5 7.9 3.7 4.9 1.5 8.9 3.1 12 4.7 3.1 1.6 5.4 3.7 7 6.1 1.6 2.4 2.4 5.3 2.4 8.8 0 3.9-1 7.4-3.1 10.3-2.1 3-5 5.3-8.8 7-3.8 1.6-8.4 2.5-13.8 2.5-6.3 0-11.7-1.1-16.3-3.3-4.6-2.2-8-5.3-10.4-9.3l10.2-7.8zm-42.5 1.5c1.2 1.7 2.7 3.1 4.6 4.1 1.9 1 4.2 1.5 6.9 1.5 2.5 0 4.6-.5 6.2-1.6 1.6-1.1 2.9-2.6 3.8-4.6.9-2 1.4-4.5 1.4-7.4V35.8h13.8v47.7c0 4.7-.9 8.8-2.6 12.3-1.7 3.5-4.3 6.3-7.7 8.3-3.4 2-7.6 3-12.7 3-5.2 0-9.6-.9-13.2-2.8-3.6-1.9-6.3-4.7-8.2-8.3l10.3-7.5z"
            fill="#000000"
          />
        </svg>
      );

    case "tailwind":
    case "tailwind css":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#0F172A" />
          <path
            d="M64 43.2c-12.8 0-20.8 6.4-24 19.2 4.8-4.8 10.4-7.2 16.8-7.2 9.6 0 15.2 5.6 19.2 12.8 4 7.2 8.8 12.8 19.2 12.8 12.8 0 20.8-6.4 24-19.2-4.8 4.8-10.4 7.2-16.8 7.2-9.6 0-15.2-5.6-19.2-12.8C79.2 48.8 74.4 43.2 64 43.2zm-32 25.6c-12.8 0-20.8 6.4-24 19.2 4.8-4.8 10.4-7.2 16.8-7.2 9.6 0 15.2 5.6 19.2 12.8 4 7.2 8.8 12.8 19.2 12.8 12.8 0 20.8-6.4 24-19.2-4.8 4.8-10.4 7.2-16.8 7.2-9.6 0-15.2-5.6-19.2-12.8-4-7.2-8.8-12.8-19.2-12.8z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "scss":
    case "scss / bootstrap":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#CF649A" />
          <path
            d="M64 28c-19.8 0-36 16.2-36 36s16.2 36 36 36 36-16.2 36-36-16.2-36-36-36zm16.5 49.3c-2.4 4.5-6.5 7.8-11.7 9.4-2.8.9-6.1 1.2-9.2.8-4.2-.6-8-2.6-10.9-5.6-1.5-1.6-2.6-3.5-3.2-5.6-.6-2.1-.6-4.5.1-6.6.7-2.1 2-3.9 3.8-5.2 2.1-1.6 4.7-2.5 7.3-3.1 3.5-.8 7.1-1.4 10.6-2.2 1.4-.3 2.8-.7 4.1-1.4 1-.5 1.9-1.2 2.5-2.2.6-1 .8-2.1.6-3.2-.2-1.1-.9-2.1-1.8-2.7-1.1-.7-2.5-1-3.8-1-1.9 0-3.7.6-5.1 1.8-1.4 1.2-2.3 2.8-2.5 4.6l-7.2-1.2c.7-3.4 2.5-6.5 5.2-8.7 2.9-2.3 6.6-3.5 10.3-3.5 3.4 0 6.7.9 9.5 2.7 2.6 1.7 4.5 4.3 5.3 7.3.7 2.8.6 5.8-.3 8.6-.9 2.7-2.7 5.1-5 6.7-2.3 1.6-5.1 2.6-7.8 3.3-3.3.8-6.6 1.4-9.9 2.2-1.2.3-2.3.7-3.3 1.3-.9.6-1.7 1.3-2.1 2.3-.4.9-.5 2-.2 3 .3.9.9 1.7 1.7 2.3 1.2.8 2.7 1.2 4.1 1.2 2.1 0 4.1-.7 5.7-2 1.6-1.3 2.7-3.1 3.1-5.1l7.3 1.3z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "nodejs":
    case "node.js":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#1E293B" />
          <path
            d="M64 22L28 42.8v41.6L64 105.2l36-20.8V42.8L64 22zm0 13.8l24.4 14.1v28.2L64 92.2 39.6 78.1V49.9L64 35.8z"
            fill="#339933"
          />
          <circle cx="64" cy="64" r="10" fill="#66CC33" />
        </svg>
      );

    case "express":
    case "express.js":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#0F172A" />
          <text x="64" y="78" fill="#FFFFFF" fontSize="38" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            ex
          </text>
        </svg>
      );

    case "fastapi":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#009688" />
          <path d="M68 28L36 72h24l-8 36 40-48H68l8-32z" fill="#FFFFFF" />
        </svg>
      );

    case "mongodb":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#132E25" />
          <path
            d="M64.6 22c-1.2.6-3.8 2.6-5.8 4.4-9.8 9-17.8 22.8-19.8 34.6-2.6 15.6 2.6 31.4 13.8 41.6 3.6 3.4 8.6 6.4 10.6 6.4.8 0 1.2-2.2 1.4-8V22.2l-.2-.2z"
            fill="#47A248"
          />
          <path
            d="M64.6 22v79c2.2 0 6.6-2.6 9.8-5.6 11.2-10.4 16.4-26.2 13.8-41.8-2-12-10-25.8-19.8-34.8-1.6-1.4-3.4-3-3.8-3.4l-.8.6-.2 6z"
            fill="#499D4A"
          />
          <path
            d="M63.8 87.2c-.4 3.8-.4 17.6 0 18.8.4 1.2 1.4 1.2 1.8 0 .4-1.2.4-15 0-18.8-.4-3.8-1.4-3.8-1.8 0z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "atlas":
    case "mongodb atlas":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#001E2B" />
          <path
            d="M64 24c-22.1 0-40 17.9-40 40 0 18.5 12.6 34.1 29.8 38.6 2.1.5 4.2.8 6.2.8 3.5 0 7-.7 10.2-2 15.7-6.2 26.2-21.7 25.8-38.6C95.5 41.5 77.9 24 64 24zm0 60c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
            fill="#00ED64"
          />
        </svg>
      );

    case "sql":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#0284C7" />
          <ellipse cx="64" cy="40" rx="36" ry="14" fill="#E0F2FE" />
          <path d="M28 40v24c0 7.7 16.1 14 36 14s36-6.3 36-14V40" stroke="#E0F2FE" strokeWidth="6" fill="none" />
          <path d="M28 64v24c0 7.7 16.1 14 36 14s36-6.3 36-14V64" stroke="#E0F2FE" strokeWidth="6" fill="none" />
        </svg>
      );

    case "rest-api":
    case "rest api":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#4F46E5" />
          <circle cx="40" cy="48" r="12" fill="#A5B4FC" />
          <circle cx="88" cy="48" r="12" fill="#A5B4FC" />
          <circle cx="64" cy="88" r="12" fill="#A5B4FC" />
          <path d="M40 48h48l-24 40L40 48z" stroke="#FFFFFF" strokeWidth="4" fill="none" />
        </svg>
      );

    case "axios":
    case "axios & fetch":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#5A29E4" />
          <path d="M36 76l28-44 28 44-16 16-12-18-12 18-16-16z" fill="#FFFFFF" />
        </svg>
      );

    case "git":
    case "git & github":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#F05032" />
          <path
            d="M101.4 56.6L71.4 26.6c-2.1-2.1-5.6-2.1-7.7 0l-7.3 7.3 9.8 9.8c2.3-.8 5-.2 6.8 1.6 1.8 1.8 2.4 4.5 1.6 6.8l9.4 9.4c2.3-.8 5-.2 6.8 1.6 2.5 2.5 2.5 6.5 0 9-2.5 2.5-6.5 2.5-9 0-2-2-2.5-5-1.5-7.4L71.4 55.7v24.6c.7.4 1.4.9 2 1.5 2.5 2.5 2.5 6.5 0 9-2.5 2.5-6.5 2.5-9 0-2.5-2.5-2.5-6.5 0-9 .8-.8 1.8-1.4 2.8-1.7V55.3c-1.1-.3-2-.9-2.8-1.7-2-2-2.5-5-1.5-7.4L53.1 36.4 26.6 62.9c-2.1 2.1-2.1 5.6 0 7.7l30 30c2.1 2.1 5.6 2.1 7.7 0l37.1-37.1c2.1-2.1 2.1-5.6 0-6.9z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "figma":
    case "figma & vs code":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#1E1E1E" />
          <path d="M44 32h20v20H44a10 10 0 0 1 0-20z" fill="#F24E1E" />
          <path d="M64 32h20a10 10 0 0 1 0 20H64V32z" fill="#FF7262" />
          <path d="M44 52h20v20H44a10 10 0 0 1 0-20z" fill="#A259FF" />
          <circle cx="74" cy="62" r="10" fill="#1ABCFE" />
          <path d="M44 72h20v10a10 10 0 1 1-20 0V72z" fill="#0ACF83" />
        </svg>
      );

    case "vercel":
    case "vercel & render":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#000000" />
          <polygon points="64,32 98,92 30,92" fill="#FFFFFF" />
        </svg>
      );

    case "ai-llms":
    case "ai apis & llms":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#10B981" />
          <path
            d="M64 28c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm0 16c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8zm-18 36c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm36 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm-18 16c-7.7 0-14-6.3-14-14h28c0 7.7-6.3 14-14 14z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "rag-vectors":
    case "rag & vector search":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#06B6D4" />
          <circle cx="56" cy="56" r="24" stroke="#FFFFFF" strokeWidth="8" fill="none" />
          <path d="M74 74l26 26" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <circle cx="56" cy="56" r="6" fill="#FFFFFF" />
        </svg>
      );

    case "ai-agents":
    case "ai agents & langchain":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#8B5CF6" />
          <rect x="36" y="44" width="56" height="44" rx="10" stroke="#FFFFFF" strokeWidth="6" fill="none" />
          <circle cx="52" cy="62" r="5" fill="#FFFFFF" />
          <circle cx="76" cy="62" r="5" fill="#FFFFFF" />
          <path d="M64 24v20M56 24h16" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}
