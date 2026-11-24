"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HERO_IMAGE } from "@/data/images";
import { HERO_VIDEOS } from "@/data/videos";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";
import { SmartImage } from "@/components/ui/SmartImage";

const SLIDE_DURATION_MS = 7500;

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const language = useBookingStore((s) => s.language);
  const t = DICTIONARY[language];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoFailed, setVideoFailed] = useState<Record<string, boolean>>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.09]);

  const goToSlide = useCallback((idx: number) => {
    const total = HERO_VIDEOS.length;
    setActiveSlide(((idx % total) + total) % total);
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReduced) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPlaying, prefersReduced, activeSlide]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isPlaying && !prefersReduced) {
      vid.play().catch(() => {
        // Autoplay may be blocked on low-power mode; poster remains visible
      });
    } else {
      vid.pause();
    }
  }, [activeSlide, isPlaying, prefersReduced]);

  const currentVideo = HERO_VIDEOS[activeSlide];
  const showFallbackImage =
    Boolean(prefersReduced) || Boolean(videoFailed[currentVideo.id]);

  const trustItems = [
    t.trust.freeKit,
    t.trust.halfPrice,
    t.trust.gallePickup,
    t.trust.whatsappSupport,
  ];

  return (
    <section
      ref={containerRef}
      className="no-print relative flex min-h-[88vh] flex-col justify-between overflow-hidden bg-[#111613] text-white"
    >
      {/* Parallax Video / Fallback Image Slider */}
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
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                preload="metadata"
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

        {/* Balanced natural scrim so video shines through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111613]/55 via-[#111613]/25 to-[#111613]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111613]/65 via-[#111613]/25 to-transparent" />
      </motion.div>

      {/* Main Content + Video Slider Controls */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pt-28 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={language}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.p
                  initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D1E7DA] drop-shadow-xs"
                >
                  {t.hero.eyebrow}
                </motion.p>

                <motion.h1
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                  className="font-display mt-3.5 text-[clamp(2.35rem,5.4vw,4.4rem)] font-bold leading-[1.06] tracking-tight text-white drop-shadow-sm"
                >
                  {t.hero.title}
                </motion.h1>

                <motion.p
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4 max-w-2xl text-base leading-relaxed text-white/92 drop-shadow-xs sm:text-lg"
                >
                  {t.hero.subtitle}
                </motion.p>

                {/* Transparent Glassmorphism CTA Buttons */}
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.28 }}
                  className="mt-8 flex flex-wrap items-center gap-3.5"
                >
                  <motion.a
                    whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href="#gear"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#4EA879]/65 bg-[#0A5C36]/65 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#4EA879] hover:bg-[#0A5C36]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {t.hero.ctaGear}
                  </motion.a>
                  <motion.a
                    whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href="#packages"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/45 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/80 hover:bg-white/22 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {t.hero.ctaPackages}
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Transparent Hero Video Slider Controls */}
          <div className="flex items-center gap-2.5 self-start lg:self-end">
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Previous hero video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div
              role="tablist"
              aria-label="Hero video slides"
              className="flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-md"
            >
              {HERO_VIDEOS.map((vid, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={vid.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={language === "si" ? vid.labelSi : vid.labelEn}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "w-7 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Next hero video"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5 translate-x-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Text-Only Trust Strip */}
      <div className="relative z-10 border-t border-white/15 bg-[#111613]/75 backdrop-blur-md">
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
