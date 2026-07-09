export const SESSION_COOKIE = "zcp-session";
export const CLIENT_AUTH_COOKIE = "zcp-auth-client";
export const CLIENT_AUTH_FLAG = "1";

export type MemberType = "gallery" | "artist";

type LocalizedLabel = {
  fr: string;
  zh: string;
  en: string;
};

export type GalleryFocusId =
  | "representedArtists"
  | "followedArtists"
  | "exhibitions"
  | "receivedMessages";

export type MockMember = {
  email: string;
  password: string;
  type: MemberType;
  sessionToken: string;
  memberType: LocalizedLabel;
  name: LocalizedLabel;
  artistSlug?: string;
  focus?: Record<GalleryFocusId, LocalizedLabel>;
};

const galleryFocus: Record<GalleryFocusId, LocalizedLabel> = {
  representedArtists: {
    fr: "Artistes représentés",
    zh: "代理艺术家",
    en: "Represented artists",
  },
  followedArtists: {
    fr: "Artistes suivis",
    zh: "关注艺术家",
    en: "Artists followed",
  },
  exhibitions: {
    fr: "Expositions",
    zh: "展览",
    en: "Exhibitions",
  },
  receivedMessages: {
    fr: "Messages reçus",
    zh: "收到信息",
    en: "Received messages",
  },
};

export const MOCK_GALLERY_USER: MockMember = {
  email: "galerie@gmail.com",
  password: "123456",
  type: "gallery",
  sessionToken: "mock-gallery-session",
  memberType: {
    fr: "Galerie",
    zh: "画廊",
    en: "Gallery",
  },
  name: {
    fr: "H Studio",
    zh: "H Studio",
    en: "H Studio",
  },
  focus: galleryFocus,
};

export const MOCK_ARTIST_USER: MockMember = {
  email: "artist@gmail.com",
  password: "123456",
  type: "artist",
  sessionToken: "mock-artist-session",
  artistSlug: "su-hong",
  memberType: {
    fr: "Artiste",
    zh: "艺术家",
    en: "Artist",
  },
  name: {
    fr: "Su Hong",
    zh: "苏泓",
    en: "Su Hong",
  },
};

export const MOCK_MEMBERS = [MOCK_GALLERY_USER, MOCK_ARTIST_USER] as const;

/** @deprecated Use MOCK_GALLERY_USER */
export const MOCK_USER = MOCK_GALLERY_USER;

/** @deprecated Use member session tokens */
export const MOCK_SESSION_TOKEN = MOCK_GALLERY_USER.sessionToken;

export const GALLERY_REPRESENTED_ARTIST_SLUGS = ["willy-le-nalbaut"] as const;

export const GALLERY_FOLLOWED_ARTIST_SLUGS = ["su-hong"] as const;

export function authenticateMember(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();

  return (
    MOCK_MEMBERS.find(
      (member) =>
        member.email === normalizedEmail && member.password === password,
    ) ?? null
  );
}

export function isValidCredentials(email: string, password: string) {
  return authenticateMember(email, password) !== null;
}

export function getMemberBySession(token: string | undefined) {
  if (!token) {
    return null;
  }

  return MOCK_MEMBERS.find((member) => member.sessionToken === token) ?? null;
}

export function isAuthenticatedSession(token: string | undefined) {
  return getMemberBySession(token) !== null;
}
