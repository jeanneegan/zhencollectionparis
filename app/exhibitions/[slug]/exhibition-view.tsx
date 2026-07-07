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
import { CollectionInquiryForm } from "@/app/components/collection-inquiry-form";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { MemberShareLink } from "@/app/components/member-share-link";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Exhibition } from "@/app/exhibitions/data";
import { useIsAuthenticated } from "@/app/lib/use-is-authenticated";
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
    purchase: string;
    purchaseSub: string;
    buy: string;
    priceOnRequest: string;
  }
> = {
  zh: {
    kicker: "Exposition",
    kickerSub: "展览",
    artist: "Artiste · 艺术家",
    purchase: "Acheter · 购买",
    purchaseSub: "Collection inquiry · 收藏咨询",
    buy: "Demander à acheter · 咨询购买",
    priceOnRequest: "Prix sur demande · 价格面议",
  },
  fr: {
    kicker: "Exposition",
    kickerSub: "展览",
    artist: "Artiste · 艺术家",
    purchase: "Acheter · 购买",
    purchaseSub: "Collection inquiry · 收藏咨询",
    buy: "Demander à acheter · 咨询购买",
    priceOnRequest: "Prix sur demande · 价格面议",
  },
  en: {
    kicker: "Exhibition",
    kickerSub: "",
    artist: "Artist",
    purchase: "Purchase",
    purchaseSub: "Collection inquiry",
    buy: "Inquire to purchase",
    priceOnRequest: "Price on request",
  },
};

export function ExhibitionView({
  exhibition,
  returnTo,
}: {
  exhibition: Exhibition;
  returnTo?: string;
}) {
  const [locale, setLocale] = useLocale();
  const isAuthenticated = useIsAuthenticated();
  const l = pageLabels[locale];
  const artist = getArtistBySlug(exhibition.artistSlug);
  const works =
    artist?.artworks.filter((work) => exhibition.workIds.includes(work.id)) ??
    [];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {isAuthenticated ? (
          <div className="mb-8 flex justify-center">
            <MemberShareLink
              locale={locale}
              path={`/exhibitions/${exhibition.slug}`}
            />
          </div>
        ) : null}

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
            {t(exhibition.title, locale)}
          </h1>
          <p className="mt-4 text-sm tracking-[0.08em] text-stone-500">
            {t(exhibition.artistDisplay, locale)} · {exhibition.year}
          </p>
        </header>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-[1.9] text-stone-600">
          {t(exhibition.intro, locale)}
        </p>

        <section className="mt-14 space-y-16">
          {works.map((work) => {
            const layout = getArtworkDisplayLayout({
              dimensions: work.dimensions,
              imageAspect: work.imageAspect,
              layoutPair: work.layoutPair,
              displayLayout: work.displayLayout,
              viewsLayout: work.viewsLayout,
              views: work.views,
            });

            return (
              <article key={work.id} className="border-t border-stone-200 pt-12">
                <div
                  className="relative w-full overflow-hidden bg-stone-100"
                  style={layout.frameStyle}
                >
                  <Image
                    src={work.image}
                    alt={t(work.title, locale)}
                    fill
                    className="object-contain object-center"
                    sizes={layout.imageSizes}
                  />
                </div>
                <div className="mt-5">
                  <h2 className="text-sm font-medium tracking-[0.06em] text-stone-900">
                    {t(work.title, locale)}
                  </h2>
                  <p className="mt-1 text-xs text-stone-500">{work.year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {t(work.medium, locale)}
                  </p>
                  {work.dimensions ? (
                    <p className="mt-1 text-xs text-stone-400">
                      {work.dimensions}
                    </p>
                  ) : null}
                  {work.description ? (
                    <div className="mt-4 space-y-3 text-sm leading-[1.8] text-stone-600">
                      {t(work.description, locale)
                        .split(/\n\n+/)
                        .filter(Boolean)
                        .slice(0, 1)
                        .map((paragraph) => (
                          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                        ))}
                    </div>
                  ) : null}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4">
                    <p className="text-xs tracking-[0.08em] text-stone-500">
                      {l.priceOnRequest}
                    </p>
                    <Link
                      href={`/collection?artist=${exhibition.artistSlug}&work=${work.id}`}
                      className="inline-flex rounded-full border border-stone-900 px-4 py-2 text-[11px] font-medium tracking-[0.1em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
                    >
                      {l.buy}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-16 border-t border-stone-200 pt-12">
          <header className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
              {l.purchase}
            </p>
            {locale !== "en" ? (
              <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
                {l.purchaseSub}
              </p>
            ) : null}
          </header>
          <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-[1.9] text-stone-600">
            {locale === "en"
              ? "Leave your details to inquire about acquiring a work from this exhibition."
              : "Pour acquérir une œuvre de cette exposition, laissez vos coordonnées — nous vous recontacterons rapidement. · 如需购买本展览作品，请留下联系方式，我们会尽快回复。"}
          </p>
          <CollectionInquiryForm
            locale={locale}
            artistName={artist ? t(artist.name, locale) : undefined}
            artworks={works.map(({ id, title }) => ({ id, title }))}
          />
        </section>

        <PageBottomNav locale={locale} backHref={returnTo ?? "/"} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
