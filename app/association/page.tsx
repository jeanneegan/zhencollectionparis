import type { Metadata } from "next";
import { AssociationView } from "./association-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pourquoi Zhen Collection Paris ? · 为什么是巴黎臻藏？",
  description:
    "Zhen Collection Paris — association internationale de culture et d'art à Paris, reliant les écosystèmes artistiques parisiens et chinois. · 巴黎臻藏——立足巴黎的国际文化艺术协会，连接巴黎与中国当代艺术生态。",
});

export default function AssociationPage() {
  return <AssociationView />;
}
