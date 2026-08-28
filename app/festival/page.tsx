import type { Metadata } from "next";
import { FestivalIndexView } from "./festival-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Festival · 艺术节 · Zhen Collection Paris",
  description:
    "Zhen Collection Paris festivals and public programmes. · 巴黎臻藏艺术节与公共项目。",
});

export default function FestivalIndexPage() {
  return <FestivalIndexView />;
}
