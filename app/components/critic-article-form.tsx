"use client";

import { useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const formLabels: Record<
  Locale,
  {
    title: string;
    titlePlaceholder: string;
    article: string;
    articlePlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
  }
> = {
  zh: {
    title: "Titre · 文章标题",
    titlePlaceholder: "为您的评论文章起一个标题",
    article: "Article · 独立文章",
    articlePlaceholder:
      "在此撰写您的独立评论文章。可以讨论一位艺术家、一场展览、一种创作趋势，或任何您希望纳入公共阅读档案的批评写作…",
    submit: "Publier · 提交文章",
    thanks: "Merci · 我们已收到您的文章，感谢参与。",
    thanksSub: "Thank you · Your article has been received.",
  },
  fr: {
    title: "Titre · 文章标题",
    titlePlaceholder: "Donnez un titre à votre article de commentaire",
    article: "Article · 独立文章",
    articlePlaceholder:
      "Rédigez ici votre article indépendant : un artiste, une exposition, une tendance, ou tout texte critique que vous souhaitez voir entrer dans l'archive…",
    submit: "Publier · 提交文章",
    thanks: "Merci · Votre article a bien été reçu.",
    thanksSub: "Thank you · Your article has been received.",
  },
  en: {
    title: "Title",
    titlePlaceholder: "Give your review article a title",
    article: "Independent article",
    articlePlaceholder:
      "Write your standalone review here: an artist, an exhibition, a trend, or any critical text you wish to include in the archive…",
    submit: "Submit article",
    thanks: "Thank you · Your article has been received.",
    thanksSub: "We appreciate your contribution.",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function CriticArticleForm({ locale = "fr" }: { locale?: Locale }) {
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const l = formLabels[locale];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !article.trim()) {
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-2xl rounded-sm border border-stone-200 bg-white px-6 py-12 text-center">
        <p className="text-sm text-stone-700">{l.thanks}</p>
        <p className="mt-2 text-xs text-stone-400">{l.thanksSub}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-2xl space-y-4 text-left"
    >
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.title}
        </span>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          placeholder={l.titlePlaceholder}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.article}
        </span>
        <textarea
          value={article}
          onChange={(event) => setArticle(event.target.value)}
          rows={16}
          required
          placeholder={l.articlePlaceholder}
          className={`${inputClass} resize-y py-3 leading-relaxed`}
        />
      </label>

      <div className="flex justify-center pt-2">
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
