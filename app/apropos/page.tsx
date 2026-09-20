import type { Metadata } from "next";
import { AproposView } from "./apropos-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About · 关于 · Zhen Collection Paris",
  description:
    "Who we are, archive, participation, and association. · 我们是谁、档案、参与与协会信息。",
});

export default function AproposPage() {
  return <AproposView />;
}
