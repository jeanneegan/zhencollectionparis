import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type ProgrammeSection = {
  id: string;
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
};

export const programmeTitle: LocalizedText = {
  zh: "法国艺术家走进中国",
  fr: "Artistes français en Chine",
  en: "French artists in China",
};

export const programmeSubtitle: LocalizedText = {
  zh: "中文资料、跨文化对话与本地合作支持",
  fr: "Documentation en chinois, dialogues interculturels et accompagnement local",
  en: "Chinese-language materials, cross-cultural dialogue, and local partnership support",
};

export const programmeSections: ProgrammeSection[] = [
  {
    id: "intro",
    title: {
      zh: "关于本项目",
      fr: "À propos du programme",
      en: "About the programme",
    },
    paragraphs: [
      {
        zh: "Zhen Collection Paris（ZCP）面向在法国生活与创作的艺术家，协助其创作与实践以清晰、准确的中文呈现，并在中国及更广泛的华语语境中被看见、被理解。",
        fr: "Zhen Collection Paris (ZCP) accompagne les artistes qui vivent et travaillent en France pour que leur pratique soit présentée en chinois avec clarté et précision, et qu'elle soit vue et comprise en Chine et dans les contextes sinophones.",
        en: "Zhen Collection Paris (ZCP) supports artists living and working in France so their practice can be presented clearly and accurately in Chinese, and be seen and understood in China and across Chinese-language contexts.",
      },
      {
        zh: "项目从中文资料整理起步，延伸至跨文化对话与展览、机构及本地合作伙伴的对接，帮助艺术家逐步建立可持续的跨语境职业路径。",
        fr: "Le programme part de la constitution de dossiers en chinois, puis s'étend aux dialogues interculturels et aux mises en relation avec expositions, institutions et partenaires locaux, pour construire progressivement un parcours professionnel durable entre contextes.",
        en: "The programme begins with Chinese-language documentation, then extends to cross-cultural dialogue and connections with exhibitions, institutions, and local partners, helping artists build a sustainable career path across contexts.",
      },
    ],
  },
  {
    id: "chinese-materials",
    title: {
      zh: "中文资料与呈现",
      fr: "Documentation et présentation en chinois",
      en: "Chinese materials and presentation",
    },
    bullets: [
      {
        zh: "整理艺术家介绍、履历与代表作品说明，建立规范、可读的中文档案。",
        fr: "Structurer présentation, parcours et œuvres en un dossier chinois clair et cohérent.",
        en: "Prepare biographical and portfolio information in clear, consistent Chinese.",
      },
      {
        zh: "在需要时提供中、法、英对照，便于不同背景的观众与专业人士阅读。",
        fr: "Proposer, lorsque pertinent, des versions chinois, français et anglais pour des publics variés.",
        en: "Provide Chinese, French, and English versions when helpful for different audiences.",
      },
      {
        zh: "在 ZCP 网站及合作渠道发布，支持搜索与长期更新。",
        fr: "Publier sur le site ZCP et les canaux partenaires, avec recherche et mises à jour dans le temps.",
        en: "Publish on the ZCP website and partner channels, with search visibility and ongoing updates.",
      },
    ],
  },
  {
    id: "dialogue",
    title: {
      zh: "跨文化对话",
      fr: "Dialogues interculturels",
      en: "Cross-cultural dialogue",
    },
    paragraphs: [
      {
        zh: "ZCP 以对话作为理解创作的核心方式：艺术家、评论者、策展人与观众在不同语言与文化背景下的提问与回应，构成作品意义的延伸。",
        fr: "ZCP place le dialogue au cœur de la compréhension : questions et réponses entre artistes, critiques, commissaires et publics, dans des langues et cultures différentes, prolongent le sens des œuvres.",
        en: "ZCP treats dialogue as central to understanding: questions and answers among artists, critics, curators, and audiences across languages and cultures extend the meaning of the work.",
      },
    ],
    bullets: [
      {
        zh: "组织或推荐与中国及法语区专业人士的结构化交流。",
        fr: "Organiser ou recommander des échanges structurés avec des professionnels en Chine et dans l'espace francophone.",
        en: "Organize or recommend structured exchanges with professionals in China and the Francophone world.",
      },
      {
        zh: "将对话内容以视频、文字或图文形式发布与存档，纳入艺术家长期档案。",
        fr: "Publier et archiver les contenus (vidéo, texte, image-texte) dans le dossier artiste sur le long terme.",
        en: "Publish and archive dialogue content as video, text, or image-text within the artist's long-term file.",
      },
    ],
  },
  {
    id: "local-support",
    title: {
      zh: "本地合作与支持",
      fr: "Partenariats et accompagnement local",
      en: "Local cooperation and support",
    },
    bullets: [
      {
        zh: "根据艺术家创作方向，对接适合的展览、驻地、机构与画廊资源。",
        fr: "Mettre en relation expositions, résidences, institutions et galeries adaptées à la pratique de l'artiste.",
        en: "Connect artists with exhibitions, residencies, institutions, and galleries suited to their practice.",
      },
      {
        zh: "通过深圳、巴黎及合作城市的网络，协调落地细节与跨时区沟通。",
        fr: "Coordonner la mise en œuvre et la communication inter-fuseaux via les réseaux à Shenzhen, Paris et villes partenaires.",
        en: "Coordinate logistics and cross-time-zone communication through networks in Shenzhen, Paris, and partner cities.",
      },
      {
        zh: "作品销售、委托与具体项目由双方另行约定授权、费用与分成。",
        fr: "Ventes, commandes et projets concrets font l'objet d'accords distincts sur droits, frais et partages.",
        en: "Sales, commissions, and specific projects are agreed separately on rights, fees, and revenue sharing.",
      },
    ],
  },
];

export function tProgramme(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
