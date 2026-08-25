"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MorphSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function MorphSection({
  children,
  id,
  className = "",
}: MorphSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full transition-opacity duration-700 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0.85, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 10 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative"
      >
        {children}
      </motion.div>
    </div>
  );
}
