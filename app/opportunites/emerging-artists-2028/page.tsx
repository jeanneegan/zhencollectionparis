import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { EmergingArtists2028View } from "./emerging-artists-2028-view";

export const metadata: Metadata = createPageMetadata({
  title: "ZCP Emerging Artists Programme 2028 · Zhen Collection Paris",
  description:
    "Open call for 24 emerging artists — dialogues, Paris exhibition, gallery recommendations, Paris–Shenzhen residencies. Applications 21 Sep – 20 Dec 2027. · ZCP 2028青年艺术家暨Prix WE奖计划征集。",
});

export default function EmergingArtists2028Page() {
  return <EmergingArtists2028View />;
}
