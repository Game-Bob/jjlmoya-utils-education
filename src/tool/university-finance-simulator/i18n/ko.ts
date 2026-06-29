import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'university-finance-simulator' as const;
const title = '대학 학자금 시뮬레이터';
const description =
  '대학 진학의 실제 비용을 모델링하고, 장학금 수혜 시나리오를 비교하며, 시각적인 부채 상환 일정표 및 상환 상세표를 통해 학생 대출 상환액을 예측해 보세요.';

const faqItems = [
  {
    question: '이 시뮬레이터는 총비용에 어떤 항목을 포함하나요?',
    answer:
      '연간 등록금, 월별 생활비, 재학 기간(연수), 그리고 학년별로 생활비를 충당할 예상 개월 수를 결합합니다. 대출금액을 계산하기 전에 여기에서 장학금 및 사전 본인 납부액을 차감합니다.',
  },
  {
    question: '학생 대출의 월 상환액은 어떻게 계산되나요?',
    answer:
      '이 도구는 표준 원리금균등분할상환 공식을 사용합니다. 연이율을 월이율로 변환하고 선택한 상환 기간(연수)에 걸쳐 상환액을 고르게 분배합니다.',
  },
  {
    question: '무이자 가족 대출이나 정부 보조금(지원금) 모델링에도 사용할 수 있나요?',
    answer:
      '네. 연이율을 0으로 설정하면 무이자 상환 계획을 시뮬레이션할 수 있습니다. 보조금, 예적금, 또는 가족의 재정 지원을 반영하기 위해 장학금이나 사전 납부액을 늘릴 수도 있습니다.',
  },
  {
    question: '프로필에 따라 대출 필요 금액이 크게 차이 나는 이유는 무엇인가요?',
    answer:
      '생활비는 여러 학년에 걸쳐 빠르게 누적됩니다. 통학하는 경우와 캠퍼스(기숙사)에서 생활하는 경우의 시나리오는 등록금이 같더라도 완전히 다른 수준의 부채를 형성할 수 있습니다.',
  },
  {
    question: '상환 완료일 산정에 대출 상환 유예 기간이나 소득 연계형 상환 계획이 반영되나요?',
    answer:
      '아니요. 본 버전은 상환이 정상적으로 고정된 일정에 따라 매월 균등한 금액으로 시작된다고 가정합니다. 이는 세부적인 정책의 모든 예외 상황을 반영하기보다는 기초 재정 계획을 수립하는 데 가장 적합합니다.',
  },
];

