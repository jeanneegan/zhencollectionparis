"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ArtistProfile, Locale } from "@/app/artists/[slug]/data";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";

type ArtistSiteContextValue = {
  artist: ArtistProfile;
  linkPrefix: string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const ArtistSiteContext = createContext<ArtistSiteContextValue | null>(null);

export function ArtistSiteProvider({
  artist,
  linkPrefix,
  locale,
  setLocale,
  children,
}: ArtistSiteContextValue & { children: ReactNode }) {
  return (
    <ArtistSiteContext.Provider value={{ artist, linkPrefix, locale, setLocale }}>
      {children}
    </ArtistSiteContext.Provider>
  );
}

export function useArtistSiteLocale() {
  const { locale, setLocale } = useArtistSite();
  return { locale, setLocale, labels: artistSiteLabels[locale] };
}

export function useArtistSite() {
  const ctx = useContext(ArtistSiteContext);
  if (!ctx) {
    throw new Error("useArtistSite must be used within ArtistSiteProvider");
  }
  return ctx;
}

/** Internal routes stay on subdomain-style paths (`/works`, …). */
export function useArtistSiteHref() {
  const { linkPrefix } = useArtistSite();
  return (path: string) => {
    if (path === "/" || path === "") {
      return linkPrefix || "/";
    }
    return `${linkPrefix}${path.startsWith("/") ? path : `/${path}`}`;
  };
}
