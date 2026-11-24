export type Language = "en" | "si";

export interface Dictionary {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    location: string;
    phoneDisplay: string;
  };
  nav: {
    gear: string;
    packages: string;
    pricing: string;
    policy: string;
    faq: string;
    cart: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaGear: string;
    ctaPackages: string;
    exampleLabel: string;
    exampleTitle: string;
    examplePrice: string;
    exampleSave: string;
    scrollHint: string;
  };
  trust: {
    freeKit: string;
    halfPrice: string;
    gallePickup: string;
    whatsappSupport: string;
  };
  packages: {
    eyebrow: string;
    title: string;
    subtitle: string;
    popularBadge: string;
    freeKitNote: string;
    regularLabel: string;
    firstDayLabel: string;
    savePrefix: string;
    selectBtn: string;
    selectedBtn: string;
    peopleSuffix: string;
  };
  gear: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    freeKitBadge: string;
    flatBadge: string;
    perFirstDay: string;
    extraDayPrefix: string;
    extraDaySuffix: string;
    flatNote: string;
    addBtn: string;
    viewMore: string;
    viewLess: string;
    emptyTitle: string;
    emptySubtitle: string;
    clearSearch: string;
  };
  pricingExplainer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    dayLabel: string;
    ourPriceLabel: string;
    fullPriceLabel: string;
    exampleBadge: string;
    exampleHeading: string;
    exampleBody: string;
    exampleInstead: string;
    exampleSave: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  booking: {
    drawerTitle: string;
    emptyCartTitle: string;
    emptyCartDesc: string;
    browseGearBtn: string;
    itemsSelected: string;
    packageActive: string;
    packageRemovedNote: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    pickupLabel: string;
    returnLabel: string;
    daysLabel: string;
    eveningPickupLabel: string;
    eveningPickupHint: string;
    notesLabel: string;
    notesPlaceholder: string;
    summaryTitle: string;
    subtotalLabel: string;
    packageDiscountLabel: string;
    totalLabel: string;
    youSaveLabel: string;
    advanceLabel: string;
    advanceValue: string;
    depositLabel: string;
    depositValue: string;
    returnBeforeNote: string;
    sinhalaNotice: string;
    sinhalaCallNotice: string;
    sendWhatsAppBtn: string;
    copyTextBtn: string;
    copiedBtn: string;
    invoiceBtn: string;
    clearCartBtn: string;
    errors: {
      noItems: string;
      noName: string;
      invalidDates: string;
      returnBeforePickup: string;
    };
  };
  invoice: {
    title: string;
    invoiceNo: string;
    issueDate: string;
    billedTo: string;
    rentalPeriod: string;
    pickup: string;
    returnText: string;
    duration: string;
    itemCol: string;
    baseRateCol: string;
    qtyCol: string;
    tierCol: string;
    amountCol: string;
    flatTier: string;
    packageDiscount: string;
    subtotal: string;
    advanceRequired: string;
    markAdvancePaid: string;
    balanceDue: string;
    policyHeading: string;
    printBtn: string;
    closeBtn: string;
  };
  policy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    addressLabel: string;
    mapLinkText: string;
    callLabel: string;
    facebookLabel: string;
    rights: string;
  };
}

