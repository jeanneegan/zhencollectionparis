import type { Locale } from "@/app/artists/[slug]/data";

export type AboutSectionLink = {
  href: string;
  label: Record<Locale, string>;
  external?: boolean;
};

export type AboutSubsection = {
  heading: Record<Locale, string>;
  paragraphs?: Record<Locale, string[]>;
  bullets?: Record<Locale, string[]>;
};

export type AboutSection = {
  id: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  lead?: Record<Locale, string[]>;
  paragraphs?: Record<Locale, string[]>;
  subsections?: AboutSubsection[];
  closing?: Record<Locale, string>;
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
    id: "support",
    title: { en: "SUPPORT", fr: "SUPPORT", zh: "SUPPORT" },
    subtitle: {
      en: "Support · 赞助",
      fr: "Support · 赞助",
      zh: "赞助",
    },
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
            "Emerging Artists Programme · 青年艺术家计划",
            "Expositions · 国际艺术展",
            "Résidences · 艺术家驻地",
            "Éditions & Publications · 限量作品与出版",
          ],
          fr: [
            "Prix WE · WE 艺术奖",
            "Emerging Artists Programme · 青年艺术家计划",
            "Expositions · 国际艺术展",
            "Résidences · 艺术家驻地",
            "Éditions & Publications · 限量作品与出版",
          ],
          en: [
            "Prix WE",
            "Emerging Artists Programme",
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
      {
        heading: {
          zh: "PARTNERS · 合作伙伴",
          fr: "PARTNERS · 合作伙伴",
          en: "PARTNERS · Partners",
        },
        paragraphs: {
          zh: [
            "ZCP 与不同城市的画廊、艺术机构、咖啡馆、书店、酒店、企业及独立空间建立合作。",
            "合作不一定意味着资金支持。",
            "空间、专业知识、传播、制作、住宿、交通以及人与人的连接，都可以成为艺术项目的一部分。",
            "Paris · Shenzhen · New York · and beyond",
            "我们希望建立一个不断生长的国际网络，让艺术进入生活，也让艺术家、作品与人，在不同城市之间持续相遇。",
          ],
          fr: [
            "ZCP collabore avec galeries, institutions, cafés, librairies, hôtels, entreprises et espaces indépendants dans différentes villes.",
            "Partenariat ne signifie pas nécessairement un soutien financier.",
            "Espace, expertise, diffusion, production, hébergement, transport et liens humains peuvent tous faire partie d'un projet artistique.",
            "Paris · Shenzhen · New York · and beyond",
            "Nous souhaitons construire un réseau international en croissance, pour que l'art entre dans la vie quotidienne et que artistes, œuvres et publics se rencontrent durablement entre les villes.",
          ],
          en: [
            "ZCP works with galleries, art institutions, cafés, bookshops, hotels, companies, and independent spaces in different cities.",
            "Partnership does not necessarily mean financial support.",
            "Space, expertise, communication, production, accommodation, travel, and human connection can all be part of an art project.",
            "Paris · Shenzhen · New York · and beyond",
            "We hope to build a growing international network so art enters daily life and artists, works, and people continue to meet across cities.",
          ],
        },
      },
    ],
    closing: {
      zh: "Contact us to support or collaborate with ZCP.",
      fr: "Contact us to support or collaborate with ZCP.",
      en: "Contact us to support or collaborate with ZCP.",
    },
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
