"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Minus, Plus, Search, X } from "lucide-react";
import { CATEGORIES, CategoryFilter, GEAR_ITEMS, GearItem } from "@/data/items";
import { DICTIONARY } from "@/data/i18n";
import { formatLKR } from "@/lib/format";
import { makeEntryKey, useBookingStore } from "@/lib/store";

export function GearCatalog() {
  const prefersReduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({
    "gas-stove": "standard",
  });

  const language = useBookingStore((s) => s.language);
  const entries = useBookingStore((s) => s.entries);
  const incrementItem = useBookingStore((s) => s.incrementItem);
  const decrementItem = useBookingStore((s) => s.decrementItem);

  const t = DICTIONARY[language];

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return GEAR_ITEMS.filter((item) => {
      const catMatch =
        activeCategory === "all" || item.category === activeCategory;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.descriptionEn.toLowerCase().includes(q) ||
        item.descriptionSi.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery]);

  const getQty = (item: GearItem, variantId?: string) => {
    const key = makeEntryKey(item.id, variantId);
    return entries.find((e) => e.key === key)?.qty ?? 0;
  };

  return (
    <section id="gear" className="no-print bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#12544F]">
              {t.gear.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#092328] sm:text-4xl">
              {t.gear.title}
            </h2>
            <p className="mt-2.5 text-base text-black/65">{t.gear.subtitle}</p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-black/40" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.gear.searchPlaceholder}
              aria-label={t.gear.searchPlaceholder}
              className="min-h-[46px] w-full rounded-full border border-[#092328]/15 bg-[#f6f9f7] py-2.5 pr-10 pl-11 text-sm text-[#092328] placeholder:text-black/40 focus:border-[#12544F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2A835F]/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-black/45 hover:bg-black/10 hover:text-black cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Gear categories"
          className="mt-8 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  active
                    ? "text-white"
                    : "bg-[#f6f9f7] text-[#092328]/80 hover:bg-[#8BBB92]/20"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="gear-cat-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#092328]"
                  />
                )}
                <span className="relative z-10">
                  {language === "si" ? cat.labelSi : cat.labelEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filteredItems.length === 0 ? (
          <div className="mt-12 rounded-3xl bg-[#f6f9f7] p-10 text-center">
            <p className="font-display text-xl font-bold text-[#092328]">
              {t.gear.emptyTitle}
            </p>
            <p className="mt-1.5 text-sm text-black/60">
              {t.gear.emptySubtitle}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-[#092328] px-5 py-2 text-sm font-semibold text-white hover:bg-[#12544F] cursor-pointer"
            >
              {t.gear.clearSearch}
            </button>
          </div>
        ) : (
          <motion.div
            layout={!prefersReduced}
            className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const activeVariantId = item.variants
                  ? selectedVariants[item.id] ?? item.variants[0].id
                  : undefined;
                const activeVariant = item.variants?.find(
                  (v) => v.id === activeVariantId
                );
                const unitPrice = activeVariant?.price ?? item.price;
                const qty = getQty(item, activeVariantId);

                return (
                  <motion.article
                    key={item.id}
                    layout={!prefersReduced}
                    initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.22 }}
                    className={`flex flex-col rounded-2xl p-5 transition-all duration-200 ${
                      qty > 0
                        ? "bg-[#f6f9f7] ring-2 ring-[#2A835F]"
                        : "bg-white ring-1 ring-[#092328]/12 hover:ring-[#12544F]/40"
                    }`}
                  >
                    <div className="flex flex-1 flex-col">
                      {(item.includesFreeKit || item.isFlat) && (
                        <div className="mb-2.5 flex flex-wrap gap-1.5">
                          {item.includesFreeKit && (
                            <span className="inline-block rounded-full bg-[#8BBB92]/25 px-2.5 py-0.5 text-[11px] font-semibold text-[#12544F]">
                              {t.gear.freeKitBadge}
                            </span>
                          )}
                          {item.isFlat && (
                            <span className="inline-block rounded-full bg-[#092328] px-2.5 py-0.5 text-[11px] font-semibold text-[#8BBB92]">
                              {t.gear.flatBadge}
                            </span>
                          )}
                        </div>
                      )}

                      <h3 className="font-display text-lg font-bold text-[#092328]">
                        {language === "si" ? item.nameSi : item.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-black/60">
                        {language === "si"
                          ? item.descriptionSi
                          : item.descriptionEn}
                      </p>

                      {/* Variant Chips (Gas Stove) */}
                      {item.variants && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.variants.map((variant) => {
                            const selected = variant.id === activeVariantId;
                            return (
                              <button
                                key={variant.id}
                                type="button"
                                onClick={() =>
                                  setSelectedVariants((prev) => ({
                                    ...prev,
                                    [item.id]: variant.id,
                                  }))
                                }
                                className={`min-h-[34px] rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                                  selected
                                    ? "bg-[#092328] text-white"
                                    : "bg-[#f6f9f7] text-[#092328] ring-1 ring-[#092328]/15 hover:bg-[#8BBB92]/20"
                                }`}
                              >
                                {language === "si"
                                  ? variant.labelSi
                                  : variant.labelEn}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      <div className="mt-auto mt-4 flex items-end justify-between gap-3 border-t border-[#092328]/8 pt-4">
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="font-display text-xl font-bold text-[#092328]">
                              {formatLKR(unitPrice)}
                            </span>
                            {!item.isFlat && (
                              <span className="text-xs font-medium text-black/50">
                                {t.gear.perFirstDay}
                              </span>
                            )}
                          </div>
                          {item.isFlat ? (
                            <p className="text-[11px] font-medium text-[#12544F]">
                              {t.gear.flatNote}
                            </p>
                          ) : (
                            <p className="text-xs font-semibold text-[#2A835F]">
                              {t.gear.extraDayPrefix}
                              {formatLKR(unitPrice * 0.5)}
                              {t.gear.extraDaySuffix}
                            </p>
                          )}
                        </div>

                        {/* Add / Stepper */}
                        {qty === 0 ? (
                          <motion.button
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              incrementItem(item.id, activeVariantId)
                            }
                            className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-[#092328] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#12544F] cursor-pointer"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            <span>{t.gear.addBtn}</span>
                          </motion.button>
                        ) : (
                          <motion.div
                            initial={{ scale: 0.92 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 450, damping: 25 }}
                            className="flex items-center gap-1 rounded-full bg-[#12544F] p-1 text-white"
                          >
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name}`}
                              onClick={() =>
                                decrementItem(item.id, activeVariantId)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15 cursor-pointer"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-[22px] text-center text-xs font-bold">
                              {qty}
                            </span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name}`}
                              onClick={() =>
                                incrementItem(item.id, activeVariantId)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15 cursor-pointer"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
