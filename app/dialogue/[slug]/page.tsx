import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug } from "@/app/artists/[slug]/data";
import { getEditionShopUrlForArtwork } from "@/app/edition/data";
import { getArtworkPassport } from "@/app/lib/artwork-passport";
import { listDialogueMessagesForEpisode } from "@/app/lib/dialogue-messages-store";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { getDialogueShareImage } from "@/app/lib/page-share-image";
import { getEpisodeBySlug } from "../data";
import { DialogueView, type CollectionProduct } from "./dialogue-view";

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

  const collectionProducts: CollectionProduct[] =
    episode.collectionSupport?.offers
      .map((offer) => {
        const artist = getArtistBySlug(offer.artistSlug);
        const artwork = artist?.artworks.find((item) => item.id === offer.workId);
        if (!artist || !artwork) {
          return null;
        }

        const featuredEntry = featuredWorkMeta.get(
          `${offer.artistSlug}:${offer.workId}`,
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

        const passport = getArtworkPassport(offer.artistSlug, offer.workId);
        let href = `/artists/${offer.artistSlug}`;
        if (offer.kind === "original") {
          href = passport
            ? `/oeuvres/${offer.artistSlug}/${offer.workId}`
            : `/artists/${offer.artistSlug}`;
        } else {
          href =
            getEditionShopUrlForArtwork(offer.artistSlug, offer.workId) ??
            "/editions";
        }

        return {
          cardTitle: offer.cardTitle,
          href,
          image: artworkImage,
          aspect,
          artworkTitle: artwork.title,
        } satisfies CollectionProduct;
      })
      .filter((item): item is CollectionProduct => item !== null) ?? [];

  const publicMessages = await listDialogueMessagesForEpisode(episode.slug);

  return (
    <DialogueView
      episode={episode}
      collectionProducts={collectionProducts}
      publicMessages={publicMessages}
    />
  );
}
