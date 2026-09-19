import type { Metadata } from "next";
import { ExpositionIndexView } from "./exposition-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Expositions · 艺术展 · Zhen Collection Paris",
  description:
    "Expositions et projets publics de Zhen Collection Paris. · 巴黎臻藏展览与公共项目。",
});

export default function ExpositionIndexPage() {
  return <ExpositionIndexView />;
}
