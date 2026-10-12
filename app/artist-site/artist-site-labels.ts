import type { Locale } from "@/app/artists/[slug]/data";

export type ArtistSiteLabels = {
  menu: string;
  close: string;
  home: string;
  works: string;
  collection: string;
  shopPurchase: string;
  shopEmpty: string;
  shopPlatformCta: string;
  bio: string;
  exhibitions: string;
  exhibitionCategory: string;
  awardsCategory: string;
  writings: string;
  contact: string;
  zcpPassport: string;
  zcpDialogue: string;
  artistStatement: string;
  hopeToLeave: string;
  education: string;
  career: string;
  awards: string;
  born: string;
  livesIn: string;
  practice: string;
  email: string;
  solo: string;
  duo: string;
  group: string;
};

export const artistSiteLabels: Record<Locale, ArtistSiteLabels> = {
  zh: {
    menu: "Menu · 菜单",
    close: "Close · 关闭",
    home: "首页",
    works: "作品与系列",
    collection: "收藏",
    shopPurchase: "购买",
    shopEmpty:
      "暂无经 ZCP 收藏确认的该艺术家线上 SKU。可在 ZCP 收藏页查看在线购买与出版信息。",
    shopPlatformCta: "前往 ZCP 收藏页",
    bio: "艺术家简介",
    exhibitions: "展览与新闻",
    exhibitionCategory: "展览",
    awardsCategory: "奖项",
    writings: "创作文字与对话",
    contact: "联系",
    zcpPassport: "ZCP 艺术家护照",
    zcpDialogue: "ZCP 完整对话",
    artistStatement: "创作理念",
    hopeToLeave: "我希望被记住的",
    education: "教育背景",
    career: "创作历程",
    awards: "奖项与报道",
    born: "生于",
    livesIn: "现居",
    practice: "实践",
    email: "邮箱",
    solo: "个展",
    duo: "双人展",
    group: "群展",
  },
  fr: {
    menu: "Menu",
    close: "Close",
    home: "Accueil",
    works: "Œuvres & séries",
    collection: "Collection",
    shopPurchase: "Acheter",
    shopEmpty:
      "Aucun SKU en ligne confirmé pour cet artiste dans la collection ZCP. Consultez la page Collection pour l'achat en ligne et les éditions.",
    shopPlatformCta: "Accéder à la collection ZCP",
    bio: "Biographie",
    exhibitions: "Expositions & actualités",
    exhibitionCategory: "Expositions",
    awardsCategory: "Annonces",
    writings: "Textes & conversations",
    contact: "Contact",
    zcpPassport: "Passeport artiste ZCP",
    zcpDialogue: "Conversation ZCP (intégrale)",
    artistStatement: "Démarche",
    hopeToLeave: "Ce que j'espère qu'on retienne",
    education: "Formation",
    career: "Parcours",
    awards: "Prix & mentions",
    born: "Né(e)",
    livesIn: "Vit à",
    practice: "Pratique",
    email: "E-mail",
    solo: "Solo",
    duo: "Duo",
    group: "Collective",
  },
  en: {
    menu: "Menu",
    close: "Close",
    home: "Home",
    works: "Works & series",
    collection: "Collection",
    shopPurchase: "Purchase",
    shopEmpty:
      "No confirmed online collection SKU for this artist at ZCP yet. See the ZCP Collection page for online purchase and editions.",
    shopPlatformCta: "Go to ZCP Collection",
    bio: "Biography",
    exhibitions: "Exhibitions & news",
    exhibitionCategory: "Exhibitions",
    awardsCategory: "Announcements",
    writings: "Writings & dialogue",
    contact: "Contact",
    zcpPassport: "ZCP Artist Passport",
    zcpDialogue: "Full ZCP conversation",
    artistStatement: "Artist statement",
    hopeToLeave: "What I hope to be remembered for",
    education: "Education",
    career: "Career timeline",
    awards: "Awards & recognition",
    born: "Born",
    livesIn: "Based in",
    practice: "Practice",
    email: "Email",
    solo: "Solo",
    duo: "Duo",
    group: "Group",
  },
};
