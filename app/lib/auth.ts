export const SESSION_COOKIE = "zcp-session";
export const CLIENT_AUTH_COOKIE = "zcp-auth-client";
export const CLIENT_AUTH_FLAG = "1";

export type MemberType = "gallery" | "artist" | "super";

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
    fr: "Artistes représentés en ligne",
    zh: "线上代理艺术家",
    en: "Online represented artists",
  },
  followedArtists: {
    fr: "Artistes suivis en ligne",
    zh: "线上关注艺术家",
    en: "Online artists followed",
  },
  exhibitions: {
    fr: "Expositions en ligne",
    zh: "线上展览",
    en: "Online exhibitions",
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

export const MOCK_SUPER_USER: MockMember = {
  email: "egan@gmail.com",
  password: "123456",
  type: "super",
  sessionToken: "mock-super-session",
  artistSlug: "su-hong",
  memberType: {
    fr: "Super utilisateur",
    zh: "超级用户",
    en: "Super user",
  },
  name: {
    fr: "Egan",
    zh: "Egan",
    en: "Egan",
  },
  focus: galleryFocus,
};

export const MOCK_MEMBERS = [
  MOCK_GALLERY_USER,
  MOCK_ARTIST_USER,
  MOCK_SUPER_USER,
] as const;

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
