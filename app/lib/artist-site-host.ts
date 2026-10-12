/** Subdomain label (first segment) → artist slug in data.ts */
export const ARTIST_SITE_SUBDOMAIN_TO_SLUG: Record<string, string> = {
  suhong: "su-hong",
};

export function resolveArtistSiteSlugFromHost(host: string): string | null {
  const hostname = host.split(":")[0].toLowerCase();
  const subdomain = hostname.split(".")[0];
  const slug = ARTIST_SITE_SUBDOMAIN_TO_SLUG[subdomain];
  if (!slug) {
    return null;
  }

  const isProductionHost = hostname.endsWith(".zhencollection.paris");
  const isLocalArtistHost =
    hostname.endsWith(".localhost") || hostname === `${subdomain}.localhost`;

  if (!isProductionHost && !isLocalArtistHost) {
    return null;
  }

  return slug;
}

export function isArtistSiteStaticAssetPath(pathname: string): boolean {
  if (pathname.startsWith("/_next")) {
    return true;
  }
  if (pathname.startsWith("/favicon")) {
    return true;
  }
  return /\.(avif|gif|ico|jpe?g|mp4|png|svg|webp|woff2?)$/i.test(pathname);
}

export function artistSiteRewritePath(
  slug: string,
  pathname: string,
): string {
  const base = `/artist-site/${slug}`;
  if (pathname === "/" || pathname === "") {
    return base;
  }
  if (pathname.startsWith(base)) {
    return pathname;
  }
  return `${base}${pathname}`;
}

export function getArtistSiteProductionOrigin(subdomain: string): string {
  return `https://${subdomain}.zhencollection.paris`;
}
