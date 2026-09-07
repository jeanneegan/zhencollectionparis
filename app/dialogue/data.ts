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
    description?: LocalizedText;
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
            en: `When I think of the horse, the first thing that comes to mind is "Wu" (午), one of the Twelve Earthly Branches in traditional Chinese culture. In the Chinese zodiac, "Wu" corresponds to the horse. In China, from childhood, we learn by heart a little rhyme that connects the Twelve Earthly Branches with the zodiac animals: "… Chen, the Dragon; Si, the Snake; Wu, the Horse; Wei, the Goat…"

In the Chinese system of the Five Elements, the "Wu Horse" (午马) is also associated with the element of Fire. According to the traditional Chinese sexagenary cycle, based on the Heavenly Stems and Earthly Branches, 2026 is the year of Bing-Wu (丙午), the Year of the Horse. "Bing" (丙), one of the Ten Heavenly Stems, represents Yang Fire. So 2026 can also be described as a "Fire Horse" year. And fire is energy!

The horse also immediately makes me think of speed. Under a blue sky and white clouds, across a vast grassland, I imagine a herd of strong, black horses galloping freely. To me, this is an image of living one's life freely and without restraint, full of vitality and momentum.

Energy never ceases to flow, and matter continuously renews itself, giving rise to life.`,
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
        description: {
          zh: `此系列是复古与现代的融合，谐音与寓意的碰撞。灵感来源于中国传统文化在发音上的谐音。

在中国文化中，马象征着自由、奔放、力量与成功；柜作为家具中常见的物品，通常与财富、储存和稳定联系在一起。将「马有贵」这一谐音，既体现了传统文化的智慧，又赋予了作品独特的寓意。线条简洁流畅，展现出一种现代感。在构思过程中，将马的动物形象与各种复古柜子的结构融合在一起。

「柜马贵」或者「马富贵」——「马」与「柜子」在视觉上形成了强烈的对比和冲击，这种对「马」的寓意以及充满生机与希望的柜子的结合，也寓意着财富与自由、力量与稳定的完美结合。

同时，作品也传达出一种积极向上的精神。马的奔放与活力象征着人们在追求目标时的勇气和决心，而柜子的稳定则提醒人们在追求财富和成功的过程中，要保持内心的平静和稳定。这种精神传达使作品不仅具有视觉上的美感，更具有情感上的共鸣。`,
          fr: `Cette série fusionne le vintage et le contemporain — collision d'homophonies et de sens. L'inspiration vient des jeux de mots fondés sur la prononciation dans la culture chinoise traditionnelle.

En Chine, le cheval (马) symbolise liberté, fougue, force et réussite ; l'armoire (柜), meuble familier, évoque richesse, réserve et stabilité. L'homophonie « 马有贵 » (mǎ yǒu guì) porte la sagesse traditionnelle tout en conférant à l'œuvre une signification propre. Les lignes, fluides et épurées, affirment une modernité : au fil de la conception, la figure animale du cheval se fond avec diverses structures d'armoires anciennes.

« 柜马贵 » ou « 马富贵 » — le cheval et l'armoire produisent un contraste visuel fort ; cette alliance de sens — vitalité équestre et cabinet plein d'espoir — suggère l'union de richesse et liberté, de force et stabilité.

L'œuvre transmet aussi un esprit positif : la fougue du cheval incarne le courage et la détermination dans la quête d'un objectif ; la stabilité de l'armoire rappelle de garder le calme intérieur en poursuivant richesse et succès. Au-delà de la beauté visuelle, la série cherche une résonance émotionnelle.`,
          en: `This series merges the vintage and the contemporary—a collision of homophony and meaning. Its inspiration comes from wordplay rooted in pronunciation within traditional Chinese culture.

In Chinese culture, the horse (马) symbolizes freedom, vigor, strength, and success; the cabinet (柜), a familiar piece of furniture, is linked to wealth, storage, and stability. The homophonic phrase « 马有贵 » (mǎ yǒu guì) carries traditional wisdom while giving the work its distinct meaning. Lines stay fluid and concise, asserting a modern sensibility: through the process of conception, the animal figure of the horse merges with various structures of vintage cabinets.

« 柜马贵 » or « 马富贵 »—horse and cabinet create a sharp visual contrast; this pairing of meanings—equestrian vitality and a cabinet full of hope—suggests a union of wealth and freedom, strength and stability.

The work also conveys an upward spirit: the horse's exuberance stands for courage and resolve in pursuing one's goals; the cabinet's steadiness reminds us to keep inner calm while seeking wealth and success. Beyond visual beauty, the series seeks emotional resonance.`,
        },
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
