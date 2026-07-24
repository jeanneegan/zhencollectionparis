import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ArtistPassport } from "./artist-passport";
import { getArtistBySlug, t } from "./data";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
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

  const shareImage = getArtistShareImage(artist);

  return createPageMetadata({
    title: `${t(artist.name, "fr")} · Zhen Collection Paris`,
    description: t(artist.tagline, "fr"),
    ...(shareImage ? { images: [shareImage] } : {}),
  });
}

export default async function ArtistPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member =
    isAuthenticatedSession(session) ? getMemberBySession(session) : null;

  return (
    <ArtistPassport
      artist={artist}
      returnTo={resolveReturnTo(from)}
      member={member ?? undefined}
    />
  );
}
