import type { Metadata } from "next";
import { SupportView } from "@/app/support/support-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Support · 赞助 · Zhen Collection Paris",
  description:
    "Support emerging artists through ZCP — patronage, donations, and partnerships. · 支持艺术家：赞助、捐赠与合作伙伴。",
});

export default function SupportPage() {
  return <SupportView />;
}
