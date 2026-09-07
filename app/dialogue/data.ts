import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type { LocalizedText };

export type DialogueAvatar = {
  type: "portrait" | "brand";
  src?: string;
  alt: string;
  label?: string;
};

const willyPortraitAvatar: DialogueAvatar = {
  type: "portrait",
  src: "/artists/willy-le-nalbaut/portrait.jpg",
  alt: "Willy Le Nalbaut",
  label: "Willy Le Nalbaut",
};

const suHongPortraitAvatar: DialogueAvatar = {
  type: "portrait",
  src: "/artists/su-hong/portrait.png",
  alt: "苏泓 Su Hong",
  label: "苏泓 Su Hong",
};

const melanieGerinAvatar: DialogueAvatar = {
  type: "portrait",
  alt: "Mélanie Gérin",
  label: "Mélanie Gérin",
};

export type DialogueExchange = {
  question: LocalizedText;
  questionFrom?: DialogueAvatar;
  answer?: LocalizedText;
  answerFrom?: DialogueAvatar;
  answers?: { answer: LocalizedText; answerFrom: DialogueAvatar }[];
};

export type ObserverQuestion = {
  author: string;
  question: LocalizedText;
  questionFrom?: DialogueAvatar;
  answer?: LocalizedText;
  answerFrom?: DialogueAvatar;
};

export type DialogueEpisode = {
  slug: string;
  month: string;
  episode: number;
  title: LocalizedText;
  sharedQuestion: DialogueExchange;
  willyToSuHong: DialogueExchange;
  suHongToWilly: DialogueExchange;
  observerQuestions: ObserverQuestion[];
  publicParticipation: {
    open: boolean;
    note: LocalizedText;
  };
  artists: [string, string];
  featuredWorks: {
    artistSlug: string;
    artworkId: string;
    image?: string;
    displayAspect?: [number, number];
  }[];
  isCurrent: boolean;
  status?: "current" | "upcoming" | "archived";
};

