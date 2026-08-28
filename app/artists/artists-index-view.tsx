"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllArtists, t, type ArtistProfile, type Locale } from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";

const pageLabels: Record<
  Locale,
  { title: string; view: string }
> = {
  zh: {
    title: "ARTISTS · 艺术家",
    view: "Voir le passeport · 查看艺术家护照",
  },
  fr: {
    title: "ARTISTS · 艺术家",
    view: "Voir le passeport · 查看艺术家护照",
  },
  en: {
    title: "ARTISTS",
    view: "View artist passport",
  },
};

function ArtistCard({ artist, locale }: { artist: ArtistProfile; locale: Locale }) {
  return (
    <li className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400">
      <div className="flex items-start gap-4">
        {artist.portrait ? (
          <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone-100">
            <Image
              src={artist.portrait}
              alt={t(artist.name, locale)}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-medium text-stone-900">
            {t(artist.name, locale)}
          </h2>
          <p className="mt-1 text-xs text-stone-500">{t(artist.practice, locale)}</p>
          {artist.tagline.zh || artist.tagline.fr || artist.tagline.en ? (
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {t(artist.tagline, locale)}
            </p>
          ) : null}
          <Link
            href={`/artists/${artist.slug}`}
            className="mt-4 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {pageLabels[locale].view}
          </Link>
        </div>
      </div>
    </li>
  );
}

export function ArtistsIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const artists = getAllArtists();

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-stone-900 md:text-3xl">
            {l.title}
          </h1>
        </header>

        <ul className="mt-12 space-y-4">
          {artists.map((artist) => (
            <ArtistCard key={artist.slug} artist={artist} locale={locale} />
          ))}
        </ul>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
