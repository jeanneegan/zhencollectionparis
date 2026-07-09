import type { Metadata } from "next";
import { GalleryPartnershipAgreementView } from "./gallery-partnership-agreement-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title:
    "Gallery Partnership Agreement · Accord de partenariat galerie · 合作画廊协议 · Zhen Collection Paris",
  description:
    "Gallery partnership terms for Zhen Collection Paris partner galleries. · 巴黎臻藏合作画廊协议。",
});

export default function GalleryPartnershipAgreementPage() {
  return <GalleryPartnershipAgreementView />;
}
