"use client";

import { useState } from "react";
import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";

const formLabels: Record<
  Locale,
  {
    section: string;
    intro: string;
    expectedPrice: string;
    expectedPricePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    thanks: string;
    thanksSub: string;
    pending: string;
  }
> = {
  zh: {
    section: "Demande de revente · 申请转售",
    intro: "藏家可通过平台提交转售意向；巴黎臻藏将协调画廊、艺术家与潜在买家，并跟进后续流程。",
    expectedPrice: "Prix souhaité · 期望价格（可选）",
    expectedPricePlaceholder: "例如 € 7 000 或 ¥ 120 000",
    message: "Notes · 补充说明（可选）",
    messagePlaceholder: "期望成交时间、是否可出借展览、交付地区或其他条件…",
    submit: "Envoyer la demande · 提交转售申请",
    thanks: "Merci · 您的转售申请已提交，平台将尽快与您联系。",
    thanksSub: "Thank you · Your resale request has been received.",
    pending: "Demande en cours · 转售申请处理中",
  },
  fr: {
    section: "Demande de revente · 申请转售",
    intro: "Le collectionneur peut soumettre une demande de revente via la plateforme ; Zhen Collection Paris coordonnera galerie, artiste et acquéreurs potentiels.",
    expectedPrice: "Prix souhaité · 期望价格（可选）",
    expectedPricePlaceholder: "Ex. 7 000 € ou 120 000 ¥",
    message: "Notes · 补充说明（可选）",
    messagePlaceholder: "Délai souhaité, prêt pour exposition, lieu de livraison ou autres conditions…",
    submit: "Envoyer la demande · 提交转售申请",
    thanks:
      "Merci · Votre demande de revente a bien été reçue. La plateforme vous contactera prochainement.",
    thanksSub: "Thank you · Your resale request has been received.",
    pending: "Demande en cours · 转售申请处理中",
  },
  en: {
    section: "Resale request",
    intro: "The collector may submit a resale request through the platform; Zhen Collection Paris will coordinate with the gallery, artist, and potential buyers.",
    expectedPrice: "Expected price (optional)",
    expectedPricePlaceholder: "e.g. €7,000 or ¥120,000",
    message: "Additional notes (optional)",
    messagePlaceholder: "Preferred timing, loan for exhibition, delivery region, or other terms…",
    submit: "Submit resale request",
    thanks: "Thank you · Your resale request has been received.",
    thanksSub: "The platform will follow up with you shortly.",
    pending: "Resale request pending",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function CollectorResaleRequestForm({
  locale,
  artworkTitle,
  artistName,
  initialPending = false,
}: {
  locale: Locale;
  artworkTitle: LocalizedText;
  artistName: LocalizedText;
  initialPending?: boolean;
}) {
  const [expectedPrice, setExpectedPrice] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(initialPending);
  const l = formLabels[locale];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="border-t border-stone-200 pt-5">
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
        {l.section}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{l.intro}</p>

      {submitted ? (
        <div className="mt-4 rounded-sm border border-stone-200 bg-white px-4 py-4">
          <p className="text-sm font-medium text-stone-800">{l.pending}</p>
          <p className="mt-2 text-sm text-stone-600">{l.thanks}</p>
          <p className="mt-1 text-xs text-stone-400">{l.thanksSub}</p>
          <p className="mt-3 text-[11px] text-stone-400">
            {t(artistName, locale)} · {t(artworkTitle, locale)}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.expectedPrice}
            </span>
            <input
              type="text"
              value={expectedPrice}
              onChange={(event) => setExpectedPrice(event.target.value)}
              placeholder={l.expectedPricePlaceholder}
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.message}
            </span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={3}
              placeholder={l.messagePlaceholder}
              className={`${inputClass} resize-y py-3 leading-relaxed`}
            />
          </label>

          <button
            type="submit"
            className="rounded-full border border-stone-900 px-5 py-2 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
          >
            {l.submit}
          </button>
        </form>
      )}
    </div>
  );
}
