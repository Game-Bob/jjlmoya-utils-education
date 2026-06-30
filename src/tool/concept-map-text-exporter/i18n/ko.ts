import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'concept-map-text-exporter' as const;
const title = '개념도 생성기';
const description = '들여쓰기된 노트를 드래그可能な 노드, 접을 수 있는 분기, 줌 제어 및 SVG/PNG 내보내기 기능이 포함된 대화형 개념도로 변환합니다.';

const faqItems = [
  { question: '개념도 생성기에 어떤 종류의 텍스트를 붙여넣을 수 있나요?', answer: '한 줄에 하나의 아이디어를 작성하고 하위 항목에는 들여쓰기를 적용한 단순한 아웃라인 형식을 사용하세요. 글머리 기호, 번호 매기기 목록, 탭 및 공백이 모두 허용되므로 문서, 강의 요약 또는 학습 앱에서 복사한 노트를 대개 수동 서식 변경 없이 바로 변환할 수 있습니다.' },
  { question: '가장 깔끔한 개념도를 얻으려면 들여쓰기를 어떻게 해야 하나요?', answer: '첫 번째 줄에 중심 주제를 입력하고, 그 아래에 하위 아이디어를 들여쓰기하여 나열하세요. 같은 수준의 아이디어는 동일한 깊이로 들여쓰기를 유지해야 합니다. 노드가 잘못된 상위 노드 아래에 표시된다면 대개 들여쓰기 수준에 문제가 있는 것입니다.' },
  { question: '개념도가 생성된 후에 노드를 이동할 수 있나요?', answer: '네. 캔버스 위에 있는 임의의 노드를 드래그하여 간격을 조절하거나 복잡한 분기를 나누고, 특정 관계를 강조할 수 있습니다. 또한 내보내기 전에 캔버스를 이동하고, 확대/축소하며, 분기를 접을 수도 있습니다.' },
  { question: 'SVG와 PNG 내보내기의 차이점은 무엇인가요?', answer: 'SVG는 편집 가능한 벡터 형식으로, 벡터 그래픽 에디터, 발표 슬라이드, 문서 등에서 크기를 키워도 선명하게 유지됩니다. PNG는 고정된 이미지 파일로 학습 플랫폼, 메신저, 워크시트, 빠른 복습용 카드 등에 간편하게 업로드할 수 있습니다.' },
  { question: '이 도구는 관련 링크를 자동으로 유추하나요?', answer: '아니요. 들여쓰기를 기반으로 계층 구조를 빌드합니다. 이를 통해 결과의 예측 가능성을 유지하지만 원인, 대조 또는 피드백 루프와 같은 가로 방향의 링크는 SVG 내보내기 이후 수동으로 추가해야 합니다.' },
];

