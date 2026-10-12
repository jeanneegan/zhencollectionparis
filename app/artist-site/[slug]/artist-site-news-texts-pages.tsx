"use client";

import Link from "next/link";
import { formatArtworkTitleForItem, t } from "@/app/artists/[slug]/data";
import { useArtistSite, useArtistSiteHref } from "@/app/artist-site/artist-site-context";
import {
  ArtistSitePageMain,
  bodyFont,
  EmptyState,
  exhibitionTypeLabel,
  PageTitle,
  ProseBlock,
  TextLink,
  useArtistSiteLocale,
} from "@/app/artist-site/artist-site-ui";
import {
  formatDialogueEpisodeLabel,
} from "@/app/lib/artist-site-dialogue";
import {
  getArtistSiteNewsBySlug,
  getArtistSiteNewsItems,
  getArtistSiteTextBySlug,
  getArtistSiteTextItems,
} from "@/app/lib/artist-site-routes";
import { getEpisodeBySlug } from "@/app/dialogue/data";
import { zcpPublicUrl } from "@/app/lib/zcp-public-site";

export function ArtistSiteNewsIndexPage() {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const newsItems = getArtistSiteNewsItems(artist);

  const awards = artist.professionalReputation.curatorMediaRecognition.filter(
    (entry) => t(entry.source, locale).trim().length > 0,
  );

  return (
    <ArtistSitePageMain>
      <PageTitle>{labels.news}</PageTitle>

      {newsItems.length === 0 ? (
        <EmptyState locale={locale}>{labels.emptyNews}</EmptyState>
      ) : (
        <ul className="mt-12 divide-y divide-neutral-300/60">
          {newsItems.map(({ slug, exhibition }) => (
            <li key={slug} className="py-8 md:py-10">
              <Link href={href(`/news/${slug}`)} className="group block max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {labels.exhibitionCategory} · {exhibition.year} ·{" "}
                  {exhibitionTypeLabel(exhibition.type, locale)}
                </p>
                <h2
                  className={`${bodyFont(locale)} mt-3 text-xl leading-snug text-neutral-900 group-hover:opacity-70 md:text-2xl`}
                >
                  {t(exhibition.title, locale)}
                </h2>
                <p className="mt-3 text-[14px] text-neutral-600">
                  {exhibition.venue} · {t(exhibition.city, locale)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}

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
    </ArtistSitePageMain>
  );
}

export function ArtistSiteNewsDetailPage({ newsSlug }: { newsSlug: string }) {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const item = getArtistSiteNewsBySlug(artist, newsSlug);

  if (!item) {
    return null;
  }

  const { exhibition } = item;

  return (
    <ArtistSitePageMain>
      <TextLink href={href("/news")}>{labels.backToNews}</TextLink>
      <article className="mt-10 max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          {labels.exhibitionCategory} · {exhibition.year} ·{" "}
          {exhibitionTypeLabel(exhibition.type, locale)}
        </p>
        <PageTitle>
          <span className={`${bodyFont(locale)} block text-[clamp(1.75rem,4vw,2.75rem)]`}>
            {t(exhibition.title, locale)}
          </span>
        </PageTitle>
        <p className="mt-6 text-[15px] text-neutral-600">
          {exhibition.venue} · {t(exhibition.city, locale)}
        </p>
      </article>
    </ArtistSitePageMain>
  );
}

export function ArtistSiteTextsIndexPage() {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const textItems = getArtistSiteTextItems(artist);
  const dialogueEpisode = getEpisodeBySlug("202609");
  const siteTitle = formatArtworkTitleForItem(
    { title: artist.name, titleDisplay: "locale" },
    locale,
  );

  return (
    <ArtistSitePageMain>
      <PageTitle>{labels.texts}</PageTitle>

      {textItems.length === 0 ? (
        <EmptyState locale={locale}>{labels.emptyTexts}</EmptyState>
      ) : (
        <ul className="mt-12 divide-y divide-neutral-300/60">
          {textItems.map((item) => {
            let title = "";
            if (item.kind === "statement") {
              title = labels.artistStatement;
            } else if (item.kind === "hope") {
              title = labels.hopeToLeave;
            } else if (item.excerpt) {
              title = t(item.excerpt.kicker, locale);
            }

            return (
              <li key={item.slug} className="py-6 md:py-8">
                <Link href={href(`/texts/${item.slug}`)} className="group block max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                    {item.kind === "dialogue"
                      ? `ZCP · ${dialogueEpisode ? formatDialogueEpisodeLabel(dialogueEpisode, locale) : ""}`
                      : labels.writings}
                  </p>
                  <h2
                    className={`${bodyFont(locale)} mt-2 text-lg text-neutral-900 group-hover:opacity-70`}
                  >
                    {item.kind === "dialogue" && item.excerpt
                      ? t(item.excerpt.questionFromLabel, locale)
                      : title}
                  </h2>
                  {item.kind === "dialogue" && item.excerpt ? (
                    <p className={`${bodyFont(locale)} mt-3 line-clamp-3 text-[14px] text-neutral-600`}>
                      {t(item.excerpt.question, locale)}
                    </p>
                  ) : null}
                  {item.kind === "statement" ? (
                    <p className={`${bodyFont(locale)} mt-3 line-clamp-3 text-[14px] text-neutral-600`}>
                      {t(artist.artistStatement, locale).split(/\n\n+/)[0]}
                    </p>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {dialogueEpisode ? (
        <p className="mt-12 text-[13px] text-neutral-500">
          <a
            href={zcpPublicUrl(`/dialogue/${dialogueEpisode.slug}`)}
            className="underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            {labels.zcpDialogue}
          </a>
          {" · "}
          {siteTitle}
        </p>
      ) : null}
    </ArtistSitePageMain>
  );
}

export function ArtistSiteTextDetailPage({ textSlug }: { textSlug: string }) {
  const { artist } = useArtistSite();
  const href = useArtistSiteHref();
  const { locale, labels } = useArtistSiteLocale();
  const item = getArtistSiteTextBySlug(artist, textSlug);
  const dialogueEpisode = getEpisodeBySlug("202609");
  const siteTitle = formatArtworkTitleForItem(
    { title: artist.name, titleDisplay: "locale" },
    locale,
  );

  if (!item) {
    return null;
  }

  if (item.kind === "statement") {
    return (
      <ArtistSitePageMain>
        <TextLink href={href("/texts")}>{labels.backToTexts}</TextLink>
        <div className="mt-10 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            {labels.artistStatement}
          </p>
          <ProseBlock locale={locale} text={t(artist.artistStatement, locale)} className="mt-6" />
        </div>
      </ArtistSitePageMain>
    );
  }

  if (item.kind === "hope") {
    return (
      <ArtistSitePageMain>
        <TextLink href={href("/texts")}>{labels.backToTexts}</TextLink>
        <blockquote className="mt-10 max-w-2xl border-l border-neutral-400 pl-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            {labels.hopeToLeave}
          </p>
          <p
            className={`${bodyFont(locale)} mt-4 text-[15px] leading-relaxed text-neutral-800`}
          >
            {t(artist.hopeToLeave, locale)}
          </p>
        </blockquote>
      </ArtistSitePageMain>
    );
  }

  const excerpt = item.excerpt;
  if (!excerpt) {
    return null;
  }

  return (
    <ArtistSitePageMain>
      <TextLink href={href("/texts")}>{labels.backToTexts}</TextLink>
      <article className="mt-10 max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          ZCP ·{" "}
          {dialogueEpisode
            ? formatDialogueEpisodeLabel(dialogueEpisode, locale)
            : t(excerpt.kicker, locale)}
        </p>
        <p className="mt-2 text-[13px] text-neutral-600">
          {t(excerpt.questionFromLabel, locale)}
        </p>
        <p
          className={`${bodyFont(locale)} mt-6 whitespace-pre-line text-[15px] leading-relaxed text-neutral-900`}
        >
          {t(excerpt.question, locale)}
        </p>
        {excerpt.answer ? (
          <div className="mt-8">
            <p className="text-[13px] text-neutral-600">{siteTitle}</p>
            <p
              className={`${bodyFont(locale)} mt-3 whitespace-pre-line text-[15px] leading-relaxed text-neutral-700`}
            >
              {t(excerpt.answer, locale)}
            </p>
          </div>
        ) : null}
        {dialogueEpisode ? (
          <p className="mt-10">
            <a
              href={zcpPublicUrl(`/dialogue/${dialogueEpisode.slug}`)}
              className="text-[13px] text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
            >
              {labels.zcpDialogue}
            </a>
          </p>
        ) : null}
      </article>
    </ArtistSitePageMain>
  );
}
