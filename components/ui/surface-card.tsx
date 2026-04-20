import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function SurfaceCard({ title, description, children, className }: SurfaceCardProps) {
  return (
    <article
      className={cn(
        "group rounded-card border border-gold/20 bg-carbon/90 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-gold/45 hover:shadow-[0_14px_36px_rgba(0,0,0,0.32)]",
        className
      )}
    >
      {title ? <h3 className="font-heading text-lg font-medium text-ivory">{title}</h3> : null}
      {description ? <p className="mt-3 text-sm leading-relaxed text-silver">{description}</p> : null}
      {children}
    </article>
  );
}
