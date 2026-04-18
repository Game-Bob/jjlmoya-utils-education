import { describe, it, expect } from 'vitest';
import { educationCategory as toolsCategory } from '../category/index';
import type { CategoryLocaleContent } from '../types';

const EXPECTED_LOCALES = [
  'de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'
];

const sharingLocales = ['ja', 'ko', 'zh'];

describe('Category Validation', () => {
  it('should have all 15 required locales', () => {
    const registeredLocales = Object.keys(toolsCategory.i18n);
    EXPECTED_LOCALES.forEach((locale) => {
      expect(
        registeredLocales,
        `Category is missing locale "${locale}"`,
      ).toContain(locale);
    });
  });
});
