import type { ToolLocaleContent } from '../../../types';

const slug = 'citation-generator' as const;
const title = '인용 생성기' as const;
const description = 'APA, MLA, 밴쿠버 형식의 자동 참조 문헌을 영구 저장 기능과 함께 생성하세요.' as const;
const faqTitle = '자주 묻는 질문' as const;
const bibliographyTitle = '참고 문헌' as const;

const ui = {
    format: '형식',
    book: '도서',
    website: '웹사이트',
    article: '논문/기사',
    publicationYear: '발행 연도',
    authors: '저자 (성, 이름 이니셜)',
    title: '제목',
    publisher: '출판사',
    locationUrl: '위치 / URL',
    preview: '미리보기',
    saveToList: '내 목록에 저장',
    mySavedCitations: '저장된 인용 문헌',
    noSavedCitations: '저장된 인용 문헌이 없습니다.',
    clickToCopy: '인용 문헌을 클릭하면 직접 복사할 수 있습니다',
    apa: 'APA (제7판)',
    mla: 'MLA (제9판)',
    vancouver: '밴쿠버',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: '인용 생성기: APA, MLA, 밴쿠버 형식 마스터하기', level: 2 },
    { type: 'paragraph', html: '출처를 올바르게 인용하는 것은 단순한 학문적 윤리 문제가 아닙니다. 자신의 작업에 신뢰성을 부여하고 표절을 피하기 위한 기초입니다. 당사의 도구를 사용하면 세계에서 가장 널리 사용되는 형식으로 자동 참조 문헌을 생성할 수 있습니다.' },
    { type: 'title', text: '가장 중요한 인용 스타일', level: 3 },
    { type: 'paragraph', html: '학문 분야에 따라 특정 형식을 사용해야 합니다. 이것은 교수님의 변덕이 아닙니다. 각 스타일은 각 학문 분야에 가장 관련성이 높은 정보를 우선시하도록 설계되었습니다.' },
    { type: 'title', text: 'APA (사회 과학)', level: 4 },
    { type: 'paragraph', html: '<strong>미국 심리학회</strong>에서 개발한 스타일로, 연구에 역사적 맥락을 제공하기 위해 발행일에 중점을 둡니다. 심리학, 교육학, 사회학의 표준입니다.' },
    { type: 'title', text: '밴쿠버 (의학)', level: 4 },
    { type: 'paragraph', html: '출처가 본문에 나타나는 순서대로 인용되는 번호 체계입니다. 생명 의학 및 보건 과학 분야의 보편적인 형식이며, 여러 참조 문헌이 포함된 텍스트의 가독성을 높여줍니다.' },
    { type: 'title', text: '도서 인용 단계별 방법은?', level: 3 },
    { type: 'paragraph', html: '당사의 도구가 이를 자동화해주지만, 기본 요소를 알고 있으면 물리적 또는 디지털 출처에서 수집해야 할 정보를 파악하는 데 도움이 됩니다.' },
    { type: 'list', items: ['<strong>저자:</strong> 성 뒤에 이름의 이니셜을 붙입니다.', '<strong>연도:</strong> 스타일에 따라 괄호 안이나 마지막에 발행 연도를 적습니다.', '<strong>제목:</strong> 도서 및 전체 저작물의 경우 이탤릭체로 표시해야 합니다.', '<strong>출판사:</strong> 저작물 출판을 담당하는 회사.', '<strong>URL:</strong> 디지털 출처의 경우 영구적인 위치를 나타내는 직접 링크 또는 DOI.'] },
    { type: 'title', text: '형식 간의 시각적 차이', level: 3 },
    { type: 'table', headers: ['요소', 'APA (제7판)', 'MLA (제9판)', '밴쿠버'], rows: [['저자', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['날짜', '(2024)', '2024.', '2024.'], ['제목', '이탤릭체', '따옴표 안', '일반']] },
    { type: 'tip', html: '항상 소속 기관의 특정 가이드를 확인하세요. APA가 세계 표준이지만, 많은 대학에서 약간의 지역적 변형이 있거나 특정 판본의 사용을 요구하기도 합니다.' },
    { type: 'title', text: '학문적 표절 피하기', level: 3 },
    { type: 'paragraph', html: '표절이 항상 의도적인 것은 아닙니다. 노트를 필기할 때 부주의하거나 자신의 생각이 아닌 아이디어를 참조하는 방법을 몰라서 발생하는 경우가 많습니다. 이러한 인용 생성기를 사용하면 학문적 성실성을 유지하면서 각 저자에게 마땅한 인정을 제공할 수 있습니다.' },
    { type: 'paragraph', html: '아이디어를 자신의 말로 바꾸어 표현(의역)하더라도 본문에 해당 인용을 포함하고 최종 참고 문헌 목록에 참조를 기재해야 함을 잊지 마세요.' },
];

const faq = [
    {
        question: '이 생성기는 어떤 형식을 지원하나요?',
        answer: '현재 사회 과학, 인문학, 보건 분야에서 가장 일반적인 형식인 APA (제7판), MLA (제9판), 밴쿠버 형식을 지원합니다.',
    },
    {
        question: '인용 문헌을 저장할 수 있나요?',
        answer: '네, 생성기는 나중에 다시 확인할 수 있도록 브라우저의 로컬 저장소에 내역을 자동으로 저장합니다.',
    },
    {
        question: 'APA와 밴쿠버의 차이점은 무엇인가요?',
        answer: 'APA는 저자-연도 시스템(Perez, 2024)을 사용하는 반면, 밴쿠버는 본문 출현 순서에 따른 번호 체계를 사용합니다.',
    },
    {
        question: '인용 생성기는 무료인가요?',
        answer: '완전히 무료입니다. 학생과 전문가의 학술 저작물 작성을 돕기 위해 설계된 무료 도구입니다.',
    },
] as const;

const howTo = [
    {
        name: '출처 유형 선택',
        text: '출처가 도서, 웹사이트, 또는 전문 학술지 기사인지 선택하세요.',
    },
    {
        name: '데이터 완성',
        text: '저자, 제목, 연도, 출판사 또는 URL을 입력하세요. 더 많은 데이터를 입력할수록 인용이 정확해집니다.',
    },
    {
        name: '복사 또는 저장',
        text: '클릭 한 번으로 인용 문헌을 직접 복사하거나 "내 목록에 저장"을 눌러 영구 내역에 추가하세요.',
    },
] as const;

const bibliography = [
    {
        name: 'APA 스타일 매뉴얼 제7판',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA 스타일 가이드 (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: '밴쿠버 가이드라인 - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
