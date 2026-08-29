import type { Metadata } from "next";
import { OpportunitesView } from "./opportunites-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Opportunités · 机会 · Zhen Collection Paris",
  description:
    "De Paris et de Chine, vers d'autres villes du monde. · 从巴黎与中国出发，连接世界各地的城市。 · From Paris and China to cities around the world.",
});

export default function OpportunitesPage() {
  return <OpportunitesView />;
}
