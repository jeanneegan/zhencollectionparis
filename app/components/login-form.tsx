"use client";

import { useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const formLabels: Record<
  Locale,
  {
    email: string;
    password: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    submit: string;
    forgot: string;
    pendingTitle: string;
    pendingBody: string;
    pendingSub: string;
  }
> = {
  zh: {
    email: "Email · 邮箱",
    password: "Mot de passe · 密码",
    emailPlaceholder: "votre@email.com",
    passwordPlaceholder: "••••••••",
    submit: "Se connecter · 登录",
    forgot: "Mot de passe oublié · 忘记密码",
    pendingTitle: "Espace membre en préparation · 成员空间筹备中",
    pendingBody:
      "巴黎臻藏的成员登录功能即将开放。若您已是合作艺术家、机构或团队成员，请暂时通过现有渠道与我们联系。",
    pendingSub:
      "Member sign-in is coming soon. If you already collaborate with Zhen Collection Paris, please reach us through your usual contact.",
  },
  fr: {
    email: "Email · 邮箱",
    password: "Mot de passe · 密码",
    emailPlaceholder: "votre@email.com",
    passwordPlaceholder: "••••••••",
    submit: "Se connecter · 登录",
    forgot: "Mot de passe oublié · 忘记密码",
    pendingTitle: "Espace membre en préparation · 成员空间筹备中",
    pendingBody:
      "La connexion membre de Zhen Collection Paris sera bientôt disponible. Si vous collaborez déjà avec nous — artiste, institution ou équipe — merci de nous contacter par vos canaux habituels.",
    pendingSub:
      "Member sign-in is coming soon. If you already collaborate with Zhen Collection Paris, please reach us through your usual contact.",
  },
  en: {
    email: "Email",
    password: "Password",
    emailPlaceholder: "you@email.com",
    passwordPlaceholder: "••••••••",
    submit: "Sign in",
    forgot: "Forgot password",
    pendingTitle: "Member space coming soon",
    pendingBody:
      "Member sign-in for Zhen Collection Paris will open shortly. If you already collaborate with us as an artist, institution, or team member, please reach us through your usual contact.",
    pendingSub: "We will notify you when access is available.",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function LoginForm({ locale = "fr" }: { locale?: Locale }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const l = formLabels[locale];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-10 max-w-lg rounded-sm border border-stone-200 bg-white px-6 py-8 text-center">
        <p className="text-sm text-stone-700">{l.pendingTitle}</p>
        <p className="mt-4 text-sm leading-[1.9] text-stone-600">{l.pendingBody}</p>
        <p className="mt-3 text-xs text-stone-400">{l.pendingSub}</p>
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
          {l.email}
        </span>
        <input
          type="email"
          value={email}
          autoComplete="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder={l.emailPlaceholder}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {l.password}
        </span>
        <input
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          required
          placeholder={l.passwordPlaceholder}
          className={inputClass}
        />
      </label>

      <div className="flex flex-col items-center gap-4 pt-2">
        <button
          type="submit"
          className="rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
        >
          {l.submit}
        </button>
        <p className="text-[11px] tracking-[0.08em] text-stone-400">{l.forgot}</p>
      </div>
    </form>
  );
}
