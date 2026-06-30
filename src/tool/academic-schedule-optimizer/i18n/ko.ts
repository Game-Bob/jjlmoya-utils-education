import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'academic-schedule-optimizer' as const;
const title = '시간표 및 학업 일정 최적화 도구';
const description = '시각적인 주간 수업 시간표를 작성하고, 과목별로 색상을 지정하며, 중복되는 일정을 감지하여 .ics 캘린더 파일로 내보내세요.';

const faqItems = [
  {
    question: '일정 중복 감지 기능은 어떻게 작동하나요?',
    answer: '각 수업 블록에는 요일, 시작 시간 및 수업 시간이 지정되어 있습니다. 도구는 각 블록 쌍을 비교하여 동일한 요일이면서 시간 범위가 겹칠 때 경고를 표시합니다.'
  },
  {
    question: '캘린더에서 수업을 직접 이동할 수 있나요?',
    answer: '네. 수업 블록을 다른 요일 열로 드래그 앤 드롭하여 새로운 주간 레이아웃을 테스트해 볼 수 있습니다. 이동 즉시 중복 상태가 업데이트됩니다.'
  },
  {
    question: '.ics 내보내기 파일에는 무엇이 포함되나요?',
    answer: '내보내기를 실행하면 과목, 강의실, 시작 시간, 종료 시간을 포함하여 각 수업이 이벤트로 저장된 표준 iCalendar 파일이 생성됩니다. 대다수의 캘린더 앱으로 가져올 수 있습니다.'
  },
  {
    question: '과목별로 색상을 다르게 지정해야 하는 이유는 무엇인가요?',
    answer: '색상 지정을 통해 빽빽한 시간표를 한눈에 알아보기 쉬워집니다. 실험, 강의, 세미나 또는 많은 학습량이 필요한 과목을 서로 다른 색상으로 구분하면 일정 충돌과 바쁜 요일을 더 빠르게 확인할 수 있습니다.'
  }
];

