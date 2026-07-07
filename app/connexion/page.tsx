import type { Metadata } from "next";
import { ConnexionView } from "./connexion-view";

export const metadata: Metadata = {
  title: "Connexion · Zhen Collection Paris",
  description:
    "Espace membre de Zhen Collection Paris · 巴黎臻藏成员登录",
};

export default function ConnexionPage() {
  return <ConnexionView />;
}
