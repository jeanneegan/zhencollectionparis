import type { Metadata } from "next";
import { AproposView } from "./apropos-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pourquoi Zhen Collection Paris ? · 为什么是巴黎臻藏？",
  description:
    "Pourquoi Zhen Collection Paris existe — une plateforme pour la rencontre entre artistes, cultures et publics. · 巴黎臻藏为何存在——为艺术家、文化与公众创造相遇。",
});

export default function AproposPage() {
  return <AproposView />;
}
