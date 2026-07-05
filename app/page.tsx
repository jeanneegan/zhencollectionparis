import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-50 px-6 text-center text-stone-900">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-stone-400">
        Zhen Collection Paris
      </p>
      <h1 className="mt-3 text-2xl font-light tracking-tight md:text-3xl">
        巴黎臻藏
      </h1>

      <div className="mt-10 space-y-1">
        <p className="text-lg font-light tracking-wide text-stone-500">
          Paris × Chine
        </p>
        <p className="text-xs tracking-wide text-stone-400">巴黎 × 中国</p>
      </div>

      <div className="mt-8 space-y-1">
        <p className="text-sm tracking-wide text-stone-400">
          Conversations · Rencontres · Une autre voix
        </p>
        <p className="text-xs tracking-wide text-stone-400">
          对话 · 相遇 · 另一种声音
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
        <Link
          href="/artists/willy-le-nalbaut"
          className="min-w-[200px] rounded-full bg-stone-900 px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-stone-800"
        >
          Willy Le Nalbaut
        </Link>

        <div className="flex flex-col items-center gap-2 text-stone-400">
          <span className="text-3xl font-light leading-none">×</span>
          <div className="space-y-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em]">
              对话第一期
            </p>
            <p className="text-[11px] tracking-[0.15em]">
              Dialogue · Épisode 1
            </p>
          </div>
        </div>

        <Link
          href="/artists/su-hong"
          className="min-w-[200px] rounded-full border border-stone-900 px-8 py-3 text-sm font-medium tracking-wide text-stone-900 transition-colors hover:bg-stone-100"
        >
          苏泓 Su Hong
        </Link>
      </div>
    </main>
  );
}
