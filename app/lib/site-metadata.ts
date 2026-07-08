import type { Metadata } from "next";
import { BRAND_LOGO_SRC } from "@/app/components/site-brand-logo";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const defaultDescription =
  "A platform connecting French and Chinese artists through dialogue, exhibitions and collections.";

export function resolveShareImageUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, getSiteUrl()).toString();
}

export const brandShareImage = {
  url: resolveShareImageUrl(BRAND_LOGO_SRC),
  width: 420,
  height: 420,
  alt: "Zhen Collection Paris · 巴黎臻藏",
} as const;

export function shareImageFromPath(path: string, alt: string) {
  return {
    url: resolveShareImageUrl(path),
    width: 1200,
    height: 630,
    alt,
  } as const;
}

function toTwitterImages(
  images: NonNullable<Metadata["openGraph"]>["images"],
): string[] {
  const list = Array.isArray(images) ? images : [images];

  return list.flatMap((image) => {
    if (!image) {
      return [];
    }

    if (typeof image === "string") {
      return [resolveShareImageUrl(image)];
    }

    if (image instanceof URL) {
      return [image.toString()];
    }

    return [resolveShareImageUrl(image.url.toString())];
  });
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  images,
  fallbackToLogo = true,
}: {
  title: string;
  description?: string;
  images?: NonNullable<Metadata["openGraph"]>["images"];
  fallbackToLogo?: boolean;
}): Metadata {
  const shareImages = images ?? (fallbackToLogo ? [brandShareImage] : undefined);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(shareImages ? { images: shareImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(shareImages ? { images: toTwitterImages(shareImages) } : {}),
    },
  };
}
