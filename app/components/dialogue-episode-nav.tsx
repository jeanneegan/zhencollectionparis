"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  getArtistBySlug,
  t,
  type ArtistProfile,
  type Locale,
} from "@/app/artists/[slug]/data";
import type { DialogueEpisode } from "@/app/dialogue/data";

const artistActiveClass = "bg-stone-900 text-white";
const dialogueActiveClass = "bg-[#5a2323] text-white";

function artistNavLabels(artist: ArtistProfile, locale: Locale) {
  if (locale === "en") {
    return {
      primary: t(artist.name, "en"),
      secondary: null,
    };
  }

  return {
    primary: t(artist.name, "fr"),
    secondary: t(artist.name, "zh"),
  };
}

export function DialogueEpisodeNav({
  episode,
  locale,
}: {
  episode: DialogueEpisode;
  locale: Locale;
}) {
  const pathname = usePathname();
  const dialoguePath = `/dialogue/${episode.slug}`;
  const artists = episode.artists
    .map((slug) => getArtistBySlug(slug))
    .filter((artist): artist is ArtistProfile => artist !== null);

  useEffect(() => {
    document.body.classList.add("pb-16");
    return () => {
      document.body.classList.remove("pb-16");
    };
  }, []);

  if (artists.length < 2) {
    return null;
  }

  const [artistA, artistB] = artists;
  const dialogueLabels =
    locale === "en"
      ? { primary: "Conversation", secondary: null }
      : { primary: "Conversation", secondary: "对话" };

  const items = [
    {
      href: `/artists/${artistA.slug}?dialogue=${episode.slug}`,
      ...artistNavLabels(artistA, locale),
      isDialogue: false,
      isActive: pathname === `/artists/${artistA.slug}`,
    },
    {
      href: dialoguePath,
      ...dialogueLabels,
      isDialogue: true,
      isActive: pathname.startsWith("/dialogue/"),
    },
    {
      href: `/artists/${artistB.slug}?dialogue=${episode.slug}`,
      ...artistNavLabels(artistB, locale),
      isDialogue: false,
      isActive: pathname === `/artists/${artistB.slug}`,
    },
  ];

  return (
    <nav
      aria-label="Dialogue episode navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto grid max-w-3xl grid-cols-3 px-6">
        {items.map(({ href, primary, secondary, isDialogue, isActive: active }) => {
          const mutedClass =
            isDialogue && !active
              ? "text-stone-400"
              : active
                ? "text-white/70"
                : "text-stone-400";

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-14 flex-col items-center justify-center gap-0.5 px-2 transition-colors ${
                isDialogue
                  ? active
                    ? dialogueActiveClass
                    : "bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  : active
                    ? artistActiveClass
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              }`}
            >
              <span
                className={`text-center leading-tight tracking-wide ${
                  secondary ? "text-[11px] font-medium" : "text-[10px] font-medium"
                }`}
              >
                {primary}
              </span>
              {secondary ? (
                <span className={`text-[10px] tracking-wide ${mutedClass}`}>
                  {secondary}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
