import { isArtworkPassportPath } from "@/app/components/site-nav-config";

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
    id: "artworks",
    href: "/oeuvres",
    label: "ARTWORKS",
    labelZh: "作品",
    isActive: (pathname) =>
      pathname === "/oeuvres" || isArtworkPassportPath(pathname),
  },
  {
    id: "editions",
    href: "/editions",
    label: "EDITIONS",
    labelZh: "出版",
    isActive: (pathname) =>
      pathname === "/editions" || pathname.startsWith("/edition/"),
  },
  {
    id: "festival",
    href: "/festival",
    label: "FESTIVAL",
    labelZh: "艺术节",
    isActive: (pathname) =>
      pathname === "/festival" || pathname.startsWith("/festival/"),
  },
  {
    id: "residencies",
    href: "/opportunites",
    label: "RÉSIDENCES",
    labelZh: "驻地",
    isActive: (pathname) => pathname.startsWith("/opportunites"),
  },
];
