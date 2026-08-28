"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { getArtistBySlug, t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  getCurrentDialoguePath,
  getCurrentEpisode,
  type DialogueEpisode,
} from "@/app/dialogue/data";
import { getEditionShopUrl, getLatestEdition } from "@/app/edition/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spotlightLabels: Record<
  Locale,
  {
    conversationKicker: string;
    conversationCta: string;
    editionKicker: string;
    editionMeta: (copies: number, price: number) => string;
    editionCta: string;
    festivalKicker: string;
    festivalRoute: string;
    festivalTagline: string;
    festivalCta: string;
  }
> = {
  zh: {
    conversationKicker: "CURRENT CONVERSATION · 当前对话",
    conversationCta: "DÉCOUVRIR LA CONVERSATION →",
    editionKicker: "LATEST EDITION · 最新限量作品",
    editionMeta: (copies, price) => `限量 ${copies} 版 · ${price} €`,
    editionCta: "COLLECTIONNER L'ŒUVRE →",
    festivalKicker: "FESTIVAL · 艺术节",
    festivalRoute: "Paris ↔ Shenzhen",
    festivalTagline: "在日常空间发生的国际艺术节",
    festivalCta: "Découvrir le projet · 了解项目",
  },
  fr: {
    conversationKicker: "CURRENT CONVERSATION · 当前对话",
    conversationCta: "DÉCOUVRIR LA CONVERSATION →",
    editionKicker: "LATEST EDITION · 最新限量作品",
    editionMeta: (copies, price) => `Édition de ${copies} · ${price} €`,
    editionCta: "COLLECTIONNER L'ŒUVRE →",
    festivalKicker: "FESTIVAL · 艺术节",
    festivalRoute: "Paris ↔ Shenzhen",
    festivalTagline:
      "Festival international d'art dans les espaces du quotidien",
    festivalCta: "Découvrir le projet · 了解项目",
  },
  en: {
    conversationKicker: "CURRENT CONVERSATION",
    conversationCta: "DISCOVER THE CONVERSATION →",
    editionKicker: "LATEST EDITION",
    editionMeta: (copies, price) => `Edition of ${copies} · €${price}`,
    editionCta: "COLLECT THE ARTWORK →",
    festivalKicker: "FESTIVAL",
    festivalRoute: "Paris ↔ Shenzhen",
    festivalTagline:
      "Annual international art festival in everyday spaces",
    festivalCta: "Discover the project",
  },
};

const cardClass = "border border-stone-200 bg-white";
const kickerClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400";
const spotlightCtaClass =
  "inline-flex items-center gap-2 border border-[#5a2323] px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white";
const ctaSecondaryClass =
  "inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900";

function formatEpisodeArtists(episodeArtists: string[], locale: Locale) {
  return episodeArtists
    .map((slug) => {
      const artist = getArtistBySlug(slug);
      return artist ? t(artist.name, locale) : slug;
    })
    .join(" × ");
}

function getEpisodeFeaturedImages(episode: DialogueEpisode) {
  return episode.featuredWorks
    .map(({ artistSlug, artworkId, image, displayAspect }) => {
      const artist = getArtistBySlug(artistSlug);
      const artwork = artist?.artworks.find((item) => item.id === artworkId);
      const src = image ?? artwork?.image;
      if (!artwork || !src) {
        return null;
      }

      return {
        src,
        alt: t(artwork.title, "fr"),
        aspect: displayAspect ?? artwork.imageAspect ?? [3, 4],
      };
    })
    .filter(
      (
        item,
      ): item is {
        src: string;
        alt: string;
        aspect: [number, number];
      } => item !== null,
    );
}

