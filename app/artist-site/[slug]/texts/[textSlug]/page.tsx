import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { createArtistSiteMetadata } from "@/app/lib/artist-site-metadata";
import {
  getArtistSiteTextBySlug,
  getArtistSiteTextItems,
} from "@/app/lib/artist-site-routes";
import {
  assertEnabledArtistSiteSlug,
  enabledArtistSiteSlugs,
} from "../../artist-site-enabled";
import { ArtistSiteTextDetailPage } from "../../artist-site-news-texts-pages";

type PageProps = {
  params: Promise<{ slug: string; textSlug: string }>;
};

export function generateStaticParams() {
  return [...enabledArtistSiteSlugs].flatMap((slug) => {
    const artist = getArtistBySlug(slug);
    if (!artist) {
      return [];
    }
    return getArtistSiteTextItems(artist).map(({ slug: textSlug }) => ({
      slug,
      textSlug,
    }));
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, textSlug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  const item = getArtistSiteTextBySlug(artist, textSlug);
  if (!item) {
    notFound();
  }

  let suffix = artistSiteLabels.en.texts;
  if (item.kind === "statement") {
    suffix = artistSiteLabels.en.artistStatement;
  } else if (item.kind === "hope") {
    suffix = artistSiteLabels.en.hopeToLeave;
  } else if (item.excerpt) {
    suffix = t(item.excerpt.questionFromLabel, "en");
  }

  return createArtistSiteMetadata({
    slug,
    title: `${t(artist.name, "en")} · ${suffix}`,
    description: t(artist.tagline, "en"),
    path: `/texts/${textSlug}`,
  });
}

export default async function TextDetailRoute({ params }: PageProps) {
  const { slug, textSlug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist || !assertEnabledArtistSiteSlug(slug)) {
    notFound();
  }
  if (!getArtistSiteTextBySlug(artist, textSlug)) {
    notFound();
  }
  return <ArtistSiteTextDetailPage textSlug={textSlug} />;
}
