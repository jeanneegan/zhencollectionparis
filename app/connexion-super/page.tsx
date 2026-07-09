import type { Metadata } from "next";
import { Suspense } from "react";
import { ConnexionSuperView } from "./connexion-super-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Accès super utilisateur · 超级用户登录 · Zhen Collection Paris",
  description:
    "Accès super utilisateur pour la gestion complète de l'espace membre. · 巴黎臻藏超级用户登录。",
});

export default function ConnexionSuperPage() {
  return (
    <Suspense fallback={null}>
      <ConnexionSuperView />
    </Suspense>
  );
}
