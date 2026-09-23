import Image from "next/image";

export const BRAND_LOGO_SRC = "/brand/zhen-collection-paris-logo.png";

const sizeClasses = {
  sm: "h-14 w-14",
  md: "h-20 w-20",
  lg: "h-24 w-24",
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
  const dimension = variant === "full" ? sizeClasses.lg : sizeClasses[size];

  return (
    <Image
      src={BRAND_LOGO_SRC}
      alt="Zhen Collection Paris · ZCP"
      width={1024}
      height={1024}
      priority={variant === "full"}
      className={`h-auto object-contain object-center ${dimension} ${className}`}
    />
  );
}