const howToItems = [
  { name: '수업 상세 정보 추가', text: '과목, 강의실, 요일, 시작 시간, 수업 시간 및 색상을 입력합니다.' },
  { name: '주간 그리드에 블록 배치', text: '생성된 수업 블록을 통해 각 수업이 주간 시간표에 어떻게 들어맞는지 확인합니다.' },
  { name: '중복 해결', text: '강조 표시된 중복 블록을 확인하고, 중복 표시 패널의 경고가 사라질 때까지 수업 일정을 이동하거나 수정합니다.' },
  { name: '캘린더 내보내기', text: '.ics 파일을 다운로드하여 구글 캘린더, 애플 캘린더, 아웃룩 등에 가져옵니다.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: '과목명',
    roomLabel: '강의실',
    dayLabel: '요일',
    startLabel: '시작 시간',
    durationLabel: '수업 시간',
    colorLabel: '색상',
    addClass: '수업 추가',
    saveClass: '수업 저장',
    newClass: '새 수업',
    exportICS: '.ics 내보내기',
    conflictLabel: '일정 중복 감지',
    noConflicts: '감지된 일정 중복 없음',
    removeLabel: '수업 삭제',
    editHint: '수업을 선택하여 편집하거나, 다른 요일 및 시간으로 드래그하여 이동하세요.',
    weekendDaysLabel: '주말 표시',
    saturdayLabel: '토요일',
    sundayLabel: '일요일',
    weekDayLabels: ['월', '화', '수', '목', '금'],
    weekendDayShortLabels: ['토', '일'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 시간', '2 시간', '3 시간'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: '미적분학',
    defaultRoom: '204호 강의실',
    defaultNewSubject: '새 수업',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: '미적분학', room: '204호 강의실', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: '문학', room: '실험실 B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: '물리학', room: '대강당', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'academic-schedule.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: '개 중복',
    overlapPlural: '개 중복',
    detectedLabel: '감지됨',
    classEditorAriaLabel: '수업 에디터',
    weeklyScheduleAriaLabel: '주간 시간표',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 캘린더 표준',
  },
  seo: [
    { type: 'title', text: '실제로 작동하는 주간 학업 시간표 짜는 방법', level: 2 },
    { type: 'paragraph', html: '좋은 시간표는 단순히 수업을 목록으로 나열하는 것 이상입니다. 한 주 중 어디에 학습 부담이 쏠려 있는지, 공강 시간으로 인해 하루가 어떻게 쪼개져 있는지, 필수 과목 간의 중복이 발생하는지 보여줍니다. 시각적 시간표 최적화 도구를 사용하면 결석, 급한 이동 또는 수강 신청 실패로 이어지기 전에 이러한 문제들을 눈으로 확인할 수 있습니다.' },
    { type: 'summary', title: '시간표를 확정하기 전에 확인해야 할 사항', items: [
      '같은 요일에 필수 과목 2개가 겹치지 않는지 확인합니다.',
      '주말 수업이 있는 교육 기관의 경우 토요일과 일요일을 활성화할 수 있습니다.',
      '실험, 세미나, 강의는 빠른 확인을 위해 고유한 색상을 지정합니다.',
      '학습량이 많은 과목은 휴식 시간 없이 무리하게 연속해서 배치하지 않습니다.',
      '최종 시간표는 평소 사용하는 캘린더 앱으로 내보낼 수 있어야 합니다.'
    ] },
    { type: 'title', text: '시각적 그리드가 일반 텍스트 목록보다 우수한 이유', level: 3 },
    { type: 'paragraph', html: '단순한 강좌 목록은 수업 일정을 주간 시간표 흐름과 분리해 보여주기 때문에 시간 압박을 알아차리기 어렵게 만듭니다. 그리드 형식은 일정 밀도를 한눈에 보여줍니다. 월요일에 수업이 너무 과도하게 집중되어 있지는 않은지, 강의가 실험 수업을 가로막고 있지는 않은지, 토요일 수업이 한 주의 리듬을 해치지 않는지, 동선이나 이동거리에 무리가 없는지 바로 판단할 수 있습니다.' },
    { type: 'comparative', columns: 3, items: [
      { title: '강좌 목록', description: '수강 신청 코드 확인에는 좋지만, 주간 학습 부담을 평가하기에는 부족합니다.' },
      { title: '주간 그리드', description: '일정 리듬, 공강 시간, 일정 충돌을 한눈에 파악하기에 가장 좋습니다.', highlight: true },
      { title: '캘린더 앱만 사용', description: '시간표 결정 후 관리에는 유용하지만, 여러 대안을 테스트하기에는 더딥니다.' }
    ] },
    { type: 'title', text: '중복 감지 기능의 작동 원리', level: 3 },
    { type: 'paragraph', html: '두 수업이 같은 요일에 편성되고 시간대가 겹칠 때 중복이 발생합니다. 예를 들어 오전 10시~12시 강의는 오전 11시~오후 1시 세미나와 오전 11시 시간대를 공유하므로 서로 겹치게 됩니다. 도구는 모든 수업 블록을 비교하여 중복되는 양쪽 일정을 모두 표시합니다.' },
    { type: 'table', headers: ['수업 A', '수업 B', '결과'], rows: [
      ['월요일 09:00-11:00', '월요일 11:00-13:00', '수업 하나가 끝나면서 동시에 다음 수업이 시작되므로 겹치지 않습니다.'],
      ['화요일 10:00-12:00', '화요일 11:00-13:00', '시간대가 겹치므로 중복이 발생합니다.'],
      ['수요일 09:00-11:00', '목요일 09:00-11:00', '요일이 서로 다르므로 겹치지 않습니다.']
    ] },
    { type: 'title', text: '학업 계획의 시그널로서 색상 활용하기', level: 3 },
    { type: 'paragraph', html: '색상 지정은 단순히 미적인 요소에 그치지 않습니다. 수업 형태, 난이도, 캠퍼스 위치 또는 요구되는 집중도 수준을 나타낼 수 있습니다. 일관성 있는 색상 템플릿을 사용하면 바쁜 수강 신청 기간 중에 다양한 대안을 비교할 때 시간표를 판별하기가 훨씬 쉬워집니다.' },
    { type: 'tip', html: '<strong>색상이 가진 의미를 일관되게 적용하세요.</strong> 예를 들어, 실험 수업은 파란색 계열, 일반 강의는 녹색 계열, 이동 시간이 길거나 사전 준비가 필요한 수업은 경고 색상으로 통일합니다.' },
    { type: 'title', text: '캘린더 앱으로 내보내기', level: 3 },
    { type: 'paragraph', html: '.ics 파일은 표준 iCalendar 상호 교환 포맷입니다. 학업 시간표를 내보내면 수업 일정을 구글 캘린더, 애플 캘린더, 아웃룩 및 학교 캘린더 시스템으로 편리하게 가져올 수 있습니다. 인포트 후에는 알림 설정, 이동 시간 반영, 반복 규칙 생성 및 개인 학습 시간 설정을 추가할 수 있습니다.' },
    { type: 'diagnostic', variant: 'warning', title: '가져오기 전 주의사항', html: '캘린더의 주 시작 날짜가 가져오려는 주와 일치하는지 확인하고, 캘린더 앱의 시간대 설정을 재점검하고, 가져온 일정이 기존의 수업 일정과 중복되지 않는지 검토하세요.' },
    { type: 'title', text: '수강 신청을 위한 실용적인 작업 흐름', level: 3 },
    { type: 'list', items: [
      '선택 과목을 추가하기 전에 필수 과목을 먼저 등록하고 주요 일정 충돌을 해결합니다.',
      '주말 수업이 있다면 토요일 또는 일요일 표시를 활성화합니다.',
      '색상을 사용하여 강의, 실험, 세미나, 자율 학습을 구분합니다.',
      '요일 간에 수업 블록을 드래그하여 대체 수업 구성을 빠르게 비교해 봅니다.',
      '식사 시간, 이동 시간, 휴식을 고려해 충분한 공강 시간을 남겨 둡니다.',
      '일정 중복 표시 패널에 경고가 완전히 사라진 후에만 최종 내보내기를 진행합니다.'
    ] },
    { type: 'message', title: '시간표 작성은 반복적인 과정입니다', html: '첫 번째 버전은 임시 안으로 생각하세요. 최적의 시간표는 중복을 조율하고, 수업 형식을 비교하고, 지속 가능한 일상 리듬인지 꼼꼼히 점검한 후에 탄생합니다.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
