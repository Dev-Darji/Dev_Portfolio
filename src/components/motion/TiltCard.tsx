"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
}

export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(6, 182, 212, 0.15)",
  enableTilt = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position relative to card (0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Spring physics for buttery smooth tilt
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], enableTilt ? [6, -6] : [0, 0]);
  const rotateY = useTransform(smoothMouseX, [0, 1], enableTilt ? [-6, 6] : [0, 0]);

  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative p-0.5 rounded-2xl transition-all duration-300"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-2xl overflow-hidden ${className}`}
      >
        {/* Dynamic Cursor Light Spotlight Overlay */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit] z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(450px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`,
          }}
        />
        {children}
      </motion.div>
    </div>
  );
}
