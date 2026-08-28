import type { LocalizedText } from "@/app/artists/[slug]/data";

export type Festival = {
  id: string;
  title: LocalizedText;
  year: number;
  intro: LocalizedText;
  href?: string;
};

const festivals: Record<string, Festival> = {};

export function getFestivalById(id: string): Festival | null {
  return festivals[id] ?? null;
}

export function getAllFestivalIds(): string[] {
  return Object.keys(festivals);
}
