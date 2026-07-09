import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type CriticProfile = {
  slug: string;
  name: LocalizedText;
  birthYear: number;
  currentCity: LocalizedText;
  nationality: LocalizedText;
  specialty: LocalizedText;
  languages: LocalizedText;
  tagline: LocalizedText;
  contact: {
    email: string;
    website: string;
    wechat: string;
  };
  education: {
    year: string;
    institution: LocalizedText;
    degree: LocalizedText;
    city: LocalizedText;
  }[];
  affiliations: {
    name: LocalizedText;
    role: LocalizedText;
    since: string;
    city: LocalizedText;
  }[];
  criticStatement: LocalizedText;
  platformNote: LocalizedText;
  careerTimeline: {
    year: string;
    title: LocalizedText;
    description: LocalizedText;
  }[];
  workReviews: {
    id: string;
    date: string;
    artistSlug: string;
    artistName: LocalizedText;
    artworkTitle: LocalizedText;
    artworkYear: number;
    artworkImage: string;
    excerpt: LocalizedText;
  }[];
  articles: {
    id: string;
    date: string;
    title: LocalizedText;
    subject: LocalizedText;
    excerpt: LocalizedText;
  }[];
  recognition: {
    source: LocalizedText;
    quote: LocalizedText;
  }[];
};

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

