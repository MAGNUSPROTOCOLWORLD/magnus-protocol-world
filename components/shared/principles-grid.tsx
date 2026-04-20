import { principles } from "@/content/site-content";
import { SurfaceCard } from "@/components/ui/surface-card";
import { cn } from "@/lib/utils";

type PrincipleItem = {
  title: string;
  statement: string;
};

type PrinciplesGridProps = {
  items?: PrincipleItem[];
  compact?: boolean;
  className?: string;
};

export function PrinciplesGrid({ items = principles, compact = false, className }: PrinciplesGridProps) {
  const visibleItems = compact ? items.slice(0, 6) : items;

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {visibleItems.map((principle) => (
        <SurfaceCard key={principle.title} title={principle.title} description={principle.statement} />
      ))}
    </div>
  );
}
