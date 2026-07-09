"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/app/components/language-switcher";
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
  MOCK_GALLERY_USER,
  type GalleryFocusId,
  type MockMember,
} from "@/app/lib/auth";
import { GALLERY_RECEIVED_MESSAGES } from "@/app/lib/gallery-messages";
import { RETURN_FROM_ESPACE, RETURN_FROM_ESPACE_EXHIBITIONS } from "@/app/lib/return-to";
import { useLocale } from "@/app/lib/use-locale";

type FocusId = GalleryFocusId;

const pageLabels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    signedInAs: string;
    memberTypeLabel: string;
    navLabel: string;
    logout: string;
    comingSoon: string;
    viewPassport: string;
    viewExhibition: string;
    galleryFollowNote: string;
    galleryFollowNotePlaceholder: string;
    modules: { id: FocusId; body: string }[];
  }
> = {
  zh: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    signedInAs: "当前登录",
    memberTypeLabel: "Type de membre · 成员类型",
    navLabel: "Navigation · 导航",
    logout: "Se déconnecter · 退出登录",
    comingSoon: "Bientôt disponible · 即将开放",
    viewPassport: "Voir le passeport · 查看档案",
    viewExhibition: "Voir l'exposition · 查看展览",
    galleryFollowNote: "Évaluation galerie · 关注画廊评价",
    galleryFollowNotePlaceholder:
      "记录您对该艺术家的观察、跟进与评价… · Notes d'observation, de suivi et d'évaluation…",
    modules: [
      {
        id: "representedArtists",
        body: "记录您代理的艺术家、合作年限、代理关系与对外可见的呈现方式。",
      },
      {
        id: "followedArtists",
        body: "标记您持续关注的艺术家——尚未代理，但正在观察、跟踪与思考的关系。",
      },
      {
        id: "exhibitions",
        body: "",
      },
      {
        id: "publicEvaluation",
        body: "收集并呈现公众对展览、艺术家与画廊本身的评价、留言与共鸣。",
      },
      {
        id: "receivedMessages",
        body: "查看发送至画廊的收藏咨询、公众留言与平台通知。",
      },
    ],
  },
  fr: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    signedInAs: "Connecté en tant que",
    memberTypeLabel: "Type de membre · 成员类型",
    navLabel: "Navigation · 导航",
    logout: "Se déconnecter · 退出登录",
    comingSoon: "Bientôt disponible · 即将开放",
    viewPassport: "Voir le passeport · 查看档案",
    viewExhibition: "Voir l'exposition · 查看展览",
    galleryFollowNote: "Évaluation galerie · 关注画廊评价",
    galleryFollowNotePlaceholder:
      "记录您对该艺术家的观察、跟进与评价… · Notes d'observation, de suivi et d'évaluation…",
    modules: [
      {
        id: "representedArtists",
        body: "Documenter les artistes que vous représentez, la durée de la relation, le statut de représentation et leur présentation visible.",
      },
      {
        id: "followedArtists",
        body: "Marquer les artistes que vous suivez — pas encore représentés, mais observés, suivis et pensés dans le temps.",
      },
      {
        id: "exhibitions",
        body: "",
      },
      {
        id: "publicEvaluation",
        body: "Collecter et présenter les évaluations, messages et résonances du public sur vos expositions, artistes et la galerie elle-même.",
      },
      {
        id: "receivedMessages",
        body: "Consultez les demandes de collection, messages du public et notifications adressés à la galerie.",
      },
    ],
  },
  en: {
    kicker: "Member space",
    kickerSub: "",
    signedInAs: "Signed in as",
    memberTypeLabel: "Member type",
    navLabel: "Navigation",
    logout: "Sign out",
    comingSoon: "Coming soon",
    viewPassport: "View passport",
    viewExhibition: "View exhibition",
    galleryFollowNote: "Gallery follow evaluation",
    galleryFollowNotePlaceholder:
      "Record your observations, follow-up, and evaluation of this artist…",
    modules: [
      {
        id: "representedArtists",
        body: "Document the artists you represent, the duration of each relationship, representation status, and how they appear publicly.",
      },
      {
        id: "followedArtists",
        body: "Mark the artists you follow—not yet represented, but observed, tracked, and considered over time.",
      },
      {
        id: "exhibitions",
        body: "",
      },
      {
        id: "publicEvaluation",
        body: "Collect and present public evaluations, messages, and resonance about your exhibitions, artists, and the gallery itself.",
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

function focusLabel(locale: Locale, id: FocusId) {
  const item = MOCK_GALLERY_USER.focus![id];
  return locale === "en" ? item.en : `${item.fr} · ${item.zh}`;
}

const artistLabels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    signedInAs: string;
    memberTypeLabel: string;
    welcome: string;
    welcomeBody: string;
    viewPassport: string;
    passportBody: string;
    editProfile: string;
    editProfileBody: string;
    viewAgreement: string;
    agreementBody: string;
    logout: string;
  }
> = {
  zh: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    signedInAs: "当前登录",
    memberTypeLabel: "Type de membre · 成员类型",
    welcome: "Bienvenue · 欢迎回来",
    welcomeBody: "在此访问您的艺术家档案与合作存档协议。",
    viewPassport: "Voir le passeport · 查看档案",
    passportBody: "查看并分享您的艺术家护照页面。",
    editProfile: "Modifier le passeport · 编辑档案",
    editProfileBody: "更新简介、创作陈述、联系方式等公开信息。",
    viewAgreement: "Accord de collaboration · 艺术家合作与档案协议",
    agreementBody: "查阅巴黎臻藏与艺术家之间的合作与档案协议。",
    logout: "Se déconnecter · 退出登录",
  },
  fr: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    signedInAs: "Connecté en tant que",
    memberTypeLabel: "Type de membre · 成员类型",
    welcome: "Bienvenue",
    welcomeBody: "Accédez ici à votre passeport artiste et à l'accord de collaboration.",
    viewPassport: "Voir le passeport · 查看档案",
    passportBody: "Consultez et partagez votre page passeport artiste.",
    editProfile: "Modifier le passeport · 编辑档案",
    editProfileBody:
      "Mettez à jour votre introduction, déclaration, coordonnées et autres informations publiques.",
    viewAgreement: "Accord de collaboration · 艺术家合作与档案协议",
    agreementBody:
      "Consultez l'accord de collaboration et d'archives d'artiste entre Zhen Collection Paris et l'artiste.",
    logout: "Se déconnecter · 退出登录",
  },
  en: {
    kicker: "Member space",
    kickerSub: "",
    signedInAs: "Signed in as",
    memberTypeLabel: "Member type",
    welcome: "Welcome back",
    welcomeBody: "Access your artist passport and collaboration archive agreement here.",
    viewPassport: "View passport",
    passportBody: "View and share your artist passport page.",
    editProfile: "Edit passport",
    editProfileBody:
      "Update your introduction, artist statement, contact details, and other public information.",
    viewAgreement: "Artist Collaboration & Archive Agreement",
    agreementBody:
      "Review the artist collaboration and archive agreement between Zhen Collection Paris and the artist.",
    logout: "Sign out",
  },
};

