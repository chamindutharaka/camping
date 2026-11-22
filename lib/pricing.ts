import { getItemById } from "@/data/items";
import { getPackageById } from "@/data/packages";
import { diffDaysISO } from "@/lib/format";

export const ADVANCE_AMOUNT = 500;

export interface CartEntry {
  key: string; // e.g. "tent-4-auto" or "gas-stove:pro"
  itemId: string;
  variantId?: string;
  qty: number;
}

export interface PricedLineItem {
  key: string;
  itemId: string;
  name: string;
  variantLabel?: string;
  unitPrice: number;
  qty: number;
  isFlat: boolean;
  includesFreeKit: boolean;
  multiplier: number;
  lineTotal: number;
  fullPriceTotal: number;
}

export interface PricingResult {
  calendarDays: number;
  effectiveDays: number;
  multiplier: number;
  tierLabel: string;
  lines: PricedLineItem[];
  subtotal: number;
  packageDiscount: number;
  activePackageName: string | null;
  grandTotal: number;
  fullPriceTotal: number;
  youSave: number;
  advanceRequired: number;
  balanceIfAdvancePaid: number;
}

export function getMultiplier(effectiveDays: number): number {
  const safeDays = Math.max(1, effectiveDays);
  return 1 + (safeDays - 1) * 0.5;
}

export function getTierLabel(effectiveDays: number, multiplier: number): string {
  if (effectiveDays <= 1) {
    return "1st day full rate";
  }
  const extra = effectiveDays - 1;
  return `1st day full + ${extra} extra ${extra === 1 ? "day" : "days"} at 50% (${multiplier}×)`;
}

export function calculatePricing(params: {
  entries: CartEntry[];
  pickupDate: string;
  returnDate: string;
  eveningPickup: boolean;
  activePackageId: string | null;
}): PricingResult {
  const rawDiff = diffDaysISO(params.pickupDate, params.returnDate);
  const calendarDays = Math.max(1, rawDiff);
  const effectiveDays = params.eveningPickup
    ? Math.max(1, calendarDays - 1)
    : calendarDays;
  const multiplier = getMultiplier(effectiveDays);
  const tierLabel = getTierLabel(effectiveDays, multiplier);

  const lines: PricedLineItem[] = [];
  let subtotal = 0;
  let fullPriceTotal = 0;

  for (const entry of params.entries) {
    if (entry.qty <= 0) continue;
    const item = getItemById(entry.itemId);
    if (!item) continue;

    let unitPrice = item.price;
    let variantLabel: string | undefined;

    if (item.variants && item.variants.length > 0) {
      const chosen =
        item.variants.find((v) => v.id === entry.variantId) ?? item.variants[0];
      unitPrice = chosen.price;
      variantLabel = chosen.labelEn;
    }

    const isFlat = Boolean(item.isFlat);
    const lineMultiplier = isFlat ? 1 : multiplier;
    const lineTotal = isFlat
      ? Math.round(unitPrice * entry.qty)
      : Math.round(unitPrice * entry.qty * multiplier);
    const lineFullPrice = isFlat
      ? Math.round(unitPrice * entry.qty)
      : Math.round(unitPrice * entry.qty * effectiveDays);

    subtotal += lineTotal;
    fullPriceTotal += lineFullPrice;

    lines.push({
      key: entry.key,
      itemId: item.id,
      name: item.name,
      variantLabel,
      unitPrice,
      qty: entry.qty,
      isFlat,
      includesFreeKit: Boolean(item.includesFreeKit),
      multiplier: lineMultiplier,
      lineTotal,
      fullPriceTotal: lineFullPrice,
    });
  }

  let packageDiscount = 0;
  let activePackageName: string | null = null;
  if (params.activePackageId && lines.length > 0) {
    const pkg = getPackageById(params.activePackageId);
    if (pkg) {
      packageDiscount = Math.max(0, pkg.regularFirstDayTotal - pkg.packagePrice);
      activePackageName = pkg.name;
    }
  }

  const grandTotal = Math.max(0, subtotal - packageDiscount);
  const multiDaySavings = Math.max(0, fullPriceTotal - subtotal);
  const youSave = multiDaySavings + packageDiscount;
  const advanceRequired = lines.length > 0 ? ADVANCE_AMOUNT : 0;
  const balanceIfAdvancePaid = Math.max(0, grandTotal - advanceRequired);

  return {
    calendarDays,
    effectiveDays,
    multiplier,
    tierLabel,
    lines,
    subtotal,
    packageDiscount,
    activePackageName,
    grandTotal,
    fullPriceTotal,
    youSave,
    advanceRequired,
    balanceIfAdvancePaid,
  };
}
