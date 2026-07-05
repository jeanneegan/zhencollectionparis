export type Locale = "zh" | "fr" | "en";

export type LocalizedText = Record<Locale, string>;

export type ArtistProfile = {
  slug: string;
  name: LocalizedText;
  birthYear: number;
  birthplace: LocalizedText;
  currentCity: LocalizedText;
  nationality: LocalizedText;
  practice: LocalizedText;
  representedBy: string;
  portrait: string;
  tagline: LocalizedText;
  contact: {
    email: string;
    website: string;
    instagram: string;
    wechat: string;
  };
  education: {
    year: string;
    institution: LocalizedText;
    degree: LocalizedText;
    city: LocalizedText;
  }[];
  galleries: {
    name: string;
    city: LocalizedText;
    role: LocalizedText;
    since: string;
  }[];
  whyCreate: LocalizedText;
  whyChinaFrance: {
    china: LocalizedText;
    france: LocalizedText;
  };
  philosophy: LocalizedText;
  conversation: {
    sharedQuestion: LocalizedText;
    artistAnswer: LocalizedText;
    publicQuestions: {
      author: string;
      question: LocalizedText;
    }[];
  };
  careerTimeline: {
    year: string;
    title: LocalizedText;
    description: LocalizedText;
  }[];
  exhibitions: {
    year: number;
    title: LocalizedText;
    venue: string;
    city: LocalizedText;
    type: "solo" | "group";
  }[];
  artworks: {
    id: string;
    title: LocalizedText;
    year: number;
    medium: LocalizedText;
    dimensions: string;
    image: string;
  }[];
  professionalReputation: {
    galleryRecognition: { name: string; quote: LocalizedText }[];
    collectorRecognition: {
      name: string;
      title: LocalizedText;
      quote: LocalizedText;
    }[];
    curatorMediaRecognition: { source: LocalizedText; quote: LocalizedText }[];
    publicResonance: { source: LocalizedText; quote: LocalizedText }[];
  };
};

