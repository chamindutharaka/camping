"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";

export function PolicyAndFaqSection() {
  const prefersReduced = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const language = useBookingStore((s) => s.language);
  const t = DICTIONARY[language];

  return (
    <>
      {/* Policy & Confirmation */}
      <section id="policy" className="no-print bg-[#DAF1DE]/35 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#235347]">
              {t.policy.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#051F20] sm:text-4xl">
              {t.policy.title}
            </h2>
            <p className="mt-3 text-base text-[#163832]/80">{t.policy.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.policy.items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-3xl bg-white p-6 ring-1 ring-[#051F20]/10"
              >
                <h3 className="font-display text-lg font-bold text-[#051F20]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#163832]/80">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="no-print bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#235347]">
              {t.faq.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#051F20] sm:text-4xl">
              {t.faq.title}
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {t.faq.items.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl bg-[#DAF1DE]/35 ring-1 ring-[#051F20]/10"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-bold text-[#051F20] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#163832] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#163832]/85">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
