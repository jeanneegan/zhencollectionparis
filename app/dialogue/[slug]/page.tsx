import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug } from "@/app/artists/[slug]/data";
import { getEditionShopUrlForArtwork } from "@/app/edition/data";
import { getArtworkPassport } from "@/app/lib/artwork-passport";
import { listDialogueMessagesForEpisode } from "@/app/lib/dialogue-messages-store";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { getDialogueShareImage } from "@/app/lib/page-share-image";
import { getEpisodeBySlug } from "../data";
import {
  DialogueView,
  type CollectionArtistRow,
  type SelectedWork,
} from "./dialogue-view";

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

  const featuredWorkMeta = new Map(
    episode.featuredWorks.map((entry) => [
      `${entry.artistSlug}:${entry.artworkId}`,
      entry,
    ]),
  );

  const selectedWorks: SelectedWork[] = episode.featuredWorks
    .map(({ artistSlug, artworkId, image, displayAspect, description: featuredDescription }) => {
      const artist = getArtistBySlug(artistSlug);
      const artwork = artist?.artworks.find((item) => item.id === artworkId);
      if (!artist || !artwork) {
        return null;
      }

      const artworkImage = image ?? artwork.image;
      if (!artworkImage) {
        return null;
      }

      const aspectMatch = artwork.dimensions.match(
        /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)/,
      );
      const aspect: [number, number] = displayAspect
        ? displayAspect
        : artwork.imageAspect
          ? artwork.imageAspect
          : aspectMatch
            ? [Number(aspectMatch[1]), Number(aspectMatch[2])]
            : [4, 3];

      const passport = getArtworkPassport(artistSlug, artworkId);
      const href = passport
        ? `/oeuvres/${artistSlug}/${artworkId}`
        : `/artists/${artistSlug}`;

      const description =
        featuredDescription ?? passport?.description ?? artwork.description;

      return {
        artistSlug,
        artistName:
          artistSlug === willySlug ? "Willy Le Nalbaut" : "苏泓 Su Hong",
        href,
        artwork: {
          title: artwork.title,
          medium: artwork.medium,
          year: artwork.year,
          image: artworkImage,
          ...(description ? { description } : {}),
        },
        aspect,
      } satisfies SelectedWork;
    })
    .filter((item): item is SelectedWork => item !== null);

  const collectionArtistRows: CollectionArtistRow[] =
    episode.collectionSupport?.artists
      .map((entry) => {
        const artist = getArtistBySlug(entry.artistSlug);
        const artwork = artist?.artworks.find((item) => item.id === entry.workId);
        if (!artist || !artwork) {
          return null;
        }

        const featuredEntry = featuredWorkMeta.get(
          `${entry.artistSlug}:${entry.workId}`,
        );
        const artworkImage = featuredEntry?.image ?? artwork.image;
        if (!artworkImage) {
          return null;
        }

        const aspectMatch = artwork.dimensions.match(
          /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)/,
        );
        const aspect: [number, number] = featuredEntry?.displayAspect
          ? featuredEntry.displayAspect
          : artwork.imageAspect
            ? artwork.imageAspect
            : aspectMatch
              ? [Number(aspectMatch[1]), Number(aspectMatch[2])]
              : [4, 3];

        const passport = getArtworkPassport(entry.artistSlug, entry.workId);
        const originalHref = passport
          ? `/oeuvres/${entry.artistSlug}/${entry.workId}`
          : `/artists/${entry.artistSlug}`;
        const editionHref =
          getEditionShopUrlForArtwork(entry.artistSlug, entry.workId) ??
          "/editions";

        return {
          artistName:
            entry.artistSlug === willySlug
              ? "Willy Le Nalbaut"
              : "苏泓 Su Hong",
          artworkTitle: artwork.title,
          image: artworkImage,
          aspect,
          originalHref,
          editionHref,
          editionProductName: entry.editionProductName,
          ...(entry.editionPriceEur != null
            ? { editionPriceEur: entry.editionPriceEur }
            : {}),
        } satisfies CollectionArtistRow;
      })
      .filter((item): item is CollectionArtistRow => item !== null) ?? [];

  const publicMessages = await listDialogueMessagesForEpisode(episode.slug);

  return (
    <DialogueView
      episode={episode}
      selectedWorks={selectedWorks}
      collectionArtistRows={collectionArtistRows}
      publicMessages={publicMessages}
    />
  );
}
