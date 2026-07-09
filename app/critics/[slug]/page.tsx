import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { CriticPassport } from "./critic-passport";
import { getCriticBySlug, t } from "./data";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { resolveReturnTo } from "@/app/lib/return-to";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const critic = getCriticBySlug(slug);

  if (!critic) {
    return createPageMetadata({ title: "Critic · Zhen Collection Paris" });
  }

  return createPageMetadata({
    title: `${t(critic.name, "fr")} · Archive commentateur · Zhen Collection Paris`,
    description: t(critic.tagline, "fr"),
  });
}

export default async function CriticPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const critic = getCriticBySlug(slug);

  if (!critic) {
    notFound();
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member =
    isAuthenticatedSession(session) ? getMemberBySession(session) : null;

  return (
    <CriticPassport
      critic={critic}
      returnTo={resolveReturnTo(from)}
      member={member ?? undefined}
    />
  );
}
