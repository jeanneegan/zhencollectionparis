"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import type { ArtistProfile, Locale } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";
import {
  applyProfileTranslations,
  buildTranslateFieldsFromForm,
  formHasSecondaryTranslations,
} from "@/app/lib/artist-profile-translate";
import {
  ARTIST_PROFILE_UPDATED_EVENT,
  clearArtistProfileEdits,
  LOCALE_LABELS,
  profileToEditForm,
  readArtistProfileEdits,
  writeArtistProfileEdits,
  type ArtistProfileEdit,
} from "@/app/lib/artist-profile-edits";
import { useLocale } from "@/app/lib/use-locale";

const labels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    title: string;
    intro: string;
    sectionProfile: string;
    sectionStatement: string;
    sectionQuestions: string;
    sectionContact: string;
    tagline: string;
    practice: string;
    currentCity: string;
    artistStatement: string;
    hopeToLeave: string;
    whyChina: string;
    whyFrance: string;
    email: string;
    phone: string;
    website: string;
    instagram: string;
    wechat: string;
    langFr: string;
    langEn: string;
    langZh: string;
    save: string;
    saved: string;
    reset: string;
    viewPassport: string;
    backToWorkspace: string;
    logout: string;
    localNote: string;
    primaryLanguage: string;
    primaryLanguageHint: string;
    primaryLanguageBadge: string;
    otherLanguages: string;
    translate: string;
    translating: string;
    translateHint: string;
    translateSuccess: string;
    translateEmpty: string;
    translateOverwriteConfirm: string;
    translateError: string;
    translateNotConfigured: string;
  }
