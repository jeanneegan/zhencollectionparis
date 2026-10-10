import type { Metadata } from "next";
import { OpportunitesView } from "./opportunites-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Résidences · 驻地 · Zhen Collection Paris",
  description:
    "ZCP artist residencies in Shenzhen. · ZCP 艺术家驻地计划：深圳。",
});

export default function OpportunitesPage() {
  return <OpportunitesView />;
}
