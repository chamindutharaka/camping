"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const language = useBookingStore((s) => s.language);
  const setLanguage = useBookingStore((s) => s.setLanguage);
  const entries = useBookingStore((s) => s.entries);
  const setDrawerOpen = useBookingStore((s) => s.setDrawerOpen);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = DICTIONARY[language];
  const totalCount = mounted
    ? entries.reduce((sum, item) => sum + item.qty, 0)
    : 0;

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 py-2.5 shadow-xs backdrop-blur-md border-b border-black/10"
          : "bg-gradient-to-b from-[#111613]/75 to-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5C36]"
        >
          <BrandLogo
            size={38}
            className={scrolled ? "ring-1 ring-black/12 bg-white" : "ring-1 ring-white/40 bg-white"}
          />
          <div>
            <span
              className={`font-display text-base font-bold tracking-tight sm:text-lg ${
                scrolled ? "text-[#111613]" : "text-white"
              }`}
            >
              {t.brand.shortName}
            </span>
            <span
              className={`block text-[11px] font-medium ${
                scrolled ? "text-[#0A5C36]" : "text-[#D1E7DA]"
              }`}
            >
              Galle · {t.brand.tagline}
            </span>
          </div>
        </a>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-7 text-sm font-medium md:flex ${
            scrolled ? "text-[#111613]/80" : "text-white/90"
          }`}
        >
          <a href="#packages" className="hover:text-[#0A5C36] transition-colors">
            {t.nav.packages}
          </a>
          <a href="#gear" className="hover:text-[#0A5C36] transition-colors">
            {t.nav.gear}
          </a>
          <a href="#pricing" className="hover:text-[#0A5C36] transition-colors">
            {t.nav.pricing}
          </a>
          <a href="#policy" className="hover:text-[#0A5C36] transition-colors">
            {t.nav.policy}
          </a>
          <a href="#faq" className="hover:text-[#0A5C36] transition-colors">
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:0702156828"
            className={`hidden items-center rounded-full px-3.5 py-2 text-xs font-semibold transition-colors lg:inline-flex ${
              scrolled
                ? "bg-[#EBF5EF] text-[#0A5C36] hover:bg-[#D1E7DA]"
                : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            {t.brand.phoneDisplay}
          </a>

          <div
            role="group"
            aria-label="Language switch"
            className={`flex items-center rounded-full p-0.5 text-xs font-semibold ${
              scrolled
                ? "bg-black/6 text-[#111613]"
                : "bg-white/15 text-white backdrop-blur-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`min-h-[34px] rounded-full px-2.5 transition-colors cursor-pointer ${
                language === "en"
                  ? "bg-[#111613] text-white"
                  : "hover:opacity-80"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("si")}
              className={`min-h-[34px] rounded-full px-2.5 transition-colors cursor-pointer ${
                language === "si"
                  ? "bg-[#111613] text-white"
                  : "hover:opacity-80"
              }`}
            >
              සිං
            </button>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={() => setDrawerOpen(true)}
            className="relative inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[#0A5C36] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#0D7043] cursor-pointer lg:hidden"
            aria-label={t.nav.cart}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>{t.nav.cart}</span>
            {totalCount > 0 && (
              <motion.span
                key={totalCount}
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-bold text-[#111613]"
              >
                {totalCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
