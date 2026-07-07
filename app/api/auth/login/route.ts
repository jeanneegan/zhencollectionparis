import { NextResponse } from "next/server";
import {
  isValidCredentials,
  MOCK_SESSION_TOKEN,
  MOCK_USER,
  SESSION_COOKIE,
} from "@/app/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    email?: string;
    password?: string;
  };

  if (!body.email || !body.password || !isValidCredentials(body.email, body.password)) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const response = NextResponse.json({
    ok: true,
    user: {
      email: MOCK_USER.email,
      type: MOCK_USER.type,
      name: MOCK_USER.name,
      memberType: MOCK_USER.memberType,
    },
  });

  response.cookies.set(SESSION_COOKIE, MOCK_SESSION_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
