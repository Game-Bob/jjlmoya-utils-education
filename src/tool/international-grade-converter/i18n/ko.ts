import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = '국제 성적 변환기 및 GPA 환산 계산기';
const description = '국가별 학업 성적을 국제 표준으로 정확하게 변환해주는 도구입니다. 스페인, 미국, 영국, 독일, 프랑스, 이탈리아 등의 성적을 즉시 환산하세요. 에라스무스(Erasmus+), 풀브라이트, 해외 대학 지원을 위한 필수 도구입니다.';

const faqItems = [
  { 
    question: '국제 성적 변환은 어떻게 이루어지나요?', 
    answer: '이 도구는 각 국가의 최저 합격 점수와 최고 가능 점수를 기반으로 한 수학적 선형 매핑(Linear Mapping)을 사용합니다. 이를 통해 한 시스템의 "합격"이 다른 시스템의 "합격"과 일치하도록 조정하여, 서로 다른 평가 척도 간의 학업적 비례 공정성을 유지합니다.' 
  },
  { 
    question: '이 변환기 결과가 대학 입학 시 공식적으로 인정되나요?', 
    answer: '본 도구의 알고리즘은 ECTS나 WES에서 사용하는 표준 국제 환산표를 따르지만, 정보 제공을 목적으로 합니다. 공식적인 학점 인정을 위해서는 반드시 지원하려는 대학이나 공인 평가 서비스에 문의하시기 바랍니다.' 
  },
  { 
    question: '「일괄 모드(Bulk Mode)」 기능은 무엇인가요?', 
    answer: '일괄 모드는 성적 증명서가 긴 학생이 여러 성적을 한 번에 처리할 수 있는 기능입니다. PDF나 엑셀 파일에서 숫자 열을 복사하여 붙여넣기만 하면, 개별 환산 결과와 전체 GPA 평균이 즉시 계산됩니다.' 
  },
  { 
    question: '성적을 ECTS로 변환할 수 있나요?', 
    answer: '네. 유럽 학점 이수 시스템(ECTS) 기준에 맞춘 환산값을 제공합니다. 유럽 내 유학을 계획하거나 석사 과정에 지원하는 학생들에게 최적화되어 있습니다.' 
  }
];

