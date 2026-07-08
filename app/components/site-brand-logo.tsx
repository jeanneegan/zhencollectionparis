import Image from "next/image";
import { Noto_Serif_SC } from "next/font/google";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const BRAND_LOGO_SRC = "/brand/zhen-collection-paris-logo.png";

const sizeClasses = {
  sm: {
    box: "h-14 w-14",
    zcp: "text-[8px]",
    zen: "text-[9px]",
  },
  md: {
    box: "h-20 w-20",
    zcp: "text-[9px]",
    zen: "text-[11px]",
  },
  lg: {
    box: "h-24 w-24",
    zcp: "text-[10px]",
    zen: "text-[13px]",
  },
} as const;

export function SiteBrandLogo({
  variant = "mark",
  size = "md",
  className = "",
}: {
  variant?: "mark" | "full";
  size?: keyof typeof sizeClasses;
  className?: string;
}) {
  if (variant === "full") {
    return (
      <Image
        src={BRAND_LOGO_SRC}
        alt="Zhen Collection Paris · 巴黎臻藏"
        width={420}
        height={420}
        priority
        className={`h-auto w-44 md:w-52 ${className}`}
      />
    );
  }

  const styles = sizeClasses[size];

  return (
    <div
      className={`flex shrink-0 flex-col items-center justify-center rounded-full border border-stone-300 bg-white ${styles.box} ${className}`}
      aria-hidden
    >
      <span
        className={`font-medium uppercase tracking-[0.08em] text-stone-500 ${styles.zcp}`}
      >
        ZCP
      </span>
      <span className={`${serif.className} mt-0.5 text-stone-600 ${styles.zen}`}>
        臻
      </span>
    </div>
  );
}
