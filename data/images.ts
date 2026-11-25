export interface ImageAsset {
  src: string;
  alt: string;
}

const U = "https://images.unsplash.com/photo-";
const Q = "?auto=format&fit=crop&w=900&q=80";
const H = "?auto=format&fit=crop&w=2000&q=85";

export const HERO_IMAGES: ImageAsset[] = [
  {
    src: `${U}1736606355698-5efdb410fe93${H}`,
    alt: "Camping tents pitched along a scenic coastal landscape at sunset",
  },
  {
    src: `${U}1504280390367-361c6d9f38f4${H}`,
    alt: "Camping tent pitched in the mountains at golden hour",
  },
  {
    src: `${U}1478131143081-80f7f84ca84d${H}`,
    alt: "Illuminated camping tent under a starry night sky in the woods",
  },
];

export const HERO_IMAGE: ImageAsset = HERO_IMAGES[0];

export const PACKAGE_IMAGES: Record<string, ImageAsset> = {
  "couple-pack": {
    src: `${U}1496080174650-637e3f22fa03?auto=format&fit=crop&w=1200&q=80`,
    alt: "Glowing 2-person camping tent in a tranquil forest at twilight",
  },
  "4-person-pack": {
    src: `${U}1646912951442-7a2bc5e8cd06?auto=format&fit=crop&w=1200&q=80`,
    alt: "Friends gathered around a warm campfire beside glowing tents",
  },
  "6-person-pack": {
    src: `${U}1736606355698-5efdb410fe93?auto=format&fit=crop&w=1200&q=80`,
    alt: "Multiple camping tents pitched along a scenic coastal landscape at sunset",
  },
};

export const ITEM_IMAGES: Record<string, ImageAsset> = {
  "tent-6-manual": { src: `${U}1504280390367-361c6d9f38f4${Q}`, alt: "6 Person Manual Tent pitched outdoors at sunset" },
  "tent-6-auto": { src: `${U}1478131143081-80f7f84ca84d${Q}`, alt: "6 Person Auto Tent set up in a scenic camp clearing" },
  "tent-4-manual": { src: `${U}1523987355523-c7b5b0dd90a7${Q}`, alt: "4 Person Manual Tent surrounded by trees" },
  "tent-4-auto": { src: `${U}1496080174650-637e3f22fa03${Q}`, alt: "4 Person Auto Tent pitched on green grass" },
  "beach-tent": { src: `${U}1507525428034-b723cf961d3e${Q}`, alt: "Sunny tropical beach shoreline for beach tent camping" },
  "rain-cover": { src: `${U}1510312305653-8ed496efae75${Q}`, alt: "Waterproof tent rain cover protecting a campsite" },
  "ground-sheet": { src: `${U}1445308394109-4ec2920981b1${Q}`, alt: "Clean forest floor campsite with protective tent base" },
  "bbq-grill": { src: `${U}1555939594-58d7cb561ad1${Q}`, alt: "Portable charcoal BBQ grill cooking outdoors" },
  "bbq-large": { src: `${U}1529193591184-b1d58069ecdd${Q}`, alt: "Large outdoor BBQ grill for group camping feasts" },
  "cooking-ware-set": { src: `${U}1517824806704-9040b037703b${Q}`, alt: "Compact camp cookware pots and utensils by a tent" },
  "camping-light": { src: `${U}1510312305653-8ed496efae75${Q}`, alt: "Warm glowing camping lantern illuminating a tent" },
  "pb-20k": { src: `${U}1609091839311-d5365f9ff1c5${Q}`, alt: "Portable 20,000mAh power bank charging gear" },
  "gas-stove": { src: `${U}1508873696983-2dfd5898f08b${Q}`, alt: "Portable camping gas stove boiling water outdoors" },
  "gas-stove-windproof": { src: `${U}1476041800959-2f6bb412c8ce${Q}`, alt: "Windproof camping burner in breezy mountain terrain" },
  "camping-chair": { src: `${U}1533873984035-25970ab07461${Q}`, alt: "Foldable camping chair set up beside a campfire" },
  "gas-tin": { src: `${U}1526491109672-74740652b963${Q}`, alt: "Camping butane gas canister for portable stoves" },
};
