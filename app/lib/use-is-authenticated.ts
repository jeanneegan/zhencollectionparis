"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CLIENT_AUTH_COOKIE,
  CLIENT_AUTH_FLAG,
} from "@/app/lib/auth";
import {
  RETURN_FROM_ESPACE,
  RETURN_FROM_ESPACE_EXHIBITIONS,
} from "@/app/lib/return-to";

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

export function shouldHidePublicNav(
  pathname: string,
  isAuthenticated: boolean,
  from?: string | null,
): boolean {
  if (isAuthenticated) {
    return true;
  }

  if (pathname.startsWith("/espace")) {
    return true;
  }

  if (
    pathname.startsWith("/exhibitions") &&
    (from === RETURN_FROM_ESPACE_EXHIBITIONS || from === RETURN_FROM_ESPACE)
  ) {
    return true;
  }

  return false;
}

export function readReturnFromParam(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("from");
}
