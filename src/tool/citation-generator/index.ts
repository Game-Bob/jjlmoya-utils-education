import type { EducationToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import Component from './component.astro';
import SEOComponent from './seo.astro';
import BibliographyComponent from './bibliography.astro';

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

export type CitationGeneratorLocaleContent = ToolLocaleContent<CitationGeneratorUI>;

export const citationGenerator: EducationToolEntry<CitationGeneratorUI> = {
    id: 'citation-generator',
    icons: { bg: 'mdi:format-quote-open', fg: 'mdi:book-open-page-variant' },
    i18n: {
        es: () => import('./i18n/es').then((m) => m.content),
        en: () => import('./i18n/en').then((m) => m.content),
        fr: () => import('./i18n/fr').then((m) => m.content),
    },
};

export const CITATION_GENERATOR_TOOL: ToolDefinition = {
    entry: citationGenerator,
    Component,
    SEOComponent,
    BibliographyComponent,
};
