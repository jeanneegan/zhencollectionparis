export type PrimaryNavItem = {
  id: string;
  href: string;
  label: string;
  labelZh: string;
  isActive: (pathname: string) => boolean;
};

export const primaryNavItems: PrimaryNavItem[] = [
  {
    id: "conversations",
    href: "/dialogues",
    label: "CONVERSATIONS",
    labelZh: "对话",
    isActive: (pathname) => pathname.startsWith("/dialogue"),
  },
  {
    id: "artists",
    href: "/artists",
    label: "ARTISTS",
    labelZh: "艺术家",
    isActive: (pathname) =>
      pathname === "/artists" || pathname.startsWith("/artists/"),
  },
  {
    id: "collection",
    href: "/editions",
    label: "COLLECTION",
    labelZh: "收藏",
    isActive: (pathname) =>
      pathname === "/editions" || pathname.startsWith("/edition/"),
  },
  {
    id: "support",
    href: "/apropos#support",
    label: "SUPPORT",
    labelZh: "赞助",
    isActive: (pathname) =>
      pathname === "/apropos" ||
      pathname.startsWith("/apropos/") ||
      pathname.startsWith("/gallery-partnership"),
  },
];