const howToItems = [
  { name: '1. 원래 평가 시스템 선택', text: '출신 국가나 특정 성적 척도(예: 스페인 0-10, 프랑스 0-20)를 선택합니다.' },
  { name: '2. 대상 국가 설정', text: '지원하려는 국가들을 추가하여 대시보드에서 모든 환산 결과를 한눈에 비교할 수 있도록 합니다.' },
  { name: '3. 성적 데이터 입력', text: '간단한 확인을 위해 단일 성적을 입력하거나, 학기 전체 기록을 위해 일괄 모드를 사용합니다.' },
  { name: '4. 분석 및 내보내기', text: '시각화된 백분위 바를 확인하고, 기록용 성적 환산 보고서를 PDF로 다운로드합니다.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: '일괄 모드 처리, 실시간 변환, 전 세계 평가 척도 지원, PDF 보고서 생성',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: '원래 성적 시스템',
    targetSystems: '국제 환산 결과',
    gradeInput: '본인의 성적',
    bulkMode: '일괄 성적 처리',
    bulkPlaceholder: '여기에 성적 목록을 붙여넣으세요 (한 줄에 하나씩)...',
    results: '환산 대시보드',
    passLimit: '최저 합격점',
    shareResults: '성적 환산 보고서 생성',
    averageMedia: '환산 후 전체 평균',
    compareTitle: '세계 기준 학업 성취도',
    addSystem: '국가 추가',
    removeSystem: '삭제',
    selectCountry: '국가 선택',
    sourceCountry: '출신 국가',
    systemSelection: '시스템 선택',
    convertedScore: '환산 점수',
    emptyState: '성적을 입력하면 국제 환산 결과가 표시됩니다',
    minLabel: '최소',
    passLabel: '합격',
    maxLabel: '최대',
    scaleLabel: '척도',
    howToTitle: '국제 교육을 향한 길',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '학술적 참조 및 기준',
    singleGradeMode: '단일 성적',
    transcriptMode: '전체 성적표',
    gradeCounter: '입력된 성적 수',
    averageSummary: '계산된 평균',
    gradesIgnored: '{count}개의 성적은 범위를 벗어나 무시되었습니다',
    bulkHelp: '성적 증명서를 직접 붙여넣을 수 있습니다. 공백, 쉼표 또는 줄바꿈으로 구분된 성적을 자동으로 감지합니다.',
    copiedLabel: '복사 완료!',
    germanyExpl: '독일 성적 시스템: 1.0이 최고점이며, 4.0이 최저 합격점인 역전 평가 방식입니다.',
    spainExpl: '스페인 성적 시스템: 표준 0-10 척도이며, 5.0이 최저 합격점입니다.',
    usaExpl: '미국 GPA 시스템: 0.0에서 4.0 척도이며, 일반적으로 2.0이 최저 합격점입니다.',
    ukExpl: '영국 성적 시스템: 백분율 기준 분류이며, 40%가 최저 합격점입니다.',
    franceExpl: '프랑스 성적 시스템: 20점 만점 척도이며, 10점이 최저 합격점입니다.',
    italyExpl: '이탈리아 성적 시스템: 30점 만점 척도이며, 18점이 최저 합격점입니다.',
    netherlandsExpl: '네덜란드 성적 시스템: 1-10 척도이며, 6이 최저 합격점입니다.',
    placeholderSpain: '예: 8.5',
    placeholderUSA: '예: 3.7 또는 A-',
    placeholderFrance: '예: 14',
    placeholderGermany: '예: 1.3',
    placeholderUK: '예: 75',
    placeholderItaly: '예: 28',
    placeholderNetherlands: '예: 7.5',
  },
  seo: [
    { type: 'title', text: '글로벌 진출을 위한 정확한 성적 환산', level: 2 },
    { type: 'paragraph', html: '<strong>에라스무스(Erasmus+)</strong> 유학생이든 <strong>아이비리그 석사 과정</strong> 지원자든, 본인의 학업 성취도가 세계 기준으로 어느 정도인지 파악하는 것이 첫 번째 단계입니다. 성적 체계는 국가마다 매우 다릅니다. 스페인에서 10점은 만점이지만, 프랑스에서는 단지 턱걸이 합격점일 뿐입니다. 본 도구는 이러한 차이를 명확하게 해결해 드립니다.' },
    { type: 'title', text: 'GPA 변환 시 정확성이 중요한 이유', level: 3 },
    { type: 'paragraph', html: '입학 사정 위원회는 수천 명의 지원자를 필터링하기 위해 환산된 GPA를 사용합니다. 수동 계산 시 발생하는 작은 실수가 장학금 기회를 놓치게 할 수도 있습니다. 본 도구는 주요 국제 교육 기관에서 사용하는 <strong>공식 선형 매핑 알고리즘</strong>을 사용합니다.' },
    { type: 'title', text: '지원되는 주요 시스템', level: 3 },
    { type: 'list', items: [
      '<strong>스페인 (0-10):</strong> Aprobado에서 Sobresaliente까지 상세 매핑.',
      '<strong>미국 GPA (4.0):</strong> 표준 미국 대학 환산 기준.',
      '<strong>독일 (1-6):</strong> 1.0이 최고점인 역전 척도 처리.',
      '<strong>프랑스 (0-20):</strong> 그랑제콜 및 대학 지원을 위한 정밀 변환.',
      '<strong>영국 등급:</strong> 백분율을 학위 등급(Honours Degree)으로 변환.'
    ] },
    { type: 'tip', html: '<strong>학술적 팁:</strong> 「일괄 모드」를 사용하여 여러 학기의 누적 GPA를 확인하세요. 수동 엑셀 작업 시간을 획기적으로 줄여줍니다!' },
    { type: 'title', text: 'WES 환산 결과 확인', level: 3 },
    { type: 'paragraph', html: '공식 WES 평가 서비스는 유료이지만, 본 도구는 <strong>신뢰도 높은 WES GPA 추정치</strong>를 제공합니다. 평가 비용을 지불하기 전, 어느 대학에 지원할지 결정하는 데 큰 도움이 됩니다.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
