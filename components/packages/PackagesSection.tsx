"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { CAMPING_PACKAGES } from "@/data/packages";
import { getItemById } from "@/data/items";
import { PACKAGE_IMAGES } from "@/data/images";
import { DICTIONARY } from "@/data/i18n";
import { formatLKR } from "@/lib/format";
import { useBookingStore } from "@/lib/store";
import { SmartImage } from "@/components/ui/SmartImage";

export function PackagesSection() {
  const prefersReduced = useReducedMotion();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const language = useBookingStore((s) => s.language);
  const activePackageId = useBookingStore((s) => s.activePackageId);
  const selectPackage = useBookingStore((s) => s.selectPackage);
  const setDrawerOpen = useBookingStore((s) => s.setDrawerOpen);

  const t = DICTIONARY[language];

  const handleSelect = (pkgId: string) => {
    selectPackage(pkgId);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setDrawerOpen(true);
    }
  };

  const handleSliderScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let closestIdx = 0;
    let minDist = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });

    setActiveSlide(closestIdx);
  };

  const scrollToSlide = (idx: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(CAMPING_PACKAGES.length - 1, idx));
    const card = el.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
    setActiveSlide(clamped);
  };

  return (
    <section
      id="packages"
      className="no-print relative bg-[#f6f9f7] py-12 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#12544F]">
            {t.packages.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#092328] sm:text-4xl">
            {t.packages.title}
          </h2>
          <p className="mt-2.5 text-sm text-black/65 sm:mt-3 sm:text-base">
            {t.packages.subtitle}
          </p>
        </motion.div>

        {/* Mobile Horizontal Slider / Desktop 3-Column Grid */}
        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className="-mx-4 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-10 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {CAMPING_PACKAGES.map((pkg, idx) => {
            const isSelected = activePackageId === pkg.id;
            const img = PACKAGE_IMAGES[pkg.id];
            const savings = pkg.regularFirstDayTotal - pkg.packagePrice;

            return (
              <motion.article
                key={pkg.id}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group relative flex w-[84vw] max-w-[340px] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white transition-all duration-300 md:w-auto md:max-w-none ${
                  isSelected
                    ? "ring-2 ring-[#2A835F] shadow-lg shadow-[#092328]/10"
                    : "ring-1 ring-[#092328]/10 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-[#092328]/8"
                }`}
              >
                {/* Photo Header */}
                <div className="relative h-44 w-full overflow-hidden bg-[#092328] md:h-52">
                  <SmartImage
                    src={img?.src ?? ""}
                    alt={img?.alt ?? pkg.name}
                    fill
                    sizes="(max-width: 768px) 84vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092328]/95 via-[#092328]/40 to-transparent" />

                  {pkg.popular && (
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#092328] md:top-4 md:left-4">
                      {t.packages.popularBadge}
                    </span>
                  )}

                  <span className="absolute top-3.5 right-3.5 rounded-full border border-white/25 bg-[#092328]/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md md:top-4 md:right-4">
                    {pkg.peopleCount} {t.packages.peopleSuffix}
                  </span>

                  <div className="absolute inset-x-4 bottom-3.5 md:inset-x-5 md:bottom-4">
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                      {language === "si" ? pkg.nameSi : pkg.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#8BBB92]">
                      {language === "si" ? pkg.subtitleSi : pkg.subtitleEn}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#092328]/10 pb-3.5 md:pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-black/45 line-through">
                          {formatLKR(pkg.regularFirstDayTotal)}
                        </span>
                        <span className="rounded-full bg-[#8BBB92]/25 px-2.5 py-0.5 text-[11px] font-bold text-[#12544F]">
                          {t.packages.savePrefix} {formatLKR(savings)}
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="font-display text-2xl font-bold text-[#092328] md:text-3xl">
                          {formatLKR(pkg.packagePrice)}
                        </span>
                        <span className="text-xs font-medium text-black/55">
                          {t.packages.firstDayLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-3.5 flex-1 space-y-1.5 text-xs text-black/80 md:mt-4 md:space-y-2 md:text-sm">
                    {pkg.items.map((ref) => {
                      const item = getItemById(ref.itemId);
                      return (
                        <li key={ref.itemId} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2A835F] md:mt-2" />
                          <span>
                            {ref.qty}× {item?.name ?? ref.itemId}
                          </span>
                        </li>
                      );
                    })}
                    <li className="flex items-start gap-2.5 pt-1 font-semibold text-[#12544F]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12544F] md:mt-2" />
                      <span>{t.packages.freeKitNote}</span>
                    </li>
                  </ul>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect(pkg.id)}
                    className={`mt-5 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition cursor-pointer md:mt-6 md:min-h-[46px] md:py-3 ${
                      isSelected
                        ? "bg-[#2A835F] text-white"
                        : "bg-[#092328] text-white hover:bg-[#12544F]"
                    }`}
                  >
                    {isSelected && <Check className="h-4 w-4" />}
                    <span>
                      {isSelected
                        ? t.packages.selectedBtn
                        : t.packages.selectBtn}
                    </span>
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile Slider Controls & Dots */}
        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => scrollToSlide(activeSlide - 1)}
            disabled={activeSlide === 0}
            aria-label="Previous package"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#092328] ring-1 ring-[#092328]/15 disabled:opacity-35 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Package slides">
            {CAMPING_PACKAGES.map((pkg, idx) => (
              <button
                key={pkg.id}
                type="button"
                role="tab"
                aria-selected={activeSlide === idx}
                aria-label={pkg.name}
                onClick={() => scrollToSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx
                    ? "w-7 bg-[#092328]"
                    : "w-2.5 bg-[#092328]/25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSlide(activeSlide + 1)}
            disabled={activeSlide === CAMPING_PACKAGES.length - 1}
            aria-label="Next package"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#092328] ring-1 ring-[#092328]/15 disabled:opacity-35 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
