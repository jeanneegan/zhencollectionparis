import type { Metadata } from "next";
import { Suspense } from "react";
import { ConnexionView } from "./connexion-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Accès sur invitation · 受邀登录 · Zhen Collection Paris",
  description: "Espace membre sur invitation · 巴黎臻藏受邀登录",
});

export default function ConnexionPage() {
  return (
    <Suspense fallback={null}>
      <ConnexionView />
    </Suspense>
  );
}
