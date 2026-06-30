import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'reading-time-note-density-planner' as const;
const title = '독서 시간 및 필기 밀도 계획기';
const description = '노트 정리 시간을 포함한 학업 독서 시간을 예측하고, 학습량을 효율적인 세ッション으로 분할해 보세요.';

const faqItems = [
  { question: '노트 정리가 독서 시간에 이토록 큰 영향을 주는 이유는 무엇인가요?', answer: '학업을 위한 독서는 단순히 글자를 눈으로 훑는 작업이 아니기 때문입니다. 중요 표시, 요약문 작성, 여백 메모, 단語 카드 제작 등의 작업에는 모두 추가적인 뇌 처리 시간이 소요됩니다. 필기 밀도를 따로 계산해 계획을 세우면, 요행을 바라는 낙관적인 독서 속도 계산 때문에 마감일 직전에 밤을 새우는 일을 방지할 수 있습니다.' },
  { question: '시간당 독서 페이지 수는 얼마를 기준으로 삼는 것이 좋은가요?', answer: '내용이 방대하고 어려운 전공 서적의 경우 시간당 15~25페이지가 보통입니다. 보다 평이한 내용이라면 시간당 30~50페이지가 현실적입니다. 수식이나 기초 사료, 낯선 전공 용어가 섞여 있다면 기준 수치를 낮게 설정하고, 첫 독서 세션을 마친 후 속도를 조정하세요.' },
  { question: '필기 밀도는 어떻게 지정하는 것이 적절할까요?', answer: '간단히 밑줄을 긋거나 뼈대를 요약하는 수준이라면 페이지당 1~2분, 코넬식 필기 등 본격적인 정리는 3~5분, 단어 카드 작성이나 예제 풀이, 종합적인 문단 정리가 수반되는 고밀도 작업에는 5분 이상을 할당하세요.' },
  { question: '이 계획기가 수업 계획서의 일정을 대신할 수 있나요?', answer: '아닙니다. 이 도구는 독서량을 예상 시간 및 학습 세션 수로 변환하도록 도와줄 뿐이며, 과제 제출 기한, 세미나, 실험, 복습 기간 등은 평소 사용하는 캘린더에 별도로 표시해야 합니다.' },
];

