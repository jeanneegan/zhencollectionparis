import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";

export async function requireMember() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!isAuthenticatedSession(session)) {
    redirect("/connexion");
  }

  const member = getMemberBySession(session);

  if (!member) {
    redirect("/connexion");
  }

  return member;
}
