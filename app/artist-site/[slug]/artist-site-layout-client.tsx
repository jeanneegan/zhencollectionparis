"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { ArtistProfile } from "@/app/artists/[slug]/data";
import { formatArtworkTitleForItem } from "@/app/artists/[slug]/data";
import { ArtistSiteProvider } from "@/app/artist-site/artist-site-context";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { useLocale } from "@/app/lib/use-locale";
import { ArtistSiteShell } from "./artist-site-shell";

export function ArtistSiteLayoutClient({
  artist,
  linkPrefix,
  children,
}: {
  artist: ArtistProfile;
  linkPrefix: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [locale, setLocale] = useLocale();
  const labels = artistSiteLabels[locale];

  const siteTitle = formatArtworkTitleForItem(
    { title: artist.name, titleDisplay: "locale" },
    locale,
  );

  const navItems = [
    { href: "/", label: labels.home },
    { href: "/works", label: labels.works },
    { href: "/about", label: labels.bio },
    { href: "/news", label: labels.news },
    { href: "/texts", label: labels.texts },
    { href: "/shop", label: labels.shop },
    { href: "/contact", label: labels.contact },
  ];

  return (
    <ArtistSiteProvider
      artist={artist}
      linkPrefix={linkPrefix}
      locale={locale}
      setLocale={setLocale}
    >
      <ArtistSiteShell
        siteTitle={siteTitle}
        locale={locale}
        onLocaleChange={setLocale}
        menuLabel={labels.menu}
        closeLabel={labels.close}
        navItems={navItems}
        linkPrefix={linkPrefix}
        pathname={pathname}
      >
        {children}
      </ArtistSiteShell>
    </ArtistSiteProvider>
  );
}
