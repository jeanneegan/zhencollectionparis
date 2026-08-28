import type { Locale } from "@/app/artists/[slug]/data";

export type AboutSectionLink = {
  href: string;
  label: Record<Locale, string>;
  external?: boolean;
};

export type AboutSection = {
  id: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  paragraphs?: Record<Locale, string[]>;
  links?: AboutSectionLink[];
  pageHref?: string;
  pageLabel?: Record<Locale, string>;
};

export const aboutSections: AboutSection[] = [
  {
    id: "who-we-are",
    title: { en: "Who We Are", fr: "Who We Are", zh: "Who We Are" },
    subtitle: {
      en: "Who we are, values and mission",
      fr: "Qui nous sommes, valeurs et mission",
      zh: "我们是谁、理念与使命",
    },
    paragraphs: {
      zh: [
        "巴黎臻藏是一个独立的文化平台，立足巴黎，以对话作为起点，记录艺术家、作品与跨文化相遇。",
        "我们相信艺术首先属于生命；对话本身就是一种创作；每一种真诚的观看都值得被留下。",
        "臻，是不断接近真实与美；藏，是收藏作品的一生，也收藏人与人的相遇与共同记忆。",
      ],
      fr: [
        "Zhen Collection Paris est une plateforme culturelle indépendante, ancrée à Paris, qui prend le dialogue comme point de départ pour documenter artistes, œuvres et rencontres interculturelles.",
        "Nous croyons que l'art appartient d'abord à la vie ; que le dialogue est une forme de création ; et que chaque regard sincère mérite d'être conservé.",
        "Zhen, c'est s'approcher sans cesse ; cang, c'est archiver la vie d'une œuvre autant que la rencontre entre les personnes.",
      ],
      en: [
        "Zhen Collection Paris is an independent cultural platform based in Paris, taking dialogue as its starting point to document artists, artworks, and cross-cultural encounters.",
        "We believe art belongs first to life; that dialogue is a form of creation; and that every sincere act of looking deserves to be preserved.",
        "Zhen means continually approaching truth and beauty; cang means archiving not only a work's life, but also the encounters and shared memory between people.",
      ],
    },
    links: [
      {
        href: "/apropos/pourquoi-le-dialogue",
        label: {
          zh: "为什么是对话？ · Pourquoi le Dialogue ?",
          fr: "Pourquoi le Dialogue ? · 为什么是对话？",
          en: "Why Dialogue?",
        },
      },
    ],
  },
  {
    id: "archive",
    title: { en: "Archive", fr: "Archive", zh: "Archive" },
    subtitle: {
      en: "ZCP activities and projects over the years",
      fr: "Activités et projets ZCP au fil des années",
      zh: "ZCP 历年活动与项目记录",
    },
    paragraphs: {
      zh: [
        "巴黎臻藏持续记录对话、出版、展览与档案项目。以下入口可浏览历年内容与项目记录。",
      ],
      fr: [
        "Zhen Collection Paris documente en continu dialogues, éditions, expositions et projets d'archives. Les entrées ci-dessous permettent de parcourir les contenus et activités.",
      ],
      en: [
        "Zhen Collection Paris continually documents conversations, editions, exhibitions, and archival projects. Use the links below to browse activities and records over time.",
      ],
    },
    links: [
      {
        href: "/dialogues",
        label: {
          zh: "对话归档 · Conversations",
          fr: "Archives · Conversations",
          en: "Conversations archive",
        },
      },
      {
        href: "/editions",
        label: {
          zh: "出版计划 · Editions",
          fr: "Collection éditoriale · Editions",
          en: "Editions programme",
        },
      },
      {
        href: "/artists",
        label: {
          zh: "艺术家档案 · Artists",
          fr: "Archives artistes · Artists",
          en: "Artist archives",
        },
      },
      {
        href: "/oeuvres",
        label: {
          zh: "作品护照 · Artworks",
          fr: "Passeports d'œuvre · Artworks",
          en: "Artwork passports",
        },
      },
    ],
  },
  {
    id: "partners",
    title: { en: "Partners", fr: "Partners", zh: "Partners" },
    subtitle: {
      en: "Partner institutions and supporters",
      fr: "Institutions partenaires et soutiens",
      zh: "合作机构与支持者",
    },
    paragraphs: {
      zh: [
        "巴黎臻藏与画廊、文化机构、研究者及支持者合作，共同推进跨文化对话与艺术档案建设。合作名单随项目推进持续更新。",
      ],
      fr: [
        "Zhen Collection Paris collabore avec galeries, institutions culturelles, chercheurs et soutiens pour faire avancer le dialogue interculturel et la constitution d'archives artistiques. La liste des partenaires évolue au fil des projets.",
      ],
      en: [
        "Zhen Collection Paris works with galleries, cultural institutions, researchers, and supporters to advance cross-cultural dialogue and artistic archives. The partner list is updated as projects develop.",
      ],
    },
    links: [
      {
        href: "/gallery-partnership-agreement",
        label: {
          zh: "合作画廊协议 · Gallery Partnership Agreement",
          fr: "Gallery Partnership Agreement · 合作画廊协议",
          en: "Gallery Partnership Agreement",
        },
      },
    ],
  },
  {
    id: "participate",
    title: { en: "Participate", fr: "Participate", zh: "Participate" },
    subtitle: {
      en: "How artists, authors, and spaces can join",
      fr: "Comment artistes, auteurs et espaces peuvent participer",
      zh: "艺术家、作者和空间如何参与",
    },
    paragraphs: {
      zh: [
        "艺术家、作者、观察者与文化空间可通过对话报名、档案合作与出版计划参与巴黎臻藏。我们会根据主题与排期与您联系。",
      ],
      fr: [
        "Artistes, auteurs, observateurs et espaces culturels peuvent participer via les conversations, la collaboration d'archives et la collection éditoriale. Nous vous contacterons selon le thème et le calendrier.",
      ],
      en: [
        "Artists, authors, observers, and cultural spaces can participate through conversations, archive collaboration, and the editions programme. We will be in touch according to theme and scheduling.",
      ],
    },
    pageHref: "/participer",
    pageLabel: {
      zh: "报名参与 · Participer",
      fr: "Participer · 报名参与",
      en: "Apply to participate",
    },
  },
  {
    id: "association",
    title: { en: "Association", fr: "Association", zh: "Association" },
    subtitle: {
      en: "French association information",
      fr: "Informations sur l'association",
      zh: "法国协会信息",
    },
    paragraphs: {
      zh: [
        "巴黎臻藏（Zhen Collection Paris）是成立于巴黎的国际文化艺术协会，致力于推动巴黎与中国当代艺术生态之间的长期、专业、双向交流。",
      ],
      fr: [
        "Zhen Collection Paris (巴黎臻藏) est une association culturelle et artistique internationale fondée à Paris, dédiée à des échanges durables entre les écosystèmes artistiques parisiens et chinois.",
      ],
      en: [
        "Zhen Collection Paris (巴黎臻藏) is an international cultural and arts association founded in Paris, dedicated to long-term exchange between the contemporary art ecosystems of Paris and China.",
      ],
    },
    pageHref: "/association",
    pageLabel: {
      zh: "为什么是巴黎臻藏？",
      fr: "Pourquoi Zhen Collection Paris ?",
      en: "Why Zhen Collection Paris?",
    },
  },
  {
    id: "contact",
    title: { en: "Contact", fr: "Contact", zh: "Contact" },
    subtitle: {
      en: "Get in touch",
      fr: "Nous contacter",
      zh: "联系方式",
    },
    paragraphs: {
      zh: [
        "欢迎就艺术家、作品、合作或参与事宜与我们联系。",
      ],
      fr: [
        "Contactez-nous pour toute question relative à un artiste, une œuvre, une collaboration ou une participation.",
      ],
      en: [
        "Contact us about artists, artworks, collaborations, or participation.",
      ],
    },
    links: [
      {
        href: "/participer",
        label: {
          zh: "报名对话 · Participer",
          fr: "Participer · 报名对话",
          en: "Apply to participate",
        },
      },
      {
        href: "/collection",
        label: {
          zh: "咨询 · Inquiry",
          fr: "Inquiry · 咨询",
          en: "General inquiry",
        },
      },
    ],
  },
];
