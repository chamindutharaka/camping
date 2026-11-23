"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { HERO_IMAGE } from "@/data/images";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";
import { SmartImage } from "@/components/ui/SmartImage";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const language = useBookingStore((s) => s.language);
  const t = DICTIONARY[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.1]);

  const trustItems = [
    t.trust.freeKit,
    t.trust.halfPrice,
    t.trust.gallePickup,
    t.trust.whatsappSupport,
  ];

  return (
    <section
      ref={containerRef}
      className="no-print relative flex min-h-[86vh] flex-col justify-between overflow-hidden bg-[#111613] text-white"
    >
      {/* Parallax Background with light natural scrim */}
      <motion.div
        style={prefersReduced ? undefined : { y: bgY, scale: bgScale }}
        initial={prefersReduced ? false : { scale: 1.06, opacity: 0.85 }}
        animate={{ scale: 1.03, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0"
      >
        <SmartImage
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111613]/55 via-[#111613]/25 to-[#111613]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111613]/60 via-[#111613]/20 to-transparent" />
      </motion.div>

      {/* Main Content (clean, direct, no floating AI widget) */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D1E7DA] drop-shadow-xs">
                {t.hero.eyebrow}
              </p>

              <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.06] tracking-tight text-white drop-shadow-sm">
                {t.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/92 drop-shadow-xs sm:text-lg">
                {t.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="#gear"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#0A5C36] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-black/25 transition hover:bg-[#0D7043] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t.hero.ctaGear}
                </motion.a>
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href="#packages"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/45 bg-[#111613]/45 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-[#111613]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t.hero.ctaPackages}
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Clean Text-Only Trust Strip */}
      <div className="relative z-10 border-t border-white/15 bg-[#111613]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
            {trustItems.map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs font-medium text-white/90 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4EA879]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <a
            href="#packages"
            className="hidden shrink-0 text-xs font-medium text-[#D1E7DA] transition-colors hover:text-white lg:inline-block"
          >
            {t.hero.scrollHint}
          </a>
        </div>
      </div>
    </section>
  );
}
