import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug } from "@/app/artists/[slug]/data";
import { getArtworkPassport } from "@/app/lib/artwork-passport";
import { listDialogueMessagesForEpisode } from "@/app/lib/dialogue-messages-store";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { getDialogueShareImage } from "@/app/lib/page-share-image";
import { getEpisodeBySlug } from "../data";
import { DialogueView, type FeaturedWork } from "./dialogue-view";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    return createPageMetadata({ title: "Conversation · Zhen Collection Paris" });
  }

  const shareImage = getDialogueShareImage(episode);

  return createPageMetadata({
    title: `${episode.title.fr} · Zhen Collection Paris`,
    description: episode.sharedQuestion.question.fr,
    images: shareImage ? [shareImage] : undefined,
  });
}

export default async function DialoguePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  const [willySlug, suHongSlug] = episode.artists;

  if (!getArtistBySlug(willySlug) || !getArtistBySlug(suHongSlug)) {
    notFound();
  }

  const featured = episode.featuredWorks
    .map(({ artistSlug, artworkId, image, displayAspect, description: featuredDescription }) => {
      const artist = getArtistBySlug(artistSlug);
      const artwork = artist?.artworks.find((a) => a.id === artworkId);
      if (!artist || !artwork) return null;

      const artworkImage = image ?? artwork.image;
      if (!artworkImage) return null;

      const aspectMatch = artwork.dimensions.match(
        /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)/,
      );
      const aspect: [number, number] = displayAspect
        ? displayAspect
        : aspectMatch
          ? [Number(aspectMatch[1]), Number(aspectMatch[2])]
          : [4, 3];

      const passport = getArtworkPassport(artistSlug, artworkId);
      const description =
        featuredDescription ?? passport?.description ?? artwork.description;

      return {
        artistSlug: artist.slug,
        artistName:
          artistSlug === willySlug ? "Willy Le Nalbaut" : "苏泓 Su Hong",
        artwork: {
          id: artwork.id,
          title: artwork.title,
          medium: artwork.medium,
          year: artwork.year,
          image: artworkImage,
          ...(description ? { description } : {}),
        },
        aspect,
      } satisfies FeaturedWork;
    })
    .filter((item): item is FeaturedWork => item !== null);

  const publicMessages = await listDialogueMessagesForEpisode(episode.slug);

  return (
    <DialogueView
      episode={episode}
      featured={featured}
      publicMessages={publicMessages}
    />
  );
}
