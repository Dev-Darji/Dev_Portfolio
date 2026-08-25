"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedText({ text, className = "", delay = 0, once = false }: AnimatedTextProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
      rotateX: -30,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={childVariants}
          className="inline-block mr-[0.25em] whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
