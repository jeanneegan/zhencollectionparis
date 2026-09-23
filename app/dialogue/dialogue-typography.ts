/** Readable type scale for long-form dialogue pages (zh/fr/en). */
export const dialogueType = {
  kicker:
    "text-xs font-medium tracking-[0.14em] text-stone-400 sm:text-[13px]",
  headerArtists: "text-sm tracking-[0.1em] text-stone-600",
  headerDate: "text-xs tracking-[0.12em] text-stone-500 sm:text-[13px]",
  sectionLabel:
    "text-xs font-medium tracking-[0.12em] sm:text-sm sm:tracking-[0.1em]",
  body: "text-base leading-[1.9] text-stone-800",
  bodySecondary: "text-[15px] leading-[1.85] text-stone-600 sm:text-base",
  meta: "text-xs tracking-[0.06em] text-stone-500 sm:text-[13px]",
  metaUpper:
    "text-xs uppercase tracking-[0.1em] text-stone-500 sm:text-[13px]",
  identityName:
    "text-xs tracking-[0.08em] text-stone-500 sm:text-[13px]",
  pending: "text-sm tracking-wide text-stone-400",
  workArtist: "text-xs uppercase tracking-[0.12em] text-stone-500 sm:text-[13px]",
  workTitle: "text-base text-stone-800",
  workMeta: "text-sm text-stone-500",
  workDescription: "text-sm leading-[1.85] text-stone-600 sm:text-[15px]",
  collectionIntro: "text-[15px] leading-[1.9] text-stone-600 sm:text-base",
  actionLink:
    "text-sm font-medium tracking-[0.06em] text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-[#5a2323] hover:decoration-[#5a2323]",
  actionMeta: "text-xs tracking-[0.06em] text-stone-500 sm:text-[13px]",
  collectionBundleIncludes:
    "text-[11px] leading-[1.75] tracking-[0.04em] text-stone-500 sm:text-xs",
  note: "text-sm leading-[1.9] text-stone-600 sm:text-[15px]",
  cta:
    "inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium tracking-[0.08em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900",
} as const;
