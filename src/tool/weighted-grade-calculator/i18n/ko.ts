import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'weighted-grade-calculator' as const;
const title = '가중치 성적 및 최종 점수 계산기';
const description = 'GPA 때문에 고민하지 마세요! 강의 성적과 최종 점수를 쉽게 계산하세요. 과제, 시험 및 가중치를 입력하기만 하면 현재 위치를 확인할 수 있습니다.';

const faqItems = [
  { question: '가중치 성적이란 정확히 무엇인가요?', answer: '많은 강의에서 모든 과제가 똑같은 비중을 차지하지는 않습니다. 기말고사가 성적의 40%를 차지하는 반면, 숙제는 10%에 불과할 수 있습니다. 가중치 성적은 이러한 차이를 반영하여 실제 성적 위치를 알려줍니다.' },
  { question: '성적 가중치는 어디에서 확인할 수 있나요?', answer: '일반적으로 강의 계획서(Syllabus)의 "성적 산출 기준" 또는 "평가" 항목에 기재되어 있습니다. 교수는 참여도, 퀴즈, 팀 프로젝트 등 다양한 카테고리에 퍼센트를 할당합니다.' },
  { question: '과제 합계가 아직 100%가 되지 않으면 어떻게 하나요?', answer: '걱정하지 마세요! 저희 계산기는 현재까지 완료한 작업을 바탕으로 "예상" 성적을 보여줍니다. 현재 점수를 100% 기준으로 환산하여 계산합니다.' },
  { question: 'GPA 계산에도 사용할 수 있나요?', answer: '물론입니다. 각 강의를 "항목"으로 취급하고 학점 수를 "가중치"로 사용하여 학기별 가중 평균을 구할 수 있습니다.' },
];

const howToItems = [
  { name: '과제 목록 작성', text: '시험, 퀴즈 또는 프로젝트의 이름을 입력하세요. 일목요연하게 정리하세요!' },
  { name: '점수 입력', text: '각 항목에 대해 받은 성적을 입력하세요 (보통 10점 또는 100점 만점).' },
  { name: '가중치 추가', text: '강의 계획서를 확인하고 각 항목이 최종 성적에서 차지하는 비율을 입력하세요.' },
  { name: '결과 확인', text: '최종 성적이 즉시 업데이트되는 것을 확인하세요. 수동으로 계산할 필요가 없습니다!' },
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: '항목 추가',
    subjects: '성적 및 가중치',
    subjectName: '과제 / 과목',
    grade: '성적',
    weight: '가중치 (%)',
    scale: '기준 점수 (예: 4.0, 10, 100)',
    finalGrade: '현재 성적',
    removeSubject: '삭제',
    weightSum: '총 가중치',
    exampleSubject: '기말고사',
    newSubjectPlaceholder: '예: 중간고사',
  },
  seo: [
    { type: 'title', text: '가중치 계산기로 성적을 관리하는 방법', level: 2 },
    { type: 'paragraph', html: '성적표를 보며 막막했던 적이 있나요? 혼자가 아닙니다. <strong>가중 평균</strong>을 이해하는 것이 고등학교와 대학교에서 앞서 나가는 비결입니다.' },
    { type: 'title', text: '가중치 성적이 중요한 이유', level: 3 },
    { type: 'paragraph', html: '단순 평균은 모든 과제를 동일하게 취급합니다. 하지만 실제 세계(그리고 강의 계획서)에서는 2분짜리 퀴즈가 20페이지짜리 기말 보고서와 같은 비중을 가질 수 없습니다. 가중치 성적은 중요한 항목에 더 큰 "영향력"을 부여합니다.' },
    { type: 'paragraph', html: '<strong>학기 GPA</strong>를 계산하든, 마지막 선택 과제를 빼먹어도 괜찮은지 확인하든, 가중치 계산은 꼭 필요한 도구입니다.' },
    { type: 'title', text: '3단계로 최종 성적 계산하기', level: 3 },
    { type: 'list', items: ['강의 계획서에서 각 카테고리의 가중치를 찾으세요 (예: 시험 50%, 숙제 20%).', '자신의 점수에 그 가중치를 곱하세요 (예: 90점 * 0.50 가중치 = 45점).', '이 모든 점수를 합산하여 최종 퍼센트를 구하세요.'] },
    { type: 'title', text: '전문가 팁: "만약에" 시뮬레이션', level: 3 },
    { type: 'paragraph', html: '이 계산기를 사용하여 다양한 시나리오를 시뮬레이션해 보세요. "기말고사에서 85점을 받으면 결과가 어떻게 될까?" 또는 "이 숙제를 안 내면 어떻게 될까?" 실시간으로 영향을 확인하면 공부 시간을 어디에 우선적으로 투자해야 할지 결정하는 데 도움이 됩니다.' },
    { type: 'tip', html: '<strong>당황하지 마세요.</strong> 가중치 합계가 아직 100%가 되지 않았더라도 계산기는 현재까지의 작업을 바탕으로 예상 성적을 산출합니다. 학기 중간에 진행 상황을 추적하기에 아주 좋은 방법입니다!' },
    { type: 'title', text: '산술 평균 vs 가중 평균: 실제 차이점', level: 3 },
    { type: 'paragraph', html: '산술 평균은 자칫 위험한 오해를 불러일으킬 수 있습니다. 작은 퀴즈에서 100%를 받았지만 중요한 시험에서 50%를 받았다면, 단순 평균은 75%(통과)라고 말해줍니다. 하지만 시험이 성적의 90%를 차지한다면, 여러분의 <strong>실제 가중 성적</strong>은 55%(과락)에 가깝습니다. 항상 가중치를 확인하세요!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
