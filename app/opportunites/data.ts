import type { Locale } from "@/app/artists/[slug]/data";

export type ResidencySectionId = "zcp" | "partner";

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
  {
    id: "partner",
    title: {
      fr: "Partner Residencies · 合作驻地",
      zh: "Partner Residencies · 合作驻地",
      en: "Partner Residencies · 合作驻地",
    },
    description: {
      fr: "More cities to come · 更多城市持续加入",
      zh: "More cities to come · 更多城市持续加入",
      en: "More cities to come · 更多城市持续加入",
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
    id: "zcp-paris",
    sectionId: "zcp",
    title: {
      fr: "Paris · 巴黎",
      zh: "Paris · 巴黎",
      en: "Paris · 巴黎",
    },
  },
  {
    id: "zcp-shenzhen",
    sectionId: "zcp",
    title: {
      fr: "Shenzhen · 深圳",
      zh: "Shenzhen · 深圳",
      en: "Shenzhen · 深圳",
    },
  },
  {
    id: "zcp-young-artists-france",
    sectionId: "zcp",
    href: "/opportunites/young-artists-france",
    openInNewTab: false,
    title: {
      fr: "ZCP — Jeunes artistes en France",
      zh: "ZCP 招募在法国的青年艺术家",
      en: "ZCP Young Artists in France",
    },
    location: {
      fr: "Coopération annuelle · dossiers trilingues · Paris",
      zh: "年度合作 · 三语档案 · 巴黎",
      en: "Annual partnership · trilingual profiles · Paris",
    },
  },
  {
    id: "zcp-emerging-artists-2028",
    sectionId: "zcp",
    href: "/opportunites/emerging-artists-2028",
    openInNewTab: false,
    title: {
      fr: "ZCP Emerging Artists Programme 2028",
      zh: "ZCP 2028青年艺术家暨Prix WE奖计划",
      en: "ZCP Emerging Artists Programme 2028",
    },
    location: {
      fr: "Candidatures · 21 sept. – 20 déc. 2027 · Paris · Shenzhen",
      zh: "报名 · 2027.09.21 – 2027.12.20 · 巴黎 · 深圳",
      en: "Applications · Sep 21 – Dec 20, 2027 · Paris · Shenzhen",
    },
  },
];
