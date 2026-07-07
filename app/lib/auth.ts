export const SESSION_COOKIE = "zcp-session";
export const CLIENT_AUTH_COOKIE = "zcp-auth-client";
export const CLIENT_AUTH_FLAG = "1";

export type MemberType = "gallery";

export const MOCK_USER = {
  email: "galerie@gmail.com",
  password: "123456",
  type: "gallery" as MemberType,
  memberType: {
    fr: "Galerie",
    zh: "画廊",
    en: "Gallery",
  },
  name: {
    fr: "Galerie",
    zh: "画廊",
    en: "Gallery",
  },
  focus: {
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
    publicEvaluation: {
      fr: "Évaluations du public",
      zh: "公众评价",
      en: "Public evaluation",
    },
  },
} as const;

export const GALLERY_REPRESENTED_ARTIST_SLUGS = ["willy-le-nalbaut"] as const;

export const GALLERY_FOLLOWED_ARTIST_SLUGS = ["su-hong"] as const;

export const MOCK_SESSION_TOKEN = "mock-gallery-session";

export function isValidCredentials(email: string, password: string) {
  return (
    email.trim().toLowerCase() === MOCK_USER.email &&
    password === MOCK_USER.password
  );
}

export function isAuthenticatedSession(token: string | undefined) {
  return token === MOCK_SESSION_TOKEN;
}
