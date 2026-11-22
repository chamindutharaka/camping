import { describe, expect, it } from "vitest";
import { calculatePricing, getMultiplier } from "@/lib/pricing";

describe("Camping Gear Hub pricing logic", () => {
  it("computes multipliers accurately", () => {
    expect(getMultiplier(1)).toBe(1);
    expect(getMultiplier(2)).toBe(1.5);
    expect(getMultiplier(3)).toBe(2);
    expect(getMultiplier(4)).toBe(2.5);
    expect(getMultiplier(5)).toBe(3);
  });

  it("matches the 4 Person Manual Tent 3-day trip example (LKR 1,800, save LKR 900)", () => {
    const res = calculatePricing({
      entries: [{ key: "tent-4-manual", itemId: "tent-4-manual", qty: 1 }],
      pickupDate: "2026-12-01",
      returnDate: "2026-12-04",
      eveningPickup: false,
      activePackageId: null,
    });

    expect(res.calendarDays).toBe(3);
    expect(res.effectiveDays).toBe(3);
    expect(res.multiplier).toBe(2);
    expect(res.grandTotal).toBe(1800);
    expect(res.fullPriceTotal).toBe(2700);
    expect(res.youSave).toBe(900);
  });

  it("never multiplies Gas Tin by days", () => {
    const res = calculatePricing({
      entries: [{ key: "gas-tin", itemId: "gas-tin", qty: 2 }],
      pickupDate: "2026-12-01",
      returnDate: "2026-12-05",
      eveningPickup: false,
      activePackageId: null,
    });

    expect(res.effectiveDays).toBe(4);
    expect(res.multiplier).toBe(2.5);
    expect(res.grandTotal).toBe(2000);
    expect(res.lines[0].isFlat).toBe(true);
    expect(res.lines[0].lineTotal).toBe(2000);
  });

  it("reduces effective days by 1 for evening pickup (min 1)", () => {
    const res = calculatePricing({
      entries: [{ key: "tent-4-auto", itemId: "tent-4-auto", qty: 1 }],
      pickupDate: "2026-12-01",
      returnDate: "2026-12-03",
      eveningPickup: true,
      activePackageId: null,
    });

    expect(res.calendarDays).toBe(2);
    expect(res.effectiveDays).toBe(1);
    expect(res.multiplier).toBe(1);
    expect(res.grandTotal).toBe(1200);

    const minOne = calculatePricing({
      entries: [{ key: "tent-4-auto", itemId: "tent-4-auto", qty: 1 }],
      pickupDate: "2026-12-01",
      returnDate: "2026-12-02",
      eveningPickup: true,
      activePackageId: null,
    });
    expect(minOne.effectiveDays).toBe(1);
  });

  it("applies Couple Pack 1st day price of LKR 3,000", () => {
    const res = calculatePricing({
      entries: [
        { key: "tent-4-auto", itemId: "tent-4-auto", qty: 1 },
        { key: "gas-stove:standard", itemId: "gas-stove", variantId: "standard", qty: 1 },
        { key: "gas-tin", itemId: "gas-tin", qty: 1 },
        { key: "camping-light", itemId: "camping-light", qty: 1 },
        { key: "cooking-ware-set", itemId: "cooking-ware-set", qty: 1 },
      ],
      pickupDate: "2026-12-01",
      returnDate: "2026-12-02",
      eveningPickup: false,
      activePackageId: "couple-pack",
    });

    expect(res.subtotal).toBe(3100);
    expect(res.packageDiscount).toBe(100);
    expect(res.grandTotal).toBe(3000);
    expect(res.youSave).toBe(100);
  });
});
