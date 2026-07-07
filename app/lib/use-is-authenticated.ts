"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CLIENT_AUTH_COOKIE,
  CLIENT_AUTH_FLAG,
} from "@/app/lib/auth";

const CLIENT_AUTH_MAX_AGE = 60 * 60 * 24 * 7;

function readClientAuth(): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split(";")
    .some((part) => part.trim() === `${CLIENT_AUTH_COOKIE}=${CLIENT_AUTH_FLAG}`);
}

function writeClientAuthCookie() {
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; secure"
      : "";

  document.cookie = `${CLIENT_AUTH_COOKIE}=${CLIENT_AUTH_FLAG}; path=/; max-age=${CLIENT_AUTH_MAX_AGE}; samesite=lax${secure}`;
}

export function useIsAuthenticated(): boolean {
  const [authed, setAuthed] = useState(false);

  const sync = useCallback(() => {
    setAuthed(readClientAuth());
  }, []);

  useEffect(() => {
    if (readClientAuth()) {
      setAuthed(true);
      return;
    }

    fetch("/api/auth/session")
      .then((response) => response.json())
      .then((data: { authenticated?: boolean }) => {
        if (data.authenticated) {
          writeClientAuthCookie();
          setAuthed(true);
        }
      })
      .catch(() => {
        // Ignore session lookup errors and keep public navigation.
      });
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("focus", sync);
    return () => window.removeEventListener("focus", sync);
  }, [sync]);

  return authed;
}

export function shouldHidePublicNav(pathname: string): boolean {
  return pathname.startsWith("/espace");
}
