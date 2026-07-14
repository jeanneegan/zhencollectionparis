"use client";

import { useState } from "react";
import { type Locale, type LocalizedText, t } from "@/app/artists/[slug]/data";

type InquiryTypeId =
  | "collecting"
  | "representation"
  | "gallery"
  | "curatorial"
  | "exhibition"
  | "media"
  | "artist-collaboration"
  | "other";

const inquiryTypes: {
  id: InquiryTypeId;
  label: LocalizedText;
}[] = [
  {
    id: "collecting",
    label: { zh: "收藏作品", fr: "Collection d'œuvres", en: "Collecting artwork" },
  },
  {
    id: "representation",
    label: { zh: "代理合作", fr: "Partenariat de représentation", en: "Representation" },
  },
  {
    id: "gallery",
    label: { zh: "画廊合作", fr: "Collaboration galerie", en: "Gallery collaboration" },
  },
  {
    id: "curatorial",
    label: { zh: "策展合作", fr: "Collaboration curatoriale", en: "Curatorial collaboration" },
  },
  {
    id: "exhibition",
    label: { zh: "展览邀请", fr: "Invitation à une exposition", en: "Exhibition invitation" },
  },
  {
    id: "media",
    label: { zh: "媒体采访", fr: "Interview média", en: "Media interview" },
  },
  {
    id: "artist-collaboration",
    label: { zh: "艺术家合作", fr: "Collaboration artistique", en: "Artist collaboration" },
  },
  {
    id: "other",
    label: { zh: "其他", fr: "Autre", en: "Other" },
  },
];

const formLabels: Record<
  Locale,
  {
    chooseInquiry: string;
    inquiryType: string;
    changeInquiry: string;
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
    chooseInquiry: "请选择您希望咨询的内容",
    inquiryType: "咨询内容 · Type de demande",
    changeInquiry: "重新选择 · Changer",
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    artist: "Artiste · 艺术家",
    artwork: "Œuvre · 感兴趣的作品（可选）",
    message: "Message · 补充说明（可选）",
    namePlaceholder: "您的姓名",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder: "尺寸、预算、交付地区或其他问题…",
    submit: "Envoyer · 发送咨询",
    thanks: "Merci · 我们已收到您的咨询，会尽快与您联系。",
    thanksSub: "Thank you · Your inquiry has been received.",
    artworkGeneral: "咨询该艺术家 · General inquiry",
  },
  fr: {
    chooseInquiry: "Veuillez choisir le type de demande · 请选择您希望咨询的内容",
    inquiryType: "Type de demande · 咨询内容",
    changeInquiry: "Changer · 重新选择",
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    artist: "Artiste · 艺术家",
    artwork: "Œuvre · 感兴趣的作品（可选）",
    message: "Message · 补充说明（可选）",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "votre@email.com",
    messagePlaceholder: "Format, budget, lieu de livraison ou autres questions…",
    submit: "Envoyer · 发送咨询",
    thanks: "Merci · Votre demande a bien été reçue. Nous vous contacterons bientôt.",
    thanksSub: "Thank you · Your inquiry has been received.",
    artworkGeneral: "Demande générale · 咨询该艺术家",
  },
  en: {
    chooseInquiry: "Please select what you'd like to inquire about",
    inquiryType: "Inquiry type",
    changeInquiry: "Change selection",
    name: "Name",
    email: "Email",
    artist: "Artist",
    artwork: "Artwork of interest (optional)",
    message: "Additional notes (optional)",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Size, budget, delivery region, or other questions…",
    submit: "Send inquiry",
    thanks: "Thank you · Your inquiry has been received.",
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
  const [inquiryType, setInquiryType] = useState<InquiryTypeId | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workId, setWorkId] = useState(initialWorkId);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const l = formLabels[locale];

  const selectedInquiryLabel = inquiryTypes.find((type) => type.id === inquiryType);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !inquiryType) return;
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

  if (!inquiryType) {
    return (
      <div className="mx-auto mt-10 max-w-lg text-left">
        <p className="text-center text-sm text-stone-600">{l.chooseInquiry}</p>
        <ul className="mt-6 space-y-2">
          {inquiryTypes.map((type) => (
            <li key={type.id}>
              <button
                type="button"
                onClick={() => setInquiryType(type.id)}
                className="w-full rounded-sm border border-stone-200 bg-white px-4 py-3 text-left text-sm text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
              >
                {t(type.label, locale)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-lg space-y-4 text-left"
    >
      <div className="rounded-sm border border-stone-200 bg-stone-50/60 px-4 py-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.inquiryType}
            </p>
            <p className="mt-1 text-sm text-stone-800">
              {selectedInquiryLabel ? t(selectedInquiryLabel.label, locale) : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setInquiryType(null)}
            className="shrink-0 text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {l.changeInquiry}
          </button>
        </div>
      </div>

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