> = {
  zh: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    title: "Modifier le passeport · 编辑档案",
    intro: "更新您的公开档案内容。修改保存在本设备，预览护照页面即可查看效果。",
    sectionProfile: "Profil · 基本信息",
    sectionStatement: "Déclaration · 创作陈述",
    sectionQuestions: "Questions · 平台提问",
    sectionContact: "Contact · 联系方式",
    tagline: "Phrase d'accroche · 一句话介绍",
    practice: "Pratique · 艺术实践",
    currentCity: "Ville actuelle · 现居城市",
    artistStatement: "Déclaration de l'artiste · 创作陈述",
    hopeToLeave: "Ce que j'espère qu'on retienne · 我希望被记住的",
    whyChina: "Pourquoi la Chine · 为什么中国",
    whyFrance: "Pourquoi la France · 为什么法国",
    email: "Email",
    phone: "Téléphone · 电话",
    website: "Site web · 网站",
    instagram: "Instagram",
    wechat: "WeChat · 微信",
    langFr: "Français",
    langEn: "English",
    langZh: "中文",
    save: "Enregistrer · 保存",
    saved: "Enregistré · 已保存",
    reset: "Réinitialiser · 恢复默认",
    viewPassport: "Voir le passeport · 查看档案",
    backToWorkspace: "← Retour à l'espace membre · 返回工作台",
    logout: "Se déconnecter · 退出登录",
    localNote:
      "Les modifications sont enregistrées localement sur cet appareil. · 修改目前保存在本浏览器中。",
    primaryLanguage: "Langue principale · 主语言",
    primaryLanguageHint:
      "您的主要创作与表达语言。编辑时优先显示，其他语言可展开填写。",
    primaryLanguageBadge: "主语言",
    otherLanguages: "Autres langues · 其他语言",
    translate: "Générer les traductions · 一键生成翻译",
    translating: "Traduction en cours… · 翻译中…",
    translateHint:
      "从主语言自动生成法文与英文草稿，或生成其余语言版本。生成后请审校，再点击保存。",
    translateSuccess: "Traductions générées. Veuillez relire avant d'enregistrer. · 翻译已生成，请审校后保存。",
    translateEmpty: "请先在主语言中填写内容。 · Veuillez d'abord remplir la langue principale.",
    translateOverwriteConfirm:
      "其他语言已有内容，一键翻译将覆盖现有草稿。是否继续？",
    translateError: "翻译失败，请稍后重试。",
    translateNotConfigured: "翻译服务尚未配置，请联系平台管理员。",
  },
  fr: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    title: "Modifier le passeport · 编辑档案",
    intro:
      "Mettez à jour le contenu public de votre passeport. Les modifications sont enregistrées sur cet appareil et visibles sur la page passeport.",
    sectionProfile: "Profil · 基本信息",
    sectionStatement: "Déclaration · 创作陈述",
    sectionQuestions: "Questions · 平台提问",
    sectionContact: "Contact · 联系方式",
    tagline: "Phrase d'accroche · 一句话介绍",
    practice: "Pratique · 艺术实践",
    currentCity: "Ville actuelle · 现居城市",
    artistStatement: "Déclaration de l'artiste · 创作陈述",
    hopeToLeave: "Ce que j'espère qu'on retienne · 我希望被记住的",
    whyChina: "Pourquoi la Chine · 为什么中国",
    whyFrance: "Pourquoi la France · 为什么法国",
    email: "Email",
    phone: "Téléphone · 电话",
    website: "Site web · 网站",
    instagram: "Instagram",
    wechat: "WeChat · 微信",
    langFr: "Français",
    langEn: "English",
    langZh: "中文",
    save: "Enregistrer · 保存",
    saved: "Enregistré · 已保存",
    reset: "Réinitialiser · 恢复默认",
    viewPassport: "Voir le passeport · 查看档案",
    backToWorkspace: "← Retour à l'espace membre · 返回工作台",
    logout: "Se déconnecter · 退出登录",
    localNote:
      "Les modifications sont enregistrées localement sur cet appareil. · 修改目前保存在本浏览器中。",
    primaryLanguage: "Langue principale · 主语言",
    primaryLanguageHint:
      "Votre langue principale de création et d'expression. Elle s'affiche en priorité ; les autres langues restent disponibles.",
    primaryLanguageBadge: "Langue principale",
    otherLanguages: "Autres langues · 其他语言",
    translate: "Générer les traductions · 一键生成翻译",
    translating: "Traduction en cours… · 翻译中…",
    translateHint:
      "Génère automatiquement les versions dans les autres langues à partir de la langue principale. Relisez avant d'enregistrer.",
    translateSuccess:
      "Traductions générées. Veuillez relire avant d'enregistrer. · 翻译已生成，请审校后保存。",
    translateEmpty:
      "Veuillez d'abord remplir la langue principale. · 请先在主语言中填写内容。",
    translateOverwriteConfirm:
      "Les autres langues contiennent déjà du texte. La traduction automatique remplacera ces brouillons. Continuer ?",
    translateError: "Échec de la traduction. Veuillez réessayer.",
    translateNotConfigured:
      "Le service de traduction n'est pas encore configuré. Contactez l'équipe de la plateforme.",
  },
  en: {
    kicker: "Member space",
    kickerSub: "",
    title: "Edit passport",
    intro:
      "Update your public passport content. Changes are saved on this device and reflected on your passport page.",
    sectionProfile: "Profile",
    sectionStatement: "Artist statement",
    sectionQuestions: "Platform questions",
    sectionContact: "Contact",
    tagline: "Tagline",
    practice: "Practice",
    currentCity: "Current city",
    artistStatement: "Artist statement",
    hopeToLeave: "What I hope will be remembered",
    whyChina: "Why China",
    whyFrance: "Why France",
    email: "Email",
    phone: "Phone",
    website: "Website",
    instagram: "Instagram",
    wechat: "WeChat",
    langFr: "French",
    langEn: "English",
    langZh: "Chinese",
    save: "Save",
    saved: "Saved",
    reset: "Reset to default",
    viewPassport: "View passport",
    backToWorkspace: "← Back to workspace",
    logout: "Sign out",
    localNote: "Changes are saved locally on this device.",
    primaryLanguage: "Primary language",
    primaryLanguageHint:
      "Your main language for writing and expression. It appears first; other languages can be filled in separately.",
    primaryLanguageBadge: "Primary",
    otherLanguages: "Other languages",
    translate: "Generate translations",
    translating: "Translating…",
    translateHint:
      "Automatically draft the other languages from your primary language. Review before saving.",
    translateSuccess: "Translations generated. Please review before saving.",
    translateEmpty: "Fill in your primary language first.",
    translateOverwriteConfirm:
      "Other languages already contain text. Automatic translation will replace those drafts. Continue?",
    translateError: "Translation failed. Please try again.",
    translateNotConfigured:
      "Translation service is not configured yet. Contact the platform team.",
  },
};

