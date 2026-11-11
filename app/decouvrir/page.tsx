import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { DecouvrirView } from "./decouvrir-view";

export const metadata: Metadata = createPageMetadata({
  title: "Network · 艺术网络 · Zhen Collection Paris",
  description:
    "A network of artistic cooperation between France and China. · 连接法国与中国的艺术合作网络。",
});

export default function DecouvrirPage() {
  return <DecouvrirView />;
}
