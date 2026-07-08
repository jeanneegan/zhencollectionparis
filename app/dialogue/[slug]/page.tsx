import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { createPageMetadata, shareImageFromPath } from "@/app/lib/site-metadata";
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

  const featured = episode.featuredWorks[0];
  const artist = featured ? getArtistBySlug(featured.artistSlug) : null;
  const artwork = artist?.artworks.find((work) => work.id === featured?.artworkId);
  const image = featured?.image ?? artwork?.image;

  return createPageMetadata({
    title: `${episode.title.fr} · Zhen Collection Paris`,
    description: t(episode.sharedQuestion.question, "fr"),
    images: image
      ? [shareImageFromPath(image, `${episode.title.fr} · ${episode.title.zh}`)]
      : undefined,
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

  const featured: FeaturedWork[] = episode.featuredWorks
    .map(({ artistSlug, artworkId, image, displayAspect }) => {
      const artist = getArtistBySlug(artistSlug);
      const artwork = artist?.artworks.find((a) => a.id === artworkId);
      if (!artist || !artwork) return null;

      const aspectMatch = artwork.dimensions.match(
        /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)/,
      );
      const aspect: [number, number] = displayAspect
        ? displayAspect
        : aspectMatch
          ? [Number(aspectMatch[1]), Number(aspectMatch[2])]
          : [4, 3];

      return {
        artistSlug: artist.slug,
        artistName:
          artistSlug === willySlug ? "Willy Le Nalbaut" : "苏泓 Su Hong",
        artwork: {
          id: artwork.id,
          title: artwork.title,
          medium: artwork.medium,
          year: artwork.year,
          image: image ?? artwork.image,
        },
        aspect,
      };
    })
    .filter((item): item is FeaturedWork => item !== null);

  return (
    <DialogueView episode={episode} featured={featured} />
  );
}
