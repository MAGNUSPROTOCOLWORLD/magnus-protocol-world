import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", className)}>
      <div className="site-grid">{children}</div>
    </section>
  );
}
