import type { Metadata } from "next";
import { GalerieView } from "./galerie-view";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireMember } from "@/app/lib/require-member";

export const metadata: Metadata = createPageMetadata({
  title: "Espace galerie · 画廊空间 · Zhen Collection Paris",
  description:
    "Espace membre pour les galeries partenaires — artistes, expositions et messages. · 合作画廊成员空间。",
});

export default async function GaleriePage() {
  const member = await requireMember();

  return <GalerieView member={member} />;
}
