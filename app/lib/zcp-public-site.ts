/** Canonical public ZCP site (artist microsites link here for passport & dialogue). */
export const ZCP_PUBLIC_SITE_ORIGIN = "https://www.zhencollection.paris";

export function zcpPublicUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${ZCP_PUBLIC_SITE_ORIGIN}${normalized}`;
}
