import type { LocalizedText } from "@/app/artists/[slug]/data";

export type ArtistPricePoint = {
  year: number;
  value: LocalizedText;
  amount: number;
  note?: LocalizedText;
};

const WILLY_PRICE_HISTORY: ArtistPricePoint[] = [
  {
    year: 2022,
    amount: 3200,
    value: { zh: "€ 3 200", fr: "3 200 €", en: "€3,200" },
    note: {
      zh: "木板油画 · 市场参考中位价",
      fr: "Huile sur bois · prix médian de référence",
      en: "Oil on wood panel · reference median price",
    },
  },
  {
    year: 2023,
    amount: 3800,
    value: { zh: "€ 3 800", fr: "3 800 €", en: "€3,800" },
    note: {
      zh: "木板油画 · 市场参考中位价",
      fr: "Huile sur bois · prix médian de référence",
      en: "Oil on wood panel · reference median price",
    },
  },
  {
    year: 2024,
    amount: 4500,
    value: { zh: "€ 4 500", fr: "4 500 €", en: "€4,500" },
    note: {
      zh: "木板 / 画布 · 市场参考中位价",
      fr: "Bois / toile · prix médian de référence",
      en: "Wood panel / canvas · reference median price",
    },
  },
  {
    year: 2025,
    amount: 5200,
    value: { zh: "€ 5 200", fr: "5 200 €", en: "€5,200" },
    note: {
      zh: "木板油画 · 市场参考中位价",
      fr: "Huile sur bois · prix médian de référence",
      en: "Oil on wood panel · reference median price",
    },
  },
  {
    year: 2026,
    amount: 5800,
    value: { zh: "€ 5 800", fr: "5 800 €", en: "€5,800" },
    note: {
      zh: "木板油画 · 市场参考中位价",
      fr: "Huile sur bois · prix médian de référence",
      en: "Oil on wood panel · reference median price",
    },
  },
];

const SU_HONG_PRICE_HISTORY: ArtistPricePoint[] = [
  {
    year: 2022,
    amount: 68000,
    value: { zh: "¥ 68 000", fr: "68 000 ¥", en: "¥68,000" },
    note: {
      zh: "纸上作品 · 市场参考中位价",
      fr: "Œuvre sur papier · prix médian de référence",
      en: "Work on paper · reference median price",
    },
  },
  {
    year: 2023,
    amount: 82000,
    value: { zh: "¥ 82 000", fr: "82 000 ¥", en: "¥82,000" },
    note: {
      zh: "纸上作品 · 市场参考中位价",
      fr: "Œuvre sur papier · prix médian de référence",
      en: "Work on paper · reference median price",
    },
  },
  {
    year: 2024,
    amount: 96000,
    value: { zh: "¥ 96 000", fr: "96 000 ¥", en: "¥96,000" },
    note: {
      zh: "纸上 / 丙烯 · 市场参考中位价",
      fr: "Papier / acrylique · prix médian de référence",
      en: "Paper / acrylic · reference median price",
    },
  },
  {
    year: 2025,
    amount: 118000,
    value: { zh: "¥ 118 000", fr: "118 000 ¥", en: "¥118,000" },
    note: {
      zh: "布面丙烯 · 市场参考中位价",
      fr: "Acrylique sur toile · prix médian de référence",
      en: "Acrylic on canvas · reference median price",
    },
  },
  {
    year: 2026,
    amount: 135000,
    value: { zh: "¥ 135 000", fr: "135 000 ¥", en: "¥135,000" },
    note: {
      zh: "布面丙烯 · 市场参考中位价",
      fr: "Acrylique sur toile · prix médian de référence",
      en: "Acrylic on canvas · reference median price",
    },
  },
];

export const ARTIST_PRICE_HISTORY: Record<string, ArtistPricePoint[]> = {
  "willy-le-nalbaut": WILLY_PRICE_HISTORY,
  "su-hong": SU_HONG_PRICE_HISTORY,
};

export function getArtistPriceHistory(artistSlug: string) {
  return ARTIST_PRICE_HISTORY[artistSlug] ?? [];
}