const howToItems = [
  { name: '아웃라인 붙여넣기 또는 작성하기', text: '한 줄에 하나의 개념을 입력하고 상위 주제 아래에 하위 아이디어를 들여쓰기하세요.' },
  { name: '생성된 구조 검토하기', text: '대화형 캔버스를 사용하여 계층 구조가 해당 주제를 학습하는 방식과 일치하는지 확인합니다.' },
  { name: '캔버스 정렬하기', text: '노드를 드래그하고, 붐비는 분기를 접고, 시각적 그룹이 명확해질 때까지 줌을 조절합니다.' },
  { name: '학습 자료용으로 내보내기', text: '추가 편집용 SVG 또는 빠른 공유, 워크시트, 슬라이드 발표용 PNG를 다운로드합니다.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: '들여쓰기된 아웃라인',
    sampleButton: '샘플 로드',
    clearButton: '지우기',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: '확대',
    zoomOut: '축소',
    resetView: '보기 초기화',
    exportSvg: 'SVG 내보내기',
    exportPng: 'PNG 내보내기',
    collapseBranch: '분기 접기',
    expandBranch: '분기 펼치기',
    emptyStateTitle: '개념이 아직 없습니다',
    emptyStateText: '한 줄에 하나의 아이디어를 작성하고 하위 토픽을 들여쓰기하여 개념도를 만드세요.',
    nodeCount: '개념',
    depthCount: '단계',
    branchCount: '연결선',
    levelPrefix: 'L',
    untitledNodeLabel: '제목 없음',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'concept-map.svg',
    pngFilename: 'concept-map.png',
    sampleOutline: `연구 프로젝트
  질문
    어떤 문제가 조사되고 있습니까?
    누가 영향을 받습니까?
  증거
    1차 자료
    학술 논문
    데이터 세트
  연구 방법
    표본 추출 계획
    분석 단계
  결론
    주요 발견
    한계점
    다음 연구 질문`,
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌 및 학술 리소스',
  },
  seo: [
    { type: 'title', text: '들여쓰기 노트를 개념도로 변환하기', level: 2 },
    { type: 'paragraph', html: '개념도는 한 주제가 더 이상 단순한 사실의 나열에 그치지 않고 깊은 이해가 필요할 때 매우 유용합니다. 어떤 아이디어가 핵심인지, 어떤 세부 사항이 이를 뒷받침하는지 보여주며, 학습자가 카테고리, 예시, 원인 및 결과를 혼동하고 있는 부분을 파악하는 데 도움을 줍니다. 이 생성기는 학생들이 이미 가지고 있는 노트에 맞춤 설계되었습니다. 들여쓰기된 아웃라인을 붙여넣고, 계층을 조정한 다음 대화형 캔버스를 통해 보기 좋게 정렬하여 바로 공부할 수 있는 시각적 맵을 완성하세요.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: '개념당 한 줄' }, { value: '2+', label: '들여쓰기 수준 지원' }, { value: 'SVG', label: '편집 가능한 내보내기' }, { value: 'PNG', label: '공유 가능한 내보내기' }] },
    { type: 'diagnostic', variant: 'info', title: '정확한 개념도 생성을 위한 최적의 입력 형식', html: '<ul><li>가장 상단에 중심 주제를 적으세요.</li><li>설명, 뒷받침, 정의 또는 예시하고자 하는 아이디어 아래에 하위 항목을 들여쓰기하여 배치합니다.</li><li>동일한 계층의 아이디어는 들여쓰기 깊이를 동일하게 유지합니다.</li><li>원하는 경우 글머리 기호나 번호 목록을 사용해도 되며, 일반적인 기호는 자동으로 제거됩니다.</li><li>노드 레이블은 짧고 설명적으로 유지하세요. 상세한 설명은 노드 안이 아닌 본인의 노트에 남겨두는 것이 좋습니다.</li></ul>' },
    { type: 'title', text: '어지러운 개념도 진단 및 해결 방법', level: 3 },
    { type: 'table', headers: ['현상', '예상 원인', '해결 방법'], rows: [['세부 사항이 잘못된 주제 아래에 표시됨', '들여쓰기 수준이 너무 얕거나 깊습니다.', '해당 줄을 좌우로 이동하여 올바른 상위 아이디어 아래에 배치하세요.'], ['개념도가 옆으로 너무 넓음', '동일한 수준에 너무 많은 아이디어가 배치되었습니다.', '관련 항목들을 보다 명확한 범주 노드 아래로 그룹화합니다.'], ['학습하기에 한눈에 들어오지 않음', '노드 레이블이 완전한 문장으로 작성되었습니다.', '키워드, 핵심 명제 또는 질문 프롬프트 형태로 레이블을 축소합니다.'], ['중요한 관계가 빠져 있음', '아웃라인은 계층 구조이지만 주제는 교차 링크를 가지고 있습니다.', 'SVG 파일로 내보낸 후 편집기에서 가로 연결선을 수동으로 추가합니다.']] },
    { type: 'comparative', columns: 3, items: [{ title: '개념도', description: '아이디어 간의 관계, 선행 지식, 원인, 증거 및 범주를 보여주는 데 가장 적합합니다.', highlight: true, points: ['관계 중심 구성', '복습에 매우 유용', '주제를 말로 설명할 때 효과적'] }, { title: '아웃라인', description: '순서가 지정된 노트, 에세이 구조, 강의 흐름, 절차 및 시간 순서 자료에 가장 적합합니다.', points: ['빠른 작성 가능', '훑어보기 편함', '긴 세부 정보 처리에 적합'] }, { title: '마인드맵', description: '주제의 구조가 완전히 정리되기 전에 폭넓은 연상을 브레인스토밍하는 데 가장 적합합니다.', points: ['창의적 탐색', '자유로운 그룹화', '엄격하지 않은 계층 구조'] }] },
    { type: 'tip', html: '<strong>분기 접기 기능을 액티브 리콜 도구로 활용하세요.</strong> 분기를 접어 세부 정보를 가린 뒤 기억해 내어 말해보고, 다시 펼쳐서 놓친 부분을 확인합니다. 이를 통해 단순히 수동적인 도표를 보는 것에서 한 걸음 나아가 적극적인 복습 도구로 활용할 수 있습니다.' },
    { type: 'title', text: '시각적 매핑이 유용한 학습 워크플로', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: '시험 준비', description: '출제 가능한 문제를 중심으로 맵을 만드세요. 상위 노드는 원인, 증거, 한계, 정의 또는 예시와 같은 프롬프트가 되어야 합니다.', highlight: true, points: ['자가 테스트용으로 접힌 분기 활용', '레이블을 짧게 유지', '빠른 요약용 시트 제작을 위해 PNG 내보내기'] }, { title: '연구 계획 수립', description: '개념도를 통해 연구 질문을 증거, 방법, 출처, 한계 및 결론과 연결할 수 있습니다.', points: ['루트에 핵심 질문 배치', '증거와 해석을 구분', '편집용 SVG 파일로 내보내기'] }] },
    { type: 'message', title: '중요한 한계점', html: '들여쓰기는 계층 구조(트리)를 형성할 뿐, 복잡한 의미망 전체를 구성하지는 않습니다. 서로 다른 분기에 속한 두 아이디어가 연결성을 가지더라도 도구는 자동으로 해당 교차 링크를 그리지 않습니다. 생성된 개념도를 깔끔한 첫 번째 초안으로 사용하고, 주제에 따라 필요한 가로 연결선은 내보내기 이후에 수동으로 추가하세요.' },
    { type: 'title', text: '슬라이드, 워크시트 및 에디터용 개념도 내보내기', level: 3 },
    { type: 'paragraph', html: '벡터 에디터, 프레젠테이션 프로그램 또는 출판 과정에서 정교하게 다듬을 수 있는 편집 가능한 다이어그램이 필요할 때는 SVG 형식을 선택하세요. 학습 관리 시스템(LMS), 워크시트, 메신저 공유 또는 학습용 덱에 첨부할 안정적인 이미지가 필요할 때는 PNG 형식을 선택하십시오. 내보내기 전에 복잡하게 얽힌 노드를 정리하고, 불필요한 세부 사항은 접고, 개념도가 사용될 크기에서도 관계가 명확히 보이도록 줌을 조절하세요.' },
    { type: 'summary', title: '실용적인 워크플로', items: ['노트, AI 초안 또는 수업 유인물에서 대략적인 아웃라인을 복사해 붙여넣습니다.', '각 하위 항목이 올바른 상위 항목 아래에 위치하도록 들여쓰기를 수정합니다.', '캔버스와 내보낸 이미지에서 노드가 잘 보이도록 레이블을 짧게 정리합니다.', '밀집된 분기는 드래그하여 거리를 두고, 최종본에 불필요한 세부 사항은 접어둡니다.', '추가 편집용 SVG 또는 즉시 공유용 PNG 파일을 다운로드합니다.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
