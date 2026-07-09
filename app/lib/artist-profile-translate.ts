import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";
import type {
  ArtistProfileEdit,
} from "@/app/lib/artist-profile-edits";
import type {
  TranslateFieldInput,
  TranslateFieldResult,
  TranslatableFieldKey,
} from "@/app/lib/translate-text";

const localizedFieldKeys = [
  "tagline",
  "practice",
  "currentCity",
  "artistStatement",
  "hopeToLeave",
  "whyChina",
  "whyFrance",
] as const satisfies readonly TranslatableFieldKey[];

export function buildTranslateFieldsFromForm(
  form: ArtistProfileEdit,
  primaryLocale: Locale,
  includeWhyChina: boolean,
): TranslateFieldInput[] {
  const keys = includeWhyChina
    ? localizedFieldKeys
    : localizedFieldKeys.filter((key) => key !== "whyChina");

  return keys.flatMap((key) => {
    const value = form[key] as LocalizedText | undefined;
    const text = value?.[primaryLocale]?.trim() ?? "";

    if (!text) {
      return [];
    }

    return [{ key, text }];
  });
}

export function applyProfileTranslations(
  form: ArtistProfileEdit,
  translations: TranslateFieldResult,
): ArtistProfileEdit {
  const next: ArtistProfileEdit = { ...form };

  for (const key of localizedFieldKeys) {
    const patch = translations[key];
    if (!patch) {
      continue;
    }

    const current = (next[key] ?? { fr: "", en: "", zh: "" }) as LocalizedText;
    next[key] = { ...current, ...patch };
  }

  return next;
}

export function formHasSecondaryTranslations(
  form: ArtistProfileEdit,
  primaryLocale: Locale,
): boolean {
  return localizedFieldKeys.some((key) => {
    const value = form[key] as LocalizedText | undefined;
    if (!value) {
      return false;
    }

    return (["fr", "en", "zh"] as Locale[])
      .filter((locale) => locale !== primaryLocale)
      .some((locale) => Boolean(value[locale]?.trim()));
  });
}
