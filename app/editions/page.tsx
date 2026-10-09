import type { Metadata } from "next";
import { EditionsIndexView } from "./editions-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Collection · 收藏 · Zhen Collection Paris",
  description:
    "Collect online or through confirmed local partners. · 在线购买与伙伴收藏。",
});

export default function EditionsIndexPage() {
  return <EditionsIndexView />;
}
