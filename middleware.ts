import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticatedSession, SESSION_COOKIE } from "@/app/lib/auth";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const isAuthed = isAuthenticatedSession(session);
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/espace") && !isAuthed) {
    const loginUrl = new URL("/connexion", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/connexion" && isAuthed) {
    return NextResponse.redirect(new URL("/espace", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/espace/:path*", "/connexion"],
};
