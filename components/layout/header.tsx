"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getCmsContent } from "@/content/cms/content";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/ui/button";
import { getLocaleFromPathname, localizePath, stripLocalePrefix } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = getCmsContent(locale);
  const basePath = stripLocalePrefix(pathname);

  function isActive(href: string): boolean {
    const normalizedCurrent = pathname === "/pt" ? "/pt" : pathname.replace(/\/$/, "");
    const normalizedTarget = href === "/pt" ? "/pt" : href.replace(/\/$/, "");
    if (normalizedTarget === "/" || normalizedTarget === "/pt") {
      return normalizedCurrent === normalizedTarget;
    }
    return normalizedCurrent.startsWith(normalizedTarget);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-obsidian/90 backdrop-blur-xl">
      <a
        href="#main-content"
        className="absolute left-4 top-2 z-[60] -translate-y-16 rounded-lg border border-gold/40 bg-obsidian px-3 py-2 text-xs uppercase tracking-[0.12em] text-gold transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="site-grid flex h-20 items-center justify-between gap-6">
        <Logo />
        <button
          className="inline-flex h-10 items-center rounded-lg border border-gold/40 px-3 text-xs uppercase tracking-[0.15em] text-gold md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          type="button"
        >
          Menu
        </button>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {content.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2 py-1 text-sm tracking-[0.08em] transition-colors",
                isActive(item.href) ? "text-ivory" : "text-silver hover:text-ivory"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 rounded-lg border border-gold/20 bg-carbon/70 p-1">
            <Link
              href={localizePath(basePath, "en")}
              className={cn(
                "rounded-md px-2 py-1 text-xs tracking-[0.12em]",
                locale === "en" ? "bg-gold text-obsidian" : "text-silver hover:text-ivory"
              )}
              aria-label="Switch language to English"
            >
              {content.navigation.language.enLabel}
            </Link>
            <Link
              href={localizePath(basePath, "pt")}
              className={cn(
                "rounded-md px-2 py-1 text-xs tracking-[0.12em]",
                locale === "pt" ? "bg-gold text-obsidian" : "text-silver hover:text-ivory"
              )}
              aria-label="Mudar idioma para Portugues"
            >
              {content.navigation.language.ptLabel}
            </Link>
          </div>
          <LinkButton href={locale === "pt" ? "/pt/contact" : "/contact"} size="sm">
            {content.navigation.headerCta}
          </LinkButton>
        </nav>
      </div>
      <div id="mobile-nav" className={cn("border-t border-gold/10 md:hidden", open ? "block" : "hidden")}>
        <nav className="site-grid grid gap-2 py-4" aria-label="Mobile">
          {content.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg border px-3 py-2 text-sm tracking-[0.08em] transition-colors",
                isActive(item.href)
                  ? "border-gold/35 text-ivory"
                  : "border-transparent text-silver hover:border-gold/25 hover:text-ivory"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-1 grid grid-cols-2 gap-2">
            <Link
              href={localizePath(basePath, "en")}
              className={cn(
                "rounded-lg border px-3 py-2 text-center text-xs tracking-[0.12em]",
                locale === "en" ? "border-gold bg-gold text-obsidian" : "border-gold/20 text-silver"
              )}
            >
              {content.navigation.language.enLabel}
            </Link>
            <Link
              href={localizePath(basePath, "pt")}
              className={cn(
                "rounded-lg border px-3 py-2 text-center text-xs tracking-[0.12em]",
                locale === "pt" ? "border-gold bg-gold text-obsidian" : "border-gold/20 text-silver"
              )}
            >
              {content.navigation.language.ptLabel}
            </Link>
          </div>
          <LinkButton
            href={locale === "pt" ? "/pt/contact" : "/contact"}
            size="sm"
            className="mt-1 justify-center"
            variant="secondary"
          >
            {content.navigation.headerCta}
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
