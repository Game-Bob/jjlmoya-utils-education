import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'degree-credit-progress-and-projected-grade-calculator' as const;
const title = '이수 학점 진척도 및 예상 학점 시뮬레이터';
const description = '학기별로 이수 계획을 설계하고, 확정 평점 및 미래의 예상 평점을 시뮬레이션하여 목표 평점 달성에 필요한 나머지 과목의 권장 성적을 도출합니다.';

const faqItems = [
  {
    question: '이수 계획 작성을 시작하려면 어떻게 해야 하나요?',
    answer: '대시보드에서 학기를 추가하고 과목 정보를 직접 입력하면 됩니다. 학점수와 각 과목의 진행 상태를 설정하고 성적을 기록할 수 있습니다.',
  },
  {
    question: '확정 평점과 예상 평점의 차이는 무엇인가요?',
    answer: '확정 평점은 이수가 완료되어 공식 성적이 확정된 과목들로만 계산됩니다. 예상 평점은 이수 중이거나 이수 예정인 과목들의 목표 성적을 합산해 전체 평균을 예측합니다.',
  },
  {
    question: '필요 성적 지표는 무엇을 보여주나요?',
    answer: '설정한 최종 목표 평점을 만족하기 위해 앞으로 이수할 남은 학점(이수 중/예정)에서 유지해야 하는 정확한 가중 평균 성적을 산출합니다.',
  },
  {
    question: '입력한 데이터는 안전하게 보관되나요?',
    answer: '네. 모든 학업 데이터는 사용자의 웹 브라우저 로컬 스토리지에만 저장되며 외부 서버로 전송되지 않습니다. 내보내기 버튼을 통해 데이터를 JSON 파일로 다운로드할 수 있습니다.',
  },
];

const howToItems = [
  { name: '목표 설정', text: '대시보드 상단에서 졸업에 필요한 총 학점수와 본인의 최종 목표 평점을 설정합니다.' },
  { name: '교과 과정 설계', text: '학기를 추가하고 이수 과목명과 공식 학점수를 등록하여 학기 로드맵을 구성합니다.' },
  { name: '성적 및 상태 갱신', text: '과목 상태를 이수 완료, 이수 중, 계획 중으로 전환해가며 성적 및 시뮬레이션 목표치를 대입합니다.' },
  { name: '필요 성적 파악', text: '앞으로의 학업 성취 기준을 확인하고 과목별 학습 비중을 시뮬레이션합니다.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: '전공 및 학위 과정명',
    graduationCreditsLabel: '졸업 요건 총 학점',
    targetGpaLabel: '목표 평점',
    realGpaLabel: '확정 평점',
    projectedGpaLabel: '예상 평점',
    creditsCompletedLabel: '이수 완료 학점',
    requiredGradeLabel: '요구 성적 (남은 과목 평균)',
    addSemesterButton: '학기 추가',
    addCourseButton: '과목 추가',
    exportPlanButton: '계획 내보내기',
    importPlanButton: '계획 가져오기',
    semesterNamePlaceholder: '학기명 (예: 1학년 2학기)',
    courseNamePlaceholder: '과목명',
    creditsPlaceholder: '학점',
    gradePlaceholder: '성적',
    statusCompleted: '이수 완료',
    statusInProgress: '이수 중',
    statusPlanned: '계획 중',
    importError: '이수 계획을 가져올 수 없습니다. 파일의 형식을 확인해 주세요.',
    uploadHint: '모든 데이터는 브라우저의 로컬에 저장됩니다. 가져오기 및 내보내기 프로세스는 사용자 기기에서만 실행됩니다.',
    statusMessageSuccess: '목표 평점 달성을 향해 순조롭게 나아가고 있습니다.',
    statusMessageWarning: '목표 평점을 달성하려면 남은 과목에서 평균 {grade}점 이상을 받아야 합니다.',
    statusMessageImpossible: '현재 입력된 교과 설정으로는 목표 평점을 달성하는 것이 수학적으로 불가능합니다.',
    degreeNamePlaceholder: '예: 컴퓨터공학 학사 과정',
    deleteSemesterLabel: '학기 삭제',
    deleteCourseLabel: '과목 삭제',
    semesterTitleTemplate: '학기 {num}',
  },
  seo: [
    { type: 'title', text: '졸업 평점 예측 및 이수 학점 시뮬레이션 방법', level: 2 },
    { type: 'paragraph', html: '대학 학업 관리는 과거의 발자취를 기록하는 것뿐만 아니라 미래의 학업을 주도적으로 설계하는 과정입니다. 본 계산기는 장학금 획득이나 대학원 지원 등 기준점을 설정하고 이를 달성하기 위한 구체적인 목표 성적 지침을 명확히 제공합니다.' },
    { type: 'summary', title: '매 학기 추적해야 할 중요한 지표', items: [
      '졸업에 필요한 총 학점 대비 현재 획득한 이수 학점의 비율을 시각화합니다.',
      '확정 성적과 임의의 가정 성적을 구분하여 미래를 설계합니다.',
      '목표 평점 조건 달성을 위해 앞으로 획득해야 하는 최저 요구 성적을 파악합니다.',
    ] },
    {
      type: 'proscons',
      title: '예상 평점 시뮬레이터의 장점과 한계',
      items: [
        {
          pro: '앞으로 다가올 학기의 교과 목표를 체계적으로 수립하도록 지원합니다.',
          con: '예측치의 신뢰성은 본인이 기입하는 학점 목표 성적의 현실적 수준에 좌우됩니다.',
        },
        {
          pro: '목표 평점 고수를 위해 취득해야 하는 정확한 최저 성적을 안내합니다.',
          con: '학칙에 따른 재이수 성적 대체, 학점 포기 등 개별 대학의 세부 규정은 자동 반영되지 않습니다.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
