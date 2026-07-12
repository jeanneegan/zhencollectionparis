import type { LocalizedText } from "@/app/artists/[slug]/data";
import {
  getArtistBySlug,
  t,
  type ArtistProfile,
} from "@/app/artists/[slug]/data";
import { getArtistPriceHistory } from "@/app/lib/artist-price-history";
import {
  MOCK_COLLECTOR_HOLDINGS,
} from "@/app/lib/collector-collection";

const ZCP_INITIATOR: LocalizedText = {
  zh: "巴黎臻藏",
  fr: "Zhen Collection Paris",
  en: "Zhen Collection Paris",
};

export type ArtworkEvaluation = {
  date: string;
  author: LocalizedText;
  role: LocalizedText;
  quote: LocalizedText;
};

export type ArtworkExhibitionEntry = {
  year: number;
  title: LocalizedText;
  venue: string;
  city: LocalizedText;
};

export type ArtworkPassport = {
  artistSlug: string;
  workId: string;
  archiveId: string;
  artistName: LocalizedText;
  initiatedBy: LocalizedText;
  initiatedYear: number;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description?: LocalizedText;
  year: number;
  medium: LocalizedText;
  dimensions: string;
  image: string;
  imageAspect?: [number, number];
  views?: ArtistProfile["artworks"][number]["views"];
  viewsLayout?: ArtistProfile["artworks"][number]["viewsLayout"];
  series?: {
    title: LocalizedText;
    intro: LocalizedText;
    period?: string;
  };
  passportNote: LocalizedText;
  collectorNote: LocalizedText;
  collectorName?: LocalizedText;
  status: LocalizedText;
  provenance: LocalizedText[];
  referencePrice?: LocalizedText;
  priceHistoryNote?: LocalizedText;
  evaluations: ArtworkEvaluation[];
  exhibitionHistory: ArtworkExhibitionEntry[];
};

const defaultPassportNote: LocalizedText = {
  zh: "本作品护照由巴黎臻藏发起建立，为平台上受邀关注或入藏的代表作品提供可持续的线上档案，汇集元数据、专业评价与展览记录。",
  fr: "Ce passeport d'œuvre est initié par Zhen Collection Paris — une archive en ligne durable pour les œuvres représentatives suivies ou entrées en collection sur la plateforme, réunissant métadonnées, évaluations professionnelles et parcours d'exposition.",
  en: "This artwork passport is initiated by Zhen Collection Paris—a sustained online archive for representative works followed or held in collection on the platform, bringing together metadata, professional evaluations, and exhibition history.",
};

const defaultStatus: LocalizedText = {
  zh: "巴黎臻藏档案 · 开放专业阅读",
  fr: "Archive Zhen Collection Paris · lecture professionnelle ouverte",
  en: "Zhen Collection Paris archive · open for professional reading",
};

/** Optional enrichment for ZCP-initiated artwork passports. */
const passportEnrichment: Record<
  string,
  Partial<
    Pick<
      ArtworkPassport,
      | "initiatedYear"
      | "passportNote"
      | "status"
      | "provenance"
      | "referencePrice"
      | "priceHistoryNote"
      | "description"
      | "evaluations"
      | "exhibitionHistory"
    >
  >
