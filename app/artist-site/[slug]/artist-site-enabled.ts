import { ARTIST_SITE_SUBDOMAIN_TO_SLUG } from "@/app/lib/artist-site-host";

export const enabledArtistSiteSlugs = new Set(
  Object.values(ARTIST_SITE_SUBDOMAIN_TO_SLUG),
);

export function assertEnabledArtistSiteSlug(slug: string): boolean {
  return enabledArtistSiteSlugs.has(slug);
}
