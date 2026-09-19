import type { LocalizedText } from "@/app/artists/[slug]/data";

export type Festival = {
  id: string;
  title: LocalizedText;
  year: number;
  intro: LocalizedText;
  detail?: LocalizedText;
  detailExtra?: LocalizedText;
  eyebrow?: LocalizedText;
  meta?: LocalizedText;
  scheduleNote?: LocalizedText;
  cta?: { label: LocalizedText; href: string };
  href?: string;
};

const festivals: Record<string, Festival> = {
  "zcp-annual-paris-2027": {
    id: "zcp-annual-paris-2027",
    year: 2027,
    title: {
      zh: "ZCP 2027巴黎年度展",
      fr: "Exposition annuelle ZCP 2027 · Paris",
      en: "ZCP 2027 Annual Exhibition · Paris",
    },
    intro: {
      zh: "Zhen Collection Paris 将在巴黎举办年度集体展，集中呈现 ZCP Emerging Artists Programme 2027 入选艺术家的创作。",
      fr: "Zhen Collection Paris organisera à Paris une exposition collective annuelle, consacrée aux artistes sélectionnés dans le cadre du ZCP Emerging Artists Programme 2027.",
      en: "Zhen Collection Paris will present an annual group exhibition in Paris, focusing on artists selected for the ZCP Emerging Artists Programme 2027.",
    },
    detail: {
      zh: "展览将展出由 ZCP 制作的艺术版画，并根据策展方案呈现部分艺术家的原作。这将成为 24 位入选艺术家与观众、策展人、画廊及其他艺术专业人士在巴黎相遇的年度时刻。",
      fr: "L'exposition présentera des estampes d'art réalisées par ZCP, ainsi que des œuvres originales selon le projet curatoriel. Ce sera le rendez-vous parisien de l'année pour les 24 artistes sélectionnés, le public, les commissaires, les galeries et les professionnels de l'art.",
      en: "The show will include art prints produced by ZCP, with selected artists' originals where the curatorial plan allows. It will be the annual moment in Paris for the 24 selected artists to meet audiences, curators, galleries, and other art professionals.",
    },
    meta: {
      zh: "24 位艺术家 · 巴黎 · 2027",
      fr: "24 artistes · Paris · 2027",
      en: "24 artists · Paris · 2027",
    },
    scheduleNote: {
      zh: "具体日期、场地及展期将于确认后公布。",
      fr: "Dates, lieu et durée seront annoncés après confirmation.",
      en: "Dates, venue, and duration will be announced once confirmed.",
    },
    cta: {
      href: "/opportunites/emerging-artists-2027",
      label: {
        zh: "查看 2027 艺术家计划 · 提交申请",
        fr: "Voir le programme 2027 · Candidater",
        en: "View the 2027 programme · Apply",
      },
    },
  },
  "cafe-art-print-tour": {
    id: "cafe-art-print-tour",
    year: 2026,
    eyebrow: {
      zh: "艺术进入日常",
      fr: "L'art dans le quotidien",
      en: "Art in everyday life",
    },
    title: {
      zh: "咖啡馆艺术版画展",
      fr: "Expositions d'estampes d'art · cafés",
      en: "Café art print exhibitions",
    },
    intro: {
      zh: "Zhen Collection Paris 将艺术家的作品制作成艺术版画，带入巴黎、深圳及其他城市的咖啡馆、书店、旅店和日常生活空间。",
      fr: "Zhen Collection Paris transforme les œuvres des artistes en estampes d'art et les présente dans des cafés, librairies, hôtels et lieux du quotidien à Paris, Shenzhen et d'autres villes.",
      en: "Zhen Collection Paris turns artists' work into art prints and brings them into cafés, bookshops, hotels, and everyday spaces in Paris, Shenzhen, and other cities.",
    },
    detail: {
      zh: "人们不一定专程为看展而来，却可以在喝咖啡、阅读、旅行或短暂停留的过程中与艺术相遇。",
      fr: "Le public ne vient pas toujours pour une exposition, mais croise l'art en buvant un café, en lisant, en voyageant ou en s'arrêtant un instant.",
      en: "People may not come specifically for an exhibition, yet they can meet art while having coffee, reading, travelling, or pausing for a moment.",
    },
    detailExtra: {
      zh: "这一流动展览计划连接艺术家、合作空间与公众，让艺术离开传统展厅，进入真实的城市生活。",
      fr: "Ce programme d'exposition itinérante relie artistes, lieux partenaires et public — l'art sort du white cube pour entrer dans la vie urbaine réelle.",
      en: "This roaming exhibition programme connects artists, partner venues, and the public—art leaves the traditional gallery and enters real city life.",
    },
    meta: {
      zh: "巴黎 · 深圳 · 纽约 · 持续发展中",
      fr: "Paris · Shenzhen · New York · en développement",
      en: "Paris · Shenzhen · New York · ongoing",
    },
    cta: {
      href: "/apropos#contact",
      label: {
        zh: "了解项目 · 成为全球合作空间",
        fr: "Découvrir le projet · Devenir espace partenaire",
        en: "About the project · Become a partner venue",
      },
    },
  },
};

export function getFestivalById(id: string): Festival | null {
  return festivals[id] ?? null;
}

export function getAllFestivalIds(): string[] {
  return Object.keys(festivals).sort((a, b) => {
    const yearA = festivals[a]?.year ?? 0;
    const yearB = festivals[b]?.year ?? 0;
    return yearB - yearA;
  });
}
