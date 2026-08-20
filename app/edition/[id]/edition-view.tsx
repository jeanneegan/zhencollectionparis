"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import {
  getArtistBySlug,
  getArtworkDisplayLayout,
  t,
  type Locale,
} from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Edition } from "@/app/edition/data";
import {
  getArtworkPassportPath,
  hasArtworkPassport,
} from "@/app/lib/artwork-passport";
import {
  getEditionCopyPassportPath,
  hasEditionCopyPassport,
} from "@/app/lib/edition-copy-passport";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    artist: string;
    viewArtist: string;
    viewPassport: string;
    viewCopyPassport: string;
    inquiry: string;
    editionSize: string;
  }
> = {
  zh: {
    kicker: "Édition",
    kickerSub: "出版",
    artist: "Artiste · 艺术家",
    viewArtist: "Voir l'artiste · 查看艺术家",
    viewPassport: "Voir le passeport œuvre · 查看作品护照",
    viewCopyPassport: "Exemplaire 1/6 · 第 1/6 号护照",
    inquiry: "咨询 · Inquiry",
    editionSize: "版数 · Tirage",
  },
  fr: {
    kicker: "Édition",
    kickerSub: "出版",
    artist: "Artiste · 艺术家",
    viewArtist: "Voir l'artiste · 查看艺术家",
    viewPassport: "Voir le passeport œuvre · 查看作品护照",
    viewCopyPassport: "Exemplaire 1/6 · 第 1/6 号护照",
    inquiry: "Demande · 咨询",
    editionSize: "Tirage · 版数",
  },
  en: {
    kicker: "Edition",
    kickerSub: "",
    artist: "Artist",
    viewArtist: "View artist",
    viewPassport: "View artwork passport",
    viewCopyPassport: "Exemplar 1/6 passport",
    inquiry: "Inquiry",
    editionSize: "Edition size",
  },
};

export function EditionView({ edition }: { edition: Edition }) {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const artist = getArtistBySlug(edition.artistSlug);
  const work = artist?.artworks.find((item) => item.id === edition.workId);

  if (!artist || !work) {
    return null;
  }

  const layout = getArtworkDisplayLayout({
    dimensions: work.dimensions,
    imageAspect: work.imageAspect,
    layoutPair: work.layoutPair,
    displayLayout: work.displayLayout,
    viewsLayout: work.viewsLayout,
    views: work.views,
  });

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.kicker}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.kickerSub}
            </p>
          ) : null}
          <h1
            className={`${serif.className} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {t(edition.title, locale)}
          </h1>
          <p className="mt-4 text-sm tracking-[0.08em] text-stone-500">
            {t(artist.name, locale)} · {edition.year}
          </p>
        </header>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-[1.9] text-stone-600">
          {t(edition.intro, locale)}
        </p>

        <article className="mt-14 border-t border-stone-200 pt-12">
          {work.image ? (
            <div
              className="relative w-full overflow-hidden bg-stone-100"
              style={layout.frameStyle}
            >
              <Image
                src={work.image}
                alt={t(work.title, locale)}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          ) : null}

          <div className="mt-6">
            <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.artist}
            </p>
            <p className="mt-2 text-sm font-medium text-stone-900">
              {t(artist.name, locale)}
            </p>
            <h2 className="mt-6 text-sm font-medium tracking-[0.06em] text-stone-900">
              {t(work.title, locale)}
            </h2>
            <p className="mt-1 text-xs text-stone-500">{work.year}</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {t(work.medium, locale)}
            </p>
            <p className="mt-1 text-xs text-stone-400">
              {l.editionSize} · {edition.copies}
              {locale === "zh" ? " 版" : locale === "fr" ? " exemplaires" : " copies"}
            </p>
            {work.dimensions ? (
              <p className="mt-1 text-xs text-stone-400">{work.dimensions}</p>
            ) : null}
            {work.description ? (
              <div className="mt-4 space-y-3 text-sm leading-[1.8] text-stone-600">
                {t(work.description, locale)
                  .split(/\n\n+/)
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
              </div>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={`/artists/${artist.slug}`}
                className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
              >
                {l.viewArtist}
              </Link>
              {hasEditionCopyPassport(edition.id, 1) ? (
                <Link
                  href={getEditionCopyPassportPath(edition.id, 1)}
                  className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                >
                  {l.viewCopyPassport}
                </Link>
              ) : null}
              {hasArtworkPassport(edition.artistSlug, edition.workId) ? (
                <Link
                  href={getArtworkPassportPath(edition.artistSlug, edition.workId)}
                  className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                >
                  {l.viewPassport}
                </Link>
              ) : null}
              <Link
                href={`/collection?artist=${artist.slug}&work=${work.id}`}
                className="inline-flex rounded-full border border-stone-900 px-4 py-2 text-[11px] font-medium tracking-[0.1em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
              >
                {l.inquiry}
              </Link>
            </div>
          </div>
        </article>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
