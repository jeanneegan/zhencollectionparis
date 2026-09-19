import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { EmergingArtists2027View } from "./emerging-artists-2027-view";

export const metadata: Metadata = createPageMetadata({
  title: "ZCP Emerging Artists Programme 2027 · Zhen Collection Paris",
  description:
    "Open call for 24 emerging artists — dialogues, Paris exhibition, gallery recommendations, Paris–Shenzhen residencies. Applications 21 Sep – 20 Dec 2026. · ZCP 2027青年艺术家计划征集。",
});

export default function EmergingArtists2027Page() {
  return <EmergingArtists2027View />;
}
