import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = '뽀모도로 플로우 (Pomodoro Flow)';
const description = '선(Zen) 스타일의 미니멀한 시간 관리 도구로 생산성을 극대화하세요. 업무 및 휴식 주기를 커스텀하고, 집중 방해 요소를 기록하며, 실시간 집중 패턴을 시각화합니다.';

const faqItems = [
  { question: '뽀모도로 기법이란 무엇인가요?', answer: '뽀모도로 기법은 집중 업무 시간(보통 25분)과 짧은 휴식을 반복하는 시간 관리 방법입니다. 본 도구는 이에 사용자 맞춤형 주기와 상세 분석 기능을 더했습니다.' },
  { question: '업무 및 휴식 시간을 조절할 수 있나요?', answer: '네! 세 가지 프리셋(씨앗: 25/5, 나무: 50/10, 산: 90/15) 중 선택하거나 +5/-5분 버튼을 사용해 실시간으로 시간을 조절할 수 있습니다.' },
  { question: '집중 방해(집중 중단) 기록은 무엇인가요?', answer: '작업 중 한눈을 팔거나 방해를 받았을 때 버튼을 클릭하면 중단 횟수가 기록됩니다. 이는 「집중 점수」를 계산하고 본인의 집중 패턴을 파악하는 데 도움을 줍니다.' },
  { question: '집중 점수는 어떻게 계산되나요?', answer: '집중 점수 = ((업무 시간 - 중단 횟수 × 2) / 업무 시간) × 100입니다. 이는 작업 전환에 따르는 인지적 비용을 반영한 지표입니다.' },
  { question: '세션 데이터를 내보낼 수 있나요?', answer: '네. 세션 요약 내용을 마크다운 형식으로 복사(노션, 옵시디언 등에 최적)하거나 SNS 공유용 이미지로 만들 수 있습니다.' },
];

