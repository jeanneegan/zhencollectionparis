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
  representedBy: LocalizedText;
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
  artistStatement: LocalizedText;
  whyChinaFrance: {
    china: LocalizedText;
    france: LocalizedText;
  };
  hopeToLeave: LocalizedText;
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
    type: "solo" | "duo" | "group";
  }[];
  series?: {
    id: string;
    title: LocalizedText;
    intro: LocalizedText;
    period?: string;
  }[];
  artworks: {
    id: string;
    title: LocalizedText;
    subtitle?: LocalizedText;
    description?: LocalizedText;
    year: number;
    medium: LocalizedText;
    dimensions: string;
    image: string;
    imageAspect?: [number, number];
    seriesId?: string;
    views?: {
      src: string;
      label?: LocalizedText;
      imageAspect?: [number, number];
    }[];
    layoutPair?: {
      group: string;
      role: "main" | "side";
      equal?: boolean;
    };
    displayLayout?: "compact";
    viewsLayout?: "row" | "stack";
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
    zh: "法国 · 塔朗斯",
    fr: "France · Talence",
    en: "France · Talence",
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
  representedBy: {
    zh: "",
    fr: "",
    en: "",
  },
  portrait: "/artists/willy-le-nalbaut/portrait.jpg",
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
  galleries: [],
  artistStatement: {
    fr: `Mes peintures tendent vers le réalisme, mais il y a autre chose. Un réalisme à ma manière, qui côtoie d'autres formes parfois plus abstraites, des formes dictées par la peinture. Qu'il m'arrive de préciser, transformer ou de laisser.

Ces derniers temps j'ai été influencé entre autres par le réalisme de la peinture hollandaise du XVIe et XVIIe (Jacobus Vrel, Jan Jansz Van de Velde, Brueghel... pour les scènes et natures mortes), française du XIXe (Théodore Rousseau, Millet... pour les paysages), mais aussi par des peintres plus contemporains (Marcos Carrasquer, Kati Heck...) qui m'ont fait aller dans le détail de chaque élément de mes tableaux.

Je représente des paysages, des scènes de vie, des figures, des portraits, des animaux, des objets de mon entourage, de mon quotidien ou issus de mon imaginaire ; toutes ces choses sont les acteurs et les décors d'un théâtre absurde, un agglomérat onirique, une accumulation d'idées, une décharge mentale.

Du cynisme et de l'humour, on peut voir un animal, un dieu et un objet banal au même plan, tous au même niveau, sans souci de perspective ou de hiérarchie.

Ce que permet la magie de la peinture, de l'image et de l'imagination, la représentation confondue avec le mystique, le religieux.

Mes tableaux peuvent être parfois métaphoriques, critiques et symboliques.

Je travaille à la peinture à l'huile sur bois ; depuis peu, je trouve ce support plus adapté à ma manière de peindre, et de temps en temps sur toile pour des formats plus grands.

Je peins en plusieurs couches ; je garde parfois des zones plus abstraites ou des éléments entre les couches.

J'ai peint beaucoup de petits et moyens formats ces dernières années — plus pratiques pour les déplacements, et plus abordables.

Je peins beaucoup d'après images, que je vais chercher sur internet, quelquefois d'après modèle. J'aimerais me détacher un peu de l'ordinateur pour peindre.

Je ne fais pas vraiment de dessin préparatoire, à part au pinceau directement.

Je pars souvent d'une idée que j'ai en tête, mais d'autres arrivent pendant que le tableau se construit.

Il m'arrive d'abandonner une peinture quelque temps, peut-être pour la laisser mûrir, puis je la reprends en effaçant ou en repassant certains éléments et en en gardant d'autres, ce qui vient renforcer le côté absurde de mes peintures.

Je ne travaille pas par série, mais dans une recherche constante, et tous les jours si possible.`,
    zh: `我的绘画趋向现实主义，但另有他物——一种属于我的现实主义，有时贴近更抽象的形式，有时由绘画本身 dictate 的形式，我时而明确，时而改造，时而保留。

近年来，我受十六、十七世纪荷兰绘画现实主义的影响（Jacobus Vrel、Jan Jansz Van de Velde、Brueghel……于场景与静物），也受十九世纪法国绘画影响（Théodore Rousseau、Millet……于风景），还有当代画家（Marcos Carrasquer、Kati Heck……）促使我更深入画中的每个细节。

我描绘周遭与想象中的风景、场景、人物、肖像、动物与物件——它们是荒诞剧场的演员与布景，是梦境的堆积，是思想的释放。

带着犬儒与幽默，动物、神祇与平凡之物可以处于同一层面，同一高度，无需透视或等级的顾虑——这正是绘画、图像与想象力的魔法，是再现与神秘、宗教的混融。

我的作品有时隐喻、有时批判、有时象征。

我近年以木板油画为主，觉得这一载体更契合我的画法；偶尔也在画布上创作更大尺幅。

我以多层方式作画，保留抽象区域与层间元素。

近年来我画了许多中小尺幅——便于搬运，也更容易被收藏。

我常依据网络图像作画，有时也依据模特。我希望逐渐减少对电脑的依赖。

我很少做预备素描，通常直接用画笔起稿。

我常从脑中一个想法出发，却在绘制过程中让新念头进入。

我有时会搁置一幅画，让它沉淀，再重新拾起——擦去或覆盖某些部分，保留另一些，这往往强化了我作品中的荒诞感。

我不按系列工作，而是持续每日探索。`,
    en: `My paintings tend toward realism, but there is something else — a realism of my own, sometimes bordering on more abstract forms, forms dictated by painting itself. I may clarify, transform, or leave things as they are.

Recently I have been influenced by the realism of sixteenth- and seventeenth-century Dutch painting (Jacobus Vrel, Jan Jansz Van de Velde, Brueghel... for scenes and still lifes), nineteenth-century French painting (Théodore Rousseau, Millet... for landscapes), and also by more contemporary painters (Marcos Carrasquer, Kati Heck...) who have led me into the detail of every element in my canvases.

I depict landscapes, scenes of life, figures, portraits, animals, and objects from my surroundings, my daily life, or my imagination — all of them actors and sets in an absurd theatre, a dreamlike accumulation, a discharge of ideas, a mental release.

With cynicism and humour, an animal, a god, and a mundane object can appear on the same plane, at the same level, without concern for perspective or hierarchy — what the magic of painting, image, and imagination allows, representation mingled with the mystical and the religious.

My canvases can be metaphorical, critical, and symbolic.

I work in oil on wood panel; recently I have found this support better suited to my way of painting, and from time to time on canvas for larger formats.

I paint in layers, sometimes keeping more abstract zones or elements between the layers.

I have painted many small and medium formats in recent years — more practical to move, and more affordable.

I often paint from images found online, sometimes from models. I would like to detach myself a little from the computer when I paint.

I do not really make preparatory drawings, except directly with the brush.

I often start from an idea in my head, but others arrive while the canvas is being built.

I sometimes abandon a painting for a while, perhaps to let it ripen, then return to it by erasing or repainting certain elements while keeping others — which reinforces the absurd side of my paintings.

I do not work in series, but in constant research, every day if possible.`,
  },
  whyChinaFrance: {
    china: {
      zh: "我试着学过中文——学得很慢，也从未真正学会；哪怕不懂中文，我也从未到过中国。笔记本上仍留着半途而废的汉字和发音练习。我不是为了旅行，也不是为了给自己添一个标签。而是因为我想触碰到另一种命名世界的方式，有一天能真正与一位中国艺术家对话，而不必把一切转译成英语或法语。巴黎臻藏的对话，对我来说正是这种努力的延伸。",
      fr: "J'ai essayé d'apprendre le chinois — doucement, maladroitement, sans jamais vraiment y parvenir ; je ne comprends pas le chinois, et je ne suis jamais allé en Chine. Il reste dans mes cahiers des caractères abandonnés à mi-chemin et des exercices de prononciation. Ce n'était pas pour voyager ou ajouter une étiquette. C'était pour toucher du doigt une autre manière de nommer le monde, et pour avoir, un jour, une conversation vraie avec un artiste chinois — sans faire passer tout par l'anglais ou le français. Zhen Collection Paris est pour moi une extension de cet effort.",
      en: "I tried to learn Chinese — slowly, awkwardly, without ever really succeeding; I do not understand Chinese, and I have never been to China. My notebooks still hold half-finished characters and pronunciation drills. It was not to travel or to collect a label. It was to touch another way of naming the world, and someday to have a real conversation with a Chinese artist — without routing everything through English or French. Zhen Collection Paris extends that effort for me.",
    },
    france: { zh: "", fr: "", en: "" },
  },
  hopeToLeave: { zh: "", fr: "", en: "" },
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
        zh: "群展",
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
        zh: "Bords perdus festival · 第二届",
        fr: "Bords perdus festival · 2e édition",
        en: "Bords perdus festival · 2nd edition",
      },
      venue: "La Vallée",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "« Alain in the dark »",
        fr: "« Alain in the dark »",
        en: "« Alain in the dark »",
      },
      venue: "La Volonté 93",
      city: {
        zh: "圣旺",
        fr: "Saint-Ouen-sur-Seine",
        en: "Saint-Ouen-sur-Seine",
      },
      type: "solo",
    },
    {
      year: 2023,
      title: {
        zh: "« éclair »",
        fr: "« éclair »",
        en: "« éclair »",
      },
      venue: "Sterput E2",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "solo",
    },
    {
      year: 2023,
      title: {
        zh: "« Les balladeuses » · 与 Quentin Caillaud 双人展",
        fr: "« Les balladeuses » · duo avec Quentin Caillaud",
        en: "« Les balladeuses » · duo with Quentin Caillaud",
      },
      venue: "Chez Vito",
      city: { zh: "Penne（塔恩）", fr: "Penne (Tarn)", en: "Penne (Tarn)" },
      type: "duo",
    },
    {
      year: 2023,
      title: {
        zh: "« Dévellopé couché » · 与 Quentin Caillaud 双人展",
        fr: "« Dévellopé couché » · duo avec Quentin Caillaud",
        en: "« Dévellopé couché » · duo with Quentin Caillaud",
      },
      venue: "Galerie Récif (Les îles Mardi)",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "duo",
    },
    {
      year: 2022,
      title: {
        zh: "« Bleu charette »",
        fr: "« Bleu charette »",
        en: "« Bleu charette »",
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
      year: 2020,
      title: {
        zh: "« Chien »",
        fr: "« Chien »",
        en: "« Chien »",
      },
      venue: "Le Lac",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2019,
      title: {
        zh: "« Plus qu'assez ! Simple »",
        fr: "« Plus qu'assez ! Simple »",
        en: "« Plus qu'assez ! Simple »",
      },
      venue: "Galerie Rochet Sedin",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2019,
      title: {
        zh: "« Bill & Bob »",
        fr: "« Bill & Bob »",
        en: "« Bill & Bob »",
      },
      venue: "Chez Bob",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2018,
      title: {
        zh: "« Low-cost »",
        fr: "« Low-cost »",
        en: "« Low-cost »",
      },
      venue: "Galerie Rochet Sedin",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2018,
      title: {
        zh: "« C'était mieux demain #4 »",
        fr: "« C'était mieux demain #4 »",
        en: "« C'était mieux demain #4 »",
      },
      venue: "La Vallée",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "group",
    },
    {
      year: 2017,
      title: {
        zh: "与 Antoine Loyer 双人展",
        fr: "Exposition duo avec Antoine Loyer",
        en: "Duo exhibition with Antoine Loyer",
      },
      venue: "Le Maga",
      city: { zh: "布鲁塞尔", fr: "Bruxelles", en: "Brussels" },
      type: "duo",
    },
    {
      year: 2017,
      title: {
        zh: "« What did you expect ? »",
        fr: "« What did you expect ? »",
        en: "« What did you expect ? »",
      },
      venue: "Pilotenkueche",
      city: { zh: "莱比锡", fr: "Leipzig", en: "Leipzig" },
      type: "group",
    },
  ],
  artworks: [
    {
      id: "1",
      title: { zh: "« PDT »", fr: "« PDT »", en: "« PDT »" },
      subtitle: {
        zh: "（Paravent suspendu pour l'ADAF, Bruxelles, Septembre 2024）",
        fr: "(Paravent suspendu pour l'ADAF, Bruxelles, Septembre 2024)",
        en: "(Suspended screen for ADAF, Brussels, September 2024)",
      },
      description: {
        fr: `« PDT » est un paravent suspendu représentant une pomme de terre un peu frippée et germée. Sur le recto, une scène de barbecue entre voisins. Leurs trois maisons sont reliées et perchées dans un arbre qui s'appelle l'eucalyptus arc-en-ciel.

Je l'ai réalisé pour l'ADAF, une exposition collective qui a eu lieu en septembre 2024 à Bruxelles. Chaque artiste invité devait créer un objet ou un meuble pouvant être fonctionnel.

Il s'agit de vingt panneaux de bois évidés et peints de chaque côté, reliés par des anneaux en métal à clipser, attachés à une barre en acier et suspendus au plafond.

Le thème de l'exposition était la « maison du peuple » — d'où la pomme de terre, légume peu cher et populaire.`,
        zh: `《PDT》是一件悬挂式屏风，描绘一颗略显皱缩、发了芽的土豆。正面是邻居们烧烤的场景——三栋房子相连，栖居在一棵名叫「彩虹桉」的树上。

为 2024 年 9 月布鲁塞尔 ADAF 群展而作；每位受邀艺术家须创作一件可用作功能的物件或家具。

作品由二十块掏空并双面绘制的木板组成，以可扣合的金属环相连，固定在钢杆上，悬于天花板。

展览主题为「人民的房子」——土豆因而出现：便宜、大众的蔬菜。`,
        en: `« PDT » is a suspended screen depicting a slightly wrinkled, sprouted potato. On the front, a barbecue scene between neighbours—their three houses linked and perched in a tree called the rainbow eucalyptus.

I made it for ADAF, a group exhibition in Brussels in September 2024. Each invited artist had to create an object or piece of furniture that could be functional.

It consists of twenty hollowed wood panels painted on both sides, joined by clip-on metal rings, attached to a steel bar and hung from the ceiling.

The exhibition theme was the « people's house »—hence the potato, a cheap, popular vegetable.`,
      },
      year: 2024,
      medium: {
        zh: "木板油画、金属环、钢制挂杆与吊缆",
        fr: "Huile sur panneaux de bois, anneaux en métal, barre et câbles en acier",
        en: "Oil on wood panels, metal rings, steel bar and cables",
      },
      dimensions: "154 × 123 cm",
      image: "/artists/willy-le-nalbaut/works/pdt-recto.jpg",
      imageAspect: [791, 1024],
      views: [
        {
          src: "/artists/willy-le-nalbaut/works/pdt-recto.jpg",
          label: { zh: "正面 · recto", fr: "Recto", en: "Front" },
          imageAspect: [791, 1024],
        },
        {
          src: "/artists/willy-le-nalbaut/works/pdt-verso.jpg",
          label: { zh: "背面 · verso", fr: "Verso", en: "Back" },
          imageAspect: [788, 1024],
        },
      ],
    },
    {
      id: "3",
      title: {
        zh: "L'âne à ses raisons que les sabots ignorent.",
        fr: "L'âne à ses raisons que les sabots ignorent.",
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
      imageAspect: [1024, 659],
      description: {
        fr: "Dans ce tableau, l'âne est sensé me représenter.",
        zh: "在这幅画里，驴子应当代表我自己。",
        en: "In this painting, the donkey is meant to represent me.",
      },
    },
    {
      id: "13",
      title: {
        zh: "« Mais c'est le Mitch ! »",
        fr: "« Mais c'est le Mitch ! »",
        en: "« Mais c'est le Mitch ! »",
      },
      year: 2024,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile sur bois",
        en: "Oil on wood panel",
      },
      dimensions: "20 × 31 cm",
      image: "/artists/willy-le-nalbaut/works/mais-cest-le-mitch.jpg",
      imageAspect: [1010, 646],
      description: {
        fr: `Dans ce tableau, je fais un portrait de ma poule Mitch — elle est la seule survivante d'une attaque de renards.

J'utilise une peinture dorée pour faire des liserets ou des traits fins, un peu comme dans certaines peintures représentant la lumière ou le divin, comme dans L'Annonciation ou l'Agneau mystique de Van Eyck.`,
        zh: `在这幅画里，我为我的母鸡 Mitch 画像——她是一次狐狸袭击中唯一的幸存者。

我用金色颜料画出细线或镶边，有点像某些表现光或神圣性的绘画，如 van Eyck 的《Annunciation》或《Ghent Altarpiece》（神秘羔羊）。`,
        en: `In this painting I portray my hen Mitch—the sole survivor of a fox attack.

I use gold paint for fine lines or borders, somewhat like paintings that represent light or the divine, as in Van Eyck's Annunciation or the Ghent Altarpiece (Adoration of the Mystic Lamb).`,
      },
    },
    {
      id: "15",
      title: {
        zh: "« Saupoudrez d'un peu de Korrigan »",
        fr: "« Saupoudrez d'un peu de Korrigan »",
        en: "« Saupoudrez d'un peu de Korrigan »",
      },
      year: 2024,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile sur bois",
        en: "Oil on wood panel",
      },
      dimensions: "20 × 30 cm",
      image: "/artists/willy-le-nalbaut/works/saupoudrez-dun-peu-de-korrigan.jpg",
      imageAspect: [1024, 680],
      description: {
        fr: `Dans cette peinture, j'ai d'abord commencé par le bouquet de fleurs comme une nature morte ; après l'avoir laissé quelques mois sans y toucher, je suis revenu par derrière pour y rajouter les personnages et le paysage.`,
        zh: `在这幅画里，我起初以花束作静物起稿；搁置数月未动之后，我又回到画前，在后方添上人物与风景。`,
        en: `In this painting, I first began with the bouquet of flowers as a still life; after leaving it untouched for several months, I came back to add the figures and the landscape behind it.`,
      },
    },
    {
      id: "14",
      title: {
        zh: "« Attachez vos ceintures ! »",
        fr: "« Attachez vos ceintures ! »",
        en: "« Attachez vos ceintures ! »",
      },
      year: 2025,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile sur bois",
        en: "Oil on wood panel",
      },
      dimensions: "37.5 × 61.5 cm",
      image: "/artists/willy-le-nalbaut/works/attachez-vos-ceintures.jpg",
      imageAspect: [1024, 650],
      description: {
        fr: `Dans « Attachez vos ceintures ! », la scène se passe en Bretagne, dans une rue existante. J'ai imaginé un monde où tout serait accessible en monte-escaliers Stannah.

Il reste un morceau d'une couche inférieure en bas à gauche ; et, comme dans la peinture précédente, au centre du tableau, la lumière divine en traits dorés — en référence à Van Eyck ou d'autres peintures religieuses.`,
        zh: `在《Attachez vos ceintures !》中，场景设在布列塔尼一条真实存在的街道。我设想了一个一切皆可乘 Stannah 楼梯升降机抵达的世界。

左下角仍留有一小块下层画作的痕迹；与上一幅画一样，画面中央是以金色细线表现的神圣之光——参照 van Eyck 或其他宗教绘画。`,
        en: `In « Attachez vos ceintures ! », the scene takes place in Brittany, in a real street. I imagined a world where everything would be reachable by Stannah stairlifts.

A fragment of an underlying layer remains at the bottom left; and, as in the previous painting, divine light in gold lines at the centre of the canvas—in reference to Van Eyck or other religious paintings.`,
      },
    },
    {
      id: "7",
      title: {
        zh: "« Limaces sous dômes »",
        fr: "« Limaces sous dômes »",
        en: "Slugs under domes",
      },
      year: 2025,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile sur bois",
        en: "Oil on wood panel",
      },
      dimensions: "38 × 46 cm",
      image: "/artists/willy-le-nalbaut/works/limaces.jpg",
      imageAspect: [1024, 822],
      layoutPair: { group: "limaces-goeiedag", role: "main" },
    },
    {
      id: "8",
      title: {
        zh: "Goeiedag mevroew bloem",
        fr: "Goeiedag mevroew bloem",
        en: "Goeiedag mevroew bloem",
      },
      year: 2026,
      medium: {
        zh: "油画 · 木板",
        fr: "Huile sur bois",
        en: "Oil on wood panel",
      },
      dimensions: "",
      image: "/artists/willy-le-nalbaut/works/goeiedag.jpg",
      imageAspect: [1024, 698],
      layoutPair: { group: "limaces-goeiedag", role: "side" },
    },
    {
      id: "9",
      title: {
        zh: "sans titre",
        fr: "sans titre",
        en: "Untitled",
      },
      year: 2025,
      medium: {
        zh: "油画 · 画布",
        fr: "Huile sur toile",
        en: "Oil on canvas",
      },
      dimensions: "",
      image: "/artists/willy-le-nalbaut/works/sans-titre.jpg",
      imageAspect: [256, 1024],
    },
    {
      id: "10",
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
      imageAspect: [1024, 951],
    },
    {
      id: "11",
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
      imageAspect: [812, 1024],
    },
    {
      id: "12",
      title: {
        zh: "« Eh-pad flower. »",
        fr: "« Eh-pad flower. »",
        en: "« Eh-pad flower. »",
      },
      year: 2023,
      medium: {
        zh: "油画 · 画布",
        fr: "Huile sur toile",
        en: "Oil on canvas",
      },
      dimensions: "30 × 30 cm",
      image: "/artists/willy-le-nalbaut/works/eh-pad-flower.jpg",
      imageAspect: [1011, 1024],
    },
  ],
  professionalReputation: {
    galleryRecognition: [],
    collectorRecognition: [],
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
    ],
    publicResonance: [
      {
        source: {
          zh: "William Lambeau · 文本",
          fr: "Texte · William Lambeau",
          en: "Text · William Lambeau",
        },
        quote: {
          fr: `En architecte cinglé omnipotent il pose les bases d'un monde où les bâtiments s'écrasent pour mieux s'enlacer, où les végétaux s'esclaffent fébrilement et où des fenêtres paumées portent l'horizon.

C'est dans une négligence volontaire qu'il s'abroge des règles de perspective académique, jusqu'à parfois nous emmener au vertige. Le saut du lit par de-là l'échelle des éléments.

Il est dans un dialogue permanent avec la peinture. Il matérialise ses imbroglios trivialement métaphysiques en multiples chimères facétieuses.

Il acte, la peinture reçoit, qui elle-même lui donne à voir. Cette première relation est toujours une relation d'intrigue mutuelle.

Ces chimères se moquent de lui, de nous et lui se moque, d'un cynisme toujours attachant, de la vie qu'il voit comme une énorme farce. Vive la météorite ! Vive la vache couronnée !

Nous pouvons parfois lui percevoir un Diogène, mentor inexpliqué mais également un Diogène comme syndrome pictural.

Du pain, du vin, des bons pains, des bons vins, s'il vous plaît, poussez-vous de là.

L'espace toile-artiste devient l'espace de dialogue des objets peints et des pensées feintes, tout caquète, tout blablate, ça se mange dans la main et ça part des fois en coup fourré.

Il doit parfois deviner ce que ces chimères lui disent, quitte à parfois imposer sa loi sans être insensible aux rancunes que par moment ces avatars en crise d'autonomie lui témoignent.

Car il est à l'écoute, des aventures mystérieuses que la vie lui propose et des aventures mystérieuses que la peinture lui dévoile.

Tel un mythe où l'expérience abstraite ou concrète, où la vie maudite ou jouit, se veulent d'être digérées par un imaginaire communiant.

Finalement, c'est un théâtre absurde qu'il peint et c'est en toute complicité que sa peinture et lui manigancent le kidnapping du spectateur à travers de multiples détails et un tohu-bohu luxuriant.`,
          zh: `他以一个癫狂而全能的建筑师自居，为一个世界奠基：建筑彼此挤压又相互缠绕，植物癫狂地嗤笑，迷途的窗框托住天际。

他刻意废止学院透视的法则，有时把我们带至晕眩——元素比例错位，像从床上一跃而起。

他与绘画持续对话，把琐碎而形而上的纠缠，化作无数促狭的奇形怪兽。

他行动，绘画接纳，绘画又回赠他观看——这最初的关系，始终是彼此共谋。

这些奇兽嘲弄他、嘲弄我们；他也回以嘲弄——带着始终迷人的犬儒，把生命看作一场巨大的闹剧。流星万岁！戴冠的母牛万岁！

我们有时在他身上读到第欧根尼：一位无法解释的导师，也是一种绘画上的第欧根尼症候。

面包、美酒，好面包、好酒——请让开。

画布与艺术家之间的空间，成为被画之物与佯装之思的对话场；一切聒噪、一切絮语，可一手握食，有时又骤然闯入。

他有时须猜测这些奇兽对他说什么；有时强加自己的法则，却也无法对那些偶发自主危机、向他泄怨的化身无动于衷。

他在倾听——生活呈献的神秘冒险，绘画揭露的神秘冒险。

如同一种神话：抽象或具体的经验，被诅咒或享乐的生命，都渴望被共融的想象所消化。

归根结底，他画的是荒诞剧场；他与绘画共谋，以无数细节与丰茂的混沌，「绑架」观众。`,
          en: `All-powerful, eccentric architect, he lays the foundations for a world where buildings collide only to entwine, where plants burst into feverish laughter, and where lost windows frame the horizon.

Through deliberate negligence he sets aside the rules of academic perspective, almost to the point of making us dizzy. The leap from the bed beyond the scale of the elements.

He is in constant dialogue with painting. He materializes his trivially metaphysical entanglements into multiple facetious chimeras.

He acts, and the paint receives, which in turn reveals itself to him.
This primary relationship is always one of mutual intrigue.

These chimeras mock him, mock us, and he mocks, with an ever-endearing cynicism, the life he sees as one enormous escapade. Long live the meteorite! Long live the crowned cow!

We can sometimes perceive in him a Diogenes, an unexplained mentor but also a Diogenes as a pictorial syndrome. Bread, wine, good bread, good wine, please, away.

The canvas-artist space becomes a space for dialogue between painted objects and feigned thoughts, all chatter, all blather, it's easy to handle and sometimes takes a backstabbing turn.

He must sometimes guess what these chimeras are telling him, even if it means occasionally imposing his will without being oblivious to the resentment that these avatars, in the throes of a crisis of autonomy, sometimes express toward him.

For he is attuned to the mysterious adventures that life offers him and to the mysterious adventures that painting reveals to him.

Like a myth where abstract or concrete experience, where life is cursed or enjoyed, seeks to be digested by a communing imagination.

In the end, it is an absurd theater that he paints, and it is in utter complicity that his painting and he conspire to kidnap the viewer through multiple details and a lush hubbub.`,
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
  representedBy: {
    zh: "",
    fr: "",
    en: "",
  },
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
  galleries: [],
  artistStatement: {
    zh: `借鉴中华民族传统艺术形式的创作思路，与现代绘画材料技法相结合，如水墨画般黑白灰的简约，留白的想象空间，印章痕迹的描绘，传统纹样的载入……构建出一种传统结构后现代的呈现形式。

2013年在纸上黑白绘画创作的基础上拓展思路，开始纸上彩色绘画的创作。

传统与现代的结合是我一直在探索的方向，或者说是各种结合方式——快与慢，动与静……物质本身就是一体两面的结合。我一直对装饰类的纹样很感兴趣，器具、服饰、装潢等，从开始独立创作的时候就逐渐把一些花纹元素融合到作品里。后来有一个阶段注意到了生活中的各种符号，比如数理化的运算公式、道路指示牌等，简单明了的结构提供了很多信息……！我做的第一张青花纹作品是一个简单十字形，就像键盘上加号那个形状。之前的作品大多是画单独形体，随着绘画的累积我开始尝试多种结构和不同花纹的结合。

我的各个系列的作品都是以表现主义为主题，作品的表达介乎于写实和抽象之间，用浓郁的色彩和多样性的绘画手法来体现「个体的我」对整体世界的认知。表现主义绘画兴起于20世纪初期，在当时工业革命席卷全球的大环境「压迫」下，人类处在历史潮流变革中，强烈的对旧有思想行为模式改变诉求的体现。二十一世纪社会思潮进一步转型，对个体意识的表现欲非常强烈，同时中华文化影响力也在不断增大！我的作品表现「中华古典」与现代元素的融合，用现代的手法加入传统的样式表现了我对「新世界」的感知。《纹饰系列》和《图形图象系列》就是这时期我的两个代表系列作品。

展现「自我意识里对现实的感知」，可以是纯粹的表现主义！颜色，形状，花纹，样式出于「意识的随机性」，随机性结合产生了整体世界！

「世界」是多元化的，「物类」有着多样性，一个大概念的形成总是伴随着无数个细小的元素；这些小元素又各自成型、独立存在。人类社会亦看似偶然，却又是「意识里的必然」。

以单纯构成为主的画面没有明暗变化、光影结构；呈现的就是对意识里「高级灰」世界最直接的表达。图形图像纷繁交叠在一起，像极了现实世界里一切杂乱无章、错综复杂……但，这是一个整体！`,
    fr: `Je m'inspire des approches créatives des formes artistiques traditionnelles chinoises, que j'associe aux matériaux et techniques picturales contemporains — la sobriété noir-blanc-gris propre à l'encre de Chine, l'espace laissé au vide, la trace du sceau, l'introduction de motifs traditionnels… — pour construire une forme de présentation post-moderne à structure traditionnelle.

En 2013, à partir de mes peintures noir et blanc sur papier, j'ai élargi ma démarche et commencé à peindre en couleur sur papier.

L'alliance tradition-modernité est une direction que j'explore sans cesse — ou plutôt toutes sortes d'alliances : rapide et lent, mouvement et immobilité… la matière elle-même est une union de deux faces. Je m'intéresse depuis longtemps aux motifs décoratifs — objets, costumes, ornements — et, dès le début de ma pratique indépendante, j'ai progressivement intégré des éléments floraux à mes œuvres. À un moment, j'ai aussi remarqué les signes du quotidien : formules mathématiques, panneaux routiers… des structures simples et claires qui transmettent beaucoup d'informations ! Ma première œuvre à motif bleu-blanc était une simple croix, comme le signe plus d'un clavier. Mes œuvres antérieures représentaient surtout des formes isolées ; au fil de la peinture, j'ai commencé à combiner différentes structures et motifs.

Chacune de mes séries est guidée par l'expressionnisme. Mes œuvres se situent entre figuration et abstraction ; couleurs intenses et techniques variées expriment la perception du « moi individuel » sur le monde dans son ensemble. L'expressionnisme est né au début du XXe siècle, sous la « pression » de la révolution industrielle : l'humanité, prise dans le flux de l'histoire, réclamait vivement la rupture avec les anciens modes de pensée et d'action. Au XXIe siècle, les courants sociaux se transforment encore ; le désir d'exprimer la conscience individuelle s'intensifie, tandis que l'influence de la culture chinoise ne cesse de croître ! Mes œuvres mêlent « classicisme chinois » et éléments modernes ; par des moyens contemporains et des formes traditionnelles, elles traduisent ma perception d'un « nouveau monde ». Les séries « Ornements » et « Graphismes et images » sont les deux séries représentatives de cette période.

Elles manifestent la perception du réel telle qu'elle émerge de mon inconscient — un expressionnisme pur ! Couleur, forme, motif et style naissent du « hasard de la conscience » ; ce hasard combiné engendre un monde global.

Le « monde » est pluraliste ; les « choses » sont diverses. La formation d'une grande idée s'accompagne toujours d'innombrables petits éléments — chacun prend forme et existe à part. La société humaine paraît accidentelle, et reste une « nécessité de la conscience ».

Des compositions fondées sur la pure construction, sans gradation claire ni structure lumineuse, expriment directement ce « gris raffiné » intérieur. Graphismes et images s'entrecroisent en profusion — comme le désordre complexe du monde réel… et pourtant, c'est un tout !`,
    en: `I draw on the creative approaches of traditional Chinese art forms, combining them with modern painting materials and techniques — the restraint of ink-like black, white, and gray, the imaginative space of emptiness, the depiction of seal marks, the incorporation of traditional patterns… — to build a postmodern presentation with a traditional structure.

In 2013, building on my black-and-white work on paper, I expanded my approach and began painting in color on paper.

The union of tradition and modernity is a direction I have always explored — or rather, every kind of union: fast and slow, movement and stillness… matter itself is a union of two sides. I have long been interested in decorative patterns — on objects, garments, and interiors — and from the start of my independent practice I gradually wove floral elements into my work. At one stage I also noticed everyday signs: mathematical formulas, road signs… simple, clear structures that carry a great deal of information! My first blue-and-white patterned work was a simple cross, like the plus sign on a keyboard. Earlier works mostly depicted isolated forms; as my painting accumulated, I began combining varied structures with different patterns.

Each of my series is grounded in Expressionism. My work sits between representation and abstraction; intense color and diverse techniques express how the 'individual I' perceives the world as a whole. Expressionism arose in the early twentieth century, under the 'pressure' of the Industrial Revolution sweeping the globe — humanity, caught in historical change, urgently sought to break old patterns of thought and action. In the twenty-first century social currents shift further; the desire to express individual consciousness grows strong, even as Chinese cultural influence expands. My work merges 'Chinese classicism' with modern elements; through contemporary means and traditional forms it conveys my sense of a 'new world.' The 'Ornament' series and the 'Graphics and Images' series are the two representative bodies of work from this period.

They reveal my perception of reality as it emerges from the subconscious — a pure Expressionism! Color, shape, pattern, and style arise from the 'randomness of consciousness'; that randomness, combined, produces the world as a whole.

The 'world' is plural; 'things' are diverse. Every large concept forms alongside countless small elements — each takes shape and exists on its own. Human society may seem accidental, yet it is also a 'necessity within consciousness.'

Compositions built on pure construction, without clear light-and-shadow structure, express most directly this inner world of 'refined gray.' Graphics and images overlap in profusion — like everything in the real world, chaotic and complex… yet it is a whole!`,
  },
  whyChinaFrance: {
    china: {
      zh: "我对装饰类纹样一直很有兴趣——器具、服饰、装潢中的结构提供了很多信息。从独立创作之初，我便逐渐把花纹元素融入作品。《纹饰系列》正是这一方向的集中呈现：以中华古典纹样承载个体对世界的认知。",
      fr: "Je m'intéresse depuis longtemps aux motifs décoratifs — objets, costumes, ornements. Dès mes débuts, j'ai intégré ces éléments à mes œuvres. La série « Ornements » en est la condensation : porter par la tradition chinoise une perception individuelle du monde.",
      en: "I have long been drawn to decorative patterns — on objects, garments, and interiors. From the start of my independent practice, I wove these elements into my work. The 'Ornament' series concentrates this direction.",
    },
    france: {
      zh: "我长期用纸创作，对纸张的触感很敏感。法国纸——尤其是 Canson——纤维细、表面有轻微的颗粒，颜色落下去有回应，留白也留得住。这种质感会把我带入一种很具体的创作状态：不必急着把画面填满，可以薄染、可以覆盖、可以在纸面上慢慢找平衡。选它不是因为牌子，而是因为一上手，就知道今天可以在这张纸上画。",
      fr: "Je travaille sur papier depuis longtemps, et la main du support compte. Le papier français — surtout Canson — a des fibres fines, un grain léger ; la couleur répond, le blanc tient. Cette matière m'entraîne dans un état de création très concret : pas besoin de tout remplir tout de suite, on peut laviser, reprendre, chercher l'équilibre sur la feuille. Je le choisis non pour la marque, mais parce qu'en le touchant, je sais que je peux peindre dessus aujourd'hui.",
      en: "I have worked on paper for a long time, and I am sensitive to how a sheet feels. French paper—especially Canson—has fine fibres and a light grain; color responds, and white holds. This texture pulls me into a very specific state of making: no need to fill the surface at once—you can wash thinly, cover, slowly find balance on the page. I choose it not for the brand, but because the moment I touch it, I know I can paint on it today.",
    },
  },
  hopeToLeave: {
    zh: "我希望被记住的，是一个在中国传统与现代之间探索的艺术家——不是把传统当作装饰贴上去，也不是为了显得「当代」而故意断开历史，而是在纸面上、在颜色与纹样里，持续寻找两者可以共存的结构。",
    fr: "Ce que j'espère qu'on retienne : un artiste qui explore, en Chine, entre tradition et modernité — non pour coller l'ancien comme ornement, ni pour couper le fil de l'histoire au nom du contemporain, mais pour chercher, sur le papier, dans la couleur et le motif, une structure où les deux coexistent.",
    en: "What I hope to be remembered for: an artist who explores, in China, between tradition and modernity—not to paste the past on as decoration, nor to cut history for the sake of appearing contemporary, but to keep seeking, on paper, in color and pattern, a structure where both can coexist.",
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
        zh: "「Let's Stay Together」当代艺术展",
        fr: "« Let's Stay Together » — art contemporain",
        en: "« Let's Stay Together » Contemporary Art Exhibition",
      },
      venue: "浦东新区文化艺术指导中心 GM",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "AArt 上海城市艺术博览会 · 城市青年：青年艺术家主题展",
        fr: "AArt Shanghai · Jeunesse urbaine",
        en: "AArt Shanghai Urban Art Fair · Urban Youth: Young Artists Theme Exhibition",
      },
      venue: "华邑酒店",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2024,
      title: {
        zh: "「悬浮涌动」——青年艺术家联展",
        fr: "« Suspension et flux » — jeunes artistes",
        en: "« Suspended Surge » — Young Artists Group Exhibition",
      },
      venue: "半岛美术馆",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「邂逅·八个绝活儿——京城燕京八绝沉浸式体验大展」",
        fr: "« Huit savoir-faire impériaux de Pékin »",
        en: "« Eight Imperial Crafts of Beijing » Immersive Experience",
      },
      venue: "北京工艺美术博物馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「电量已满」第九届上海青年艺术博览会",
        fr: "« Pleine charge » · 9e Shanghai Youth Art Fair",
        en: "« Fully Charged » · 9th Shanghai Youth Art Fair",
      },
      venue: "海派艺术馆",
      city: { zh: "上海", fr: "Shanghai", en: "Shanghai" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "第四届大学生艺术博览会（武汉）",
        fr: "4e Foire artistique universitaire · Wuhan",
        en: "4th University Art Fair (Wuhan)",
      },
      venue: "武汉国际会展中心",
      city: { zh: "武汉", fr: "Wuhan", en: "Wuhan" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "首届「北京国际非遗周」",
        fr: "1re Semaine internationale du patrimoine immatériel · Pékin",
        en: "1st Beijing International Intangible Heritage Week",
      },
      venue: "全国农业展览馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「坠入网中——厦门当代艺术作品展」",
        fr: "« Pris dans le filet » — art contemporain · Xiamen",
        en: "« Caught in the Net » — Xiamen Contemporary Art Exhibition",
      },
      venue: "三看艺术馆",
      city: { zh: "厦门", fr: "Xiamen", en: "Xiamen" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「纪念碑：时间的倒影，探索和可能性」当代艺术群展",
        fr: "« Monument : reflets du temps »",
        en: "« Monument: Reflections of Time, Exploration and Possibility »",
      },
      venue: "321 空间",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「RCF 国际人才艺术峰会」",
        fr: "Sommet RCF · art et talents internationaux",
        en: "RCF International Talent Art Summit",
      },
      venue: "萧山国际人才俱乐部",
      city: { zh: "杭州", fr: "Hangzhou", en: "Hangzhou" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「我 X 三把椅子」当代青年三人艺术联展",
        fr: "« Moi × trois chaises »",
        en: "« Me × Three Chairs » — Three-Artist Group Exhibition",
      },
      venue: "无二艺术空间",
      city: { zh: "苏州", fr: "Suzhou", en: "Suzhou" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「真我」艺术展",
        fr: "« Vrai moi »",
        en: "« True Self » Art Exhibition",
      },
      venue: "Silian Gallery × ATLAS studio",
      city: { zh: "广州", fr: "Guangzhou", en: "Guangzhou" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「UP兔 YOU」兔兔主题艺术展",
        fr: "« UP兔 YOU » — thème lapin",
        en: "« UP Rabbit YOU » Rabbit Theme Art Exhibition",
      },
      venue: "NUOVO LAB & GALLERY",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「赛特艺术计划」第一单元「光年之外」",
        fr: "Set Art Plan · unité 1 « Au-delà de l'année-lumière »",
        en: "Set Art Plan · Unit 1 « Beyond Light-Years »",
      },
      venue: "力邦艺术港",
      city: { zh: "西安", fr: "Xi'an", en: "Xi'an" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「竟在桃花源」留学生艺术计划",
        fr: "« Au pays des pêches » — programme artistes étrangers",
        en: "« Unexpected Peach Blossom Land » International Artists Programme",
      },
      venue: "悦美术馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「种子计划——华熙 LIVE 买得起艺术节」青年艺术家作品展",
        fr: "Seed Plan · Huaxi LIVE Affordable Art Festival",
        en: "Seed Plan · Huaxi LIVE Affordable Art Festival",
      },
      venue: "时代美术馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "中国（沈阳）数字影像艺术展 · 弧光织梦",
        fr: "Art numérique · Shenyang — « Lumière tissée »",
        en: "China (Shenyang) Digital Image Art Exhibition · Arc Light Dreams",
      },
      venue: "城市公共空间",
      city: { zh: "沈阳", fr: "Shenyang", en: "Shenyang" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「旭生旅行者计划」",
        fr: "Xusheng Traveller Programme",
        en: "Xusheng Traveller Programme",
      },
      venue: "旭生美术馆",
      city: { zh: "深圳", fr: "Shenzhen", en: "Shenzhen" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「我指着大海方向」当代艺术展",
        fr: "« Je pointe vers la mer »",
        en: "« I Point Toward the Sea » Contemporary Art Exhibition",
      },
      venue: "野美术馆",
      city: { zh: "东莞", fr: "Dongguan", en: "Dongguan" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「冬日梦想家——中国（沈阳）数字影像艺术展」",
        fr: "« Rêveur d'hiver » — art numérique · Shenyang",
        en: "« Winter Dreamer » — China (Shenyang) Digital Image Art Exhibition",
      },
      venue: "城市公共空间",
      city: { zh: "沈阳", fr: "Shenyang", en: "Shenyang" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「中国潮——中国当代艺术展」",
        fr: "« China Trend » — art contemporain chinois",
        en: "« China Trend » — Chinese Contemporary Art Exhibition",
      },
      venue: "艺次元",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「出山」当代艺术展",
        fr: "« Sortir de la montagne »",
        en: "« Out of the Mountain » Contemporary Art Exhibition",
      },
      venue: "山丘美术馆",
      city: { zh: "滁州", fr: "Chuzhou", en: "Chuzhou" },
      type: "group",
    },
    {
      year: 2023,
      title: {
        zh: "「兔游——2023 生肖艺术群展」",
        fr: "« Lapin vagabond » — zodiaque 2023",
        en: "« Rabbit Roam » — 2023 Zodiac Art Group Exhibition",
      },
      venue: "家聿美术馆",
      city: { zh: "武汉", fr: "Wuhan", en: "Wuhan" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "「5.4 ART——青年艺术家计划」入围作品展",
        fr: "5.4 ART — sélection jeunes artistes",
        en: "5.4 ART Young Artists Programme — Selected Works",
      },
      venue: "融源美术馆",
      city: { zh: "青岛", fr: "Qingdao", en: "Qingdao" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "「安徒生与中国——艺术点亮世界」安徒生主题展",
        fr: "Andersen et la Chine — l'art illumine le monde",
        en: "Andersen and China — Art Lights Up the World",
      },
      venue: "元和塘美术馆",
      city: { zh: "苏州", fr: "Suzhou", en: "Suzhou" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "「篮子里的悄悄话——青年艺术家插画联展」",
        fr: "« Chuchotements dans le panier » — illustration",
        en: "« Whispers in the Basket » — Young Illustrators Group Exhibition",
      },
      venue: "樱造艺术空间",
      city: { zh: "佛山", fr: "Foshan", en: "Foshan" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "「时代：当代线上艺术展」",
        fr: "« Époque » — exposition en ligne",
        en: "« Era » — Contemporary Online Art Exhibition",
      },
      venue: "歌雅艺术",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2022,
      title: {
        zh: "「浪潮 WAVE」当代艺术展",
        fr: "« Vague WAVE »",
        en: "« Wave WAVE » Contemporary Art Exhibition",
      },
      venue: "方舟画廊",
      city: { zh: "南京", fr: "Nanjing", en: "Nanjing" },
      type: "group",
    },
    {
      year: 2018,
      title: {
        zh: "第一届中央美术学院河北校友作品展",
        fr: "1re exposition des alumni CAFA · Hebei",
        en: "1st CAFA Hebei Alumni Exhibition",
      },
      venue: "河北美术馆",
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
      venue: "今日美术馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2015,
      title: {
        zh: "「悟语」青年艺术家邀请展",
        fr: "« Paroles éveillées » — jeunes artistes invités",
        en: "« Awakened Words » — Young Artists Invitational",
      },
      venue: "798 瀚画廊",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
    {
      year: 2013,
      title: {
        zh: "SURGE Art · 艺起北京第八届艺术节",
        fr: "SURGE Art · 8e festival Yiqibj",
        en: "SURGE Art · Yiqibj 8th Art Festival",
      },
      venue: "三里屯橙色大厅",
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
      venue: "今日美术馆",
      city: { zh: "北京", fr: "Pékin", en: "Beijing" },
      type: "group",
    },
  ],
  series: [
    {
      id: "ma-gui",
      title: {
        zh: "「马贵」系列",
        fr: "Série « Ma Gui »",
        en: "« Ma Gui » Series",
      },
      period: "2025",
      intro: {
        zh: `此系列是复古与现代的融合，谐音与寓意的碰撞。灵感来源于中国传统文化在发音上的谐音。

在中国文化中，马象征着自由、奔放、力量与成功；柜作为家具中常见的物品，通常与财富、储存和稳定联系在一起。将「马有贵」这一谐音，既体现了传统文化的智慧，又赋予了作品独特的寓意。线条简洁流畅，展现出一种现代感。在构思过程中，将马的动物形象与各种复古柜子的结构融合在一起。

「柜马贵」或者「马富贵」——「马」与「柜子」在视觉上形成了强烈的对比和冲击，这种对「马」的寓意以及充满生机与希望的柜子的结合，也寓意着财富与自由、力量与稳定的完美结合。

同时，作品也传达出一种积极向上的精神。马的奔放与活力象征着人们在追求目标时的勇气和决心，而柜子的稳定则提醒人们在追求财富和成功的过程中，要保持内心的平静和稳定。这种精神传达使作品不仅具有视觉上的美感，更具有情感上的共鸣。

画面中用了多种现代绘画技巧。通过线条的粗细变化和图案重复排列，营造出一种节奏感和韵律感；通过大面积的空余空间，使画面更加简洁明了，同时也为观众留下了更多的想象空间。`,
        fr: `Cette série fusionne le vintage et le contemporain — collision d'homophonies et de sens. L'inspiration vient des jeux de mots fondés sur la prononciation dans la culture chinoise traditionnelle.

En Chine, le cheval (马) symbolise liberté, fougue, force et réussite ; l'armoire (柜), meuble familier, évoque richesse, réserve et stabilité. L'homophonie « 马有贵 » (mǎ yǒu guì) porte la sagesse traditionnelle tout en conférant à l'œuvre une signification propre. Les lignes, fluides et épurées, affirment une modernité : au fil de la conception, la figure animale du cheval se fond avec diverses structures d'armoires anciennes.

« 柜马贵 » ou « 马富贵 » — le cheval et l'armoire produisent un contraste visuel fort ; cette alliance de sens — vitalité équestre et cabinet plein d'espoir — suggère l'union de richesse et liberté, de force et stabilité.

L'œuvre transmet aussi un esprit positif : la fougue du cheval incarne le courage et la détermination dans la quête d'un objectif ; la stabilité de l'armoire rappelle de garder le calme intérieur en poursuivant richesse et succès. Au-delà de la beauté visuelle, la série cherche une résonance émotionnelle.

Diverses techniques picturales contemporaines structurent la surface : variations d'épaisseur du trait et répétition de motifs créent rythme et cadence ; de larges espaces laissés vides clarifient la composition et ouvrent le champ de l'imaginaire du spectateur.`,
        en: `This series merges the vintage and the contemporary—a collision of homophony and meaning. Its inspiration comes from wordplay rooted in pronunciation within traditional Chinese culture.

In Chinese culture, the horse (马) symbolizes freedom, vigor, strength, and success; the cabinet (柜), a familiar piece of furniture, is linked to wealth, storage, and stability. The homophonic phrase « 马有贵 » (mǎ yǒu guì) carries traditional wisdom while giving the work its distinct meaning. Lines stay fluid and concise, asserting a modern sensibility: through the process of conception, the animal figure of the horse merges with various structures of vintage cabinets.

« 柜马贵 » or « 马富贵 »—horse and cabinet create a sharp visual contrast; this pairing of meanings—equestrian vitality and a cabinet full of hope—suggests a union of wealth and freedom, strength and stability.

The work also conveys an upward spirit: the horse's exuberance stands for courage and resolve in pursuing one's goals; the cabinet's steadiness reminds us to keep inner calm while seeking wealth and success. Beyond visual beauty, the series seeks emotional resonance.

Contemporary painting techniques structure the surface: shifts in line weight and repeated pattern build rhythm and cadence; large areas of open space clarify the composition and leave room for the viewer's imagination.`,
      },
    },
    {
      id: "big-friends",
      title: {
        zh: "「Big Friends」系列",
        fr: "Série « Big Friends »",
        en: "« Big Friends » Series",
      },
      period: "2025",
      intro: {
        zh: `「Big Friends」系列——温馨、简洁、纯粹的视觉表达。

线条与形状：以简洁的线条和几何形状为基础，拟人化的动物朋友形象以略宽的黑色线描边勾勒出角色形态。线条干净利落，没有过多的装饰和复杂的转折，强调简洁明了。几何形状如圆形、方形、三角形等被大量运用，通过这些基本形状的组合和排列，在空间上构建出简洁而富有层次的感觉。通过简洁的形式，传达出一种内敛、含蓄的情感。

色彩运用：以黑白为主色调，摒弃了丰富的色彩搭配，通过黑白灰的对比，营造出强烈的视觉冲击力。色彩选择不仅体现了极简主义的「少即是多」理念，还赋予作品一种冷静、理性且纯粹的气质。

风格的现代性：扁平极简风格是现代设计中的一种重要趋势，它反映了当代社会对于简洁、高效和纯粹的追求。这种风格的绘画作品具有很强的现代感，符合当下人们对时尚和潮流的审美观念。`,
        fr: `La série « Big Friends » — une expression visuelle chaleureuse, épurée et pure.

Lignes et formes : des traits simples et des formes géométriques servent de base à des figures d'animaux-amis légèrement anthropomorphiques ; un contour noir un peu épais fait émerger chaque personnage. Les lignes restent nettes, sans ornement superflu ni plis complexes — la clarté prime. Cercles, carrés, triangles et autres formes élémentaires se combinent et s'ordonnent pour construire, dans l'espace, une composition à la fois simple et stratifiée ; par cette économie de moyens, l'œuvre transmet une émotion contenue et discrète.

Couleur : le noir et le blanc dominent ; les riches harmonies cèdent la place au contraste des gris, d'où une forte charge visuelle. Ce choix incarne l'idée minimaliste du « moins, c'est plus » et confère aux pièces une atmosphère calme, rationnelle et pure.

Modernité : le style plat et minimaliste compte parmi les grandes tendances du design contemporain — quête de simplicité, d'efficacité et de pureté. Ces peintures portent une modernité affirmée, en phase avec le regard d'aujourd'hui sur la mode et la contemporanéité.`,
        en: `The « Big Friends » series — a warm, concise, and pure visual language.

Line and shape: simple lines and geometric forms underpin slightly anthropomorphic animal friends; a slightly wide black outline brings each character into focus. Lines stay clean—no excess ornament or complex turns—emphasizing clarity. Circles, squares, triangles, and other basic shapes combine and arrange in space to build a composition that is simple yet layered; through this restraint, the work conveys a quiet, contained emotion.

Color: black and white dominate; rich palettes give way to contrasts of gray, producing strong visual impact. The choice embodies the minimalist « less is more » and lends the works a calm, rational, pure temperament.

Modernity: flat minimalism is a major current in contemporary design—reflecting society's pursuit of simplicity, efficiency, and purity. These paintings carry a distinct modernity, aligned with today's sensibility toward fashion and the contemporary.`,
      },
    },
  ],
  artworks: [
    {
      id: "1",
      title: { zh: "马贵", fr: "Ma Gui", en: "Ma Gui" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 130 cm",
      image: "/artists/su-hong/works/ma-gui.jpg",
      seriesId: "ma-gui",
    },
    {
      id: "2",
      title: { zh: "马贵 2", fr: "Ma Gui 2", en: "Ma Gui 2" },
      year: 2025,
      medium: {
        zh: "布面丙烯",
        fr: "Acrylique sur toile",
        en: "Acrylic on canvas",
      },
      dimensions: "100 × 130 cm",
      image: "/artists/su-hong/works/ma-gui-dialogue.jpg",
      seriesId: "ma-gui",
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
      dimensions: "100 × 100 cm",
      image: "/artists/su-hong/works/big-friends.jpg",
      seriesId: "big-friends",
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
      dimensions: "120 × 100 cm",
      image: "/artists/su-hong/works/big-friends-2.jpg",
      seriesId: "big-friends",
    },
    {
      id: "10",
      title: { zh: "爱马氏", fr: "Ai Ma Shi", en: "Ai Ma Shi" },
      year: 2024,
      medium: {
        zh: "数字作品",
        fr: "Œuvre numérique",
        en: "Digital work",
      },
      dimensions: "",
      image: "/artists/su-hong/works/ai-ma-shi.jpg",
      imageAspect: [784, 534],
      layoutPair: { group: "ai-ma-shi", role: "main", equal: true },
    },
    {
      id: "11",
      title: { zh: "爱马逝", fr: "Ai Ma Shi", en: "Ai Ma Shi" },
      year: 2025,
      medium: {
        zh: "数字作品",
        fr: "Œuvre numérique",
        en: "Digital work",
      },
      dimensions: "",
      image: "/artists/su-hong/works/ai-ma-shi-2.jpg",
      imageAspect: [782, 628],
      layoutPair: { group: "ai-ma-shi", role: "side", equal: true },
    },
    {
      id: "5",
      title: {
        zh: "《纹饰系列》",
        fr: "Série des ornements",
        en: "Ornament Series",
      },
      year: 2022,
      medium: {
        zh: "综合材料",
        fr: "Technique mixte",
        en: "Mixed media",
      },
      dimensions: "",
      image: "/artists/su-hong/works/wen-shi-series.jpg",
      imageAspect: [688, 614],
    },
    {
      id: "6",
      title: { zh: "荷花", fr: "Lotus", en: "Lotus" },
      year: 2020,
      medium: {
        zh: "纸本墨笔",
        fr: "Encre sur papier",
        en: "Ink on paper",
      },
      dimensions: "",
      image: "/artists/su-hong/works/peony.jpg",
      imageAspect: [790, 500],
      displayLayout: "compact",
    },
    {
      id: "7",
      title: { zh: "花瓶", fr: "Vase", en: "Vase" },
      year: 2020,
      medium: {
        zh: "纸本墨笔",
        fr: "Encre sur papier",
        en: "Ink on paper",
      },
      dimensions: "",
      image: "/artists/su-hong/works/poppy.jpg",
      imageAspect: [790, 500],
      views: [
        {
          src: "/artists/su-hong/works/poppy.jpg",
          imageAspect: [790, 500],
        },
        {
          src: "/artists/su-hong/works/poppy-2.jpg",
          imageAspect: [790, 500],
        },
      ],
      viewsLayout: "stack",
      displayLayout: "compact",
    },
    {
      id: "8",
      title: {
        zh: "假如山上有花纹",
        fr: "Si les montagnes avaient des motifs",
        en: "If the Mountains Had Patterns",
      },
      year: 2022,
      medium: {
        zh: "纸本综合材料",
        fr: "Technique mixte sur papier",
        en: "Mixed media on paper",
      },
      dimensions: "78 × 110 cm",
      image: "/artists/su-hong/works/ru-shan-shang-you-hua-wen.jpg",
    },
    {
      id: "9",
      title: {
        zh: "青花鱼",
        fr: "Poissons bleu et blanc",
        en: "Blue and White Fish",
      },
      year: 2022,
      medium: {
        zh: "纸本综合材料",
        fr: "Technique mixte sur papier",
        en: "Mixed media on paper",
      },
      dimensions: "",
      image: "/artists/su-hong/works/qinghua-yu.jpg",
      imageAspect: [790, 550],
      views: [
        {
          src: "/artists/su-hong/works/qinghua-yu.jpg",
          imageAspect: [790, 550],
        },
        {
          src: "/artists/su-hong/works/qinghua-yu-2.jpg",
          imageAspect: [790, 550],
        },
      ],
    },
  ],
  professionalReputation: {
    galleryRecognition: [],
    collectorRecognition: [],
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

export function getArtworkAspectRatio(artwork: {
  dimensions: string;
  imageAspect?: [number, number];
}): [number, number] {
  if (artwork.imageAspect) return artwork.imageAspect;

  const match = artwork.dimensions.match(
    /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)/,
  );
  return match ? [Number(match[1]), Number(match[2])] : [4, 5];
}

export function getArtworkDisplayLayout(artwork: {
  dimensions: string;
  imageAspect?: [number, number];
  views?: unknown[];
  layoutPair?: { role: "main" | "side"; equal?: boolean };
  displayLayout?: "compact";
  viewsLayout?: "row" | "stack";
}): {
  aspect: [number, number];
  articleClass: string;
  imageSizes: string;
  frameStyle: {
    aspectRatio: string;
    maxHeight?: string;
    width?: string;
    marginInline?: "auto";
  };
} {
  const aspect = getArtworkAspectRatio(artwork);
  const [width, height] = aspect;
  const ratio = width / height;
  const aspectRatio = `${width} / ${height}`;
  const multiViewClass =
    artwork.views && artwork.views.length > 1 ? "sm:col-span-2" : "";

  if (artwork.displayLayout === "compact") {
    return {
      aspect,
      articleClass: "mx-auto w-full max-w-[360px]",
      imageSizes: "(max-width: 640px) 80vw, 360px",
      frameStyle: { aspectRatio, marginInline: "auto" },
    };
  }

  if (artwork.layoutPair) {
    const isSide = artwork.layoutPair.role === "side";
    const imageSizes = artwork.layoutPair.equal
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 420px"
      : isSide
        ? "(max-width: 640px) 100vw, 280px"
        : "(max-width: 640px) 100vw, (max-width: 1024px) 55vw, 520px";

    return {
      aspect,
      articleClass: "",
      imageSizes,
      frameStyle: { aspectRatio },
    };
  }

  if (ratio >= 1.25) {
    return {
      aspect,
      articleClass: "sm:col-span-2",
      imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 860px",
      frameStyle: { aspectRatio },
    };
  }

  if (ratio <= 0.75) {
    const maxHeight = "min(72vh, 560px)";

    if (multiViewClass) {
      return {
        aspect,
        articleClass: multiViewClass,
        imageSizes: "(max-width: 640px) 45vw, 380px",
        frameStyle: { aspectRatio },
      };
    }

    return {
      aspect,
      articleClass: "mx-auto w-full max-w-[280px]",
      imageSizes: "(max-width: 640px) 70vw, 280px",
      frameStyle: {
        aspectRatio,
        maxHeight,
        width: `min(100%, calc(${maxHeight} * ${width} / ${height}))`,
        marginInline: "auto",
      },
    };
  }

  return {
    aspect,
    articleClass: multiViewClass,
    imageSizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px",
    frameStyle: { aspectRatio },
  };
}

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
