"use client";

import Image from "next/image";
import Link from "next/link";
import {
  formatArtworkTitleForItem,
  getArtistPassportArtworks,
  getArtworkDisplayLayout,
  t,
} from "@/app/artists/[slug]/data";
import { useArtistSite, useArtistSiteHref } from "@/app/artist-site/artist-site-context";
import {
  ArtistSitePageMain,
  bodyFont,
  exhibitionTypeLabel,
  PageTitle,
  useArtistSiteLocale,
} from "@/app/artist-site/artist-site-ui";
import { getArtistSiteNewsItems } from "@/app/lib/artist-site-routes";
import { archiveDisplay } from "@/app/artist-site/artist-site-fonts";

export function ArtistSiteHomePage() {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const artworks = getArtistPassportArtworks(artist);
  const heroArtwork = artworks[0];
  const featured = artworks.filter((a) => a.image).slice(0, 4);
  const newsItems = getArtistSiteNewsItems(artist).slice(0, 4);

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
          <p
            className={`${bodyFont(locale)} mt-6 text-[13px] leading-relaxed text-neutral-600`}
          >
            {formatArtworkTitleForItem(heroArtwork, locale)} · {heroArtwork.year}
          </p>
        </div>
      ) : null}

      {featured.length > 0 ? (
        <section className="mt-20 border-t border-neutral-300/50 pt-14 md:mt-28 md:pt-20">
          <div className="flex items-baseline justify-between gap-4">
            <PageTitle>{labels.featuredWorks}</PageTitle>
            <Link
              href={href("/works")}
              className="text-[13px] text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
            >
              {labels.viewAll}
            </Link>
          </div>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((artwork) => (
              <li key={artwork.id}>
                <Link href={href(`/works/${artwork.id}`)} className="group block">
                  <div
                    className="relative w-full bg-[#ebe8e2]"
                    style={getArtworkDisplayLayout(artwork).frameStyle}
                  >
                    {artwork.image ? (
                      <Image
                        src={artwork.image}
                        alt={formatArtworkTitleForItem(artwork, locale)}
                        fill
                        className="object-contain transition-opacity group-hover:opacity-90"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    ) : null}
                  </div>
                  <p className={`${bodyFont(locale)} mt-3 text-[14px] text-neutral-800`}>
                    {formatArtworkTitleForItem(artwork, locale)}
                  </p>
                  <p className="text-[12px] text-neutral-500">{artwork.year}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-20 border-t border-neutral-300/50 pt-14 md:mt-28 md:pt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2
            className={`${archiveDisplay.className} text-[clamp(1.75rem,4vw,2.5rem)] tracking-tight text-neutral-900`}
          >
            {labels.latestNews}
          </h2>
          <Link
            href={href("/news")}
            className="text-[13px] text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            {labels.viewAll}
          </Link>
        </div>
        {newsItems.length > 0 ? (
          <ul className="mt-10 divide-y divide-neutral-300/60">
            {newsItems.map(({ slug, exhibition }) => (
              <li key={slug} className="py-6 md:py-8">
                <Link href={href(`/news/${slug}`)} className="group block max-w-3xl">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    {exhibition.year} · {exhibitionTypeLabel(exhibition.type, locale)}
                  </p>
                  <h3
                    className={`${bodyFont(locale)} mt-2 text-lg leading-snug text-neutral-900 group-hover:opacity-70 md:text-xl`}
                  >
                    {t(exhibition.title, locale)}
                  </h3>
                  <p className="mt-2 text-[14px] text-neutral-600">
                    {exhibition.venue} · {t(exhibition.city, locale)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={`${bodyFont(locale)} mt-8 text-[15px] text-neutral-600`}>
            {labels.emptyNews}
          </p>
        )}
      </section>
    </ArtistSitePageMain>
  );
}
