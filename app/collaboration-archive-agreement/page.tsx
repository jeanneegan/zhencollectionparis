import type { Metadata } from "next";
import { AgreementView } from "./agreement-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title:
    "Accord de collaboration et d'archives d'artiste · Artist Collaboration & Archive Agreement · 艺术家合作与档案协议",
  description:
    "Trilingual artist collaboration and archive agreement for Zhen Collection Paris. Version 2026. · 巴黎臻藏艺术家合作与档案协议，2026 版。",
});

export default async function CollaborationArchiveAgreementPage() {
  const member = await requireMember();

  return <AgreementView member={member} />;
}