function ArtistEspaceView({ member }: { member: MockMember }) {
  const router = useRouter();
  const [locale, setLocale] = useLocale();
  const l = artistLabels[locale];
  const passportHref = member.artistSlug
    ? `/artists/${member.artistSlug}`
    : "/";

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/connexion");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-900"
          >
            Zhen Collection Paris
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <button
              type="button"
              onClick={handleLogout}
              className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
            >
              {l.logout}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 py-10 md:px-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          {l.kicker}
        </p>
        {locale !== "en" ? (
          <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
            {l.kickerSub}
          </p>
        ) : null}

        <div className="mt-8 border-b border-stone-200 pb-8">
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.signedInAs}
          </p>
          <p className="mt-2 text-sm font-medium text-stone-800">{member.email}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.memberTypeLabel}
          </p>
          <p className="mt-1 text-xs text-stone-500">{member.memberType[locale]}</p>
          <p className="mt-4 text-lg font-medium text-stone-900">{member.name[locale]}</p>
        </div>

        <section className="mt-10">
          <h1 className="text-sm font-medium text-stone-900">{l.welcome}</h1>
          <p className="mt-3 text-sm leading-[1.8] text-stone-600">{l.welcomeBody}</p>
        </section>

        <ul className="mt-10 space-y-4">
          <li>
            <Link
              href={passportHref}
              className="block rounded-sm border border-stone-200 p-5 transition-colors hover:border-stone-400"
            >
              <p className="text-sm font-medium text-stone-900">{l.viewPassport}</p>
              <p className="mt-2 text-sm leading-[1.8] text-stone-600">{l.passportBody}</p>
            </Link>
          </li>
          <li>
            <Link
              href="/espace/profil"
              className="block rounded-sm border border-stone-200 p-5 transition-colors hover:border-stone-400"
            >
              <p className="text-sm font-medium text-stone-900">{l.editProfile}</p>
              <p className="mt-2 text-sm leading-[1.8] text-stone-600">
                {l.editProfileBody}
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/collaboration-archive-agreement"
              className="block rounded-sm border border-stone-200 p-5 transition-colors hover:border-stone-400"
            >
              <p className="text-sm font-medium text-stone-900">{l.viewAgreement}</p>
              <p className="mt-2 text-sm leading-[1.8] text-stone-600">{l.agreementBody}</p>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export function EspaceView({ member }: { member: MockMember }) {
  if (member.type === "artist") {
    return <ArtistEspaceView member={member} />;
  }

  const userEmail = member.email;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useLocale();
  const [activeId, setActiveId] = useState<FocusId>("representedArtists");
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
    const section = searchParams.get("section");
    if (
      section === "exhibitions" ||
      section === "representedArtists" ||
      section === "followedArtists" ||
      section === "publicEvaluation" ||
      section === "receivedMessages"
    ) {
      setActiveId(section as FocusId);
    }
  }, [searchParams]);

  function updateFollowNote(slug: string, value: string) {
    setFollowNotes((current) => {
      const next = { ...current, [slug]: value };
      window.localStorage.setItem(FOLLOW_NOTES_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/connexion");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-900"
          >
            Zhen Collection Paris
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <button
              type="button"
              onClick={handleLogout}
              className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
            >
              {l.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="md:flex">
      <aside className="border-b border-stone-200 bg-stone-50/50 md:flex md:w-72 md:shrink-0 md:flex-col md:border-b-0 md:border-r">
        <div className="border-b border-stone-200 px-5 py-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.kicker}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.kickerSub}
            </p>
          ) : null}
          <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.signedInAs}
          </p>
          <p className="mt-2 text-sm font-medium text-stone-800">{userEmail}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.memberTypeLabel}
          </p>
          <p className="mt-1 text-xs text-stone-500">
            {member.memberType[locale]}
          </p>
        </div>

        <nav
          aria-label={l.navLabel}
          className="px-3 py-4 md:flex-1"
        >
          <p className="px-2 text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.navLabel}
          </p>
          <ul className="mt-3 space-y-1">
            {l.modules.map((module) => {
              const active = module.id === activeId;
              const unreadCount =
                module.id === "receivedMessages"
                  ? GALLERY_RECEIVED_MESSAGES.filter((message) => message.unread)
                      .length
                  : 0;

              return (
                <li key={module.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(module.id)}
                    className={`flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2.5 text-left text-xs leading-[1.6] tracking-[0.04em] transition-colors ${
                      active
                        ? "bg-stone-900 text-white"
                        : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                    }`}
                  >
                    <span>{focusLabel(locale, module.id)}</span>
                    {unreadCount > 0 ? (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {unreadCount}
                      </span>
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 px-6 py-8 md:px-10 md:py-12">
        <article className="max-w-2xl">
          <h2 className="text-sm font-medium tracking-[0.06em] text-stone-900">
            {focusLabel(locale, activeModule.id)}
          </h2>
          {activeModule.body ? (
            <p className="mt-4 text-sm leading-[1.9] text-stone-600">
              {activeModule.body}
            </p>
          ) : null}

          {activeId === "representedArtists" || activeId === "followedArtists" ? (
            <ul className="mt-8 space-y-4">
              {(activeId === "representedArtists"
                ? representedArtists
                : followedArtists
              ).map((artist) => (
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
                      <p className="mt-1 text-xs text-stone-500">
                        {t(artist.practice, locale)}
                      </p>
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
                        onChange={(event) =>
                          updateFollowNote(artist.slug, event.target.value)
                        }
                        rows={4}
                        placeholder={l.galleryFollowNotePlaceholder}
                        className={`${inputClass} resize-y py-3 leading-relaxed`}
                      />
                    </label>
                  ) : null}
                </li>
              ))}
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
                    <time
                      dateTime={message.date}
                      className="shrink-0 text-[11px] text-stone-400"
                    >
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
            <p className="mt-8 text-[11px] tracking-[0.08em] text-stone-400">
              {l.comingSoon}
            </p>
          )}
        </article>
      </main>
      </div>
    </div>
  );
}
