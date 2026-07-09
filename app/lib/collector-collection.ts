import type { LocalizedText } from "@/app/artists/[slug]/data";

export type CollectorProfile = {
  name: LocalizedText;
  city: LocalizedText;
  collectingSince: number;
  focus: LocalizedText;
  note: LocalizedText;
};

export type HoldingEvaluation = {
  date: string;
  author: LocalizedText;
  role: LocalizedText;
  quote: LocalizedText;
};

export type CollectorHolding = {
  id: string;
  artistSlug: string;
  artistName: LocalizedText;
  title: LocalizedText;
  year: number;
  medium: LocalizedText;
  dimensions: string;
  image: string;
  price: LocalizedText;
  acquiredYear: number;
  acquiredFrom: LocalizedText;
  location: LocalizedText;
  condition: LocalizedText;
  notes: LocalizedText;
  evaluations: HoldingEvaluation[];
  resalePending?: boolean;
  passportInitiated?: boolean;
};

export const MOCK_COLLECTOR: CollectorProfile = {
  name: {
    zh: "林明远",
    fr: "Lin Mingyuan",
    en: "Lin Mingyuan",
  },
  city: {
    zh: "巴黎 · 上海",
    fr: "Paris · Shanghai",
    en: "Paris · Shanghai",
  },
  collectingSince: 2016,
  focus: {
    zh: "中法当代绘画 · 纸上与木板作品",
    fr: "Peinture contemporaine franco-chinoise · œuvres sur papier et bois",
    en: "Franco-Chinese contemporary painting · works on paper and wood panel",
  },
  note: {
    zh: "以下藏品为受邀藏家线上档案记录。每件作品均保留持续更新的专业评价记录，并附对应艺术家作品按年价格走势参考；藏家亦可通过平台提交转售申请。价格与来源信息仅供成员空间内部参考。",
    fr: "Les œuvres ci-dessous figurent dans l'archive en ligne du collectionneur invité. Chaque pièce fait l'objet d'évaluations professionnelles mises à jour et d'une évolution des prix par année pour l'artiste concerné ; le collectionneur peut aussi soumettre une demande de revente via la plateforme. Prix et provenance sont indicatifs.",
    en: "The works below are recorded in the invited collector's online archive. Each piece carries ongoing professional evaluations and year-by-year price trends for the corresponding artist's works; the collector may also submit a resale request through the platform. Prices and provenance are for member-space reference.",
  },
};

