import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { createArtistSiteMetadata } from "@/app/lib/artist-site-metadata";
import { getArtistShareImage } from "@/app/lib/page-share-image";
import { assertEnabledArtistSiteSlug } from "./artist-site-enabled";
import { ArtistSiteHomePage } from "./artist-site-home";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    return createArtistSiteMetadata({
      slug,
      title: "Artist",
      path: "/",
    });
  }

  const shareImage = getArtistShareImage(artist);

  return createArtistSiteMetadata({
    slug,
    title: `${t(artist.name, "en")} · ${t(artist.name, "zh")}`,
    description: t(artist.tagline, "zh"),
    path: "/",
    ...(shareImage ? { images: [shareImage] } : {}),
  });
}

export default async function ArtistSiteHomeRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }

  const artist = getArtistBySlug(slug);
  if (!artist) {
    notFound();
  }

  return <ArtistSiteHomePage />;
}
