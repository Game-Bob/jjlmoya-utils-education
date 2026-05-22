import { StateManager } from './stateManager';
import { UIManager } from './uiManager';
import { renderLatex, expressionToMarkdownBlock, svgNodeToPngDataUrl } from './logic';
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

  private bindCopyPng(): void {
    const el = this.uiManager.getElements();
    el.copyPngBtn?.addEventListener('click', async () => {
      if (!el.preview) return;
      this.uiManager.setButtonStates(true);
      try {
        const dataUrl = await svgNodeToPngDataUrl(el.preview, 2);
        if (!dataUrl) return;
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        this.uiManager.showToast();
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
    this.bindCopyPng();
  }
}

export function initLatexRenderer(labels: LatexRendererUI) {
  const controller = new LatexRendererController(labels);
  return { init: () => controller.init() };
}
