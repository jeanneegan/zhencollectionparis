import { NextResponse } from "next/server";
import {
  authenticateMember,
  CLIENT_AUTH_COOKIE,
  CLIENT_AUTH_FLAG,
  getMemberHomePath,
  SESSION_COOKIE,
} from "@/app/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const member =
    body.email && body.password
      ? authenticateMember(body.email, body.password)
      : null;

  if (!member) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const response = NextResponse.json({
    ok: true,
    redirectTo: getMemberHomePath(member),
    user: {
      email: member.email,
      type: member.type,
      name: member.name,
      memberType: member.memberType,
    },
  });

  response.cookies.set(SESSION_COOKIE, member.sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  response.cookies.set(CLIENT_AUTH_COOKIE, CLIENT_AUTH_FLAG, {
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
