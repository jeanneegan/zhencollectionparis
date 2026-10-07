import type { Metadata } from "next";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { ProjetsView } from "./projets-view";

export const metadata: Metadata = createPageMetadata({
  title: "Projets · 项目 · Zhen Collection Paris",
  description:
    "Annual artists programme, exhibitions, and residencies at Zhen Collection Paris. · ZCP 年度艺术家计划、展览与驻地。",
});

export default function ProjetsPage() {
  return <ProjetsView />;
}