const howToItems = [
  {
    name: '학업 프로필 설정',
    text: '빠른 프로필 중 하나를 사용하거나 슬라이더를 수동으로 움직여 등록금, 생활비, 그리고 장학금 내역을 입력하세요.',
  },
  {
    name: '재정 조조건 조정',
    text: '사전에 부담할 수 있는 금액을 선택하고, 연이율과 상환 연수를 설정하여 예상되는 대출 조건을 반영하세요.',
  },
  {
    name: '재정 대시보드 확인',
    text: '요약 카드에서 총 학비, 대출 원금, 예상 월 상환액, 총이자 금액을 한눈에 확인하여 실질적인 감당 여부를 평가할 수 있습니다.',
  },
  {
    name: '부채 상환 곡선 분석',
    text: '차트를 이용해 대출 잔액, 총 상환액, 누적 이자가 해마다 어떻게 변화하는지 확인해 보세요.',
  },
  {
    name: '원리금 상환 상세표 확인',
    text: '예산 수립이나 가족 회의에 원금 대비 이자의 정밀한 구성 분석이 필요하다면 월별 상환 상세표를 펼쳐 확인하세요.',
  },
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
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: '통화',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: '연간 등록금',
    monthlyLivingCost: '월 생활비',
    studyYears: '재학 연수',
    studyMonthsPerYear: '연간 생활비 지급 개월 수',
    scholarshipPerYear: '연간 장학금',
    upfrontContribution: '사전 납부액',
    aprPercent: '연이율',
    repaymentYears: '상환 연수',
    quickProfiles: '빠른 프로필',
    commuterProfile: '통학',
    balancedProfile: '균형',
    campusProfile: '캠퍼스 생활',
    stickerCost: '총 학업 비용',
    borrowedPrincipal: '대출 원금',
    monthlyPayment: '예상 월 상환액',
    totalInterest: '총이자',
    projectionTitle: '부채 전망',
    scheduleTitle: '월별 원리금 상환 계획표',
    chartBalance: '대출 잔액',
    chartPaid: '총 상환액',
    chartInterest: '누적 이자',
    openSchedule: '전체 계획표 열기',
    closeSchedule: '전체 계획표 숨기기',
    monthColumn: '회차',
    paymentColumn: '납입금',
    principalColumn: '원금',
    interestColumn: '이자',
    balanceColumn: '잔액',
    timelineLabel: '부채 상환 완료 시점',
    affordabilityHint:
      '예상 월 상환액이 현재의 학생 예산뿐만 아니라, 졸업 후 첫해에 받게 될 예상 순소득 범위 내에 있는지 확인하세요.',
    debtFreeLabel: '완납까지 소요 기간',
    scholarshipShare: '장학금 커버 비율',
    livingShare: '생활비 비중',
    degreeCostLabel: '등록금 비중',
    blendedCost: '평균 연간 비용',
    totalPaid: '총 상환금액',
    averageYearlyCost: '연평균 비용',
    plannerLabel: '비용 플래너',
    resultsLabel: '재정 전망',
    assumptionsLabel: '대출 조건 가정',
    scheduleHint:
      '매월 납입금 내에서 원금과 이자가 어떻게 나뉘는지 상세 정보입니다.',
    noDebtNeeded: '현재 설정에서는 대출이 필요하지 않습니다',
    exactAmount: '정확한 금액',
    monthWord: '개월',
    paymentWord: '납입금',
    principalWord: '원금',
    interestWord: '이자',
    remainingWord: '잔액',
    perMonthSuffix: '/월',
    yearsSuffix: '년',
    monthsSuffix: '개월',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: '대출을 받기 전에 대학 진학의 실제 비용을 계획하세요', level: 2 },
    {
      type: 'summary',
      title: '이 대학 학비 계산기가 유용한 이유',
      items: [
        '홍보물에 표시된 등록금 액수뿐만 아니라 학위를 마치는 데 필요한 전체 비용을 추정합니다.',
        '동일한 대출 기준선 위에서 학교별, 주거 유형별, 장학금 조건별 차이를 비교할 수 있습니다.',
        '대출을 약정하기 전에 실제 상환 계획이 감당할 수 있는 수준인지 확인해 줍니다.',
      ],
    },
    {
      type: 'paragraph',
      html: '일반적으로 대학 안내서에는 등록금이라는 한 가지 숫자만 크게 나타나 있습니다. 하지만 실제 대학 생활은 훨씬 더 현실적입니다. 주거비, 식비, 교통비, 전공 서적 구매 비용, 보험료 그리고 대출금 이자도 추가로 지불해야 할 수 있습니다. 그렇기 때문에 유용한 학생 대출 시뮬레이터는 겉으로 보이는 가격만 보여줘서는 안 됩니다. 그것은 <em>"이 결정이 졸업까지 총 얼마가 드는지, 각종 보조금 수혜 후에도 갚아야 할 빚은 얼마인지, 그리고 졸업 후 취업 전선에서 어떤 상환 압박을 겪게 될지"</em>라는 더 까다로운 질문에 대답하도록 도와야 합니다.',
    },
    { type: 'title', text: '이 시뮬레이터가 돕는 재정적 의사결정', level: 3 },
    {
      type: 'list',
      items: [
        '제안받은 장학금이 부채 부담을 실질적으로 줄여주는지, 혹은 마케팅 광고에 불과한지 여부.',
        '캠퍼스 기숙사 생활, 통학, 혹은 하숙(자취) 중 어느 편이 장기적으로 건강한 재정적 절충안이 될지 여부.',
        '총이자 비용을 따져보았을 때, 월 상환액을 낮추기 위해 상환 기간을 길게 가져갈 만한 가치가 있는지 여부.',
        '등록금만이 아니라 생활비까지 모두 산입한 뒤에도 해당 진로가 여전히 현실성이 있는지 여부.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '진학을 최종 결정하기 전에 이를 활용해 보세요',
      html: '<ul><li>동일한 생활비 조건 하에서 두세 개 대학의 제안서를 대입해 상호 비교해 보세요.</li><li>가장 낙관적인 장학금 시나리오와 현실적인 시나리오를 각각 테스트하세요.</li><li>부채 규모가 늘거나 상환 기간이 길어지더라도 월 상환액이 여전히 납득할 만한 수준인지 점검하십시오.</li></ul>',
    },
    { type: 'title', text: '스스로를 속이지 않고 결과를 있는 그대로 읽는 법', level: 3 },
    {
      type: 'table',
      headers: ['항목', '의미', '중요한 이유'],
      rows: [
        ['총 학업 비용', '졸업까지 등록금과 생활비를 합산한 총예산', '안내서에 적힌 단순화된 숫자가 아니라 실제 마련해야 하는 전체 예산입니다'],
        ['대출 원금', '장학금과 자부담금을 제외하고 보완해야 할 잔여금', '상환 시기까지 끝까지 따라붙게 되는 빚이므로 가장 예의주시해야 합니다'],
        ['예상 월 상환액', '금리와 상환 연수에 따라 매월 고정적으로 내야 하는 액수', '졸업 후 느낄 재정적 부담 수준을 즉각적으로 보여주는 가장 정직한 척도입니다'],
        ['총이자', '빌린 원금 외에 추가로 금융기관에 지불하게 되는 비용', '월 납입금이 낮아지는 것이 실은 대출 비용을 훨씬 더 키우고 있지는 않은지 파악하도록 돕습니다'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: '우선적으로 스트레스 테스트를 거쳐야 할 입력 변수' },
        { value: '2', label: '최소한 서로 대조해 봐야 할 시나리오' },
        { value: '1', label: '현실성 점검을 위해 확인할 월 상환 금액' },
        { value: '0', label: '등록금 액수 하나에만 절대 의존하지 말아야 할 원칙' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '상환 기간 단축',
          description: '졸업 후 현금 흐름이 매월 비교적 높은 액수의 상환금을 흡수할 수 있을 만큼 탄탄할 것으로 기대될 때 유리합니다.',
          highlight: true,
          points: [
            '매월 높은 상환 금액',
            '상대적으로 적은 총이자 비용',
            '빠르게 빚 청산 가능',
          ],
        },
        {
          title: '상환 기간 연장',
          description: '당장의 현금 여력이 부족해 초기 완충 장치가 필요할 때 유용하지만, 장기적 누적 비용에 대한 철저한 인지가 전제되어야 합니다.',
          points: [
            '매월 낮은 상환 금액',
            '상대적으로 높은 총이자 비용',
            '당장의 유연성은 높으나 장기 비용 증가',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>유용한 자가 스트레스 테스트:</strong> 장학금 수혜액을 낮추고, 방세를 소폭 올린 뒤 대출 상환 기간을 몇 년 늘려 시뮬레이션해 보세요. 가장 이상적인 조건에서만 굴러가는 계획이라면 아직 튼튼한 계획이라고 볼 수 없습니다.',
    },
    { type: 'title', text: '학교 두 곳을 비교하는 가장 현실적인 접근법', level: 3 },
    {
      type: 'list',
      items: [
        '다른 변수들과 꼬이지 않도록 먼저 양쪽 학교에 동일한 생활비 기준을 입력하십시오.',
        '그런 다음 실제로 편차가 발생하는 항목(등록금, 장학금 금액, 주거 유형의 차이)만 개별적으로 갱신합니다.',
        '대학의 인지도나 네임밸류를 보기 전에 대출 원금 액수와 월 상환 비용에 냉정하게 초점을 맞추세요.',
        '한쪽 대학이 단지 비현실적으로 저렴한 주거비를 가정해서 더 우월해 보이는 것이라면, 경고 신호로 받아들이십시오.',
      ],
    },
    {
      type: 'card',
      title: '학부모와 학생들이 자주 놓치는 지점',
      html: '등록금이 저렴해 보이는 학교라 할지라도 그 도시의 전반적인 물가(생활비)가 구조적으로 높거나 학년이 올라갈 때 장학금 유지가 어렵다면 오히려 더 큰 빚을 지고 대학을 졸업하게 될 수 있습니다.',
    },
    { type: 'title', text: '대학 학비 예측치의 명확한 한계', level: 3 },
    {
      type: 'proscons',
      title: '장점과 한계',
      items: [
        {
          pro: '여러 대학의 옵션을 비교하기 위한 직관적인 기준치 제공',
          con: '상환 유예 기간, 거치 기간, 소득 연계형 상환 방식까지 세밀히 모델링하지는 않음',
        },
        {
          pro: '등록금 뒤에 교묘히 숨겨지기 쉬운 생활비 항목을 수면 위로 끌어올림',
          con: '고정금리 및 고정 상환액 체계를 기초로 시뮬레이션함',
        },
        {
          pro: '최종 채무 총량만 던져주는 대신 해마다 부채가 줄어드는 궤적을 시각적으로 보여줌',
          con: '소득세, 인플레이션, 미래의 급여 연봉 인상분 등은 고려되지 않음',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '연이율',
          definition: '매년 부채에 부과되는 연간 금리로, 상환 계산을 위해 월이율로 분할 변환되어 적용됩니다.',
        },
        {
          term: '원금',
          definition: '장학금과 사전에 납부한 자기자본을 뺀 뒤 실제로 은행 등에서 빌리게 되는 대출금 본체입니다.',
        },
        {
          term: '원리금 상환',
          definition: '매월 규칙적인 지불(먼저 누적된 이자를 끄고, 잔여액으로 대출 몸체를 깎아 나가는 행위)을 통해 대출을 점진적으로 해소해 나가는 과정입니다.',
        },
      ],
    },
    {
      type: 'message',
      title: '권장되는 다음 단계',
      html: '본 시뮬레이터를 통해 최종 후보군을 좁힌 다음, 최종 결정을 내리기 전에 실제 재정 지원 통지서, 현지 방값 실태, 그리고 해당 학과 졸업생들의 예상 취업 초봉 소득에 비추어 최종 우승 대학의 타당성을 검증하십시오.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
