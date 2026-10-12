"use client";

import Image from "next/image";
import {
  formatArtworkTitleForItem,
  getArtistPassportArtworks,
  getArtworkDisplayLayout,
  t,
} from "@/app/artists/[slug]/data";
import { useArtistSite } from "@/app/artist-site/artist-site-context";
import {
  ArtistSitePageMain,
  bodyFont,
  useArtistSiteLocale,
} from "@/app/artist-site/artist-site-ui";

export function ArtistSiteHomePage() {
  const { artist } = useArtistSite();
  const { locale } = useArtistSiteLocale();
  const heroArtwork = getArtistPassportArtworks(artist)[0];

  return (
    <ArtistSitePageMain>
      {artist.introVideo ? (
        <div className="mx-auto max-w-5xl">
          <video
            className="w-full bg-neutral-900"
            controls
            playsInline
            preload="metadata"
            poster={artist.introVideoPoster}
          >
            <source src={artist.introVideo} type="video/mp4" />
          </video>
          <p
            className={`${bodyFont(locale)} mt-6 max-w-2xl text-[13px] leading-relaxed text-neutral-600`}
          >
            {t(artist.tagline, locale)}
          </p>
        </div>
      ) : heroArtwork?.image ? (
        <div className="mx-auto max-w-4xl">
          <div
            className="relative w-full bg-[#ebe8e2]"
            style={getArtworkDisplayLayout(heroArtwork).frameStyle}
          >
            <Image
              src={heroArtwork.image}
              alt={formatArtworkTitleForItem(heroArtwork, locale)}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>
        </div>
      ) : null}
    </ArtistSitePageMain>
  );
}
