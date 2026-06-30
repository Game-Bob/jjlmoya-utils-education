import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubric-matrix-designer' as const;
const title = '루브릭 평가 기준 설계기';
const description = '성취 수준, 실시간 100% 가중치 검증, CSV 내보내기 및 인쇄 전용 레이아웃을 갖춘 편집 가능한 가중치 부여 채점 루브릭을 생성합니다.';

const faqItems = [
  { question: '루브릭 매트릭스란 무엇인가요?', answer: '루브릭 매트릭스는 행에 평가 기준을, 열에 성취 수준을 배치하는 평가 그리드입니다. 각 셀은 해당 수준에서 성취한 결과가 어떻게 나타나는지 기술하여 채점 과정을 더 투명하고 일관되게 만듭니다.' },
  { question: '평가 기준 가중치의 합이 왜 100%여야 하나요?', answer: '총합 100%는 채점 모델을 명시적으로 만듭니다. 합계가 100% 미만이거나 초과하는 경우 학생과 채점자 모두 각 평가 기준이 최종 점수에 어떻게 기여하는지 명확하게 이해할 수 없습니다.' },
  { question: '학생들도 이 도구를 사용할 수 있나요?', answer: '네. 학생들은 과제에 대한 요구사항을 상세히 분석하고, 초안을 기획하거나, 과제 제출 전에 동료 평가를 위한 체크리스트를 작성하는 데 유용하게 사용할 수 있습니다.' },
  { question: '어떤 내보내기 옵션이 제공되나요?', answer: 'CSV 내보내기는 스프레드시트나 LMS 설정에 매우 유용합니다. 인쇄 버튼을 누르면 브라우저 인쇄 화면이 열리며, 운영체제 인쇄 창을 통해 PDF 파일로 바로 저장할 수 있습니다.' },
];

