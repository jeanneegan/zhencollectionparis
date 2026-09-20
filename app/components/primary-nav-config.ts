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
    id: "expositions",
    href: "/exposition",
    label: "EXPOSITIONS",
    labelZh: "展览",
    isActive: (pathname) =>
      pathname === "/exposition" || pathname.startsWith("/exposition/"),
  },
  {
    id: "residencies",
    href: "/opportunites",
    label: "RÉSIDENCES",
    labelZh: "驻地",
    isActive: (pathname) => pathname.startsWith("/opportunites"),
  },
  {
    id: "support",
    href: "/support",
    label: "SUPPORT",
    labelZh: "赞助",
    isActive: (pathname) =>
      pathname === "/support" || pathname.startsWith("/gallery-partnership"),
  },
];
