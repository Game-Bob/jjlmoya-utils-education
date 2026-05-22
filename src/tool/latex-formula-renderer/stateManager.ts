import type { LatexRendererState } from './types';

const STATE_KEY = 'jjlmoya_latex_renderer_state';

export class StateManager {
  public getDefaultState(): LatexRendererState {
    return {
      expression: 'E = mc^2',
      displayMode: true,
      fontSize: 24,
    };
  }

  public loadState(): LatexRendererState {
    const saved = localStorage.getItem(STATE_KEY);
    if (!saved) {
      return this.getDefaultState();
    }
    try {
      const parsed = JSON.parse(saved);
      return { ...this.getDefaultState(), ...parsed };
    } catch {
      return this.getDefaultState();
    }
  }

  public saveState(state: LatexRendererState): void {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }

  public clearState(): void {
    localStorage.removeItem(STATE_KEY);
  }
}