function SpotlightArtwork({
  src,
  alt,
  aspect,
  priority = false,
}: {
  src: string;
  alt: string;
  aspect: [number, number];
  priority?: boolean;
}) {
  return (
    <div
      className="relative w-full overflow-hidden bg-stone-100"
      style={{ aspectRatio: `${aspect[0]} / ${aspect[1]}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes="(max-width: 768px) 40vw, 280px"
        priority={priority}
      />
    </div>
  );
}

export function HomeView() {
  const [locale, setLocale] = useLocale();
  const l = spotlightLabels[locale];
  const useSerif = locale === "zh";
  const episode = getCurrentEpisode();
  const dialoguePath = getCurrentDialoguePath();
  const featuredImages = getEpisodeFeaturedImages(episode);
  const latestEdition = getLatestEdition();
  const editionArtist = latestEdition
    ? getArtistBySlug(latestEdition.artistSlug)
    : null;
  const editionWork = editionArtist?.artworks.find(
    (item) => item.id === latestEdition?.workId,
  );
  const editionShopUrl = latestEdition
    ? getEditionShopUrl(latestEdition.id)
    : null;

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        sticky={false}
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:space-y-12 md:px-8 md:py-16">
        <section className={`${cardClass} px-4 py-10 md:px-8 md:py-14`}>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(240px,300px)_minmax(0,1fr)] md:items-center md:gap-6 lg:gap-10">
            {featuredImages[0] ? (
              <div className="order-2 md:order-1">
                <SpotlightArtwork {...featuredImages[0]} priority />
              </div>
            ) : (
              <div className="hidden md:block" aria-hidden />
            )}

            <div className="order-1 px-2 text-center md:order-2 md:px-4">
              <p className={kickerClass}>{l.conversationKicker}</p>

              <h1
                className={`${
                  useSerif ? serif.className : ""
                } mt-8 text-3xl font-normal leading-tight text-[#5a2323] md:text-4xl`}
              >
                {locale === "en" ? (
                  t(episode.title, locale)
                ) : (
                  <>
                    {episode.title.fr}
                    {" · "}
                    <span>{episode.title.zh}</span>
                  </>
                )}
              </h1>

              <p className="mt-5 text-sm tracking-[0.06em] text-stone-700">
                {formatEpisodeArtists(episode.artists, locale)}
              </p>

              <div className="mt-10 flex justify-center">
                <Link href={dialoguePath} className={spotlightCtaClass}>
                  {l.conversationCta}
                </Link>
              </div>
            </div>

            {featuredImages[1] ? (
              <div className="order-3">
                <SpotlightArtwork {...featuredImages[1]} />
              </div>
            ) : (
              <div className="hidden md:block" aria-hidden />
            )}
          </div>
        </section>

        {latestEdition && editionArtist && editionWork && editionShopUrl ? (
          <section className={`${cardClass} overflow-hidden`}>
            <div className="grid md:grid-cols-[1.15fr_1fr] md:items-stretch">
              {editionWork.image ? (
                <div className="relative min-h-[320px] bg-stone-100 md:min-h-[460px]">
                  <Image
                    src={editionWork.image}
                    alt={t(editionWork.title, locale)}
                    fill
                    className="object-contain object-center p-4 md:p-8"
                    sizes="(max-width: 768px) 100vw, 55vw"
                    priority
                  />
                </div>
              ) : null}

              <div className="flex flex-col justify-center px-6 py-10 md:px-10 md:py-14">
                <p className={kickerClass}>{l.editionKicker}</p>

                <p className="mt-8 text-sm font-medium tracking-[0.06em] text-stone-900">
                  {t(editionArtist.name, locale)}
                </p>

                <p
                  className={`${
                    useSerif ? serif.className : ""
                  } mt-4 text-2xl font-normal leading-tight text-[#5a2323] md:text-3xl`}
                >
                  {locale === "en" ? (
                    <>
                      {t(editionWork.title, locale)},{" "}
                      {latestEdition.workDisplayYear ?? editionWork.year}
                    </>
                  ) : (
                    <>
                      {editionWork.title.fr},{" "}
                      {latestEdition.workDisplayYear ?? editionWork.year}
                      {" · "}
                      <span>{editionWork.title.zh}</span>
                    </>
                  )}
                </p>

                <p className="mt-4 text-xs tracking-[0.08em] text-stone-500">
                  {l.editionMeta(
                    latestEdition.shopCopies ?? latestEdition.copies,
                    latestEdition.shopPriceEur ?? 0,
                  )}
                </p>

                <div className="mt-10">
                  <a
                    href={editionShopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={spotlightCtaClass}
                  >
                    {l.editionCta}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className={`${cardClass} px-6 py-10 text-center md:px-10 md:py-12`}>
          <p className={kickerClass}>{l.festivalKicker}</p>

          <p className="mt-8 text-sm font-medium tracking-[0.12em] text-stone-700">
            {l.festivalRoute}
          </p>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-4 max-w-md text-sm leading-[1.9] text-stone-600`}
          >
            {l.festivalTagline}
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/festival" className={ctaSecondaryClass}>
              {l.festivalCta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter wide locale={locale} />
    </div>
  );
}
