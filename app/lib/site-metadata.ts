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

export const brandShareImage = {
  url: BRAND_LOGO_SRC,
  width: 420,
  height: 420,
  alt: "Zhen Collection Paris · 巴黎臻藏",
} as const;

function toTwitterImages(
  images: NonNullable<Metadata["openGraph"]>["images"],
): string[] {
  if (!images) {
    return [BRAND_LOGO_SRC];
  }

  const list = Array.isArray(images) ? images : [images];

  return list.map((image) => {
    if (typeof image === "string") {
      return image;
    }

    if (image instanceof URL) {
      return image.toString();
    }

    return image.url.toString();
  });
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  images,
}: {
  title: string;
  description?: string;
  images?: NonNullable<Metadata["openGraph"]>["images"];
}): Metadata {
  const shareImages = images ?? [brandShareImage];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: shareImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: toTwitterImages(shareImages),
    },
  };
}
