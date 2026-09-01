import type { Metadata } from "next";
import { OpportunitesView } from "./opportunites-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Résidences · 驻地 · Zhen Collection Paris",
  description:
    "ZCP Residencies, partner residencies, and open residencies across France, China, and other cities. · 巴黎臻藏发起、合作及开放申请的驻地项目。",
});

export default function OpportunitesPage() {
  return <OpportunitesView />;
}
