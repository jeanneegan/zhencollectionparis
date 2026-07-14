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
    title: "Inquiry",
    titleSub: "咨询",
    intro: "欢迎就艺术家、作品或合作事宜与我们联系，我们会尽快回复。",
    introSub:
      "Contactez-nous pour toute question relative à un artiste, une œuvre ou une collaboration.",
  },
  fr: {
    title: "Inquiry",
    titleSub: "咨询",
    intro:
      "Contactez-nous pour toute question relative à un artiste, une œuvre ou une collaboration.",
    introSub: "欢迎就艺术家、作品或合作事宜与我们联系，我们会尽快回复。",
  },
  en: {
    title: "Inquiry",
    titleSub: "",
    intro:
      "Contact us about an artist, artwork, or collaboration — we will respond soon.",
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
