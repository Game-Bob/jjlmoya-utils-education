import type { SEOSection } from '@jjlmoya/utils-shared';
import type { WithContext, Thing } from 'schema-dts';

export type { SEOSection };

export type KnownLocale =
  | 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi'
  | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nb' | 'nl'
  | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BibliographyEntry {
  name: string;
  url: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ToolLocaleContent<TUI extends Record<string, unknown> = Record<string, string>> {
  slug: string;
  title: string;
  description: string;
  ui: TUI;
  seo: readonly SEOSection[];
  faq: readonly FAQItem[];
  bibliography: readonly BibliographyEntry[];
  howTo: readonly HowToStep[];
  schemas: readonly WithContext<Thing>[];
}

export interface CategoryLocaleContent {
  slug: string;
  title: string;
  description: string;
  seo: SEOSection[];
}

export type LocaleLoader<T> = () => Promise<T>;

export type LocaleMap<T> = Partial<Record<KnownLocale, LocaleLoader<T>>>;

export interface EducationToolEntry<TUI extends Record<string, unknown> = Record<string, string>> {
  id: string;
  icons: {
    bg: string;
    fg: string;
  };
  i18n: LocaleMap<ToolLocaleContent<TUI>>;
}

export interface EducationCategoryEntry {
  icon: string;
  tools: EducationToolEntry[];
  i18n: LocaleMap<CategoryLocaleContent>;
}

export interface ToolDefinition {
  entry: EducationToolEntry;
  Component: unknown;
  SEOComponent: unknown;
  BibliographyComponent: unknown;
}