const howToItems = [
  { name: '평가 기준 편집', text: '임의의 평가 기준 이름을 클릭하고 이를 평가하려는 스킬, 학습 성과 또는 요구사항으로 교체합니다.' },
  { name: '가중치 설정', text: '실시간 가중치 바가 합계 100%의 균형 잡힌 루브릭을 나타낼 때까지 각 비율을 조정합니다.' },
  { name: '성취 수준 기술', text: '각 기술 설명(Descriptor) 셀을 클릭하여 해당 성취 수준의 관찰 가능한 증거를 작성합니다.' },
  { name: '필요에 따른 구조화', text: '추가 버튼을 사용하여 평가 기준이나 성취 수준을 추가로 생성하고, 불필요한 행이나 열은 제거합니다.' },
  { name: '내보내기 또는 인쇄', text: '스프레드시트용 CSV를 다운로드하거나 인쇄 기능을 이용해 깔끔한 PDF 버전을 생성합니다.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: '평가 기준',
    weightHeader: '가중치',
    levelSectionLabel: '성취 수준',
    levelBadgePrefix: 'L',
    addCriterion: '기준 추가',
    addLevel: '수준 추가',
    removeCriterion: '기준 제거',
    removeLevel: '수준 제거',
    exportCsv: 'CSV 내보내기',
    printRubric: '인쇄 / PDF',
    csvFilename: 'rubric-matrix.csv',
    pdfDocumentTitle: '루브릭 매트릭스',
    pdfImageAlt: '루브릭 매트릭스',
    confirmDeleteTitle: '이 평가 기준을 삭제하시겠습니까?',
    confirmDeleteText: '해당 평가 기준 및 해당 성취 수준에 대해 작성된 모든 기술 설명이 함께 삭제됩니다.',
    cancelDelete: '취소',
    confirmDelete: '기준 삭제',
    totalWeight: '총 가중치',
    balanced: '정확히 100%로 균형 맞춰짐',
    under: '루브릭이 100%에 도달할 때까지 가중치를 추가하세요',
    over: '루브릭이 100%로 돌아갈 때까지 가중치를 줄이세요',
    emptyCell: '클릭하여 편집',
    newCriterionTemplate: '평가 기준 {index}',
    newDescriptorTemplate: '설명 {index}.{level}',
    newLevelTemplate: '성취 수준 {index}',
    defaultLevels: [
      { name: '탁월함', score: 4 },
      { name: '능숙함', score: 3 },
      { name: '발전 중', score: 2 },
      { name: '기초 단계', score: 1 },
    ],
    defaultCriteria: [
      {
        name: '논증의 질',
        weight: 35,
        cells: [
          '미묘한 논리 전개가 돋보이는 명확한 주장',
          '적절한 논리 전개가 포함된 명확한 주장',
          '주장은 존재하나 전반적으로 불균형함',
          '주장이 불명확하거나 누락됨',
        ],
      },
      {
        name: '근거 자료의 활용',
        weight: 30,
        cells: [
          '근거 자료가 정확하며 논리 속에 잘 통합됨',
          '근거 자료가 주장의 대부분을 뒷받침함',
          '근거 자료가 일반론적이거나 느슨하게 연계됨',
          '근거 자료가 없거나 부정확함',
        ],
      },
      {
        name: '조직 및 구성',
        weight: 20,
        cells: [
          '구성이 독자를 부드럽고 명확하게 안내함',
          '구성이 논리적임',
          '구성에 비약이 있거나 반복이 나타남',
          '구성을 따라가기 어려움',
        ],
      },
      {
        name: '학술적 문체',
        weight: 15,
        cells: [
          '정제된 문체 및 학술적 규칙의 정확한 준수',
          '가벼운 실수가 의미 파악을 방해하지 않음',
          '잦은 실수가 독자의 몰입을 방해함',
          '실수로 인해 의미 파악이 어려움',
        ],
      },
    ],
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 학술 자료',
  },
  seo: [
    { type: 'title', text: '학생들이 실제로 유용하게 쓸 수 있는 루브릭 설계', level: 2 },
    { type: 'paragraph', html: '강력한 채점 루브릭은 단순한 성적표 이상입니다. 그것은 학습 성취에 대한 공유 지도입니다. 학생은 제출 전에 과제가 요구하는 수준을 파악하기 위해 활용하고, 교사는 더 일관성 있게 채점하기 위해 쓰며, 평가자는 모호함을 줄여 피드백을 주기 위해 활용합니다. 이 설계기는 평가 기준, 가중치, 성취 수준, 기술 설명 등을 모두 편집 가능한 한곳에 모아 구조를 시각화합니다.' },
    { type: 'diagnostic', variant: 'warning', title: '루브릭 개정이 필요한 경우', html: '<ul><li>여러 기준이 너무 겹쳐서 동일한 실수에 대해 감점이 이중으로 일어나는 경우.</li><li>가중치 총합이 100%가 되지 않아 최종 평점의 일관성을 해석하기 힘든 경우.</li><li>기술 설명이 관찰 가능한 근거 없이 단지 "좋다", "미흡하다", "훌륭하다" 같은 형용사 위주로 채워진 경우.</li><li>채점자가 일관되게 구분할 수 없을 정도로 지나치게 많은 수준이 나열된 경우.</li></ul>' },
    { type: 'title', text: '평가 기준 및 가중치 선택', level: 3 },
    { type: 'table', headers: ['루브릭 구성 요소', '올바른 실천 방안', '흔한 문제점'], rows: [['평가 기준', '논증, 근거, 연구법, 정확성, 프레젠테이션 등 서로 구분되는 역량이나 성과를 평가합니다.', '한 행에 여러 기술을 혼합하면 피드백이 불명확해집니다.'], ['가중치', '학습 우선순위와 과제 목적에 가중치를 일치시킵니다.', '일부 성과가 더 중요함에도 불구하고 모든 행에 동일한 가중치를 할당하는 것입니다.'], ['수준', '채점자가 지속해서 구별할 수 있는 3~5개 수준을 사용합니다.', '어휘 차이가 거의 없는 상태에서 수준만 과도하게 추가하는 것입니다.'], ['설명', '학생의 과제 결과물에서 직접 관찰할 수 있는 증거를 기술합니다.', '단순히 주관적으로 느껴지기만 하고 개선 방안을 제공하지 못하는 수식어 사용.']] },
    { type: 'comparative', title: '분석적 루브릭 vs 총체적 루브릭', columns: 2, items: [{ title: '분석적 루브릭', description: '성과를 개별 평가 기준과 가중치로 세분화합니다. 학생에게 상세한 피드백이 필요하거나 여러 채점자의 기준을 조율할 때 최선입니다.', highlight: true, points: ['투명한 채점 프로세스', '구체적인 피드백 제공', '복잡한 과제물 평가에 적합'] }, { title: '총체적 루브릭', description: '전체적인 하나의 총평을 제공합니다. 채점이 빠르지만 개선 방향이나 동료 평가를 위한 구체적인 정보를 제공하기는 어렵습니다.', points: ['더 빠른 채점 프로세스', '빠른 확인에 용이함', '피드백이 구체적이지 않음'] }] },
    { type: 'tip', html: '<strong>주관적인 수식어가 아닌 객관적인 행위나 상태를 서술하십시오.</strong> "뛰어난 분석"이라고 쓰는 대신, 뛰어난 분석이 실제로 하는 일(예: 증거를 주장에 유기적으로 연결하고, 한계를 설명하며, 그 근거가 왜 중요한지 입증함)을 기록하십시오.' },
    { type: 'title', text: '가중치 기반 루브릭 검증 방법', level: 3 },
    { type: 'paragraph', html: '가중치는 중요도를 나타냅니다. 가중치 40%의 평가 기준은 가중치 10%의 기준과 비교할 때 학생의 주의력을 다르게 유도합니다. 본 도구의 실시간 계산기는 엄격하게 설계되었습니다. 루브릭은 가중치 총합이 정확히 100%일 때만 균형이 잡힙니다. 100% 미만이면 성적의 일부가 정의되지 않으며, 100%를 초과하면 배점 계산에 모순이 발생하여 혼선을 빚게 됩니다.' },
    { type: 'summary', title: '실무적인 루브릭 작업 단계', items: ['가로 행을 채우기 전에 먼저 학습 성과부터 정의하십시오.', '피드백에 실제로 유의미한 영향력을 행사하는 기준으로만 매트릭스를 구성하십시오.', '단순하고 관찰 가능한 용어로 기술 설명을 작성하십시오.', '루브릭을 공유하기 전에 가중치 100% 검증을 수행하십시오.', '스프레드시트나 LMS 연동이 필요한 경우 CSV로 내보내십시오.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
