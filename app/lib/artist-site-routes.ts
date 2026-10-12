import type { ArtistProfile } from "@/app/artists/[slug]/data";
import { getArtistPassportArtworks, t } from "@/app/artists/[slug]/data";
import {
  ARTIST_SITE_SUBDOMAIN_TO_SLUG,
  getArtistSiteProductionOrigin,
  resolveArtistSiteSlugFromHost,
} from "@/app/lib/artist-site-host";
import type { ArtistDialogueExcerpt } from "@/app/lib/artist-site-dialogue";
import { getSuHongDialogueExcerpts } from "@/app/lib/artist-site-dialogue";
import { getEpisodeBySlug } from "@/app/dialogue/data";

const SLUG_TO_SUBDOMAIN: Record<string, string> = Object.fromEntries(
  Object.entries(ARTIST_SITE_SUBDOMAIN_TO_SLUG).map(([sub, slug]) => [slug, sub]),
);

export function getArtistSiteSubdomain(slug: string): string | null {
  return SLUG_TO_SUBDOMAIN[slug] ?? null;
}

export function getArtistSiteCanonicalOrigin(slug: string): string {
  const sub = getArtistSiteSubdomain(slug);
  if (!sub) {
    return "https://www.zhencollection.paris";
  }
  return getArtistSiteProductionOrigin(sub);
}

export function artistSiteCanonicalUrl(slug: string, path: string): string {
  const origin = getArtistSiteCanonicalOrigin(slug);
  if (path === "/" || path === "") {
    return `${origin}/`;
  }
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Path prefix for Next.js `Link` on main site vs subdomain. */
export function getArtistSiteLinkPrefix(
  artistSlug: string,
  host: string | null,
): string {
  const fromHost = host ? resolveArtistSiteSlugFromHost(host) : null;
  return fromHost === artistSlug ? "" : `/artist-site/${artistSlug}`;
}

function slugifyAscii(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

export type ArtistSiteNewsItem = {
  slug: string;
  exhibition: ArtistProfile["exhibitions"][number];
};

export function getArtistSiteNewsItems(
  artist: ArtistProfile,
): ArtistSiteNewsItem[] {
  const seen = new Map<string, number>();

  return artist.exhibitions.map((exhibition, index) => {
    const base = `${exhibition.year}-${slugifyAscii(t(exhibition.title, "en")) || "exhibition"}`;
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const slug = count === 0 ? base : `${base}-${count + 1}`;
    return { slug, exhibition };
  });
}

export function getArtistSiteNewsBySlug(
  artist: ArtistProfile,
  newsSlug: string,
): ArtistSiteNewsItem | null {
  return getArtistSiteNewsItems(artist).find((item) => item.slug === newsSlug) ?? null;
}

export type ArtistSiteTextKind = "statement" | "hope" | "dialogue";

export type ArtistSiteTextItem = {
  slug: string;
  kind: ArtistSiteTextKind;
  excerpt?: ArtistDialogueExcerpt;
};

export function getArtistSiteTextItems(artist: ArtistProfile): ArtistSiteTextItem[] {
  const items: ArtistSiteTextItem[] = [
    { slug: "artist-statement", kind: "statement" },
  ];

  if (t(artist.hopeToLeave, "zh").trim() || t(artist.hopeToLeave, "en").trim()) {
    items.push({ slug: "hope-to-leave", kind: "hope" });
  }

  if (artist.slug === "su-hong") {
    const episode = getEpisodeBySlug("202609");
    if (episode) {
      for (const excerpt of getSuHongDialogueExcerpts(episode)) {
        items.push({ slug: excerpt.id, kind: "dialogue", excerpt });
      }
    }
  }

  return items;
}

export function getArtistSiteTextBySlug(
  artist: ArtistProfile,
  textSlug: string,
): ArtistSiteTextItem | null {
  return getArtistSiteTextItems(artist).find((item) => item.slug === textSlug) ?? null;
}

export type WorkSection = {
  series: NonNullable<ArtistProfile["series"]>[number] | null;
  seriesKey: string;
  artworks: ArtistProfile["artworks"];
};

export function getArtistWorkSections(artist: ArtistProfile): WorkSection[] {
  const artworks = getArtistPassportArtworks(artist);
  const order: string[] = [];
  const map = new Map<string, ArtistProfile["artworks"]>();

  for (const artwork of artworks) {
    const key = artwork.seriesId ?? "_ungrouped";
    if (!map.has(key)) {
      order.push(key);
      map.set(key, []);
    }
    map.get(key)!.push(artwork);
  }

  return order.map((key) => ({
    series:
      key === "_ungrouped"
        ? null
        : (artist.series?.find((item) => item.id === key) ?? null),
    seriesKey: key,
    artworks: map.get(key) ?? [],
  }));
}

export function getArtistSeriesById(
  artist: ArtistProfile,
  seriesId: string,
): NonNullable<ArtistProfile["series"]>[number] | null {
  return artist.series?.find((item) => item.id === seriesId) ?? null;
}

export function getArtistArtworkById(
  artist: ArtistProfile,
  artworkId: string,
): ArtistProfile["artworks"][number] | null {
  return (
    getArtistPassportArtworks(artist).find((item) => item.id === artworkId) ?? null
  );
}

export function resolveWorkDetail(
  artist: ArtistProfile,
  workSlug: string,
):
  | { type: "series"; series: NonNullable<ArtistProfile["series"]>[number] }
  | { type: "artwork"; artwork: ArtistProfile["artworks"][number] }
  | null {
  const series = getArtistSeriesById(artist, workSlug);
  if (series) {
    return { type: "series", series };
  }
  const artwork = getArtistArtworkById(artist, workSlug);
  if (artwork) {
    return { type: "artwork", artwork };
  }
  return null;
}

export function getArtistWorkStaticSlugs(artist: ArtistProfile): string[] {
  const slugs = new Set<string>();
  for (const series of artist.series ?? []) {
    slugs.add(series.id);
  }
  for (const artwork of getArtistPassportArtworks(artist)) {
    slugs.add(artwork.id);
  }
  return [...slugs];
}
