import { getArtistBySlug } from "@/app/artists/[slug]/data";
import { CollectionView } from "./collection-view";

type PageProps = {
  searchParams: Promise<{ artist?: string; work?: string }>;
};

export default async function CollectionPage({ searchParams }: PageProps) {
  const { artist: artistSlug, work: workId } = await searchParams;
  const artist = artistSlug ? getArtistBySlug(artistSlug) : null;

  return (
    <CollectionView
      artist={artist}
      initialWorkId={workId ?? undefined}
    />
  );
}
