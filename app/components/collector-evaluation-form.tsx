"use client";

import { useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<
  Locale,
  {
    evaluation: string;
    evaluationPlaceholder: string;
    name: string;
    namePlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    note: string;
  }
> = {
  zh: {
    evaluation: "Regard · 评价留言",
    evaluationPlaceholder:
      "欢迎受邀藏家就这件作品留下专业阅读、持藏体会或持续评价…",
    name: "Nom · 姓名（可选）",
    namePlaceholder: "匿名",
    submit: "Envoyer · 提交评价",
    thanks: "Merci · 我们已收到您的评价，感谢参与。",
    thanksSub: "Thank you · Your evaluation has been received.",
    note: "留言经审阅后纳入作品护照档案。",
  },
  fr: {
    evaluation: "Regard · 评价留言",
    evaluationPlaceholder:
      "Collectionneurs invités : partagez votre lecture professionnelle, votre expérience de conservation ou une évaluation continue…",
    name: "Nom · 姓名（可选）",
    namePlaceholder: "Anonymous · 匿名",
    submit: "Envoyer · 提交评价",
    thanks: "Merci · Votre évaluation a bien été reçue.",
    thanksSub: "Thank you · Your evaluation has been received.",
    note: "Les messages sont intégrés au passeport après relecture.",
  },
  en: {
    evaluation: "Evaluation",
    evaluationPlaceholder:
      "Invited collectors: share your professional reading, holding experience, or ongoing evaluation of this work…",
    name: "Name (optional)",
    namePlaceholder: "Anonymous",
    submit: "Submit evaluation",
    thanks: "Thank you · Your evaluation has been received.",
    thanksSub: "We appreciate your participation.",
    note: "Messages are added to the artwork passport after review.",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function CollectorEvaluationForm({ locale }: { locale: Locale }) {
  const [evaluation, setEvaluation] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const l = labels[locale];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!evaluation.trim()) {
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8 max-w-2xl rounded-sm border border-stone-200 bg-white px-6 py-8 text-center">
        <p className="text-sm text-stone-700">{l.thanks}</p>
        <p className="mt-2 text-xs text-stone-400">{l.thanksSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-4 text-left">
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.evaluation}
        </span>
        <textarea
          value={evaluation}
          onChange={(event) => setEvaluation(event.target.value)}
          rows={6}
          required
          placeholder={l.evaluationPlaceholder}
          className={`${inputClass} resize-y py-3 leading-relaxed`}
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.name}
        </span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={l.namePlaceholder}
          className={inputClass}
        />
      </label>

      <p className="text-xs text-stone-400">{l.note}</p>

      <div className="pt-2">
        <button
          type="submit"
          className="rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
        >
          {l.submit}
        </button>
      </div>
    </form>
  );
}
