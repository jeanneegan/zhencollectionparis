import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { ArtworkPassportView } from "@/app/oeuvres/[artistSlug]/[workId]/artwork-passport";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import { getEditionCopyPassport } from "@/app/lib/edition-copy-passport";
import { listEditionCopyRoutes } from "@/app/edition/data";
import { t } from "@/app/lib/artwork-passport";
import { createPageMetadata, shareImageFromPath } from "@/app/lib/site-metadata";

type PageProps = {
  params: Promise<{ id: string; copy: string }>;
};

export async function generateStaticParams() {
  return listEditionCopyRoutes().map(({ editionId, copyNumber }) => ({
    id: editionId,
    copy: String(copyNumber),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id, copy } = await params;
  const copyNumber = Number(copy);
  const passport = getEditionCopyPassport(id, copyNumber);

  if (!passport || !Number.isFinite(copyNumber)) {
    return createPageMetadata({ title: "Édition · Zhen Collection Paris" });
  }

  const shareImage = passport.image
    ? shareImageFromPath(
        passport.image,
        `${t(passport.title, "fr")} · ${copyNumber}/${passport.editionCopy?.total ?? ""}`,
      )
    : undefined;

  return createPageMetadata({
    title: `${t(passport.title, "fr")} · ${copyNumber}/${passport.editionCopy?.total ?? ""} · Zhen Collection Paris`,
    description: t(passport.passportNote, "fr"),
    ...(shareImage ? { images: [shareImage] } : {}),
  });
}

export default async function EditionCopyPassportPage({ params }: PageProps) {
  const { id, copy } = await params;
  const copyNumber = Number(copy);
  const passport = getEditionCopyPassport(id, copyNumber);

  if (!passport || !Number.isFinite(copyNumber)) {
    notFound();
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member =
    isAuthenticatedSession(session) ? getMemberBySession(session) : null;

  return (
    <ArtworkPassportView
      passport={passport}
      returnTo={`/edition/${id}`}
      member={member ?? undefined}
    />
  );
}
