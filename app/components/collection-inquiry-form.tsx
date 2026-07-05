"use client";

import { useState } from "react";
import { type Locale, type LocalizedText, t } from "@/app/artists/[slug]/data";

const formLabels: Record<
  Locale,
  {
    name: string;
    email: string;
    artist: string;
    artwork: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    artworkGeneral: string;
  }
> = {
  zh: {
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    artist: "Artiste · 艺术家",
    artwork: "Œuvre · 感兴趣的作品（可选）",
    message: "Message · 补充说明（可选）",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder: "尺寸、预算、交付地区或其他问题…",
    submit: "Envoyer · 发送咨询",
    thanks: "Merci · 我们已收到您的收藏咨询，会尽快与您联系。",
    thanksSub: "Thank you · Your inquiry has been received.",
    artworkGeneral: "咨询该艺术家 · General inquiry",
  },
  fr: {
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    artist: "Artiste · 艺术家",
    artwork: "Œuvre · 感兴趣的作品（可选）",
    message: "Message · 补充说明（可选）",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder: "Format, budget, lieu de livraison ou autres questions…",
    submit: "Envoyer · 发送咨询",
    thanks:
      "Merci · Votre demande de collection a bien été reçue. Nous vous contacterons bientôt.",
    thanksSub: "Thank you · Your inquiry has been received.",
    artworkGeneral: "Demande générale · 咨询该艺术家",
  },
  en: {
    name: "Name",
    email: "Email",
    artist: "Artist",
    artwork: "Artwork of interest (optional)",
    message: "Additional notes (optional)",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Size, budget, delivery region, or other questions…",
    submit: "Send inquiry",
    thanks: "Thank you · Your collection inquiry has been received.",
    thanksSub: "We will be in touch soon.",
    artworkGeneral: "General inquiry about this artist",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function CollectionInquiryForm({
  locale = "fr",
  artistName,
  artworks = [],
  initialWorkId = "",
}: {
  locale?: Locale;
  artistName?: string;
  artworks?: { id: string; title: LocalizedText }[];
  initialWorkId?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workId, setWorkId] = useState(initialWorkId);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const l = formLabels[locale];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
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

      {artistName ? (
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.artist}
          </span>
          <input
            type="text"
            value={artistName}
            readOnly
            className={`${inputClass} bg-stone-50 text-stone-600`}
          />
        </label>
      ) : null}

      {artworks.length > 0 ? (
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.artwork}
          </span>
          <select
            value={workId}
            onChange={(event) => setWorkId(event.target.value)}
            className={inputClass}
          >
            <option value="">{l.artworkGeneral}</option>
            {artworks.map((artwork) => (
              <option key={artwork.id} value={artwork.id}>
                {t(artwork.title, locale)}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.message}
        </span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          placeholder={l.messagePlaceholder}
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