export const MOCK_COLLECTOR_HOLDINGS: CollectorHolding[] = [
  {
    id: "holding-willy-flaque",
    artistSlug: "willy-le-nalbaut",
    artistName: {
      zh: "威利·勒纳尔博",
      fr: "Willy Le Nalbaut",
      en: "Willy Le Nalbaut",
    },
    title: {
      zh: "« La flaque aux oiseaux »",
      fr: "« La flaque aux oiseaux »",
      en: "The puddle with birds",
    },
    year: 2025,
    medium: {
      zh: "油画 · 木板",
      fr: "Huile sur bois",
      en: "Oil on wood panel",
    },
    dimensions: "37.5 × 39.5 cm",
    image: "/artists/willy-le-nalbaut/works/flaque-aux-oiseaux.jpg",
    price: {
      zh: "€ 8 500",
      fr: "8 500 €",
      en: "€8,500",
    },
    acquiredYear: 2025,
    acquiredFrom: {
      zh: "Pérégrinations girouettes 群展 · 巴黎",
      fr: "Exposition Pérégrinations girouettes · Paris",
      en: "Pérégrinations girouettes exhibition · Paris",
    },
    location: {
      zh: "巴黎 · 私人寓所",
      fr: "Paris · résidence privée",
      en: "Paris · private residence",
    },
    condition: {
      zh: "良好 · 原装框",
      fr: "Bon état · cadre d'origine",
      en: "Good condition · original frame",
    },
    notes: {
      zh: "2025 年巴黎臻藏关注艺术家首件入藏。",
      fr: "Première acquisition d'un artiste suivi par Zhen Collection Paris en 2025.",
      en: "First acquisition of an artist followed by Zhen Collection Paris in 2025.",
    },
    passportInitiated: true,
    evaluations: [
      {
        date: "2025-10",
        author: { zh: "H Studio", fr: "H Studio", en: "H Studio" },
        role: { zh: "画廊", fr: "Galerie", en: "Gallery" },
        quote: {
          zh: "木板尺度虽小，但画面密度与叙事层次接近大尺幅作品；是威利近期最具代表性的入藏级作品之一。",
          fr: "Malgré son format réduit, la densité picturale et la narration rivalisent avec une grande toile ; l'une des pièces les plus représentatives de Willy pour entrer en collection.",
          en: "Despite its small wood-panel format, pictorial density and narrative depth rival a large canvas—one of Willy's most representative collection-grade works.",
        },
      },
      {
        date: "2026-01",
        author: { zh: "陈薇", fr: "Chen Wei", en: "Chen Wei" },
        role: { zh: "评论家", fr: "Critique d'art", en: "Art critic" },
        quote: {
          zh: "水洼与鸟群的并置，让日常场景带有一种缓慢发生的戏剧感；收藏后第三次观看，仍能在边缘细节里发现新的线索。",
          fr: "La flaque et les oiseaux transforment la scène quotidienne en drame lent ; au troisième regard après l'entrée en collection, de nouveaux détails apparaissent encore en périphérie.",
          en: "The puddle and birds turn an everyday scene into slow drama; on a third viewing after acquisition, new clues still emerge at the edges.",
        },
      },
      {
        date: "2026-06",
        author: { zh: "巴黎臻藏", fr: "Zhen Collection Paris", en: "Zhen Collection Paris" },
        role: { zh: "平台跟进", fr: "Suivi plateforme", en: "Platform follow-up" },
        quote: {
          zh: "持续评价：作品在藏家处的光线条件稳定，色彩层未出现可见变化；建议纳入下一轮线上展览档案。",
          fr: "Évaluation continue : conditions lumineuses stables chez le collectionneur, aucune variation visible des couches colorées ; recommandée pour la prochaine archive d'exposition en ligne.",
          en: "Ongoing evaluation: stable lighting at the collector's residence, no visible shift in color layers; recommended for the next online exhibition archive.",
        },
      },
    ],
  },
  {
    id: "holding-willy-moine",
    artistSlug: "willy-le-nalbaut",
    artistName: {
      zh: "威利·勒纳尔博",
      fr: "Willy Le Nalbaut",
      en: "Willy Le Nalbaut",
    },
    title: {
      zh: "« Le moine »",
      fr: "« Le moine »",
      en: "The Monk",
    },
    year: 2025,
    medium: {
      zh: "油画 · 木板",
      fr: "Huile sur bois",
      en: "Oil on wood panel",
    },
    dimensions: "41 × 33 cm",
    image: "/artists/willy-le-nalbaut/works/le-moine.jpg",
    price: {
      zh: "€ 6 200",
      fr: "6 200 €",
      en: "€6,200",
    },
    acquiredYear: 2026,
    acquiredFrom: {
      zh: "H Studio · 巴黎",
      fr: "H Studio · Paris",
      en: "H Studio · Paris",
    },
    location: {
      zh: "上海 · 工作室",
      fr: "Shanghai · atelier",
      en: "Shanghai · studio",
    },
    condition: {
      zh: "良好",
      fr: "Bon état",
      en: "Good condition",
    },
    notes: {
      zh: "与《La flaque aux oiseaux》同系列木板油画。",
      fr: "Fait partie de la même série de peintures sur bois que « La flaque aux oiseaux ».",
      en: "Part of the same wood-panel series as « La flaque aux oiseaux ».",
    },
    evaluations: [
      {
        date: "2026-02",
        author: { zh: "H Studio", fr: "H Studio", en: "H Studio" },
        role: { zh: "画廊", fr: "Galerie", en: "Gallery" },
        quote: {
          zh: "《Le moine》以更少的人物与更封闭的空间，呈现与《La flaque aux oiseaux》互补的另一面；适合与前者并置收藏。",
          fr: "« Le moine » offre, avec moins de figures et un espace plus clos, un contrepoint à « La flaque aux oiseaux » ; les deux œuvres se répondent en collection.",
          en: "« Le moine » offers a counterpart to « La flaque aux oiseaux » through fewer figures and a tighter space; the two works dialogue well in collection.",
        },
      },
      {
        date: "2026-06",
        author: { zh: "陈薇", fr: "Chen Wei", en: "Chen Wei" },
        role: { zh: "评论家", fr: "Critique d'art", en: "Art critic" },
        quote: {
          zh: "第二次跟进：僧侣形象在木板纹理上产生了一种近乎宗教画又刻意去神圣化的张力。",
          fr: "Deuxième suivi : la figure du moine crée, sur le grain du bois, une tension entre peinture religieuse et désacralisation volontaire.",
          en: "Second follow-up: the monk figure creates on the wood grain a tension between religious painting and deliberate desacralization.",
        },
      },
    ],
  },
  {
    id: "holding-su-hong-ma-gui-1",
    artistSlug: "su-hong",
    artistName: {
      zh: "苏泓",
      fr: "Su Hong",
      en: "Su Hong",
    },
    title: {
      zh: "马贵 1",
      fr: "Ma Gui 1",
      en: "Ma Gui 1",
    },
    year: 2025,
    medium: {
      zh: "布面丙烯",
      fr: "Acrylique sur toile",
      en: "Acrylic on canvas",
    },
    dimensions: "100 × 130 cm",
    image: "/artists/su-hong/works/ma-gui-1.jpg",
    price: {
      zh: "¥ 58 000",
      fr: "58 000 ¥",
      en: "¥58,000",
    },
    acquiredYear: 2025,
    acquiredFrom: {
      zh: "艺术家工作室 · 北京",
      fr: "Atelier de l'artiste · Pékin",
      en: "Artist's studio · Beijing",
    },
    location: {
      zh: "上海 · 私人寓所",
      fr: "Shanghai · résidence privée",
      en: "Shanghai · private residence",
    },
    condition: {
      zh: "全新 · 未装框",
      fr: "Neuf · sans cadre",
      en: "Mint · unframed",
    },
    notes: {
      zh: "「马贵」系列第一件；关注苏泓纸上与丙烯语言的过渡。",
      fr: "Première œuvre de la série « Ma Gui » ; intérêt pour le passage du papier à l'acrylique chez Su Hong.",
      en: "First work in the « Ma Gui » series; interest in Su Hong's shift from paper to acrylic.",
    },
    passportInitiated: true,
    evaluations: [
      {
        date: "2025-11",
        author: { zh: "苏泓", fr: "Su Hong", en: "Su Hong" },
        role: { zh: "艺术家", fr: "Artiste", en: "Artist" },
        quote: {
          zh: "藏家对「马贵」系列的理解很准确——他注意到的是速度感与停留感之间的平衡，而不只是题材本身。",
          fr: "Le collectionneur comprend bien la série « Ma Gui » : il perçoit l'équilibre entre vitesse et suspension, au-delà du seul motif.",
          en: "The collector reads the « Ma Gui » series accurately—he sees the balance between speed and pause, not just the subject matter.",
        },
      },
      {
        date: "2026-03",
        author: { zh: "李安", fr: "Li An", en: "Li An" },
        role: { zh: "策展人", fr: "Commissaire", en: "Curator" },
        quote: {
          zh: "大尺幅丙烯保留了纸上作品的呼吸感；持续观察中，灰色层次在不同光线下呈现出不同的「贵气」。",
          fr: "Le grand format acrylique conserve la respiration des œuvres sur papier ; avec le temps, les gris révèlent des nuances de « noblesse » selon la lumière.",
          en: "The large acrylic format keeps the breath of the paper works; over time, the grey layers reveal different shades of 'nobility' under changing light.",
        },
      },
      {
        date: "2026-07",
        author: { zh: "巴黎臻藏", fr: "Zhen Collection Paris", en: "Zhen Collection Paris" },
        role: { zh: "平台跟进", fr: "Suivi plateforme", en: "Platform follow-up" },
        quote: {
          zh: "持续评价：建议与上海工作室中的 Willy 木板作品并置讨论，形成中法绘画材质对照的收藏单元。",
          fr: "Évaluation continue : recommandation de mettre en dialogue avec les panneaux de Willy conservés à Shanghai, pour former un ensemble comparatif franco-chinois des matériaux picturaux.",
          en: "Ongoing evaluation: recommend dialoguing with Willy's wood panels kept in Shanghai to form a Franco-Chinese comparative collection unit.",
        },
      },
    ],
  },
  {
    id: "holding-willy-attachez",
    artistSlug: "willy-le-nalbaut",
    artistName: {
      zh: "威利·勒纳尔博",
      fr: "Willy Le Nalbaut",
      en: "Willy Le Nalbaut",
    },
    title: {
      zh: "« Attachez vos ceintures ! »",
      fr: "« Attachez vos ceintures ! »",
      en: "« Attachez vos ceintures ! »",
    },
    year: 2024,
    medium: {
      zh: "油画 · 画布",
      fr: "Huile sur toile",
      en: "Oil on canvas",
    },
    dimensions: "38 × 46 cm",
    image: "/artists/willy-le-nalbaut/image4.png",
    price: {
      zh: "€ 4 800",
      fr: "4 800 €",
      en: "€4,800",
    },
    acquiredYear: 2024,
    acquiredFrom: {
      zh: "Galerie · 线上咨询成交",
      fr: "Galerie · acquisition via consultation en ligne",
      en: "Gallery · acquired via online inquiry",
    },
    location: {
      zh: "巴黎 · 私人寓所",
      fr: "Paris · résidence privée",
      en: "Paris · private residence",
    },
    condition: {
      zh: "良好 · 已装框",
      fr: "Bon état · encadré",
      en: "Good condition · framed",
    },
    notes: {
      zh: "通过巴黎臻藏收藏咨询渠道购入。",
      fr: "Acquis via le canal de consultation collection de Zhen Collection Paris.",
      en: "Acquired through the Zhen Collection Paris collection inquiry channel.",
    },
    resalePending: true,
    evaluations: [
      {
        date: "2024-12",
        author: { zh: "H Studio", fr: "H Studio", en: "H Studio" },
        role: { zh: "画廊", fr: "Galerie", en: "Gallery" },
        quote: {
          zh: "入藏时的首次评价：构图充满运动感，是威利面向公众视野最友好的入门作品之一。",
          fr: "Première évaluation à l'entrée en collection : composition pleine de mouvement, l'une des portes d'entrée les plus accessibles de Willy.",
          en: "Initial evaluation at acquisition: a composition full of movement—one of Willy's most accessible entry points for public view.",
        },
      },
      {
        date: "2025-09",
        author: { zh: "陈薇", fr: "Chen Wei", en: "Chen Wei" },
        role: { zh: "评论家", fr: "Critique d'art", en: "Art critic" },
        quote: {
          zh: "标题的口语感与画面的紧张感形成反差；这件作品在藏家处保存状态良好，值得持续追踪。",
          fr: "Le ton oral du titre contraste avec la tension de l'image ; l'œuvre est bien conservée chez le collectionneur et mérite un suivi continu.",
          en: "The colloquial title contrasts with the image's tension; the work is well kept at the collector's and merits ongoing tracking.",
        },
      },
      {
        date: "2026-05",
        author: { zh: "巴黎臻藏", fr: "Zhen Collection Paris", en: "Zhen Collection Paris" },
        role: { zh: "平台跟进", fr: "Suivi plateforme", en: "Platform follow-up" },
        quote: {
          zh: "持续评价：与 2025 年入藏的两件 Willy 木板作品形成时间轴上的早期节点，完整度提升。",
          fr: "Évaluation continue : avec les deux panneaux de Willy entrés en 2025, cette pièce devient un nœud antérieur de la chronologie de collection.",
          en: "Ongoing evaluation: with the two Willy wood panels acquired in 2025, this piece completes an earlier node in the collection timeline.",
        },
      },
    ],
  },
];
