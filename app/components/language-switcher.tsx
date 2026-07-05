"use client";

import type { Locale } from "@/app/artists/[slug]/data";

const locales: { key: Locale; label: string }[] = [
  { key: "fr", label: "FR" },
  { key: "zh", label: "中文" },
  { key: "en", label: "EN" },
];

export function LanguageSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-stone-200 bg-stone-50 p-1">
      {locales.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide transition-colors ${
            locale === key
              ? "bg-stone-900 text-white"
              : "text-stone-500 hover:text-stone-900"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
