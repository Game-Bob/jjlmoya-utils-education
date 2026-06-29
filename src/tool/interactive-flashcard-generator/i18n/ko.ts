import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = '대화형 플래시카드 생성기 및 학습 덱';
const description = '능동적 회상과 분산 반복으로 학습 세션을 향상시키세요. 맞춤형 플래시카드를 만들고, 3D 카드 뒤집기로 학습하고, 덱을 내보내거나 가져옵니다.';

const faqItems = [
  { question: '능동적 회상이란 무엇인가요?', answer: '능동적 회상은 단순히 노트를 읽는 대신 질문에 답을 하려고 뇌를 자극하여 기억을 유도하는 학습 원리입니다.' },
  { question: '분산 반복은 어떻게 작동하나요?', answer: '어려운 카드는 자주 보고 쉬운 카드는 가끔 검토하여 장기 기억을 강화하는 방식입니다.' },
  { question: '플래시카드를 어떻게 저장하나요?', answer: '덱을 JSON 파일로 내보낼 수 있습니다. 나중에 학습을 재개하려면 가져오기 버튼을 클릭하여 해당 파일을 업로드하세요.' },
  { question: '쉬움, 보통, 어려움 평가의 역할은 무엇인가요?', answer: '기억의 상태를 분류하는 데 도움을 줍니다. 라이트너 시스템에서는 어려운 카드가 더 자주 복습됩니다.' },
];

const howToItems = [
  { name: '카드 만들기', text: '앞면에 질문을, 뒷면에 답변이나 설명을 입력한 후 카드 추가를 누르세요.' },
  { name: '덱 학습하기', text: '화면의 카드를 클릭하면 뒤집혀 정답이 보입니다.' },
  { name: '기억 평가하기', text: '쉬움, 보통, 어려움 버튼을 사용해 복습 주기를 평가하세요.' },
  { name: '학습 저장하기', text: '내보내기 버튼을 사용해 맞춤 덱을 파일로 다운로드하세요.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'EducationalApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: '플래시카드 생성기',
    questionLabel: '앞면 (질문)',
    answerLabel: '뒷면 (정답)',
    addCard: '카드 추가',
    questionPlaceholder: '예: 프랑스의 수도는 어디인가요?',
    answerPlaceholder: '예: 파리',
    reviewMode: '학습 세션',
    cardIndex: '카드',
    flipCard: '클릭하여 뒤집기',
    nextCard: '다음',
    prevCard: '이전',
    easy: '쉬움',
    medium: '보통',
    hard: '어려움',
    resetSession: '진행 상황 재설정',
    importExport: '덱 관리',
    importDeck: 'JSON 가져오기',
    exportDeck: 'JSON 내보내기',
    exportSelected: '선택 항목 내보내기',
    exportAll: '모두 내보내기',
    emptyDeckWarning: '덱이 비어 있습니다. 카드를 만들거나 덱을 가져와서 학습을 시작하세요.',
    sampleQuestion1: '능동적 회상이란 무엇인가요?',
    sampleAnswer1: '학습 과정 중에 기억 인출을 능동적으로 자극하는 학습 기법.',
    sampleQuestion2: '망각 곡선 가설을 정식화한 사람은 누구인가요?',
    sampleAnswer2: '시간이 지남에 따라 정보를 망각하는 지수적 특성을 연구한 헤르만 에빙하우스.',
    aiPromptGenerator: 'AI 플래시카드 도우미',
    aiTopicsLabel: '시험 주제나 메모를 입력하세요',
    aiTopicsPlaceholder: '예: 미분, 적분, 극한을 다루는 수학 시험...',
    generatePromptBtn: 'AI 프롬프트 생성',
    aiPromptOutputLabel: '이 프롬프트를 ChatGPT 또는 Gemini에 복사하세요',
    copyPromptBtn: '클립보드에 복사',
    selectAll: '전체 선택',
    deleteCategory: '카테고리 삭제',
    deleteConfirmMsg: '이 카테고리와 카테고리에 속한 모든 카드를 삭제하시겠습니까?',
    cancel: '취소',
    delete: '삭제',
    pasteJsonTitle: '플래시카드 JSON 붙여넣기',
    pasteJsonPlaceholder: 'AI가 생성한 JSON을 여기에 붙여넣으세요...',
    importBtn: '가져오기',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: '능동적 회상과 분산 반복을 활용한 학습 효율 향상', level: 2 },
    { type: 'paragraph', html: '플래시카드는 장기적인 정보 기억과 학습 효율을 극대화하는 데 널리 활용되는 훌륭한 방법입니다. 학습 평가 기능과 함께 공부하면 모르는 것을 더 확실히 복습할 수 있습니다.' },
    { type: 'title', text: '능동적 회상 대 비활성 학습', level: 3 },
    { type: 'paragraph', html: '많은 학생들이 교재를 눈으로 읽기만 합니다. 그러나 인지과학은 뇌가 기억을 억지로 끄집어낼 때 진정한 암기가 이루어짐을 보여줍니다.' },
    { type: 'table', headers: ['학습 방식', '인지 참여도', '기억 보유량', '가장 적합한 대상'], rows: [
      ['대화형 플래시카드', '높음 (능동적)', '매우 우수', '단어, 공식, 핵심 명제, 날짜.'],
      ['요약 노트 정리', '중간 (합성)', '보통', '긴 이야기와 글의 구조 이해.'],
      ['노트 그냥 읽기', '낮음 (비활성)', '나쁨', '새로운 과목의 첫 장 개념 접하기.'],
    ] },
    { type: 'title', text: '플래시카드 암기 학습의 장단점', level: 3 },
    {
      type: 'proscons',
      title: '학습 카드 암기법의 혜택과 한계',
      items: [
        { pro: '눈으로만 보는 것을 막고 뇌에 적극적인 회상을 강제한다.', con: '처음에 카드를 직접 작성하는 것이 번거롭다.' },
        { pro: '내가 모르는 오답 영역을 곧바로 표시해준다.', con: '너무 깊고 긴 논리를 심층 탐구하기에는 덜 적합하다.' },
        { pro: '어떤 과목이든 손쉽게 맞춤 작성할 수 있다.', con: '분산 반복 혜택을 온전히 누리려면 꾸준한 반복 관리가 필수다.' }
      ]
    },
    { type: 'title', text: 'AI 도우미를 통한 플래시카드 자동 카드화', level: 3 },
    { type: 'paragraph', html: '학습 덱을 일일이 쓰는 것은 고역입니다. 내장된 <strong>AI 도우미</strong>를 활용하면 요약 노트를 곧바로 가져올 수 있는 JSON 형식의 학습 카드로 변환할 수 있습니다. 주제를 적고 프롬프트를 복사해 ChatGPT나 Gemini에 붙여넣어 임포트하세요.' },
    { type: 'title', text: '팀 공부: 개별 분류 공유 및 융합 가져오기', level: 3 },
    { type: 'paragraph', html: '친구와 역할을 나누어 공부하면 효율이 좋습니다. 특정 카테고리만 골라서 내보낼 수 있으며, 가져올 때 기존 카드를 날리지 않고 **융합(merge)**하여 합치기 때문에 기록이 안전합니다.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
