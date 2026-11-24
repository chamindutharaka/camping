export interface HeroVideoAsset {
  id: string;
  src: string;
  poster: string;
  labelEn: string;
  labelSi: string;
}

export const HERO_VIDEOS: HeroVideoAsset[] = [
  {
    id: "forest-camp",
    src: "/videos/hero-1.mp4",
    poster: "/hero_image.jpg",
    labelEn: "Tropical Forest Camp",
    labelSi: "වනාන්තර Camp",
  },
  {
    id: "river-camp",
    src: "/videos/hero-2.mp4",
    poster: "/hero_image.jpg",
    labelEn: "Riverside Evening",
    labelSi: "ගං ඉවුරේ රැයක්",
  },
  {
    id: "bonfire-night",
    src: "/videos/hero-3.mp4",
    poster: "/hero_image.jpg",
    labelEn: "Mountain Bonfire",
    labelSi: "ගිනිමැලය සහ කඳු",
  },
];