> = {
  "willy-le-nalbaut-10": {
    initiatedYear: 2025,
    description: {
      zh: "水洼、鸟群与天空被压缩在同一浅景深平面里，日常场景因此带有一种缓慢发生的荒诞感。木板小尺幅并未削弱叙事密度——反而让观者的视线被迫在近距里停留。",
      fr: "Flaque, oiseaux et ciel sont comprimés sur un même plan à faible profondeur ; la scène quotidienne devient un absurdum qui se déroule lentement. Le petit format sur bois n'affaiblit pas la densité narrative — il retient le regard de près.",
      en: "Puddle, birds, and sky are compressed on the same shallow plane; an everyday scene becomes an absurdity unfolding slowly. The small wood-panel format does not weaken narrative density—it holds the gaze up close.",
    },
    referencePrice: {
      zh: "€ 8 500",
      fr: "8 500 €",
      en: "€8,500",
    },
    priceHistoryNote: {
      zh: "藏家入藏参考价 · 艺术家木板油画年度市场参考中位价见下文",
      fr: "Prix d'entrée en collection · voir ci-dessous le prix médian annuel de référence pour les huiles sur bois de l'artiste",
      en: "Collector acquisition reference · see below for the artist's annual reference median for oil on wood panel",
    },
    provenance: [
      {
        zh: "2025 · Pérégrinations girouettes 群展 · 巴黎",
        fr: "2025 · Exposition Pérégrinations girouettes · Paris",
        en: "2025 · Pérégrinations girouettes exhibition · Paris",
      },
      {
        zh: "2025 · 入藏林明远私人收藏 · 巴黎",
        fr: "2025 · Entrée dans la collection privée de Lin Mingyuan · Paris",
        en: "2025 · Acquired by Lin Mingyuan private collection · Paris",
      },
    ],
    exhibitionHistory: [
      {
        year: 2025,
        title: {
          zh: "Pérégrinations girouettes",
          fr: "Pérégrinations girouettes",
          en: "Pérégrinations girouettes",
        },
        venue: "Galerie H Studio",
        city: { zh: "巴黎", fr: "Paris", en: "Paris" },
      },
    ],
  },
  "willy-le-nalbaut-16": {
    initiatedYear: 2026,
    description: {
      zh: "镀金金属射线框托起一枚手绘表盘：下方是俯瞰的田亩格纹，上方漂浮着细茎花朵与雾气般的天空。既是可运转的钟表，也是威利将绘画嵌入日常物件的又一例证。",
      fr: "Un cadre de rayons en métal doré soutient un cadran peint à la main : en bas, champs vus en plongée ; en haut, fleurs sur tiges fines et ciel brumeux. Objet fonctionnel et nouvelle preuve que Willy fait entrer la peinture dans le quotidien.",
      en: "A gilt metal sunburst frame holds a hand-painted dial: gridded fields seen from above below, fine-stemmed flowers and a misty sky above. A working clock and another instance of Willy embedding painting in everyday objects.",
    },
    passportNote: {
      zh: "本作品护照由巴黎臻藏为威利《表》建立，归档这件可运转的彩绘钟表及其专业阅读记录。",
      fr: "Ce passeport d'œuvre est initié par Zhen Collection Paris pour « Horloge » de Willy — archive de cette horloge peinte fonctionnelle et de sa lecture professionnelle.",
      en: "This artwork passport is initiated by Zhen Collection Paris for Willy's « Clock »—archiving this functional painted timepiece and its professional reading.",
    },
    provenance: [
      {
        zh: "2026 · 入藏 Jeanneegan CUI 私人收藏 · 巴黎 · € 600",
        fr: "2026 · Entrée dans la collection privée de Jeanneegan CUI · Paris · 600 €",
        en: "2026 · Acquired by Jeanneegan CUI private collection · Paris · €600",
      },
      {
        zh: "2026 · 艺术家工作室",
        fr: "2026 · Atelier de l'artiste",
        en: "2026 · Artist's studio",
      },
    ],
    referencePrice: {
      zh: "€ 600",
      fr: "600 €",
      en: "€600",
    },
    exhibitionHistory: [],
  },
  "su-hong-1": {
    initiatedYear: 2025,
    description: {
      zh: "「马贵」系列首件：马与柜子在同一画面里形成谐音与寓意的双重结构。线条简洁，留白 generous，让传统符号以当代绘画语法重新出现。",
      fr: "Première pièce de la série « Ma Gui » : le cheval et l'armoire composent une double structure d'homophonie et de sens. Lignes épurées, larges réserves — les symboles traditionnels reviennent en grammaire picturale contemporaine.",
      en: "First piece in the « Ma Gui » series: horse and cabinet form a double structure of homophony and meaning. Clean lines and generous open space bring traditional symbols back through contemporary pictorial grammar.",
    },
    passportNote: {
      zh: "巴黎臻藏为苏泓「马贵」系列代表件建立本作品护照，持续归档专业阅读、评价与展览记录。",
      fr: "Zhen Collection Paris a initié ce passeport pour une pièce représentative de la série « Ma Gui » de Su Hong, afin d'en conserver une archive continue de lecture, d'évaluation et d'exposition.",
      en: "Zhen Collection Paris initiated this passport for a representative piece in Su Hong's « Ma Gui » series, to maintain a continuing archive of reading, evaluation, and exhibition history.",
    },
    evaluations: [
      {
        date: "2025-09-02",
        author: { zh: "林薇", fr: "Lin Wei", en: "Lin Wei" },
        role: { zh: "评论家", fr: "Critique d'art", en: "Art critic" },
        quote: {
          zh: "苏泓在速度与悬停之间找到了一种罕见的平衡：马鬼既像正在消失，又像刚刚出现。评论若只停留在图像学层面，会错过这种时间感。",
          fr: "Su Hong trouve un équilibre rare entre vitesse et suspension : « Ma Gui » semble à la fois sur le point de disparaître et d'apparaître. Une lecture purement iconographique manquerait cette temporalité.",
          en: "Su Hong finds a rare balance between speed and suspension: Ma Gui seems both about to vanish and to appear. A purely iconographic reading would miss this sense of time.",
        },
      },
    ],
  },
};

function passportKey(artistSlug: string, workId: string) {
  return `${artistSlug}-${workId}`;
}

function findArtwork(artistSlug: string, workId: string) {
  const artist = getArtistBySlug(artistSlug);
  return artist?.artworks.find((item) => item.id === workId) ?? null;
}

