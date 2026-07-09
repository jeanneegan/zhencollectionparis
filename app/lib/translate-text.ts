import type { Locale } from "@/app/artists/[slug]/data";

export type TranslatableFieldKey =
  | "tagline"
  | "practice"
  | "currentCity"
  | "artistStatement"
  | "hopeToLeave"
  | "whyChina"
  | "whyFrance";

export type TranslateFieldInput = {
  key: TranslatableFieldKey;
  text: string;
};

export type TranslateFieldResult = Partial<
  Record<TranslatableFieldKey, Partial<Record<Locale, string>>>
>;

const LOCALE_NAMES: Record<Locale, string> = {
  fr: "French",
  en: "English",
  zh: "Chinese",
};

const DEEPL_LOCALE: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  zh: "ZH",
};

function deeplBaseUrl(authKey: string) {
  return authKey.endsWith(":fx")
    ? "https://api-free.deepl.com/v2/translate"
    : "https://api.deepl.com/v2/translate";
}

async function translateBatchWithDeepL(
  texts: string[],
  sourceLocale: Locale,
  targetLocale: Locale,
  authKey: string,
): Promise<string[]> {
  if (texts.length === 0) {
    return [];
  }

  const body = new URLSearchParams();
  for (const text of texts) {
    body.append("text", text);
  }
  body.set("source_lang", DEEPL_LOCALE[sourceLocale]);
  body.set("target_lang", DEEPL_LOCALE[targetLocale]);

  const response = await fetch(deeplBaseUrl(authKey), {
    method: "POST",
    headers: {
      Authorization: `DeepL-Auth-Key ${authKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`DeepL error (${response.status}): ${detail.slice(0, 200)}`);
  }

  const payload = (await response.json()) as {
    translations: { text: string }[];
  };

  return payload.translations.map((item) => item.text);
}

async function translateWithOpenAI(
  fields: TranslateFieldInput[],
  sourceLocale: Locale,
  targetLocales: Locale[],
): Promise<TranslateFieldResult> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("translation_not_configured");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TRANSLATE_MODEL ?? "gpt-4o-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You translate artist profile content for Zhen Collection Paris, an art platform bridging Chinese and French cultures. Preserve artistic tone, nuance, and paragraph breaks. Return only valid JSON.",
        },
        {
          role: "user",
          content: JSON.stringify({
            task: "Translate each field from the source language into every target language.",
            sourceLanguage: LOCALE_NAMES[sourceLocale],
            sourceLocale,
            targetLocales,
            rules: [
              "Use locale codes fr, en, and zh as JSON keys only.",
              "Do not translate the source locale.",
              "Preserve paragraph breaks and artistic tone.",
            ],
            outputShape: {
              tagline: {
                fr: "French text",
                en: "English text",
                zh: "Chinese text",
              },
            },
            fields,
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI error (${response.status}): ${detail.slice(0, 200)}`);
  }

  const payload = (await response.json()) as {
    choices: { message: { content: string } }[];
  };

  const content = payload.choices[0]?.message?.content;
  if (!content) {
    throw new Error("translation_empty_response");
  }

  return JSON.parse(content) as TranslateFieldResult;
}

async function translateWithDeepL(
  fields: TranslateFieldInput[],
  sourceLocale: Locale,
  targetLocales: Locale[],
): Promise<TranslateFieldResult> {
  const authKey = process.env.DEEPL_AUTH_KEY;
  if (!authKey) {
    throw new Error("translation_not_configured");
  }

  const result: TranslateFieldResult = {};
  const texts = fields.map((field) => field.text);

  for (const targetLocale of targetLocales) {
    const translated = await translateBatchWithDeepL(
      texts,
      sourceLocale,
      targetLocale,
      authKey,
    );

    fields.forEach((field, index) => {
      result[field.key] = {
        ...result[field.key],
        [targetLocale]: translated[index] ?? "",
      };
    });
  }

  return result;
}

export async function translateProfileFields(
  fields: TranslateFieldInput[],
  sourceLocale: Locale,
  targetLocales: Locale[],
): Promise<TranslateFieldResult> {
  const nonEmptyFields = fields.filter((field) => field.text.trim().length > 0);

  if (nonEmptyFields.length === 0 || targetLocales.length === 0) {
    return {};
  }

  if (process.env.DEEPL_AUTH_KEY) {
    return translateWithDeepL(nonEmptyFields, sourceLocale, targetLocales);
  }

  if (process.env.OPENAI_API_KEY) {
    return translateWithOpenAI(nonEmptyFields, sourceLocale, targetLocales);
  }

  throw new Error("translation_not_configured");
}

export function getTranslationProviderLabel() {
  if (process.env.DEEPL_AUTH_KEY) {
    return "DeepL";
  }

  if (process.env.OPENAI_API_KEY) {
    return "OpenAI";
  }

  return null;
}
