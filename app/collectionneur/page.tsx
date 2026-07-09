import type { Metadata } from "next";
import { CollectionneurView } from "./collectionneur-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Collection du collectionneur · 藏家藏品 · Zhen Collection Paris",
  description:
    "Archive en ligne de la collection d'un collectionneur invité — œuvres, prix et informations. · 藏家线上藏品档案。",
});

export default function CollectionneurPage() {
  return <CollectionneurView />;
}
