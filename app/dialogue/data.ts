import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type { LocalizedText };

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
        en: "(Question from Willy to Su Hong · coming soon)",
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
        en: "(Question from Su Hong to Willy · coming soon)",
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
          en: "(Observer question · coming soon)",
        },
      },
    ],
    publicParticipation: {
      open: true,
      note: {
        zh: "欢迎在此留言，参与这一期对话。",
        fr: "Laissez un message ici pour participer à ce dialogue.",
        en: "Leave a message here to join this dialogue.",
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
    status: "current",
  },
  {
    slug: "l-automne",
    month: "2026-10",
    episode: 2,
    title: { zh: "秋", fr: "L'Automne", en: "Autumn" },
    sharedQuestion: {
      questionFrom: {
        type: "brand",
        alt: "Zhen Collection Paris · 巴黎臻藏",
        label: "巴黎臻藏",
      },
      question: {
        zh: "秋天对你们的创作意味着什么？季节、光线或记忆，如何在作品中显现？",
        fr: "Que représente l'automne pour votre création ? Comment la saison, la lumière ou la mémoire se manifestent-elles dans votre travail ?",
        en: "What does autumn mean for your practice? How do season, light, or memory appear in your work?",
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
        zh: "（Willy 向苏泓提问 · 2026年10月 · 待发布）",
        fr: "(Question de Willy à Su Hong · octobre 2026 · à venir)",
        en: "(Question from Willy to Su Hong · October 2026 · coming soon)",
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
        zh: "（苏泓向 Willy 提问 · 2026年10月 · 待发布）",
        fr: "(Question de Su Hong à Willy · octobre 2026 · à venir)",
        en: "(Question from Su Hong to Willy · October 2026 · coming soon)",
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
          zh: "（观察者提问 · 2026年10月 · 待发布）",
          fr: "(Question de l'observateur · octobre 2026 · à venir)",
          en: "(Observer question · October 2026 · coming soon)",
        },
      },
    ],
    publicParticipation: {
      open: false,
      note: {
        zh: "本期对话将于 2026 年 10 月开放公众留言。",
        fr: "Les messages du public ouvriront pour cet épisode en octobre 2026.",
        en: "Public messages for this episode will open in October 2026.",
      },
    },
    artists: ["willy-le-nalbaut", "su-hong"],
    featuredWorks: [
      { artistSlug: "willy-le-nalbaut", artworkId: "1" },
      { artistSlug: "su-hong", artworkId: "1" },
    ],
    isCurrent: false,
    status: "upcoming",
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