export const DICTIONARY: Record<Language, Dictionary> = {
  en: {
    brand: {
      name: "Camping Gear Hub — Galle",
      shortName: "Camping Gear Hub",
      tagline: "Gear up and Camp on",
      location: "S.C.W Electrical, Pinnaduwa, Galle",
      phoneDisplay: "070 215 6828",
    },
    nav: {
      gear: "Gear",
      packages: "Packages",
      pricing: "Pricing",
      policy: "Policy",
      faq: "FAQ",
      cart: "Booking",
    },
    hero: {
      eyebrow: "Pinnaduwa, Galle",
      title: "Sleep under the stars. We bring the gear.",
      subtitle:
        "Tents starting from LKR 900 with FREE Rain Cover & Ground Sheet. 1st day full price, every extra day 50% off. Only we offer tents at this price.",
      ctaGear: "Browse Gear",
      ctaPackages: "Quick Start Packages",
      exampleLabel: "Rate Guide",
      exampleTitle: "4 Person Manual Tent · 3 days",
      examplePrice: "LKR 1,800",
      exampleSave: "Save LKR 900",
      scrollHint: "Scroll to explore gear",
    },
    trust: {
      freeKit: "Free rain cover & ground sheet",
      halfPrice: "50% off extra day",
      gallePickup: "Easy pickup",
      whatsappSupport: "Direct WhatsApp booking",
    },
    packages: {
      eyebrow: "Quick Start Camping Packages",
      title: "One tap, whole campsite ready",
      subtitle:
        "Bundled essentials for 2, 4, or 6 campers — cheaper than renting separately, with FREE Rain Cover & Ground Sheet included.",
      popularBadge: "Most Popular",
      freeKitNote: "FREE Rain Cover & Ground Sheet",
      regularLabel: "Regular 1st day",
      firstDayLabel: "/ 1st day",
      savePrefix: "Save",
      selectBtn: "Add this package",
      selectedBtn: "Selected",
      peopleSuffix: "People",
    },
    gear: {
      eyebrow: "Rental Equipment",
      title: "Pick exactly what your trip needs",
      subtitle:
        "Every tent includes a free rain cover & ground sheet. Add items below to see your live multi-day total.",
      searchPlaceholder: "Search gear (e.g., beach tent, gas, BBQ)...",
      freeKitBadge: "Free Rain Cover & Ground Sheet",
      flatBadge: "One-time rental",
      perFirstDay: "/ 1st day",
      extraDayPrefix: "+ ",
      extraDaySuffix: " / extra day",
      flatNote: "Flat per rental · not multiplied by days",
      addBtn: "Add",
      viewMore: "View more",
      viewLess: "Show less",
      emptyTitle: "No equipment matches your search",
      emptySubtitle: "Try clearing your search or switching categories.",
      clearSearch: "Show all gear",
    },
    pricingExplainer: {
      eyebrow: "Simple Pricing",
      title: "1st day full price, every extra day 50% off",
      subtitle:
        "Only we offer tents at this price with a free Rain Cover & Ground Sheet. Pick up in the evening for a next-morning trip and billing starts from the next day.",
      dayLabel: "Day",
      ourPriceLabel: "Camping Gear Hub",
      fullPriceLabel: "If every day were full price",
      exampleBadge: "Rate Guide",
      exampleHeading: "4 Person Manual Tent Rates",
      exampleBody: "LKR 1,800 for 3 days (2× rate)",
      exampleInstead: "instead of LKR 2,700",
      exampleSave: "Save LKR 900",
    },
    howItWorks: {
      eyebrow: "3-Step Booking",
      title: "From screen to campsite in minutes",
      step1Title: "Select Package or Gear",
      step1Desc:
        "Add a quick-start package or pick tents, stoves, lights, and chairs.",
      step2Title: "Set Pick-up & Return",
      step2Desc:
        "1st day full price, every extra day only half price.",
      step3Title: "WhatsApp or Invoice",
      step3Desc:
        "Send your booking to 070 215 6828 or print a PDF invoice.",
    },
    booking: {
      drawerTitle: "Booking & Invoice",
      emptyCartTitle: "No items selected yet",
      emptyCartDesc: "Add gear from the list or pick a Quick Start Package to calculate your trip total.",
      browseGearBtn: "Browse Gear",
      itemsSelected: "selected",
      packageActive: "Package Active",
      packageRemovedNote: "Quantities edited — standard item pricing applied.",
      nameLabel: "Name",
      namePlaceholder: "e.g. Kasun Perera",
      phoneLabel: "Phone (Optional)",
      phonePlaceholder: "07X XXX XXXX",
      pickupLabel: "Pick-up Date",
      returnLabel: "Return Date",
      daysLabel: "Rental Days",
      eveningPickupLabel: "Picking up in the evening for next-morning trip",
      eveningPickupHint: "Billing starts from next morning (reduces billed days by 1, min 1 day).",
      notesLabel: "Notes (Optional)",
      notesPlaceholder: "Pick-up time or special requests...",
      summaryTitle: "Selected Items",
      subtotalLabel: "Rental Subtotal",
      packageDiscountLabel: "Package Discount",
      totalLabel: "Estimated Rental Total",
      youSaveLabel: "You save",
      advanceLabel: "Advance to Reserve",
      advanceValue: "LKR 500",
      depositLabel: "Collection Deposit",
      depositValue: "Cash / NIC / Driving License",
      returnBeforeNote: "Please return all items before 12:00 PM on the return date.",
      sinhalaNotice:
        "Advance ගෙවීම් නොකරන orders සඳහා items ලබා දීමට හැකිවනුයේ එදින පවතින availability එක අනුව පමණි. Item වෙන් කර තබා ගැනීම සඳහා රු.500 අත්තිකාරම් මුදලක් ගෙවිය යුතු වේ.",
      sinhalaCallNotice: "ඇමතුමක් දී අදාල දින දන්වා වෙන්කරවා ගන්න.",
      sendWhatsAppBtn: "Send Booking via WhatsApp",
      copyTextBtn: "Copy Text",
      copiedBtn: "Copied!",
      invoiceBtn: "Invoice",
      clearCartBtn: "Clear all",
      errors: {
        noItems: "Please select at least 1 camping item.",
        noName: "Please enter the customer name.",
        invalidDates: "Please select pick-up and return dates.",
        returnBeforePickup: "Return date must be after pick-up date.",
      },
    },
    invoice: {
      title: "Rental Invoice",
      invoiceNo: "Invoice No",
      issueDate: "Issue Date",
      billedTo: "Billed To",
      rentalPeriod: "Rental Period",
      pickup: "Pick-up",
      returnText: "Return (before 12:00 PM)",
      duration: "Duration",
      itemCol: "Item Description",
      baseRateCol: "1st Day Rate",
      qtyCol: "Qty",
      tierCol: "Rate Tier",
      amountCol: "Amount",
      flatTier: "Flat / rental",
      packageDiscount: "Package Discount",
      subtotal: "Rental Subtotal",
      advanceRequired: "Advance Paid (LKR 500)",
      markAdvancePaid: "Advance Paid (LKR 500)",
      balanceDue: "Balance on Collection",
      policyHeading: "Collection & Return Policy",
      printBtn: "Print / Save PDF",
      closeBtn: "Close",
    },
    policy: {
      eyebrow: "Collection & Return Policy",
      title: "Clear rules, zero surprises",
      subtitle: "Deposit, advance reservation & pickup details at S.C.W Electrical, Pinnaduwa, Galle.",
      items: [
        {
          title: "LKR 500 Advance to Reserve",
          body: "Only orders with an LKR 500 advance payment can reserve items. WhatsApp your payment receipt along with your required items, pick-up date, and return date to confirm.",
        },
        {
          title: "Orders Without Advance Payment",
          body: "Orders without advance payment can only get items subject to availability on that day. Call 070 215 6828 to check before coming.",
        },
        {
          title: "Refundable Deposit",
          body: "A refundable deposit (Cash, NIC, or Driving License) is required on collection until all items are returned.",
        },
        {
          title: "Return Before 12:00 PM",
          body: "Please return all items before 12:00 PM on your return date. Picking up the evening before a next-morning trip? Tick the evening pick-up option.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Quick answers before you pack",
      items: [
        {
          q: "How does the multi-day pricing work?",
          a: "Pay full price for Day 1, and every extra day is 50% off (1 day = 1×, 2 days = 1.5×, 3 days = 2×, 4 days = 2.5×). A 4 Person Manual Tent for 3 days is LKR 1,800 instead of LKR 2,700.",
        },
        {
          q: "Are rain covers and ground sheets really free?",
          a: "Yes. Every tent rental includes a FREE Rain Cover and Ground Sheet.",
        },
        {
          q: "Why isn't the Gas Tin multiplied by days?",
          a: "Gas Tins (Gas Cans) are a flat LKR 1,000 per rental regardless of how many days you rent.",
        },
        {
          q: "How do I confirm and reserve my items?",
          a: "Send your booking via WhatsApp to 070 215 6828, pay the LKR 500 advance, and WhatsApp the payment receipt with your required items, pick-up date, and return date.",
        },
        {
          q: "What if I pick up the gear the evening before my trip?",
          a: "Tick 'Picking up in the evening for next-morning trip' in the booking form. Your billed days will be reduced by 1 (minimum 1 day).",
        },
        {
          q: "What do I need to bring for the deposit?",
          a: "Bring a refundable deposit (Cash, NIC, or Driving License) when collecting at S.C.W Electrical, Pinnaduwa, Galle. Return before 12:00 PM on your return date.",
        },
      ],
    },
    footer: {
      tagline: "Gear up and Camp on",
      addressLabel: "Location",
      mapLinkText: "Open in Google Maps",
      callLabel: "Call / WhatsApp",
      facebookLabel: "Camping Gear Hub on Facebook",
      rights: "Camping Gear Hub - Galle. All rights reserved.",
    },
  },
  si: {
    brand: {
      name: "Camping Gear Hub — Galle",
      shortName: "Camping Gear Hub",
      tagline: "Gear up and Camp on",
      location: "S.C.W Electrical, Pinnaduwa, Galle",
      phoneDisplay: "070 215 6828",
    },
    nav: {
      gear: "Items",
      packages: "Packages",
      pricing: "මිල ගණන්",
      policy: "Policy",
      faq: "ප්‍රශ්න",
      cart: "Booking",
    },
    hero: {
      eyebrow: "Pinnaduwa, Galle ·",
      title: "Camping items rent කරන්න හොඳම තැන.",
      subtitle:
        "ඔයාගේ trip එකට යන estimated price එක මේ website එකෙන්ම calculate කරලා බලන්න. Tents LKR 900 සිට — Rain Cover & Ground Sheet FREE. 1st day full price, හැම extra day එකකටම 50% off.",
      ctaGear: "Equipment බලන්න",
      ctaPackages: "Quick Start Packages",
      exampleLabel: "Price Example",
      exampleTitle: "4 Person Manual Tent · දවස් 3කට",
      examplePrice: "LKR 1,800",
      exampleSave: "LKR 900 ඉතුරුයි",
      scrollHint: "පහළට scroll කරලා gear බලන්න",
    },
    trust: {
      freeKit: "Rain Cover & Ground Sheet FREE",
      halfPrice: "හැම extra day එකකටම 50% off",
      gallePickup: "පින්නදූව, ගාල්ලෙන් pick කරන්න",
      whatsappSupport: "WhatsApp (070 215 6828)",
    },
    packages: {
      eyebrow: "සම්පූර්ණ Gear Sets",
      title: "Quick Start Camping Packages",
      subtitle:
        "Trip එකට ඕන items එක tap එකෙන් add කරගන්න · Group එකට ගැලපෙන sets, Rain Cover & Ground Sheet FREE.",
      popularBadge: "Most Popular",
      freeKitNote: "Rain Cover & Ground Sheet FREE",
      regularLabel: "සාමාන්‍ය මුළු මිල",
      firstDayLabel: "/ 1st day",
      savePrefix: "ඉතුරුයි",
      selectBtn: "මේ package එක add කරන්න",
      selectedBtn: "Select කළා",
      peopleSuffix: "දෙනෙකුට",
    },
    gear: {
      eyebrow: "Rental Equipment",
      title: "Trip එකට ඕන items select කරන්න",
      subtitle:
        "1st day base rates (LKR) · හැම tent එකක් එක්කම Rain Cover & Ground Sheet FREE.",
      searchPlaceholder: "Gear search කරන්න (උදා: beach tent, gas, BBQ)...",
      freeKitBadge: "Rain Cover & Ground Sheet Free",
      flatBadge: "One-time rental",
      perFirstDay: "/ 1st day",
      extraDayPrefix: "+ ",
      extraDaySuffix: " / extra day",
      flatNote: "Flat fee · දවස් ගණනට වැඩි වෙන්නේ නෑ",
      addBtn: "Add",
      viewMore: "විස්තර බලන්න",
      viewLess: "අඩුවෙන්",
      emptyTitle: "ඔයා search කරපු gear එක හම්බවුණේ නෑ",
      emptySubtitle: "වෙන නමකින් search කරන්න නැත්නම් ඔක්කොම බලන්න.",
      clearSearch: "ඔක්කොම items පෙන්වන්න",
    },
    pricingExplainer: {
      eyebrow: "Simple Pricing",
      title: "1st day full price, හැම extra day එකකටම 50% off",
      subtitle:
        "මේ මිලට tents එක්ක Rain Cover එකයි Ground Sheet එකයි FREE දෙන්නෙත්, හැම extra day එකකටම 50% off දෙන්නෙත් අපි විතරයි.",
      dayLabel: "Day",
      ourPriceLabel: "Camping Gear Hub",
      fullPriceLabel: "හැම දවසටම full price නම්",
      exampleBadge: "Rate Guide",
      exampleHeading: "4 Person Manual Tent මිල ගණන්",
      exampleBody: "දවස් 3කට LKR 1,800 (2× rate)",
      exampleInstead: "LKR 2,700 වෙනුවට",
      exampleSave: "LKR 900 ඉතුරුයි",
    },
    howItWorks: {
      eyebrow: "පියවර 3න් Booking",
      title: "ලේසියෙන්ම gear ටික book කරගන්න",
      step1Title: "Package හෝ Items තෝරන්න",
      step1Desc:
        "Quick-start package එකක් හෝ tents, stoves, lights, chairs select කරන්න.",
      step2Title: "Pick-up & Return දාන්න",
      step2Desc:
        "1st day full price, හැම extra day එකකටම half price විතරයි.",
      step3Title: "WhatsApp හෝ Invoice",
      step3Desc:
        "070 215 6828 ට list එක එවන්න, නැත්නම් invoice එකක් print කරගන්න.",
    },
    booking: {
      drawerTitle: "Booking & Invoice",
      emptyCartTitle: "තාම items select කරලා නෑ",
      emptyCartDesc: "List එකෙන් + ඔබලා items add කරන්න, නැත්නම් package එකක් select කරන්න.",
      browseGearBtn: "Equipment බලන්න",
      itemsSelected: "ක් තෝරලා",
      packageActive: "Package Active",
      packageRemovedNote: "Items වෙනස් කළ නිසා normal item prices ගණනය වෙනවා.",
      nameLabel: "නම",
      namePlaceholder: "උදා: කසුන් පෙරේරා",
      phoneLabel: "Phone (Optional)",
      phonePlaceholder: "07X XXX XXXX",
      pickupLabel: "Pick-up Date",
      returnLabel: "Return Date",
      daysLabel: "දවස් ගණන",
      eveningPickupLabel: "ඊළඟ දවසේ උදේ trip එකට කලින් දවසේ හවස items ගන්නවා",
      eveningPickupHint: "මිල ගණනය වන්නේ ඊළඟ දවසේ උදේ සිටයි (දවස් 1ක් අඩු වෙනවා, අවම දවස් 1).",
      notesLabel: "Notes (Optional)",
      notesPlaceholder: "මොනවා හරි questions හෝ special requests තියෙනවා නම් දාන්න...",
      summaryTitle: "තෝරපු Items",
      subtotalLabel: "මුළු Rental එකතුව",
      packageDiscountLabel: "Package Discount",
      totalLabel: "Estimated Rental Total",
      youSaveLabel: "ඔයාට ඉතුරුයි",
      advanceLabel: "Book කරන්න Advance එක",
      advanceValue: "LKR 500",
      depositLabel: "Items ගද්දි Deposit එක",
      depositValue: "Cash / NIC / Driving License",
      returnBeforeNote: "Return date එකේ දවල් 12:00ට කලින් items ටික භාර දෙන්න.",
      sinhalaNotice:
        "Advance ගෙවීම් නොකරන orders සඳහා items ලබා දීමට හැකිවනුයේ එදින පවතින availability එක අනුව පමණි. Item වෙන් කර තබා ගැනීම සඳහා රු.500 අත්තිකාරම් මුදලක් ගෙවිය යුතු වේ.",
      sinhalaCallNotice: "ඇමතුමක් දී අදාල දින දන්වා වෙන්කරවා ගන්න.",
      sendWhatsAppBtn: "WhatsApp එකෙන් Booking එක එවන්න",
      copyTextBtn: "Copy Text",
      copiedBtn: "Copy වුණා!",
      invoiceBtn: "Invoice",
      clearCartBtn: "ඔක්කොම clear කරන්න",
      errors: {
        noItems: "අඩුම ගාණේ එක item එකක්වත් select කරන්න.",
        noName: "කරුණාකර නම enter කරන්න.",
        invalidDates: "Pick-up සහ return dates select කරන්න.",
        returnBeforePickup: "Return date එක pick-up date එකට පස්සේ වෙන්න ඕනේ.",
      },
    },
    invoice: {
      title: "Rental Invoice",
      invoiceNo: "Invoice No",
      issueDate: "Issue Date",
      billedTo: "Billed To",
      rentalPeriod: "Rental Period",
      pickup: "Pick-up",
      returnText: "Return (12:00 PMට කලින්)",
      duration: "දවස් ගණන",
      itemCol: "Item",
      baseRateCol: "1st Day Rate",
      qtyCol: "Qty",
      tierCol: "Rate Tier",
      amountCol: "මුදල",
      flatTier: "Flat / rental",
      packageDiscount: "Package Discount",
      subtotal: "Rental Subtotal",
      advanceRequired: "Advance Paid (LKR 500)",
      markAdvancePaid: "Advance Paid (LKR 500)",
      balanceDue: "Balance on Collection",
      policyHeading: "Collection & Return Policy",
      printBtn: "Print / Save PDF",
      closeBtn: "Close",
    },
    policy: {
      eyebrow: "Collection & Return Policy",
      title: "Deposit, Advance & Pickup විස්තර",
      subtitle: "S.C.W Electrical, Pinnaduwa, Galle වෙතින් gear ගද්දි දැනගන්න ඕන කරුණු.",
      items: [
        {
          title: "රු.500 Advance එකෙන් Reserve කරන්න",
          body: "Advance payment එක ගෙවපු orders වලට විතරයි items reserve කරන්නේ. Booking එක confirm කරන්න payment receipt එක, ඕන items, pick-up සහ return dates WhatsApp කරන්න.",
        },
        {
          title: "Advance නැති Orders",
          body: "Advance ගෙවීම් නොකරන orders සඳහා items ලබා දීමට හැකිවනුයේ එදින පවතින availability එක අනුව පමණි. එන්න කලින් 070 215 6828 ට call එකක් දීලා අහන්න.",
        },
        {
          title: "Refundable Deposit",
          body: "Items ඔක්කොම ආපහු දෙනකම් refundable deposit එකක් විදිහට Cash deposit එකක් හෝ ඔයා කැමති නම් National ID / Driving License එක තියන්න පුළුවන්.",
        },
        {
          title: "දවල් 12:00ට කලින් Return කරන්න",
          body: "Return date එකේ දවල් 12:00ට කලින් items ටික භාර දෙන්න. Trip එකට කලින් දවසේ හවස items ගන්නවා නම් evening pick-up tick කරන්න.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "නිතර අහන ප්‍රශ්න",
      items: [
        {
          q: "දවස් කිහිපයකට මිල ගණනය වෙන්නේ කොහොමද?",
          a: "1st day එකට full price එක ගෙවලා, ඉතිරි හැම extra day එකකටම 50% off (half price) විතරක් ගෙවන්න (1 day = 1×, 2 days = 1.5×, 3 days = 2×). උදාහරණයක් විදිහට 4 Person Manual Tent දවස් 3කට LKR 2,700 වෙනුවට LKR 1,800යි.",
        },
        {
          q: "Rain cover එකයි Ground sheet එකයි ඇත්තටම free ද?",
          a: "ඔව්! හැම tent rental එකක් එක්කම Rain Cover එකයි Ground Sheet එකයි FREE දෙනවා.",
        },
        {
          q: "Gas Tin එකට දවස් ගණනට charge වෙන්නේ නැත්තේ ඇයි?",
          a: "Gas Tin (Gas Can) එකට දවස් ගණන බලන්නේ නැතුව එක rental එකකට LKR 1,000 flat fee එකක් විතරයි අය කරන්නේ.",
        },
        {
          q: "Items reserve කරලා confirm කරගන්නේ කොහොමද?",
          a: "070 215 6828 ට WhatsApp එකෙන් booking එක එවලා, රු.500 advance එක ගෙවලා payment receipt එකයි items, pick-up, return dates ටිකයි WhatsApp කරන්න.",
        },
        {
          q: "Trip එකට කලින් දවසේ හවස gear ගන්න පුළුවන්ද?",
          a: "පුළුවන්. Booking form එකේ 'ඊළඟ දවසේ උදේ trip එකට කලින් දවසේ හවස items ගන්නවා' කියන එක tick කරන්න. එතකොට දවස් ගණනින් 1 දවසක් අඩු වෙනවා (අවම දවස් 1).",
        },
        {
          q: "Deposit එකට මොනවද ගේන්න ඕනේ?",
          a: "S.C.W Electrical, Pinnaduwa, Galle වලින් gear ගද්දි Cash, NIC හෝ Driving License deposit එකක් තියන්න ඕනේ. Return date එකේ දවල් 12:00ට කලින් items භාර දෙන්න.",
        },
      ],
    },
    footer: {
      tagline: "Gear up and Camp on",
      addressLabel: "Location",
      mapLinkText: "Google Maps වලින් බලන්න",
      callLabel: "Call / WhatsApp",
      facebookLabel: "Camping Gear Hub on Facebook",
      rights: "Camping Gear Hub — Galle. All rights reserved.",
    },
  },
};
