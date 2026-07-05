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
      className={`text-[11px] font-medium tracking-wide transition-colors ${
        active
          ? "text-stone-900"
          : "text-stone-400 hover:text-stone-900"
      }`}
    >
      EN
    </button>
  );
}
