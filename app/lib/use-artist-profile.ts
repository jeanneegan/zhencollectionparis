"use client";

import { useEffect, useState } from "react";
import type { ArtistProfile } from "@/app/artists/[slug]/data";
import {
  ARTIST_PROFILE_UPDATED_EVENT,
  mergeArtistProfile,
  readArtistProfileEdits,
} from "@/app/lib/artist-profile-edits";

export function useArtistProfile(base: ArtistProfile): ArtistProfile {
  const [profile, setProfile] = useState(base);

  useEffect(() => {
    function refresh() {
      setProfile(mergeArtistProfile(base, readArtistProfileEdits(base.slug)));
    }

    refresh();

    function handleStorage(event: StorageEvent) {
      if (event.key?.startsWith("zcp-artist-profile-edits:")) {
        refresh();
      }
    }

    window.addEventListener("storage", handleStorage);
    window.addEventListener(ARTIST_PROFILE_UPDATED_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(ARTIST_PROFILE_UPDATED_EVENT, refresh);
    };
  }, [base]);

  return profile;
}
