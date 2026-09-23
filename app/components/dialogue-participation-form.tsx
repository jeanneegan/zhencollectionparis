"use client";

import { useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

type Role = "artist" | "observer" | "public" | "other";

const formLabels: Record<
  Locale,
  {
    name: string;
    email: string;
    role: string;
    message: string;
    link: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    linkPlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    roles: Record<Role, string>;
  }
> = {
  zh: {
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    role: "Profil · 身份",
    message: "Motivation · 简述与意向",
    link: "Lien · 作品或网站链接（可选）",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder:
      "请简述您的背景、为何想参与对话，以及您希望以何种方式参与…",
    linkPlaceholder: "https://…",
    submit: "Envoyer · 提交申请",
    thanks: "Merci · 我们已收到您的申请，会尽快与您联系。",
    thanksSub: "Thank you · Your application has been received.",
    roles: {
      artist: "Artiste · 艺术家",
      observer: "Observateur · 观察者",
      public: "Public · 公众提问者",
      other: "Autre · 其他",
    },
  },
  fr: {
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    role: "Profil · 身份",
    message: "Motivation · 简述与意向",
    link: "Lien · 作品或网站链接（可选）",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder:
      "Présentez votre parcours, pourquoi vous souhaitez participer, et comment…",
    linkPlaceholder: "https://…",
    submit: "Envoyer · 提交申请",
    thanks:
      "Merci · Votre candidature a bien été reçue. Nous vous contacterons bientôt.",
    thanksSub: "Thank you · Your application has been received.",
    roles: {
      artist: "Artiste · 艺术家",
      observer: "Observateur · 观察者",
      public: "Public · 公众提问者",
      other: "Autre · 其他",
    },
  },
  en: {
    name: "Name",
    email: "Email",
    role: "Profile",
    message: "Motivation",
    link: "Portfolio or website link (optional)",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder:
      "Briefly introduce yourself, why you want to join a conversation, and how you would participate…",
    linkPlaceholder: "https://…",
    submit: "Submit application",
    thanks: "Thank you · Your application has been received.",
    thanksSub: "We will be in touch soon.",
    roles: {
      artist: "Artist",
      observer: "Observer",
      public: "Public participant",
      other: "Other",
    },
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function DialogueParticipationForm({ locale = "fr" }: { locale?: Locale }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("artist");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const l = formLabels[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/participer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          role,
          message,
          link: link.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("submit-failed");
      }

      setSubmitted(true);
    } catch {
      setError(
        locale === "en"
          ? "Unable to send your application. Please try again or email contact@zhencollection.paris."
          : "提交失败，请稍后再试，或直接写信至 contact@zhencollection.paris。",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-lg rounded-sm border border-stone-200 bg-white px-6 py-8 text-center">
        <p className="text-sm text-stone-700">{l.thanks}</p>
        <p className="mt-2 text-xs text-stone-400">{l.thanksSub}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-lg space-y-4 text-left"
    >
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.name}
        </span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          placeholder={l.namePlaceholder}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.email}
        </span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder={l.emailPlaceholder}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.role}
        </span>
        <select
          value={role}
          onChange={(event) => setRole(event.target.value as Role)}
          className={inputClass}
        >
          {(Object.keys(l.roles) as Role[]).map((key) => (
            <option key={key} value={key}>
              {l.roles[key]}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.message}
        </span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          required
          placeholder={l.messagePlaceholder}
          className={`${inputClass} resize-y py-3 leading-relaxed`}
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.link}
        </span>
        <input
          type="url"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          placeholder={l.linkPlaceholder}
          className={inputClass}
        />
      </label>

      {error ? (
        <p className="text-center text-xs text-red-700">{error}</p>
      ) : null}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white disabled:opacity-50"
        >
          {l.submit}
        </button>
      </div>
    </form>
  );
}
