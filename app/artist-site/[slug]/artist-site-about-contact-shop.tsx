"use client";

import Image from "next/image";
import { formatArtworkTitleForItem, t } from "@/app/artists/[slug]/data";
import { useArtistSite } from "@/app/artist-site/artist-site-context";
import {
  ArtistSitePageMain,
  bodyFont,
  PageTitle,
  useArtistSiteLocale,
} from "@/app/artist-site/artist-site-ui";
import { getArtistSiteShopItems } from "@/app/lib/artist-site-shop";
import {
  onlinePurchaseLead,
  onlinePurchaseTitle,
  tCollection,
} from "@/app/editions/collection-data";
import { zcpPublicUrl } from "@/app/lib/zcp-public-site";

export function ArtistSiteAboutPage() {
  const { artist } = useArtistSite();
  const { locale, labels } = useArtistSiteLocale();
  const siteTitle = formatArtworkTitleForItem(
    { title: artist.name, titleDisplay: "locale" },
    locale,
  );

  return (
    <ArtistSitePageMain>
      <PageTitle>{labels.bio}</PageTitle>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs bg-[#ebe8e2] lg:mx-0">
          <Image
            src={artist.portrait}
            alt={siteTitle}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 70vw, 320px"
          />
        </div>

        <div className="max-w-2xl space-y-10">
          <p className={`${bodyFont(locale)} text-lg leading-relaxed text-neutral-800`}>
            {t(artist.tagline, locale)}
          </p>

          <dl className="grid gap-6 text-[14px] text-neutral-700 sm:grid-cols-2">
            {artist.birthYear ? (
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  {labels.born}
                </dt>
                <dd className={`${bodyFont(locale)} mt-2`}>
                  {artist.birthYear} · {t(artist.birthplace, locale)}
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                {labels.livesIn}
              </dt>
              <dd className={`${bodyFont(locale)} mt-2`}>{t(artist.currentCity, locale)}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                {labels.practice}
              </dt>
              <dd className={`${bodyFont(locale)} mt-2`}>{t(artist.practice, locale)}</dd>
            </div>
          </dl>

          {artist.education.length > 0 ? (
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                {labels.education}
              </h2>
              <ul
                className={`${bodyFont(locale)} mt-4 space-y-2 text-[15px] text-neutral-700`}
              >
                {artist.education.map((entry) => (
                  <li key={`${entry.year}-${entry.institution.zh}`}>
                    {entry.year} · {t(entry.institution, locale)}
                    {t(entry.degree, locale) ? ` · ${t(entry.degree, locale)}` : ""}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {artist.careerTimeline.length > 0 ? (
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                {labels.career}
              </h2>
              <ul className="mt-6 space-y-8">
                {artist.careerTimeline.map((entry) => (
                  <li
                    key={`${entry.year}-${entry.title.zh}`}
                    className="border-l border-neutral-300 pl-5"
                  >
                    <p className="text-[12px] tabular-nums text-neutral-500">{entry.year}</p>
                    <p className={`${bodyFont(locale)} mt-1 text-neutral-900`}>
                      {t(entry.title, locale)}
                    </p>
                    <p
                      className={`${bodyFont(locale)} mt-2 text-[14px] leading-relaxed text-neutral-600`}
                    >
                      {t(entry.description, locale)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </ArtistSitePageMain>
  );
}

export function ArtistSiteContactPage() {
  const { artist } = useArtistSite();
  const { locale, labels } = useArtistSiteLocale();

  return (
    <ArtistSitePageMain>
      <PageTitle>{labels.contact}</PageTitle>

      {artist.contact.email ? (
        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            {labels.email}
          </p>
          <a
            href={`mailto:${artist.contact.email}`}
            className="mt-3 inline-block text-[15px] text-neutral-900 underline-offset-4 hover:underline"
          >
            {artist.contact.email}
          </a>
        </div>
      ) : (
        <p className={`${bodyFont(locale)} mt-10 text-neutral-600`}>—</p>
      )}

      <p className="mt-12 text-[13px] text-neutral-500">
        <a
          href={zcpPublicUrl(`/artists/${artist.slug}`)}
          className="underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          {labels.zcpPassport}
        </a>
      </p>
    </ArtistSitePageMain>
  );
}

export function ArtistSiteShopPage() {
  const { artist } = useArtistSite();
  const { locale, labels } = useArtistSiteLocale();
  const shopItems = getArtistSiteShopItems(artist.slug);

  return (
    <ArtistSitePageMain>
      <PageTitle>{labels.shop}</PageTitle>

      {shopItems.length > 0 ? (
        <ul className="mt-12 grid gap-12 sm:grid-cols-2 lg:max-w-4xl">
          {shopItems.map((item) => (
            <li key={item.workId}>
              <a
                href={item.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[4/5] bg-[#ebe8e2]">
                  <Image
                    src={item.image}
                    alt={formatArtworkTitleForItem(
                      { title: item.title, titleDisplay: "locale" },
                      locale,
                    )}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <p className={`${bodyFont(locale)} mt-4 text-base`}>
                  {formatArtworkTitleForItem(
                    { title: item.title, titleDisplay: "locale" },
                    locale,
                  )}
                </p>
                {item.priceEur !== undefined ? (
                  <p className="mt-1 text-[13px] text-neutral-600">€{item.priceEur}</p>
                ) : null}
                <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-neutral-500 group-hover:text-neutral-900">
                  {labels.shopPurchase}
                </p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-10 max-w-xl space-y-5">
          <p className={`${bodyFont(locale)} text-[15px] leading-relaxed text-neutral-700`}>
            {labels.shopEmpty}
          </p>
          <p className={`${bodyFont(locale)} text-[15px] leading-relaxed text-neutral-700`}>
            {tCollection(onlinePurchaseLead, locale)}
          </p>
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            {tCollection(onlinePurchaseTitle, locale)}
          </p>
          <a
            href={zcpPublicUrl("/editions")}
            className="inline-block border-b border-neutral-800 pb-0.5 text-[13px] tracking-wide text-neutral-900"
          >
            {labels.shopPlatformCta}
          </a>
        </div>
      )}
    </ArtistSitePageMain>
  );
}
