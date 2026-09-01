import type { LocalizedText } from "@/app/artists/[slug]/data";

export type CuratorProfile = {
  slug: string;
  name: LocalizedText;
  practice: LocalizedText;
  tagline: LocalizedText;
  portrait?: string;
};

const curators: Record<string, CuratorProfile> = {};

export function getAllCurators(): CuratorProfile[] {
  return Object.values(curators);
}

export function getCuratorBySlug(slug: string): CuratorProfile | null {
  return curators[slug] ?? null;
}