const inputClass =
  "mt-2 w-full rounded-sm border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none";

const textareaClass = `${inputClass} resize-y py-3 leading-relaxed`;

const allLocales: Locale[] = ["fr", "en", "zh"];

function LocalizedField({
  label,
  value,
  onChange,
  primaryLocale,
  primaryBadge,
  otherLanguagesLabel,
  multiline = false,
  rows = 4,
}: {
  label: string;
  value: { fr: string; en: string; zh: string };
  onChange: (next: { fr: string; en: string; zh: string }) => void;
  primaryLocale: Locale;
  primaryBadge: string;
  otherLanguagesLabel: string;
  multiline?: boolean;
  rows?: number;
}) {
  const secondaryLocales = allLocales.filter((key) => key !== primaryLocale);

  function renderInput(key: Locale, emphasized: boolean) {
    const langLabel = LOCALE_LABELS[key];

    return (
      <label key={key} className="block">
        <span className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {langLabel}
          </span>
          {emphasized ? (
            <span className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] tracking-[0.08em] text-stone-600">
              {primaryBadge}
            </span>
          ) : null}
        </span>
        {multiline ? (
          <textarea
            rows={rows}
            value={value[key]}
            onChange={(event) =>
              onChange({ ...value, [key]: event.target.value })
            }
            className={textareaClass}
          />
        ) : (
          <input
            type="text"
            value={value[key]}
            onChange={(event) =>
              onChange({ ...value, [key]: event.target.value })
            }
            className={inputClass}
          />
        )}
      </label>
    );
  }

  return (
    <fieldset className="space-y-4">
      <legend className="text-xs font-medium tracking-[0.06em] text-stone-800">
        {label}
      </legend>
      {renderInput(primaryLocale, true)}
      <details className="rounded-sm border border-stone-200 bg-stone-50/40 px-4 py-3">
        <summary className="cursor-pointer text-[11px] tracking-[0.08em] text-stone-500">
          {otherLanguagesLabel}
        </summary>
        <div className="mt-4 space-y-4">
          {secondaryLocales.map((key) => renderInput(key, false))}
        </div>
      </details>
    </fieldset>
  );
}

