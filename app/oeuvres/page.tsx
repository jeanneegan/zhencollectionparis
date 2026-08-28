import type { Metadata } from "next";
import { OeuvresIndexView } from "./oeuvres-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Artworks · 作品 · Zhen Collection Paris",
  description:
    "Artwork passports on Zhen Collection Paris. · 巴黎臻藏作品护照档案。",
});

export default function OeuvresIndexPage() {
  return <OeuvresIndexView />;
}
