import type { EducationToolEntry, ToolLocaleContent } from '../../types';
import type { LatexRendererUI } from './types';

export type { LatexRendererUI };
export type LatexFormulaRendererLocaleContent = ToolLocaleContent<LatexRendererUI>;

export const latexFormulaRenderer: EducationToolEntry<LatexRendererUI> = {
  id: 'latex-formula-renderer',
  icons: { bg: 'mdi:math-integral-box', fg: 'mdi:sigma' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'renderizador-formulas-latex' })),
    fr: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'rendu-formules-latex' })),
    de: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'latex-formel-renderer' })),
    id: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'render-rumus-latex' })),
    it: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'visualizzatore-formule-latex' })),
    ja: () => import('./i18n/en').then((m) => m.content),
    ko: () => import('./i18n/en').then((m) => m.content),
    nl: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'latex-formule-weergave' })),
    pl: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'renderowanie-wzory-latex' })),
    pt: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'renderizador-equacoes-latex' })),
    ru: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'renderovanie-formuly-latex' })),
    sv: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'latex-formel-renderare' })),
    tr: () => import('./i18n/en').then((m) => ({ ...m.content, slug: 'latex-formul-goruntuleyici' })),
    zh: () => import('./i18n/en').then((m) => m.content),
  },
};
