"use client";

import { motion, useReducedMotion } from "motion/react";
import { DICTIONARY } from "@/data/i18n";
import { useBookingStore } from "@/lib/store";

const DAYS_DATA = [
  { day: 1, ourMult: 1, fullMult: 1 },
  { day: 2, ourMult: 1.5, fullMult: 2 },
  { day: 3, ourMult: 2, fullMult: 3 },
  { day: 4, ourMult: 2.5, fullMult: 4 },
  { day: 5, ourMult: 3, fullMult: 5 },
];

export function PricingExplainer() {
  const prefersReduced = useReducedMotion();
  const language = useBookingStore((s) => s.language);
  const t = DICTIONARY[language];

  const steps = [
    { num: "01", title: t.howItWorks.step1Title, desc: t.howItWorks.step1Desc },
    { num: "02", title: t.howItWorks.step2Title, desc: t.howItWorks.step2Desc },
    { num: "03", title: t.howItWorks.step3Title, desc: t.howItWorks.step3Desc },
  ];

  return (
    <section
      id="pricing"
      className="no-print relative overflow-hidden bg-[#051F20] py-16 text-white sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Animated Bar Chart */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8EB69B]">
              {t.pricingExplainer.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.pricingExplainer.title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#DAF1DE]/80">
              {t.pricingExplainer.subtitle}
            </p>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-5 text-xs font-medium text-[#DAF1DE]/85">
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#8EB69B]" />
                {t.pricingExplainer.ourPriceLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm border border-dashed border-[#8EB69B]/45 bg-white/5" />
                {t.pricingExplainer.fullPriceLabel}
              </span>
            </div>

            {/* Bars */}
            <div className="mt-8 grid grid-cols-5 items-end gap-3 rounded-3xl border border-[#8EB69B]/20 bg-[#0B2B26]/80 p-5 sm:gap-5 sm:p-7">
              {DAYS_DATA.map((d, idx) => {
                const ourHeight = (d.ourMult / 5) * 100;
                const fullHeight = (d.fullMult / 5) * 100;
                return (
                  <div key={d.day} className="flex flex-col items-center">
                    <div className="relative flex h-44 w-full items-end justify-center sm:h-52">
                      {/* Ghost full-price bar */}
                      <div
                        style={{ height: `${fullHeight}%` }}
                        className="absolute bottom-0 w-10 rounded-t-xl border border-dashed border-[#8EB69B]/35 bg-white/4 sm:w-12"
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-[#8EB69B]/75">
                          {d.fullMult}×
                        </span>
                      </div>

                      {/* Animated actual rate bar */}
                      <motion.div
                        initial={prefersReduced ? { height: `${ourHeight}%` } : { height: 0 }}
                        whileInView={{ height: `${ourHeight}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.55,
                          delay: idx * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10 flex w-10 items-start justify-center rounded-t-xl bg-gradient-to-t from-[#235347] via-[#8EB69B] to-[#DAF1DE] pt-2 sm:w-12"
                      >
                        <span className="text-xs font-extrabold text-[#051F20]">
                          {d.ourMult}×
                        </span>
                      </motion.div>
                    </div>
                    <span className="mt-3 text-xs font-semibold text-[#DAF1DE]">
                      {t.pricingExplainer.dayLabel} {d.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Trip Example Card */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-[#8EB69B]/30 bg-[#0B2B26] p-7">
              <span className="inline-block rounded-full bg-[#163832] px-3 py-1 text-xs font-bold text-[#DAF1DE]">
                {t.pricingExplainer.exampleBadge}
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold text-white">
                {t.pricingExplainer.exampleHeading}
              </h3>
              <p className="mt-3 text-3xl font-extrabold text-[#DAF1DE]">
                {t.pricingExplainer.exampleBody}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-sm text-[#8EB69B]/70 line-through">
                  {t.pricingExplainer.exampleInstead}
                </span>
                <span className="rounded-full bg-[#235347] px-3 py-1 text-xs font-bold text-[#DAF1DE]">
                  {t.pricingExplainer.exampleSave}
                </span>
              </div>
              <p className="mt-5 border-t border-[#8EB69B]/20 pt-4 text-xs leading-relaxed text-[#8EB69B]">
                {t.booking.eveningPickupLabel}: {t.booking.eveningPickupHint}
              </p>
            </div>
          </motion.div>
        </div>

        {/* How It Works 3 Steps */}
        <div className="mt-20 border-t border-[#8EB69B]/20 pt-14">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8EB69B]">
              {t.howItWorks.eyebrow}
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-white sm:text-3xl">
              {t.howItWorks.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-3xl border border-[#8EB69B]/20 bg-[#0B2B26]/70 p-6"
              >
                <span className="font-display text-2xl font-bold text-[#8EB69B]">
                  {step.num}
                </span>
                <h3 className="font-display mt-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#DAF1DE]/80">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
