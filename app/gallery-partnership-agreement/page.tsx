import type { Metadata } from "next";
import { GalleryPartnershipAgreementView } from "./gallery-partnership-agreement-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title:
    "Gallery Partnership Agreement · Accord de partenariat galerie · 合作画廊协议 · Zhen Collection Paris",
  description:
    "Gallery partnership terms for Zhen Collection Paris partner galleries. · 巴黎臻藏合作画廊协议。",
});

export default async function GalleryPartnershipAgreementPage() {
  const member = await requireMember();

  return <GalleryPartnershipAgreementView member={member} />;
}
