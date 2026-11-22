export type GearCategory = "tents" | "cooking" | "power" | "accessories";

export type CategoryFilter = "all" | GearCategory;

export interface GearVariant {
  id: string;
  labelEn: string;
  labelSi: string;
  price: number;
}

export interface GearItem {
  id: string;
  name: string;
  nameSi: string;
  category: GearCategory;
  price: number;
  variants?: GearVariant[];
  includesFreeKit?: boolean;
  isFlat?: boolean;
  descriptionEn: string;
  descriptionSi: string;
}

export const CATEGORIES: {
  id: CategoryFilter;
  labelEn: string;
  labelSi: string;
}[] = [
  { id: "all", labelEn: "All", labelSi: "සියල්ල" },
  { id: "tents", labelEn: "Tents & Shelter", labelSi: "Tents සහ ආවරණ" },
  { id: "cooking", labelEn: "Cooking & BBQ", labelSi: "ඉවුම් පිහුම් සහ BBQ" },
  { id: "power", labelEn: "Power & Lighting", labelSi: "විදුලි සහ ආලෝකය" },
  { id: "accessories", labelEn: "Camping Chairs", labelSi: "Camping පුටු" },
];

export const GEAR_ITEMS: GearItem[] = [
  {
    id: "tent-6-manual",
    name: "6 Person Manual Tent",
    nameSi: "6 Person Manual Tent",
    category: "tents",
    price: 1100,
    includesFreeKit: true,
    descriptionEn: "Spacious family or group dome tent with easy pole setup.",
    descriptionSi: "පවුලේ හෝ යාලුවන්ගේ trip වලට ඉඩකඩ ඇති 6-person manual tent.",
  },
  {
    id: "tent-6-auto",
    name: "6 Person Auto Tent",
    nameSi: "6 Person Auto Tent",
    category: "tents",
    price: 1500,
    includesFreeKit: true,
    descriptionEn: "Pop-up hydraulic frame sets up in seconds for large groups.",
    descriptionSi: "තත්පර කිහිපයකින් ලේසියෙන්ම සකසාගත හැකි 6-person auto tent.",
  },
  {
    id: "tent-4-manual",
    name: "4 Person Manual Tent",
    nameSi: "4 Person Manual Tent",
    category: "tents",
    price: 900,
    includesFreeKit: true,
    descriptionEn: "Our best-value 4-person tent — lightweight, breezy, and reliable.",
    descriptionSi: "අපේ ජනප්‍රියම 4-person tent — අඩුම මිලට හොඳම තත්ත්වයෙන්.",
  },
  {
    id: "tent-4-auto",
    name: "4 Person Auto Tent",
    nameSi: "4 Person Auto Tent",
    category: "tents",
    price: 1200,
    includesFreeKit: true,
    descriptionEn: "Quick-pitch automatic tent ideal for couples or small crews.",
    descriptionSi: "ඉක්මනින්ම set කරගන්න පුළුවන් 4-person auto tent.",
  },
  {
    id: "beach-tent",
    name: "Beach Tent",
    nameSi: "Beach Tent",
    category: "tents",
    price: 3000,
    descriptionEn: "Wide sun-shade shelter built for coastal breezes and beach days.",
    descriptionSi: "මුහුදු වෙරළේ සුළඟට ඔරොත්තු දෙන විශාල Beach Tent.",
  },
  {
    id: "rain-cover",
    name: "Tent Rain Cover",
    nameSi: "Tent Rain Cover",
    category: "tents",
    price: 200,
    descriptionEn: "Extra waterproof flysheet (already free with every tent rental).",
    descriptionSi: "අමතර ජල ආරක්ෂිත වැසි ආවරණය (සෑම tent එකක් සමඟම නොමිලේ).",
  },
  {
    id: "ground-sheet",
    name: "Ground Sheet",
    nameSi: "Ground Sheet",
    category: "tents",
    price: 200,
    descriptionEn: "Moisture-barrier tarp mat (already free with every tent rental).",
    descriptionSi: "බිම තෙතමනයෙන් ආරක්ෂා වීමට (සෑම tent එකක් සමඟම නොමිලේ).",
  },
  {
    id: "bbq-grill",
    name: "BBQ Grill",
    nameSi: "BBQ Grill",
    category: "cooking",
    price: 400,
    descriptionEn: "Portable charcoal grill grate for lakeside or beach cookouts.",
    descriptionSi: "කුඩා හා මධ්‍යම ප්‍රමාණයේ කණ්ඩායම් සඳහා ගෙන යා හැකි BBQ Grill.",
  },
  {
    id: "bbq-large",
    name: "BBQ Large",
    nameSi: "BBQ Large",
    category: "cooking",
    price: 500,
    descriptionEn: "Full-size charcoal BBQ stand built for bigger group feasts.",
    descriptionSi: "වැඩි පිරිසකට එකවර BBQ සාදාගැනීමට විශාල BBQ Grill.",
  },
  {
    id: "cooking-ware-set",
    name: "Cooking Ware Set",
    nameSi: "Cooking Ware Set",
    category: "cooking",
    price: 400,
    descriptionEn: "Nested camping pots, pan, and utensils for camp meals.",
    descriptionSi: "කඳවුරේදී කෑම පිසීමට අවශ්‍ය pots, pan සහ උපකරණ කට්ටලය.",
  },
  {
    id: "camping-light",
    name: "Camping Light",
    nameSi: "Camping Light",
    category: "power",
    price: 200,
    descriptionEn: "Rechargeable LED lantern for inside the tent or around camp.",
    descriptionSi: "Tent එක ඇතුළත සහ එළිමහනේ ආලෝකය සඳහා LED Camping Light.",
  },
  {
    id: "pb-20k",
    name: "20,000mAh Power Bank",
    nameSi: "20,000mAh Power Bank",
    category: "power",
    price: 400,
    descriptionEn: "High-capacity dual-port power bank to keep phones charged off-grid.",
    descriptionSi: "දුරකථන සහ උපකරණ charge කරගැනීමට 20,000mAh Power Bank.",
  },
  {
    id: "gas-stove",
    name: "Gas Stove",
    nameSi: "Gas Stove",
    category: "cooking",
    price: 300,
    variants: [
      { id: "standard", labelEn: "Standard · LKR 300", labelSi: "Standard · LKR 300", price: 300 },
      { id: "pro", labelEn: "Heavy-Duty · LKR 500", labelSi: "Heavy-Duty · LKR 500", price: 500 },
    ],
    descriptionEn: "Compact portable butane stove — choose standard or heavy-duty.",
    descriptionSi: "පහසුවෙන් ගෙන යා හැකි portable Gas Stove (මාදිලි 2කින්).",
  },
  {
    id: "gas-stove-windproof",
    name: "Gas Stove Windproof",
    nameSi: "Gas Stove Windproof",
    category: "cooking",
    price: 400,
    descriptionEn: "Lotus-petal wind shield burner for breezy hills and beaches.",
    descriptionSi: "සුළඟට නිවෙන්නේ නැති windproof ආවරණය සහිත Gas Stove.",
  },
  {
    id: "camping-chair",
    name: "Camping Chair",
    nameSi: "Camping Chair",
    category: "accessories",
    price: 300,
    descriptionEn: "Foldable canvas chair with cup holder for campfire evenings.",
    descriptionSi: "ගිනිමැලය වටා හිඳගැනීමට පහසු නැමිය හැකි Camping Chair.",
  },
  {
    id: "gas-tin",
    name: "Gas Tin (Gas Can)",
    nameSi: "Gas Tin (Gas Can)",
    category: "cooking",
    price: 1000,
    isFlat: true,
    descriptionEn: "Butane canister — flat one-time fee per rental, never multiplied by days.",
    descriptionSi: "Gas Can — එක් වරක් පමණක් අය කෙරේ (දින ගණනට වැඩි නොවේ).",
  },
];

export function getItemById(id: string): GearItem | undefined {
  return GEAR_ITEMS.find((item) => item.id === id);
}
