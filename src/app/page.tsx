"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ScrollTimelineProvider } from "@/components/motion/ScrollTimelineProvider";
import { MorphSection } from "@/components/motion/MorphSection";
import { CyberCursorGlow } from "@/components/motion/CyberCursorGlow";

import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechEcosystem } from "@/components/tech/TechEcosystem";
import { AiCapabilitiesSection } from "@/components/ai/AiCapabilitiesSection";
import { AboutDev } from "@/components/about/AboutDev";
import { ProjectPlannerForm } from "@/components/contact/ProjectPlannerForm";

// Dynamically import continuous 3D background cyber particle galaxy & in-scene collision orbs
const CinematicScrollCanvas = dynamic(
  () => import("@/components/motion/CinematicScrollCanvas").then((mod) => mod.CinematicScrollCanvas),
  { ssr: false }
);

export default function Home() {
  return (
    <ScrollTimelineProvider>
      {/* Ambient Desktop Cursor Light Follower */}
      <CyberCursorGlow />

      {/* Continuous 3D Background Galaxy & Quantum Collision Orbs */}
      <CinematicScrollCanvas />

      <div className="relative z-10 flex flex-col space-y-0">
        {/* 01 — Hero // Launchpad & Interactive Terminal */}
        <MorphSection id="hero">
          <HeroSection />
        </MorphSection>

        {/* 02 — Featured Work & Live Interactive Demos */}
        <MorphSection id="work">
          <ProjectShowcase />
        </MorphSection>

        {/* 03 — Tech Matrix & Capabilities */}
        <MorphSection id="matrix">
          <TechEcosystem />
        </MorphSection>

        {/* 04 — AI Labs // Applied Intelligence */}
        <MorphSection id="ai">
          <AiCapabilitiesSection />
        </MorphSection>

        {/* 05 — Track Record & Developer Dossier */}
        <MorphSection id="about">
          <AboutDev />
        </MorphSection>

        {/* 06 — Let's Build // Project Planner & Contact */}
        <MorphSection id="contact">
          <ProjectPlannerForm />
        </MorphSection>
      </div>
    </ScrollTimelineProvider>
  );
}
