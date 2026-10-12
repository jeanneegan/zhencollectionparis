import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { createArtistSiteMetadata } from "@/app/lib/artist-site-metadata";
import {
  getArtistSiteNewsBySlug,
  getArtistSiteNewsItems,
} from "@/app/lib/artist-site-routes";
import {
  assertEnabledArtistSiteSlug,
  enabledArtistSiteSlugs,
} from "../../artist-site-enabled";
import { ArtistSiteNewsDetailPage } from "../../artist-site-news-texts-pages";

type PageProps = {
  params: Promise<{ slug: string; newsSlug: string }>;
};

export function generateStaticParams() {
  return [...enabledArtistSiteSlugs].flatMap((slug) => {
    const artist = getArtistBySlug(slug);
    if (!artist) {
      return [];
    }
    return getArtistSiteNewsItems(artist).map(({ slug: newsSlug }) => ({
      slug,
      newsSlug,
    }));
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, newsSlug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  const item = getArtistSiteNewsBySlug(artist, newsSlug);
  if (!item) {
    notFound();
  }
  return createArtistSiteMetadata({
    slug,
    title: `${t(artist.name, "en")} · ${t(item.exhibition.title, "en")}`,
    description: t(artist.tagline, "en"),
    path: `/news/${newsSlug}`,
  });
}

export default async function NewsDetailRoute({ params }: PageProps) {
  const { slug, newsSlug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  if (!getArtistSiteNewsBySlug(artist, newsSlug)) {
    notFound();
  }
  return <ArtistSiteNewsDetailPage newsSlug={newsSlug} />;
}
