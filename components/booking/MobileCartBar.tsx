"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronUp, ShoppingBag, X } from "lucide-react";
import { DICTIONARY } from "@/data/i18n";
import { calculatePricing } from "@/lib/pricing";
import { useBookingStore } from "@/lib/store";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { BookingPanel } from "@/components/booking/BookingPanel";

export function MobileCartBar() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const language = useBookingStore((s) => s.language);
  const entries = useBookingStore((s) => s.entries);
  const pickupDate = useBookingStore((s) => s.pickupDate);
  const returnDate = useBookingStore((s) => s.returnDate);
  const eveningPickup = useBookingStore((s) => s.eveningPickup);
  const activePackageId = useBookingStore((s) => s.activePackageId);
  const isDrawerOpen = useBookingStore((s) => s.isDrawerOpen);
  const setDrawerOpen = useBookingStore((s) => s.setDrawerOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen, setDrawerOpen]);

  const t = DICTIONARY[language];
  const pricing = useMemo(
    () =>
      calculatePricing({
        entries: mounted ? entries : [],
        pickupDate,
        returnDate,
        eveningPickup,
        activePackageId,
      }),
    [mounted, entries, pickupDate, returnDate, eveningPickup, activePackageId]
  );

  const totalCount = pricing.lines.reduce((s, l) => s + l.qty, 0);

  return (
    <>
      {/* Sticky Bottom Bar on Mobile */}
      <div className="no-print fixed inset-x-0 bottom-0 z-40 p-3 lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex min-h-[56px] w-full items-center justify-between rounded-2xl bg-[#051F20]/95 px-4 py-3 text-[#F4FBF5] shadow-2xl shadow-[#020D0D]/50 backdrop-blur-md ring-1 ring-[#8EB69B]/30 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#163832] text-[#DAF1DE]">
              <ShoppingBag className="h-5 w-5" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#DAF1DE] px-1 text-[11px] font-extrabold text-[#020D0D]">
                  {totalCount}
                </span>
              )}
            </div>
            <div className="text-left">
              <p className="text-xs text-[#8EB69B]">
                {totalCount} {t.booking.itemsSelected}
              </p>
              <AnimatedNumber
                value={pricing.grandTotal}
                className="font-display text-lg font-bold text-[#DAF1DE]"
              />
            </div>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full bg-[#235347] px-4 py-2 text-xs font-bold text-[#F4FBF5]">
            <span>{t.nav.cart}</span>
            <ChevronUp className="h-4 w-4" />
          </span>
        </button>
      </div>

      {/* Bottom Sheet Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.booking.drawerTitle}
            className="no-print fixed inset-0 z-50 flex items-end justify-center lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-[#020D0D]/70 backdrop-blur-xs"
            />
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { y: "100%" }}
              animate={prefersReduced ? { opacity: 1 } : { y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { y: "100%" }}
              transition={{ type: "spring", stiffness: 360, damping: 34 }}
              className="relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-t-[28px] bg-[#F4FBF5] p-5 pb-8 shadow-2xl"
            >
              <div className="mb-3 flex justify-center">
                <span className="h-1.5 w-12 rounded-full bg-[#051F20]/20" />
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close booking drawer"
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#DAF1DE] text-[#051F20] hover:bg-[#8EB69B]/50 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <BookingPanel onCloseDrawer={() => setDrawerOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
