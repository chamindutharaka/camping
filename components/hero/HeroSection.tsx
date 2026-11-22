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
      className="no-print relative flex min-h-[90vh] flex-col justify-between overflow-hidden bg-[#092328] text-white"
    >
      {/* Parallax Background */}
      <motion.div
        style={prefersReduced ? undefined : { y: bgY, scale: bgScale }}
        initial={prefersReduced ? false : { scale: 1.07, opacity: 0.75 }}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#092328]/80 via-[#092328]/55 to-[#092328]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#092328]/85 via-[#092328]/40 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8BBB92]">
                  {t.hero.eyebrow}
                </p>

                <h1 className="font-display mt-4 text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.06] tracking-tight text-white">
                  {t.hero.title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                  {t.hero.subtitle}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="#gear"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-[#092328] transition hover:bg-[#8BBB92] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BBB92]"
                  >
                    {t.hero.ctaGear}
                  </motion.a>
                  <motion.a
                    whileTap={{ scale: 0.97 }}
                    href="#packages"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {t.hero.ctaPackages}
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Minimal Glass Price Example Card */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="rounded-3xl border border-[#8BBB92]/30 bg-[#092328]/80 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8BBB92]">
                  {t.hero.exampleLabel}
                </span>
                <span className="rounded-full bg-[#2A835F]/35 px-2.5 py-0.5 text-xs font-semibold text-[#8BBB92]">
                  {t.hero.exampleSave}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-white/85">
                {t.hero.exampleTitle}
              </p>
              <div className="mt-1 flex items-baseline gap-2.5">
                <span className="font-display text-3xl font-bold text-white">
                  {t.hero.examplePrice}
                </span>
                <span className="text-sm text-white/50 line-through">
                  LKR 2,700
                </span>
              </div>
              <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/75">
                {t.trust.freeKit}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean Text-Only Trust Strip */}
      <div className="relative z-10 border-t border-white/12 bg-[#092328]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
            {trustItems.map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs font-medium text-white/85 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8BBB92]" />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <a
            href="#packages"
            className="hidden shrink-0 text-xs font-medium text-[#8BBB92] transition-colors hover:text-white lg:inline-block"
          >
            {t.hero.scrollHint}
          </a>
        </div>
      </div>
    </section>
  );
}
