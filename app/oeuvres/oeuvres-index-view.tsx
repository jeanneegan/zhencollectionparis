"use client";

import Image from "next/image";
import Link from "next/link";
import { getArtistBySlug, t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  getArtworkPassportPath,
  listArtworkPassportRoutes,
} from "@/app/lib/artwork-passport";
import { useLocale } from "@/app/lib/use-locale";

const pageLabels: Record<
  Locale,
  { title: string; view: string }
> = {
  zh: {
    title: "ARTWORKS · 作品",
    view: "Voir le passeport œuvre · 查看作品护照",
  },
  fr: {
    title: "ARTWORKS · 作品",
    view: "Voir le passeport œuvre · 查看作品护照",
  },
  en: {
    title: "ARTWORKS",
    view: "View artwork passport",
  },
};

export function OeuvresIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const routes = listArtworkPassportRoutes();

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
          {routes.map(({ artistSlug, workId }) => {
            const artist = getArtistBySlug(artistSlug);
            const artwork = artist?.artworks.find((item) => item.id === workId);
            if (!artist || !artwork) {
              return null;
            }

            return (
              <li
                key={`${artistSlug}-${workId}`}
                className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400"
              >
                <div className="flex items-start gap-4">
                  {artwork.image ? (
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-stone-100">
                      <Image
                        src={artwork.image}
                        alt={t(artwork.title, locale)}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                      {t(artist.name, locale)}
                    </p>
                    <h2 className="mt-2 text-sm font-medium text-stone-900">
                      {t(artwork.title, locale)}
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      {artwork.year} · {t(artwork.medium, locale)}
                    </p>
                    <Link
                      href={getArtworkPassportPath(artistSlug, workId)}
                      className="mt-4 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                    >
                      {l.view}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
