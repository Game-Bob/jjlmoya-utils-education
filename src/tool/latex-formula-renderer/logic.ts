import type { RenderResult } from './types';

declare global {
  interface Window {
    katex: {
      renderToString: (expression: string, options: { displayMode: boolean; throwOnError: boolean; fontSize?: string }) => string;
      ParseError: typeof Error;
    };
  }
}

export function renderLatex(expression: string, displayMode: boolean, fontSize: number): RenderResult {
  if (!expression.trim()) {
    return { html: '', hasError: false, errorMessage: '' };
  }

  try {
    const html = window.katex.renderToString(expression, {
      displayMode,
      throwOnError: true,
      fontSize: `${fontSize}px`,
    });
    return { html, hasError: false, errorMessage: '' };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { html: '', hasError: true, errorMessage: message };
  }
}

export function expressionToMarkdownBlock(expression: string): string {
  return `\`\`\`latex\n${expression}\n\`\`\``;
}
