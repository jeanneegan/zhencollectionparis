import type { Metadata } from "next";
import { getAllArtists } from "@/app/artists/[slug]/data";
import { CommentateurView } from "../commentateur-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title: "Commentaire en ligne · 评论家在线评论 · Zhen Collection Paris",
  description:
    "Espace commentateur pour publier des commentaires professionnels sur les œuvres. · 评论家在线评论页面。",
});

export default async function CommentairePage() {
  const member = await requireMember();
  const works = getAllArtists().flatMap((artist) =>
    artist.artworks
      .filter((work) => work.image)
      .map((work) => ({
        id: `${artist.slug}-${work.id}`,
        artistSlug: artist.slug,
        artistName: artist.name,
        title: work.title,
        year: work.year,
        medium: work.medium,
        dimensions: work.dimensions,
        image: work.image!,
      })),
  );

  return <CommentateurView works={works} member={member} />;
}
