import type { Metadata } from "next";
import { createPageMetadata, defaultDescription } from "@/app/lib/site-metadata";
import { artistSiteCanonicalUrl } from "@/app/lib/artist-site-routes";

export function createArtistSiteMetadata({
  slug,
  title,
  description = defaultDescription,
  path,
  images,
}: {
  slug: string;
  title: string;
  description?: string;
  path: string;
  images?: NonNullable<Parameters<typeof createPageMetadata>[0]["images"]>;
}): Metadata {
  const base = createPageMetadata({ title, description, images });
  const canonical = artistSiteCanonicalUrl(slug, path);

  return {
    ...base,
    alternates: {
      canonical,
    },
    openGraph: {
      ...base.openGraph,
      url: canonical,
    },
  };
}
