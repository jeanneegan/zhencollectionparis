export type LocalizedText = { zh: string; fr: string };

export type DialogueAvatar = {
  type: "portrait" | "brand";
  src?: string;
  alt: string;
  label?: string;
};

export type DialogueExchange = {
  question: LocalizedText;
  questionFrom?: DialogueAvatar;
  answer?: LocalizedText;
  answerFrom?: DialogueAvatar;
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
    displayAspect?: [number, number];
  }[];
  isCurrent: boolean;
};

export const episodes: DialogueEpisode[] = [
  {
    slug: "le-cheval",
    month: "2026-09",
    episode: 1,
    title: { zh: "马", fr: "Le Cheval" },
    sharedQuestion: {
      questionFrom: {
        type: "brand",
        alt: "Zhen Collection Paris · 巴黎臻藏",
        label: "巴黎臻藏",
      },
      question: {
        zh: "今年是马年。你们都画过马。马对你们来说意味着什么？为什么？",
        fr: "Cette année est l'année du Cheval dans le calendrier chinois. Vous avez tous les deux représenté des chevaux dans votre travail. Que représente le cheval pour vous, et pourquoi ?",
      },
    },
    willyToSuHong: {
      questionFrom: {
        type: "portrait",
        src: "/artists/willy-le-nalbaut/portrait.jpg",
        alt: "Willy Le Nalbaut",
        label: "Willy Le Nalbaut",
      },
      question: {
        zh: "（Willy 向苏泓提问 · 待发布）",
        fr: "(Question de Willy à Su Hong · à venir)",
      },
      answerFrom: {
        type: "portrait",
        src: "/artists/su-hong/portrait.png",
        alt: "苏泓 Su Hong",
        label: "苏泓 Su Hong",
      },
    },
    suHongToWilly: {
      questionFrom: {
        type: "portrait",
        src: "/artists/su-hong/portrait.png",
        alt: "苏泓 Su Hong",
        label: "苏泓 Su Hong",
      },
      question: {
        zh: "（苏泓向 Willy 提问 · 待发布）",
        fr: "(Question de Su Hong à Willy · à venir)",
      },
      answerFrom: {
        type: "portrait",
        src: "/artists/willy-le-nalbaut/portrait.jpg",
        alt: "Willy Le Nalbaut",
        label: "Willy Le Nalbaut",
      },
    },
    observerQuestions: [
      {
        author: "Zhen Collection Paris · 巴黎臻藏",
        questionFrom: {
          type: "brand",
          alt: "Zhen Collection Paris · 巴黎臻藏",
          label: "观察者 · Observateur",
        },
        question: {
          zh: "（观察者提问 · 待发布）",
          fr: "(Question de l'observateur · à venir)",
        },
      },
    ],
    publicParticipation: {
      open: false,
      note: {
        zh: "公众开放提问即将开启，欢迎后续参与。",
        fr: "Les questions ouvertes du public seront bientôt disponibles.",
      },
    },
    artists: ["willy-le-nalbaut", "su-hong"],
    featuredWorks: [
      {
        artistSlug: "willy-le-nalbaut",
        artworkId: "3",
        displayAspect: [1024, 659],
      },
      { artistSlug: "su-hong", artworkId: "6" },
    ],
    isCurrent: true,
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

export function getCurrentDialoguePath(): string {
  return `/dialogue/${getCurrentEpisode().slug}`;
}

export function formatEpisodeMonth(month: string, locale: "zh" | "fr"): string {
  const [year, monthNum] = month.split("-");
  if (locale === "zh") {
    return `${year}年${Number(monthNum)}月`;
  }
  return new Date(`${month}-01`).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
}
