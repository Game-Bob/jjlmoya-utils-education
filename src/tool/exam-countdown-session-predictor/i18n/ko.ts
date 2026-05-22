import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor' as const;
const title = '시험 디데이 카운트다운 & 학습 페이스메이커';
const description = '시험 당일 완벽한 대비를 위해 매일 공부해야 할 분량을 정확하게 계산합니다. 총 학습 범위와 휴식일을 입력하여 나만의 맞춤형 공부 일정표를 생성하세요.';

const faqItems = [
  { question: '시험 직전 벼락치기보다 매일 나누어 공부하는 것이 왜 더 좋은가요?', answer: '연구에 따르면 분산 학습(학습 세션을 시간에 따라 나누어 공부하는 것)은 마지막 며칠 동안 한꺼번에 몰아서 공부하는 것보다 장기 기억 정착에 훨씬 유리하며, 시험 불안감을 크게 줄여줍니다.' },
  { question: '최종 복습 기간(버퍼)은 왜 설정하나요?', answer: '최종 복습 기간은 시험 직전의 일정 기간을 온전히 전체 복습만을 위해 남겨두는 기간입니다. 이 기간 동안 계산기는 새로운 공부 범위를 배정하지 않으므로, 배운 내용을 완벽하게 정리하고 다질 수 있습니다.' },
  { question: '맞춤 설정한 휴식일은 하루 공부량에 어떤 영향을 주나요?', answer: '주간 고정 휴식일이나 특정 날짜를 학습 일정에서 제외하면, 계산기가 남은 학습 범위를 다른 공부일로 자동 재배분합니다. 이로 인해 마감일 내에 완료할 수 있도록 남은 일자의 하루 목표량이 소폭 상승합니다.' },
  { question: '설정한 휴식일을 다시 공부일로 복원할 수 있나요?', answer: '네. 일정표 상의 어떤 날이든 실시간으로 클릭하여 휴식일과 공부일 간의 상태를 전환할 수 있으며, 제외일 목록에서 특정 날짜를 삭제하면 즉시 일정이 재계산됩니다.' },
];

