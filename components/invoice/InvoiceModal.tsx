"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Printer, X } from "lucide-react";
import { DICTIONARY } from "@/data/i18n";
import { formatLKR, generateInvoiceNumber, getTodayISO } from "@/lib/format";
import { calculatePricing } from "@/lib/pricing";
import { useBookingStore } from "@/lib/store";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function InvoiceModal() {
  const [advancePaid, setAdvancePaid] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState("CGH-20260101-1000");

  const language = useBookingStore((s) => s.language);
  const entries = useBookingStore((s) => s.entries);
  const customerName = useBookingStore((s) => s.customerName);
  const phone = useBookingStore((s) => s.phone);
  const pickupDate = useBookingStore((s) => s.pickupDate);
  const returnDate = useBookingStore((s) => s.returnDate);
  const eveningPickup = useBookingStore((s) => s.eveningPickup);
  const activePackageId = useBookingStore((s) => s.activePackageId);
  const isInvoiceOpen = useBookingStore((s) => s.isInvoiceOpen);
  const setInvoiceOpen = useBookingStore((s) => s.setInvoiceOpen);

  const todayISO = getTodayISO();

  useEffect(() => {
    if (isInvoiceOpen) {
      setInvoiceNo(generateInvoiceNumber(todayISO));
    }
  }, [isInvoiceOpen, todayISO]);

  useEffect(() => {
    if (!isInvoiceOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInvoiceOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isInvoiceOpen, setInvoiceOpen]);

  const t = DICTIONARY[language];
  const pricing = useMemo(
    () =>
      calculatePricing({
        entries,
        pickupDate,
        returnDate,
        eveningPickup,
        activePackageId,
      }),
    [entries, pickupDate, returnDate, eveningPickup, activePackageId]
  );

  const balanceDue = advancePaid
    ? pricing.balanceIfAdvancePaid
    : pricing.grandTotal;

  return (
    <AnimatePresence>
      {isInvoiceOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.invoice.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setInvoiceOpen(false)}
            className="no-print fixed inset-0 bg-black/70 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="print-only-container relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Modal Controls (hidden on print) */}
            <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#092328]/12 pb-4">
              <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold text-[#092328]">
                <input
                  type="checkbox"
                  checked={advancePaid}
                  onChange={(e) => setAdvancePaid(e.target.checked)}
                  className="h-4 w-4 rounded accent-[#12544F]"
                />
                <span>{t.invoice.markAdvancePaid}</span>
              </label>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-[#092328] px-4 py-2 text-xs font-bold text-white hover:bg-[#12544F] cursor-pointer"
                >
                  <Printer className="h-4 w-4" />
                  <span>{t.invoice.printBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInvoiceOpen(false)}
                  aria-label={t.invoice.closeBtn}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f9f7] text-[#092328] hover:bg-[#8BBB92]/25 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Printable Invoice Sheet */}
            <div className="space-y-6 text-[#092328]">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#092328]/12 pb-5">
                <div className="flex items-center gap-3">
                  <BrandLogo size={52} />
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#092328]">
                      {t.brand.name}
                    </h2>
                    <p className="text-xs text-black/60">{t.brand.location}</p>
                    <p className="text-xs font-semibold text-[#12544F]">
                      Call / WhatsApp: {t.brand.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wider text-black/45">
                    {t.invoice.title}
                  </p>
                  <p className="mt-1 font-mono text-sm font-bold text-[#092328]">
                    {invoiceNo}
                  </p>
                  <p className="text-xs text-black/55">
                    {t.invoice.issueDate}: {todayISO}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 rounded-2xl bg-[#f6f9f7] p-4 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/50">
                    {t.invoice.billedTo}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#092328]">
                    {customerName.trim() || "Walk-in / Customer"}
                  </p>
                  {phone.trim() && (
                    <p className="text-xs text-black/65">{phone.trim()}</p>
                  )}
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-black/50">
                    {t.invoice.rentalPeriod}
                  </p>
                  <p className="mt-1 text-xs text-black/75">
                    <strong>{t.invoice.pickup}:</strong> {pickupDate}
                    {eveningPickup ? " (Evening pickup)" : ""}
                  </p>
                  <p className="text-xs text-black/75">
                    <strong>{t.invoice.returnText}:</strong> {returnDate}
                  </p>
                  <p className="text-xs font-semibold text-[#12544F]">
                    {t.invoice.duration}: {pricing.effectiveDays}{" "}
                    {pricing.effectiveDays === 1 ? "day" : "days"} ({pricing.multiplier}×)
                  </p>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#092328]/15 text-black/55">
                      <th className="py-2.5 font-semibold">{t.invoice.itemCol}</th>
                      <th className="py-2.5 text-right font-semibold">
                        {t.invoice.baseRateCol}
                      </th>
                      <th className="py-2.5 text-center font-semibold">
                        {t.invoice.qtyCol}
                      </th>
                      <th className="py-2.5 text-right font-semibold">
                        {t.invoice.tierCol}
                      </th>
                      <th className="py-2.5 text-right font-semibold">
                        {t.invoice.amountCol}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#092328]/8">
                    {pricing.lines.map((line) => (
                      <tr key={line.key}>
                        <td className="py-2.5 font-medium text-[#092328]">
                          {line.name}
                          {line.variantLabel ? ` (${line.variantLabel})` : ""}
                          {line.includesFreeKit && (
                            <span className="block text-[10px] text-[#2A835F]">
                              + Free Rain Cover & Ground Sheet
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 text-right">
                          {formatLKR(line.unitPrice)}
                        </td>
                        <td className="py-2.5 text-center font-semibold">
                          {line.qty}
                        </td>
                        <td className="py-2.5 text-right">
                          {line.isFlat ? t.invoice.flatTier : `${line.multiplier}×`}
                        </td>
                        <td className="py-2.5 text-right font-bold text-[#092328]">
                          {formatLKR(line.lineTotal)}
                        </td>
                      </tr>
                    ))}

                    {pricing.packageDiscount > 0 && pricing.activePackageName && (
                      <tr className="bg-[#8BBB92]/20 text-[#12544F]">
                        <td colSpan={4} className="py-2.5 font-semibold">
                          {t.invoice.packageDiscount} ({pricing.activePackageName})
                        </td>
                        <td className="py-2.5 text-right font-bold">
                          − {formatLKR(pricing.packageDiscount)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex flex-col items-end space-y-1.5 border-t border-[#092328]/15 pt-4 text-sm">
                <div className="flex w-full max-w-xs justify-between">
                  <span className="text-black/65">{t.invoice.subtotal}</span>
                  <span className="font-bold text-[#092328]">
                    {formatLKR(pricing.grandTotal)}
                  </span>
                </div>
                {advancePaid && (
                  <div className="flex w-full max-w-xs justify-between text-[#2A835F]">
                    <span>{t.invoice.advanceRequired}</span>
                    <span className="font-semibold">− LKR 500</span>
                  </div>
                )}
                <div className="flex w-full max-w-xs justify-between border-t border-[#092328]/15 pt-2 text-base font-extrabold text-[#092328]">
                  <span>{t.invoice.balanceDue}</span>
                  <span>{formatLKR(balanceDue)}</span>
                </div>
              </div>

              {/* Policy Footer */}
              <div className="rounded-xl border border-[#092328]/12 bg-[#f6f9f7] p-4 text-[11px] leading-relaxed text-black/70">
                <p className="font-bold text-[#092328]">
                  {t.invoice.policyHeading}
                </p>
                <p className="mt-1">
                  Refundable deposit (Cash, NIC, or Driving License) required on collection.
                  LKR 500 advance reserves items; orders without advance are subject to day-of
                  availability. Please return all items before 12:00 PM on the return date.
                </p>
                <p className="mt-1.5 font-medium text-[#092328]">
                  {t.booking.sinhalaNotice}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
