import { notFound } from "next/navigation";
import { ArtistPassport } from "./artist-passport";
import { getArtistBySlug } from "./data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArtistPage({ params }: PageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return <ArtistPassport artist={artist} />;
}
