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
    id: "about",
    href: "/apropos",
    label: "ABOUT",
    labelZh: "关于",
    isActive: (pathname) =>
      pathname.startsWith("/apropos") || pathname.startsWith("/association"),
  },
];
