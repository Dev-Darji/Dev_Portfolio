"use client";

import React, { createContext, useContext } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";

interface ScrollTimelineContextType {
  scrollYProgress: MotionValue<number>;
  smoothProgress: MotionValue<number>;
}

const ScrollTimelineContext = createContext<ScrollTimelineContextType>({
  scrollYProgress: null as any,
  smoothProgress: null as any,
});

export const useScrollTimeline = () => useContext(ScrollTimelineContext);

export function ScrollTimelineProvider({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  // Buttery smooth spring interpolation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <ScrollTimelineContext.Provider value={{ scrollYProgress, smoothProgress }}>
      {children}
    </ScrollTimelineContext.Provider>
  );
}
