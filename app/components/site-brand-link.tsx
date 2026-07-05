import Link from "next/link";

export function SiteBrandLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`transition-colors hover:text-stone-900 ${className}`}
    >
      <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-stone-400">
        Zhen Collection Paris
      </span>
      <span className="mt-1 block text-[11px] tracking-[0.2em] text-stone-500">
        巴黎臻藏
      </span>
    </Link>
  );
}
