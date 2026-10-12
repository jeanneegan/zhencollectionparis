import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getArtistBySlug } from "@/app/artists/[slug]/data";
import { ARTIST_SITE_SUBDOMAIN_TO_SLUG } from "@/app/lib/artist-site-host";
import { getArtistSiteLinkPrefix } from "@/app/lib/artist-site-routes";
import { ArtistSiteLayoutClient } from "./artist-site-layout-client";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

const enabledSlugs = new Set(Object.values(ARTIST_SITE_SUBDOMAIN_TO_SLUG));

export function generateStaticParams() {
  return [...enabledSlugs].map((slug) => ({ slug }));
}

export default async function ArtistSiteLayout({ children, params }: LayoutProps) {
  const { slug } = await params;

  if (!enabledSlugs.has(slug)) {
    notFound();
  }

  const artist = getArtistBySlug(slug);
  if (!artist) {
    notFound();
  }

  const host = (await headers()).get("host");
  const linkPrefix = getArtistSiteLinkPrefix(slug, host);

  return (
    <ArtistSiteLayoutClient artist={artist} linkPrefix={linkPrefix}>
      {children}
    </ArtistSiteLayoutClient>
  );
}
