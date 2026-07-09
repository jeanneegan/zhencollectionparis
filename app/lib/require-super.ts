import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
  type MockMember,
} from "@/app/lib/auth";

export async function requireSuper(): Promise<MockMember> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!isAuthenticatedSession(session)) {
    redirect("/connexion-super?next=/admin");
  }

  const member = getMemberBySession(session);

  if (!member) {
    redirect("/connexion-super?next=/admin");
  }

  if (member.type !== "super") {
    redirect("/espace");
  }

  return member;
}
