import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getMemberBySession,
  getMemberHomePath,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import {
  artistSiteRewritePath,
  isArtistSiteStaticAssetPath,
  resolveArtistSiteSlugFromHost,
} from "@/app/lib/artist-site-host";
import { resolvePostLoginPath } from "@/app/lib/return-to";

const PROTECTED_PREFIXES = [
  "/espace",
  "/galerie",
  "/commentateur",
  "/collectionneur",
  "/admin",
] as const;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const artistSiteSlug = resolveArtistSiteSlugFromHost(host);
  const { pathname, search } = request.nextUrl;

  if (artistSiteSlug) {
    if (!isArtistSiteStaticAssetPath(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = artistSiteRewritePath(artistSiteSlug, pathname);
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  const session = request.cookies.get(SESSION_COOKIE)?.value;
  const isAuthed = isAuthenticatedSession(session);
  const member = getMemberBySession(session);

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (isProtected && !isAuthed) {
    const loginUrl = new URL(
      pathname.startsWith("/admin") ? "/connexion-super" : "/connexion",
      request.url,
    );
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/admin") && member && member.type !== "super") {
    return NextResponse.redirect(new URL(getMemberHomePath(member), request.url));
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
    const next = request.nextUrl.searchParams.get("next") ?? undefined;
    return NextResponse.redirect(
      new URL(resolvePostLoginPath(next, getMemberHomePath(member)), request.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:avif|gif|ico|jpe?g|mp4|png|svg|webp|woff2?)$).*)",
    "/espace/:path*",
    "/galerie/:path*",
    "/commentateur/:path*",
    "/collectionneur/:path*",
    "/admin/:path*",
    "/connexion",
    "/connexion-super",
  ],
};
