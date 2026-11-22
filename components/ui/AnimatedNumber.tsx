"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  className?: string;
}

export function AnimatedNumber({
  value,
  prefix = "LKR ",
  className = "",
}: AnimatedNumberProps) {
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const start = display;
    const diff = value - start;
    if (diff === 0) return;

    const duration = 280;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, prefersReduced]);

  return (
    <span className={className}>
      {prefix}
      {Math.round(display).toLocaleString("en-US")}
    </span>
  );
}
