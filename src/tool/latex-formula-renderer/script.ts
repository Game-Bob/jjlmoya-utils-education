import { StateManager } from './stateManager';
import { UIManager } from './uiManager';
import { renderLatex, expressionToMarkdownBlock } from './logic';
import type { LatexRendererUI, LatexRendererState } from './types';

export class LatexRendererController {
  private stateManager: StateManager;
  private uiManager: UIManager;
  private state: LatexRendererState;

  constructor(labels: LatexRendererUI) {
    this.stateManager = new StateManager();
    this.uiManager = new UIManager(labels);
    this.state = this.stateManager.loadState();
  }

  public init(): void {
    this.uiManager.populateInputs(this.state.expression, this.state.displayMode, this.state.fontSize);
    this.render();
    this.bindEvents();
  }

  private render(): void {
    const result = renderLatex(this.state.expression, this.state.displayMode, this.state.fontSize);
    this.uiManager.renderPreview(result);
  }

  private saveAndRender(): void {
    this.stateManager.saveState(this.state);
    this.render();
  }

  private bindInputEvents(): void {
    const el = this.uiManager.getElements();

    el.textarea?.addEventListener('input', (e) => {
      this.state.expression = (e.target as HTMLTextAreaElement).value;
      this.saveAndRender();
    });

    el.fontSizeSlider?.addEventListener('input', (e) => {
      this.state.fontSize = parseInt((e.target as HTMLInputElement).value, 10);
      this.uiManager.updateFontSizeLabel(this.state.fontSize);
      this.saveAndRender();
    });
  }

  private bindModeButtons(): void {
    const el = this.uiManager.getElements();

    el.displayModeBtn?.addEventListener('click', () => {
      this.state.displayMode = true;
      this.uiManager.setModeButtons(true);
      this.saveAndRender();
    });

    el.inlineModeBtn?.addEventListener('click', () => {
      this.state.displayMode = false;
      this.uiManager.setModeButtons(false);
      this.saveAndRender();
    });
  }

  private bindResetButton(): void {
    const el = this.uiManager.getElements();
    el.resetBtn?.addEventListener('click', () => {
      this.state = this.stateManager.getDefaultState();
      this.uiManager.populateInputs(this.state.expression, this.state.displayMode, this.state.fontSize);
      this.saveAndRender();
    });
  }

  private bindCopyMarkdown(): void {
    const el = this.uiManager.getElements();
    el.copyMdBtn?.addEventListener('click', () => {
      const md = expressionToMarkdownBlock(this.state.expression);
      navigator.clipboard.writeText(md).then(() => this.uiManager.showToast());
    });
  }

  private bindCopyLatex(): void {
    const el = this.uiManager.getElements();
    el.copyLatexBtn?.addEventListener('click', () => {
      navigator.clipboard.writeText(this.state.expression).then(() => this.uiManager.showToast());
    });
  }

  private bindDownloadPng(): void {
    const el = this.uiManager.getElements();
    el.downloadPngBtn?.addEventListener('click', async () => {
      if (!el.preview) return;
      const mathElement = el.preview.querySelector('.katex') as HTMLElement | null;
      const targetElement = mathElement || el.preview;
      this.uiManager.setButtonStates(true);
      try {
        const { default: html2canvas } = await import('html2canvas');
        const canvas = await html2canvas(targetElement, {
          scale: 2,
          useCORS: true,
          backgroundColor: null,
          logging: false,
        });
        const dataUrl = canvas.toDataURL('image/png');
        if (!dataUrl) return;
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'latex-formula.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (error) {
        console.error('Download error:', error);
      } finally {
        this.uiManager.setButtonStates(false);
      }
    });
  }

  private bindEvents(): void {
    this.bindInputEvents();
    this.bindModeButtons();
    this.bindResetButton();
    this.bindCopyMarkdown();
    this.bindCopyLatex();
    this.bindDownloadPng();
  }
}

export function initLatexRenderer(labels: LatexRendererUI) {
  const controller = new LatexRendererController(labels);
  return { init: () => controller.init() };
}
