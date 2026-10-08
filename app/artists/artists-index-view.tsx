"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  getArtistsForDirectory,
  t,
  type ArtistProfile,
  type Locale,
} from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";

const pageLabels: Record<
  Locale,
  {
    artistsTitle: string;
    artistView: string;
    artistsEmpty: string;
  }
> = {
  zh: {
    artistsTitle: "ARTISTS · 艺术家",
    artistView: "Voir le passeport · 查看艺术家护照",
    artistsEmpty: "暂无艺术家档案。",
  },
  fr: {
    artistsTitle: "ARTISTS · 艺术家",
    artistView: "Voir le passeport · 查看艺术家护照",
    artistsEmpty: "Aucun passeport d'artiste pour le moment.",
  },
  en: {
    artistsTitle: "ARTISTS",
    artistView: "View artist passport",
    artistsEmpty: "No artist passports yet.",
  },
};

function ArtistCard({
  artist,
  locale,
  viewLabel,
}: {
  artist: ArtistProfile;
  locale: Locale;
  viewLabel: string;
}) {
  return (
    <li className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400">
      <div className="flex items-start gap-4">
        {artist.portrait ? (
          <Link
            href={`/artists/${artist.slug}`}
            className="relative block h-20 w-16 shrink-0 overflow-hidden bg-stone-100 transition-opacity hover:opacity-90"
          >
            <Image
              src={artist.portrait}
              alt={t(artist.name, locale)}
              fill
              className="object-cover"
              sizes="64px"
            />
          </Link>
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
            {viewLabel}
          </Link>
        </div>
      </div>
    </li>
  );
}

export function ArtistsIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const artists = getArtistsForDirectory();

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-stone-900 md:text-3xl">
            {l.artistsTitle}
          </h1>
        </header>

        {artists.length > 0 ? (
          <ul className="mt-12 space-y-4">
            {artists.map((artist) => (
              <ArtistCard
                key={artist.slug}
                artist={artist}
                locale={locale}
                viewLabel={l.artistView}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-center text-sm leading-[1.9] text-stone-500">
            {l.artistsEmpty}
          </p>
        )}

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
