export function SiteFooter({ wide = false }: { wide?: boolean }) {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div
        className={`mx-auto flex flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row ${
          wide ? "max-w-7xl md:px-10" : "max-w-3xl"
        }`}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">
          Zhen Collection Paris 巴黎臻藏
        </p>
        <p className="text-center text-[11px] text-stone-400 md:text-right">
          Paris × Chine · 巴黎 × 中国 · Conversations · Rencontres · Une autre voix
        </p>
      </div>
    </footer>
  );
}
