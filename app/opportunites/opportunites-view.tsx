"use client";

import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  residencyListings,
  residencySections,
  type ResidencySectionId,
} from "@/app/opportunites/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    title: string;
    empty: string;
  }
> = {
  zh: {
    title: "RÉSIDENCES · 驻地",
    empty: "项目筹备中，欢迎持续关注。",
  },
  fr: {
    title: "RÉSIDENCES · 驻地",
    empty: "Projets en préparation — restez informés.",
  },
  en: {
    title: "RÉSIDENCES",
    empty: "Programmes in preparation — follow for updates.",
  },
};

function ResidencySectionBlock({
  locale,
  sectionId,
  emptyLabel,
}: {
  locale: Locale;
  sectionId: ResidencySectionId;
  emptyLabel: string;
}) {
  const section = residencySections.find((item) => item.id === sectionId);
  const listings = residencyListings.filter((item) => item.sectionId === sectionId);

  if (!section) {
    return null;
  }

  const useSerif = locale === "zh" || locale === "fr";

  return (
    <section className="border border-stone-200 bg-stone-50/40 px-6 py-8 md:px-10 md:py-10">
      <h2 className="text-sm font-medium tracking-[0.14em] text-stone-900">
        {t(section.title, locale)}
      </h2>
      <p
        className={`${
          useSerif ? serif.className : ""
        } mt-3 text-sm leading-[1.9] text-stone-600`}
      >
        {t(section.description, locale)}
      </p>

      {listings.length > 0 ? (
        <ul className="mt-8 space-y-3">
          {listings.map((listing) => (
            <li key={listing.id}>
              {listing.href ? (
                <Link
                  href={listing.href}
                  className="block border border-stone-200 bg-white px-4 py-4 transition-colors hover:border-stone-300"
                >
                  <p className="text-sm font-medium tracking-[0.06em] text-stone-900">
                    {t(listing.title, locale)}
                  </p>
                  {listing.location ? (
                    <p className="mt-2 text-xs tracking-[0.08em] text-stone-500">
                      {t(listing.location, locale)}
                    </p>
                  ) : null}
                </Link>
              ) : (
                <div className="border border-stone-200 bg-white px-4 py-4">
                  <p className="text-sm font-medium tracking-[0.06em] text-stone-900">
                    {t(listing.title, locale)}
                  </p>
                  {listing.location ? (
                    <p className="mt-2 text-xs tracking-[0.08em] text-stone-500">
                      {t(listing.location, locale)}
                    </p>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-sm leading-[1.9] text-stone-500">{emptyLabel}</p>
      )}
    </section>
  );
}

export function OpportunitesView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-stone-900 md:text-3xl">
            {l.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-[1.9] tracking-wide text-stone-500 md:text-sm">
            De Paris et de Chine, vers d&apos;autres villes du monde.
          </p>
        </header>

        <div className="mt-12 space-y-6">
          {residencySections.map((section) => (
            <ResidencySectionBlock
              key={section.id}
              locale={locale}
              sectionId={section.id}
              emptyLabel={l.empty}
            />
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
