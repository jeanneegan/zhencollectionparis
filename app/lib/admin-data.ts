import { getAllArtists, t, type Locale } from "@/app/artists/[slug]/data";
import { getAllCritics } from "@/app/critics/[slug]/data";
import { getAllExhibitionSlugs, getExhibitionBySlug } from "@/app/exhibitions/data";
import {
  GALLERY_FOLLOWED_ARTIST_SLUGS,
  GALLERY_REPRESENTED_ARTIST_SLUGS,
  MOCK_MEMBERS,
  type MockMember,
} from "@/app/lib/auth";
import {
  hasArtworkPassport,
  listArtworkPassportRoutes,
} from "@/app/lib/artwork-passport";
import { MOCK_COLLECTOR, MOCK_COLLECTOR_HOLDINGS } from "@/app/lib/collector-collection";
import { GALLERY_RECEIVED_MESSAGES } from "@/app/lib/gallery-messages";

export type AdminCounts = {
  artists: number;
  galleries: number;
  artworks: number;
  critics: number;
  collectors: number;
  members: number;
  exhibitions: number;
  passports: number;
  holdings: number;
  unreadMessages: number;
};

export function getAdminCounts(): AdminCounts {
  const artworks = getAllArtists().flatMap((artist) => artist.artworks);

  return {
    artists: getAllArtists().length,
    galleries: MOCK_MEMBERS.filter((member) => member.type === "gallery").length,
    artworks: artworks.length,
    critics: getAllCritics().length,
    collectors: MOCK_MEMBERS.filter((member) => member.type === "collector").length,
    members: MOCK_MEMBERS.length,
    exhibitions: getAllExhibitionSlugs().length,
    passports: listArtworkPassportRoutes().length,
    holdings: MOCK_COLLECTOR_HOLDINGS.length,
    unreadMessages: GALLERY_RECEIVED_MESSAGES.filter((message) => message.unread).length,
  };
}

export function getAdminArtistRows(locale: Locale) {
  return getAllArtists().map((artist) => ({
    slug: artist.slug,
    name: t(artist.name, locale),
    practice: t(artist.practice, locale),
    city: t(artist.currentCity, locale),
    artworkCount: artist.artworks.length,
    exhibitionCount: artist.exhibitions.length,
    href: `/artists/${artist.slug}`,
  }));
}

export function getAdminGalleryRows(locale: Locale) {
  return MOCK_MEMBERS.filter((member) => member.type === "gallery").map((member) => ({
    email: member.email,
    name: member.name[locale],
    representedCount: GALLERY_REPRESENTED_ARTIST_SLUGS.length,
    followedCount: GALLERY_FOLLOWED_ARTIST_SLUGS.length,
    unreadMessages: GALLERY_RECEIVED_MESSAGES.filter((message) => message.unread).length,
    href: "/galerie",
  }));
}

export function getAdminArtworkRows(locale: Locale) {
  return getAllArtists().flatMap((artist) =>
    artist.artworks.map((work) => ({
      id: work.id,
      artistSlug: artist.slug,
      artistName: t(artist.name, locale),
      title: t(work.title, locale),
      year: work.year,
      medium: t(work.medium, locale),
      hasPassport: hasArtworkPassport(artist.slug, work.id),
      href: hasArtworkPassport(artist.slug, work.id)
        ? `/oeuvres/${artist.slug}/${work.id}`
        : `/artists/${artist.slug}`,
    })),
  );
}

export function getAdminCriticRows(locale: Locale) {
  return getAllCritics().map((critic) => ({
    slug: critic.slug,
    name: t(critic.name, locale),
    city: t(critic.currentCity, locale),
    reviewCount: critic.workReviews.length,
    articleCount: critic.articles.length,
    href: `/critics/${critic.slug}`,
  }));
}

export function getAdminCollectorRows(locale: Locale) {
  return [
    {
      email: MOCK_MEMBERS.find((member) => member.type === "collector")?.email ?? "",
      name: t(MOCK_COLLECTOR.name, locale),
      city: t(MOCK_COLLECTOR.city, locale),
      collectingSince: MOCK_COLLECTOR.collectingSince,
      holdingCount: MOCK_COLLECTOR_HOLDINGS.length,
      passportCount: MOCK_COLLECTOR_HOLDINGS.filter((holding) => holding.passportInitiated)
        .length,
      href: "/collectionneur",
    },
  ];
}

export function getAdminMemberRows(locale: Locale) {
  return MOCK_MEMBERS.map((member) => ({
    email: member.email,
    name: member.name[locale],
    type: member.memberType[locale],
    role: member.type,
    homePath: getMemberHomeLabel(member),
  }));
}

export function getAdminExhibitionRows(locale: Locale) {
  return getAllExhibitionSlugs().flatMap((slug) => {
    const exhibition = getExhibitionBySlug(slug);
    if (!exhibition) {
      return [];
    }

    return [
      {
        slug: exhibition.slug,
        title: t(exhibition.title, locale),
        artist: t(exhibition.artistDisplay, locale),
        year: exhibition.year,
        workCount: exhibition.workIds.length,
        href: `/exhibitions/${exhibition.slug}`,
      },
    ];
  });
}

export function getAdminPassportRows(locale: Locale) {
  return listArtworkPassportRoutes().flatMap(({ artistSlug, workId }) => {
    const artist = getAllArtists().find((item) => item.slug === artistSlug);
    const work = artist?.artworks.find((item) => item.id === workId);
    if (!artist || !work) {
      return [];
    }

    return [
      {
        artistSlug,
        workId,
        artistName: t(artist.name, locale),
        title: t(work.title, locale),
        year: work.year,
        href: `/oeuvres/${artistSlug}/${workId}`,
      },
    ];
  });
}

function getMemberHomeLabel(member: MockMember) {
  switch (member.type) {
    case "gallery":
      return "/galerie";
    case "critic":
      return "/commentateur";
    case "collector":
      return "/collectionneur";
    case "artist":
      return "/espace";
    case "super":
      return "/admin";
    default:
      return "/espace";
  }
}
