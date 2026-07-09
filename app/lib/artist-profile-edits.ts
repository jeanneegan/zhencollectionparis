import type { ArtistProfile, Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type ArtistProfileEdit = {
  primaryLocale?: Locale;
  tagline?: LocalizedText;
  practice?: LocalizedText;
  currentCity?: LocalizedText;
  artistStatement?: LocalizedText;
  hopeToLeave?: LocalizedText;
  whyChina?: LocalizedText;
  whyFrance?: LocalizedText;
  contact?: Partial<ArtistProfile["contact"]>;
};

export const ARTIST_PROFILE_UPDATED_EVENT = "zcp-artist-profile-updated";

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  zh: "中文",
};

export function inferArtistPrimaryLocale(profile: ArtistProfile): Locale {
  if (profile.nationality.en === "Chinese") {
    return "zh";
  }

  if (profile.nationality.en === "French") {
    return "fr";
  }

  return "fr";
}

export function getArtistPrimaryLocale(
  profile: ArtistProfile,
  edits: ArtistProfileEdit | null,
): Locale {
  return edits?.primaryLocale ?? inferArtistPrimaryLocale(profile);
}

function storageKey(slug: string) {
  return `zcp-artist-profile-edits:${slug}`;
}

export function readArtistProfileEdits(slug: string): ArtistProfileEdit | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(storageKey(slug));
    return stored ? (JSON.parse(stored) as ArtistProfileEdit) : null;
  } catch {
    return null;
  }
}

export function writeArtistProfileEdits(
  slug: string,
  edits: ArtistProfileEdit,
): void {
  window.localStorage.setItem(storageKey(slug), JSON.stringify(edits));
}

export function clearArtistProfileEdits(slug: string): void {
  window.localStorage.removeItem(storageKey(slug));
}

export function profileToEditForm(profile: ArtistProfile): ArtistProfileEdit {
  return {
    primaryLocale: inferArtistPrimaryLocale(profile),
    tagline: { ...profile.tagline },
    practice: { ...profile.practice },
    currentCity: { ...profile.currentCity },
    artistStatement: { ...profile.artistStatement },
    hopeToLeave: { ...profile.hopeToLeave },
    whyChina: { ...profile.whyChinaFrance.china },
    whyFrance: { ...profile.whyChinaFrance.france },
    contact: { ...profile.contact },
  };
}

export function mergeArtistProfile(
  base: ArtistProfile,
  edits: ArtistProfileEdit | null,
): ArtistProfile {
  if (!edits) {
    return base;
  }

  return {
    ...base,
    tagline: edits.tagline ?? base.tagline,
    practice: edits.practice ?? base.practice,
    currentCity: edits.currentCity ?? base.currentCity,
    artistStatement: edits.artistStatement ?? base.artistStatement,
    hopeToLeave: edits.hopeToLeave ?? base.hopeToLeave,
    whyChinaFrance: {
      china: edits.whyChina ?? base.whyChinaFrance.china,
      france: edits.whyFrance ?? base.whyChinaFrance.france,
    },
    contact: {
      ...base.contact,
      ...edits.contact,
    },
  };
}
