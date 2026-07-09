export const RETURN_FROM_ESPACE = "espace";
export const RETURN_FROM_ESPACE_EXHIBITIONS = "espace-exhibitions";

export const ESPACE_EXHIBITIONS_SECTION = "exhibitions";

export function resolveReturnTo(from: string | undefined): string | undefined {
  if (from === RETURN_FROM_ESPACE_EXHIBITIONS) {
    return `/espace?section=${ESPACE_EXHIBITIONS_SECTION}`;
  }

  if (from === RETURN_FROM_ESPACE) {
    return "/espace";
  }

  return undefined;
}

export function isAllowedReturnPath(path: string): boolean {
  if (path === "/") {
    return true;
  }

  if (path === "/espace" || path.startsWith("/espace?") || path === "/espace/profil") {
    return true;
  }

  return path.startsWith("/exhibitions/");
}

export function isAllowedPostLoginPath(next: string): boolean {
  const pathname = next.split("?")[0] ?? "";
  return isAllowedReturnPath(pathname);
}

export function resolvePostLoginPath(next: string | undefined): string {
  if (next && isAllowedPostLoginPath(next)) {
    return next;
  }

  return "/espace";
}

export function getReturnLabelKey(
  backHref: string,
): "default" | "workspace" | "exhibitions" {
  if (backHref.startsWith(`/espace?section=${ESPACE_EXHIBITIONS_SECTION}`)) {
    return "exhibitions";
  }

  if (backHref === "/espace" || backHref.startsWith("/espace?") || backHref === "/espace/profil") {
    return "workspace";
  }

  return "default";
}
