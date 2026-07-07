import { notFound } from "next/navigation";
import { ArtistPassport } from "./artist-passport";
import { getArtistBySlug } from "./data";
import { resolveReturnTo } from "@/app/lib/return-to";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export default async function ArtistPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return <ArtistPassport artist={artist} returnTo={resolveReturnTo(from)} />;
}
