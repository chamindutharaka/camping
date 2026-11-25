"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[#0A5C36] via-[#2A835F] to-[#4EA879] shadow-[0_0_8px_rgba(78,168,121,0.55)]"
        style={{ scaleX: prefersReduced ? scrollYProgress : smoothProgress }}
      />
    </div>
  );
}
