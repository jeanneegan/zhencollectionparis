import { getArtistBySlug, t, type ArtistProfile } from "@/app/artists/[slug]/data";
import type { DialogueEpisode } from "@/app/dialogue/data";
import type { Exhibition } from "@/app/exhibitions/data";
import { shareImageFromPath } from "@/app/lib/site-metadata";

export function getArtistShareImage(artist: ArtistProfile) {
  return shareImageFromPath(
    artist.portrait,
    `${t(artist.name, "fr")} · ${t(artist.name, "zh")}`,
  );
}

export function getExhibitionShareImage(exhibition: Exhibition) {
  const artist = getArtistBySlug(exhibition.artistSlug);
  const firstWork = artist?.artworks.find((work) =>
    exhibition.workIds.includes(work.id),
  );

  if (!firstWork) {
    return undefined;
  }

  return shareImageFromPath(
    firstWork.image,
    `${t(firstWork.title, "fr")} · ${t(exhibition.title, "fr")}`,
  );
}

export function getDialogueShareImage(episode: DialogueEpisode) {
  const featured = episode.featuredWorks[0];

  if (!featured) {
    return undefined;
  }

  const artist = getArtistBySlug(featured.artistSlug);
  const artwork = artist?.artworks.find((work) => work.id === featured.artworkId);
  const image = featured.image ?? artwork?.image;

  if (!image) {
    return undefined;
  }

  return shareImageFromPath(
    image,
    `${episode.title.fr} · ${episode.title.zh}`,
  );
}

export function getHomeShareImage() {
  return shareImageFromPath(
    "/artists/willy-le-nalbaut/portrait.jpg",
    "Willy Le Nalbaut · 苏泓 Su Hong",
  );
}
