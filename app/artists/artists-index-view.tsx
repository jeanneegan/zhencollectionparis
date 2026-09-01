"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllArtists, t, type ArtistProfile, type Locale } from "@/app/artists/[slug]/data";
import { getAllCurators, type CuratorProfile } from "@/app/curators/data";
import { useLocale } from "@/app/lib/use-locale";

type DirectoryTab = "artists" | "curators";

const pageLabels: Record<
  Locale,
  {
    artistsTitle: string;
    curatorsTitle: string;
    artistsTab: string;
    curatorsTab: string;
    artistView: string;
    curatorView: string;
    artistsEmpty: string;
    curatorsEmpty: string;
  }
> = {
  zh: {
    artistsTitle: "ARTISTS · 艺术家",
    curatorsTitle: "CURATORS · 策展人",
    artistsTab: "艺术家",
    curatorsTab: "策展人",
    artistView: "Voir le passeport · 查看艺术家护照",
    curatorView: "Voir le passeport · 查看策展人档案",
    artistsEmpty: "暂无艺术家档案。",
    curatorsEmpty: "策展人档案筹备中，欢迎持续关注。",
  },
  fr: {
    artistsTitle: "ARTISTS · 艺术家",
    curatorsTitle: "CURATORS · 策展人",
    artistsTab: "艺术家",
    curatorsTab: "策展人",
    artistView: "Voir le passeport · 查看艺术家护照",
    curatorView: "Voir le passeport · 查看策展人档案",
    artistsEmpty: "Aucun passeport d'artiste pour le moment.",
    curatorsEmpty: "Archives commissaires en préparation — restez informés.",
  },
  en: {
    artistsTitle: "ARTISTS",
    curatorsTitle: "CURATORS",
    artistsTab: "Artists",
    curatorsTab: "Curators",
    artistView: "View artist passport",
    curatorView: "View curator archive",
    artistsEmpty: "No artist passports yet.",
    curatorsEmpty: "Curator archives in preparation — follow for updates.",
  },
};

function DirectoryTabs({
  locale,
  activeTab,
  onChange,
}: {
  locale: Locale;
  activeTab: DirectoryTab;
  onChange: (tab: DirectoryTab) => void;
}) {
  const l = pageLabels[locale];
  const tabs: { id: DirectoryTab; label: string }[] = [
    { id: "artists", label: l.artistsTab },
    { id: "curators", label: l.curatorsTab },
  ];

  return (
    <div
      role="tablist"
      aria-label={locale === "en" ? "Directory" : "Annuaire · 目录"}
      className="mt-8 flex justify-center"
    >
      <div className="inline-flex rounded-full border border-stone-200 bg-stone-50 p-1">
        {tabs.map(({ id, label }) => {
          const active = activeTab === id;

          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(id)}
              className={`rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.12em] transition-colors ${
                active
                  ? "bg-stone-900 text-white"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ArtistCard({
  artist,
  locale,
  viewLabel,
}: {
  artist: ArtistProfile;
  locale: Locale;
  viewLabel: string;
}) {
  return (
    <li className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400">
      <div className="flex items-start gap-4">
        {artist.portrait ? (
          <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone-100">
            <Image
              src={artist.portrait}
              alt={t(artist.name, locale)}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-medium text-stone-900">
            {t(artist.name, locale)}
          </h2>
          <p className="mt-1 text-xs text-stone-500">{t(artist.practice, locale)}</p>
          {artist.tagline.zh || artist.tagline.fr || artist.tagline.en ? (
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {t(artist.tagline, locale)}
            </p>
          ) : null}
          <Link
            href={`/artists/${artist.slug}`}
            className="mt-4 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {viewLabel}
          </Link>
        </div>
      </div>
    </li>
  );
}

function CuratorCard({
  curator,
  locale,
  viewLabel,
}: {
  curator: CuratorProfile;
  locale: Locale;
  viewLabel: string;
}) {
  return (
    <li className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400">
      <div className="flex items-start gap-4">
        {curator.portrait ? (
          <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone-100">
            <Image
              src={curator.portrait}
              alt={t(curator.name, locale)}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-medium text-stone-900">
            {t(curator.name, locale)}
          </h2>
          <p className="mt-1 text-xs text-stone-500">{t(curator.practice, locale)}</p>
          {curator.tagline.zh || curator.tagline.fr || curator.tagline.en ? (
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {t(curator.tagline, locale)}
            </p>
          ) : null}
          <Link
            href={`/curators/${curator.slug}`}
            className="mt-4 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {viewLabel}
          </Link>
        </div>
      </div>
    </li>
  );
}

export function ArtistsIndexView() {
  const [locale, setLocale] = useLocale();
  const [activeTab, setActiveTab] = useState<DirectoryTab>("artists");
  const l = pageLabels[locale];
  const artists = getAllArtists();
  const curators = getAllCurators();
  const title = activeTab === "artists" ? l.artistsTitle : l.curatorsTitle;

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-stone-900 md:text-3xl">
            {title}
          </h1>
          <DirectoryTabs
            locale={locale}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </header>

        {activeTab === "artists" ? (
          artists.length > 0 ? (
            <ul className="mt-12 space-y-4" role="tabpanel">
              {artists.map((artist) => (
                <ArtistCard
                  key={artist.slug}
                  artist={artist}
                  locale={locale}
                  viewLabel={l.artistView}
                />
              ))}
            </ul>
          ) : (
            <p className="mt-12 text-center text-sm leading-[1.9] text-stone-500">
              {l.artistsEmpty}
            </p>
          )
        ) : curators.length > 0 ? (
          <ul className="mt-12 space-y-4" role="tabpanel">
            {curators.map((curator) => (
              <CuratorCard
                key={curator.slug}
                curator={curator}
                locale={locale}
                viewLabel={l.curatorView}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-center text-sm leading-[1.9] text-stone-500">
            {l.curatorsEmpty}
          </p>
        )}

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
