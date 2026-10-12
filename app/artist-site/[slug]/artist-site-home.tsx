"use client";

import Image from "next/image";
import {
  formatArtworkTitleForItem,
  getArtistPassportArtworks,
  getArtworkDisplayLayout,
  t,
} from "@/app/artists/[slug]/data";
import { artistSiteNameFontClass } from "@/app/artist-site/artist-site-fonts";
import { useArtistSite } from "@/app/artist-site/artist-site-context";
import { bodyFont, useArtistSiteLocale } from "@/app/artist-site/artist-site-ui";

export function ArtistSiteHomePage() {
  const { artist } = useArtistSite();
  const { locale } = useArtistSiteLocale();
  const heroArtwork = getArtistPassportArtworks(artist)[0];
  const displayName = formatArtworkTitleForItem(
    { title: artist.name, titleDisplay: "locale" },
    locale,
  );
  const nameAlt =
    locale === "zh" ? t(artist.name, "en") : locale === "en" ? t(artist.name, "zh") : null;

  return (
    <section className="flex min-h-[calc(100dvh-3.25rem)] flex-col items-center justify-center px-5 pb-20 pt-12 md:min-h-[calc(100dvh-4rem)] md:px-12 md:pb-28 md:pt-16 lg:px-16">
      <header className="mb-8 w-full max-w-4xl text-center md:mb-12">
        <h1
          className={`${artistSiteNameFontClass(locale)} text-[clamp(2.75rem,9vw,4.75rem)] font-normal leading-[1.02] text-neutral-900 ${
            locale === "zh" ? "tracking-normal" : "tracking-tight"
          }`}
        >
          {displayName}
        </h1>
        {nameAlt && nameAlt !== displayName ? (
          <p
            className={`${bodyFont(locale)} mt-3 text-[13px] tracking-[0.12em] text-neutral-500`}
          >
            {nameAlt}
          </p>
        ) : null}
      </header>

      {artist.introVideo ? (
        <div className="w-full max-w-3xl">
          <video
            className="w-full bg-neutral-900 shadow-sm ring-1 ring-neutral-900/5"
            controls
            playsInline
            preload="metadata"
            poster={artist.introVideoPoster}
          >
            <source src={artist.introVideo} type="video/mp4" />
          </video>
          <p
            className={`${bodyFont(locale)} mx-auto mt-8 max-w-md text-center text-[13px] leading-[1.85] text-neutral-600 md:mt-10 md:max-w-lg md:text-[14px]`}
          >
            {t(artist.tagline, locale)}
          </p>
        </div>
      ) : heroArtwork?.image ? (
        <div className="w-full max-w-3xl">
          <div
            className="relative w-full bg-[#ebe8e2] shadow-sm ring-1 ring-neutral-900/5"
            style={getArtworkDisplayLayout(heroArtwork).frameStyle}
          >
            <Image
              src={heroArtwork.image}
              alt={displayName}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
