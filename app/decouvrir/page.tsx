import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { DecouvrirView } from "./decouvrir-view";

export const metadata: Metadata = createPageMetadata({
  title: "Collection · Découvrir les œuvres · Zhen Collection Paris",
  description:
    "Discover works presented by Zhen Collection Paris, and where they are offered. · 了解巴黎臻藏所介绍的作品及其提供之处。",
});

export default function DecouvrirPage() {
  return <DecouvrirView />;
}
