"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";
import { resolvePostLoginPath } from "@/app/lib/return-to";

const formLabels: Record<
  Locale,
  {
    email: string;
    password: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    submit: string;
    forgot: string;
    error: string;
    loading: string;
  }
> = {
  zh: {
    email: "Email · 邮箱",
    password: "Mot de passe · 密码",
    emailPlaceholder: "votre@email.com",
    passwordPlaceholder: "••••••••",
    submit: "Se connecter · 登录",
    forgot: "Mot de passe oublié · 忘记密码",
    error: "Identifiants incorrects · 邮箱或密码错误",
    loading: "Connexion… · 登录中…",
  },
  fr: {
    email: "Email · 邮箱",
    password: "Mot de passe · 密码",
    emailPlaceholder: "votre@email.com",
    passwordPlaceholder: "••••••••",
    submit: "Se connecter · 登录",
    forgot: "Mot de passe oublié · 忘记密码",
    error: "Identifiants incorrects · 邮箱或密码错误",
    loading: "Connexion… · 登录中…",
  },
  en: {
    email: "Email",
    password: "Password",
    emailPlaceholder: "you@email.com",
    passwordPlaceholder: "••••••••",
    submit: "Sign in",
    forgot: "Forgot password",
    error: "Incorrect email or password",
    loading: "Signing in…",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

export function LoginForm({
  locale = "fr",
  next,
}: {
  locale?: Locale;
  next?: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const l = formLabels[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError(true);
        return;
      }

      const data = (await response.json()) as {
        redirectTo?: string;
      };

      router.push(
        resolvePostLoginPath(next, data.redirectTo ?? "/espace"),
      );
      router.refresh();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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
          onChange={(event) => {
            setEmail(event.target.value);
            setError(false);
          }}
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
          onChange={(event) => {
            setPassword(event.target.value);
            setError(false);
          }}
          required
          placeholder={l.passwordPlaceholder}
          className={inputClass}
        />
      </label>

      {error ? (
        <p className="text-center text-xs text-[#5a2323]">{l.error}</p>
      ) : null}

      <div className="flex flex-col items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? l.loading : l.submit}
        </button>
        <p className="text-[11px] tracking-[0.08em] text-stone-400">{l.forgot}</p>
      </div>
    </form>
  );
}
