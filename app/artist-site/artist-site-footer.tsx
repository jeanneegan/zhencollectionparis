"use client";

import type { Locale } from "@/app/artists/[slug]/data";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { bodyFont } from "@/app/artist-site/artist-site-ui";
import { ZCP_PUBLIC_SITE_ORIGIN } from "@/app/lib/zcp-public-site";

const ZCP_BRAND = "Zhen Collection Paris";

export function ArtistSiteFooter({ locale }: { locale: Locale }) {
  const prefix = artistSiteLabels[locale].siteMaintainedByPrefix;

  return (
    <footer className="border-t border-neutral-300/40 bg-[#f6f4ef] px-5 py-12 md:px-12 lg:px-16">
      <p
        className={`max-w-3xl text-[11px] leading-relaxed tracking-wide text-neutral-500 ${bodyFont(locale)}`}
      >
        {prefix}
        <a
          href={ZCP_PUBLIC_SITE_ORIGIN}
          className="text-neutral-600 underline-offset-2 transition-colors hover:text-neutral-800 hover:underline"
        >
          {ZCP_BRAND}
        </a>
      </p>
    </footer>
  );
}
