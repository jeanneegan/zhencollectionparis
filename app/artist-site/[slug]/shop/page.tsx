import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { createArtistSiteMetadata } from "@/app/lib/artist-site-metadata";
import { assertEnabledArtistSiteSlug } from "../artist-site-enabled";
import { ArtistSiteShopPage } from "../artist-site-about-contact-shop";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  return createArtistSiteMetadata({
    slug,
    title: `${t(artist.name, "en")} · ${artistSiteLabels.en.shop}`,
    description: t(artist.tagline, "en"),
    path: "/shop",
  });
}

export default async function ShopPage({ params }: PageProps) {
  const { slug } = await params;
  if (!assertEnabledArtistSiteSlug(slug) || !getArtistBySlug(slug)) {
    notFound();
  }
  return <ArtistSiteShopPage />;
}
