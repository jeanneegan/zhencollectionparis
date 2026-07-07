export const SESSION_COOKIE = "zcp-session";

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
} as const;

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
