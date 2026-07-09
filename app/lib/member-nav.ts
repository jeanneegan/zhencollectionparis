import type { Locale } from "@/app/artists/[slug]/data";
import {
  MOCK_GALLERY_USER,
  type GalleryFocusId,
  type MockMember,
} from "@/app/lib/auth";
import { GALLERY_RECEIVED_MESSAGES } from "@/app/lib/gallery-messages";
import { RETURN_FROM_ESPACE } from "@/app/lib/return-to";

export type MemberNavLink = {
  id: string;
  href: string;
  label: string;
  badge?: number;
};

export type MemberNavGroup = {
  id: string;
  title: string;
  links: MemberNavLink[];
};

const memberNavLabels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    superKicker: string;
    superKickerSub: string;
    signedInAs: string;
    navLabel: string;
    logout: string;
    publicEvaluationLink: string;
    galleryPartnershipLink: string;
    artistPassportLink: string;
    artistAgreementLink: string;
    galleryNavSection: string;
    galleryPageLink: string;
    artistNavSection: string;
    criticNavSection: string;
    criticPageLink: string;
    criticHomeLink: string;
    criticPassportLink: string;
    criticArticleLink: string;
    collectorNavSection: string;
    collectorHomeLink: string;
    collectorPageLink: string;
  }
> = {
  zh: {
    kicker: "Espace membre sur invitation",
    kickerSub: "受邀成员空间",
    superKicker: "Accès super utilisateur",
    superKickerSub: "超级用户",
    signedInAs: "当前登录",
    navLabel: "Navigation · 导航",
    logout: "Se déconnecter · 退出登录",
    publicEvaluationLink: "Évaluation des œuvres en ligne · 在线作品评估",
    galleryPartnershipLink: "Gallery Partnership Agreement · 合作画廊协议",
    artistPassportLink: "Voir le passeport · 查看档案",
    artistAgreementLink: "Accord de collaboration · 艺术家合作与档案协议",
    galleryNavSection: "Galerie · 画廊",
    galleryPageLink: "Espace galerie · 画廊空间",
    artistNavSection: "Artiste · 艺术家",
    criticNavSection: "Commentateur · 评论家",
    criticHomeLink: "Espace commentateur · 评论家空间",
    criticPassportLink: "Voir l'archive · 查看档案",
    criticPageLink: "Commentaire en ligne · 评论家在线评论",
    criticArticleLink: "Article indépendant · 评论家独立文章",
    collectorNavSection: "Collectionneur · 藏家",
    collectorHomeLink: "Espace collectionneur · 藏家空间",
    collectorPageLink: "Ma collection · 藏家藏品",
  },
  fr: {
    kicker: "Espace membre sur invitation",
    kickerSub: "受邀成员空间",
    superKicker: "Accès super utilisateur",
    superKickerSub: "超级用户",
    signedInAs: "Connecté en tant que",
    navLabel: "Navigation · 导航",
    logout: "Se déconnecter · 退出登录",
    publicEvaluationLink: "Évaluation des œuvres en ligne · 在线作品评估",
    galleryPartnershipLink: "Gallery Partnership Agreement · 合作画廊协议",
    artistPassportLink: "Voir le passeport · 查看档案",
    artistAgreementLink: "Accord de collaboration · 艺术家合作与档案协议",
    galleryNavSection: "Galerie · 画廊",
    galleryPageLink: "Espace galerie · 画廊空间",
    artistNavSection: "Artiste · 艺术家",
    criticNavSection: "Commentateur · 评论家",
    criticHomeLink: "Espace commentateur · 评论家空间",
    criticPassportLink: "Voir l'archive · 查看档案",
    criticPageLink: "Commentaire en ligne · 评论家在线评论",
    criticArticleLink: "Article indépendant · 评论家独立文章",
    collectorNavSection: "Collectionneur · 藏家",
    collectorHomeLink: "Espace collectionneur · 藏家空间",
    collectorPageLink: "Ma collection · 藏家藏品",
  },
  en: {
    kicker: "Invited member space",
    kickerSub: "",
    superKicker: "Super user access",
    superKickerSub: "",
    signedInAs: "Signed in as",
    navLabel: "Navigation",
    logout: "Sign out",
    publicEvaluationLink: "Online Artwork Evaluation",
    galleryPartnershipLink: "Gallery Partnership Agreement",
    artistPassportLink: "View passport",
    artistAgreementLink: "Artist Collaboration & Archive Agreement",
    galleryNavSection: "Gallery",
    galleryPageLink: "Gallery space",
    artistNavSection: "Artist",
    criticNavSection: "Critic",
    criticHomeLink: "Critic space",
    criticPassportLink: "View archive",
    criticPageLink: "Online Review",
    criticArticleLink: "Independent Article",
    collectorNavSection: "Collector",
    collectorHomeLink: "Collector space",
    collectorPageLink: "My Collection",
  },
};

