import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { educationCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(4);
    });

    it('educationCategory should be defined', () => {
      expect(educationCategory).toBeDefined();
      expect(educationCategory.i18n).toBeDefined();
    });
  });
});

