import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Brand */}
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400">
          Zhen Collection Paris · 巴黎臻藏
        </p>

        {/* Hero title */}
        <header className="mt-10 text-center">
          <h1
            className={`${serif.className} text-3xl font-normal tracking-wide text-stone-900 md:text-4xl`}
          >
            艺术家之间的对话
          </h1>
          <p className="mt-3 text-sm tracking-[0.08em] text-stone-400">
            Conversations entre artistes
          </p>
        </header>

        {/* Tagline */}
        <div className="mt-10 border-t border-stone-200 pt-8 text-center">
          <p className="text-sm tracking-wide text-stone-500">
            Conversations · Rencontres · Une autre voix
          </p>
          <p className="mt-1 text-xs tracking-wide text-stone-400">
            对话 · 相遇 · 另一种声音
          </p>
          <div className="mt-8 space-y-1">
            <p className="text-sm tracking-wide text-stone-500">Paris × Chine</p>
            <p className="text-xs tracking-wide text-stone-400">巴黎 × 中国</p>
          </div>
        </div>

        {/* Episode */}
        <section className="mt-14 border border-stone-200 bg-stone-50/50 px-6 py-10 md:px-10 md:py-12">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            Dialogue · Épisode 1
          </p>
          <p className="mt-1 text-center text-[10px] tracking-[0.2em] text-stone-400">
            对话第一期
          </p>

          <h2
            className={`${serif.className} mt-8 text-center text-2xl font-normal md:text-3xl`}
          >
            Le Cheval{" "}
            <span className="text-stone-600">马</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />

          <div className="mt-8 space-y-6 text-left text-sm leading-[1.9] text-stone-600">
            <p className={`${serif.className} text-stone-800`}>
              今年是马年。你们都画过马。马对你们来说意味着什么？为什么？
            </p>
            <p className="text-stone-500">
              Cette année est l&apos;année du Cheval dans le calendrier chinois.
              Vous avez tous les deux représenté des chevaux dans votre travail.
              Que représente le cheval pour vous, et pourquoi ?
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#artists"
              className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
            >
              Découvrir le dialogue
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* Artists */}
        <section id="artists" className="mt-16 scroll-mt-8">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-6">
            {/* Willy */}
            <Link
              href="/artists/willy-le-nalbaut"
              className="group flex flex-col items-center text-center transition-opacity hover:opacity-80"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
                Artiste français
              </p>
              <div className="relative mt-5 aspect-square w-full max-w-[220px] overflow-hidden bg-stone-100">
                <Image
                  src="/artists/willy-le-nalbaut/portrait.jpg"
                  alt="Willy Le Nalbaut"
                  fill
                  className="object-cover object-center grayscale transition-all group-hover:grayscale-0"
                  sizes="220px"
                  priority
                />
              </div>
              <p className="mt-5 text-base tracking-wide text-stone-900">
                Willy Le Nalbaut
              </p>
            </Link>

            {/* Divider */}
            <div className="hidden items-stretch justify-center md:flex">
              <div className="flex flex-col items-center py-8">
                <div className="h-full w-px flex-1 border-l border-dotted border-stone-300" />
                <div className="my-4 flex flex-col items-center gap-1">
                  <span className="text-2xl font-light text-stone-300">×</span>
                  <span className="text-[11px] tracking-[0.2em] text-stone-400">
                    对话
                  </span>
                </div>
                <div className="h-full w-px flex-1 border-l border-dotted border-stone-300" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 md:hidden">
              <span className="text-2xl font-light text-stone-300">×</span>
              <span className="text-[11px] tracking-[0.2em] text-stone-400">
                对话
              </span>
            </div>

            {/* Su Hong */}
            <Link
              href="/artists/su-hong"
              className="group flex flex-col items-center text-center transition-opacity hover:opacity-80"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
                Artiste chinoise
              </p>
              <div className="relative mt-5 aspect-square w-full max-w-[220px] overflow-hidden bg-stone-100">
                <Image
                  src="/artists/su-hong/portrait.png"
                  alt="苏泓 Su Hong"
                  fill
                  className="object-cover object-center grayscale transition-all group-hover:grayscale-0"
                  sizes="220px"
                  priority
                />
              </div>
              <p className="mt-5 text-base tracking-wide text-stone-900">
                苏泓 Su Hong
              </p>
            </Link>
          </div>
        </section>

        <footer className="mt-20 border-t border-stone-200 bg-white">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
              巴黎臻藏 · Zhen Collection Paris
            </p>
            <p className="text-center text-[11px] text-stone-400 md:text-right">
              Paris × Chine · 巴黎 × 中国 · Conversations · Rencontres
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
