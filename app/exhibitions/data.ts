import type { LocalizedText } from "@/app/artists/[slug]/data";

export type Exhibition = {
  slug: string;
  title: LocalizedText;
  artistSlug: string;
  artistDisplay: LocalizedText;
  workIds: string[];
  intro: LocalizedText;
  year: number;
};

const exhibitions: Record<string, Exhibition> = {
  "peregrinations-girouettes-willy": {
    slug: "peregrinations-girouettes-willy",
    title: {
      fr: "Pérégrinations girouettes",
      zh: "Pérégrinations girouettes",
      en: "Pérégrinations girouettes",
    },
    artistSlug: "willy-le-nalbaut",
    artistDisplay: {
      fr: "Willy Le Nalbaut",
      zh: "Willy Le Nalbaut",
      en: "Willy Le Nalbaut",
    },
    workIds: ["14", "13", "15", "3", "7"],
    year: 2025,
    intro: {
      fr: "Une sélection d'œuvres de Willy Le Nalbaut — peintures où le quotidien bascule, où animals, rues bretonnes et objets improbables tournent comme des girouettes.",
      zh: "威利·勒纳尔博作品选 — 日常在此倾斜，布列塔尼的街道、动物与荒诞物件如风向标般旋转。",
      en: "A selection of works by Willy Le Nalbaut — paintings where daily life tilts, and Breton streets, animals, and improbable objects turn like weathervanes.",
    },
  },
};

export function getExhibitionBySlug(slug: string): Exhibition | null {
  return exhibitions[slug] ?? null;
}

export function getAllExhibitionSlugs(): string[] {
  return Object.keys(exhibitions);
}
