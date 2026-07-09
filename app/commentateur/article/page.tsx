import type { Metadata } from "next";
import { CriticArticleView } from "./critic-article-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title: "Article indépendant · 评论家独立文章 · Zhen Collection Paris",
  description:
    "Publier un article de commentaire indépendant sur Zhen Collection Paris. · 评论家独立文章页面。",
});

export default async function CriticArticlePage() {
  const member = await requireMember();

  return <CriticArticleView member={member} />;
}
