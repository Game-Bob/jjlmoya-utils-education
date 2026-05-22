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

function buildSvgBlob(svgEl: SVGElement, width: number, height: number): Blob {
  const clone = svgEl.cloneNode(true) as SVGElement;
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', String(width));
  clone.setAttribute('height', String(height));
  const serializer = new XMLSerializer();
  return new Blob([serializer.serializeToString(clone)], { type: 'image/svg+xml;charset=utf-8' });
}

function renderBlobToCanvas(url: string, width: number, height: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        reject(new Error('Canvas 2d context unavailable'));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('SVG image load failed'));
    };
    img.src = url;
  });
}

export async function svgNodeToPngDataUrl(container: HTMLElement, scale: number): Promise<string> {
  const svgEl = container.querySelector('svg');
  if (!svgEl) return '';
  const bbox = svgEl.getBoundingClientRect();
  const width = Math.ceil(bbox.width * scale) || 400;
  const height = Math.ceil(bbox.height * scale) || 200;
  const blob = buildSvgBlob(svgEl, width, height);
  const url = URL.createObjectURL(blob);
  return renderBlobToCanvas(url, width, height);
}
