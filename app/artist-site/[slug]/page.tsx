import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtistSiteView } from "./artist-site-view";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { ARTIST_SITE_SUBDOMAIN_TO_SLUG } from "@/app/lib/artist-site-host";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { getArtistShareImage } from "@/app/lib/page-share-image";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const enabledSlugs = new Set(Object.values(ARTIST_SITE_SUBDOMAIN_TO_SLUG));

export function generateStaticParams() {
  return [...enabledSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist || !enabledSlugs.has(slug)) {
    return createPageMetadata({ title: "Artist" });
  }

  const shareImage = getArtistShareImage(artist);

  return createPageMetadata({
    title: `${t(artist.name, "en")} · ${t(artist.name, "zh")}`,
    description: t(artist.tagline, "zh"),
    ...(shareImage ? { images: [shareImage] } : {}),
  });
}

export default async function ArtistSitePage({ params }: PageProps) {
  const { slug } = await params;

  if (!enabledSlugs.has(slug)) {
    notFound();
  }

  const artist = getArtistBySlug(slug);
  if (!artist) {
    notFound();
  }

  return <ArtistSiteView artist={artist} />;
}
