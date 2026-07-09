import type { Metadata } from "next";
import { getAllArtists } from "@/app/artists/[slug]/data";
import { EvaluationOeuvresView } from "./evaluation-oeuvres-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "Partager votre regard · 分享您的专业观点 · Zhen Collection Paris",
  description:
    "Pour les professionnels de l'art — partagez votre lecture professionnelle des œuvres. · 供艺术专业人士留下专业观点与判断。",
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
