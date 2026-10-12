import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { createArtistSiteMetadata } from "@/app/lib/artist-site-metadata";
import { assertEnabledArtistSiteSlug } from "../artist-site-enabled";
import { ArtistSiteWorksIndexPage } from "../artist-site-works-pages";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  const name = t(artist.name, "en");
  return createArtistSiteMetadata({
    slug,
    title: `${name} · ${artistSiteLabels.en.works}`,
    description: t(artist.tagline, "en"),
    path: "/works",
  });
}

export default async function WorksPage({ params }: PageProps) {
  const { slug } = await params;
  if (!assertEnabledArtistSiteSlug(slug) || !getArtistBySlug(slug)) {
    notFound();
  }
  return <ArtistSiteWorksIndexPage />;
}
