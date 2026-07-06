"use client";

import { Noto_Serif_SC } from "next/font/google";
import { CollectionInquiryForm } from "@/app/components/collection-inquiry-form";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  type ArtistProfile,
  type Locale,
  t,
} from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    title: string;
    titleSub: string;
    intro: string;
    introSub: string;
  }
> = {
  zh: {
    title: "Collection inquiry",
    titleSub: "收藏咨询",
    intro: "如对某位艺术家或其作品有收藏意向，请留下联系方式，我们会尽快回复。",
    introSub:
      "Pour toute demande de collection concernant un artiste ou une œuvre, laissez-nous vos coordonnées.",
  },
  fr: {
    title: "Collection inquiry",
    titleSub: "收藏咨询",
    intro:
      "Pour toute demande de collection concernant un artiste ou une œuvre, laissez-nous vos coordonnées.",
    introSub:
      "如对某位艺术家或其作品有收藏意向，请留下联系方式，我们会尽快回复。",
  },
  en: {
    title: "Collection Inquiry",
    titleSub: "",
    intro:
      "If you are interested in collecting an artist or artwork, leave your details and we will respond soon.",
    introSub: "",
  },
};

export function CollectionView({
  artist,
  initialWorkId,
}: {
  artist: ArtistProfile | null;
  initialWorkId?: string;
}) {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const artistName = artist ? t(artist.name, locale) : undefined;

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.title}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.titleSub}
            </p>
          ) : null}
          <h1
            className={`${serif.className} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {locale === "en" ? l.title : `${l.title} · ${l.titleSub}`}
          </h1>
        </header>

        <div className="mt-10 space-y-4 text-center text-sm leading-[1.9] text-stone-600">
          <p>{l.intro}</p>
          {l.introSub ? <p className="text-stone-500">{l.introSub}</p> : null}
        </div>

        <CollectionInquiryForm
          locale={locale}
          artistName={artistName}
          artworks={artist?.artworks.map(({ id, title }) => ({ id, title }))}
          initialWorkId={initialWorkId}
        />

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter />
    </div>
  );
}
