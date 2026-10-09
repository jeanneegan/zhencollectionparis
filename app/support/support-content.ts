import type { Locale } from "@/app/artists/[slug]/data";

export type SupportSubsection = {
  anchorId?: string;
  heading: Record<Locale, string>;
  paragraphs?: Record<Locale, string[]>;
  bullets?: Record<Locale, string[]>;
};

export type SupportContent = {
  lead: Record<Locale, string[]>;
  paragraphs: Record<Locale, string[]>;
  subsections: SupportSubsection[];
  closing: Record<Locale, string>;
};

export const supportContent: SupportContent = {
  lead: {
    zh: [
      "Support artists. Make encounters possible.",
      "支持艺术家，让相遇发生。",
    ],
    fr: [
      "Support artists. Make encounters possible.",
      "支持艺术家，让相遇发生。",
    ],
    en: ["Support artists. Make encounters possible."],
  },
  paragraphs: {
    zh: [
      "ZHEN COLLECTION PARIS 致力于支持年轻艺术家，并通过对话、展览、驻地、出版与 Prix WE，在不同城市之间创造艺术与人的相遇。",
      "我们欢迎企业、机构与个人，以不同方式参与和支持 ZCP 的发展。",
    ],
    fr: [
      "Zhen Collection Paris s'engage à soutenir les artistes émergents et à créer, par le dialogue, les expositions, les résidences, les éditions et le Prix WE, des rencontres entre l'art et les personnes, ici et entre les villes.",
      "Entreprises, institutions et particuliers sont les bienvenus pour participer au développement de ZCP, de manières diverses.",
    ],
    en: [
      "Zhen Collection Paris is committed to supporting emerging artists and, through dialogue, exhibitions, residencies, editions, and the Prix WE, creating encounters between art and people across cities.",
      "We welcome companies, institutions, and individuals to take part in ZCP's development in different ways.",
    ],
  },
  subsections: [
    {
      heading: {
        zh: "MÉCÉNAT · 赞助",
        fr: "MÉCÉNAT · 赞助",
        en: "MÉCÉNAT · Patronage",
      },
      bullets: {
        zh: [
          "Prix WE · WE 艺术奖",
          "Expositions · 国际艺术展",
          "Résidences · 艺术家驻地",
          "Éditions & Publications · 限量作品与出版",
        ],
        fr: [
          "Prix WE · WE 艺术奖",
          "Expositions · 国际艺术展",
          "Résidences · 艺术家驻地",
          "Éditions & Publications · 限量作品与出版",
        ],
        en: [
          "Prix WE",
          "Expositions",
          "Residencies",
          "Editions & publications",
        ],
      },
      paragraphs: {
        zh: [
          "企业与机构可以支持 ZCP 的年度项目，或选择支持特定项目，包括：",
          "我们也欢迎根据合作伙伴的文化理念与项目方向，共同设计长期合作。",
        ],
        fr: [
          "Les entreprises et institutions peuvent soutenir le programme annuel de ZCP, ou choisir un projet spécifique, notamment :",
          "Nous accueillons aussi la co-conception de partenariats durables, alignés sur la vision culturelle et les orientations de projet de chaque partenaire.",
        ],
        en: [
          "Companies and institutions can support ZCP's annual programme, or choose to support specific projects, including:",
          "We also welcome designing long-term collaboration around each partner's cultural vision and project direction.",
        ],
      },
    },
    {
      heading: {
        zh: "DON · 捐赠",
        fr: "DON · 捐赠",
        en: "DON · Donations",
      },
      paragraphs: {
        zh: [
          "个人捐赠将用于支持艺术家的创作、专业呈现、展览、驻地及跨城市交流。",
          "每一份支持，都帮助一个作品被看见，一次相遇真正发生。",
        ],
        fr: [
          "Les dons individuels soutiennent la création des artistes, leur présentation professionnelle, les expositions, les résidences et les échanges entre villes.",
          "Chaque contribution aide une œuvre à être vue et une rencontre à devenir réelle.",
        ],
        en: [
          "Individual donations support artists' practice, professional presentation, exhibitions, residencies, and cross-city exchange.",
          "Every gift helps a work be seen and an encounter truly happen.",
        ],
      },
    },
  ],
  closing: {
    zh: "Contact us to support or collaborate with ZCP.",
    fr: "Contact us to support or collaborate with ZCP.",
    en: "Contact us to support or collaborate with ZCP.",
  },
};

