import { citationGenerator } from './entry';
export * from './entry';
export const CITATION_GENERATOR_TOOL: ToolDefinition = {
    entry: citationGenerator,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};