const willyLeNalbaut: ArtistProfile = {
  slug: "willy-le-nalbaut",
  name: {
    zh: "威利·勒纳尔博",
    fr: "Willy Le Nalbaut",
    en: "Willy Le Nalbaut",
  },
  birthYear: 1987,
  birthplace: {
    zh: "法国 · 布列塔尼",
    fr: "France · Bretagne",
    en: "France · Brittany",
  },
  currentCity: {
    zh: "巴黎",
    fr: "Paris",
    en: "Paris",
  },
  nationality: {
    zh: "法国",
    fr: "Française",
    en: "French",
  },
  practice: {
    zh: "绘画 · 混合媒介",
    fr: "Peinture · Techniques mixtes",
    en: "Painting · Mixed Media",
  },
  representedBy: "Galerie Perrotin · ShanghART Gallery · White Cube",
  portrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1600&fit=crop",
  tagline: {
    zh: "以光与记忆，编织中法之间的视觉对话",
    fr: "Tisser un dialogue visuel entre la Chine et la France par la lumière et la mémoire",
    en: "Weaving a visual dialogue between China and France through light and memory",
  },
  contact: {
    email: "studio@willylenalbaut.com",
    website: "www.willylenalbaut.com",
    instagram: "@willylenalbaut",
    wechat: "willy_studio_paris",
  },
  education: [
    {
      year: "2012",
      institution: {
        zh: "巴黎国立高等美术学院",
        fr: "École Nationale Supérieure des Beaux-Arts",
        en: "École Nationale Supérieure des Beaux-Arts",
      },
      degree: {
        zh: "绘画与空间艺术",
        fr: "Peinture et arts spatiaux",
        en: "Painting and Spatial Arts",
      },
      city: { zh: "巴黎", fr: "Paris", en: "Paris" },
    },
    {
      year: "2009",
      institution: {
        zh: "雷恩高等艺术学院",
        fr: "École Européenne Supérieure d'Art de Bretagne",
        en: "École Européenne Supérieure d'Art de Bretagne",
      },
      degree: {
        zh: "视觉艺术学士",
        fr: "Licence en arts visuels",
        en: "BA in Visual Arts",
      },
      city: { zh: "雷恩", fr: "Rennes", en: "Rennes" },
    },
    {
      year: "2007",
      institution: {
        zh: "中国美术学院",
        fr: "China Academy of Art",
        en: "China Academy of Art",
      },
      degree: {
        zh: "短期驻留与水墨研究",
        fr: "Résidence et recherche en encre de Chine",
        en: "Short residency and ink painting research",
      },
      city: { zh: "杭州", fr: "Hangzhou", en: "Hangzhou" },
    },
  ],
  galleries: [
    {
      name: "Galerie Perrotin",
      city: { zh: "巴黎", fr: "Paris", en: "Paris" },
      role: {
        zh: "独家代理",
        fr: "Representation exclusive",
        en: "Exclusive representation",
      },
      since: "2019",
    },
    {
      name: "ShanghART Gallery",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      role: {
        zh: "亚洲代表",
        fr: "Représentation Asie",
        en: "Asia representation",
      },
      since: "2021",
    },
    {
      name: "White Cube",
      city: { zh: "伦敦", fr: "Londres", en: "London" },
      role: {
        zh: "合作画廊",
        fr: "Galerie partenaire",
        en: "Partner gallery",
      },
      since: "2023",
    },
  ],
  whyCreate: {
    zh: "我创作，是因为有些感受无法被语言承载。它们存在于光的变化里、在雾散去的瞬间、在两种文化之间的缝隙中。画布是我唯一能找到的、让这些东西被看见的方式——不是为了解释，而是为了邀请他人一同感受那种无法命名的状态。",
    fr: "Je crée parce que certaines sensations ne peuvent pas être portées par le langage. Elles existent dans la lumière changeante, dans l'instant où la brume se dissipe, dans l'entre-deux des cultures. La toile est le seul lieu où je peux les rendre visibles — non pour expliquer, mais pour inviter d'autres à ressentir cet état sans nom.",
    en: "I create because some sensations cannot be carried by language. They exist in shifting light, in the moment mist dissolves, in the space between cultures. The canvas is the only place I can make them visible — not to explain, but to invite others to feel that which has no name.",
  },
  whyChinaFrance: {
    china: {
      zh: "中国水墨的留白与气韵，教会我如何在画布上制造呼吸。杭州驻留期间，我在西湖边画下了第一组「雾系列」——那种介于可见与不可见之间的状态，成为我此后创作的核心母题。",
      fr: "Le vide et le souffle de l'encre de Chine m'ont appris à faire respirer la toile. Pendant ma résidence à Hangzhou, j'ai peint la première série « Brume » au bord du lac de l'Ouest — cet état entre visible et invisible est devenu le motif central de mon œuvre.",
      en: "The emptiness and breath of Chinese ink taught me how to make the canvas breathe. During my Hangzhou residency, I painted the first 'Mist' series by West Lake — that state between visible and invisible became the core motif of my work.",
    },
    france: {
      zh: "布列塔尼的海风与巴黎的光影，是我身体的记忆。法国艺术传统中对光的研究——从印象派到当代装置——让我在东方意趣与西方结构之间，找到了属于自己的语言。",
      fr: "Le vent de Bretagne et la lumière parisienne sont la mémoire de mon corps. La tradition française de la lumière — de l'impressionnisme à l'installation contemporaine — m'a permis de trouver ma propre langue entre sensibilité orientale et structure occidentale.",
      en: "The Brittany sea breeze and Parisian light are the memory of my body. The French tradition of studying light — from Impressionism to contemporary installation — helped me find my own language between Eastern sensibility and Western structure.",
    },
  },
  philosophy: {
    zh: "我相信艺术是跨越语言的相遇。我的作品试图捕捉那些无法被翻译的瞬间：一段被风吹散的记忆、一次在异乡的凝视、一种介于归属与流离之间的情感。材料上，我混合油画、水墨与矿物颜料，让不同文明的视觉传统在同一画面中对话，而非对抗。",
    fr: "Je crois que l'art est une rencontre au-delà des langues. Mon œuvre cherche à saisir l'instant intraduisible : un souvenir emporté par le vent, un regard en terre étrangère, une émotion entre appartenance et errance. Je mélange huile, encre et pigments minéraux pour faire dialoguer les traditions visuelles, plutôt que les opposer.",
    en: "I believe art is an encounter beyond language. My work seeks to capture the untranslatable moment: a memory scattered by wind, a gaze in a foreign land, a feeling between belonging and displacement. I mix oil, ink, and mineral pigments to let visual traditions converse on the same surface, rather than collide.",
  },
  conversation: {
    sharedQuestion: {
      zh: "如果只能保留一种记忆，你会选择哪一个？",
      fr: "Si vous ne pouviez garder qu'un seul souvenir, lequel choisiriez-vous ?",
      en: "If you could keep only one memory, which would you choose?",
    },
    artistAnswer: {
      zh: "西湖边的一个清晨。雾还没有散尽，我站在断桥上，什么都看不清，却什么都感觉得到。那是我第一次明白：看不见的东西，有时候比看见的更真实。",
      fr: "Un matin au bord du lac de l'Ouest. La brume n'avait pas encore dissipé ; je me tenais sur le Pont de la Digue, ne voyant rien, mais sentant tout. C'est la première fois que j'ai compris : l'invisible peut être plus vrai que le visible.",
      en: "A morning by West Lake. The mist had not yet lifted; I stood on the Broken Bridge, seeing nothing yet feeling everything. That was when I first understood: what is unseen can be truer than what is seen.",
    },
    publicQuestions: [
      {
        author: "Chen Wei · 上海",
        question: {
          zh: "您的「雾系列」是否与中国传统山水有关联？",
          fr: "Votre série « Brume » entretient-elle un lien avec la peinture de paysage chinoise traditionnelle ?",
          en: "Does your 'Mist' series relate to traditional Chinese landscape painting?",
        },
      },
      {
        author: "Marie Dupont · Paris",
        question: {
          zh: "您如何定义「跨文化」——是融合，还是并置？",
          fr: "Comment définissez-vous le « transculturel » — fusion ou juxtaposition ?",
          en: "How do you define 'cross-cultural' — fusion or juxtaposition?",
        },
      },
      {
        author: "Anonymous · London",
        question: {
          zh: "下一系列作品会探索什么主题？",
          fr: "Quel thème explorera votre prochaine série ?",
          en: "What theme will your next series explore?",
        },
      },
    ],
  },
  careerTimeline: [
    {
      year: "2007",
      title: {
        zh: "首次中国驻留",
        fr: "Première résidence en Chine",
        en: "First China residency",
      },
      description: {
        zh: "赴杭州中国美术学院，开始水墨研究，创作早期纸本作品。",
        fr: "Séjour à la China Academy of Art de Hangzhou ; début de la recherche sur l'encre de Chine.",
        en: "Residency at China Academy of Art, Hangzhou; began ink painting research.",
      },
    },
    {
      year: "2012",
      title: {
        zh: "巴黎美院毕业",
        fr: "Diplôme des Beaux-Arts de Paris",
        en: "Graduated from Paris Beaux-Arts",
      },
      description: {
        zh: "毕业展获学院最高荣誉，开始与巴黎画廊接触。",
        fr: "Exposition de fin d'études avec la plus haute distinction ; premiers contacts avec les galeries parisiennes.",
        en: "Graduation show awarded highest distinction; began engaging with Paris galleries.",
      },
    },
    {
      year: "2019",
      title: {
        zh: "加入 Galerie Perrotin",
        fr: "Rejoint Galerie Perrotin",
        en: "Joined Galerie Perrotin",
      },
      description: {
        zh: "首次巴黎个展「Entre Deux Mondes」，确立中法双轨创作方向。",
        fr: "Première exposition solo à Paris, « Entre Deux Mondes », affirmant une double trajectoire sino-française.",
        en: "First Paris solo show 'Entre Deux Mondes', establishing a Franco-Chinese dual trajectory.",
      },
    },
    {
      year: "2021",
      title: {
        zh: "亚洲代表 · ShanghART",
        fr: "Représentation Asie · ShanghART",
        en: "Asia representation · ShanghART",
      },
      description: {
        zh: "上海个展「西湖记」，作品进入中国主要私人收藏。",
        fr: "Exposition solo à Shanghai, « Journal du Lac de l'Ouest » ; entrée dans les collections privées majeures.",
        en: "Shanghai solo show 'West Lake Journal'; works entered major private collections.",
      },
    },
    {
      year: "2025",
      title: {
        zh: "「雾 · 光 · 归途」巡回",
        fr: "Tournée « Brume · Lumière · Retour »",
        en: "'Mist · Light · Return' tour",
      },
      description: {
        zh: "上海、巴黎、伦敦三地同步展出，成为巴黎臻藏重点推荐艺术家。",
        fr: "Expositions simultanées à Shanghai, Paris et Londres ; artiste phare de Zhen Collection Paris.",
        en: "Simultaneous exhibitions in Shanghai, Paris, and London; featured artist of Zhen Collection Paris.",
      },
    },
  ],
  exhibitions: [
    {
      year: 2025,
      title: {
        zh: "雾 · 光 · 归途",
        fr: "Brume · Lumière · Retour",
        en: "Mist · Light · Return",
      },
      venue: "ShanghART Gallery",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "solo",
    },
    {
      year: 2024,
      title: {
        zh: "Entre Deux Mondes",
        fr: "Entre Deux Mondes",
        en: "Entre Deux Mondes",
      },
      venue: "Galerie Perrotin",
      city: { zh: "巴黎", fr: "Paris", en: "Paris" },
      type: "solo",
    },
    {
      year: 2023,
      title: {
        zh: "中法当代艺术对话",
        fr: "Dialogue artistique sino-français",
        en: "Franco-Chinese Contemporary Dialogue",
      },
      venue: "Centre Pompidou",
      city: { zh: "巴黎", fr: "Paris", en: "Paris" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "Breath of Silence",
        fr: "Breath of Silence",
        en: "Breath of Silence",
      },
      venue: "White Cube",
      city: { zh: "伦敦", fr: "Londres", en: "London" },
      type: "group",
    },
    {
      year: 2021,
      title: {
        zh: "西湖记",
        fr: "Journal du Lac de l'Ouest",
        en: "West Lake Journal",
      },
      venue: "China Academy of Art Museum",
      city: { zh: "杭州", fr: "Hangzhou", en: "Hangzhou" },
      type: "solo",
    },
  ],
  artworks: [
    {
      id: "1",
      title: {
        zh: "雾系列 No. 12",
        fr: "Brume No. 12",
        en: "Mist No. 12",
      },
      year: 2024,
      medium: {
        zh: "油画、水墨、矿物颜料 · 亚麻布",
        fr: "Huile, encre, pigments minéraux · toile de lin",
        en: "Oil, ink, mineral pigments · linen canvas",
      },
      dimensions: "180 × 140 cm",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop",
    },
    {
      id: "2",
      title: { zh: "归途", fr: "Retour", en: "Return" },
      year: 2024,
      medium: {
        zh: "油画 · 亚麻布",
        fr: "Huile · toile de lin",
        en: "Oil · linen canvas",
      },
      dimensions: "160 × 120 cm",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop",
    },
    {
      id: "3",
      title: {
        zh: "Breath of Silence",
        fr: "Breath of Silence",
        en: "Breath of Silence",
      },
      year: 2023,
      medium: {
        zh: "水墨、丙烯 · 纸本",
        fr: "Encre, acrylique · papier",
        en: "Ink, acrylic · paper",
      },
      dimensions: "120 × 90 cm",
      image:
        "https://images.unsplash.com/photo-1549490349-86433668f935?w=800&h=1000&fit=crop",
    },
    {
      id: "4",
      title: {
        zh: "西湖记 · 晨",
        fr: "Journal du Lac · Aube",
        en: "West Lake Journal · Dawn",
      },
      year: 2022,
      medium: {
        zh: "水墨、矿物颜料 · 绢本",
        fr: "Encre, pigments minéraux · soie",
        en: "Ink, mineral pigments · silk",
      },
      dimensions: "100 × 80 cm",
      image:
        "https://images.unsplash.com/photo-1578301978693-85ea9e697863?w=800&h=1000&fit=crop",
    },
    {
      id: "5",
      title: {
        zh: "Entre Deux Mondes",
        fr: "Entre Deux Mondes",
        en: "Entre Deux Mondes",
      },
      year: 2023,
      medium: {
        zh: "混合媒介 · 亚麻布",
        fr: "Techniques mixtes · toile de lin",
        en: "Mixed media · linen canvas",
      },
      dimensions: "200 × 150 cm",
      image:
        "https://images.unsplash.com/photo-1561214115-fbc497d2e685?w=800&h=1000&fit=crop",
    },
    {
      id: "6",
      title: {
        zh: "光之碎片",
        fr: "Fragments de lumière",
        en: "Fragments of Light",
      },
      year: 2025,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile · panneau de bois",
        en: "Oil · wood panel",
      },
      dimensions: "90 × 70 cm",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
    },
  ],
  professionalReputation: {
    galleryRecognition: [
      {
        name: "Galerie Perrotin",
        quote: {
          zh: "Willy 是少数真正理解「跨文化」而非「拼贴文化」的艺术家。他的画面既有法国绘画对光的敏感，又有东方美学的空灵，这在当代法国艺术界极为珍贵。",
          fr: "Willy est l'un des rares artistes à comprendre véritablement le « transculturel » plutôt que le « pastiche culturel ». Sa peinture allie la sensibilité à la lumière de la tradition française à la spiritualité de l'esthétique orientale.",
          en: "Willy is among the few artists who truly understand 'cross-cultural' rather than 'pastiche culture'. His paintings unite French light sensitivity with the ethereal quality of Eastern aesthetics.",
        },
      },
      {
        name: "ShanghART Gallery",
        quote: {
          zh: "勒纳尔博的「雾系列」在中国藏家群体中引发了深层共鸣——那种对归属与流离的探讨，触动了许多人内心最柔软的部分。",
          fr: "La série « Brume » de Le Nalbaut a profondément résonné auprès des collectionneurs chinois — cette exploration de l'appartenance et de l'errance touche la part la plus sensible de chacun.",
          en: "Le Nalbaut's 'Mist' series resonated deeply with Chinese collectors — his exploration of belonging and displacement touches something tender in many people.",
        },
      },
    ],
    collectorRecognition: [
      {
        name: "李明远",
        title: {
          zh: "北京藏家",
          fr: "Collectionneur · Pékin",
          en: "Collector · Beijing",
        },
        quote: {
          zh: "勒纳尔博的作品有一种罕见的克制——它不急于表达，却让你久久无法移开目光。我的收藏里，他的作品是连接东方审美与欧洲当代绘画的桥梁。",
          fr: "L'œuvre de Le Nalbaut possède une retenue rare — elle ne se presse pas de parler, mais retient le regard. Dans ma collection, il fait le pont entre l'esthétique orientale et la peinture contemporaine européenne.",
          en: "Le Nalbaut's work has a rare restraint — it does not rush to speak, yet holds the gaze. In my collection, he bridges Eastern aesthetics and European contemporary painting.",
        },
      },
      {
        name: "Isabelle Moreau",
        title: {
          zh: "巴黎私人藏家",
          fr: "Collectionneuse privée · Paris",
          en: "Private collector · Paris",
        },
        quote: {
          zh: "我在2024年收藏了「雾系列 No. 12」。每天清晨，光线在画布上变化——这是一件会随时间呼吸的作品。",
          fr: "J'ai acquis « Brume No. 12 » en 2024. Chaque matin, la lumière change sur la toile — c'est une œuvre qui respire avec le temps.",
          en: "I acquired 'Mist No. 12' in 2024. Each morning, the light shifts on the canvas — it is a work that breathes with time.",
        },
      },
    ],
    curatorMediaRecognition: [
      {
        source: {
          zh: "Artforum 评论",
          fr: "Artforum",
          en: "Artforum",
        },
        quote: {
          zh: "勒纳尔博的画作占据记忆与在场之间的临界空间——这是中法当代艺术中一场安静的革命。",
          fr: "Les peintures de Le Nalbaut occupent un espace liminal entre mémoire et présence — une révolution silencieuse dans l'art contemporain sino-français.",
          en: "Le Nalbaut's paintings occupy a liminal space between memory and presence — a quiet revolution in Franco-Chinese contemporary art.",
        },
      },
      {
        source: {
          zh: "《艺术新闻》",
          fr: "The Art Newspaper China",
          en: "The Art Newspaper China",
        },
        quote: {
          zh: "他以水墨的留白对抗油画的饱满，以布列塔尼的海风对话西湖的雾气——这是2024年最值得关注的中法艺术家之一。",
          fr: "Il oppose le vide de l'encre à la plénitude de l'huile, le vent breton à la brume du lac de l'Ouest — l'un des artistes sino-français les plus remarquables de 2024.",
          en: "He sets ink emptiness against oil fullness, Brittany wind against West Lake mist — among the most notable Franco-Chinese artists of 2024.",
        },
      },
    ],
    publicResonance: [
      {
        source: {
          zh: "Instagram 艺术社群",
          fr: "Communauté artistique · Instagram",
          en: "Art community · Instagram",
        },
        quote: {
          zh: "「雾系列 No. 12」让我哭了。不是因为悲伤，而是因为那种被看见、被理解的感觉。",
          fr: "« Brume No. 12 » m'a fait pleurer. Non par tristesse, mais par ce sentiment d'être vu et compris.",
          en: "'Mist No. 12' made me cry. Not from sadness, but from the feeling of being seen and understood.",
        },
      },
      {
        source: {
          zh: "巴黎臻藏公众留言",
          fr: "Messages du public · Zhen Collection",
          en: "Public messages · Zhen Collection",
        },
        quote: {
          zh: "看完展览后在留言簿上写：「原来中法之间，还有这样一种相遇的方式。」",
          fr: "Après l'exposition, un visiteur a écrit : « Entre la Chine et la France, voilà une autre façon de se rencontrer. »",
          en: "After the exhibition, a visitor wrote: 'Between China and France, here is another way to meet.'",
        },
      },
    ],
  },
};

const artists: Record<string, ArtistProfile> = {
  "willy-le-nalbaut": willyLeNalbaut,
};

export function getArtistBySlug(slug: string): ArtistProfile | null {
  return artists[slug] ?? null;
}

export function getAllArtistSlugs(): string[] {
  return Object.keys(artists);
}

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
