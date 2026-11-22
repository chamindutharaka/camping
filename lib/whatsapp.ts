import { formatLKR } from "@/lib/format";
import { PricingResult } from "@/lib/pricing";

export const WHATSAPP_NUMBER = "94702156828";

export function buildWhatsAppMessage(params: {
  customerName: string;
  phone?: string;
  pickupDate: string;
  returnDate: string;
  eveningPickup: boolean;
  notes?: string;
  pricing: PricingResult;
}): string {
  const { customerName, phone, pickupDate, returnDate, eveningPickup, notes, pricing } =
    params;

  const lines: string[] = [
    "*Camping Gear Hub - Galle | Booking Request*",
    "",
    `*Customer Name:* ${customerName.trim()}`,
  ];

  if (phone && phone.trim()) {
    lines.push(`*Phone:* ${phone.trim()}`);
  }

  lines.push(
    `*Pick-up:* ${pickupDate}${
      eveningPickup ? " (Evening pickup — trip starts next morning)" : ""
    }`
  );
  lines.push(`*Return:* ${returnDate} (before 12:00 PM)`);
  lines.push(
    `*Duration:* ${pricing.effectiveDays} ${
      pricing.effectiveDays === 1 ? "day" : "days"
    } (${pricing.multiplier}× — ${pricing.tierLabel})`
  );
  lines.push("");
  lines.push("*Required Items:*");

  for (const item of pricing.lines) {
    const label = item.variantLabel ? `${item.name} (${item.variantLabel})` : item.name;
    if (item.isFlat) {
      lines.push(
        `- ${item.qty} × ${label} [${formatLKR(item.unitPrice)} flat/rental = ${formatLKR(
          item.lineTotal
        )}]`
      );
    } else {
      lines.push(
        `- ${item.qty} × ${label} [${formatLKR(item.unitPrice)} × ${
          item.multiplier
        }× = ${formatLKR(item.lineTotal)}]`
      );
    }
  }

  if (pricing.packageDiscount > 0 && pricing.activePackageName) {
    lines.push(
      `- Package Discount (${pricing.activePackageName}): − ${formatLKR(
        pricing.packageDiscount
      )}`
    );
  }

  lines.push("");
  lines.push(`*Estimated Rental Total:* ${formatLKR(pricing.grandTotal)}`);
  lines.push("*Advance Required:* LKR 500 (Will send receipt to confirm)");
  lines.push("*Deposit:* Refundable Cash / NIC / Driving License on collection");

  if (notes && notes.trim()) {
    lines.push(`*Notes:* ${notes.trim()}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
