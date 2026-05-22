import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'transcript-gpa-parser' as const;
const title = '성적증명서 GPA 추출 및 계산기';
const description = '대학 성적증명서 텍스트를 그대로 복사하여 붙여넣는 것만으로 누적 GPA와 가중 평균 성적을 즉시 계산할 수 있습니다. 완전히 오프라인으로 작동합니다.';

const faqItems = [
  {
    question: '자동 분석은 어떻게 작동하나요?',
    answer: '붙여넣은 텍스트를 한 줄씩 스캔하여 공백, 탭 또는 문장 부호를 기준으로 열을 분할합니다. 그런 다음 각 값을 분석하여 어느 열에 과목명, 성적, 학점이 포함되어 있는지 자동으로 식별합니다.'
  },
  {
    question: '내 성적 데이터는 안전한가요?',
    answer: '네, 완전히 안전합니다. 텍스트 분석 및 GPA 계산은 사용하시는 기기의 브라우저 내부에서만 실행됩니다. 어떠한 데이터도 서버로 전송되지 않으므로 성적증명서 정보가 100% 안전하게 보호됩니다.'
  },
  {
    question: '열 매핑이 잘못된 경우에는 어떻게 하나요?',
    answer: '직접 손쉽게 조정할 수 있습니다. 감지된 표의 각 열 위에는 드롭다운 헤더가 있어, 해당 열이 과목명, 성적, 학점 중 무엇을 나타내는지 수동으로 선택하거나 무시하도록 설정할 수 있습니다.'
  },
  {
    question: '등급제(A, B, C...) 성적이나 다양한 만점 기준을 지원하나요?',
    answer: '네, 표준 등급제 성적(A, B, C, D, F)뿐만 아니라 숫자 등급제(0-10, 0-20, 0-100)도 지원합니다. 해당 대학의 성적 시스템에 맞게 최대 만점 기준을 설정하실 수 있습니다.'
  }
];

const howToItems = [
  {
    name: '성적증명서 복사하기',
    text: '대학 포털 사이트나 성적표 페이지로 이동하여 텍스트를 선택한 후 복사합니다.'
  },
  {
    name: '텍스트 붙여넣기',
    text: '복사한 텍스트를 이 도구의 입력란에 붙여넣습니다.'
  },
  {
    name: '확인 및 매핑',
    text: '자동으로 생성된 표를 확인합니다. 필요한 경우 헤더를 사용하여 각 열의 역할을 조정합니다.'
  },
  {
    name: 'GPA 확인하기',
    text: '하단에 즉시 계산되어 나타나는 가중 평균 GPA와 총 취득 학점을 확인합니다.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: '여기에 성적증명서 텍스트를 붙여넣으세요',
    pasteAreaPlaceholder: 'Moodle, Canvas 또는 대학 성적 조회 페이지에서 복사한 텍스트를 붙여넣으세요...',
    parsedTitle: '분석된 성적 데이터',
    columnSelect: '열 매핑',
    subjectName: '과목명',
    grade: '성적',
    credits: '학점',
    ignore: '무시',
    gpaResult: '누적 GPA',
    totalCredits: '총 취득 학점',
    emptyState: '성적 데이터를 위에 붙여넣으면 여기에 미리보기와 행 편집 화면이 나타납니다.',
    scaleLabel: '성적 만점 기준',
    customScale: '최대 만점 기준',
    exampleSubject: '미적분학 I',
    newSubjectPlaceholder: '새 과목',
    clearBtn: '텍스트 지우기',
    errorFormat: '열을 명확하게 감지할 수 없습니다. 표나 목록 형식의 텍스트를 복사하여 붙여넣어 보세요.'
  },
  seo: [
    { type: 'title', text: '성적증명서에서 GPA를 간편하게 추출하고 계산하는 방법', level: 2 },
    { type: 'paragraph', html: '학점 평균을 계산하기 위해 수십 개의 과목을 일일이 수동으로 입력할 필요는 없습니다. 이 도구는 복사해 붙여넣은 텍스트에서 데이터를 자동으로 추출하여 GPA를 계산해 줍니다.' },
    { type: 'title', text: '텍스트 직접 추출 기능을 사용해야 하는 이유', level: 3 },
    { type: 'paragraph', html: '대학 포털 사이트는 종종 복잡한 HTML 표 형태로 성적표를 제공합니다. 성적 텍스트를 이 도구에 그대로 복사해서 붙여넣으면, 휴리스틱 분석 엔진이 과목명, 성적, 학점을 오타 없이 즉시 추출해 냅니다.' },
    { type: 'title', text: '안전하고 개인정보가 보장되며 신속한 서비스', level: 3 },
    { type: 'paragraph', html: '성적 분석 엔진이 자바스크립트를 통해 로컬(브라우저)에서 작동하므로, 귀하의 성적 정보는 결코 브라우저 외부로 나가지 않습니다. 수백 줄에 달하는 성적 데이터도 단 몇 밀리초 만에 신속하게 처리할 수 있습니다.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
