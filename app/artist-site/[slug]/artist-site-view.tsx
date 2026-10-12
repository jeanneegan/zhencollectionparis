"use client";

import { useMemo, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  type ArtistProfile,
  type Locale,
  formatArtworkTitleForItem,
  getArtistPassportArtworks,
  getArtworkDisplayLayout,
  t,
} from "@/app/artists/[slug]/data";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { archiveDisplay } from "@/app/artist-site/artist-site-fonts";
import { ArtistSiteShell } from "./artist-site-shell";
import {
  formatDialogueEpisodeLabel,
  getSuHongDialogueExcerpts,
} from "@/app/lib/artist-site-dialogue";
import { getEpisodeBySlug } from "@/app/dialogue/data";
import {
  onlinePurchaseLead,
  onlinePurchaseTitle,
  tCollection,
} from "@/app/editions/collection-data";
import { getArtistSiteShopItems } from "@/app/lib/artist-site-shop";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import { zcpPublicUrl } from "@/app/lib/zcp-public-site";
import { useLocale } from "@/app/lib/use-locale";

function exhibitionTypeLabel(
  type: "solo" | "duo" | "group",
  locale: Locale,
): string {
  const labels = artistSiteLabels[locale];
  if (type === "solo") return labels.solo;
  if (type === "duo") return labels.duo;
  return labels.group;
}

function bodyFont(locale: Locale): string {
  return locale === "zh" || locale === "fr" ? serif.className : "";
}

function ProseBlock({
  text,
  locale,
  className = "",
}: {
  text: string;
  locale: Locale;
  className?: string;
}) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);

  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`${bodyFont(locale)} text-[15px] leading-[1.85] text-neutral-700 md:text-base md:leading-[1.9]`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ArchiveSectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className={`${archiveDisplay.className} scroll-mt-24 text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.05] tracking-tight text-neutral-900`}
    >
      {children}
    </h2>
  );
}

function ArtworkFigure({
  artwork,
  locale,
}: {
  artwork: ArtistProfile["artworks"][number];
  locale: Locale;
}) {
  const layout = getArtworkDisplayLayout(artwork);
  const imageSrc = artwork.image;
  if (!imageSrc) return null;

  const title = formatArtworkTitleForItem(artwork, locale);

  return (
    <figure className={`${layout.articleClass}`.trim()}>
      <div
        className="relative w-full bg-[#ebe8e2]"
        style={layout.frameStyle}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
          sizes={layout.imageSizes}
        />
      </div>
      {artwork.views?.map((view, viewIndex) => (
        <div
          key={`${artwork.id}-view-${viewIndex}`}
          className={`relative mt-6 w-full bg-[#ebe8e2] ${layout.articleClass}`}
          style={
            view.imageAspect
              ? { aspectRatio: `${view.imageAspect[0]} / ${view.imageAspect[1]}` }
              : layout.frameStyle
          }
        >
          <Image
            src={view.src}
            alt={view.label ? t(view.label, locale) : title}
            fill
            className="object-contain"
            sizes={layout.imageSizes}
          />
        </div>
      ))}
      <figcaption className="mt-4 max-w-md">
        <p className={`${bodyFont(locale)} text-base text-neutral-900`}>
          {title}
        </p>
        <p className="mt-1 text-[12px] leading-relaxed text-neutral-500">
          {artwork.year}
          {artwork.medium ? ` · ${t(artwork.medium, locale)}` : ""}
          {artwork.dimensions ? ` · ${artwork.dimensions}` : ""}
        </p>
        {artwork.description ? (
          <ProseBlock
            locale={locale}
            text={t(artwork.description, locale)}
            className="mt-4"
          />
        ) : null}
      </figcaption>
    </figure>
  );
}

