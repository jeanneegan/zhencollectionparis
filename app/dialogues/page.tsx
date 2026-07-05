import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { DialogueEpisodeList } from "@/app/components/dialogue-episode-list";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllEpisodes, getEpisodesByYear } from "@/app/dialogue/data";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function DialoguesPage() {
  const total = getAllEpisodes().length;
  const byYear = getEpisodesByYear();

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            Tous les dialogues
          </p>
          <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
            全部对话
          </p>
          <h1
            className={`${serif.className} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            Archives · {total} épisodes
          </h1>
          <p className="mt-3 text-sm text-stone-500">
            共 {total} 期对话，按年份浏览
          </p>
        </header>

        <div className="mt-12 space-y-14">
          {byYear.map(({ year, episodes }) => (
            <section key={year}>
              <p className="text-center text-[11px] font-medium tracking-[0.2em] text-stone-400">
                {year}
              </p>
              <div className="mt-6">
                <DialogueEpisodeList
                  episodes={episodes}
                  serifClassName={serif.className}
                />
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/"
            className="text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
          >
            ← Retour · 返回首页
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
