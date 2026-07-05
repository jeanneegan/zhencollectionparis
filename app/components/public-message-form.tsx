"use client";

import { useState } from "react";

export function PublicMessageForm() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-8 max-w-lg rounded-sm border border-stone-200 bg-white px-6 py-8 text-center">
        <p className="text-sm text-stone-700">
          Merci · 感谢您的留言，我们会尽快纳入对话。
        </p>
        <p className="mt-2 text-xs text-stone-400">
          Thank you · Your message has been received.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-lg space-y-4 text-left"
    >
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          Message · 留言
        </span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          required
          placeholder="Écrivez votre message ici… / 在此输入留言…"
          className="mt-2 w-full resize-y rounded-sm border border-stone-300 bg-white px-4 py-3 text-sm leading-relaxed text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          Nom · 姓名（可选）
        </span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Anonymous · 匿名"
          className="mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none"
        />
      </label>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
        >
          Laisser un message · 发送留言
        </button>
      </div>
    </form>
  );
}