const howToItems = [
  { name: '시험 날짜 입력', text: '달력 선택기에서 예정된 시험 날짜를 지정합니다.' },
  { name: '총 학습 범위 입력', text: '공부해야 할 전체 페이지 수, 단원 수, 또는 문제 수를 입력합니다.' },
  { name: '공부 요일 및 복습 버퍼 설정', text: '매주 쉴 요일을 선택하고, 최종 복습에 할애할 기간(예: 복습용으로 2일)을 설정합니다.' },
  { name: '일정 확인 및 미세 조정', text: '예기치 않은 개인 일정에 맞춰 일정표의 특정 날짜를 바로 휴식일로 설정하며 계획을 조정합니다.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'KRW' },
};

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: '학습 플래너 & 디데이',
    examDateLabel: '시험 날짜',
    materialLabel: '총 학습 범위 (페이지 / 단원)',
    materialUnitLabel: '학습 범위 단위',
    progressLabel: '지금까지 완료한 분량',
    weeklyScheduleLabel: '주간 공부 요일',
    reviewBufferLabel: '최종 복습 기간 (일)',
    excludedDatesLabel: '맞춤 지정 휴식일',
    dailyPaceLabel: '하루 권장 공부량',
    daysLeftLabel: '시험까지 남은 일수',
    studyDaysLabel: '실제 공부 일수',
    bufferDaysLabel: '복습 전용 일수',
    scheduleTitle: '나만의 맞춤형 공부 일정표',
    resetButton: '기본값으로 초기화',
    addExclusionButton: '휴식일 추가',
    daysOfWeek: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayTypes: {
      study: '공부일',
      rest: '휴식일',
      review: '복습 기간',
      exam: '시험 당일',
    },
    units: {
      pages: '페이지',
      chapters: '장/단원',
      exercises: '문제',
      modules: '모듈',
      topics: '토픽',
    },
    noStudyDaysError: '공부할 수 있는 날짜가 없습니다! 주간 공부 요일과 최종 복습 기간 설정을 확인해 주세요.',
    examInPastError: '시험 날짜는 오늘 이후여야 합니다.',
    noMaterialError: '공부할 학습 범위를 0보다 크게 입력해 주세요.',
    scheduleTableHeader: {
      date: '날짜',
      day: '요일',
      type: '상태',
      target: '오늘의 목표',
      cumulative: '누적 진행률',
      action: '빠른 작업',
    },
    markAsRest: '휴식일로 지정',
    markAsStudy: '공부일로 지정',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 & 학술 자료',
  },
  seo: [
    { type: 'title', text: '학습 효율을 극대화하는 공부 계획 수립 방법', level: 2 },
    { type: 'paragraph', html: '시험 대비에 있어서 가장 중요한 것은 시험 전날 밤샘 공부를 몇 시간 하는가가 아니라, 공부해야 할 양을 기간 동안 어떻게 골고루 분배하는가입니다. 일정한 학습 속도를 유지하는 것은 인지적 번아웃을 예방하고, 기억 소환력을 높이며, 당황하지 않고 시험 범위를 완벽하게 훑어보는 데 필수적입니다.' },
    { type: 'title', text: '분산 학습과 간격 반복의 과학', level: 3 },
    { type: 'paragraph', html: '인간의 뇌는 학습 세션 사이에 일정한 시간 간격을 둘 때 가장 잘 기억합니다. 공부 범위를 몇 주에 걸쳐 고르게 분산하면, 뇌는 기억을 고정(consolidation)하는 과정을 거치며 한층 더 강력한 신경망을 형성합니다. 간격 반복은 정신적 피로를 방지하고 단기 기억을 장기 기억으로 전이시키는 데 도움을 줍니다.' },
    { type: 'paragraph', html: '에빙하우스의 망각 곡선 이론에 따르면, 학습한 내용은 능동적으로 복습하지 않을 경우 시간 경과에 따라 기억에서 사라집니다. 계획적인 학습 주기는 망각을 지연시키는 리셋 역할을 하여 깊이 있는 개념 이해를 돕습니다.' },
    { type: 'title', text: '시험 전 최종 복습용 버퍼의 필요성', level: 3 },
    { type: 'paragraph', html: '자주 하는 실수 중 하나는 시험 날짜 직전까지 새로운 내용을 계속해서 공부하려는 것입니다. 공부 일정에 복습 전용 기간(보통 시험 2~5일 전)을 별도로 확보해 두면 모의고사 풀이, 요약 노트 복습, 부족한 부분 보완 등에 유용한 시간을 벌 수 있습니다. 또한 시험 당일 최상의 인지 능력을 발휘하기 위해 수면을 취하는 것도 가능해집니다.' },
    { type: 'title', text: '상황에 맞게 조절되는 적응형 계획의 이점', level: 3 },
    { type: 'paragraph', html: '고정된 공부 계획은 예상치 못한 사정이 발생하면 쉽게 무너집니다. 몇 페이지만 밀려도 기존 일정표는 무용지물이 됩니다. 반면 실시간 적응형 계산기는 남은 목표량을 현재 상태에 맞춰 즉시 재계산하므로, 사소한 밀림 현상으로 인한 불필요한 스트레스를 줄여줍니다.' },
    { type: 'list', items: [
      '일정표의 정확성을 유지하기 위해 학습 진도를 정기적으로 업데이트하세요.',
      '갑작스러운 스케줄 충돌이 발생하면 휴식일을 유연하게 추가하세요.',
      '하루에 무리해서 진도를 몰아치려 하지 말고 매일 꾸준한 속도를 유지하세요.'
    ] },
    { type: 'title', text: '유연성: 계획적인 휴식일 배치의 중요성', level: 3 },
    { type: 'paragraph', html: '휴식은 노력이 끝난 후 주어지는 단순한 보상이 아니라 학습 과정의 필수 요소입니다. 일정표에 계획적인 휴식일을 반영함으로써 누적되는 피로를 줄일 수 있습니다. 본 플래너는 남은 목표량을 다른 공부 요일에 균등하게 나누어 줍니다.' },
    { type: 'tip', html: '<strong>예상치 못한 일에 항상 대비하세요.</strong> 매주 최소 하루는 휴식일로 비워 두는 것을 추천합니다. 이는 안전판 역할을 하여 몸이 아프거나 급한 일이 있을 때 전체 틀을 깨지 않고 진도를 따라잡을 수 있게 해줍니다.' },
    { type: 'title', text: '하루 공부량 수동 계산 공식', level: 3 },
    { type: 'paragraph', html: '매일 달성해야 할 공부 목표량을 직접 계산하는 간단한 수학 공식이 있습니다. 우선 총 공부 범위에서 현재까지 공부를 마친 페이지나 단원을 뺍니다. 그 다음 오늘부터 시험일까지의 총 일수에서 휴식일과 복습 기간 일수를 제외합니다. 마지막으로 남은 공부 범위를 이 실제 공부 일수로 나눕니다.' },
    { type: 'paragraph', html: '예를 들어 공부할 범위가 400페이지이고 그 중 50페이지를 마쳤으며, 시험까지 20일이 남았다고 합시다. 이 중 4일의 휴식일을 잡고 2일의 복습 기간을 둔다면, 남은 범위는 350페이지이고 공부일은 14일입니다. 하루 권장 속도는 350 나누기 14로, 하루에 정확히 25페이지씩 공부하면 됩니다.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
