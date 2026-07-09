"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import {
  getArtistBySlug,
  t,
  type ArtistProfile,
  type Locale,
} from "@/app/artists/[slug]/data";
import { getExhibitionBySlug } from "@/app/exhibitions/data";
import {
  GALLERY_FOLLOWED_ARTIST_SLUGS,
  GALLERY_REPRESENTED_ARTIST_SLUGS,
  type GalleryFocusId,
  type MockMember,
} from "@/app/lib/auth";
import { GALLERY_RECEIVED_MESSAGES } from "@/app/lib/gallery-messages";
import { focusLabel } from "@/app/lib/member-nav";
import { RETURN_FROM_ESPACE, RETURN_FROM_ESPACE_EXHIBITIONS } from "@/app/lib/return-to";
import { useLocale } from "@/app/lib/use-locale";

type FocusId = GalleryFocusId;

const pageLabels: Record<
  Locale,
  {
    welcome: string;
    welcomeBody: string;
    comingSoon: string;
    viewPassport: string;
    viewExhibition: string;
    galleryFollowNote: string;
    galleryFollowNotePlaceholder: string;
    modules: { id: FocusId; body: string }[];
  }
> = {
  zh: {
    welcome: "Bienvenue · 欢迎回来",
    welcomeBody:
      "请从左侧导航访问线上代理艺术家、关注艺术家、展览、收到信息与相关协议。",
    comingSoon: "Bientôt disponible · 即将开放",
    viewPassport: "Voir le passeport · 查看档案",
    viewExhibition: "Voir l'exposition en ligne · 查看线上展览",
    galleryFollowNote: "Évaluation galerie · 关注画廊评价",
    galleryFollowNotePlaceholder:
      "记录您对该艺术家的观察、跟进与评价… · Notes d'observation, de suivi et d'évaluation…",
    modules: [
      {
        id: "representedArtists",
        body: "记录您线上代理的艺术家、合作年限、代理关系与对外可见的呈现方式。",
      },
      {
        id: "followedArtists",
        body: "标记您线上持续关注的艺术家——尚未代理，但正在观察、跟踪与思考的关系。",
      },
      {
        id: "exhibitions",
        body: "",
      },
      {
        id: "receivedMessages",
        body: "查看发送至画廊的收藏咨询、公众留言与平台通知。",
      },
    ],
  },
  fr: {
    welcome: "Bienvenue",
    welcomeBody:
      "Accédez aux artistes représentés, artistes suivis, expositions, messages reçus et accords via la navigation à gauche.",
    comingSoon: "Bientôt disponible · 即将开放",
    viewPassport: "Voir le passeport · 查看档案",
    viewExhibition: "Voir l'exposition en ligne · 查看线上展览",
    galleryFollowNote: "Évaluation galerie · 关注画廊评价",
    galleryFollowNotePlaceholder:
      "记录您对该艺术家的观察、跟进与评价… · Notes d'observation, de suivi et d'évaluation…",
    modules: [
      {
        id: "representedArtists",
        body: "Documenter les artistes que vous représentez en ligne, la durée de la relation, le statut de représentation et leur présentation visible.",
      },
      {
        id: "followedArtists",
        body: "Marquer les artistes que vous suivez en ligne — pas encore représentés, mais observés, suivis et pensés dans le temps.",
      },
      {
        id: "exhibitions",
        body: "",
      },
      {
        id: "receivedMessages",
        body: "Consultez les demandes de collection, messages du public et notifications adressés à la galerie.",
      },
    ],
  },
  en: {
    welcome: "Welcome back",
    welcomeBody:
      "Access represented artists, followed artists, exhibitions, received messages, and agreements from the navigation on the left.",
    comingSoon: "Coming soon",
    viewPassport: "View passport",
    viewExhibition: "View online exhibition",
    galleryFollowNote: "Gallery follow evaluation",
    galleryFollowNotePlaceholder:
      "Record your observations, follow-up, and evaluation of this artist…",
    modules: [
      {
        id: "representedArtists",
        body: "Document the artists you represent online, the duration of each relationship, representation status, and how they appear publicly.",
      },
      {
        id: "followedArtists",
        body: "Mark the artists you follow online—not yet represented, but observed, tracked, and considered over time.",
      },
      {
        id: "exhibitions",
        body: "",
      },
      {
        id: "receivedMessages",
        body: "View collection inquiries, public messages, and platform notifications sent to the gallery.",
      },
    ],
  },
};

const FOLLOW_NOTES_STORAGE_KEY = "zcp-gallery-follow-notes";

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

function readFollowNotes(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = window.localStorage.getItem(FOLLOW_NOTES_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function artistsFromSlugs(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const artist = getArtistBySlug(slug);
    return artist ? [artist] : [];
  }) satisfies ArtistProfile[];
}

function GalleryHomeView({ member }: { member: MockMember }) {
  const [locale] = useLocale();
  const l = pageLabels[locale];

  return (
    <MemberWorkspaceLayout member={member}>
      <section>
        <h1 className="text-sm font-medium text-stone-900">{l.welcome}</h1>
        <p className="mt-3 text-sm leading-[1.8] text-stone-600">{l.welcomeBody}</p>
      </section>
    </MemberWorkspaceLayout>
  );
}

