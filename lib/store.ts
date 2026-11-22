"use client";

import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { Language } from "@/data/i18n";
import { getPackageById } from "@/data/packages";
import { addDaysISO, getTodayISO } from "@/lib/format";
import { CartEntry } from "@/lib/pricing";

const safeLocalStorage: StateStorage = {
  getItem: (name) => {
    if (typeof window === "undefined") return null;
    try {
      return window.localStorage.getItem(name);
    } catch {
      return null;
    }
  },
  setItem: (name, value) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(name, value);
    } catch {
      // Ignore storage quota or private mode errors
    }
  },
  removeItem: (name) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(name);
    } catch {
      // Ignore
    }
  },
};

export function makeEntryKey(itemId: string, variantId?: string): string {
  return variantId ? `${itemId}:${variantId}` : itemId;
}

interface BookingStoreState {
  language: Language;
  entries: CartEntry[];
  activePackageId: string | null;
  packageEditedWarning: boolean;
  customerName: string;
  phone: string;
  pickupDate: string;
  returnDate: string;
  eveningPickup: boolean;
  notes: string;
  isDrawerOpen: boolean;
  isInvoiceOpen: boolean;

  setLanguage: (lang: Language) => void;
  setItemQty: (itemId: string, qty: number, variantId?: string) => void;
  incrementItem: (itemId: string, variantId?: string) => void;
  decrementItem: (itemId: string, variantId?: string) => void;
  selectPackage: (packageId: string) => void;
  clearCart: () => void;
  setCustomerName: (name: string) => void;
  setPhone: (phone: string) => void;
  setPickupDate: (date: string) => void;
  setReturnDate: (date: string) => void;
  setCalendarDays: (days: number) => void;
  setEveningPickup: (val: boolean) => void;
  setNotes: (notes: string) => void;
  setDrawerOpen: (open: boolean) => void;
  setInvoiceOpen: (open: boolean) => void;
}

const defaultPickup = getTodayISO();
const defaultReturn = addDaysISO(defaultPickup, 2);

export const useBookingStore = create<BookingStoreState>()(
  persist(
    (set, get) => ({
      language: "en",
      entries: [],
      activePackageId: null,
      packageEditedWarning: false,
      customerName: "",
      phone: "",
      pickupDate: defaultPickup,
      returnDate: defaultReturn,
      eveningPickup: false,
      notes: "",
      isDrawerOpen: false,
      isInvoiceOpen: false,

      setLanguage: (language) => set({ language }),

      setItemQty: (itemId, qty, variantId) => {
        const key = makeEntryKey(itemId, variantId);
        const safeQty = Math.max(0, Math.min(20, qty));
        const current = get().entries;
        const exists = current.some((e) => e.key === key);
        const nextEntries =
          safeQty === 0
            ? current.filter((e) => e.key !== key)
            : exists
            ? current.map((e) => (e.key === key ? { ...e, qty: safeQty } : e))
            : [...current, { key, itemId, variantId, qty: safeQty }];

        const hadPackage = get().activePackageId !== null;
        set({
          entries: nextEntries,
          activePackageId: null,
          packageEditedWarning: hadPackage,
        });
      },

      incrementItem: (itemId, variantId) => {
        const key = makeEntryKey(itemId, variantId);
        const existing = get().entries.find((e) => e.key === key);
        get().setItemQty(itemId, (existing?.qty ?? 0) + 1, variantId);
      },

      decrementItem: (itemId, variantId) => {
        const key = makeEntryKey(itemId, variantId);
        const existing = get().entries.find((e) => e.key === key);
        if (!existing) return;
        get().setItemQty(itemId, existing.qty - 1, variantId);
      },

      selectPackage: (packageId) => {
        const pkg = getPackageById(packageId);
        if (!pkg) return;
        const entries: CartEntry[] = pkg.items.map((ref) => ({
          key: makeEntryKey(ref.itemId, ref.variantId),
          itemId: ref.itemId,
          variantId: ref.variantId,
          qty: ref.qty,
        }));
        set({
          entries,
          activePackageId: pkg.id,
          packageEditedWarning: false,
        });
      },

      clearCart: () =>
        set({
          entries: [],
          activePackageId: null,
          packageEditedWarning: false,
        }),

      setCustomerName: (customerName) => set({ customerName }),
      setPhone: (phone) => set({ phone }),

      setPickupDate: (pickupDate) => {
        const currentReturn = get().returnDate;
        const nextReturn =
          currentReturn <= pickupDate ? addDaysISO(pickupDate, 1) : currentReturn;
        set({ pickupDate, returnDate: nextReturn });
      },

      setReturnDate: (returnDate) => {
        const pickup = get().pickupDate;
        if (returnDate <= pickup) {
          set({ returnDate: addDaysISO(pickup, 1) });
          return;
        }
        set({ returnDate });
      },

      setCalendarDays: (days) => {
        const safeDays = Math.max(1, Math.min(30, days));
        const pickup = get().pickupDate;
        set({ returnDate: addDaysISO(pickup, safeDays) });
      },

      setEveningPickup: (eveningPickup) => set({ eveningPickup }),
      setNotes: (notes) => set({ notes }),
      setDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
      setInvoiceOpen: (isInvoiceOpen) => set({ isInvoiceOpen }),
    }),
    {
      name: "cgh-galle-booking-v1",
      storage: createJSONStorage(() => safeLocalStorage),
      partialize: (state) => ({
        language: state.language,
        entries: state.entries,
        activePackageId: state.activePackageId,
        customerName: state.customerName,
        phone: state.phone,
        pickupDate: state.pickupDate,
        returnDate: state.returnDate,
        eveningPickup: state.eveningPickup,
        notes: state.notes,
      }),
    }
  )
);
