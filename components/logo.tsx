import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-content";
import { brandAssets } from "@/content/brand-assets";
import { cn } from "@/lib/utils";

type LogoProps = {
  withTagline?: boolean;
  iconOnly?: boolean;
  className?: string;
};

export function Logo({ withTagline = false, iconOnly = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", iconOnly && "gap-0", className)}
      aria-label={siteConfig.shortName}
    >
      <span className="relative h-11 w-11 overflow-hidden rounded-xl border border-gold/40 bg-carbon">
        <Image
          src={brandAssets.iconMonogramAxisDark}
          alt="Magnus Protocol monogram"
          fill
          sizes="44px"
          className="object-cover object-center"
        />
      </span>
      {!iconOnly ? (
        <span className="flex flex-col leading-tight">
          <span className="text-xs font-semibold tracking-[0.24em] text-ivory sm:text-sm">{siteConfig.name}</span>
          {withTagline ? <span className="text-[11px] tracking-[0.12em] text-silver">Intelligence Infrastructure</span> : null}
        </span>
      ) : null}
    </Link>
  );
}
