export const RETURN_FROM_ESPACE = "espace";
export const RETURN_FROM_ESPACE_EXHIBITIONS = "espace-exhibitions";
export const RETURN_FROM_COMMENTATEUR = "commentateur";
export const RETURN_FROM_ARTIST_PREFIX = "artist:";

export const ESPACE_EXHIBITIONS_SECTION = "exhibitions";

export function resolveReturnTo(from: string | undefined): string | undefined {
  if (from === RETURN_FROM_ESPACE_EXHIBITIONS) {
    return `/galerie?section=${ESPACE_EXHIBITIONS_SECTION}`;
  }

  if (from === RETURN_FROM_ESPACE) {
    return "/galerie";
  }

  if (from === RETURN_FROM_COMMENTATEUR) {
    return "/commentateur";
  }

  if (from?.startsWith(RETURN_FROM_ARTIST_PREFIX)) {
    return `/artists/${from.slice(RETURN_FROM_ARTIST_PREFIX.length)}`;
  }

  return undefined;
}

export function isAllowedReturnPath(path: string): boolean {
  if (path === "/") {
    return true;
  }

  if (path === "/galerie" || path.startsWith("/galerie?")) {
    return true;
  }

  if (path === "/espace" || path.startsWith("/espace?")) {
    return true;
  }

  if (path === "/commentateur" || path.startsWith("/commentateur/")) {
    return true;
  }

  if (path === "/collectionneur" || path.startsWith("/collectionneur/")) {
    return true;
  }

  if (path.startsWith("/critics/")) {
    return true;
  }

  if (path.startsWith("/oeuvres/")) {
    return true;
  }

  return path.startsWith("/exhibitions/");
}

export function isAllowedPostLoginPath(next: string): boolean {
  const pathname = next.split("?")[0] ?? "";
  return isAllowedReturnPath(pathname);
}

export function resolvePostLoginPath(
  next: string | undefined,
  fallback = "/espace",
): string {
  if (next && isAllowedPostLoginPath(next)) {
    if (next.startsWith("/espace?section=")) {
      return next.replace("/espace?", "/galerie?");
    }

    if (next === "/espace") {
      return "/galerie";
    }

    return next;
  }

  return fallback;
}

export function getReturnLabelKey(
  backHref: string,
): "default" | "workspace" | "exhibitions" {
  if (backHref.startsWith(`/galerie?section=${ESPACE_EXHIBITIONS_SECTION}`)) {
    return "exhibitions";
  }

  if (backHref === "/galerie" || backHref.startsWith("/galerie?")) {
    return "workspace";
  }

  if (backHref === "/espace" || backHref.startsWith("/espace?")) {
    return "workspace";
  }

  return "default";
}
