import type { Metadata } from "next";
import { AgreementView } from "./agreement-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "Accord de collaboration et d'archives d'artiste · Artist Collaboration & Archive Agreement · 艺术家合作与档案协议",
  description:
    "Trilingual artist collaboration and archive agreement for Zhen Collection Paris. Version 2026. · 巴黎臻藏艺术家合作与档案协议，2026 版。",
});

export default function CollaborationArchiveAgreementPage() {
  return <AgreementView />;
}
