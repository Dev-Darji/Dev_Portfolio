"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CyberCursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.3 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer (mouse)
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="pointer-events-none fixed top-0 left-0 z-30 w-80 h-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/12 blur-[90px] transition-opacity duration-300"
    />
  );
}
