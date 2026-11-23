export interface PackageItemRef {
  itemId: string;
  qty: number;
  variantId?: string;
}

export interface CampingPackage {
  id: string;
  name: string;
  nameSi: string;
  subtitleEn: string;
  subtitleSi: string;
  peopleCount: number;
  packagePrice: number;
  regularFirstDayTotal: number;
  popular?: boolean;
  items: PackageItemRef[];
}

export const CAMPING_PACKAGES: CampingPackage[] = [
  {
    id: "couple-pack",
    name: "Couple Pack",
    nameSi: "Couple Pack",
    subtitleEn: "Ideal for 2 campers · Beach or hill escapes",
    subtitleSi: "දෙන්නෙකුගේ trip එකකට ඕන හැමදේම",
    peopleCount: 2,
    packagePrice: 3000,
    regularFirstDayTotal: 3100,
    items: [
      { itemId: "tent-4-auto", qty: 1 },
      { itemId: "gas-stove", qty: 1, variantId: "standard" },
      { itemId: "gas-tin", qty: 1 },
      { itemId: "camping-light", qty: 1 },
      { itemId: "cooking-ware-set", qty: 1 },
    ],
  },
  {
    id: "4-person-pack",
    name: "4 Person Pack",
    nameSi: "4 Person Pack",
    subtitleEn: "Best value for 4 friends · Includes BBQ & Power Bank",
    subtitleSi: "4 දෙනෙකුට BBQ සහ Power Bank එක්ක හොඳම pack එක",
    peopleCount: 4,
    packagePrice: 3600,
    regularFirstDayTotal: 3800,
    popular: true,
    items: [
      { itemId: "tent-6-manual", qty: 1 },
      { itemId: "gas-stove", qty: 1, variantId: "standard" },
      { itemId: "gas-tin", qty: 1 },
      { itemId: "bbq-grill", qty: 1 },
      { itemId: "pb-20k", qty: 1 },
      { itemId: "camping-light", qty: 1 },
      { itemId: "cooking-ware-set", qty: 1 },
    ],
  },
  {
    id: "6-person-pack",
    name: "6 Person Pack",
    nameSi: "6 Person Pack",
    subtitleEn: "Full group expedition · Auto tent & BBQ Large",
    subtitleSi: "6 දෙනෙකුගේ group එකකට Auto Tent & BBQ Large එක්ක",
    peopleCount: 6,
    packagePrice: 4100,
    regularFirstDayTotal: 4300,
    items: [
      { itemId: "tent-6-auto", qty: 1 },
      { itemId: "gas-stove", qty: 1, variantId: "standard" },
      { itemId: "gas-tin", qty: 1 },
      { itemId: "bbq-large", qty: 1 },
      { itemId: "pb-20k", qty: 1 },
      { itemId: "camping-light", qty: 1 },
      { itemId: "cooking-ware-set", qty: 1 },
    ],
  },
];

export function getPackageById(id: string): CampingPackage | undefined {
  return CAMPING_PACKAGES.find((pkg) => pkg.id === id);
}