export function ArtistSiteView({ artist }: { artist: ArtistProfile }) {
  const [locale, setLocale] = useLocale();
  const labels = artistSiteLabels[locale];
  const artworks = getArtistPassportArtworks(artist);
  const shopItems = getArtistSiteShopItems(artist.slug);
  const dialogueEpisode = getEpisodeBySlug("202609");
  const dialogueExcerpts =
    artist.slug === "su-hong" && dialogueEpisode
      ? getSuHongDialogueExcerpts(dialogueEpisode)
      : [];

  const awards = artist.professionalReputation.curatorMediaRecognition.filter(
    (entry) => t(entry.source, locale).trim().length > 0,
  );

  const siteTitle = formatArtworkTitleForItem(
    { title: artist.name, titleDisplay: "locale" },
    locale,
  );

  const navItems = [
    { id: "home", label: labels.home },
    { id: "works", label: labels.works },
    { id: "collection", label: labels.collection },
    { id: "bio", label: labels.bio },
    { id: "exhibitions", label: labels.exhibitions },
    { id: "writings", label: labels.writings },
    { id: "contact", label: labels.contact },
  ];

  const workSections = useMemo(() => {
    type Series = NonNullable<ArtistProfile["series"]>[number];
    type Artwork = ArtistProfile["artworks"][number];
    const order: string[] = [];
    const map = new Map<string, Artwork[]>();

    for (const artwork of artworks) {
      const key = artwork.seriesId ?? "_ungrouped";
      if (!map.has(key)) {
        order.push(key);
        map.set(key, []);
      }
      map.get(key)!.push(artwork);
    }

    return order.map((key) => ({
      series:
        key === "_ungrouped"
          ? null
          : (artist.series?.find((item) => item.id === key) ?? null),
      seriesKey: key,
      artworks: map.get(key) ?? [],
    }));
  }, [artist.series, artworks]);

  const heroArtwork = artworks[0];

  return (
    <ArtistSiteShell
      siteTitle={siteTitle}
      locale={locale}
      onLocaleChange={setLocale}
      menuLabel={labels.menu}
      closeLabel={labels.close}
      navItems={navItems}
    >
      <div className="px-5 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">
        {/* Home — full-bleed media + caption (Twombly-style) */}
        <section id="home" className="scroll-mt-24 pb-16 md:pb-24">
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
                style={
                  getArtworkDisplayLayout(heroArtwork).frameStyle
                }
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
                {formatArtworkTitleForItem(heroArtwork, locale)} ·{" "}
                {heroArtwork.year}
              </p>
            </div>
          ) : null}
        </section>

        {/* Works — category index + grids */}
        <section id="works" className="scroll-mt-24 border-t border-neutral-300/50 pt-14 md:pt-20">
          <ArchiveSectionTitle id="works-title">{labels.works}</ArchiveSectionTitle>

          {artist.series && artist.series.length > 0 ? (
            <ul className="mt-10 space-y-8 border-b border-neutral-300/50 pb-14 md:grid md:grid-cols-2 md:gap-x-12 md:space-y-0">
              {workSections
                .filter((section) => section.series)
                .map(({ series, seriesKey }) =>
                  series ? (
                    <li key={seriesKey}>
                      <a href={`#series-${series.id}`} className="group block">
                        <h3
                          className={`${archiveDisplay.className} text-2xl tracking-tight text-neutral-900 group-hover:opacity-70`}
                        >
                          {t(series.title, locale)}
                        </h3>
                        {series.period ? (
                          <p className="mt-1 text-[12px] text-neutral-500">
                            {series.period}
                          </p>
                        ) : null}
                        <p
                          className={`${bodyFont(locale)} mt-3 line-clamp-3 text-[14px] leading-relaxed text-neutral-600`}
                        >
                          {t(series.intro, locale).split(/\n\n+/)[0]}
                        </p>
                      </a>
                    </li>
                  ) : null,
                )}
            </ul>
          ) : null}

          <div className="mt-14 space-y-20 md:space-y-28">
            {workSections.map(({ series, seriesKey, artworks: sectionArtworks }) => (
              <div
                key={seriesKey}
                id={series ? `series-${series.id}` : undefined}
                className="scroll-mt-24"
              >
                {series ? (
                  <header className="mb-10 max-w-3xl md:mb-14">
                    <h3
                      className={`${archiveDisplay.className} text-[clamp(1.75rem,4vw,2.5rem)] tracking-tight text-neutral-900`}
                    >
                      {t(series.title, locale)}
                    </h3>
                    {series.period ? (
                      <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-neutral-500">
                        {series.period}
                      </p>
                    ) : null}
                    <ProseBlock
                      locale={locale}
                      text={t(series.intro, locale)}
                      className="mt-6"
                    />
                  </header>
                ) : null}

                <div className="grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:gap-x-16">
                  {sectionArtworks.map((artwork) => (
                    <ArtworkFigure
                      key={artwork.id}
                      artwork={artwork}
                      locale={locale}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collection */}
        <section id="collection" className="scroll-mt-24 border-t border-neutral-300/50 pt-14 md:pt-20">
          <ArchiveSectionTitle id="collection-title">{labels.collection}</ArchiveSectionTitle>

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
                      <p className="mt-1 text-[13px] text-neutral-600">
                        €{item.priceEur}
                      </p>
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
              <Link
                href={zcpPublicUrl("/editions")}
                className="inline-block border-b border-neutral-800 pb-0.5 text-[13px] tracking-wide text-neutral-900"
              >
                {labels.shopPlatformCta}
              </Link>
            </div>
          )}
        </section>

        {/* Bio */}
        <section id="bio" className="scroll-mt-24 border-t border-neutral-300/50 pt-14 md:pt-20">
          <ArchiveSectionTitle id="bio-title">{labels.bio}</ArchiveSectionTitle>

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
                  <dd className={`${bodyFont(locale)} mt-2`}>
                    {t(artist.currentCity, locale)}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {labels.practice}
                  </dt>
                  <dd className={`${bodyFont(locale)} mt-2`}>
                    {t(artist.practice, locale)}
                  </dd>
                </div>
              </dl>

              {artist.education.length > 0 ? (
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {labels.education}
                  </h3>
                  <ul className={`${bodyFont(locale)} mt-4 space-y-2 text-[15px] text-neutral-700`}>
                    {artist.education.map((entry) => (
                      <li key={`${entry.year}-${entry.institution.zh}`}>
                        {entry.year} · {t(entry.institution, locale)}
                        {t(entry.degree, locale)
                          ? ` · ${t(entry.degree, locale)}`
                          : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {artist.careerTimeline.length > 0 ? (
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {labels.career}
                  </h3>
                  <ul className="mt-6 space-y-8">
                    {artist.careerTimeline.map((entry) => (
                      <li
                        key={`${entry.year}-${entry.title.zh}`}
                        className="border-l border-neutral-300 pl-5"
                      >
                        <p className="text-[12px] tabular-nums text-neutral-500">
                          {entry.year}
                        </p>
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
        </section>

        {/* Exhibitions & news — feed layout */}
        <section
          id="exhibitions"
          className="scroll-mt-24 border-t border-neutral-300/50 pt-14 md:pt-20"
        >
          <ArchiveSectionTitle id="exhibitions-title">
            {labels.exhibitions}
          </ArchiveSectionTitle>

          <ul className="mt-12 divide-y divide-neutral-300/60">
            {artist.exhibitions.map((exhibition, index) => (
              <li key={`${exhibition.year}-${exhibition.title.zh}-${index}`} className="py-8 md:py-10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {labels.exhibitionCategory} · {exhibition.year} ·{" "}
                  {exhibitionTypeLabel(exhibition.type, locale)}
                </p>
                <h3
                  className={`${bodyFont(locale)} mt-3 max-w-3xl text-xl leading-snug text-neutral-900 md:text-2xl`}
                >
                  {t(exhibition.title, locale)}
                </h3>
                <p className="mt-3 text-[14px] text-neutral-600">
                  {exhibition.venue} · {t(exhibition.city, locale)}
                </p>
              </li>
            ))}
          </ul>

          {awards.length > 0 ? (
            <div className="mt-16 border-t border-neutral-300/50 pt-12">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                {labels.awardsCategory}
              </p>
              <ul className="mt-6 divide-y divide-neutral-300/60">
                {awards.map((entry, index) => (
                  <li key={index} className="py-6">
                    <p className={`${bodyFont(locale)} text-[15px] text-neutral-800`}>
                      {t(entry.source, locale)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        {/* Writings & dialogue */}
        <section
          id="writings"
          className="scroll-mt-24 border-t border-neutral-300/50 pt-14 md:pt-20"
        >
          <ArchiveSectionTitle id="writings-title">{labels.writings}</ArchiveSectionTitle>

          <div className="mt-10 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              {labels.artistStatement}
            </p>
            <ProseBlock
              locale={locale}
              text={t(artist.artistStatement, locale)}
              className="mt-6"
            />
          </div>

          {t(artist.hopeToLeave, locale).trim() ? (
            <blockquote className="mt-14 max-w-2xl border-l border-neutral-400 pl-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                {labels.hopeToLeave}
              </p>
              <p
                className={`${bodyFont(locale)} mt-4 text-[15px] leading-relaxed text-neutral-800`}
              >
                {t(artist.hopeToLeave, locale)}
              </p>
            </blockquote>
          ) : null}

          {dialogueExcerpts.length > 0 && dialogueEpisode ? (
            <div className="mt-16 border-t border-neutral-300/50 pt-12">
              <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  ZCP · {formatDialogueEpisodeLabel(dialogueEpisode, locale)}
                </p>
                <Link
                  href={zcpPublicUrl(`/dialogue/${dialogueEpisode.slug}`)}
                  className="text-[13px] text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
                >
                  {labels.zcpDialogue}
                </Link>
              </div>

              <ul className="mt-10 divide-y divide-neutral-300/60">
                {dialogueExcerpts.map((excerpt) => (
                  <li key={excerpt.id} className="py-8 md:py-10">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                      {t(excerpt.kicker, locale)}
                    </p>
                    <p className="mt-2 text-[13px] text-neutral-600">
                      {t(excerpt.questionFromLabel, locale)}
                    </p>
                    <p
                      className={`${bodyFont(locale)} mt-4 whitespace-pre-line text-[15px] leading-relaxed text-neutral-900`}
                    >
                      {t(excerpt.question, locale)}
                    </p>
                    {excerpt.answer ? (
                      <div className="mt-6 max-w-2xl">
                        <p className="text-[13px] text-neutral-600">{siteTitle}</p>
                        <p
                          className={`${bodyFont(locale)} mt-3 whitespace-pre-line text-[15px] leading-relaxed text-neutral-700`}
                        >
                          {t(excerpt.answer, locale)}
                        </p>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-neutral-300/50 pt-14 pb-20 md:pt-20 md:pb-28"
        >
          <ArchiveSectionTitle id="contact-title">{labels.contact}</ArchiveSectionTitle>

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
          ) : null}

          <p className="mt-12 text-[13px] text-neutral-500">
            <Link
              href={zcpPublicUrl(`/artists/${artist.slug}`)}
              className="underline-offset-4 hover:text-neutral-900 hover:underline"
            >
              {labels.zcpPassport}
            </Link>
          </p>
        </section>
      </div>
    </ArtistSiteShell>
  );
}
