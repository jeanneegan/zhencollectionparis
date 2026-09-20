import type { Metadata } from "next";
import { AproposView } from "./apropos-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About · 关于 · Zhen Collection Paris",
  description:
    "Why ZCP, who we are, archive, participation, and association. · 为什么巴黎臻藏、为什么对话、我们是谁与档案参与。",
});

export default function AproposPage() {
  return <AproposView />;
}
