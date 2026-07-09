import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticatedSession, SESSION_COOKIE } from "@/app/lib/auth";
import { resolvePostLoginPath } from "@/app/lib/return-to";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const isAuthed = isAuthenticatedSession(session);
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/espace") && !isAuthed) {
    const loginUrl = new URL("/connexion", request.url);
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/connexion" && isAuthed) {
    const next = request.nextUrl.searchParams.get("next") ?? undefined;
    return NextResponse.redirect(
      new URL(resolvePostLoginPath(next), request.url),
    );
  }

  if (pathname === "/connexion-super" && isAuthed) {
    return NextResponse.redirect(new URL("/espace", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/espace/:path*", "/connexion", "/connexion-super"],
};
