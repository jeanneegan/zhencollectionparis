"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import type { Locale } from "@/app/artists/[slug]/data";
import type { MockMember } from "@/app/lib/auth";
import {
  getMemberNavGroups,
  getMemberNavLabels,
  isMemberNavLinkActive,
} from "@/app/lib/member-nav";
import { useLocale } from "@/app/lib/use-locale";

function NavSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="px-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#dc2626]">
        {title}
      </p>
      <ul className="mt-2 space-y-1">{children}</ul>
    </div>
  );
}

export function MemberWorkspaceLayout({
  member,
  children,
  contentClassName = "max-w-2xl",
}: {
  member: MockMember;
  children: React.ReactNode;
  contentClassName?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useLocale();
  const l = getMemberNavLabels(locale);
  const navGroups = getMemberNavGroups(member, locale);
  const isSuperUser = member.type === "super";

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push(isSuperUser ? "/connexion-super" : "/connexion");
    router.refresh();
  }

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

      <div className="md:flex">
        <aside className="border-b border-stone-200 bg-stone-50/50 md:flex md:w-72 md:shrink-0 md:flex-col md:border-b-0 md:border-r">
          <div className="border-b border-stone-200 px-5 py-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
              {isSuperUser ? l.superKicker : l.kicker}
            </p>
            {locale !== "en" ? (
              <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
                {isSuperUser ? l.superKickerSub : l.kickerSub}
              </p>
            ) : null}
            <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.signedInAs}
            </p>
            <p className="mt-2 text-sm font-medium text-stone-800">{member.email}</p>
            <p className="mt-3 text-lg font-medium text-stone-900">
              {member.name[locale]}
            </p>
            {isSuperUser ? (
              <p className="mt-2 text-xs text-stone-500">
                {member.memberType[locale === "en" ? "en" : "fr"]}
                {locale !== "en" ? ` · ${member.memberType.zh}` : ""}
              </p>
            ) : null}
          </div>

          <nav aria-label={l.navLabel} className="px-3 py-4 md:flex-1">
            <p className="px-2 text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.navLabel}
            </p>
            <div className="mt-3 space-y-5">
              {navGroups.map((group) => (
                <NavSection key={group.id} title={group.title}>
                  {group.links.map((link) => {
                    const active = isMemberNavLinkActive(
                      pathname,
                      searchParams,
                      link,
                    );

                    return (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          className={`flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2.5 text-left text-xs leading-[1.6] tracking-[0.04em] transition-colors ${
                            active
                              ? "bg-stone-900 text-white"
                              : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                          }`}
                        >
                          <span>{link.label}</span>
                          {link.badge ? (
                            <span
                              className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                                active
                                  ? "bg-white/15 text-white"
                                  : "bg-stone-200 text-stone-600"
                              }`}
                            >
                              {link.badge}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </NavSection>
              ))}
            </div>
          </nav>
        </aside>

        <main className="flex-1 px-6 py-8 md:px-10 md:py-12">
          <div className={contentClassName}>{children}</div>
        </main>
      </div>
    </div>
  );
}
