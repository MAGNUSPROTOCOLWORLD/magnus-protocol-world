import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionTitle({ eyebrow, title, description, centered = false, className }: SectionTitleProps) {
  return (
    <header className={cn("max-w-3xl space-y-4", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-balance text-3xl font-medium leading-tight text-ivory sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="text-pretty text-base leading-relaxed text-silver sm:text-lg">{description}</p> : null}
    </header>
  );
}
