import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkButtonProps = SharedProps & {
  href: string;
};

type NativeButtonProps = SharedProps & {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-xl border font-medium tracking-wide transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border-gold bg-gold text-obsidian hover:-translate-y-0.5 hover:bg-[#d7bc85]",
  secondary: "border-gold/60 bg-transparent text-gold hover:-translate-y-0.5 hover:bg-gold/10",
  ghost: "border-transparent bg-transparent text-ivory hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-sm"
};

export function LinkButton({ children, href, className, variant = "primary", size = "md" }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </Link>
  );
}

export function Button({ children, className, variant = "primary", size = "md", type = "button", onClick }: NativeButtonProps) {
  return (
    <button type={type} onClick={onClick} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </button>
  );
}
