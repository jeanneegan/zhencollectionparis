import type { Metadata } from "next";
import { CriticArticleView } from "./critic-article-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Article indépendant · 评论家独立文章 · Zhen Collection Paris",
  description:
    "Publier un article de commentaire indépendant sur Zhen Collection Paris. · 评论家独立文章页面。",
});

export default function CriticArticlePage() {
  return <CriticArticleView />;
}
