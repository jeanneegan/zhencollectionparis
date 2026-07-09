import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { EspaceView } from "./espace-view";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import { createPageMetadata } from "@/app/lib/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member = getMemberBySession(session);

  if (member?.type === "gallery") {
    return createPageMetadata({
      title: "Espace galerie · 画廊页 · Zhen Collection Paris",
      description:
        "Espace galerie · 巴黎臻藏画廊工作台，管理代理艺术家、展览与公众评价。",
    });
  }

  return createPageMetadata({
    title: "Espace membre sur invitation · 受邀成员空间 · Zhen Collection Paris",
    description:
      "Espace membre sur invitation · 巴黎臻藏受邀成员空间，面向合作艺术家与机构伙伴。",
  });
}

export default async function EspacePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  const member = getMemberBySession(session);

  if (!isAuthenticatedSession(session) || !member) {
    redirect("/connexion");
  }

  return <EspaceView member={member} />;
}
