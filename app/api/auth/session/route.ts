import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { isAuthenticatedSession, SESSION_COOKIE } from "@/app/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  return NextResponse.json({
    authenticated: isAuthenticatedSession(session),
  });
}
