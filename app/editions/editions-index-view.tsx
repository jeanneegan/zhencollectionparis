"use client";

import Image from "next/image";
import Link from "next/link";
import { getArtistBySlug, t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllEditionIds, getEditionById, getEditionShopUrl } from "@/app/edition/data";
import { useLocale } from "@/app/lib/use-locale";

const pageLabels: Record<
  Locale,
  { title: string; subtitle: string; view: string; shop: string; copies: string }
> = {
  zh: {
    title: "EDITIONS · 出版",
    subtitle: "巴黎臻藏出版计划。",
    view: "Voir l'édition · 查看出版",
    shop: "Boutique · 商店",
    copies: "版",
  },
  fr: {
    title: "EDITIONS · 出版",
    subtitle: "Collection éditoriale Zhen Collection Paris.",
    view: "Voir l'édition · 查看出版",
    shop: "Boutique · 商店",
    copies: "exemplaires",
  },
  en: {
    title: "EDITIONS",
    subtitle: "Zhen Collection Paris editions programme.",
    view: "View edition",
    shop: "Shop",
    copies: "copies",
  },
};

export function EditionsIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const editionIds = getAllEditionIds();

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
          <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-stone-600">
            {l.subtitle}
          </p>
        </header>

        <ul className="mt-12 space-y-4">
          {editionIds.map((id) => {
            const edition = getEditionById(id);
            if (!edition) {
              return null;
            }

            const artist = getArtistBySlug(edition.artistSlug);
            const work = artist?.artworks.find((item) => item.id === edition.workId);
            const shopUrl = getEditionShopUrl(id);
            if (!artist || !work) {
              return null;
            }

            return (
              <li
                key={id}
                className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400"
              >
                <div className="flex items-start gap-4">
                  {work.image ? (
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-stone-100">
                      <Image
                        src={work.image}
                        alt={t(work.title, locale)}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                      {t(edition.title, locale)}
                    </p>
                    <h2 className="mt-2 text-sm font-medium text-stone-900">
                      {t(artist.name, locale)} · {t(work.title, locale)}
                    </h2>
                    <p className="mt-1 text-xs text-stone-500">
                      {edition.year} · {edition.copies} {l.copies}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      {t(edition.intro, locale)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <Link
                        href={`/edition/${edition.id}`}
                        className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                      >
                        {l.view}
                      </Link>
                      {shopUrl ? (
                        <a
                          href={shopUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                        >
                          {l.shop}
                        </a>
                      ) : null}
                    </div>
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
