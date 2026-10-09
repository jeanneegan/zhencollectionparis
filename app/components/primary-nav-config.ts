export type PrimaryNavItem = {
  id: string;
  href: string;
  label: string;
  labelZh: string;
  isActive: (pathname: string) => boolean;
};

export const primaryNavItems: PrimaryNavItem[] = [
  {
    id: "artists",
    href: "/artists",
    label: "ARTISTS",
    labelZh: "艺术家",
    isActive: (pathname) =>
      pathname === "/artists" || pathname.startsWith("/artists/"),
  },
  {
    id: "conversations",
    href: "/dialogues",
    label: "CONVERSATIONS",
    labelZh: "对话",
    isActive: (pathname) => pathname.startsWith("/dialogue"),
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
    id: "projects",
    href: "/projets",
    label: "PROJETS",
    labelZh: "项目",
    isActive: (pathname) =>
      pathname.startsWith("/projets") ||
      pathname.startsWith("/exposition") ||
      pathname.startsWith("/opportunites"),
  },
  {
    id: "partners",
    href: "/support#partners",
    label: "PARTENAIRES",
    labelZh: "合作伙伴",
    isActive: (pathname) => pathname.startsWith("/support"),
  },
];
