import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getMemberBySession,
  getMemberHomePath,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import { resolvePostLoginPath } from "@/app/lib/return-to";

const PROTECTED_PREFIXES = [
  "/espace",
  "/galerie",
  "/commentateur",
  "/collectionneur",
] as const;

export function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const isAuthed = isAuthenticatedSession(session);
  const { pathname, search } = request.nextUrl;
  const member = getMemberBySession(session);

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isProtected && !isAuthed) {
    const loginUrl = new URL("/connexion", request.url);
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/espace") && member?.type === "gallery") {
    const redirectUrl = new URL(
      resolvePostLoginPath(`${pathname}${search}`, "/galerie"),
      request.url,
    );
    return NextResponse.redirect(redirectUrl);
  }

  if (pathname === "/connexion" && isAuthed && member) {
    const next = request.nextUrl.searchParams.get("next") ?? undefined;
    return NextResponse.redirect(
      new URL(resolvePostLoginPath(next, getMemberHomePath(member)), request.url),
    );
  }

  if (pathname === "/connexion-super" && isAuthed && member) {
    return NextResponse.redirect(new URL(getMemberHomePath(member), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/espace/:path*",
    "/galerie/:path*",
    "/commentateur/:path*",
    "/collectionneur/:path*",
    "/connexion",
    "/connexion-super",
  ],
};
