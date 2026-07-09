import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ArtworkPassportView } from "./artwork-passport";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import { getArtworkPassport, t } from "@/app/lib/artwork-passport";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { resolveReturnTo } from "@/app/lib/return-to";

type PageProps = {
  params: Promise<{ artistSlug: string; workId: string }>;
  searchParams: Promise<{ from?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { artistSlug, workId } = await params;
  const passport = getArtworkPassport(artistSlug, workId);

  if (!passport) {
    return createPageMetadata({ title: "Œuvre · Zhen Collection Paris" });
  }

  return createPageMetadata({
    title: `${t(passport.title, "fr")} · ${t(passport.artistName, "fr")} · Zhen Collection Paris`,
    description: t(passport.passportNote, "fr"),
    images: [passport.image],
  });
}

export default async function ArtworkPassportPage({ params, searchParams }: PageProps) {
  const { artistSlug, workId } = await params;
  const { from } = await searchParams;
  const passport = getArtworkPassport(artistSlug, workId);

  if (!passport) {
    notFound();
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member =
    isAuthenticatedSession(session) ? getMemberBySession(session) : null;

  return (
    <ArtworkPassportView
      passport={passport}
      returnTo={resolveReturnTo(from)}
      member={member ?? undefined}
    />
  );
}
