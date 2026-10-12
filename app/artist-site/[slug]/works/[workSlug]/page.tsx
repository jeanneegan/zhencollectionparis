import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  formatArtworkTitleForItem,
  getArtistBySlug,
  t,
} from "@/app/artists/[slug]/data";
import { createArtistSiteMetadata } from "@/app/lib/artist-site-metadata";
import {
  getArtistWorkStaticSlugs,
  resolveWorkDetail,
} from "@/app/lib/artist-site-routes";
import {
  assertEnabledArtistSiteSlug,
  enabledArtistSiteSlugs,
} from "../../artist-site-enabled";
import { ArtistSiteWorkDetailPage } from "../../artist-site-works-pages";

type PageProps = {
  params: Promise<{ slug: string; workSlug: string }>;
};

export function generateStaticParams() {
  return [...enabledArtistSiteSlugs].flatMap((slug) => {
    const artist = getArtistBySlug(slug);
    if (!artist) {
      return [];
    }
    return getArtistWorkStaticSlugs(artist).map((workSlug) => ({
      slug,
      workSlug,
    }));
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, workSlug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  const detail = resolveWorkDetail(artist, workSlug);
  if (!detail) {
    notFound();
  }

  const name = t(artist.name, "en");
  let pageTitle = name;
  if (detail.type === "series") {
    pageTitle = `${name} · ${t(detail.series.title, "en")}`;
  } else {
    pageTitle = `${name} · ${formatArtworkTitleForItem(detail.artwork, "en")}`;
  }

  return createArtistSiteMetadata({
    slug,
    title: pageTitle,
    description: t(artist.tagline, "en"),
    path: `/works/${workSlug}`,
  });
}

export default async function WorkDetailRoute({ params }: PageProps) {
  const { slug, workSlug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  if (!resolveWorkDetail(artist, workSlug)) {
    notFound();
  }
  return <ArtistSiteWorkDetailPage workSlug={workSlug} />;
}
