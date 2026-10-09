import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { ArtistesFrancaisEnChineView } from "./artistes-francais-en-chine-view";

export const metadata: Metadata = createPageMetadata({
  title: "Artistes français en Chine · 法国艺术家走进中国 · Zhen Collection Paris",
  description:
    "Chinese documentation, cross-cultural dialogue, and local partnership support for French-based artists. · 中文资料、跨文化对话与本地合作。",
});

export default function ArtistesFrancaisEnChinePage() {
  return <ArtistesFrancaisEnChineView />;
}
