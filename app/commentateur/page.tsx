import type { Metadata } from "next";
import { CommentateurHomeView } from "./commentateur-home-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title: "Espace commentateur · 评论家空间 · Zhen Collection Paris",
  description:
    "Espace membre pour les commentateurs invités — commentaires et articles. · 评论家成员空间。",
});

export default async function CommentateurPage() {
  const member = await requireMember();

  return <CommentateurHomeView member={member} />;
}
