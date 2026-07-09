import type { Metadata } from "next";
import { CollectionneurView } from "../collectionneur-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title: "Collection du collectionneur · 藏家藏品 · Zhen Collection Paris",
  description:
    "Archive en ligne de la collection d'un collectionneur invité — œuvres, prix et informations. · 藏家线上藏品档案。",
});

export default async function CollectionPage() {
  const member = await requireMember();

  return <CollectionneurView member={member} />;
}
