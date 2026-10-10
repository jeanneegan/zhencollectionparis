import type { Locale } from "@/app/artists/[slug]/data";

export type ResidencySectionId = "zcp";

export type ResidencySection = {
  id: ResidencySectionId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const residencyPageIntro: Record<Locale, string> = {
  zh: "ZCP 发起或合作的艺术家驻地计划，与不同城市的艺术机构、独立空间及合作伙伴共同创造驻地机会，让艺术家进入新的城市、文化与日常生活，在真实的相遇中展开创作。",
  fr: "Programme de résidences d'artistes initié ou co-organisé par ZCP, avec des institutions artistiques, des espaces indépendants et des partenaires dans différentes villes — pour ouvrir des opportunités de résidence, faire entrer les artistes dans une nouvelle ville, une autre culture et le quotidien, et développer la création dans de vraies rencontres.",
  en: "Artist residency programmes initiated or co-organized by ZCP, with art institutions, independent spaces, and partners in different cities — creating residency opportunities for artists to enter new cities, cultures, and everyday life, and to develop their work through genuine encounter.",
};

export const residencySections: ResidencySection[] = [
  {
    id: "zcp",
    title: {
      fr: "ZCP RESIDENCIES · 艺术家驻地",
      zh: "ZCP RESIDENCIES · 艺术家驻地",
      en: "ZCP RESIDENCIES · 艺术家驻地",
    },
    description: {
      fr: "",
      zh: "",
      en: "",
    },
  },
];

export type ResidencyListing = {
  id: string;
  sectionId: ResidencySectionId;
  href?: string;
  openInNewTab?: boolean;
  title: Record<Locale, string>;
  location?: Record<Locale, string>;
};

export const residencyListings: ResidencyListing[] = [
  {
    id: "zcp-shenzhen",
    sectionId: "zcp",
    title: {
      fr: "Shenzhen · 深圳",
      zh: "Shenzhen · 深圳",
      en: "Shenzhen · 深圳",
    },
  },
];
