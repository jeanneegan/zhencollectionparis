import type { Metadata } from "next";
import { getAllArtists } from "@/app/artists/[slug]/data";
import { EvaluationOeuvresView } from "./evaluation-oeuvres-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "Évaluation des œuvres en ligne · 在线作品评估 · Zhen Collection Paris",
  description:
    "Pour les professionnels de l'art — évaluation en ligne des œuvres sur Zhen Collection Paris. · 供艺术专业人士进行在线作品评估。",
});

export default function EvaluationOeuvresPage() {
  const works = getAllArtists().flatMap((artist) =>
    artist.artworks.map((work) => ({
      id: `${artist.slug}-${work.id}`,
      artistSlug: artist.slug,
      artistName: artist.name,
      title: work.title,
      year: work.year,
      medium: work.medium,
      dimensions: work.dimensions,
      image: work.image,
    })),
  );

  return <EvaluationOeuvresView works={works} />;
}
