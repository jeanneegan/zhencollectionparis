import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";
import { getArtistOfficialSiteUrl } from "@/app/lib/artist-site-routes";

const artistWebsiteLabels: Record<Locale, string> = {
  zh: "艺术家官网",
  fr: "Site officiel de l'artiste · 艺术家官网",
  en: "Artist website · 艺术家官网",
};

const linkClassName =
  "text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900";

export function SiteTopLinks({
  locale,
  artistSlug,
}: {
  locale: Locale;
  artistSlug: string;
}) {
  const officialSiteUrl = getArtistOfficialSiteUrl(artistSlug);
  if (!officialSiteUrl) {
    return null;
  }

  return (
    <div className="mb-10 text-center">
      <Link href={officialSiteUrl} className={linkClassName}>
        {artistWebsiteLabels[locale]}
      </Link>
    </div>
  );
}
