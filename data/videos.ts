export interface HeroVideoAsset {
  id: string;
  src: string;
  poster: string;
  labelEn: string;
  labelSi: string;
}

export const HERO_VIDEOS: HeroVideoAsset[] = [
  {
    id: "jungle-camp",
    src: "/videos/hero-1.mp4",
    poster: "/hero_image.jpg",
    labelEn: "Jungle Stream Camp",
    labelSi: "වනාන්තර Camp",
  },
  {
    id: "coastal-sunset",
    src: "/videos/hero-2.mp4",
    poster: "/hero_image.jpg",
    labelEn: "Coastal Sunset Camp",
    labelSi: "වෙරළබඩ Sunset Camp",
  },
  {
    id: "riverside-lights",
    src: "/videos/hero-3.mp4",
    poster: "/hero_image.jpg",
    labelEn: "Campfire & String Lights",
    labelSi: "ගිනිමැලය සහ ආලෝකය",
  },
];
