import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
  type MockMember,
} from "@/app/lib/auth";

export async function getSuperMemberFromSession(): Promise<MockMember | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!isAuthenticatedSession(session)) {
    return null;
  }

  const member = getMemberBySession(session);
  if (!member || member.type !== "super") {
    return null;
  }

  return member;
}

export function unauthorizedSuperResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
