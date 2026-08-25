"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Zap, Sparkles, Activity, ShieldCheck, Cpu } from "lucide-react";

export function QuantumCollisionTraveler() {
  const { scrollYProgress } = useScroll();

  // Smooth scroll spring for natural inertia
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Collision convergence calculation:
  // At section centers (0, 0.2, 0.4, 0.6, 0.8, 1.0) -> offset is 0 (sentinels stay on outer edges)
  // At section midpoints (0.1, 0.3, 0.5, 0.7, 0.9) -> offset reaches ~40vw (they collide in center)
  const leftX = useTransform(smoothProgress, (p) => {
    // 5 collision waves throughout the document
    const cycle = Math.sin(p * Math.PI * 5);
    const collisionIntensity = Math.max(0, cycle);
    return collisionIntensity * 42; // travels up to +42vw towards center
  });

  const rightX = useTransform(smoothProgress, (p) => {
    const cycle = Math.sin(p * Math.PI * 5);
    const collisionIntensity = Math.max(0, cycle);
    return -collisionIntensity * 42; // travels up to -42vw towards center
  });

  const collisionScale = useTransform(smoothProgress, (p) => {
    const cycle = Math.sin(p * Math.PI * 5);
    return 1 + Math.max(0, cycle) * 0.35; // pulses bigger at collision
  });

  const collisionGlowOpacity = useTransform(smoothProgress, (p) => {
    const cycle = Math.sin(p * Math.PI * 5);
    return Math.max(0.2, cycle);
  });

  return (
    <div className="fixed inset-y-0 inset-x-0 z-20 pointer-events-none overflow-hidden select-none hidden md:block">
      {/* Left Quantum Sentinel Node */}
      <motion.div
        style={{
          x: useTransform(leftX, (v) => `${v}vw`),
          scale: collisionScale,
        }}
        className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-6 flex items-center justify-center"
      >
        <div className="relative group">
          {/* Ambient Glow Aura */}
          <motion.div
            style={{ opacity: collisionGlowOpacity }}
            className="absolute -inset-4 rounded-full bg-cyan-500/25 blur-xl animate-pulse"
          />

          {/* Sentinel Body */}
          <div className="w-10 h-10 rounded-2xl bg-slate-950/90 border border-cyan-500/50 backdrop-blur-md flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-cyan-400"
            >
              <Cpu size={18} />
            </motion.div>
          </div>

          {/* Orbital Micro-particle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 flex items-center justify-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Quantum Sentinel Node */}
      <motion.div
        style={{
          x: useTransform(rightX, (v) => `${v}vw`),
          scale: collisionScale,
        }}
        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 flex items-center justify-center"
      >
        <div className="relative group">
          {/* Ambient Glow Aura */}
          <motion.div
            style={{ opacity: collisionGlowOpacity }}
            className="absolute -inset-4 rounded-full bg-indigo-500/25 blur-xl animate-pulse"
          />

          {/* Sentinel Body */}
          <div className="w-10 h-10 rounded-2xl bg-slate-950/90 border border-indigo-500/50 backdrop-blur-md flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-indigo-400"
            >
              <Zap size={18} />
            </motion.div>
          </div>

          {/* Orbital Micro-particle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 flex items-center justify-end"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
