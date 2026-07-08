import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExhibitionView } from "./exhibition-view";
import { getExhibitionBySlug } from "../data";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { resolveReturnTo } from "@/app/lib/return-to";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "peregrinations-girouettes-willy" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const exhibition = getExhibitionBySlug(slug);

  if (!exhibition) {
    return createPageMetadata({ title: "Exhibition · Zhen Collection Paris" });
  }

  return createPageMetadata({
    title: `${exhibition.title.fr} · Zhen Collection Paris`,
    description: exhibition.intro.fr,
  });
}

export default async function ExhibitionPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { from } = await searchParams;
  const exhibition = getExhibitionBySlug(slug);

  if (!exhibition) {
    notFound();
  }

  return (
    <ExhibitionView exhibition={exhibition} returnTo={resolveReturnTo(from)} />
  );
}
