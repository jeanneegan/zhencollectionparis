import type { Metadata } from "next";
import { AproposView } from "./apropos-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About · 关于 · Zhen Collection Paris",
  description:
    "Who we are, archive, partners, participation, association, and contact. · 我们是谁、档案、合作、参与、协会与联系方式。",
});

export default function AproposPage() {
  return <AproposView />;
}