function findPassportHolding(artistSlug: string, workId: string) {
  const artwork = findArtwork(artistSlug, workId);
  if (!artwork) {
    return null;
  }

  return (
    MOCK_COLLECTOR_HOLDINGS.find(
      (holding) =>
        holding.passportInitiated &&
        holding.artistSlug === artistSlug &&
        (holding.image === artwork.image ||
          t(holding.title, "fr") === t(artwork.title, "fr")),
    ) ?? null
  );
}

export function hasArtworkPassport(artistSlug: string, workId: string): boolean {
  return findPassportHolding(artistSlug, workId) !== null;
}

function archiveIdFor(artistSlug: string, workId: string, year: number): string {
  const artistCode = artistSlug
    .split("-")
    .map((part) => part.slice(0, 1).toUpperCase())
    .join("");
  return `ZCP-${year}-${artistCode}-${workId}`;
}

function mergeEvaluations(
  holdingEvaluations: ArtworkEvaluation[] | undefined,
  overlayEvaluations: ArtworkEvaluation[] | undefined,
): ArtworkEvaluation[] {
  const seen = new Set<string>();
  const merged: ArtworkEvaluation[] = [];

  for (const evaluation of [...(overlayEvaluations ?? []), ...(holdingEvaluations ?? [])]) {
    const key = `${evaluation.date}-${t(evaluation.author, "fr")}`;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(evaluation);
  }

  return merged;
}

export function getArtworkPassportPath(artistSlug: string, workId: string): string {
  return `/oeuvres/${artistSlug}/${workId}`;
}

export function getArtworkPassportPathForImage(
  artistSlug: string,
  image: string,
): string | null {
  const artwork = getArtistBySlug(artistSlug)?.artworks.find((item) => item.image === image);
  if (!artwork || !hasArtworkPassport(artistSlug, artwork.id)) {
    return null;
  }

  return getArtworkPassportPath(artistSlug, artwork.id);
}

export function getArtworkPassport(
  artistSlug: string,
  workId: string,
): ArtworkPassport | null {
  const holding = findPassportHolding(artistSlug, workId);
  if (!holding) {
    return null;
  }

  const artist = getArtistBySlug(artistSlug);
  if (!artist) {
    return null;
  }

  const artwork = artist.artworks.find((item) => item.id === workId);
  if (!artwork) {
    return null;
  }

  const enrichmentKey = passportKey(artistSlug, workId);
  const enrichment = passportEnrichment[enrichmentKey];
  const series = artwork.seriesId
    ? artist.series?.find((item) => item.id === artwork.seriesId)
    : undefined;
  const priceHistory = getArtistPriceHistory(artistSlug);
  const latestPrice = priceHistory.at(-1);

  const exhibitionHistory =
    enrichment?.exhibitionHistory ??
    artist.exhibitions.slice(0, 3).map((entry) => ({
      year: entry.year,
      title: entry.title,
      venue: entry.venue,
      city: entry.city,
    }));

  return {
    artistSlug,
    workId,
    archiveId: archiveIdFor(artistSlug, workId, artwork.year),
    artistName: artist.name,
    initiatedBy: ZCP_INITIATOR,
    initiatedYear: enrichment?.initiatedYear ?? holding.acquiredYear,
    title: artwork.title,
    subtitle: artwork.subtitle,
    description: enrichment?.description ?? artwork.description,
    year: artwork.year,
    medium: artwork.medium,
    dimensions: artwork.dimensions,
    image: artwork.image,
    imageAspect: artwork.imageAspect,
    views: artwork.views,
    viewsLayout: artwork.viewsLayout,
    series: series
      ? {
          title: series.title,
          intro: series.intro,
          period: series.period,
        }
      : undefined,
    passportNote: enrichment?.passportNote ?? defaultPassportNote,
    collectorNote: holding.notes,
    collectorName: holding.collectorName,
    status: enrichment?.status ?? defaultStatus,
    provenance: enrichment?.provenance ?? [
      {
        zh: `${holding.acquiredYear} · ${t(holding.acquiredFrom, "zh")}`,
        fr: `${holding.acquiredYear} · ${t(holding.acquiredFrom, "fr")}`,
        en: `${holding.acquiredYear} · ${t(holding.acquiredFrom, "en")}`,
      },
    ],
    referencePrice: enrichment?.referencePrice ?? holding.price,
    priceHistoryNote: enrichment?.priceHistoryNote ?? latestPrice?.note,
    evaluations: mergeEvaluations(holding.evaluations, enrichment?.evaluations),
    exhibitionHistory,
  };
}

export function listArtworkPassportRoutes(): { artistSlug: string; workId: string }[] {
  return MOCK_COLLECTOR_HOLDINGS.flatMap((holding) => {
    if (!holding.passportInitiated) {
      return [];
    }

    const artist = getArtistBySlug(holding.artistSlug);
    const artwork = artist?.artworks.find(
      (item) =>
        item.image === holding.image || t(item.title, "fr") === t(holding.title, "fr"),
    );

    return artwork
      ? [{ artistSlug: holding.artistSlug, workId: artwork.id }]
      : [];
  });
}

export { t };
