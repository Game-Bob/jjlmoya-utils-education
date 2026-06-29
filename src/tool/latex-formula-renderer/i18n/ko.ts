import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formula-renderer' as const;
const title = 'LaTeX 수식 렌더러';
const description = '브라우저에서 LaTeX 수학 공식을 즉시 렌더링합니다. 공식을 입력하고 PNG 이미지, 마크다운 코드 블록 또는 원본 LaTeX 소스로 복사하세요. 서버가 필요하지 않습니다.';

const faqItems = [
  { question: 'LaTeX란 무엇이며 학생들이 사용하는 이유는 무엇인가요?', answer: 'LaTeX는 수학, 물리학, 공학 및 경제학에서 전문적인 품질의 공식을 작성하기 위해 널리 사용되는 조판 언어입니다. Word 또는 Google 문서와 달리 LaTeX를 사용하면 형식 지정을 정밀하게 제어하면서 적분, 행렬, 그리스 기호와 같은 복잡한 공식을 작성할 수 있습니다.' },
  { question: '이 렌더러를 사용하려면 무언가를 설치해야 하나요?', answer: '아니요. 이 도구는 오픈 소스 JavaScript 라이브러리인 KaTeX를 사용하여 브라우저에서 완전히 실행됩니다. 서버, 로그인, 설치가 필요하지 않습니다.' },
  { question: '블록 모드와 인라인 모드의 차이점은 무엇인가요?', answer: '블록 모드(디스플레이 모드)는 수식을 중앙에 배치된 별도의 줄에 렌더링하므로 독립형 방정식에 이상적입니다. 인라인 모드는 수식을 텍스트 흐름 내에 작은 크기로 렌더링하므로 문장 내에 기호를 포함하는 데 유용합니다.' },
  { question: '수식에 구문 오류가 표시되는 이유는 무엇인가요?', answer: 'LaTeX 구문 오류는 대개 중괄호 불일치(예: 닫는 중괄호 없이 \\frac{1 작성), 잘못된 명령 이름(예: \\frac 대신 \\Frac 사용) 또는 지원되지 않는 명령으로 인해 발생합니다.' },
  { question: '이 도구를 사용하여 수식을 Word나 Notion에 붙여넣을 수 있나요?', answer: '예. "PNG 다운로드"를 사용하여 렌더링된 수식의 고해상도 이미지를 직접 다운로드할 수 있습니다. "마크다운 복사"를 사용하여 마크다운 편집기용 코드 블록을 가져올 수 있습니다.' }
];

const howToItems = [
  { name: 'LaTeX 수식 입력', text: '왼쪽 에디터에 유효한 LaTeX 수식을 입력합니다. 입력하는 동안 실시간으로 수식이 렌더링됩니다.' },
  { name: '렌더링 모드 선택', text: '독립형 수식의 경우 블록 모드를 선택하고, 텍스트에 포함하려는 경우 인라인 모드를 선택합니다.' },
  { name: '글꼴 크기 조절', text: '글꼴 크기 슬라이더를 사용하여 미리보기의 크기를 변경합니다.' },
  { name: '원하는 형식으로 내보내기', text: '「PNG 다운로드」를 클릭하여 이미지를 가져오거나 「마크다운 복사」 또는 「LaTeX 복사」를 클릭합니다.' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'LaTeX 수식 렌더러',
    inputLabel: 'LaTeX 수식',
    inputPlaceholder: '예: \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: '블록 모드',
    inlineModeLabel: '인라인 모드',
    fontSizeLabel: '글꼴 크기',
    downloadPngButton: 'PNG 다운로드',
    copyMarkdownButton: '마크다운 복사',
    copyLatexButton: 'LaTeX 복사',
    resetButton: '초기화',
    previewTitle: '실시간 미리보기',
    copiedToast: '클립보드에 복사되었습니다',
    errorLabel: '구문 오류',
    emptyPreviewHint: '수식을 확인하려면 위에 LaTeX를 입력하세요.',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 리소스'
  },
  seo: [
    { type: 'title', text: '브라우저에서 수학 공식을 작성하고 렌더링하는 방법', level: 2 },
    { type: 'paragraph', html: 'LaTeX는 전 세계 대학, 학술지, 연구자들이 사용하는 과학 및 수학 조판의 표준입니다. 그러나 대부분의 LaTeX 환경은 복잡한 설치가 필요합니다. 이 도구는 설치 없이 브라우저에서 빠른 KaTeX를 사용하여 수식을 즉시 렌더링합니다.' },
    { type: 'title', text: 'KaTeX란 무엇이며 브라우저 렌더링에 왜 최선인가요?', level: 3 },
    { type: 'paragraph', html: 'KaTeX는 Khan Academy에서 만든 오픈 소스 JavaScript 라이브러리로, 브라우저에서 놀라운 속도와 정확성으로 LaTeX 수식을 렌더링합니다. 완전히 클라이언트 측에서 렌더링하므로 실시간 인터랙티브 도구에 이상적입니다.' },
    { type: 'paragraph', html: 'KaTeX는 모든 크기에서 완벽하게 확장되는 깔끔하고 가벼운 HTML 및 SVG 출력을 생성합니다.' },
    { type: 'title', text: '학생 및 연구자의 일반적인 사용 사례', level: 3 },
    { type: 'list', items: [
      '과제를 제출하기 전에 교과서나 강의 노트의 수식을 렌더링하여 LaTeX 구문을 확인합니다.',
      '수식을 PNG 이미지로 다운로드하여 Word, Google 문서 또는 Notion에 직접 붙여넣습니다.',
      'LaTeX 수식을 마크다운 코드 블록으로 변환하여 문서나 GitHub README에서 사용합니다.',
      'Overleaf로 작성한 논문에 수식을 포함하기 전에 미리 봅니다.'
    ] },
    { type: 'title', text: '필수 LaTeX 수학 명령 참조', level: 3 },
    { type: 'paragraph', html: '자주 사용되는 명령으로는 분수의 \\frac{a}{b}, 제곱근의 \\sqrt{x}, 합의 \\sum, 적분의 \\int 등이 있습니다.' },
    { type: 'title', text: '블록 모드 vs 인라인 모드: 각각의 사용 시기', level: 3 },
    { type: 'paragraph', html: '블록 모드는 수식을 별도의 줄 중앙에 배치하고, 인라인 모드는 수식을 현재 텍스트 줄 안에 맞도록 축소합니다.' },
    { type: 'tip', html: '구문 오류 디버깅 팁: LaTeX에서 모든 시작 중괄호는 일치하는 닫는 중괄호가 있어야 합니다.' },
    { type: 'title', text: '수식 내보내기: PNG vs 마크다운 vs LaTeX 소스', level: 3 },
    { type: 'paragraph', html: 'PNG 내보내기는 브라우저 Canvas API를 사용하여 KaTeX의 SVG 출력을 고해상도 이미지로 변환합니다.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
