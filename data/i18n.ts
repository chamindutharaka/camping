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
      eyebrow: "Pinnaduwa, Galle · Open Daily",
      title: "Sleep under the stars. We bring the gear.",
      subtitle:
        "Tents starting from LKR 900 with FREE Rain Cover & Ground Sheet. 1st day full price, every extra day 50% off — only we offer tents at this price.",
      ctaGear: "Browse Gear",
      ctaPackages: "Quick Start Packages",
      exampleLabel: "Trip Example",
      exampleTitle: "4-person tent · 3 days",
      examplePrice: "LKR 1,800",
      exampleSave: "You save LKR 900",
      scrollHint: "Scroll to explore gear",
    },
    trust: {
      freeKit: "Free rain cover & ground sheet",
      halfPrice: "50% off every extra day",
      gallePickup: "Easy Galle pick-up",
      whatsappSupport: "Direct WhatsApp booking",
    },
    packages: {
      eyebrow: "Quick Start Camping Packages",
      title: "One click, whole campsite ready",
      subtitle:
        "Bundled essentials for 2, 4, or 6 campers — cheaper than renting separately, with FREE Rain Cover & Ground Sheet included.",
      popularBadge: "Most Popular",
      freeKitNote: "+ Free Rain Cover & Ground Sheet",
      regularLabel: "Regular 1st day",
      firstDayLabel: "/ 1st day",
      savePrefix: "Save",
      selectBtn: "Select Package",
      selectedBtn: "Package in Cart",
      peopleSuffix: "Campers",
    },
    gear: {
      eyebrow: "Rental Catalog",
      title: "Pick exactly what your trip needs",
      subtitle:
        "Every tent includes a free rain cover & ground sheet. Add items below to see your live multi-day total.",
      searchPlaceholder: "Search tents, BBQ, stove, chair...",
      freeKitBadge: "Free Rain Cover & Ground Sheet",
      flatBadge: "One-time rental",
      perFirstDay: "/ 1st day",
      extraDayPrefix: "+ ",
      extraDaySuffix: " / extra day",
      flatNote: "Flat per rental · not multiplied by days",
      addBtn: "Add",
      emptyTitle: "No gear matches your search",
      emptySubtitle: "Try clearing your search or switching categories.",
      clearSearch: "Show all gear",
    },
    pricingExplainer: {
      eyebrow: "How Pricing Works",
      title: "1st day full price, every extra day 50% off",
      subtitle:
        "Longer trips cost way less per day. Pick up in the evening for a next-morning trip and we don't charge you for that extra night.",
      dayLabel: "Day",
      ourPriceLabel: "Your rate",
      fullPriceLabel: "If every day were full price",
      exampleBadge: "Real Trip Example",
      exampleHeading: "4 Person Manual Tent · 3-Day Trip",
      exampleBody: "Pay LKR 1,800 (2× rate)",
      exampleInstead: "instead of LKR 2,700",
      exampleSave: "Save LKR 900",
    },
    howItWorks: {
      eyebrow: "Simple 3-Step Booking",
      title: "From screen to campsite in minutes",
      step1Title: "1. Choose gear or a pack",
      step1Desc:
        "Pick a Quick Start Package or build your own list from tents, stoves, BBQ grills, and lights.",
      step2Title: "2. Set your dates",
      step2Desc:
        "Select pick-up and return dates. Tick evening pick-up if collecting the evening before.",
      step3Title: "3. WhatsApp & Invoice",
      step3Desc:
        "Send your pre-filled WhatsApp booking, pay LKR 500 advance to reserve, or print an instant PDF invoice.",
    },
    booking: {
      drawerTitle: "Your Booking Summary",
      emptyCartTitle: "Your gear bag is empty",
      emptyCartDesc: "Add tents, cooking gear, or select a Quick Start Package to calculate your trip total.",
      browseGearBtn: "Browse Gear",
      itemsSelected: "items selected",
      packageActive: "Package Active",
      packageRemovedNote: "Quantities edited — standard item pricing applied.",
      nameLabel: "Customer Name",
      namePlaceholder: "e.g. Kasun Perera",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "07X XXX XXXX",
      pickupLabel: "Pick-up Date",
      returnLabel: "Return Date",
      daysLabel: "Calendar Days",
      eveningPickupLabel: "Evening pick-up (trip starts next morning)",
      eveningPickupHint: "Reduces billed days by 1 (minimum 1 day).",
      notesLabel: "Notes (optional)",
      notesPlaceholder: "Pick-up time, special requests...",
      summaryTitle: "Price Breakdown",
      subtotalLabel: "Rental Subtotal",
      packageDiscountLabel: "Package Discount",
      totalLabel: "Estimated Rental Total",
      youSaveLabel: "You save",
      advanceLabel: "Advance to Reserve",
      advanceValue: "LKR 500",
      depositLabel: "Refundable Deposit",
      depositValue: "Cash, NIC, or Driving License",
      returnBeforeNote: "Please return all gear before 12:00 PM on the return date.",
      sinhalaNotice:
        "Advance ගෙවීම් නොකරන orders සඳහා items ලබා දීමට හැකිවනුයේ එදින පවතින availability එක අනුව පමණි. Item වෙන් කර තබා ගැනීම සඳහා රු.500 අත්තිකාරම් මුදලක් ගෙවිය යුතු වේ.",
      sinhalaCallNotice: "ඇමතුමක් දී අදාල දින දන්වා වෙන්කරවා ගන්න.",
      sendWhatsAppBtn: "Send Booking via WhatsApp",
      copyTextBtn: "Copy Booking Text",
      copiedBtn: "Copied!",
      invoiceBtn: "Printable Invoice",
      clearCartBtn: "Clear all",
      errors: {
        noItems: "Please add at least 1 item to your booking.",
        noName: "Please enter your name to continue.",
        invalidDates: "Please choose valid pick-up and return dates.",
        returnBeforePickup: "Return date must be after pick-up date.",
      },
    },
    invoice: {
      title: "Rental Estimate / Invoice",
      invoiceNo: "Invoice No",
      issueDate: "Issue Date",
      billedTo: "Billed To",
      rentalPeriod: "Rental Period",
      pickup: "Pick-up",
      returnText: "Return (before 12:00 PM)",
      duration: "Duration",
      itemCol: "Item",
      baseRateCol: "1st Day Rate",
      qtyCol: "Qty",
      tierCol: "Rate Tier",
      amountCol: "Amount",
      flatTier: "Flat / rental",
      packageDiscount: "Package Discount",
      subtotal: "Rental Total",
      advanceRequired: "Advance Paid (LKR 500)",
      markAdvancePaid: "Mark LKR 500 advance as paid",
      balanceDue: "Balance Due on Collection",
      policyHeading: "Rental Terms & Confirmation",
      printBtn: "Print / Save PDF",
      closeBtn: "Close",
    },
    policy: {
      eyebrow: "Policy & Confirmation",
      title: "Clear, fair rules — zero surprises",
      subtitle: "Everything you need to know before picking up your gear in Pinnaduwa, Galle.",
      items: [
        {
          title: "LKR 500 Advance to Reserve",
          body: "Paying an LKR 500 advance locks in your items for your dates. WhatsApp us the payment receipt along with your required items, pick-up date, and return date to confirm.",
        },
        {
          title: "Orders Without Advance Payment",
          body: "Orders without an advance payment can only receive items subject to availability on that day. Call 070 215 6828 to check before heading over.",
        },
        {
          title: "Refundable Security Deposit",
          body: "A refundable deposit — Cash, NIC, or Driving License — is held on collection and returned in full once all items are returned in good condition.",
        },
        {
          title: "Return Before 12:00 PM",
          body: "Please return all rented gear before 12:00 PM on your return date. Picking up in the evening for a next-morning trip? Tick the evening pick-up option so you aren't billed for that extra night.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Quick answers before you pack",
      items: [
        {
          q: "How does the multi-day pricing work?",
          a: "You pay the full 1st-day rate for Day 1, and every extra day is 50% off (1 day = 1×, 2 days = 1.5×, 3 days = 2×, 4 days = 2.5×). For example, a 4 Person Manual Tent for 3 days is LKR 1,800 instead of LKR 2,700.",
        },
        {
          q: "Are rain covers and ground sheets really free?",
          a: "Yes! Every tent rental includes a FREE Rain Cover and Ground Sheet at no extra charge.",
        },
        {
          q: "Why isn't the Gas Tin multiplied by days?",
          a: "Gas Tins (Gas Cans) are charged at a flat rate of LKR 1,000 per rental regardless of how many days your trip lasts.",
        },
        {
          q: "How do I confirm and reserve my items?",
          a: "Send your booking via WhatsApp to 070 215 6828, pay the LKR 500 advance, and WhatsApp the payment receipt with your required items, pick-up date, and return date.",
        },
        {
          q: "What if I pick up the gear the evening before my trip?",
          a: "Tick 'Evening pick-up (trip starts next morning)' in the booking form. Your billed days will be reduced by 1 (minimum 1 day).",
        },
        {
          q: "What do I need to bring for the deposit?",
          a: "Bring a refundable deposit in the form of Cash, your NIC, or your Driving License when collecting your gear at S.C.W Electrical, Pinnaduwa, Galle. All items must be returned before 12:00 PM on the return date.",
        },
      ],
    },
    footer: {
      tagline: "Gear up and Camp on",
      addressLabel: "Pick-up Location",
      mapLinkText: "Open in Google Maps",
      callLabel: "Call / WhatsApp",
      facebookLabel: "Follow on Facebook",
      rights: "Camping Gear Hub — Galle. All rights reserved.",
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
      gear: "Gear",
      packages: "Packages",
      pricing: "මිල ගණන්",
      policy: "නීති රීති",
      faq: "ප්‍රශ්න",
      cart: "Booking",
    },
    hero: {
      eyebrow: "Pinnaduwa, Galle · දිනපතා විවෘතයි",
      title: "තරු යට රැයක්. අපි ගෙන එනවා Gear.",
      subtitle:
        "Tents LKR 900 සිට — සෑම tent එකක් සමඟම Rain Cover සහ Ground Sheet නොමිලේ! පළමු දිනය සම්පූර්ණ මුදල, අමතර සෑම දිනයකටම 50% වට්ටමක්.",
      ctaGear: "Gear බලන්න",
      ctaPackages: "Quick Start Packages",
      exampleLabel: "Trip උදාහරණයක්",
      exampleTitle: "4-person tent · දින 3",
      examplePrice: "LKR 1,800",
      exampleSave: "LKR 900 ඉතිරියක්",
      scrollHint: "පහළට scroll කර gear බලන්න",
    },
    trust: {
      freeKit: "Rain cover & ground sheet නොමිලේ",
      halfPrice: "අමතර දින 50% off",
      gallePickup: "ගාල්ලෙන් පහසුවෙන් pick-up",
      whatsappSupport: "WhatsApp හරහා ඉක්මන් booking",
    },
    packages: {
      eyebrow: "Quick Start Camping Packages",
      title: "එක click එකෙන් මුළු camp එකම සූදානම්",
      subtitle:
        "2, 4 හෝ 6 දෙනෙකුගේ trip වලට වෙන වෙනම ගන්නවට වඩා අඩු මිලට. Rain Cover සහ Ground Sheet නොමිලේ.",
      popularBadge: "වැඩිම ඉල්ලුම",
      freeKitNote: "+ Rain Cover සහ Ground Sheet නොමිලේ",
      regularLabel: "සාමාන්‍ය 1st day",
      firstDayLabel: "/ 1st day",
      savePrefix: "ඉතිරිය",
      selectBtn: "Package තෝරන්න",
      selectedBtn: "Cart එකේ ඇත",
      peopleSuffix: "දෙනෙකුට",
    },
    gear: {
      eyebrow: "Rental Catalog",
      title: "ඔබේ trip එකට අවශ්‍ය gear තෝරන්න",
      subtitle:
        "සෑම tent එකක් සමඟම Rain Cover & Ground Sheet නොමිලේ. පහතින් items එකතු කර මුළු මුදල බලන්න.",
      searchPlaceholder: "Tent, BBQ, stove, chair සොයන්න...",
      freeKitBadge: "Rain Cover & Ground Sheet නොමිලේ",
      flatBadge: "එක් වරක් පමණයි",
      perFirstDay: "/ 1st day",
      extraDayPrefix: "+ ",
      extraDaySuffix: " / අමතර දිනය",
      flatNote: "Flat fee · දින ගණනට වැඩි නොවේ",
      addBtn: "Add",
      emptyTitle: "ඔබ සෙවූ item හමු නොවීය",
      emptySubtitle: "වෙනත් නමකින් search කරන්න හෝ All තෝරන්න.",
      clearSearch: "සියලු gear පෙන්වන්න",
    },
    pricingExplainer: {
      eyebrow: "මිල ගණනය වන ආකාරය",
      title: "පළමු දිනය full price, අමතර සෑම දිනයක්ම 50% off",
      subtitle:
        "දින ගණන වැඩි වන විට දිනකට යන වියදම ගොඩක් අඩුයි. පසුදා උදෑසන trip එකට හවස gear ගන්නවා නම් එම රාත්‍රියට අය නොකෙරේ.",
      dayLabel: "දිනය",
      ourPriceLabel: "අපේ මිල",
      fullPriceLabel: "සෑම දිනකම full price නම්",
      exampleBadge: "සැබෑ Trip උදාහරණය",
      exampleHeading: "4 Person Manual Tent · දින 3ක Trip එකක්",
      exampleBody: "ගෙවිය යුත්තේ LKR 1,800 (2× rate)",
      exampleInstead: "LKR 2,700 වෙනුවට",
      exampleSave: "LKR 900 ඉතිරි",
    },
    howItWorks: {
      eyebrow: "පියවර 3න් Booking",
      title: "මිනිත්තු කිහිපයකින් ඔබේ gear වෙන්කරගන්න",
      step1Title: "1. Gear හෝ Package තෝරන්න",
      step1Desc:
        "Quick Start Package එකක් හෝ ඔබට අවශ්‍ය tent, stove, BBQ, light වෙන වෙනම තෝරන්න.",
      step2Title: "2. දින සඳහන් කරන්න",
      step2Desc:
        "Pick-up සහ Return දින තෝරන්න. පෙර දින හවස ගන්නවා නම් evening pick-up tick කරන්න.",
      step3Title: "3. WhatsApp & Invoice",
      step3Desc:
        "WhatsApp හරහා booking එක යවා රු.500 advance ගෙවා confirm කරන්න. PDF invoice එකත් ගන්න පුළුවන්.",
    },
    booking: {
      drawerTitle: "ඔබේ Booking විස්තර",
      emptyCartTitle: "තවම කිසිදු item එකක් තෝරා නැත",
      emptyCartDesc: "මුළු මුදල බලාගැනීමට tent, stove හෝ Quick Start Package එකක් එකතු කරන්න.",
      browseGearBtn: "Gear බලන්න",
      itemsSelected: "items තෝරා ඇත",
      packageActive: "Package Active",
      packageRemovedNote: "ප්‍රමාණය වෙනස් කළ බැවින් සාමාන්‍ය item මිල ගණනය වේ.",
      nameLabel: "ඔබේ නම",
      namePlaceholder: "උදා: කසුන් පෙරේරා",
      phoneLabel: "දුරකථන අංකය (අත්‍යවශ්‍ය නොවේ)",
      phonePlaceholder: "07X XXX XXXX",
      pickupLabel: "Pick-up දිනය",
      returnLabel: "Return දිනය",
      daysLabel: "දින ගණන",
      eveningPickupLabel: "හවස Pick-up (පසුදා උදෑසන trip එක)",
      eveningPickupHint: "ගණනය වන දින ගණනින් දින 1ක් අඩු වේ (අවම දින 1).",
      notesLabel: "විශේෂ සටහන් (අත්‍යවශ්‍ය නොවේ)",
      notesPlaceholder: "Pick-up වේලාව, අමතර විස්තර...",
      summaryTitle: "මිල විස්තරය",
      subtotalLabel: "මුළු Rental එකතුව",
      packageDiscountLabel: "Package වට්ටම",
      totalLabel: "ඇස්තමේන්තුගත මුළු මුදල",
      youSaveLabel: "ඔබේ ඉතිරිය",
      advanceLabel: "වෙන්කිරීමට Advance",
      advanceValue: "LKR 500",
      depositLabel: "ආපසු ලැබෙන Deposit",
      depositValue: "මුදල්, NIC හෝ Driving License",
      returnBeforeNote: "Return දිනයේ දහවල් 12:00ට පෙර සියලු items භාර දිය යුතුය.",
      sinhalaNotice:
        "Advance ගෙවීම් නොකරන orders සඳහා items ලබා දීමට හැකිවනුයේ එදින පවතින availability එක අනුව පමණි. Item වෙන් කර තබා ගැනීම සඳහා රු.500 අත්තිකාරම් මුදලක් ගෙවිය යුතු වේ.",
      sinhalaCallNotice: "ඇමතුමක් දී අදාල දින දන්වා වෙන්කරවා ගන්න.",
      sendWhatsAppBtn: "WhatsApp හරහා Booking යවන්න",
      copyTextBtn: "Booking Text Copy කරන්න",
      copiedBtn: "Copy වුණා!",
      invoiceBtn: "Invoice / PDF",
      clearCartBtn: "Clear all",
      errors: {
        noItems: "කරුණාකර අවම වශයෙන් item 1ක් වත් එකතු කරන්න.",
        noName: "කරුණාකර ඔබේ නම ඇතුළත් කරන්න.",
        invalidDates: "කරුණාකර නිවැරදි pick-up සහ return දින තෝරන්න.",
        returnBeforePickup: "Return දිනය pick-up දිනයට පසුව විය යුතුය.",
      },
    },
    invoice: {
      title: "Rental Estimate / Invoice",
      invoiceNo: "Invoice No",
      issueDate: "නිකුත් කළ දිනය",
      billedTo: "පාරිභෝගිකයා",
      rentalPeriod: "කාල සීමාව",
      pickup: "Pick-up",
      returnText: "Return (12:00 PMට පෙර)",
      duration: "දින ගණන",
      itemCol: "Item",
      baseRateCol: "1st Day මිල",
      qtyCol: "ප්‍රමාණය",
      tierCol: "අනුපාතය",
      amountCol: "මුදල",
      flatTier: "Flat / rental",
      packageDiscount: "Package වට්ටම",
      subtotal: "මුළු මුදල",
      advanceRequired: "Advance ගෙවා ඇත (LKR 500)",
      markAdvancePaid: "LKR 500 advance ගෙවූ ලෙස සලකුණු කරන්න",
      balanceDue: "භාරගැනීමේදී ගෙවිය යුතු ඉතිරිය",
      policyHeading: "කොන්දේසි සහ තහවුරු කිරීම",
      printBtn: "Print / Save PDF",
      closeBtn: "වසන්න",
    },
    policy: {
      eyebrow: "නීති රීති සහ තහවුරු කිරීම",
      title: "පැහැදිලි සහ සාධාරණ කොන්දේසි",
      subtitle: "Pinnaduwa, Galle වෙතින් gear ලබා ගැනීමට පෙර දැනගත යුතු කරුණු.",
      items: [
        {
          title: "රු.500 Advance මුදලින් වෙන්කරගන්න",
          body: "ඔබේ දින සඳහා items වෙන්කර තබා ගැනීමට රු.500 අත්තිකාරම් මුදලක් ගෙවා, payment receipt එක, අවශ්‍ය items, pick-up හා return දින WhatsApp කරන්න.",
        },
        {
          title: "Advance නොමැති Orders",
          body: "Advance ගෙවීම් නොකරන orders සඳහා items ලබා දීමට හැකිවනුයේ එදින පවතින availability එක අනුව පමණි. පැමිණීමට පෙර 070 215 6828 අමතා විමසන්න.",
        },
        {
          title: "ආපසු ලැබෙන Deposit",
          body: "Gear ලබාගැනීමේදී මුදල්, ජාතික හැඳුනුම්පත (NIC) හෝ රියදුරු බලපත්‍රය (Driving License) ආපසු ලැබෙන ඇපයක් ලෙස තැබිය යුතුය.",
        },
        {
          title: "දහවල් 12:00ට පෙර Return කරන්න",
          body: "Return දිනයේ දහවල් 12:00ට පෙර සියලු items භාර දිය යුතුය. පෙර දින හවස gear ගන්නවා නම් evening pick-up තෝරන්න.",
        },
      ],
    },
    faq: {
      eyebrow: "නිතර අසන ප්‍රශ්න (FAQ)",
      title: "Trip එකට පෙර දැනගත යුතු දේ",
      items: [
        {
          q: "දින කිහිපයකට මිල ගණනය වන්නේ කෙසේද?",
          a: "පළමු දිනයට සම්පූර්ණ මිලත්, අමතර සෑම දිනයකටම 50%ක් පමණක් අය කෙරේ (1 day = 1×, 2 days = 1.5×, 3 days = 2×). උදාහරණයක් ලෙස 4 Person Manual Tent දින 3කට LKR 2,700 වෙනුවට LKR 1,800ක් පමණි.",
        },
        {
          q: "Rain cover සහ Ground sheet ඇත්තටම නොමිලේද?",
          a: "ඔව්! සෑම tent rental එකක් සමඟම Rain Cover සහ Ground Sheet කිසිදු අමතර ගාස්තුවකින් තොරව නොමිලේ ලැබේ.",
        },
        {
          q: "Gas Tin සඳහා දින ගණනට අය නොකරන්නේ ඇයි?",
          a: "Gas Tin (Gas Can) සඳහා දින ගණන නොසලකා එක් rental එකකට LKR 1,000ක ස්ථාවර මුදලක් පමණක් අය කෙරේ.",
        },
        {
          q: "මගේ items වෙන්කර confirm කරගන්නේ කෙසේද?",
          a: "WhatsApp හරහා 070 215 6828 වෙත booking එක යවා, රු.500 advance ගෙවා, payment receipt එක සහ අවශ්‍ය දින WhatsApp කරන්න.",
        },
        {
          q: "Trip එකට පෙර දින හවස gear ගන්න පුළුවන්ද?",
          a: "ඔව්, booking form එකේ 'හවස Pick-up' කොටුව tick කරන්න. එවිට ගණනය වන දින ගණනින් දින 1ක් අඩු වේ (අවම දින 1).",
        },
        {
          q: "Deposit එක සඳහා ගෙන ආ යුත්තේ මොනවාද?",
          a: "S.C.W Electrical, Pinnaduwa, Galle වෙතින් gear ලබාගැනීමේදී මුදල්, NIC හෝ Driving License deposit එකක් ලෙස තැබිය යුතුය.",
        },
      ],
    },
    footer: {
      tagline: "Gear up and Camp on",
      addressLabel: "ලිපිනය",
      mapLinkText: "Google Maps වලින් බලන්න",
      callLabel: "ඇමතුම් / WhatsApp",
      facebookLabel: "Facebook පිටුව",
      rights: "Camping Gear Hub — Galle. සියලුම හිමිකම් ඇවිරිණි.",
    },
  },
};
