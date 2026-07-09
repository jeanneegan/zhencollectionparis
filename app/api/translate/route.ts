import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { Locale } from "@/app/artists/[slug]/data";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import {
  getTranslationProviderLabel,
  translateProfileFields,
  type TranslateFieldInput,
  type TranslatableFieldKey,
} from "@/app/lib/translate-text";

const allowedFieldKeys = new Set<TranslatableFieldKey>([
  "tagline",
  "practice",
  "currentCity",
  "artistStatement",
  "hopeToLeave",
  "whyChina",
  "whyFrance",
]);

const allowedLocales = new Set<Locale>(["fr", "en", "zh"]);

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member = getMemberBySession(session);

  if (!isAuthenticatedSession(session) || !member || member.type !== "artist") {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  if (!getTranslationProviderLabel()) {
    return NextResponse.json(
      {
        error: "translation_not_configured",
        message:
          "Configure DEEPL_AUTH_KEY or OPENAI_API_KEY to enable automatic translation.",
      },
      { status: 503 },
    );
  }

  const body = (await request.json()) as {
    sourceLocale?: Locale;
    fields?: TranslateFieldInput[];
  };

  if (
    !body.sourceLocale ||
    !allowedLocales.has(body.sourceLocale) ||
    !Array.isArray(body.fields)
  ) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const fields = body.fields.filter(
    (field) =>
      allowedFieldKeys.has(field.key) &&
      typeof field.text === "string" &&
      field.text.trim().length > 0,
  );

  if (fields.length === 0) {
    return NextResponse.json(
      { error: "empty_source", message: "No primary-language content to translate." },
      { status: 400 },
    );
  }

  const targetLocales = (["fr", "en", "zh"] as Locale[]).filter(
    (locale) => locale !== body.sourceLocale,
  );

  try {
    const translations = await translateProfileFields(
      fields,
      body.sourceLocale,
      targetLocales,
    );

    return NextResponse.json({
      ok: true,
      provider: getTranslationProviderLabel(),
      translations,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "translation_failed";

    return NextResponse.json(
      { error: "translation_failed", message },
      { status: 502 },
    );
  }
}
