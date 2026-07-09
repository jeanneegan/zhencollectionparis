"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";

export type EvaluationWork = {
  id: string;
  artistSlug: string;
  artistName: LocalizedText;
  title: LocalizedText;
  year: number;
  medium: LocalizedText;
  dimensions: string;
  image: string;
};

const evaluationFormLabels: Record<
  Locale,
  {
    evaluation: string;
    evaluationPlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    artistLabel: string;
    workLabel: string;
    selectWork: string;
  }
> = {
  zh: {
    evaluation: "Regard professionnel · 专业观点",
    evaluationPlaceholder:
      "请从您的专业立场出发，分享对这件作品的判断、分析或评价。可涉及技法、语境、市场、学术或策展视角…",
    submit: "Envoyer · 提交专业观点",
    thanks: "Merci · 我们已收到您的专业观点，感谢参与。",
    thanksSub: "Thank you · Your professional view has been received.",
    artistLabel: "Artiste · 艺术家",
    workLabel: "Œuvre · 作品信息",
    selectWork: "Choisir une œuvre · 选择作品",
  },
  fr: {
    evaluation: "Regard professionnel · 专业观点",
    evaluationPlaceholder:
      "Depuis votre position professionnelle : jugement, analyse ou évaluation de l'œuvre. Technique, contexte, marché, recherche ou regard curatoriel…",
    submit: "Envoyer · 提交专业观点",
    thanks: "Merci · Votre regard professionnel a bien été reçu.",
    thanksSub: "Thank you · Your professional view has been received.",
    artistLabel: "Artiste · 艺术家",
    workLabel: "Œuvre · 作品信息",
    selectWork: "Choisir une œuvre · 选择作品",
  },
  en: {
    evaluation: "Professional view",
    evaluationPlaceholder:
      "From your professional standpoint: assessment, analysis, or evaluation of the work. Technique, context, market, research, or curatorial perspective…",
    submit: "Submit professional view",
    thanks: "Thank you · Your professional view has been received.",
    thanksSub: "We appreciate your contribution.",
    artistLabel: "Artist",
    workLabel: "Artwork",
    selectWork: "Choose an artwork",
  },
};

const criticFormLabels: Record<
  Locale,
  {
    evaluation: string;
    evaluationPlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    artistLabel: string;
    workLabel: string;
    selectWork: string;
  }
> = {
  zh: {
    evaluation: "Commentaire · 评论文章",
    evaluationPlaceholder:
      "请以评论者身份撰写评论：可分析作品的语言、语境、艺术家脉络、美学立场或当代意义…",
    submit: "Publier · 提交评论",
    thanks: "Merci · 我们已收到您的评论，感谢参与。",
    thanksSub: "Thank you · Your review has been received.",
    artistLabel: "Artiste · 艺术家",
    workLabel: "Œuvre · 作品信息",
    selectWork: "Choisir une œuvre · 选择作品",
  },
  fr: {
    evaluation: "Commentaire · 评论文章",
    evaluationPlaceholder:
      "Rédigez votre commentaire : langage de l'œuvre, contexte, trajectoire de l'artiste, position esthétique ou portée contemporaine…",
    submit: "Publier · 提交评论",
    thanks: "Merci · Votre commentaire a bien été reçu.",
    thanksSub: "Thank you · Your review has been received.",
    artistLabel: "Artiste · 艺术家",
    workLabel: "Œuvre · 作品信息",
    selectWork: "Choisir une œuvre · 选择作品",
  },
  en: {
    evaluation: "Review",
    evaluationPlaceholder:
      "Write your review: the work's language, context, the artist's trajectory, aesthetic position, or contemporary relevance…",
    submit: "Submit review",
    thanks: "Thank you · Your review has been received.",
    thanksSub: "We appreciate your contribution.",
    artistLabel: "Artist",
    workLabel: "Artwork",
    selectWork: "Choose an artwork",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function ArtworkEvaluationForm({
  locale = "fr",
  works,
  variant = "evaluation",
}: {
  locale?: Locale;
  works: EvaluationWork[];
  variant?: "evaluation" | "critic";
}) {
  const [selectedId, setSelectedId] = useState(works[0]?.id ?? "");
  const [evaluation, setEvaluation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const l =
    variant === "critic" ? criticFormLabels[locale] : evaluationFormLabels[locale];
  const selectedWork =
    works.find((work) => work.id === selectedId) ?? works[0] ?? null;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!evaluation.trim() || !selectedWork) {
      return;
    }
    setSubmitted(true);
  }

  if (!selectedWork) {
    return null;
  }

  if (submitted) {
    return (
      <div className="mt-10 rounded-sm border border-stone-200 bg-white px-6 py-12 text-center lg:col-span-2">
        <p className="text-sm text-stone-700">{l.thanks}</p>
        <p className="mt-2 text-xs text-stone-400">{l.thanksSub}</p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-8 lg:self-start">
        <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.selectWork}
        </p>
        <ul className="mt-3 flex gap-2 overflow-x-auto pb-2 lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:gap-1 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1">
          {works.map((work) => {
            const active = work.id === selectedWork.id;

            return (
              <li key={work.id} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setSelectedId(work.id)}
                  className={`flex w-full items-center gap-3 border p-2 text-left transition-colors ${
                    active
                      ? "border-stone-900 bg-stone-50"
                      : "border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <span className="relative h-16 w-12 shrink-0 overflow-hidden bg-stone-100">
                    <Image
                      src={work.image}
                      alt={t(work.title, locale)}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </span>
                  <span className="hidden min-w-0 lg:block">
                    <span className="block truncate text-xs font-medium text-stone-900">
                      {t(work.title, locale)}
                    </span>
                    <span className="mt-1 block truncate text-[11px] text-stone-500">
                      {t(work.artistName, locale)}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="min-w-0 space-y-8">
        <div className="border border-stone-200 bg-stone-50/40">
          <div className="relative aspect-[4/5] w-full bg-stone-100 md:aspect-[5/4]">
            <Image
              src={selectedWork.image}
              alt={t(selectedWork.title, locale)}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 720px"
              priority
            />
          </div>

          <div className="grid gap-6 border-t border-stone-200 px-5 py-6 sm:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                {l.artistLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-stone-900">
                {t(selectedWork.artistName, locale)}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                {l.workLabel}
              </p>
              <p className="mt-2 text-sm font-medium text-stone-900">
                {t(selectedWork.title, locale)}
              </p>
              <p className="mt-2 text-sm text-stone-600">
                {selectedWork.year} · {t(selectedWork.medium, locale)}
              </p>
              <p className="mt-1 text-sm text-stone-500">
                {selectedWork.dimensions}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.evaluation}
            </span>
            <textarea
              value={evaluation}
              onChange={(event) => setEvaluation(event.target.value)}
              rows={8}
              required
              placeholder={l.evaluationPlaceholder}
              className={`${inputClass} resize-y py-3 leading-relaxed`}
            />
          </label>

          <div className="flex justify-center pt-2 lg:justify-start">
            <button
              type="submit"
              className="rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
            >
              {l.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
