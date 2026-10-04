import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { YoungArtistsFranceView } from "./young-artists-france-view";

export const metadata: Metadata = createPageMetadata({
  title: "ZCP Young Artists · Zhen Collection Paris",
  description:
    "Long-term partnership for art-school graduates actively creating — trilingual profiles, career development, and sustainable income support. · ZCP 招募青年艺术家。",
});

export default function YoungArtistsFrancePage() {
  return <YoungArtistsFranceView />;
}
