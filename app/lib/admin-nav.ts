import type { Locale } from "@/app/artists/[slug]/data";

export type AdminNavLink = {
  id: string;
  href: string;
  label: string;
  badge?: number;
};

export type AdminNavGroup = {
  id: string;
  title: string;
  links: AdminNavLink[];
};

const adminNavLabels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    signedInAs: string;
    navLabel: string;
    logout: string;
    overviewSection: string;
    dashboardLink: string;
    notesLink: string;
    entitiesSection: string;
    artistsLink: string;
    galleriesLink: string;
    artworksLink: string;
    criticsLink: string;
    collectorsLink: string;
    membersLink: string;
    contentSection: string;
    exhibitionsLink: string;
    passportsLink: string;
    memberSpaceLink: string;
  }
> = {
  zh: {
    kicker: "Administration ZCP",
    kickerSub: "巴黎臻藏后台",
    signedInAs: "当前登录",
    navLabel: "Navigation · 导航",
    logout: "Se déconnecter · 退出登录",
    overviewSection: "Vue d'ensemble · 概览",
    dashboardLink: "Tableau de bord · 控制台",
    notesLink: "Notes · 笔记",
    entitiesSection: "Entités · 实体",
    artistsLink: "Artistes · 艺术家",
    galleriesLink: "Galeries · 画廊",
    artworksLink: "Œuvres · 作品",
    criticsLink: "Commentateurs · 评论家",
    collectorsLink: "Collectionneurs · 藏家",
    membersLink: "Membres · 成员账号",
    contentSection: "Contenu · 内容",
    exhibitionsLink: "Expositions · 展览",
    passportsLink: "Passeports œuvre · 作品护照",
    memberSpaceLink: "Espace membre · 成员空间",
  },
  fr: {
    kicker: "Administration ZCP",
    kickerSub: "巴黎臻藏后台",
    signedInAs: "Connecté en tant que",
    navLabel: "Navigation · 导航",
    logout: "Se déconnecter · 退出登录",
    overviewSection: "Vue d'ensemble · 概览",
    dashboardLink: "Tableau de bord · 控制台",
    notesLink: "Notes · 笔记",
    entitiesSection: "Entités · 实体",
    artistsLink: "Artistes · 艺术家",
    galleriesLink: "Galeries · 画廊",
    artworksLink: "Œuvres · 作品",
    criticsLink: "Commentateurs · 评论家",
    collectorsLink: "Collectionneurs · 藏家",
    membersLink: "Membres · 成员账号",
    contentSection: "Contenu · 内容",
    exhibitionsLink: "Expositions · 展览",
    passportsLink: "Passeports œuvre · 作品护照",
    memberSpaceLink: "Espace membre · 成员空间",
  },
  en: {
    kicker: "ZCP Administration",
    kickerSub: "",
    signedInAs: "Signed in as",
    navLabel: "Navigation",
    logout: "Sign out",
    overviewSection: "Overview",
    dashboardLink: "Dashboard",
    notesLink: "Notes",
    entitiesSection: "Entities",
    artistsLink: "Artists",
    galleriesLink: "Galleries",
    artworksLink: "Artworks",
    criticsLink: "Critics",
    collectorsLink: "Collectors",
    membersLink: "Member accounts",
    contentSection: "Content",
    exhibitionsLink: "Exhibitions",
    passportsLink: "Artwork passports",
    memberSpaceLink: "Member space",
  },
};

export function getAdminNavLabels(locale: Locale) {
  return adminNavLabels[locale];
}

export function getAdminNavGroups(
  locale: Locale,
  counts: {
    artists: number;
    galleries: number;
    artworks: number;
    critics: number;
    collectors: number;
    members: number;
    exhibitions: number;
    passports: number;
  },
): AdminNavGroup[] {
  const l = adminNavLabels[locale];

  return [
    {
      id: "overview",
      title: l.overviewSection,
      links: [
        { id: "admin-dashboard", href: "/admin", label: l.dashboardLink },
        { id: "admin-notes", href: "/admin/notes", label: l.notesLink },
      ],
    },
    {
      id: "entities",
      title: l.entitiesSection,
      links: [
        {
          id: "admin-artists",
          href: "/admin/artists",
          label: l.artistsLink,
          badge: counts.artists,
        },
        {
          id: "admin-galleries",
          href: "/admin/galleries",
          label: l.galleriesLink,
          badge: counts.galleries,
        },
        {
          id: "admin-artworks",
          href: "/admin/artworks",
          label: l.artworksLink,
          badge: counts.artworks,
        },
        {
          id: "admin-critics",
          href: "/admin/critics",
          label: l.criticsLink,
          badge: counts.critics,
        },
        {
          id: "admin-collectors",
          href: "/admin/collectors",
          label: l.collectorsLink,
          badge: counts.collectors,
        },
        {
          id: "admin-members",
          href: "/admin/members",
          label: l.membersLink,
          badge: counts.members,
        },
      ],
    },
    {
      id: "content",
      title: l.contentSection,
      links: [
        {
          id: "admin-exhibitions",
          href: "/admin/exhibitions",
          label: l.exhibitionsLink,
          badge: counts.exhibitions,
        },
        {
          id: "admin-passports",
          href: "/admin/passports",
          label: l.passportsLink,
          badge: counts.passports,
        },
      ],
    },
    {
      id: "workspace",
      title: "Zhen Collection Paris",
      links: [{ id: "admin-member-space", href: "/espace", label: l.memberSpaceLink }],
    },
  ];
}

export function isAdminNavLinkActive(pathname: string, link: AdminNavLink): boolean {
  if (link.id === "admin-dashboard") {
    return pathname === "/admin";
  }

  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}
