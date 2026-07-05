import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-5">
        <Link
          href="/"
          className="text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400 transition-colors hover:text-stone-900"
        >
          Zhen Collection Paris · 巴黎臻藏
        </Link>
      </div>
    </header>
  );
}
