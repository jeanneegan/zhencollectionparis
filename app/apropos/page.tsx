import type { Metadata } from "next";
import { AproposView } from "./apropos-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pourquoi le Dialogue ? · 为什么是对话？",
  description:
    "Pourquoi le Dialogue — une plateforme pour la rencontre entre artistes, cultures et publics. · 对话为何存在——为艺术家、文化与公众创造相遇。",
});

export default function AproposPage() {
  return <AproposView />;
}
