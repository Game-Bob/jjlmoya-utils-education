import es from './i18n/es';
import en from './i18n/en';
import fr from './i18n/fr';

export interface CitationGeneratorUI {
    format: string;
    book: string;
    website: string;
    article: string;
    publicationYear: string;
    authors: string;
    title: string;
    publisher: string;
    locationUrl: string;
    preview: string;
    saveToList: string;
    mySavedCitations: string;
    noSavedCitations: string;
    clickToCopy: string;
    apa: string;
    mla: string;
    vancouver: string;
    exampleAuthor: string;
    exampleYear: string;
}

export const citationGenerator = {
    id: 'citation-generator' as const,
    icons: {
        bg: 'mdi:format-quote-open' as const,
        fg: 'mdi:book-open-page-variant' as const,
    },
    i18n: {
        es: async () => es,
        en: async () => en,
        fr: async () => fr,
    },
} as const;

import Component from './component.astro';
import SEOComponent from './seo.astro';
import BibliographyComponent from './bibliography.astro';

export const CITATION_GENERATOR_TOOL = {
    entry: citationGenerator,
    Component,
    SEOComponent,
    BibliographyComponent,
} as const;
