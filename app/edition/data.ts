import type { LocalizedText } from "@/app/artists/[slug]/data";

export type Edition = {
  id: string;
  title: LocalizedText;
  artistSlug: string;
  workId: string;
  year: number;
  copies: number;
  intro: LocalizedText;
};

const editions: Record<string, Edition> = {
  "1": {
    id: "1",
    title: {
      zh: "出版 1",
      fr: "Édition 1",
      en: "Edition 1",
    },
    artistSlug: "elaine-erlan-wang",
    workId: "1",
    year: 2026,
    copies: 6,
    intro: {
      zh: "巴黎臻藏出版计划第一件作品——Elaine Erlan Wang（王尔兰）。",
      fr: "Première œuvre de la collection éditoriale Zhen Collection Paris — Elaine Erlan Wang (王尔兰).",
      en: "The first work in the Zhen Collection Paris editions programme — Elaine Erlan Wang (王尔兰).",
    },
  },
};

export function getEditionById(id: string): Edition | null {
  return editions[id] ?? null;
}

export function getAllEditionIds(): string[] {
  return Object.keys(editions);
}

export type EditionCopyRecord = {
  copyNumber: number;
  passportNote: LocalizedText;
  status: LocalizedText;
  collectorNote: LocalizedText;
  provenance: LocalizedText[];
};

const editionCopies: Record<string, EditionCopyRecord[]> = {
  "1": [
    {
      copyNumber: 1,
      passportNote: {
        zh: "本作品护照对应巴黎臻藏出版计划 Édition 1 之第 1 号（共 6 版），归档该版次实例及其专业阅读记录。",
        fr: "Ce passeport correspond à l'exemplaire n° 1 sur 6 de l'Édition 1 — archive de cette pièce du tirage et de sa lecture professionnelle.",
        en: "This passport corresponds to exemplar no. 1 of 6 in Edition 1—archiving this edition instance and its professional reading.",
      },
      status: {
        zh: "巴黎臻藏出版 · 第 1/6 号",
        fr: "Édition ZCP · exemplaire 1/6",
        en: "ZCP edition · exemplar 1/6",
      },
      collectorNote: {
        zh: "第 1 号版次由巴黎臻藏建档发行；藏家信息随入藏更新。",
        fr: "L'exemplaire n° 1 est archivé et émis par ZCP ; les informations collectionneur seront mises à jour à l'entrée en collection.",
        en: "Exemplar no. 1 is archived and issued by ZCP; collector information will update upon acquisition.",
      },
      provenance: [
        {
          zh: "2026 · 巴黎臻藏出版计划 · Édition 1 · 第 1/6 号",
          fr: "2026 · Collection éditoriale ZCP · Édition 1 · exemplaire 1/6",
          en: "2026 · ZCP editions programme · Edition 1 · exemplar 1/6",
        },
        {
          zh: "2026 · 艺术家工作室 · 巴黎",
          fr: "2026 · Atelier de l'artiste · Paris",
          en: "2026 · Artist's studio · Paris",
        },
      ],
    },
  ],
};

export function getEditionCopyRecord(
  editionId: string,
  copyNumber: number,
): EditionCopyRecord | null {
  return (
    editionCopies[editionId]?.find((item) => item.copyNumber === copyNumber) ??
    null
  );
}

export function listEditionCopyRoutes(): { editionId: string; copyNumber: number }[] {
  return Object.entries(editionCopies).flatMap(([editionId, copies]) =>
    copies.map((copy) => ({
      editionId,
      copyNumber: copy.copyNumber,
    })),
  );
}
