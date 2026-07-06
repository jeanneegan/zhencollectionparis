"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const LOCALE_STORAGE_KEY = "zcp-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === "fr" || stored === "zh" || stored === "en") return stored;
  return "fr";
}

export function useLocale(): [Locale, (locale: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  return [locale, setLocale];
}
