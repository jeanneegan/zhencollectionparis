import type { Metadata } from "next";
import { ArtistsIndexView } from "./artists-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Artists · 艺术家 · Zhen Collection Paris",
});

export default function ArtistsIndexPage() {
  return <ArtistsIndexView />;
}
