import type { Metadata } from "next";
import { HomeView } from "./home-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { getHomeShareImage } from "@/app/lib/page-share-image";

export const metadata: Metadata = createPageMetadata({
  title: "Zhen Collection Paris",
  images: [getHomeShareImage()],
});

export default function Home() {
  return <HomeView />;
}
