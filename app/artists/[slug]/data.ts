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
    phone?: string;
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
  birthYear: 1989,
  birthplace: {
    zh: "法国 · 塔朗斯（33）",
    fr: "France · Talence (33)",
    en: "France · Talence (33)",
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
    zh: "油画 · 木板与画布",
    fr: "Peinture à l'huile · bois et toile",
    en: "Oil painting · wood panel and canvas",
  },
  representedBy: "Artiste indépendant · Galerie ArtLim' · La Volonté 93",
  portrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1600&fit=crop",
  tagline: {
    zh: "一种属于我的现实主义——荒诞剧场里，动物、神祇与日常物件在同一平面",
    fr: "Un réalisme à ma manière — théâtre absurde où animaux, divinités et objets banals coexistent",
    en: "A realism of my own — an absurd theatre where animals, gods, and ordinary objects share the same plane",
  },
  contact: {
    email: "willylenalbaut@gmail.com",
    phone: "06.07.26.46.55",
    website: "",
    instagram: "",
    wechat: "",
  },
  education: [
    {
      year: "2007",
      institution: {
        zh: "ESAG Penninghen",
        fr: "ESAG Penninghen",
        en: "ESAG Penninghen",
      },
      degree: {
        zh: "预科",
        fr: "Année préparatoire",
        en: "Preparatory year",
      },
      city: { zh: "巴黎", fr: "Paris", en: "Paris" },
    },
    {
      year: "2008",
      institution: {
        zh: "ESAG Penninghen",
        fr: "ESAG Penninghen",
        en: "ESAG Penninghen",
      },
      degree: {
        zh: "平面设计 / 美术指导（一年级）",
        fr: "Graphisme / Direction artistique — 1re année",
        en: "Graphic Design / Art Direction — 1st year",
      },
      city: { zh: "巴黎", fr: "Paris", en: "Paris" },
    },
  ],
  galleries: [
    {
      name: "Galerie ArtLim'",
      city: { zh: "利摩日", fr: "Limoges", en: "Limoges" },
      role: {
        zh: "合作展览",
        fr: "Exposition partenaire",
        en: "Partner exhibition",
      },
      since: "2025",
    },
    {
      name: "La Volonté 93",
      city: { zh: "圣旺", fr: "Saint-Ouen", en: "Saint-Ouen" },
      role: {
        zh: "个展",
        fr: "Exposition solo",
        en: "Solo exhibition",
      },
      since: "2024",
    },
    {
      name: "Galerie Rochet Sedin",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      role: {
        zh: "合作展览",
        fr: "Exposition partenaire",
        en: "Partner exhibition",
      },
      since: "2018",
    },
  ],
  whyCreate: {
    zh: "我描绘周遭与想象中的风景、人物、动物与物件——它们是荒诞剧场的演员与布景，是梦境的堆积，是思想的释放。绘画允许动物、神与平凡之物处于同一层面，无需透视或等级的顾虑。",
    fr: "Je représente paysages, scènes de vie, figures, animaux et objets de mon entourage ou de mon imaginaire — acteurs et décors d'un théâtre absurde, agglomérat onirique, décharge mentale. La peinture permet qu'un animal, un dieu et un objet banal coexistent au même plan.",
    en: "I depict landscapes, scenes, figures, animals, and objects from my surroundings or imagination — actors and sets of an absurd theatre, a dreamlike accumulation, a mental discharge. Painting allows an animal, a god, and a mundane object to coexist on the same plane.",
  },
  whyChinaFrance: {
    china: {
      zh: "我在印度旅行时带回一颗椰子，画成了《Goofy faux oeuf》——外来之物进入画面，与日常并置。我对这种「无等级并置」的兴趣，与东方视觉传统中符号、神灵、物件同场的结构有某种共鸣。",
      fr: "De voyage en Inde, j'ai rapporté une noix de coco peinte dans « Goofy faux oeuf » — l'objet étranger entre en tableau, juxtaposé au quotidien. Cet intérêt pour la mise en scène sans hiérarchie résonne avec des traditions visuelles où symboles, divinités et objets coexistent.",
      en: "From a trip to India I brought back a coconut painted in 'Goofy faux oeuf' — a foreign object entering the picture, juxtaposed with the everyday. This interest in hierarchy-free staging resonates with visual traditions where symbols, deities, and objects coexist.",
    },
    france: {
      zh: "我受荷兰与法国绘画影响——Jacobus Vrel、Brueghel 的静物与场景，Rousseau、Millet 的风景，Van Eyck 式金色光线。布列塔尼、夏朗德、RN141 公路上的工厂与雾，是我身体的地理。",
      fr: "Je suis influencé par la peinture hollandaise et française — scènes et natures mortes de Vrel, Brueghel ; paysages de Rousseau, Millet ; lumière dorée de Van Eyck. La Bretagne, la Charente, l'usine le long de la RN141 et la brume sont la géographie de mon corps.",
      en: "I am influenced by Dutch and French painting — scenes and still lifes by Vrel, Brueghel; landscapes by Rousseau, Millet; Van Eyck's golden light. Brittany, the Charente, the factory along the RN141 and the mist are my body's geography.",
    },
  },
  philosophy: {
    zh: "我的绘画趋向现实主义，但另有他物——一种属于我的现实主义，有时贴近抽象，由绘画本身 dictate 的形式。我以多层油画作画，保留抽象区域与层间元素；常从脑中想法出发，却在绘制过程中让新念头进入。我不按系列工作，而是持续每日探索。作品可隐喻、可批判、可象征——充满犬儒与幽默。",
    fr: "Mes peintures tendent vers le réalisme, mais il y a autre chose — un réalisme à ma manière, côtoyant parfois l'abstraction. Je peins en plusieurs couches, garde des zones abstraites ; je pars d'une idée mais d'autres arrivent pendant que le tableau se construit. Je ne travaille pas par série, mais dans une recherche constante, tous les jours si possible.",
    en: "My paintings tend toward realism, but there is something else — a realism of my own, sometimes bordering on abstraction. I paint in layers, keeping abstract zones; I start from an idea but others arrive as the canvas builds. I do not work in series, but in constant daily research.",
  },
  conversation: {
    sharedQuestion: {
      zh: "您不按系列创作——那如何组织您的实践？",
      fr: "Vous ne travaillez pas par série — comment organisez-vous votre pratique ?",
      en: "You do not work in series — how do you organize your practice?",
    },
    artistAnswer: {
      zh: "我不按系列工作，而是持续探索，尽可能每天画。一幅画可能被搁置数月让它成熟，再擦除或重绘某些部分——这反而强化了我绘画的荒诞感。我近年多画小中幅，便于搬运，也更可及。",
      fr: "Je ne travaille pas par série, mais dans une recherche constante, tous les jours si possible. Il m'arrive d'abandonner une peinture pour la laisser mûrir, puis de l'effacer ou repeindre — ce qui renforce le côté absurde. Je peins beaucoup de petits et moyens formats ces dernières années.",
      en: "I do not work in series, but in constant research, every day if possible. I sometimes set a painting aside to let it mature, then erase or repaint — which strengthens the absurd side. I have painted many small and medium formats in recent years.",
    },
    publicQuestions: [
      {
        author: "Visiteur · Bruxelles",
        question: {
          zh: "《PDT》作为功能性物件，与您的绘画实践是什么关系？",
          fr: "« PDT » en tant qu'objet fonctionnel — quel rapport avec votre pratique picturale ?",
          en: "How does 'PDT' as a functional object relate to your painting practice?",
        },
      },
      {
        author: "Quentin Caillaud · Penne",
        question: {
          zh: "与 Caillaud 的双人展如何影响您的构图？",
          fr: "Comment les expositions duo avec Caillaud ont-elles influencé votre composition ?",
          en: "How did duo shows with Caillaud influence your composition?",
        },
      },
      {
        author: "Anonymous · Lille",
        question: {
          zh: "您说想少依赖电脑作画——这意味着什么？",
          fr: "Vous souhaitez vous détacher de l'ordinateur — qu'est-ce que cela implique ?",
          en: "You want to rely less on the computer for painting — what does that mean?",
        },
      },
    ],
  },
  careerTimeline: [
    {
      year: "2007",
      title: {
        zh: "ESAG Penninghen 预科",
        fr: "Année préparatoire · ESAG Penninghen",
        en: "Preparatory year · ESAG Penninghen",
      },
      description: {
        zh: "进入 ESAG Penninghen 预科学习。",
        fr: "Entrée en année préparatoire à l'ESAG Penninghen.",
        en: "Entered preparatory year at ESAG Penninghen.",
      },
    },
    {
      year: "2017",
      title: {
        zh: "Pilotenkueche · Leipzig",
        fr: "Pilotenkueche · Leipzig",
        en: "Pilotenkueche · Leipzig",
      },
      description: {
        zh: "群展 « What did you expect ? », Pilotenkueche, 莱比锡。",
        fr: "Exposition collective « What did you expect ? », Pilotenkueche, Leipzig.",
        en: "Group show 'What did you expect?', Pilotenkueche, Leipzig.",
      },
    },
    {
      year: "2021",
      title: {
        zh: "Prix Marin",
        fr: "Prix Marin",
        en: "Prix Marin",
      },
      description: {
        zh: "Prix Marin 群展，Galerie Julio Gonzalez, Arcueil。",
        fr: "Prix Marin, exposition collective, Galerie Julio Gonzalez, Arcueil.",
        en: "Prix Marin group exhibition, Galerie Julio Gonzalez, Arcueil.",
      },
    },
    {
      year: "2022",
      title: {
        zh: "Bleu charette 个展",
        fr: "Exposition solo « Bleu charette »",
        en: "Solo show 'Bleu charette'",
      },
      description: {
        zh: "Yotta.Iota, 里尔。",
        fr: "Yotta.Iota, Lille.",
        en: "Yotta.Iota, Lille.",
      },
    },
    {
      year: "2024",
      title: {
        zh: "Alain in the dark 个展",
        fr: "Exposition solo « Alain in the dark »",
        en: "Solo show 'Alain in the dark'",
      },
      description: {
        zh: "La Volonté 93, Saint-Ouen sur Seine；同年 ADAF 布鲁塞尔展出《PDT》。",
        fr: "La Volonté 93, Saint-Ouen ; même année ADAF Bruxelles avec « PDT ».",
        en: "La Volonté 93, Saint-Ouen; same year ADAF Brussels with 'PDT'.",
      },
    },
    {
      year: "2025",
      title: {
        zh: "Galerie ArtLim' 群展",
        fr: "Exposition collective · Galerie ArtLim'",
        en: "Group exhibition · Galerie ArtLim'",
      },
      description: {
        zh: "当代艺术群展，利摩日。",
        fr: "Exposition collective d'art contemporain, Limoges.",
        en: "Contemporary art group exhibition, Limoges.",
      },
    },
  ],
  exhibitions: [
    {
      year: 2025,
      title: {
        zh: "当代艺术群展",
        fr: "Exposition collective",
        en: "Group exhibition",
      },
      venue: "Galerie ArtLim'",
      city: { zh: "利摩日", fr: "Limoges", en: "Limoges" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "Alain in the dark",
        fr: "Alain in the dark",
        en: "Alain in the dark",
      },
      venue: "La Volonté 93",
      city: { zh: "圣旺", fr: "Saint-Ouen", en: "Saint-Ouen" },
      type: "solo",
    },
    {
      year: 2024,
      title: {
        zh: "ADAF · A domestic art fair",
        fr: "ADAF · A domestic art fair",
        en: "ADAF · A domestic art fair",
      },
      venue: "Paramour",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "Bords perdus festival",
        fr: "Bords perdus festival",
        en: "Bords perdus festival",
      },
      venue: "La Vallée",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "éclair",
        fr: "éclair",
        en: "éclair",
      },
      venue: "Sterput E2",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "solo",
    },
    {
      year: 2023,
      title: {
        zh: "Les balladeuses",
        fr: "Les balladeuses",
        en: "Les balladeuses",
      },
      venue: "Chez Vito",
      city: { zh: "Penne（塔恩）", fr: "Penne (Tarn)", en: "Penne (Tarn)" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "Dévellopé couché",
        fr: "Dévellopé couché",
        en: "Dévellopé couché",
      },
      venue: "Galerie Récif",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "Bleu charette",
        fr: "Bleu charette",
        en: "Bleu charette",
      },
      venue: "Yotta.Iota",
      city: { zh: "里尔", fr: "Lille", en: "Lille" },
      type: "solo",
    },
    {
      year: 2021,
      title: {
        zh: "Prix Marin",
        fr: "Prix Marin",
        en: "Prix Marin",
      },
      venue: "Galerie Julio Gonzalez",
      city: { zh: "阿尔克伊", fr: "Arcueil", en: "Arcueil" },
      type: "group",
    },
    {
      year: 2017,
      title: {
        zh: "What did you expect ?",
        fr: "What did you expect ?",
        en: "What did you expect ?",
      },
      venue: "Pilotenkueche",
      city: { zh: "莱比锡", fr: "Leipzig", en: "Leipzig" },
      type: "group",
    },
  ],
  artworks: [
    {
      id: "1",
      title: { zh: "PDT", fr: "PDT", en: "PDT" },
      year: 2024,
      medium: {
        zh: "油画 · 木板（20 块面板）",
        fr: "Huile · panneaux de bois (20 panneaux)",
        en: "Oil · wood panels (20 panels)",
      },
      dimensions: "154 × 123 cm",
      image: "/artists/willy-le-nalbaut/works/pdt.jpg",
    },
    {
      id: "2",
      title: {
        zh: "Autoportrait, moto, livre et gant d'boxe",
        fr: "Autoportrait, moto, livre et gant d'boxe",
        en: "Self-portrait, motorbike, book and boxing glove",
      },
      year: 2025,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile · bois",
        en: "Oil · wood panel",
      },
      dimensions: "42.5 × 51 cm",
      image: "/artists/willy-le-nalbaut/works/autoportrait.jpg",
    },
    {
      id: "3",
      title: {
        zh: "L'âne a ses raisons que les sabots ignorent.",
        fr: "L'âne a ses raisons que les sabots ignorent.",
        en: "The donkey has its reasons that hooves ignore.",
      },
      year: 2025,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile · bois",
        en: "Oil · wood panel",
      },
      dimensions: "31 × 48 cm",
      image: "/artists/willy-le-nalbaut/works/ane.jpg",
    },
    {
      id: "4",
      title: {
        zh: "Attachez vos ceintures !",
        fr: "Attachez vos ceintures !",
        en: "Fasten your seatbelts!",
      },
      year: 2025,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile · bois",
        en: "Oil · wood panel",
      },
      dimensions: "37.5 × 61.5 cm",
      image: "/artists/willy-le-nalbaut/works/attachez.jpg",
    },
    {
      id: "5",
      title: {
        zh: "La gnôle à Pépé",
        fr: "La gnôle à Pépé",
        en: "La gnôle à Pépé",
      },
      year: 2024,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile · bois",
        en: "Oil · wood panel",
      },
      dimensions: "42.5 × 51 cm",
      image: "/artists/willy-le-nalbaut/works/gnole.jpg",
    },
    {
      id: "6",
      title: {
        zh: "TiBau, TRistan et Mustafa",
        fr: "TiBau, TRistan et Mustafa",
        en: "TiBau, TRistan et Mustafa",
      },
      year: 2025,
      medium: {
        zh: "油画 · 画布",
        fr: "Huile · toile",
        en: "Oil · canvas",
      },
      dimensions: "38 × 46 cm",
      image: "/artists/willy-le-nalbaut/works/tibau.jpg",
    },
  ],
  professionalReputation: {
    galleryRecognition: [
      {
        name: "La Volonté 93",
        quote: {
          zh: "2024 年个展「Alain in the dark」呈现 Willy 独特的荒诞现实主义——日常、幽默与宗教光的引用在同一画面中并存。",
          fr: "L'exposition solo « Alain in the dark » (2024) révèle le réalisme absurde de Willy — quotidien, humour et références à la lumière divine coexistent.",
          en: "The 2024 solo show 'Alain in the dark' reveals Willy's absurd realism — everyday life, humour, and references to divine light coexist.",
        },
      },
      {
        name: "Galerie ArtLim'",
        quote: {
          zh: "2025 年利摩日群展——Willy 以木板油画持续探索法国当代绘画中具象与想象的边界。",
          fr: "Exposition collective à Limoges (2025) — Willy explore en huile sur bois la frontière entre figuration et imaginaire.",
          en: "2025 Limoges group show — Willy continues exploring the boundary between figuration and imagination in oil on wood.",
        },
      },
    ],
    collectorRecognition: [
      {
        name: "ADAF · Bruxelles",
        title: {
          zh: "2024 · 集体展",
          fr: "2024 · Exposition collective",
          en: "2024 · Group exhibition",
        },
        quote: {
          zh: "《PDT》——以二十块双面木板构成的悬挂屏风，主题「人民的房子」与日常土豆，将功能物件与绘画融为一体。",
          fr: "« PDT » — paravent suspendu de vingt panneaux peints des deux côtés, thème « maison du peuple » et pomme de terre populaire.",
          en: "'PDT' — a suspended screen of twenty double-sided painted panels, theme 'people's house' and the humble potato.",
        },
      },
    ],
    curatorMediaRecognition: [
      {
        source: {
          zh: "Prix Marin · 2021",
          fr: "Prix Marin · 2021",
          en: "Prix Marin · 2021",
        },
        quote: {
          zh: "Prix Marin 群展，Galerie Julio Gonzalez, Arcueil——法国青年绘画的重要平台之一。",
          fr: "Prix Marin, Galerie Julio Gonzalez, Arcueil — l'une des plateformes importantes pour la jeune peinture en France.",
          en: "Prix Marin, Galerie Julio Gonzalez, Arcueil — one of France's important platforms for young painting.",
        },
      },
      {
        source: {
          zh: "Yotta.Iota · Lille",
          fr: "Yotta.Iota · Lille",
          en: "Yotta.Iota · Lille",
        },
        quote: {
          zh: "2022 年个展「Bleu charette」——Willy 在里尔呈现其木板油画中介于写实与抽象之间的视觉语言。",
          fr: "Exposition solo « Bleu charette » (2022) — Willy présente à Lille un langage visuel entre figuration et abstraction.",
          en: "2022 solo show 'Bleu charette' — Willy presents in Lille a visual language between figuration and abstraction.",
        },
      },
    ],
    publicResonance: [
      {
        source: {
          zh: "Bords perdus festival · 2024",
          fr: "Bords perdus festival · 2024",
          en: "Bords perdus festival · 2024",
        },
        quote: {
          zh: "布鲁塞尔第二届 Bords perdus  festival——Willy 的作品以犬儒与幽默回应当代生活的荒诞。",
          fr: "2e édition du Bords perdus festival, Bruxelles — l'œuvre de Willy répond au absurde du quotidien avec cynisme et humour.",
          en: "2nd Bords perdus festival, Brussels — Willy's work responds to everyday absurdity with cynicism and humour.",
        },
      },
      {
        source: {
          zh: "Candidature 2025 · 艺术家陈述",
          fr: "Candidature 2025 · Statement",
          en: "2025 Application · Artist statement",
        },
        quote: {
          zh: "「Je ne travaille pas par série mais dans une recherche constante, et tous les jours si possible.」",
          fr: "« Je ne travaille pas par série mais dans une recherche constante, et tous les jours si possible. »",
          en: "I do not work in series but in constant research, every day if possible.",
        },
      },
    ],
  },
};

