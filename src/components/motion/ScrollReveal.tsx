"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "diagonal";
  duration?: number;
  className?: string;
  distance?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
  distance = 35,
}: ScrollRevealProps) {
  const getVariants = (): Variants => {
    let x = 0;
    let y = 0;
    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;
    if (direction === "diagonal") {
      x = -distance * 0.7;
      y = distance * 0.7;
    }

    return {
      hidden: {
        opacity: 0,
        x,
        y,
        scale: direction === "none" ? 0.95 : 1,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}) {
  let x = 0;
  let y = 0;
  let scale = 1;

  if (direction === "up") y = 25;
  if (direction === "left") x = 25;
  if (direction === "right") x = -25;
  if (direction === "scale") scale = 0.94;

  const variants: Variants = {
    hidden: { opacity: 0, x, y, scale },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