const VALID_SECTIONS: FocusId[] = [
  "representedArtists",
  "followedArtists",
  "exhibitions",
  "receivedMessages",
];

export function GalerieView({ member }: { member: MockMember }) {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  if (!section || !VALID_SECTIONS.includes(section as FocusId)) {
    return <GalleryHomeView member={member} />;
  }

  return <GallerySectionView member={member} initialSection={section as FocusId} />;
}

function GallerySectionView({
  member,
  initialSection,
}: {
  member: MockMember;
  initialSection: FocusId;
}) {
  const searchParams = useSearchParams();
  const [locale] = useLocale();
  const [activeId, setActiveId] = useState<FocusId>(initialSection);
  const l = pageLabels[locale];
  const activeModule = l.modules.find((module) => module.id === activeId)!;
  const representedArtists = artistsFromSlugs(GALLERY_REPRESENTED_ARTIST_SLUGS);
  const followedArtists = artistsFromSlugs(GALLERY_FOLLOWED_ARTIST_SLUGS);
  const [followNotes, setFollowNotes] = useState<Record<string, string>>({});
  const featuredExhibition = getExhibitionBySlug("peregrinations-girouettes-willy");

  useEffect(() => {
    setFollowNotes(readFollowNotes());
  }, []);

  useEffect(() => {
    const nextSection = searchParams.get("section");
    if (
      nextSection === "exhibitions" ||
      nextSection === "representedArtists" ||
      nextSection === "followedArtists" ||
      nextSection === "receivedMessages"
    ) {
      setActiveId(nextSection as FocusId);
    }
  }, [searchParams]);

  function updateFollowNote(slug: string, value: string) {
    setFollowNotes((current) => {
      const next = { ...current, [slug]: value };
      window.localStorage.setItem(FOLLOW_NOTES_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return (
    <MemberWorkspaceLayout member={member}>
      <article>
        <h2 className="text-sm font-medium tracking-[0.06em] text-stone-900">
          {focusLabel(locale, activeModule.id)}
        </h2>
        {activeModule.body ? (
          <p className="mt-4 text-sm leading-[1.9] text-stone-600">{activeModule.body}</p>
        ) : null}

        {activeId === "representedArtists" || activeId === "followedArtists" ? (
          <ul className="mt-8 space-y-4">
            {(activeId === "representedArtists" ? representedArtists : followedArtists).map(
              (artist) => (
                <li
                  key={artist.slug}
                  className="rounded-sm border border-stone-200 p-4 transition-colors hover:border-stone-400"
                >
                  <div className="flex gap-4">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone-100">
                      <Image
                        src={artist.portrait}
                        alt={t(artist.name, locale)}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-stone-900">
                        {t(artist.name, locale)}
                      </p>
                      <p className="mt-1 text-xs text-stone-500">{t(artist.practice, locale)}</p>
                      <p className="mt-2 text-xs leading-[1.7] text-stone-600">
                        {t(artist.tagline, locale)}
                      </p>
                      <Link
                        href={`/artists/${artist.slug}?from=${RETURN_FROM_ESPACE}`}
                        className="mt-3 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                      >
                        {l.viewPassport}
                      </Link>
                    </div>
                  </div>
                  {activeId === "followedArtists" ? (
                    <label className="mt-5 block border-t border-stone-100 pt-4">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        {l.galleryFollowNote}
                      </span>
                      <textarea
                        value={followNotes[artist.slug] ?? ""}
                        onChange={(event) => updateFollowNote(artist.slug, event.target.value)}
                        rows={4}
                        placeholder={l.galleryFollowNotePlaceholder}
                        className={`${inputClass} resize-y py-3 leading-relaxed`}
                      />
                    </label>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        ) : activeId === "exhibitions" && featuredExhibition ? (
          <div className="mt-8">
            <Link
              href={`/exhibitions/${featuredExhibition.slug}?from=${RETURN_FROM_ESPACE_EXHIBITIONS}`}
              className="block rounded-sm border border-stone-200 p-5 transition-colors hover:border-stone-400"
            >
              <p className="text-sm font-medium text-stone-900">
                {featuredExhibition.title.fr} · {featuredExhibition.title.zh}
              </p>
              <p className="mt-2 text-xs text-stone-500">
                {featuredExhibition.artistDisplay.fr} · {featuredExhibition.year}
              </p>
              <p className="mt-4 text-[11px] tracking-[0.08em] text-stone-500">
                {l.viewExhibition}
              </p>
            </Link>
          </div>
        ) : activeId === "receivedMessages" ? (
          <ul className="mt-8 space-y-4">
            {GALLERY_RECEIVED_MESSAGES.map((message) => (
              <li
                key={message.id}
                className={`rounded-sm border p-5 ${
                  message.unread
                    ? "border-stone-400 bg-stone-50/70"
                    : "border-stone-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                    {t(message.from, locale)}
                  </p>
                  <time dateTime={message.date} className="shrink-0 text-[11px] text-stone-400">
                    {message.date}
                  </time>
                </div>
                <h3 className="mt-3 text-sm font-medium text-stone-900">
                  {t(message.subject, locale)}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-stone-600">
                  {t(message.preview, locale)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 text-[11px] tracking-[0.08em] text-stone-400">{l.comingSoon}</p>
        )}
      </article>
    </MemberWorkspaceLayout>
  );
}