const suHong: ArtistProfile = {
  slug: "su-hong",
  name: {
    zh: "苏泓",
    fr: "Su Hong",
    en: "Su Hong",
  },
  birthYear: 1983,
  birthplace: {
    zh: "中国 · 河北",
    fr: "Chine · Hebei",
    en: "China · Hebei",
  },
  currentCity: {
    zh: "北京",
    fr: "Pékin",
    en: "Beijing",
  },
  nationality: {
    zh: "中国",
    fr: "Chinoise",
    en: "Chinese",
  },
  practice: {
    zh: "数字绘画 · 绘画 · 视觉艺术 · 美术指导",
    fr: "Peinture numérique · Peinture · Arts visuels · Direction artistique",
    en: "Digital Painting · Painting · Visual Arts · Art Direction",
  },
  representedBy: "独立艺术家",
  portrait: "/artists/su-hong/portrait.png",
  tagline: {
    zh: "以潜意识感知现实，呈现纯粹表现主义的高级灰世界",
    fr: "Percevoir la réalité par l'inconscient — un monde de gris raffiné et d'expressionnisme pur",
    en: "Perceiving reality through the subconscious — a refined gray world of pure expressionism",
  },
  contact: {
    email: "Xianye0606@126.com",
    phone: "18600112621",
    website: "",
    instagram: "",
    wechat: "",
  },
  education: [
    {
      year: "2007",
      institution: {
        zh: "中央美术学院",
        fr: "Central Academy of Fine Arts",
        en: "Central Academy of Fine Arts",
      },
      degree: {
        zh: "毕业",
        fr: "Diplôme",
        en: "Graduate",
      },
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
    },
  ],
  galleries: [
    {
      name: "今日美术馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      role: {
        zh: "合作展览",
        fr: "Exposition partenaire",
        en: "Partner exhibition",
      },
      since: "2012",
    },
    {
      name: "时代美术馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      role: {
        zh: "合作展览",
        fr: "Exposition partenaire",
        en: "Partner exhibition",
      },
      since: "2023",
    },
    {
      name: "半岛美术馆",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      role: {
        zh: "合作展览",
        fr: "Exposition partenaire",
        en: "Partner exhibition",
      },
      since: "2024",
    },
  ],
  whyCreate: {
    zh: "2010年开始独立艺术创作。我借鉴中华民族传统艺术形式的创作思路，与现代绘画材料技法相结合——水墨画般黑白灰的简约、留白的想象空间、印章痕迹与传统纹样的载入，构建出一种传统结构后现代的呈现形式。",
    fr: "Depuis 2010, je crée de manière indépendante en empruntant aux formes traditionnelles chinoises et en les associant aux matériaux contemporains — la sobriété noir-blanc-gris, le vide composé, les traces de sceau et les motifs traditionnels.",
    en: "Since 2010 I have worked independently, drawing on traditional Chinese artistic forms and combining them with contemporary materials — the restraint of ink-like tones, composed emptiness, seal traces, and traditional ornament.",
  },
  whyChinaFrance: {
    china: {
      zh: "我对装饰类纹样一直很有兴趣——器具、服饰、装潢中的结构提供了很多信息。从独立创作之初，我便逐渐把花纹元素融入作品。《纹饰系列》正是这一方向的集中呈现：以中华古典纹样承载个体对世界的认知。",
      fr: "Je m'intéresse depuis longtemps aux motifs décoratifs — objets, costumes, ornements. Dès mes débuts, j'ai intégré ces éléments à mes œuvres. La série « Ornements » en est la condensation : porter par la tradition chinoise une perception individuelle du monde.",
      en: "I have long been drawn to decorative patterns — on objects, garments, and interiors. From the start of my independent practice, I wove these elements into my work. The 'Ornament' series concentrates this direction.",
    },
    france: {
      zh: "表现主义绘画兴起于二十世纪初欧洲，是对旧有思想与行为模式强烈改变的诉求。我的作品介乎写实与抽象之间，以浓郁色彩与多样绘画手法体现「个体的我」对整体世界的认知——这与欧洲表现主义传统形成对话，而非简单引用。",
      fr: "L'expressionnisme européen du début du XXe siècle exprimait une rupture avec les anciens modèles. Mes œuvres, entre figuration et abstraction, dialoguent avec cette tradition par la couleur et la subjectivité — non par simple citation.",
      en: "European Expressionism at the turn of the twentieth century sought to break old modes of thought. My work, between representation and abstraction, enters dialogue with that tradition through color and subjectivity — not through mere quotation.",
    },
  },
  philosophy: {
    zh: "我关注对现实潜意识层面的感受，作品呈现纯粹表现主义。色彩、造型、纹样来自意识的随机性——世界由无数独立小概念构成，人类社会亦如此。作品不强调清晰光影结构，以简单色彩与造型塑造「高级灰」的世界；图形图象看似凌乱复杂，却构成统一整体，映射真实世界的复杂性。",
    fr: "Je m'intéresse à la perception inconsciente du réel ; mon œuvre relève de l'expressionnisme pur. Couleur, forme et motif naissent du hasard de la conscience. Sans structure lumineuse nette, je modèle un monde de « gris raffiné » — des graphismes apparemment chaotiques qui forment un tout unifié.",
    en: "I attend to the subconscious perception of reality; my work is pure expressionism. Color, form, and pattern arise from the randomness of consciousness. Without sharp light-and-shadow structure, I model a world of 'refined gray'—graphics that seem chaotic yet form a unified whole mirroring reality's complexity.",
  },
  conversation: {
    sharedQuestion: {
      zh: "传统纹样进入当代绘画，是装饰，还是结构？",
      fr: "Quand les motifs traditionnels entrent en peinture contemporaine, sont-ils décor ou structure ?",
      en: "When traditional patterns enter contemporary painting, are they decoration or structure?",
    },
    artistAnswer: {
      zh: "两者都不是，或者说两者都是。纹样提供信息——简单明了的结构，像道路指示牌、数理化公式一样清晰。我做的第一张青花纹作品是一个简单十字形，就像键盘上的加号。它既是装饰，更是组织画面的骨骼。",
      fr: "Ni l'un ni l'autre — ou les deux à la fois. Le motif informe : une structure claire, comme un panneau routier ou une formule. Ma première œuvre en motif bleu-blanc était une simple croix, comme le signe plus du clavier — à la fois ornement et ossature.",
      en: "Neither—or both. Pattern informs: a clear structure, like a road sign or a formula. My first blue-and-white pattern work was a simple cross, like the plus key on a keyboard—both ornament and skeleton.",
    },
    publicQuestions: [
      {
        author: "访客 · 北京",
        question: {
          zh: "《纹饰系列》与《图形图象系列》之间有什么联系？",
          fr: "Quel lien entre les séries « Ornements » et « Graphismes » ?",
          en: "What connects the 'Ornament' and 'Graphic Image' series?",
        },
      },
      {
        author: "Visitor · Shanghai",
        question: {
          zh: "从黑白到彩色的转变，是如何发生的？",
          fr: "Comment s'est opérée la transition du noir-blanc à la couleur ?",
          en: "How did the shift from black-and-white to color take place?",
        },
      },
      {
        author: "Anonymous",
        question: {
          zh: "表现主义主题在您作品中如何体现？",
          fr: "Comment le thème expressionniste se manifeste-t-il dans votre œuvre ?",
          en: "How does the expressionist theme appear in your work?",
        },
      },
    ],
  },
  careerTimeline: [
    {
      year: "2007",
      title: {
        zh: "中央美术学院毕业",
        fr: "Diplôme · CAFA",
        en: "Graduated from CAFA",
      },
      description: {
        zh: "毕业于中央美术学院，奠定传统与现代结合的创作方向。",
        fr: "Diplômé de la Central Academy of Fine Arts ; pose les bases d'une pratique tradition-modernité.",
        en: "Graduated from the Central Academy of Fine Arts; established a tradition-modernity practice.",
      },
    },
    {
      year: "2010",
      title: {
        zh: "开始独立艺术创作",
        fr: "Début de la création indépendante",
        en: "Independent practice begins",
      },
      description: {
        zh: "借鉴传统艺术形式，与现代材料技法结合，探索水墨式简约与留白。",
        fr: "Emprunt aux formes traditionnelles et aux matériaux contemporains ; exploration du vide et de la sobriété.",
        en: "Combining traditional forms with contemporary materials; exploring emptiness and restraint.",
      },
    },
    {
      year: "2013",
      title: {
        zh: "拓展彩色绘画",
        fr: "Extension à la peinture en couleur",
        en: "Expansion into color painting",
      },
      description: {
        zh: "在纸上黑白绘画基础上，开始纸上彩色绘画创作。",
        fr: "À partir du noir-blanc sur papier, ouverture à la peinture en couleur.",
        en: "From black-and-white on paper, opened color painting on paper.",
      },
    },
    {
      year: "2016",
      title: {
        zh: "第三届亚洲青年艺术家提名展",
        fr: "3e exposition nominative de jeunes artistes asiatiques",
        en: "3rd Asian Young Artists Nomination Exhibition",
      },
      description: {
        zh: "今日美术馆，北京。",
        fr: "Today Art Museum, Pékin.",
        en: "Today Art Museum, Beijing.",
      },
    },
    {
      year: "2022",
      title: {
        zh: "国际设计奖项",
        fr: "Prix internationaux de design",
        en: "International design awards",
      },
      description: {
        zh: "ICAD 国际当代青年美术设计大赛银奖；BICC 中英国际创意大赛铜奖；SGADC 新加坡金沙艺术设计大赛铜奖。",
        fr: "Argent ICAD ; bronze BICC ; bronze SGADC.",
        en: "ICAD silver; BICC bronze; SGADC bronze.",
      },
    },
    {
      year: "2024",
      title: {
        zh: "上海城市艺术博览会",
        fr: "AArt Shanghai Urban Art Fair",
        en: "AArt Shanghai Urban Art Fair",
      },
      description: {
        zh: "「城市青年：青年艺术家主题展」，华邑酒店，上海。",
        fr: "« Jeunesse urbaine », HUALuxe Hotel, Shanghai.",
        en: "'Urban Youth: Young Artists Theme Exhibition', HUALuxe Hotel, Shanghai.",
      },
    },
  ],
  exhibitions: [
    {
      year: 2026,
      title: {
        zh: "Let's Stay Together 当代艺术展",
        fr: "Let's Stay Together",
        en: "Let's Stay Together",
      },
      venue: "Pudong New Area Culture & Arts Center GM",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "城市青年：青年艺术家主题展",
        fr: "Jeunesse urbaine",
        en: "Urban Youth: Young Artists Theme Exhibition",
      },
      venue: "AArt Shanghai Urban Art Fair · HUALuxe Hotel",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "悬浮涌动",
        fr: "Suspension et flux",
        en: "Suspended Surge",
      },
      venue: "Peninsula Art Museum",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "电量已满 · 第九届上海青年艺术博览会",
        fr: "Pleine charge · 9e Shanghai Youth Art Fair",
        en: "Fully Charged · 9th Shanghai Youth Art Fair",
      },
      venue: "Haipai Art Museum",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "种子计划 · 买得起艺术节",
        fr: "Seed Plan · Affordable Art Festival",
        en: "Seed Plan · Affordable Art Festival",
      },
      venue: "Times Art Museum",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "5.4 ART 青年艺术家计划",
        fr: "5.4 ART · Jeunes artistes",
        en: "5.4 ART Young Artists Programme",
      },
      venue: "Rongyuan Art Museum",
      city: { zh: "青岛", fr: "Qingdao", en: "Qingdao" },
      type: "group",
    },
    {
      year: 2018,
      title: {
        zh: "第一届中央美术学院河北校友作品展",
        fr: "1re exposition des alumni CAFA · Hebei",
        en: "1st CAFA Hebei Alumni Exhibition",
      },
      venue: "Hebei Art Museum",
      city: { zh: "石家庄", fr: "Shijiazhuang", en: "Shijiazhuang" },
      type: "group",
    },
    {
      year: 2016,
      title: {
        zh: "第三届亚洲青年艺术家提名展",
        fr: "3e exposition nominative de jeunes artistes asiatiques",
        en: "3rd Asian Young Artists Nomination Exhibition",
      },
      venue: "Today Art Museum",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2012,
      title: {
        zh: "中国未来 · HIHEY 新兴艺术家计划",
        fr: "Future of China · HIHEY Emerging Artists",
        en: "Future of China · HIHEY Emerging Artists",
      },
      venue: "Today Art Museum",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
  ],
  artworks: [
    {
      id: "1",
      title: { zh: "Big Friends", fr: "Big Friends", en: "Big Friends" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 100 cm",
      image: "/artists/su-hong/works/work-1.jpg",
    },
    {
      id: "2",
      title: { zh: "Big Friends", fr: "Big Friends", en: "Big Friends" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 120 cm",
      image: "/artists/su-hong/works/work-2.jpg",
    },
    {
      id: "3",
      title: { zh: "Big Friends", fr: "Big Friends", en: "Big Friends" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 120 cm",
      image: "/artists/su-hong/works/work-3.jpg",
    },
    {
      id: "4",
      title: { zh: "Big Friends", fr: "Big Friends", en: "Big Friends" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "80 × 100 cm",
      image: "/artists/su-hong/works/work-4.jpg",
    },
    {
      id: "5",
      title: { zh: "Big Friends", fr: "Big Friends", en: "Big Friends" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "90 × 120 cm",
      image: "/artists/su-hong/works/work-5.jpg",
    },
    {
      id: "6",
      title: { zh: "马贵", fr: "Ma Gui", en: "Ma Gui" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 130 cm",
      image: "/artists/su-hong/works/work-6.jpg",
    },
    {
      id: "7",
      title: { zh: "马贵", fr: "Ma Gui", en: "Ma Gui" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 120 cm",
      image: "/artists/su-hong/works/work-7.jpg",
    },
    {
      id: "8",
      title: { zh: "马贵", fr: "Ma Gui", en: "Ma Gui" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 120 cm",
      image: "/artists/su-hong/works/work-8.jpg",
    },
  ],
  professionalReputation: {
    galleryRecognition: [
      {
        name: "今日美术馆",
        quote: {
          zh: "苏泓的作品在青年艺术家群体中具有清晰的辨识度——传统纹样不是符号堆砌，而是被重新组织为当代绘画的结构语言。",
          fr: "L'œuvre de Su Hong se distingue parmi les jeunes artistes : l'ornement traditionnel devient langage structurel, non accumulation de symboles.",
          en: "Su Hong's work stands out among young artists: traditional ornament becomes structural language, not symbolic accumulation.",
        },
      },
      {
        name: "半岛美术馆",
        quote: {
          zh: "「悬浮涌动」联展中，苏泓以浓郁色彩与多样绘画手法，呈现介于写实与抽象之间的表现主义气质。",
          fr: "Dans « Suspension et flux », Su Hong déploie couleur et gestes variés entre figuration et abstraction.",
          en: "In 'Suspended Surge', Su Hong deploys rich color and varied technique between representation and abstraction.",
        },
      },
    ],
    collectorRecognition: [
      {
        name: "青年艺术博览会观众",
        title: {
          zh: "上海 · 2023",
          fr: "Shanghai · 2023",
          en: "Shanghai · 2023",
        },
        quote: {
          zh: "纹样与公式、指示牌并置在一起，意外地平复又锋利——像把日常信息变成了绘画。",
          fr: "Motifs, formules et panneaux juxtaposés — apaisant et tranchant à la fois, comme si l'information quotidienne devenait peinture.",
          en: "Patterns, formulas, and signs juxtaposed—calm yet sharp, as if daily information became painting.",
        },
      },
    ],
    curatorMediaRecognition: [
      {
        source: {
          zh: "ICAD 国际当代青年美术设计大赛",
          fr: "ICAD",
          en: "ICAD",
        },
        quote: {
          zh: "2022 年银奖——表彰其在传统装饰语言与当代视觉设计之间的创新融合。",
          fr: "Argent 2022 — récompense l'innovation entre ornement traditionnel et design visuel contemporain.",
          en: "2022 Silver Award—recognizing innovation between traditional ornament and contemporary visual design.",
        },
      },
      {
        source: {
          zh: "BICC 中英国际创意大赛",
          fr: "BICC",
          en: "BICC",
        },
        quote: {
          zh: "2022 年铜奖——作品在跨文化视觉表达中呈现独特个体意识。",
          fr: "Bronze 2022 — une conscience individuelle singulière dans l'expression visuelle transculturelle.",
          en: "2022 Bronze—distinct individual consciousness in cross-cultural visual expression.",
        },
      },
    ],
    publicResonance: [
      {
        source: {
          zh: "买得起艺术节 · 观众留言",
          fr: "Affordable Art Festival · public",
          en: "Affordable Art Festival · public",
        },
        quote: {
          zh: "传统不是复古，在他的画里活成了现在时。",
          fr: "La tradition n'y est pas rétro — elle est au présent.",
          en: "Tradition here is not retro—it lives in the present tense.",
        },
      },
      {
        source: {
          zh: "SGADC 新加坡金沙艺术设计大赛",
          fr: "SGADC Singapore",
          en: "SGADC Singapore",
        },
        quote: {
          zh: "2022 年铜奖——《纹饰系列》在东南亚当代视觉语境中获得认可。",
          fr: "Bronze 2022 — la série « Ornements » reconnue dans le contexte visuel contemporain d'Asie du Sud-Est.",
          en: "2022 Bronze—the 'Ornament' series recognized in Southeast Asia's contemporary visual context.",
        },
      },
    ],
  },
};

const artists: Record<string, ArtistProfile> = {
  "willy-le-nalbaut": willyLeNalbaut,
  "su-hong": suHong,
};

export function getAllArtists(): ArtistProfile[] {
  return Object.values(artists);
}

export function getArtistBySlug(slug: string): ArtistProfile | null {
  return artists[slug] ?? null;
}

export function getAllArtistSlugs(): string[] {
  return Object.keys(artists);
}

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
