import type { Metadata } from "next";
import { EditionsIndexView } from "./editions-index-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Editions · 出版 · Zhen Collection Paris",
  description:
    "Zhen Collection Paris editions programme. · 巴黎臻藏出版计划。",
});

export default function EditionsIndexPage() {
  return <EditionsIndexView />;
}
