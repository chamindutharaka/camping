"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_IMAGE } from "@/data/images";
import { HERO_VIDEOS } from "@/data/videos";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";
import { SmartImage } from "@/components/ui/SmartImage";

const SLIDE_DURATION_MS = 8000;

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const language = useBookingStore((s) => s.language);
  const t = DICTIONARY[language];

  const [activeSlide, setActiveSlide] = useState(0);
  const [videoFailed, setVideoFailed] = useState<Record<string, boolean>>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  const goToSlide = useCallback((idx: number) => {
    const total = HERO_VIDEOS.length;
    setActiveSlide(((idx % total) + total) % total);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [prefersReduced, activeSlide]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || prefersReduced) return;
    vid.play().catch(() => {
      // Autoplay may be blocked on low-power mode; poster remains visible
    });
  }, [activeSlide, prefersReduced]);

  const currentVideo = HERO_VIDEOS[activeSlide];
  const showFallbackImage =
    Boolean(prefersReduced) || Boolean(videoFailed[currentVideo.id]);

  const padNum = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={containerRef}
      className="no-print relative flex h-[100svh] min-h-[660px] flex-col justify-end overflow-hidden bg-[#111613] text-white"
    >
      {/* Full-Screen Parallax Video / Fallback Image Slider */}
      <motion.div
        style={prefersReduced ? undefined : { y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={currentVideo.id}
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {showFallbackImage ? (
              <SmartImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            ) : (
              <video
                ref={videoRef}
                key={currentVideo.src}
                src={currentVideo.src}
                poster={currentVideo.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() =>
                  setVideoFailed((prev) => ({
                    ...prev,
                    [currentVideo.id]: true,
                  }))
                }
                className="h-full w-full object-cover object-center"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Cinematic natural scrim */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111613]/45 via-[#111613]/20 to-[#111613]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111613]/65 via-[#111613]/25 to-transparent" />
      </motion.div>

      {/* Editorial Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="max-w-3xl pb-8 sm:pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#4EA879]" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  {t.hero.eyebrow}
                </p>
              </div>

              <h1 className="font-display mt-4 text-[clamp(2.85rem,6.5vw,5.4rem)] font-semibold leading-[0.98] tracking-tight text-white drop-shadow-sm">
                {t.hero.title}
              </h1>

              <p className="font-display mt-4 text-xl italic text-white/90 sm:text-2xl">
                {t.brand.tagline} — {t.trust.freeKit}
              </p>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {t.hero.subtitle}
              </p>

              {/* Transparent Glassmorphism CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <motion.a
                  whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="#gear"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-[#4EA879]/75 bg-[#0A5C36]/75 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:bg-[#0A5C36] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{t.hero.ctaGear}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.a>
                <motion.a
                  whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href="#packages"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-white/45 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/85 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t.hero.ctaPackages}
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modern Bottom Bar: 01 / 03 · SCROLL | · ← → */}
        <div className="flex items-center justify-between border-t border-white/20 pt-4 pb-2">
          <div className="flex items-baseline gap-1.5">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSlide}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="font-display text-2xl font-semibold text-white"
              >
                {padNum(activeSlide + 1)}
              </motion.span>
            </AnimatePresence>
            <span className="text-xs font-medium tracking-wider text-white/55">
              / {padNum(HERO_VIDEOS.length)}
            </span>
          </div>

          <a
            href="#packages"
            className="hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/75 transition-colors hover:text-white sm:inline-flex"
          >
            <span>SCROLL</span>
            <span className="h-5 w-px bg-white/35" aria-hidden="true" />
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Previous hero video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm transition hover:border-white/80 hover:bg-white/15 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Next hero video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white backdrop-blur-sm transition hover:border-white/80 hover:bg-white/15 cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Edge Animated Video Timeline Progress Bar */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/15"
      >
        <motion.div
          key={`${activeSlide}-${prefersReduced ? "static" : "anim"}`}
          initial={prefersReduced ? { width: "100%" } : { width: "0%" }}
          animate={{ width: "100%" }}
          transition={
            prefersReduced
              ? { duration: 0 }
              : { duration: SLIDE_DURATION_MS / 1000, ease: "linear" }
          }
          className="h-full bg-[#4EA879]"
        />
      </div>
    </section>
  );
}