export function getMemberNavLabels(locale: Locale) {
  return memberNavLabels[locale];
}

export function focusLabel(
  locale: Locale,
  id: GalleryFocusId,
  focus = MOCK_GALLERY_USER.focus!,
) {
  const item = focus[id];
  return locale === "en" ? item.en : `${item.fr} · ${item.zh}`;
}

export function getMemberNavGroups(
  member: MockMember,
  locale: Locale,
): MemberNavGroup[] {
  const l = memberNavLabels[locale];
  const focus = member.focus ?? MOCK_GALLERY_USER.focus!;
  const groups: MemberNavGroup[] = [];
  const artistPassportHref = member.artistSlug
    ? `/artists/${member.artistSlug}?from=${RETURN_FROM_ESPACE}`
    : "/";
  const unreadCount = GALLERY_RECEIVED_MESSAGES.filter(
    (message) => message.unread,
  ).length;

  if (member.type === "gallery" || member.type === "super") {
    groups.push({
      id: "gallery",
      title: l.galleryNavSection,
      links: [
        {
          id: "galerie-home",
          href: "/galerie",
          label: l.galleryPageLink,
        },
        {
          id: "evaluation-oeuvres",
          href: "/evaluation-oeuvres",
          label: l.publicEvaluationLink,
        },
        {
          id: "galerie-representedArtists",
          href: "/galerie?section=representedArtists",
          label: focusLabel(locale, "representedArtists", focus),
        },
        {
          id: "galerie-followedArtists",
          href: "/galerie?section=followedArtists",
          label: focusLabel(locale, "followedArtists", focus),
        },
        {
          id: "galerie-exhibitions",
          href: "/galerie?section=exhibitions",
          label: focusLabel(locale, "exhibitions", focus),
        },
        {
          id: "galerie-receivedMessages",
          href: "/galerie?section=receivedMessages",
          label: focusLabel(locale, "receivedMessages", focus),
          badge: unreadCount > 0 ? unreadCount : undefined,
        },
        {
          id: "gallery-partnership",
          href: "/gallery-partnership-agreement",
          label: l.galleryPartnershipLink,
        },
      ],
    });
  }

  if (member.type === "artist" || member.type === "super") {
    groups.push({
      id: "artist",
      title: l.artistNavSection,
      links: [
        {
          id: "artist-passport",
          href: artistPassportHref,
          label: l.artistPassportLink,
        },
        {
          id: "artist-agreement",
          href: "/collaboration-archive-agreement",
          label: l.artistAgreementLink,
        },
      ],
    });
  }

  if (member.type === "critic" || member.type === "super") {
    const criticArchiveHref = member.criticSlug
      ? `/critics/${member.criticSlug}`
      : "/critics/lin-wei";

    groups.push({
      id: "critic",
      title: l.criticNavSection,
      links: [
        {
          id: "commentateur-home",
          href: "/commentateur",
          label: l.criticHomeLink,
        },
        {
          id: "critic-archive",
          href: criticArchiveHref,
          label: l.criticPassportLink,
        },
        {
          id: "commentateur-commentaire",
          href: "/commentateur/commentaire",
          label: l.criticPageLink,
        },
        {
          id: "commentateur-article",
          href: "/commentateur/article",
          label: l.criticArticleLink,
        },
      ],
    });
  }

  if (member.type === "collector" || member.type === "super") {
    groups.push({
      id: "collector",
      title: l.collectorNavSection,
      links: [
        {
          id: "collectionneur-home",
          href: "/collectionneur",
          label: l.collectorHomeLink,
        },
        {
          id: "collectionneur-collection",
          href: "/collectionneur/collection",
          label: l.collectorPageLink,
        },
      ],
    });
  }

  return groups;
}

export function isMemberNavLinkActive(
  pathname: string,
  searchParams: URLSearchParams,
  link: MemberNavLink,
): boolean {
  if (link.id === "galerie-home") {
    return pathname === "/galerie" && !searchParams.get("section");
  }

  if (link.id.startsWith("galerie-")) {
    if (pathname !== "/galerie") {
      return false;
    }

    const section = link.id.replace("galerie-", "");
    const current = searchParams.get("section") ?? "";
    return current === section;
  }

  if (link.id === "artist-passport") {
    return pathname.startsWith("/artists/");
  }

  if (link.id === "commentateur-article") {
    return pathname === "/commentateur/article";
  }

  if (link.id === "commentateur-commentaire") {
    return pathname === "/commentateur/commentaire";
  }

  if (link.id === "commentateur-home") {
    return pathname === "/commentateur";
  }

  if (link.id === "critic-archive") {
    return pathname.startsWith("/critics/");
  }

  if (link.id === "collectionneur-home") {
    return pathname === "/collectionneur";
  }

  if (link.id === "collectionneur-collection") {
    return pathname === "/collectionneur/collection";
  }

  return pathname === link.href;
}
