"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ArtistProfile } from "@/app/artists/[slug]/data";

type ArtistSiteContextValue = {
  artist: ArtistProfile;
  linkPrefix: string;
};

const ArtistSiteContext = createContext<ArtistSiteContextValue | null>(null);

export function ArtistSiteProvider({
  artist,
  linkPrefix,
  children,
}: ArtistSiteContextValue & { children: ReactNode }) {
  return (
    <ArtistSiteContext.Provider value={{ artist, linkPrefix }}>
      {children}
    </ArtistSiteContext.Provider>
  );
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
