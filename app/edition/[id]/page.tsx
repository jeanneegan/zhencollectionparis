import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import { EditionView } from "./edition-view";
import { getEditionById, getAllEditionIds } from "../data";
import { createPageMetadata, shareImageFromPath } from "@/app/lib/site-metadata";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllEditionIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const edition = getEditionById(id);

  if (!edition) {
    return createPageMetadata({ title: "Édition · Zhen Collection Paris" });
  }

  const artist = getArtistBySlug(edition.artistSlug);
  const work = artist?.artworks.find((item) => item.id === edition.workId);
  const shareImage = work?.image
    ? shareImageFromPath(
        work.image,
        `${t(edition.title, "fr")} · ${t(artist?.name ?? { zh: "", fr: "", en: "" }, "fr")}`,
      )
    : undefined;

  return createPageMetadata({
    title: `${t(edition.title, "fr")} · Zhen Collection Paris`,
    description: t(edition.intro, "fr"),
    ...(shareImage ? { images: [shareImage] } : {}),
  });
}

export default async function EditionPage({ params }: PageProps) {
  const { id } = await params;
  const edition = getEditionById(id);

  if (!edition) {
    notFound();
  }

  return <EditionView edition={edition} />;
}