const linWei: CriticProfile = {
  slug: "lin-wei",
  name: {
    zh: "林薇",
    fr: "Lin Wei",
    en: "Lin Wei",
  },
  birthYear: 1984,
  currentCity: {
    zh: "巴黎",
    fr: "Paris",
    en: "Paris",
  },
  nationality: {
    zh: "中国",
    fr: "Chinoise",
    en: "Chinese",
  },
  specialty: {
    zh: "当代艺术批评 · 绘画与视觉文化",
    fr: "Critique d'art contemporain · peinture et culture visuelle",
    en: "Contemporary art criticism · painting and visual culture",
  },
  languages: {
    zh: "中文 · 法语 · 英语",
    fr: "Chinois · français · anglais",
    en: "Chinese · French · English",
  },
  tagline: {
    zh: "以慢读与跨文化语境，记录当代绘画中那些尚未被命名的感受",
    fr: "Une lecture lente et transculturelle — nommer ce que la peinture contemporaine laisse encore en suspens",
    en: "Slow reading across cultures — naming what contemporary painting still leaves unsaid",
  },
  contact: {
    email: "lin.wei@example.com",
    website: "",
    wechat: "",
  },
  education: [
    {
      year: "2009",
      institution: {
        zh: "巴黎索邦大学",
        fr: "Université Paris-Sorbonne",
        en: "Paris-Sorbonne University",
      },
      degree: {
        zh: "艺术史与视觉文化 · 硕士",
        fr: "Histoire de l'art et culture visuelle · Master",
        en: "Art history and visual culture · MA",
      },
      city: {
        zh: "巴黎",
        fr: "Paris",
        en: "Paris",
      },
    },
    {
      year: "2006",
      institution: {
        zh: "中国美术学院",
        fr: "China Academy of Art",
        en: "China Academy of Art",
      },
      degree: {
        zh: "艺术史 · 学士",
        fr: "Histoire de l'art · Licence",
        en: "Art history · BA",
      },
      city: {
        zh: "杭州",
        fr: "Hangzhou",
        en: "Hangzhou",
      },
    },
  ],
  affiliations: [
    {
      name: {
        zh: "Zhen Collection Paris",
        fr: "Zhen Collection Paris",
        en: "Zhen Collection Paris",
      },
      role: {
        zh: "受邀评论家 · 在线评论档案",
        fr: "Commentatrice invitée · archive de commentaires en ligne",
        en: "Invited critic · online review archive",
      },
      since: "2024",
      city: {
        zh: "巴黎",
        fr: "Paris",
        en: "Paris",
      },
    },
    {
      name: {
        zh: "《艺术界》",
        fr: "Le Monde de l'Art",
        en: "Le Monde de l'Art",
      },
      role: {
        zh: "特约撰稿人",
        fr: "Rédactrice contributrice",
        en: "Contributing writer",
      },
      since: "2018",
      city: {
        zh: "上海 · 巴黎",
        fr: "Shanghai · Paris",
        en: "Shanghai · Paris",
      },
    },
  ],
  criticStatement: {
    zh: "我关注的不是结论，而是观看的方式：一幅画如何在不同文化语境中被阅读、被误读、被重新命名。评论对我而言是一种档案工作——把专业判断与公共阅读连接起来，让作品在时间里留下可被追溯的回响。",
    fr: "Ce qui m'intéresse n'est pas la conclusion, mais la manière de regarder : comment une peinture se lit, se contresense et se renomme dans des contextes culturels différents. La critique, pour moi, est un travail d'archive — relier le jugement professionnel à la lecture publique, et laisser aux œuvres une résonance traçable dans le temps.",
    en: "What interests me is not the conclusion but the way of looking: how a painting is read, misread, and renamed across cultural contexts. For me, criticism is archival work—connecting professional judgment to public reading and leaving works with a traceable resonance over time.",
  },
  platformNote: {
    zh: "以下评论与文章收录于巴黎臻藏受邀评论家档案。作品评论关联平台艺术家与具体作品；独立文章可涉及艺术家、展览、趋势或任何批评议题。",
    fr: "Les commentaires et articles ci-dessous figurent dans l'archive des commentateurs invités de Zhen Collection Paris. Les commentaires d'œuvres renvoient aux artistes et œuvres de la plateforme ; les articles indépendants peuvent porter sur un artiste, une exposition, une tendance ou tout sujet critique.",
    en: "The reviews and articles below are recorded in the Zhen Collection Paris invited critic archive. Work reviews refer to artists and works on the platform; independent articles may address an artist, an exhibition, a trend, or any critical subject.",
  },
  careerTimeline: [
    {
      year: "2024",
      title: {
        zh: "加入巴黎臻藏评论家档案",
        fr: "Entrée dans l'archive commentateur de ZCP",
        en: "Joined ZCP critic archive",
      },
      description: {
        zh: "开始为平台艺术家作品撰写在线专业评论，并发布独立批评文章。",
        fr: "Début des commentaires professionnels en ligne sur les œuvres des artistes de la plateforme et publication d'articles indépendants.",
        en: "Began publishing online professional reviews of platform artists' works and standalone critical articles.",
      },
    },
    {
      year: "2019",
      title: {
        zh: "出版评论集《慢读绘画》",
        fr: "Publication de « Lire lentement la peinture »",
        en: "Published Slow Reading Painting",
      },
      description: {
        zh: "聚焦中法当代绘画的慢读评论集，由巴黎一家独立艺术出版社发行。",
        fr: "Recueil de critiques lentes consacré à la peinture contemporaine franco-chinoise, édité par une maison indépendante à Paris.",
        en: "A collection of slow readings on Franco-Chinese contemporary painting, issued by an independent Paris art publisher.",
      },
    },
    {
      year: "2012",
      title: {
        zh: "开始持续的艺术批评写作",
        fr: "Début de l'écriture critique continue",
        en: "Began sustained art critical writing",
      },
      description: {
        zh: "为中文与法文艺术媒体撰写展览评论与艺术家访谈。",
        fr: "Critiques d'expositions et entretiens d'artistes pour des médias d'art en chinois et en français.",
        en: "Exhibition reviews and artist interviews for Chinese and French art media.",
      },
    },
  ],
  workReviews: [
    {
      id: "review-willy-flaque",
      date: "2025-11-18",
      artistSlug: "willy-le-nalbaut",
      artistName: {
        zh: "威利·勒纳尔博",
        fr: "Willy Le Nalbaut",
        en: "Willy Le Nalbaut",
      },
      artworkTitle: {
        zh: "« La flaque aux oiseaux »",
        fr: "« La flaque aux oiseaux »",
        en: "The puddle with birds",
      },
      artworkYear: 2025,
      artworkImage: "/artists/willy-le-nalbaut/works/flaque-aux-oiseaux.jpg",
      excerpt: {
        zh: "水洼不是背景，而是舞台本身。勒纳尔博把观者的视线困在浅景深里——鸟、倒影与天空在同一片面上争夺位置，荒诞由此变得极其安静。",
        fr: "La flaque n'est pas un fond, mais la scène elle-même. Le Nalbaut retient le regard dans une faible profondeur — oiseaux, reflets et ciel se disputent le même plan, et l'absurde devient d'une tranquillité troublante.",
        en: "The puddle is not background but the stage itself. Le Nalbaut holds the gaze in shallow depth—birds, reflections, and sky contest the same plane, and the absurd becomes unsettlingly quiet.",
      },
    },
    {
      id: "review-su-ma-gui",
      date: "2025-09-02",
      artistSlug: "su-hong",
      artistName: {
        zh: "苏泓",
        fr: "Su Hong",
        en: "Su Hong",
      },
      artworkTitle: {
        zh: "《马鬼》",
        fr: "« Ma Gui »",
        en: "Ma Gui",
      },
      artworkYear: 2024,
      artworkImage: "/artists/su-hong/works/ma-gui.jpg",
      excerpt: {
        zh: "苏泓在速度与悬停之间找到了一种罕见的平衡：马鬼既像正在消失，又像刚刚出现。评论若只停留在图像学层面，会错过这种时间感。",
        fr: "Su Hong trouve un équilibre rare entre vitesse et suspension : « Ma Gui » semble à la fois sur le point de disparaître et d'apparaître. Une lecture purement iconographique manquerait cette temporalité.",
        en: "Su Hong finds a rare balance between speed and suspension: Ma Gui seems both about to vanish and to appear. A purely iconographic reading would miss this sense of time.",
      },
    },
  ],
  articles: [
    {
      id: "article-franco-chinese-gaze",
      date: "2025-06-14",
      title: {
        zh: "跨文化慢读：当代绘画中的双重凝视",
        fr: "Lecture lente transculturelle : le double regard dans la peinture contemporaine",
        en: "Transcultural slow reading: the double gaze in contemporary painting",
      },
      subject: {
        zh: "艺术批评 · 中法当代绘画",
        fr: "Critique d'art · peinture contemporaine franco-chinoise",
        en: "Art criticism · Franco-Chinese contemporary painting",
      },
      excerpt: {
        zh: "当一位法国观众与一位中国观众站在同一幅画前，他们看见的往往不仅是不同的符号，更是不同的时间结构。批评的工作，是为这两种时间找到可以对话的中间地带。",
        fr: "Devant une même toile, un regard français et un regard chinois ne voient pas seulement des symboles différents, mais des temporalités différentes. Le travail critique consiste à trouver entre elles un terrain de dialogue.",
        en: "Before the same canvas, French and Chinese viewers often see not only different symbols but different structures of time. Critical work is to find between them a ground for dialogue.",
      },
    },
    {
      id: "article-public-archive",
      date: "2025-03-08",
      title: {
        zh: "为什么在线艺术档案需要评论者的声音",
        fr: "Pourquoi une archive d'art en ligne a besoin de la voix des commentateurs",
        en: "Why an online art archive needs the critic's voice",
      },
      subject: {
        zh: "平台写作 · 公共档案",
        fr: "Écriture de plateforme · archive publique",
        en: "Platform writing · public archive",
      },
      excerpt: {
        zh: "作品不会自己说话。档案若只有图像与元数据，就缺少在公共领域里被持续阅读的路径。评论不是装饰，而是让作品进入时间的方式之一。",
        fr: "Une œuvre ne parle pas d'elle-même. Une archive réduite aux images et aux métadonnées manque de trajectoire de lecture publique. Le commentaire n'est pas un ornement, c'est une manière d'introduire l'œuvre dans le temps.",
        en: "A work does not speak for itself. An archive of images and metadata alone lacks a path of sustained public reading. Commentary is not ornament—it is one way to bring a work into time.",
      },
    },
  ],
  recognition: [
    {
      source: {
        zh: "苏泓 · 艺术家",
        fr: "Su Hong · Artiste",
        en: "Su Hong · Artist",
      },
      quote: {
        zh: "林薇的评论从不急于下判断，她会把观看的过程完整地留给读者。",
        fr: "Les textes de Lin Wei ne se précipitent jamais vers un verdict ; elle laisse au lecteur le processus entier du regard.",
        en: "Lin Wei's writing never rushes to a verdict; she leaves the reader the full process of looking.",
      },
    },
    {
      source: {
        zh: "H Studio · 合作画廊",
        fr: "H Studio · Galerie partenaire",
        en: "H Studio · Partner gallery",
      },
      quote: {
        zh: "她的文字帮助我们在公共语境里更准确地呈现艺术家——既不夸大，也不简化。",
        fr: "Ses textes nous aident à présenter les artistes avec justesse dans l'espace public — sans exagération ni simplification.",
        en: "Her texts help us present artists accurately in public context—without exaggeration or simplification.",
      },
    },
  ],
};

const CRITICS: CriticProfile[] = [linWei];

export function getCriticBySlug(slug: string): CriticProfile | undefined {
  return CRITICS.find((critic) => critic.slug === slug);
}

export function getAllCritics(): CriticProfile[] {
  return CRITICS;
}
