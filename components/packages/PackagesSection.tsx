"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";
import { CAMPING_PACKAGES } from "@/data/packages";
import { getItemById } from "@/data/items";
import { PACKAGE_IMAGES } from "@/data/images";
import { DICTIONARY } from "@/data/i18n";
import { formatLKR } from "@/lib/format";
import { useBookingStore } from "@/lib/store";
import { SmartImage } from "@/components/ui/SmartImage";

export function PackagesSection() {
  const prefersReduced = useReducedMotion();
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

  return (
    <section
      id="packages"
      className="no-print relative bg-[#DAF1DE] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#235347]">
            {t.packages.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#020D0D] sm:text-4xl">
            {t.packages.title}
          </h2>
          <p className="mt-3 text-base text-[#163832]">
            {t.packages.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-[#F4FBF5] transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-[#235347] shadow-lg shadow-[#020D0D]/14"
                    : "ring-1 ring-[#051F20]/12 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#020D0D]/10"
                }`}
              >
                {/* Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-[#051F20]">
                  <SmartImage
                    src={img?.src ?? ""}
                    alt={img?.alt ?? pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020D0D]/95 via-[#051F20]/45 to-transparent" />

                  {pkg.popular && (
                    <span className="absolute top-4 left-4 rounded-full bg-[#DAF1DE] px-3 py-1 text-xs font-bold text-[#020D0D]">
                      {t.packages.popularBadge}
                    </span>
                  )}

                  <span className="absolute top-4 right-4 rounded-full border border-[#8EB69B]/35 bg-[#051F20]/80 px-2.5 py-1 text-xs font-semibold text-[#DAF1DE] backdrop-blur-md">
                    {pkg.peopleCount} {t.packages.peopleSuffix}
                  </span>

                  <div className="absolute inset-x-5 bottom-4">
                    <h3 className="font-display text-2xl font-bold text-[#F4FBF5]">
                      {language === "si" ? pkg.nameSi : pkg.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#8EB69B]">
                      {language === "si" ? pkg.subtitleSi : pkg.subtitleEn}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#051F20]/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#163832]/55 line-through">
                          {formatLKR(pkg.regularFirstDayTotal)}
                        </span>
                        <span className="rounded-full bg-[#DAF1DE] px-2.5 py-0.5 text-[11px] font-bold text-[#163832] ring-1 ring-[#8EB69B]/50">
                          {t.packages.savePrefix} {formatLKR(savings)}
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="font-display text-3xl font-bold text-[#020D0D]">
                          {formatLKR(pkg.packagePrice)}
                        </span>
                        <span className="text-xs font-medium text-[#163832]/70">
                          {t.packages.firstDayLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-4 flex-1 space-y-2 text-sm text-[#051F20]/90">
                    {pkg.items.map((ref) => {
                      const item = getItemById(ref.itemId);
                      return (
                        <li key={ref.itemId} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#235347]" />
                          <span>
                            {ref.qty}× {item?.name ?? ref.itemId}
                          </span>
                        </li>
                      );
                    })}
                    <li className="flex items-start gap-2.5 pt-1 font-semibold text-[#163832]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#163832]" />
                      <span>{t.packages.freeKitNote}</span>
                    </li>
                  </ul>

                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSelect(pkg.id)}
                    className={`mt-6 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition cursor-pointer ${
                      isSelected
                        ? "bg-[#235347] text-[#F4FBF5]"
                        : "bg-[#0B2B26] text-[#DAF1DE] hover:bg-[#163832]"
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
      </div>
    </section>
  );
}
