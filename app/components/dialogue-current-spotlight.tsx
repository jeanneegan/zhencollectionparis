"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import {
  formatArtworkTitle,
  getArtistBySlug,
  t,
  type Locale,
} from "@/app/artists/[slug]/data";
import {
  getCurrentDialoguePath,
  getCurrentEpisode,
  type DialogueEpisode,
} from "@/app/dialogue/data";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const conversationLabels: Record<
  Locale,
  { kicker: string; cta: string }
> = {
  zh: {
    kicker: "CURRENT CONVERSATION · 当前对话",
    cta: "Découvrir la conversation · 进入对话 →",
  },
  fr: {
    kicker: "CURRENT CONVERSATION · 当前对话",
    cta: "Découvrir la conversation · 进入对话 →",
  },
  en: {
    kicker: "CURRENT CONVERSATION",
    cta: "DISCOVER THE CONVERSATION →",
  },
};

const cardClass = "border border-stone-200 bg-white";
const kickerClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400";
const spotlightCtaClass =
  "inline-flex w-full items-center justify-center gap-2 border border-[#5a2323] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white md:w-auto md:py-2.5";

function formatEpisodeArtists(episodeArtists: string[], locale: Locale) {
  return episodeArtists
    .map((slug) => {
      const artist = getArtistBySlug(slug);
      return artist ? t(artist.name, locale) : slug;
    })
    .join(" × ");
}

function getEpisodeArtistPortraits(episode: DialogueEpisode, locale: Locale) {
  return episode.artists
    .map((artistSlug) => {
      const artist = getArtistBySlug(artistSlug);
      if (!artist?.portrait) {
        return null;
      }

      return {
        href: `/artists/${artistSlug}`,
        src: artist.portrait,
        alt: t(artist.name, locale),
        aspect: [1, 1] as [number, number],
        credit: artist.portraitCredit,
      };
    })
    .filter(
      (
        item,
      ): item is {
        href: string;
        src: string;
        alt: string;
        aspect: [number, number];
        credit: string | undefined;
      } => item !== null,
    );
}

function SpotlightPortrait({
  href,
  src,
  alt,
  aspect,
  credit,
  priority = false,
}: {
  href?: string;
  src: string;
  alt: string;
  aspect: [number, number];
  credit?: string;
  priority?: boolean;
}) {
  const imageBlock = (
    <div
      className="relative w-full overflow-hidden bg-stone-100"
      style={{ aspectRatio: `${aspect[0]} / ${aspect[1]}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 45vw, 280px"
        priority={priority}
      />
    </div>
  );

  return (
    <div>
      {href ? (
        <Link
          href={href}
          className="block transition-opacity hover:opacity-90"
        >
          {imageBlock}
        </Link>
      ) : (
        imageBlock
      )}
      {credit ? (
        <p className="mt-1 text-right text-[9px] tracking-[0.04em] text-stone-400">
          {credit}
        </p>
      ) : null}
    </div>
  );
}

export function DialogueCurrentSpotlight({ locale }: { locale: Locale }) {
  const l = conversationLabels[locale];
  const useSerif = locale === "zh";
  const episode = getCurrentEpisode();
  const dialoguePath = getCurrentDialoguePath();
  const artistPortraits = getEpisodeArtistPortraits(episode, locale);

  return (
    <section className={`${cardClass} px-4 py-8 md:px-8 md:py-14`}>
      <div className="md:hidden">
        <p className={`${kickerClass} text-center`}>{l.kicker}</p>

        {artistPortraits.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {artistPortraits.map((portrait, index) => (
              <SpotlightPortrait
                key={portrait.href}
                {...portrait}
                priority={index === 0}
              />
            ))}
          </div>
        ) : null}

        <div className="mt-8 text-center">
          <h2
            className={`${
              useSerif ? serif.className : ""
            } text-3xl font-normal leading-tight text-[#5a2323]`}
          >
            {formatArtworkTitle(episode.title, locale)}
          </h2>

          <p className="mt-4 text-sm tracking-[0.06em] text-stone-700">
            {formatEpisodeArtists(episode.artists, locale)}
          </p>

          <div className="mt-8">
            <Link href={dialoguePath} className={spotlightCtaClass}>
              {l.cta}
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(240px,300px)_minmax(0,1fr)] md:items-center lg:gap-10">
        {artistPortraits[0] ? (
          <SpotlightPortrait {...artistPortraits[0]} priority />
        ) : (
          <div aria-hidden />
        )}

        <div className="px-4 text-center">
          <p className={kickerClass}>{l.kicker}</p>

          <h2
            className={`${
              useSerif ? serif.className : ""
            } mt-8 text-3xl font-normal leading-tight text-[#5a2323] md:text-4xl`}
          >
            {formatArtworkTitle(episode.title, locale)}
          </h2>

          <p className="mt-5 text-sm tracking-[0.06em] text-stone-700">
            {formatEpisodeArtists(episode.artists, locale)}
          </p>

          <div className="mt-10 flex justify-center">
            <Link href={dialoguePath} className={spotlightCtaClass}>
              {l.cta}
            </Link>
          </div>
        </div>

        {artistPortraits[1] ? (
          <SpotlightPortrait {...artistPortraits[1]} />
        ) : (
          <div aria-hidden />
        )}
      </div>
    </section>
  );
}
