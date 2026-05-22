import type { LatexRendererUI, RenderResult } from './types';

export class UIManager {
  private labels: LatexRendererUI;

  constructor(labels: LatexRendererUI) {
    this.labels = labels;
  }

  public getElements() {
    return {
      textarea: document.getElementById('latex-input') as HTMLTextAreaElement | null,
      displayModeBtn: document.getElementById('display-mode-btn') as HTMLButtonElement | null,
      inlineModeBtn: document.getElementById('inline-mode-btn') as HTMLButtonElement | null,
      fontSizeSlider: document.getElementById('font-size-slider') as HTMLInputElement | null,
      fontSizeValue: document.getElementById('font-size-value') as HTMLElement | null,
      preview: document.getElementById('latex-preview') as HTMLElement | null,
      errorBanner: document.getElementById('latex-error') as HTMLElement | null,
      emptyHint: document.getElementById('latex-empty-hint') as HTMLElement | null,
      copyPngBtn: document.getElementById('copy-png-btn') as HTMLButtonElement | null,
      copyMdBtn: document.getElementById('copy-md-btn') as HTMLButtonElement | null,
      copyLatexBtn: document.getElementById('copy-latex-btn') as HTMLButtonElement | null,
      resetBtn: document.getElementById('latex-reset-btn') as HTMLButtonElement | null,
      toast: document.getElementById('latex-toast') as HTMLElement | null,
    };
  }

  public populateInputs(expression: string, displayMode: boolean, fontSize: number): void {
    const el = this.getElements();
    if (el.textarea) el.textarea.value = expression;
    if (el.fontSizeSlider) el.fontSizeSlider.value = String(fontSize);
    if (el.fontSizeValue) el.fontSizeValue.textContent = `${fontSize}px`;
    this.setModeButtons(displayMode);
  }

  public setModeButtons(displayMode: boolean): void {
    const el = this.getElements();
    el.displayModeBtn?.classList.toggle('mode-active', displayMode);
    el.inlineModeBtn?.classList.toggle('mode-active', !displayMode);
  }

  public updateFontSizeLabel(fontSize: number): void {
    const el = this.getElements();
    if (el.fontSizeValue) el.fontSizeValue.textContent = `${fontSize}px`;
  }

  private showEmpty(el: ReturnType<UIManager['getElements']>): void {
    if (!el.preview) return;
    el.preview.innerHTML = '';
    if (el.emptyHint) el.emptyHint.style.display = 'block';
    if (el.errorBanner) el.errorBanner.style.display = 'none';
  }

  private showError(el: ReturnType<UIManager['getElements']>, message: string): void {
    if (!el.preview) return;
    el.preview.innerHTML = '';
    if (el.errorBanner) {
      el.errorBanner.textContent = `${this.labels.errorLabel}: ${message}`;
      el.errorBanner.style.display = 'block';
    }
  }

  public renderPreview(result: RenderResult): void {
    const el = this.getElements();
    if (!el.preview) return;

    if (!result.html && !result.hasError) {
      this.showEmpty(el);
      return;
    }

    if (el.emptyHint) el.emptyHint.style.display = 'none';

    if (result.hasError) {
      this.showError(el, result.errorMessage);
    } else {
      if (el.errorBanner) el.errorBanner.style.display = 'none';
      el.preview.innerHTML = result.html;
    }
  }

  public setButtonStates(loading: boolean): void {
    const el = this.getElements();
    if (el.copyPngBtn) el.copyPngBtn.disabled = loading;
    if (el.copyMdBtn) el.copyMdBtn.disabled = loading;
    if (el.copyLatexBtn) el.copyLatexBtn.disabled = loading;
  }

  public showToast(): void {
    const el = this.getElements();
    if (!el.toast) return;
    el.toast.textContent = this.labels.copiedToast;
    el.toast.classList.add('toast-visible');
    setTimeout(() => el.toast?.classList.remove('toast-visible'), 2000);
  }
}
