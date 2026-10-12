"use client";

import Link from "next/link";
import {
  formatArtworkTitleForItem,
  getArtistPassportArtworks,
  t,
} from "@/app/artists/[slug]/data";
import { archiveDisplay } from "@/app/artist-site/artist-site-fonts";
import { useArtistSite, useArtistSiteHref } from "@/app/artist-site/artist-site-context";
import {
  ArtworkFigure,
  ArtistSitePageMain,
  bodyFont,
  PageTitle,
  ProseBlock,
  TextLink,
  useArtistSiteLocale,
} from "@/app/artist-site/artist-site-ui";
import {
  getArtistWorkSections,
  resolveWorkDetail,
} from "@/app/lib/artist-site-routes";

export function ArtistSiteWorksIndexPage() {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const sections = getArtistWorkSections(artist);

  return (
    <ArtistSitePageMain>
      <PageTitle>{labels.works}</PageTitle>

      {sections.length === 0 ? (
        <p className={`${bodyFont(locale)} mt-10 text-neutral-600`}>{labels.emptyWorks}</p>
      ) : (
        <>
          {artist.series && artist.series.length > 0 ? (
            <ul className="mt-12 space-y-8 border-b border-neutral-300/50 pb-14 md:grid md:grid-cols-2 md:gap-x-12 md:space-y-0">
              {sections
                .filter((section) => section.series)
                .map(({ series, seriesKey }) =>
                  series ? (
                    <li key={seriesKey}>
                      <Link href={href(`/works/${series.id}`)} className="group block">
                        <h2
                          className={`${archiveDisplay.className} text-2xl tracking-tight text-neutral-900 group-hover:opacity-70`}
                        >
                          {t(series.title, locale)}
                        </h2>
                        {series.period ? (
                          <p className="mt-1 text-[12px] text-neutral-500">{series.period}</p>
                        ) : null}
                        <p
                          className={`${bodyFont(locale)} mt-3 line-clamp-3 text-[14px] leading-relaxed text-neutral-600`}
                        >
                          {t(series.intro, locale).split(/\n\n+/)[0]}
                        </p>
                      </Link>
                    </li>
                  ) : null,
                )}
            </ul>
          ) : null}

          <div className="mt-14 space-y-16">
            {sections.map(({ series, seriesKey, artworks }) => (
              <div key={seriesKey}>
                {series ? (
                  <h2
                    className={`${archiveDisplay.className} text-xl tracking-tight text-neutral-900`}
                  >
                    <Link href={href(`/works/${series.id}`)} className="hover:opacity-70">
                      {t(series.title, locale)}
                    </Link>
                  </h2>
                ) : null}
                <ul className="mt-6 space-y-2">
                  {artworks.map((artwork) => (
                    <li key={artwork.id}>
                      <Link
                        href={href(`/works/${artwork.id}`)}
                        className={`${bodyFont(locale)} text-[15px] text-neutral-800 hover:opacity-70`}
                      >
                        {formatArtworkTitleForItem(artwork, locale)}
                        <span className="text-neutral-500"> · {artwork.year}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </ArtistSitePageMain>
  );
}

export function ArtistSiteWorkDetailPage({ workSlug }: { workSlug: string }) {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const detail = resolveWorkDetail(artist, workSlug);

  if (!detail) {
    return null;
  }

  if (detail.type === "series") {
    const { series } = detail;
    const sectionArtworks = getArtistPassportArtworks(artist).filter(
      (a) => a.seriesId === series.id,
    );

    return (
      <ArtistSitePageMain>
        <TextLink href={href("/works")}>{labels.backToWorks}</TextLink>
        <header className="mt-8 max-w-3xl">
          <PageTitle>{t(series.title, locale)}</PageTitle>
          {series.period ? (
            <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-neutral-500">
              {series.period}
            </p>
          ) : null}
          <ProseBlock locale={locale} text={t(series.intro, locale)} className="mt-8" />
        </header>

        {sectionArtworks.length > 0 ? (
          <>
            <p className="mt-14 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              {labels.seriesWorks}
            </p>
            <div className="mt-10 grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-16">
              {sectionArtworks.map((artwork) => (
                <div key={artwork.id}>
                  <ArtworkFigure artwork={artwork} locale={locale} />
                  <Link
                    href={href(`/works/${artwork.id}`)}
                    className="mt-4 inline-block text-[13px] text-neutral-600 underline-offset-4 hover:underline"
                  >
                    {formatArtworkTitleForItem(artwork, locale)}
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </ArtistSitePageMain>
    );
  }

  return (
    <ArtistSitePageMain>
      <TextLink href={href("/works")}>{labels.backToWorks}</TextLink>
      <div className="mt-10 max-w-3xl">
        <ArtworkFigure artwork={detail.artwork} locale={locale} />
      </div>
    </ArtistSitePageMain>
  );
}
