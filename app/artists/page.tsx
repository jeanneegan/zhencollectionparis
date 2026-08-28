import type { Metadata } from "next";
import { ArtistsIndexView } from "./artists-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Artists · 艺术家 · Zhen Collection Paris",
  description:
    "Artist passports on Zhen Collection Paris. · 巴黎臻藏平台艺术家档案。",
});

export default function ArtistsIndexPage() {
  return <ArtistsIndexView />;
}
