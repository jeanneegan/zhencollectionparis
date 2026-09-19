import type { Locale } from "@/app/artists/[slug]/data";

export type ResidencySectionId = "zcp" | "partner" | "open";

export type ResidencySection = {
  id: ResidencySectionId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const residencySections: ResidencySection[] = [
  {
    id: "zcp",
    title: {
      fr: "ZCP Residencies",
      zh: "ZCP Residencies",
      en: "ZCP Residencies",
    },
    description: {
      fr: "巴黎臻藏发起或合作的驻地",
      zh: "巴黎臻藏发起或合作的驻地",
      en: "Residencies initiated or co-organized by Zhen Collection Paris",
    },
  },
  {
    id: "partner",
    title: {
      fr: "Partner Residencies",
      zh: "Partner Residencies",
      en: "Partner Residencies",
    },
    description: {
      fr: "合作机构提供的驻地",
      zh: "合作机构提供的驻地",
      en: "Residencies offered by partner institutions",
    },
  },
  {
    id: "open",
    title: {
      fr: "Open Residencies",
      zh: "Open Residencies",
      en: "Open Residencies",
    },
    description: {
      fr: "法国、中国及其他城市目前开放申请的驻地",
      zh: "法国、中国及其他城市目前开放申请的驻地",
      en: "Residencies currently open for application in France, China, and other cities",
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
    id: "zcp-emerging-artists-2027",
    sectionId: "zcp",
    href: "/opportunites/emerging-artists-2027",
    openInNewTab: false,
    title: {
      fr: "ZCP Emerging Artists Programme 2027",
      zh: "ZCP 2027青年艺术家计划",
      en: "ZCP Emerging Artists Programme 2027",
    },
    location: {
      fr: "Candidatures · 21 sept. – 20 déc. 2026 · Paris · Shenzhen",
      zh: "报名 · 2026.09.21 – 2026.12.20 · 巴黎 · 深圳",
      en: "Applications · Sep 21 – Dec 20, 2026 · Paris · Shenzhen",
    },
  },
];