function PrimaryLanguageSelector({
  value,
  onChange,
  title,
  hint,
}: {
  value: Locale;
  onChange: (locale: Locale) => void;
  title: string;
  hint: string;
}) {
  return (
    <fieldset className="rounded-sm border border-stone-200 bg-stone-50/50 p-5">
      <legend className="px-1 text-xs font-medium tracking-[0.06em] text-stone-800">
        {title}
      </legend>
      <p className="mt-2 text-sm leading-[1.8] text-stone-600">{hint}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {allLocales.map((key) => {
          const active = key === value;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={`rounded-sm border px-4 py-2 text-xs tracking-[0.06em] transition-colors ${
                active
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-600 hover:border-stone-500 hover:text-stone-900"
              }`}
            >
              {LOCALE_LABELS[key]}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-stone-200 pt-10 first:border-t-0 first:pt-0">
      <h2 className="text-sm font-medium tracking-[0.04em] text-stone-900">
        {title}
      </h2>
      <div className="mt-6 space-y-8">{children}</div>
    </section>
  );
}

export function EditProfileView({
  artist,
  memberEmail,
}: {
  artist: ArtistProfile;
  memberEmail: string;
}) {
  const router = useRouter();
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const [form, setForm] = useState<ArtistProfileEdit>(() =>
    profileToEditForm(artist),
  );
  const [saved, setSaved] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [translateMessage, setTranslateMessage] = useState<string | null>(null);
  const [translateError, setTranslateError] = useState<string | null>(null);

  useEffect(() => {
    const stored = readArtistProfileEdits(artist.slug);
    if (stored) {
      setForm(mergeForm(profileToEditForm(artist), stored));
    }
  }, [artist]);

  function mergeForm(
    base: ArtistProfileEdit,
    stored: ArtistProfileEdit,
  ): ArtistProfileEdit {
    return {
      primaryLocale: stored.primaryLocale ?? base.primaryLocale,
      tagline: stored.tagline ?? base.tagline,
      practice: stored.practice ?? base.practice,
      currentCity: stored.currentCity ?? base.currentCity,
      artistStatement: stored.artistStatement ?? base.artistStatement,
      hopeToLeave: stored.hopeToLeave ?? base.hopeToLeave,
      whyChina: stored.whyChina ?? base.whyChina,
      whyFrance: stored.whyFrance ?? base.whyFrance,
      contact: { ...base.contact, ...stored.contact },
    };
  }

  function updateLocalizedField<K extends keyof ArtistProfileEdit>(
    key: K,
    value: ArtistProfileEdit[K],
  ) {
    setSaved(false);
    setForm((current) => ({ ...current, [key]: value }));
  }

  function updateContact(field: keyof NonNullable<ArtistProfileEdit["contact"]>, value: string) {
    setSaved(false);
    setForm((current) => ({
      ...current,
      contact: { ...current.contact, [field]: value },
    }));
  }

  function handleSave() {
    writeArtistProfileEdits(artist.slug, form);
    window.dispatchEvent(new Event(ARTIST_PROFILE_UPDATED_EVENT));
    setSaved(true);
  }

  function handleReset() {
    clearArtistProfileEdits(artist.slug);
    window.dispatchEvent(new Event(ARTIST_PROFILE_UPDATED_EVENT));
    setForm(profileToEditForm(artist));
    setSaved(false);
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/connexion");
    router.refresh();
  }

  async function handleTranslate() {
    setTranslateMessage(null);
    setTranslateError(null);

    const fields = buildTranslateFieldsFromForm(
      form,
      primaryLocale,
      !isChineseArtist,
    );

    if (fields.length === 0) {
      setTranslateError(l.translateEmpty);
      return;
    }

    if (
      formHasSecondaryTranslations(form, primaryLocale) &&
      !window.confirm(l.translateOverwriteConfirm)
    ) {
      return;
    }

    setTranslating(true);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceLocale: primaryLocale,
          fields,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        translations?: Record<string, Partial<Record<Locale, string>>>;
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        if (payload.error === "translation_not_configured") {
          setTranslateError(l.translateNotConfigured);
        } else {
          setTranslateError(payload.message ?? l.translateError);
        }
        return;
      }

      setForm((current) =>
        applyProfileTranslations(current, payload.translations ?? {}),
      );
      setSaved(false);
      setTranslateMessage(l.translateSuccess);
    } catch {
      setTranslateError(l.translateError);
    } finally {
      setTranslating(false);
    }
  }

  function updatePrimaryLocale(next: Locale) {
    setSaved(false);
    setForm((current) => ({ ...current, primaryLocale: next }));
  }

  const primaryLocale = form.primaryLocale ?? "fr";
  const localizedFieldProps = {
    primaryLocale,
    primaryBadge: l.primaryLanguageBadge,
    otherLanguagesLabel: l.otherLanguages,
  };

  const isChineseArtist = artist.nationality.en === "Chinese";

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-900"
          >
            Zhen Collection Paris
          </Link>
          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitcher locale={locale} onChange={setLocale} />
            <button
              type="button"
              onClick={handleLogout}
              className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
            >
              {l.logout}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 py-10 md:px-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          {l.kicker}
        </p>
        {locale !== "en" ? (
          <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
            {l.kickerSub}
          </p>
        ) : null}

        <div className="mt-8 border-b border-stone-200 pb-8">
          <h1 className="text-lg font-medium text-stone-900">{l.title}</h1>
          <p className="mt-2 text-sm text-stone-500">{t(artist.name, locale)}</p>
          <p className="mt-1 text-xs text-stone-400">{memberEmail}</p>
          <p className="mt-4 text-sm leading-[1.8] text-stone-600">{l.intro}</p>
          <p className="mt-3 text-[11px] leading-[1.7] text-stone-400">{l.localNote}</p>
        </div>

        <form
          className="mt-10 space-y-10"
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <PrimaryLanguageSelector
            value={primaryLocale}
            onChange={updatePrimaryLocale}
            title={l.primaryLanguage}
            hint={l.primaryLanguageHint}
          />

          <div className="rounded-sm border border-stone-200 bg-stone-50/40 p-5">
            <p className="text-sm leading-[1.8] text-stone-600">{l.translateHint}</p>
            <button
              type="button"
              onClick={handleTranslate}
              disabled={translating}
              className="mt-4 rounded-sm border border-stone-900 bg-white px-5 py-2.5 text-xs tracking-[0.08em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {translating ? l.translating : l.translate}
            </button>
            {translateMessage ? (
              <p className="mt-3 text-sm leading-[1.7] text-stone-600">
                {translateMessage}
              </p>
            ) : null}
            {translateError ? (
              <p className="mt-3 text-sm leading-[1.7] text-red-700">
                {translateError}
              </p>
            ) : null}
          </div>

          <Section title={l.sectionProfile}>
            <LocalizedField
              label={l.tagline}
              value={form.tagline!}
              onChange={(value) => updateLocalizedField("tagline", value)}
              multiline
              rows={3}
              {...localizedFieldProps}
            />
            <LocalizedField
              label={l.practice}
              value={form.practice!}
              onChange={(value) => updateLocalizedField("practice", value)}
              {...localizedFieldProps}
            />
            <LocalizedField
              label={l.currentCity}
              value={form.currentCity!}
              onChange={(value) => updateLocalizedField("currentCity", value)}
              {...localizedFieldProps}
            />
          </Section>

          <Section title={l.sectionStatement}>
            <LocalizedField
              label={l.artistStatement}
              value={form.artistStatement!}
              onChange={(value) => updateLocalizedField("artistStatement", value)}
              multiline
              rows={12}
              {...localizedFieldProps}
            />
          </Section>

          <Section title={l.sectionQuestions}>
            {isChineseArtist ? (
              <LocalizedField
                label={l.whyFrance}
                value={form.whyFrance!}
                onChange={(value) => updateLocalizedField("whyFrance", value)}
                multiline
                rows={5}
                {...localizedFieldProps}
              />
            ) : (
              <LocalizedField
                label={l.whyChina}
                value={form.whyChina!}
                onChange={(value) => updateLocalizedField("whyChina", value)}
                multiline
                rows={5}
                {...localizedFieldProps}
              />
            )}
            <LocalizedField
              label={l.hopeToLeave}
              value={form.hopeToLeave!}
              onChange={(value) => updateLocalizedField("hopeToLeave", value)}
              multiline
              rows={5}
              {...localizedFieldProps}
            />
          </Section>

          <Section title={l.sectionContact}>
            <label className="block">
              <span className="text-xs font-medium tracking-[0.06em] text-stone-800">
                {l.email}
              </span>
              <input
                type="email"
                value={form.contact?.email ?? ""}
                onChange={(event) => updateContact("email", event.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium tracking-[0.06em] text-stone-800">
                {l.phone}
              </span>
              <input
                type="text"
                value={form.contact?.phone ?? ""}
                onChange={(event) => updateContact("phone", event.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium tracking-[0.06em] text-stone-800">
                {l.website}
              </span>
              <input
                type="url"
                value={form.contact?.website ?? ""}
                onChange={(event) => updateContact("website", event.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium tracking-[0.06em] text-stone-800">
                {l.instagram}
              </span>
              <input
                type="text"
                value={form.contact?.instagram ?? ""}
                onChange={(event) =>
                  updateContact("instagram", event.target.value)
                }
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium tracking-[0.06em] text-stone-800">
                {l.wechat}
              </span>
              <input
                type="text"
                value={form.contact?.wechat ?? ""}
                onChange={(event) => updateContact("wechat", event.target.value)}
                className={inputClass}
              />
            </label>
          </Section>

          <div className="flex flex-wrap items-center gap-3 border-t border-stone-200 pt-8">
            <button
              type="submit"
              className="rounded-sm bg-stone-900 px-5 py-2.5 text-xs tracking-[0.08em] text-white transition-colors hover:bg-stone-700"
            >
              {saved ? l.saved : l.save}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-sm border border-stone-300 px-5 py-2.5 text-xs tracking-[0.08em] text-stone-600 transition-colors hover:border-stone-500 hover:text-stone-900"
            >
              {l.reset}
            </button>
            <Link
              href={`/artists/${artist.slug}?from=espace`}
              className="ml-auto text-xs tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
            >
              {l.viewPassport}
            </Link>
          </div>
        </form>

        <p className="mt-10">
          <Link
            href="/espace"
            className="text-xs tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {l.backToWorkspace}
          </Link>
        </p>
      </main>
    </div>
  );
}