const howToItems = [
  { name: '독서 분량 입력', text: '읽어야 하는 전체 페이지 수 또는 그에 상응하는 텍스트량을 입력합니다.' },
  { name: '사용 가능 시간 입력', text: '마감일 전까지 학업에 실제 투자할 수 있는 시간(분 단위)을 입력합니다.' },
  { name: '속도 및 필기 밀도 예측', text: '시간당 독서 페이지 수와 페이지당 평균 노트 정리 시간을 선택합니다.' },
  { name: '세션 분할', text: '세션 수를 설정하여 1회 학습 시 읽어야 할 페이지와 소요 시간, 필기 부담을 확인합니다.' },
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

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: '읽어야 할 페이지',
    minutesLabel: '사용 가능한 시간',
    speedLabel: '독서 속도 (페이지/시간)',
    densityLabel: '필기 밀도 (분/페이지)',
    sessionsLabel: '학습 세션 수',
    totalTimeLabel: '예상 총 작업 시간',
    readingTimeLabel: '독서',
    noteTimeLabel: '노트 정리',
    coverageLabel: '시간 커버율',
    pagesSessionLabel: '페이지/세션',
    minutesSessionLabel: '시간/세션',
    notesSessionLabel: '필기 시간/세션',
    controlsAriaLabel: '독서 계획 설정',
    minuteUnit: '분',
    hourUnit: '시간',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 학업 리소스',
    statusLabels: {
      comfortable: '안정적인 계획입니다',
      tight: '빠듯하지만 가능합니다',
      overloaded: '일정이 초과되었습니다',
    },
    resetButton: '초기화',
  },
  seo: [
    { type: 'title', text: '단순 페이지 수가 아닌 노트 정리 시간까지 고려해 독서 계획 세우기', level: 2 },
    { type: 'paragraph', html: '많은 학생들이 단순한 페이지 수를 평소 독서 속도로 나누어 공부 시간을 책정하지만, 가장 간과하기 쉬운 복병인 필기 시간을 잊곤 합니다. 40페이지 분량을 읽을 때 단순히 훑어만 본다면 90분이면 되지만, 필기하고 요약하고 복습 문제를 만든다면 3시간 이상이 걸립니다. 이 계획기는 독서 속도와 노트 정리 시간을 별도로 계산하므로, 실제 학습 활동에 입각한 현실적인 일정을 짤 수 있게 돕습니다.' },
    { type: 'diagnostic', variant: 'info', title: '내 독서 계획이 너무 안일할 때 벌어지는 현상들', html: '<ul><li>공부용으로 배정한 시간이 단순히 책장 넘기는 시간으로 채워져 있고, 요약이나 예제 풀이 시간이 빠져 있다.</li><li>소설, 두꺼운 전공서, 학술 논문, 판례 등의 성격이 다른 텍스트에 전부 똑같은 독서 속도를 적용한다.</li><li>학습 세션 하나가 내 평균 집중 지속 시간보다 길게 잡혀 있어, 후반부 페이지로 갈수록 필기 수준이 현저히 떨어진다.</li><li>마감일까지 수행해야 할 다른 과제들이 쌓여 있음에도, 모든 자유 시간을 오직 한 과목에만 투입할 수 있다고 상정한다.</li></ul>' },
    { type: 'title', text: '현실적인 시간당 페이지 수 설정 가이드', level: 3 },
    { type: 'table', headers: ['자료 유형', '권장 시작 속도', '계획 시 조언'], rows: [['가벼운 복습 또는 익숙한 내용', '40-60 페이지/시간', '용어와 핵심 내용을 이미 숙지하고 있으며, 암기가 목적이 아닌 내용 리마인드용 독서 시에만 적용하세요.'], ['표준적인 전공서 챕터', '20-35 페이지/시간', '챕터 내에 예제 풀이, 상세 다이어그램, 단원 평가 질문이 포함되어 있다면 속도를 더 낮춰야 합니다.'], ['어려운 학술 이론, 논문, 원전 사료', '8-20 페이지/시간', '세션을 짧게 쪼개어 계획하고, 완벽한 이해를 위해 재독이 필수임을 감안하여 충분한 여유 시간을 두세요.']] },
    { type: 'tip', html: '<strong>첫 세션을 마친 후 속도를 보정하세요.</strong> 처음 10페이지를 읽고 정리하는 데 걸린 시간을 재보세요. 계산기 결과 상에 여유가 있다고 나오더라도 실제 측정된 동선이 빡빡하다면 실 측정 수치를 믿고 속도 설정을 낮춰야 합니다.' },
    { type: 'title', text: '필기 밀도의 정의와 필요성', level: 3 },
    { type: 'paragraph', html: '필기 밀도란 독서 중 혹은 직후에 1페이지의 내용을 구조화하고 정리하는 데 할애하는 평균 시간입니다. 간단한 수준의 필기는 중요 포인트에 색을 칠하고 여백에 키워드를 끄적이는 것에 그치지만, 깊이 있는 필기는 코넬식 요약문 작성, 질문 작성, 단어 카드 만들기 등을 의미합니다. 공부하는 목적에 맞춰 밀도를 선택하세요. 객관식 시험은 단어 카드, 서술형 평가는 논증 맵, 계산 과목은 직접 풀어본 예제가 유용합니다.' },
    { type: 'comparative', title: '단순 요약 vs 깊이 있는 정리', columns: 2, items: [{ title: '단순 요약', description: '빠르게 읽어낼 수 있지만, 기억 휘발성이 높아 시험 직전 다시 들여다볼 때 복습 자료로서 가치가 다소 떨어집니다.', points: ['이미 익숙한 주제에 적합', '즉각적인 공부 부담이 적음', '사후 복습 효율성은 낮음'] }, { title: '깊이 있는 정리', description: '시간은 훨씬 많이 걸리지만, 시험 대비, 세미나 발표, 리포트 작성 등 정보의 정확한 인출이 요구될 때 가장 탁월한 방식입니다.', highlight: true, points: ['중요 시험 대비에 적극 권장', '즉각적인 공부 부담이 높음', '매우 강력한 복습 도구 축적'] }] },
    { type: 'summary', title: '시간 계획의 실무적 규칙', items: ['일반적인 공부 세션은 가능한 한 75분 이하로 끊어 구성하세요.', '필기 소요 시간이 독서 시간보다 더 길다면, 독서 단계를 두 단계(「일단 완독」 후 「나중에 정리」)로 쪼개어 작업하세요.', '마감 전날까지 새 내용을 읽는 대신, 마지막 세션은 이미 공부한 내용을 단단히 다지는 복습에 쓰세요.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
