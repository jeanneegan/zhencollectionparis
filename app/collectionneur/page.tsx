import type { Metadata } from "next";
import { CollectionneurHomeView } from "./collectionneur-home-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title: "Espace collectionneur · 藏家空间 · Zhen Collection Paris",
  description:
    "Espace membre pour les collectionneurs invités — archive de collection en ligne. · 藏家成员空间。",
});

export default async function CollectionneurPage() {
  const member = await requireMember();

  return <CollectionneurHomeView member={member} />;
}
