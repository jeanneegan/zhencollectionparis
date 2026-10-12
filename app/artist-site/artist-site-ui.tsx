"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  type ArtistProfile,
  type Locale,
  formatArtworkTitleForItem,
  getArtworkDisplayLayout,
  t,
} from "@/app/artists/[slug]/data";
import { archiveDisplay } from "@/app/artist-site/artist-site-fonts";
import { artistSiteLabels } from "@/app/artist-site/artist-site-labels";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";

export { useArtistSiteLocale } from "@/app/artist-site/artist-site-context";

export function bodyFont(locale: Locale): string {
  return locale === "zh" || locale === "fr" ? serif.className : "";
}

export function ArtistSitePageMain({ children }: { children: ReactNode }) {
  return (
    <div className="px-5 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20">{children}</div>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1
      className={`${archiveDisplay.className} text-[clamp(2rem,5vw,3.25rem)] font-normal leading-[1.05] tracking-tight text-neutral-900`}
    >
      {children}
    </h1>
  );
}

export function ProseBlock({
  text,
  locale,
  className = "",
}: {
  text: string;
  locale: Locale;
  className?: string;
}) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);

  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`${bodyFont(locale)} text-[15px] leading-[1.85] text-neutral-700 md:text-base md:leading-[1.9]`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function ArtworkFigure({
  artwork,
  locale,
}: {
  artwork: ArtistProfile["artworks"][number];
  locale: Locale;
}) {
  const layout = getArtworkDisplayLayout(artwork);
  const imageSrc = artwork.image;
  if (!imageSrc) return null;

  const title = formatArtworkTitleForItem(artwork, locale);

  return (
    <figure className={`${layout.articleClass}`.trim()}>
      <div className="relative w-full bg-[#ebe8e2]" style={layout.frameStyle}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
          sizes={layout.imageSizes}
        />
      </div>
      {artwork.views?.map((view, viewIndex) => (
        <div
          key={`${artwork.id}-view-${viewIndex}`}
          className={`relative mt-6 w-full bg-[#ebe8e2] ${layout.articleClass}`}
          style={
            view.imageAspect
              ? { aspectRatio: `${view.imageAspect[0]} / ${view.imageAspect[1]}` }
              : layout.frameStyle
          }
        >
          <Image
            src={view.src}
            alt={view.label ? t(view.label, locale) : title}
            fill
            className="object-contain"
            sizes={layout.imageSizes}
          />
        </div>
      ))}
      <figcaption className="mt-4 max-w-md">
        <p className={`${bodyFont(locale)} text-base text-neutral-900`}>{title}</p>
        <p className="mt-1 text-[12px] leading-relaxed text-neutral-500">
          {artwork.year}
          {artwork.medium ? ` · ${t(artwork.medium, locale)}` : ""}
          {artwork.dimensions ? ` · ${artwork.dimensions}` : ""}
        </p>
        {artwork.description ? (
          <ProseBlock
            locale={locale}
            text={t(artwork.description, locale)}
            className="mt-4"
          />
        ) : null}
      </figcaption>
    </figure>
  );
}

export function exhibitionTypeLabel(
  type: "solo" | "duo" | "group",
  locale: Locale,
): string {
  const labels = artistSiteLabels[locale];
  if (type === "solo") return labels.solo;
  if (type === "duo") return labels.duo;
  return labels.group;
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-[13px] text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}

export function EmptyState({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <p
      className={`${bodyFont(locale)} mt-10 max-w-xl text-[15px] leading-relaxed text-neutral-600`}
    >
      {children}
    </p>
  );
}
