"use client";

import { useCallback, useEffect, useState } from "react";
import { CLIENT_AUTH_COOKIE, CLIENT_AUTH_FLAG } from "@/app/lib/auth";

function readClientAuth(): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split(";")
    .some((part) => part.trim() === `${CLIENT_AUTH_COOKIE}=${CLIENT_AUTH_FLAG}`);
}

export function useIsAuthenticated(): boolean {
  const [authed, setAuthed] = useState(false);

  const sync = useCallback(() => {
    setAuthed(readClientAuth());
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("focus", sync);
    return () => window.removeEventListener("focus", sync);
  }, [sync]);

  return authed;
}
