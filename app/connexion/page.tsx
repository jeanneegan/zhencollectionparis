import type { Metadata } from "next";
import { Suspense } from "react";
import { ConnexionView } from "./connexion-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Connexion · Zhen Collection Paris",
  description: "Espace membre de Zhen Collection Paris · 巴黎臻藏成员登录",
});

export default function ConnexionPage() {
  return (
    <Suspense fallback={null}>
      <ConnexionView />
    </Suspense>
  );
}
