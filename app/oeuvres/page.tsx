import type { Metadata } from "next";
import { OeuvresIndexView } from "./oeuvres-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Artworks · 作品 · Zhen Collection Paris",
});

export default function OeuvresIndexPage() {
  return <OeuvresIndexView />;
}
