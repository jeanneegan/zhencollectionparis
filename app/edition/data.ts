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
