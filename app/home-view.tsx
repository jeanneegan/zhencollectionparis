"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { getArtistBySlug, t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  formatEpisodeMonth,
  getCurrentDialoguePath,
  getCurrentEpisode,
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
    conversationCta: "Découvrir la conversation · 进入对话",
    editionKicker: "LATEST EDITION · 最新出版",
    editionMeta: (copies, price) => `${copies} 版 · €${price}`,
    editionCta: "Collectionner l'œuvre · 收藏作品",
    festivalKicker: "FESTIVAL · 艺术节",
    festivalRoute: "Paris ↔ Shenzhen",
    festivalTagline: "在日常空间发生的国际艺术节",
    festivalCta: "Découvrir le projet · 了解项目",
  },
  fr: {
    conversationKicker: "CURRENT CONVERSATION · 当前对话",
    conversationCta: "Découvrir la conversation · 进入对话",
    editionKicker: "LATEST EDITION · 最新出版",
    editionMeta: (copies, price) =>
      `Tirage de ${copies} exemplaires · ${price} €`,
    editionCta: "Collectionner l'œuvre · 收藏作品",
    festivalKicker: "FESTIVAL · 艺术节",
    festivalRoute: "Paris ↔ Shenzhen",
    festivalTagline:
      "Festival international d'art dans les espaces du quotidien",
    festivalCta: "Découvrir le projet · 了解项目",
  },
  en: {
    conversationKicker: "CURRENT CONVERSATION",
    conversationCta: "Discover the conversation",
    editionKicker: "LATEST EDITION",
    editionMeta: (copies, price) => `Edition of ${copies} · €${price}`,
    editionCta: "Collect the artwork",
    festivalKicker: "FESTIVAL",
    festivalRoute: "Paris ↔ Shenzhen",
    festivalTagline:
      "Annual international art festival in everyday spaces",
    festivalCta: "Discover the project",
  },
};

const cardClass =
  "border border-stone-200 bg-stone-50/50 px-6 py-10 md:px-10 md:py-12";
const kickerClass =
  "text-center text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400";
const ctaClass =
  "inline-flex items-center gap-2 rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white";
const ctaSecondaryClass =
  "inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900";

function SpotlightKicker({ children }: { children: string }) {
  return <p className={kickerClass}>{children}</p>;
}

function formatEpisodeArtists(episodeArtists: string[], locale: Locale) {
  return episodeArtists
    .map((slug) => {
      const artist = getArtistBySlug(slug);
      return artist ? t(artist.name, locale) : slug;
    })
    .join(" × ");
}

export function HomeView() {
  const [locale, setLocale] = useLocale();
  const l = spotlightLabels[locale];
  const useSerif = locale === "zh";
  const episode = getCurrentEpisode();
  const dialoguePath = getCurrentDialoguePath();
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
        sticky={false}
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl space-y-8 px-6 py-12 md:space-y-10 md:py-16">
        <section className={cardClass}>
          <SpotlightKicker>{l.conversationKicker}</SpotlightKicker>

          <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-stone-400">
            {locale === "en" ? (
              <>
                Episode {episode.episode} ·{" "}
                {formatEpisodeMonth(episode.month, locale)}
              </>
            ) : (
              <>
                <span className="font-medium uppercase tracking-[0.25em]">
                  Épisode {episode.episode}
                </span>
                {" · "}
                <span className={useSerif ? serif.className : ""}>
                  第{episode.episode}期
                </span>
                {" · "}
                {formatEpisodeMonth(episode.month, "fr")}
                {locale === "zh" ? (
                  <>
                    {" · "}
                    <span className={serif.className}>
                      {formatEpisodeMonth(episode.month, "zh")}
                    </span>
                  </>
                ) : null}
              </>
            )}
          </p>

          <h1
            className={`${
              useSerif ? serif.className : ""
            } mt-8 text-center text-2xl font-normal text-[#5a2323] md:text-3xl`}
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

          <p className="mt-4 text-center text-sm tracking-[0.06em] text-stone-600">
            {formatEpisodeArtists(episode.artists, locale)}
          </p>

          <div className="mt-10 flex justify-center">
            <Link href={dialoguePath} className={ctaClass}>
              {l.conversationCta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {latestEdition && editionArtist && editionWork && editionShopUrl ? (
          <section className={cardClass}>
            <SpotlightKicker>{l.editionKicker}</SpotlightKicker>

            <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
              {editionWork.image ? (
                <div className="relative h-40 w-32 shrink-0 overflow-hidden bg-stone-100">
                  <Image
                    src={editionWork.image}
                    alt={t(editionWork.title, locale)}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              ) : null}
              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="text-sm font-medium tracking-[0.06em] text-stone-900">
                  {t(editionArtist.name, locale)}
                </p>
                <p
                  className={`${
                    useSerif ? serif.className : ""
                  } mt-2 text-lg text-stone-800`}
                >
                  {locale === "en" ? (
                    <>
                      {t(editionWork.title, locale)},{" "}
                      {latestEdition.workDisplayYear ?? editionWork.year}
                    </>
                  ) : (
                    <>
                      {editionWork.title.fr}, {latestEdition.workDisplayYear ?? editionWork.year}
                      {" · "}
                      <span>{editionWork.title.zh}</span>
                    </>
                  )}
                </p>
                <p className="mt-3 text-xs tracking-[0.08em] text-stone-500">
                  {l.editionMeta(
                    latestEdition.shopCopies ?? latestEdition.copies,
                    latestEdition.shopPriceEur ?? 0,
                  )}
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={editionShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClass}
              >
                {l.editionCta}
                <span aria-hidden>→</span>
              </a>
            </div>
          </section>
        ) : null}

        <section className={cardClass}>
          <SpotlightKicker>{l.festivalKicker}</SpotlightKicker>

          <p className="mt-8 text-center text-sm font-medium tracking-[0.12em] text-stone-700">
            {l.festivalRoute}
          </p>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-4 max-w-md text-center text-sm leading-[1.9] text-stone-600`}
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

        <p className="text-center">
          <Link
            href="/dialogues"
            className="text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {locale === "en"
              ? "All conversations →"
              : "Voir toutes les conversations · 查看全部对话 →"}
          </Link>
        </p>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
