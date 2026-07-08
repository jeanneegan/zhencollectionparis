import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArtistPassport } from "./artist-passport";
import { getArtistBySlug, t } from "./data";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { getArtistShareImage } from "@/app/lib/page-share-image";
import { resolveReturnTo } from "@/app/lib/return-to";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return createPageMetadata({ title: "Artist · Zhen Collection Paris" });
  }

  return createPageMetadata({
    title: `${t(artist.name, "fr")} · Zhen Collection Paris`,
    description: t(artist.tagline, "fr"),
    images: [getArtistShareImage(artist)],
  });
}

export default async function ArtistPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return <ArtistPassport artist={artist} returnTo={resolveReturnTo(from)} />;
}
