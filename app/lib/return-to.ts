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

  return path === "/espace" || path.startsWith("/espace?");
}

export function getReturnLabelKey(
  backHref: string,
): "default" | "workspace" | "exhibitions" {
  if (backHref.startsWith(`/espace?section=${ESPACE_EXHIBITIONS_SECTION}`)) {
    return "exhibitions";
  }

  if (backHref === "/espace" || backHref.startsWith("/espace?")) {
    return "workspace";
  }

  return "default";
}