export const episodes: DialogueEpisode[] = [
  {
    slug: "le-cheval",
    month: "2026-09",
    episode: 1,
    title: { zh: "马", fr: "Le Cheval", en: "The Horse" },
    sharedQuestion: {
      questionFrom: {
        type: "brand",
        alt: "Zhen Collection Paris · 巴黎臻藏",
        label: "巴黎臻藏",
      },
      question: {
        zh: "今年是马年。你们都画过马。马对你们来说意味着什么？为什么？",
        fr: "Cette année est l'année du Cheval dans le calendrier chinois. Vous avez tous les deux représenté des chevaux dans votre travail. Que représente le cheval pour vous, et pourquoi ?",
        en: "This year is the Year of the Horse in the Chinese calendar. You have both depicted horses in your work. What does the horse mean to you, and why?",
      },
      answers: [
        {
          answerFrom: suHongPortraitAvatar,
          answer: {
            zh: "说到马，我第一个想到就是中华传统文化里十二地支的「午」，「午」在生肖中就是指的马这种动物。我们小时候都会背诵的属相顺口溜「……辰龙，巳蛇，午马，未羊……」！在中国人的五行中「午马」也代表「火」元素，按照中国古代的干支纪年法，2026年是丙午马年，「丙」在十天干中为「阳火」，所以今年可以说是「火马年」，火即为能量！另外再说到马会联想到速度，蓝天白云大草原上一群乌黑健硕的骏马在驰骋，就像是人生一世自由自在奔放的状态。能量流动不止，物质生生不息！",
            fr: `Quand on parle du cheval, la première chose qui me vient à l'esprit est le « Wu » (午), l'une des douze Branches terrestres de la culture traditionnelle chinoise. Dans le zodiaque chinois, « Wu » correspond précisément au cheval. En Chine, dès l'enfance, nous apprenons par cœur cette petite formule qui associe les douze Branches terrestres aux animaux du zodiaque : « … Chen, le Dragon ; Si, le Serpent ; Wu, le Cheval ; Wei, la Chèvre… »

Dans la pensée chinoise des Cinq Éléments, le « Cheval-Wu » (午马) est également associé à l'élément Feu. Selon l'ancien système chinois du cycle sexagésimal, fondé sur les Troncs célestes et les Branches terrestres, l'année 2026 est l'année Bing-Wu (丙午), l'année du Cheval. « Bing » (丙), parmi les dix Troncs célestes, correspond au « Feu Yang ». On peut donc dire que 2026 est une année du « Cheval de Feu ». Et le feu, c'est l'énergie !

Le cheval m'évoque aussi immédiatement la vitesse : sous un ciel bleu traversé de nuages blancs, dans l'immensité d'une prairie, j'imagine un groupe de chevaux noirs, puissants et vigoureux, galopant librement. C'est pour moi l'image d'une existence vécue dans la liberté, l'élan et sans entraves.

L'énergie ne cesse de circuler, et la matière ne cesse de se renouveler et de donner naissance à la vie.`,
            en: "When it comes to the horse, the first thing I think of is « wu » (午), the seventh of the twelve earthly branches in traditional Chinese culture—in the zodiac, « wu » refers precisely to the horse. As children we all learned the mnemonic for the signs: « … chen dragon, si snake, wu horse, wei goat… »! In the five elements, « wu horse » also stands for fire; according to the ancient sexagenary cycle, 2026 is the bingwu Year of the Horse—« bing », among the ten heavenly stems, is « yang fire », so this year could be called the « fire horse year »: fire is energy! The horse also brings to mind speed: under blue sky and white clouds, on the vast grassland, a herd of dark, sturdy steeds galloping—like a life lived freely and expansively. Energy flows without end; matter renews itself endlessly!",
          },
        },
      ],
    },
    willyToSuHong: {
      questionFrom: willyPortraitAvatar,
      question: {
        zh: "（Willy 向苏泓提问 · 待发布）",
        fr: "(Question de Willy à Su Hong · à venir)",
        en: "(Question from Willy to Su Hong · coming soon)",
      },
      answerFrom: suHongPortraitAvatar,
    },
    suHongToWilly: {
      questionFrom: suHongPortraitAvatar,
      question: {
        zh: "（苏泓向 Willy 提问 · 待发布）",
        fr: "(Question de Su Hong à Willy · à venir)",
        en: "(Question from Su Hong to Willy · coming soon)",
      },
      answerFrom: willyPortraitAvatar,
    },
    observerQuestions: [
      {
        author: "Mélanie Gérin",
        questionFrom: melanieGerinAvatar,
        question: {
          zh: "（观察者提问 · 待发布）",
          fr: "(Question de l'observateur · à venir)",
          en: "(Observer question · coming soon)",
        },
      },
    ],
    publicParticipation: {
      open: true,
      note: {
        zh: "欢迎在此留言，参与这一期对话。",
        fr: "Laissez un message ici pour participer à cette conversation.",
        en: "Leave a message here to join this conversation.",
      },
    },
    artists: ["willy-le-nalbaut", "su-hong"],
    featuredWorks: [
      {
        artistSlug: "willy-le-nalbaut",
        artworkId: "3",
        displayAspect: [1024, 659],
      },
      {
        artistSlug: "su-hong",
        artworkId: "1",
        image: "/artists/su-hong/works/ma-gui-dialogue.jpg",
        displayAspect: [853, 1024],
      },
    ],
    isCurrent: true,
    status: "current",
  },
];

export function getCurrentEpisode(): DialogueEpisode {
  const current = episodes.find((e) => e.isCurrent);
  if (!current) {
    throw new Error("No current dialogue episode configured.");
  }
  return current;
}

export function getEpisodeBySlug(slug: string): DialogueEpisode | undefined {
  return episodes.find((e) => e.slug === slug);
}

export function getAllEpisodes(): DialogueEpisode[] {
  return [...episodes].sort((a, b) => a.month.localeCompare(b.month));
}

export function getEpisodesByYear(): { year: string; episodes: DialogueEpisode[] }[] {
  const byYear = new Map<string, DialogueEpisode[]>();

  for (const episode of getAllEpisodes()) {
    const year = episode.month.slice(0, 4);
    const list = byYear.get(year) ?? [];
    list.push(episode);
    byYear.set(year, list);
  }

  return [...byYear.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, yearEpisodes]) => ({ year, episodes: yearEpisodes }));
}

export function getUpcomingEpisodes(limit?: number): DialogueEpisode[] {
  const upcoming = getAllEpisodes().filter(
    (episode) => episode.status === "upcoming" || (!episode.isCurrent && !episode.status),
  );
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getCurrentDialoguePath(): string {
  return `/dialogue/${getCurrentEpisode().slug}`;
}

export function formatEpisodeMonth(month: string, locale: Locale): string {
  const [year, monthNum] = month.split("-");
  if (locale === "zh") {
    return `${year}年${Number(monthNum)}月`;
  }
  if (locale === "en") {
    return new Date(`${month}-01`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  }
  return new Date(`${month}-01`).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
}
