import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { EspaceView } from "./espace-view";
import { isAuthenticatedSession, MOCK_USER, SESSION_COOKIE } from "@/app/lib/auth";

export const metadata: Metadata = {
  title: "Espace membre · Zhen Collection Paris",
  description: "Espace de conception réservé aux membres · 巴黎臻藏成员设计空间",
};

export default async function EspacePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!isAuthenticatedSession(session)) {
    redirect("/connexion");
  }

  return <EspaceView userEmail={MOCK_USER.email} />;
}
