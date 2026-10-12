import type { LocalizedText } from "@/app/artists/[slug]/data";
import { getArtistBySlug } from "@/app/artists/[slug]/data";
import {
  getAllEditionIds,
  getEditionById,
  getEditionShopUrlForArtwork,
} from "@/app/edition/data";

export type ArtistSiteShopItem = {
  workId: string;
  title: LocalizedText;
  year: number;
  medium: LocalizedText;
  dimensions: string;
  image: string;
  purchaseUrl: string;
  priceEur?: number;
  shopCopies?: number;
};

/** Shopify / edition listings confirmed in `app/edition/data.ts` only. */
export function getArtistSiteShopItems(artistSlug: string): ArtistSiteShopItem[] {
  const artist = getArtistBySlug(artistSlug);
  if (!artist) {
    return [];
  }

  const items: ArtistSiteShopItem[] = [];

  for (const artwork of artist.artworks) {
    const purchaseUrl = getEditionShopUrlForArtwork(artistSlug, artwork.id);
    if (!purchaseUrl || !artwork.image) {
      continue;
    }

    let priceEur: number | undefined;
    let shopCopies: number | undefined;

    for (const editionId of getAllEditionIds()) {
      const edition = getEditionById(editionId);
      if (
        edition?.artistSlug === artistSlug &&
        edition.workId === artwork.id
      ) {
        priceEur = edition.shopPriceEur;
        shopCopies = edition.shopCopies;
        break;
      }
    }

    items.push({
      workId: artwork.id,
      title: artwork.title,
      year: artwork.year,
      medium: artwork.medium,
      dimensions: artwork.dimensions,
      image: artwork.image,
      purchaseUrl,
      priceEur,
      shopCopies,
    });
  }

  return items;
}
