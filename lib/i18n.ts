import { enDictionary } from "@/content/i18n/en";
import { ptDictionary } from "@/content/i18n/pt";
import type { Locale } from "@/content/site-content";

const dictionaries = {
  en: enDictionary,
  pt: ptDictionary
};

export function getDictionary(locale: Locale = "en") {
  return dictionaries[locale] ?? dictionaries.en;
}
