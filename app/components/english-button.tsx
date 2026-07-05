"use client";

export function EnglishButton({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-[11px] font-medium tracking-wide transition-colors ${
        active
          ? "border-stone-900 bg-stone-900 text-white"
          : "border-stone-200 bg-stone-50 text-stone-500 hover:border-stone-300 hover:text-stone-900"
      }`}
    >
      English
    </button>
  );
}
