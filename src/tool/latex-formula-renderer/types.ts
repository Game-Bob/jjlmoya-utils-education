export interface LatexRendererState {
  expression: string;
  displayMode: boolean;
  fontSize: number;
}

export interface RenderResult {
  html: string;
  hasError: boolean;
  errorMessage: string;
}

export interface LatexRendererUI {
  title: string;
  inputLabel: string;
  inputPlaceholder: string;
  displayModeLabel: string;
  inlineModeLabel: string;
  fontSizeLabel: string;
  downloadPngButton: string;
  copyMarkdownButton: string;
  copyLatexButton: string;
  resetButton: string;
  previewTitle: string;
  copiedToast: string;
  errorLabel: string;
  emptyPreviewHint: string;
  faqTitle: string;
  bibliographyTitle: string;
}