const howToItems = [
  { name: '작업 내용 입력', text: '지금 시작할 업무를 입력하세요. 목표 의식을 명확히 하고 맥락을 유지하는 데 도움이 됩니다.' },
  { name: '주기 선택', text: '가벼운 작업은 씨앗(25/5), 표준 업무는 나무(50/10), 딥 워크(Deep Work)에는 산(90/15) 주기를 선택하세요.' },
  { name: '시작 및 집중', text: '타이머가 시작됩니다. 링을 클릭하면 일시 정지되며, +5/-5분으로 시간을 조절할 수 있습니다. 탭 제목에서 남은 시간을 확인할 수 있습니다.' },
  { name: '방해 요소 기록', text: '집중이 흐트러졌나요? 「집중 중단 알림」 버튼을 누르세요. 기록된 데이터는 집중 점수 계산에 사용됩니다.' },
  { name: '결과 분석', text: '세션이 끝나면 집중 점수, 작업 상세 분석, 월간 생산성 히트맵 등 통계 데이터를 확인하세요.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: '어떤 업무를 시작하실 건가요?',
    selectCycle: '집중 주기를 선택하세요',
    startButton: '시작',
    seed: '씨앗',
    tree: '나무',
    mountain: '산',
    timer: '타이머',
    pauseButton: '일시 정지',
    resumeButton: '다시 시작',
    distractionButton: '집중 중단 알림',
    addFiveMin: '+5분',
    subtractFiveMin: '-5분',
    focusMode: '집중',
    breakTime: '휴식',
    sessionComplete: '세션 종료',
    endSession: '세션 마치기',
    focusScore: '집중 점수',
    totalTime: '전체 시간',
    interruptions: '중단 횟수',
    taskBreakdown: '업무 상세 분석',
    monthlyHeatmap: '월간 활동 지표',
    copyMarkdown: '마크다운 복사',
    shareImage: '공유하기',
    wellnessMessage: '잠시 쉬어 가세요. 충분히 노력하셨습니다.',
    sessionSummary: '세션 요약',
    newSession: '새 세션 시작',
    copied: '복사 완료!',
    unnamedTask: '제목 없는 작업',
    breakTimeNotification: '휴식 시간입니다!',
    focusTimeNotification: '집중할 시간입니다!',
    interruptionsLabel: '집중 중단:',
    studySession: '학습 세션',
  },
  seo: [
    { type: 'title', text: '뽀모도로 플로우로 완성하는 몰입의 즐거움', level: 2 },
    { type: 'paragraph', html: '생산성은 더 오래 일하는 것이 아니라 더 스마트하게 일하는 것에서 나옵니다. <strong>뽀모도로 플로우</strong>는 검증된 뽀모도로 기법에 선(Zen) 철학이 담긴 디자인과 실시간 분석 기능을 결합하여, 당신이 어떻게 해야 최상의 성과를 내는지 이해하도록 돕습니다.' },
    { type: 'title', text: '왜 뽀모도로 기법인가?', level: 3 },
    { type: 'paragraph', html: '인간의 뇌는 8시간 동안 쉬지 않고 하이퍼 포커스 상태를 유지할 수 없습니다. 대신 집중 업무와 회복을 돕는 휴식을 반복할 때 최상의 효율을 냅니다. 뽀모도로 기법은 이를 「25분 몰입, 5분 휴식」이라는 간단한 의식으로 정착시켜 줍니다.' },
    { type: 'paragraph', html: '하지만 업무마다 필요한 집중의 깊이는 다릅니다. 뽀모도로 플로우는 가벼운 일을 위한 <strong>씨앗</strong>(25/5), 일상 업무를 위한 <strong>나무</strong>(50/10), 그리고 딥 워크를 위한 <strong>산</strong>(90/15) 주기를 제공합니다.' },
    { type: 'title', text: '기록의 힘: 집중 중단 데이터화', level: 3 },
    { type: 'paragraph', html: '50분 동안 앉아 있었다고 해서 몰입한 것은 아닙니다. 5번이나 한눈을 팔았다면 작업 전환 비용(Context Switching Tax)이 발생한 것입니다. 뽀모도로 플로우는 버튼 하나로 이를 기록하고 당신의 진짜 집중도를 나타내는 <strong>집중 점수</strong>를 계산해 드립니다.' },
    { type: 'paragraph', html: '기록이 쌓이면 어떤 작업, 어떤 시간대, 어떤 환경에서 본인이 최고의 몰입 상태에 도달하는지 알 수 있습니다. 그곳이 바로 당신의 가치가 만들어지는 지점입니다.' },
    { type: 'title', text: '업무에만 집중하게 하는 기능들', level: 3 },
    { type: 'list', items: [
      '젠-테크 디자인: 다크 모드, 글래스모피즘, 그리고 타이머에만 집중할 수 있는 미니멀한 레이아웃.',
      '실시간 탭 타이머: 브라우저 탭에서 남은 시간을 바로 확인할 수 있어 탭 전환을 줄여줍니다.',
      '유연한 시간 조절: 중단 없이 실시간으로 업무/휴식 시간을 조절하세요.',
      '세션 데이터 활용: 요약 내용을 마크다운으로 복사하거나 SNS용 시각화 이미지를 공유하세요.',
      '월간 히트맵: 본인의 생산성 패턴을 시각적으로 파악하세요. 어느 요일에 가장 집중이 잘 되나요?',
    ] },
    { type: 'title', text: '몰입 상태(Flow State)의 심리학', level: 3 },
    { type: 'paragraph', html: '심리학자 미하이 칙센트미하이는 <strong>몰입(Flow)</strong>을 도전과 기술이 만나 시간이 사라지는 듯한 상태로 정의했습니다. 뽀모도로 플로우는 방해 요소를 제거하고 명확한 시간 경계를 설정하며 즉각적인 피드백을 제공하여 몰입에 필요한 세 가지 조건을 충족합니다.' },
    { type: 'tip', html: '<strong>몰입을 위한 팁:</strong> 몰입 상태에 들어갔다면 타이머가 울려도 멈추지 마세요. 「다시 시작」을 눌러 흐름을 이어가세요. 집중 중단을 기록하는 이유는 외부의 소음과 본인의 열정적인 흐름 사이의 차이를 명확히 보기 위함입니다.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
