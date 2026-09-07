"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const formLabels: Record<
  Locale,
  {
    message: string;
    name: string;
    messagePlaceholder: string;
    namePlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    error: string;
  }
> = {
  zh: {
    message: "Message · 留言",
    name: "Nom · 姓名（可选）",
    messagePlaceholder: "在此输入留言…",
    namePlaceholder: "匿名",
    submit: "Laisser un message · 发送留言",
    thanks: "Merci · 感谢您的留言，我们会尽快纳入对话。",
    thanksSub: "Thank you · Your message has been received.",
    error: "发送失败，请稍后再试。",
  },
  fr: {
    message: "Message · 留言",
    name: "Nom · 姓名（可选）",
    messagePlaceholder: "Écrivez votre message ici…",
    namePlaceholder: "Anonymous · 匿名",
    submit: "Laisser un message · 发送留言",
    thanks:
      "Merci · Votre message a bien été reçu et sera intégré à la conversation.",
    thanksSub: "Thank you · Your message has been received.",
    error: "Échec de l'envoi. Veuillez réessayer.",
  },
  en: {
    message: "Message",
    name: "Name (optional)",
    messagePlaceholder: "Write your message here…",
    namePlaceholder: "Anonymous",
    submit: "Send message",
    thanks: "Thank you · Your message has been received.",
    thanksSub: "We will include it in the conversation soon.",
    error: "Unable to send your message. Please try again.",
  },
};

export function PublicMessageForm({
  episodeSlug,
  inverted = false,
  locale = "fr",
}: {
  episodeSlug: string;
  inverted?: boolean;
  locale?: Locale;
}) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const l = formLabels[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/dialogue/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          episodeSlug,
          message,
          name: name.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("submit-failed");
      }

      setSubmitted(true);
      router.refresh();
    } catch {
      setError(l.error);
    } finally {
      setSubmitting(false);
    }
  }

  const labelClass = inverted ? "text-red-100/70" : "text-stone-400";
  const successBoxClass = inverted
    ? "border-red-200/20 bg-white/95"
    : "border-stone-200 bg-white";
  const buttonClass = inverted
    ? "border-white text-white hover:bg-white hover:text-[#5a2323]"
    : "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white";

  if (submitted) {
    return (
      <div
        className={`mx-auto mt-8 max-w-lg rounded-sm border px-6 py-8 text-center ${successBoxClass}`}
      >
        <p className="text-sm text-stone-700">{l.thanks}</p>
        <p className="mt-2 text-xs text-stone-400">{l.thanksSub}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-lg space-y-4 text-left"
    >
      <label className="block">
        <span
          className={`text-[10px] uppercase tracking-[0.15em] ${labelClass}`}
        >
          {l.message}
        </span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          required
          placeholder={l.messagePlaceholder}
          className="mt-2 w-full resize-y rounded-sm border border-stone-300 bg-white px-4 py-3 text-sm leading-relaxed text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none"
        />
      </label>

      <label className="block">
        <span
          className={`text-[10px] uppercase tracking-[0.15em] ${labelClass}`}
        >
          {l.name}
        </span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={l.namePlaceholder}
          className="mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none"
        />
      </label>

      {error ? (
        <p className="text-center text-xs text-red-600">{error}</p>
      ) : null}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={submitting}
          className={`rounded-full border px-6 py-2.5 text-xs font-medium tracking-[0.12em] transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${buttonClass}`}
        >
          {l.submit}
        </button>
      </div>
    </form>
  );
}
