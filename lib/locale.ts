export const supportedLocales = ["en", "pt"] as const;
export type AppLocale = (typeof supportedLocales)[number];

export const defaultLocale: AppLocale = "en";

export function isSupportedLocale(value: string): value is AppLocale {
  return supportedLocales.includes(value as AppLocale);
}

export function getLocaleFromPathname(pathname: string): AppLocale {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const firstSegment = normalized.split("/")[1];
  return isSupportedLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const parts = normalized.split("/");
  if (isSupportedLocale(parts[1])) {
    const rest = `/${parts.slice(2).join("/")}`.replace(/\/+/g, "/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return normalized === "/" ? "/" : normalized.replace(/\/$/, "");
}

export function localizePath(pathname: string, locale: AppLocale): string {
  const base = stripLocalePrefix(pathname);
  if (locale === defaultLocale) {
    return base;
  }
  return base === "/" ? `/${locale}` : `/${locale}${base}`;
}
