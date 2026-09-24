import type { LocalizedText } from "@/app/artists/[slug]/data";

export type Exposition = {
  id: string;
  title: LocalizedText;
  year: number;
  displayOrder?: number;
  intro: LocalizedText;
  detail?: LocalizedText;
  detailExtra?: LocalizedText;
  eyebrow?: LocalizedText;
  meta?: LocalizedText;
  scheduleNote?: LocalizedText;
  cta?: { label: LocalizedText; href: string };
  href?: string;
};

const expositions: Record<string, Exposition> = {
  "zcp-annual-paris-2027": {
    id: "zcp-annual-paris-2027",
    year: 2027,
    displayOrder: 2,
    title: {
      zh: "ZCP 2027 巴黎 · 深圳艺术展",
      fr: "Expositions ZCP 2027 · Paris · Shenzhen",
      en: "ZCP 2027 Paris · Shenzhen Exhibitions",
    },
    intro: {
      zh: "Zhen Collection Paris 将于 2027 年在巴黎与深圳举办年度展览，集中呈现参与 ZCP Conversations 的艺术家及其作品。",
      fr: "Zhen Collection Paris organisera en 2027 des expositions annuelles à Paris et à Shenzhen, mettant en avant les artistes des ZCP Conversations et leurs œuvres.",
      en: "Zhen Collection Paris will hold annual exhibitions in Paris and Shenzhen in 2027, focusing on artists taking part in ZCP Conversations and their work.",
    },
    detail: {
      zh: "展览将从已经发生的对话出发，呈现相关艺术家的原作、ZCP Edition 及对话档案，让线上发生的相遇进入真实的城市空间，并在巴黎与深圳继续展开。",
      fr: "À partir des dialogues déjà publiés, les expositions présenteront des œuvres originales, des ZCP Editions et des archives de conversation — pour que les rencontres en ligne entrent dans l'espace urbain réel et se poursuivent entre Paris et Shenzhen.",
      en: "Building on dialogues already published, the exhibitions will present original works, ZCP Editions, and dialogue archives—bringing online encounters into real city spaces and continuing across Paris and Shenzhen.",
    },
    meta: {
      zh: "艺术家 · 对话 · 作品\nParis ↔ Shenzhen · 2027",
      fr: "Artistes · Dialogues · Œuvres\nParis ↔ Shenzhen · 2027",
      en: "Artists · Dialogues · Works\nParis ↔ Shenzhen · 2027",
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
    displayOrder: 1,
    eyebrow: {
      zh: "艺术走入生活",
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
      href: "/contact",
      label: {
        zh: "了解项目 · 成为全球合作空间",
        fr: "Découvrir le projet · Devenir espace partenaire",
        en: "About the project · Become a partner venue",
      },
    },
  },
};

export function getExpositionById(id: string): Exposition | null {
  return expositions[id] ?? null;
}

export function getAllExpositionIds(): string[] {
  return Object.keys(expositions).sort((a, b) => {
    const orderA = expositions[a]?.displayOrder ?? expositions[a]?.year ?? 0;
    const orderB = expositions[b]?.displayOrder ?? expositions[b]?.year ?? 0;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return (expositions[b]?.year ?? 0) - (expositions[a]?.year ?? 0);
  });
}
