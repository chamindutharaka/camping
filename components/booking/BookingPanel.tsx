"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertCircle,
  Check,
  Copy,
  FileText,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { DICTIONARY } from "@/data/i18n";
import { formatLKR, getTodayISO } from "@/lib/format";
import { calculatePricing } from "@/lib/pricing";
import { useBookingStore } from "@/lib/store";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

interface BookingPanelProps {
  onCloseDrawer?: () => void;
}

export function BookingPanel({ onCloseDrawer }: BookingPanelProps) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const language = useBookingStore((s) => s.language);
  const entries = useBookingStore((s) => s.entries);
  const activePackageId = useBookingStore((s) => s.activePackageId);
  const packageEditedWarning = useBookingStore((s) => s.packageEditedWarning);
  const customerName = useBookingStore((s) => s.customerName);
  const phone = useBookingStore((s) => s.phone);
  const pickupDate = useBookingStore((s) => s.pickupDate);
  const returnDate = useBookingStore((s) => s.returnDate);
  const eveningPickup = useBookingStore((s) => s.eveningPickup);
  const notes = useBookingStore((s) => s.notes);

  const setItemQty = useBookingStore((s) => s.setItemQty);
  const clearCart = useBookingStore((s) => s.clearCart);
  const setCustomerName = useBookingStore((s) => s.setCustomerName);
  const setPhone = useBookingStore((s) => s.setPhone);
  const setPickupDate = useBookingStore((s) => s.setPickupDate);
  const setReturnDate = useBookingStore((s) => s.setReturnDate);
  const setCalendarDays = useBookingStore((s) => s.setCalendarDays);
  const setEveningPickup = useBookingStore((s) => s.setEveningPickup);
  const setNotes = useBookingStore((s) => s.setNotes);
  const setInvoiceOpen = useBookingStore((s) => s.setInvoiceOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = DICTIONARY[language];
  const todayISO = getTodayISO();

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

  const validate = (): boolean => {
    const nextErrors: string[] = [];
    if (pricing.lines.length === 0) {
      nextErrors.push(t.booking.errors.noItems);
    }
    if (!customerName.trim()) {
      nextErrors.push(t.booking.errors.noName);
    }
    if (!pickupDate || !returnDate) {
      nextErrors.push(t.booking.errors.invalidDates);
    } else if (returnDate <= pickupDate) {
      nextErrors.push(t.booking.errors.returnBeforePickup);
    }
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;
    const msg = buildWhatsAppMessage({
      customerName,
      phone,
      pickupDate,
      returnDate,
      eveningPickup,
      notes,
      pricing,
    });
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  const handleCopyText = async () => {
    if (!validate()) return;
    const msg = buildWhatsAppMessage({
      customerName,
      phone,
      pickupDate,
      returnDate,
      eveningPickup,
      notes,
      pricing,
    });
    try {
      await navigator.clipboard.writeText(msg);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleOpenInvoice = () => {
    if (pricing.lines.length === 0) {
      setErrors([t.booking.errors.noItems]);
      return;
    }
    setErrors([]);
    setInvoiceOpen(true);
  };

  const totalQty = pricing.lines.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="flex flex-col gap-5">
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-[#051F20]/12 pb-3.5">
        <div>
          <h3 className="font-display text-lg font-bold text-[#020D0D]">
            {t.booking.drawerTitle}
          </h3>
          <p className="text-xs text-[#163832]/70">
            {totalQty} {t.booking.itemsSelected}
          </p>
        </div>
        {totalQty > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#163832]/75 hover:bg-red-50 hover:text-red-700 cursor-pointer"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>{t.booking.clearCartBtn}</span>
          </button>
        )}
      </div>

      {/* Package Badge / Warning */}
      {pricing.activePackageName && (
        <div className="flex items-center justify-between rounded-2xl bg-[#DAF1DE] px-3.5 py-2.5 text-xs font-semibold text-[#020D0D] ring-1 ring-[#8EB69B]">
          <span>
            {t.booking.packageActive}: {pricing.activePackageName}
          </span>
          <span className="text-[#163832]">
            −{formatLKR(pricing.packageDiscount)}
          </span>
        </div>
      )}

      {packageEditedWarning && !pricing.activePackageName && totalQty > 0 && (
        <p className="rounded-xl bg-[#DAF1DE]/60 px-3 py-2 text-xs font-medium text-[#163832] ring-1 ring-[#8EB69B]/50">
          {t.booking.packageRemovedNote}
        </p>
      )}

      {/* Cart Items or Empty State */}
      {pricing.lines.length === 0 ? (
        <div className="rounded-2xl bg-[#DAF1DE]/55 p-6 text-center ring-1 ring-[#051F20]/10">
          <p className="font-display text-base font-bold text-[#020D0D]">
            {t.booking.emptyCartTitle}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#163832]/80">
            {t.booking.emptyCartDesc}
          </p>
          <a
            href="#gear"
            onClick={onCloseDrawer}
            className="mt-4 inline-flex min-h-[40px] items-center rounded-full bg-[#0B2B26] px-4 py-2 text-xs font-bold text-[#F4FBF5] hover:bg-[#163832]"
          >
            {t.booking.browseGearBtn}
          </a>
        </div>
      ) : (
        <div className="max-h-56 space-y-2 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {pricing.lines.map((line) => (
              <motion.div
                key={line.key}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center justify-between gap-2 rounded-2xl bg-[#DAF1DE]/50 px-3.5 py-2.5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#020D0D]">
                    {line.name}
                  </p>
                  <p className="text-[11px] text-[#163832]/75">
                    {line.variantLabel ? `${line.variantLabel} · ` : ""}
                    {line.isFlat
                      ? `${formatLKR(line.unitPrice)} flat`
                      : `${formatLKR(line.unitPrice)} × ${line.multiplier}×`}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-full bg-[#F4FBF5] ring-1 ring-[#051F20]/15">
                    <button
                      type="button"
                      aria-label={`Remove one ${line.name}`}
                      onClick={() =>
                        setItemQty(
                          line.itemId,
                          line.qty - 1,
                          line.key.includes(":")
                            ? line.key.split(":")[1]
                            : undefined
                        )
                      }
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[#051F20] hover:bg-[#DAF1DE] cursor-pointer"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="min-w-[18px] text-center text-xs font-bold text-[#020D0D]">
                      {line.qty}
                    </span>
                    <button
                      type="button"
                      aria-label={`Add one ${line.name}`}
                      onClick={() =>
                        setItemQty(
                          line.itemId,
                          line.qty + 1,
                          line.key.includes(":")
                            ? line.key.split(":")[1]
                            : undefined
                        )
                      }
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[#051F20] hover:bg-[#DAF1DE] cursor-pointer"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="min-w-[74px] text-right text-xs font-bold text-[#020D0D]">
                    {formatLKR(line.lineTotal)}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Booking Form */}
      <div className="space-y-3 border-t border-[#051F20]/12 pt-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div>
            <label
              htmlFor="cgh-name"
              className="block text-xs font-semibold text-[#051F20]"
            >
              {t.booking.nameLabel} *
            </label>
            <input
              id="cgh-name"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder={t.booking.namePlaceholder}
              className="mt-1 min-h-[42px] w-full rounded-xl border border-[#051F20]/20 bg-white px-3 text-sm text-[#020D0D] focus:border-[#163832] focus:outline-none focus:ring-2 focus:ring-[#235347]/20"
            />
          </div>
          <div>
            <label
              htmlFor="cgh-phone"
              className="block text-xs font-semibold text-[#051F20]"
            >
              {t.booking.phoneLabel}
            </label>
            <input
              id="cgh-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.booking.phonePlaceholder}
              className="mt-1 min-h-[42px] w-full rounded-xl border border-[#051F20]/20 bg-white px-3 text-sm text-[#020D0D] focus:border-[#163832] focus:outline-none focus:ring-2 focus:ring-[#235347]/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="cgh-pickup"
              className="block text-xs font-semibold text-[#051F20]"
            >
              {t.booking.pickupLabel}
            </label>
            <input
              id="cgh-pickup"
              type="date"
              min={todayISO}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="mt-1 min-h-[42px] w-full rounded-xl border border-[#051F20]/20 bg-white px-2.5 text-xs font-medium text-[#020D0D] focus:border-[#163832] focus:outline-none focus:ring-2 focus:ring-[#235347]/20"
            />
          </div>
          <div>
            <label
              htmlFor="cgh-return"
              className="block text-xs font-semibold text-[#051F20]"
            >
              {t.booking.returnLabel}
            </label>
            <input
              id="cgh-return"
              type="date"
              min={pickupDate}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="mt-1 min-h-[42px] w-full rounded-xl border border-[#051F20]/20 bg-white px-2.5 text-xs font-medium text-[#020D0D] focus:border-[#163832] focus:outline-none focus:ring-2 focus:ring-[#235347]/20"
            />
          </div>
        </div>

        {/* Days Stepper */}
        <div className="flex items-center justify-between rounded-xl bg-[#DAF1DE]/50 px-3.5 py-2">
          <div>
            <span className="text-xs font-semibold text-[#020D0D]">
              {t.booking.daysLabel}
            </span>
            <span className="block text-[11px] text-[#163832]/75">
              {pricing.effectiveDays}{" "}
              {pricing.effectiveDays === 1 ? "day" : "days"} billed (
              {pricing.multiplier}×)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Decrease rental days"
              onClick={() => setCalendarDays(pricing.calendarDays - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4FBF5] text-[#051F20] ring-1 ring-[#051F20]/15 hover:bg-[#DAF1DE] cursor-pointer"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="min-w-[26px] text-center text-sm font-bold text-[#020D0D]">
              {pricing.calendarDays}
            </span>
            <button
              type="button"
              aria-label="Increase rental days"
              onClick={() => setCalendarDays(pricing.calendarDays + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4FBF5] text-[#051F20] ring-1 ring-[#051F20]/15 hover:bg-[#DAF1DE] cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Evening Pickup */}
        <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-[#051F20]/15 bg-white p-3 hover:bg-[#DAF1DE]/35">
          <input
            type="checkbox"
            checked={eveningPickup}
            onChange={(e) => setEveningPickup(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded accent-[#163832]"
          />
          <span className="text-xs leading-snug text-[#163832]/85">
            <strong className="block font-semibold text-[#020D0D]">
              {t.booking.eveningPickupLabel}
            </strong>
            <span className="text-[11px] text-[#163832]/70">
              {t.booking.eveningPickupHint}
            </span>
          </span>
        </label>

        {/* Notes */}
        <div>
          <label
            htmlFor="cgh-notes"
            className="block text-xs font-semibold text-[#051F20]"
          >
            {t.booking.notesLabel}
          </label>
          <textarea
            id="cgh-notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t.booking.notesPlaceholder}
            className="mt-1 w-full rounded-xl border border-[#051F20]/20 bg-white px-3 py-2 text-xs text-[#020D0D] focus:border-[#163832] focus:outline-none focus:ring-2 focus:ring-[#235347]/20"
          />
        </div>
      </div>

      {/* Price Summary */}
      <div className="rounded-2xl bg-[#051F20] p-4 text-[#F4FBF5]">
        <div className="flex items-center justify-between text-xs text-[#8EB69B]">
          <span>{t.booking.subtotalLabel}</span>
          <span>{formatLKR(pricing.subtotal)}</span>
        </div>

        {pricing.packageDiscount > 0 && (
          <div className="mt-1.5 flex items-center justify-between text-xs font-semibold text-[#DAF1DE]">
            <span>{t.booking.packageDiscountLabel}</span>
            <span>− {formatLKR(pricing.packageDiscount)}</span>
          </div>
        )}

        <div className="mt-2.5 flex items-baseline justify-between border-t border-[#8EB69B]/20 pt-2.5">
          <span className="text-xs font-semibold text-[#DAF1DE]">
            {t.booking.totalLabel}
          </span>
          <AnimatedNumber
            value={pricing.grandTotal}
            className="font-display text-2xl font-bold text-[#DAF1DE]"
          />
        </div>

        {pricing.youSave > 0 && (
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-2 inline-block rounded-full bg-[#235347] px-2.5 py-0.5 text-[11px] font-bold text-[#DAF1DE]"
          >
            {t.booking.youSaveLabel}: {formatLKR(pricing.youSave)}
          </motion.div>
        )}

        <div className="mt-3 space-y-1 border-t border-[#8EB69B]/20 pt-2.5 text-[11px] text-[#8EB69B]">
          <div className="flex justify-between">
            <span>{t.booking.advanceLabel}</span>
            <span className="font-semibold text-[#F4FBF5]">
              {t.booking.advanceValue}
            </span>
          </div>
          <div className="flex justify-between">
            <span>{t.booking.depositLabel}</span>
            <span className="font-semibold text-[#F4FBF5]">
              {t.booking.depositValue}
            </span>
          </div>
          <p className="pt-1 text-[#DAF1DE]/90">{t.booking.returnBeforeNote}</p>
        </div>
      </div>

      {/* Validation Errors */}
      {errors.length > 0 && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700"
        >
          {errors.map((err) => (
            <p key={err} className="flex items-center gap-1.5 font-medium">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{err}</span>
            </p>
          ))}
        </div>
      )}

      {/* Exact Sinhala Notice */}
      <div className="rounded-xl border-l-4 border-[#163832] bg-[#DAF1DE]/65 p-3 text-[11px] leading-relaxed text-[#020D0D]">
        <p>{t.booking.sinhalaNotice}</p>
        <p className="mt-1 font-bold text-[#163832]">
          {t.booking.sinhalaCallNotice}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={handleSendWhatsApp}
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#163832] px-4 py-3 text-sm font-bold text-[#F4FBF5] transition hover:bg-[#235347] cursor-pointer"
        >
          <MessageCircle className="h-4 w-4" />
          <span>{t.booking.sendWhatsAppBtn}</span>
        </motion.button>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleCopyText}
            className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-[#051F20]/15 bg-[#F4FBF5] px-3 py-2 text-xs font-semibold text-[#051F20] hover:bg-[#DAF1DE]/60 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#235347]" />
                <span className="text-[#235347]">{t.booking.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>{t.booking.copyTextBtn}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleOpenInvoice}
            className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-[#051F20]/15 bg-[#F4FBF5] px-3 py-2 text-xs font-semibold text-[#051F20] hover:bg-[#DAF1DE]/60 cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{t.booking.invoiceBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
