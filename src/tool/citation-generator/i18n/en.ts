import type { ToolLocaleContent } from '../../../types';

const slug = 'citation-generator' as const;
const title = 'Citation Generator' as const;
const description = 'Create automatic references in APA, MLA, and Vancouver formats with persistent storage.' as const;
const faqTitle = 'Frequently Asked Questions' as const;
const bibliographyTitle = 'Bibliography' as const;

const ui = {
    format: 'Format',
    book: 'Book',
    website: 'Website',
    article: 'Article',
    publicationYear: 'Publication Year',
    authors: 'Authors (Last Name, Initials)',
    title: 'Title',
    publisher: 'Publisher',
    locationUrl: 'Location / URL',
    preview: 'Preview',
    saveToList: 'Save to my list',
    mySavedCitations: 'My Saved Citations',
    noSavedCitations: 'You have no saved citations.',
    clickToCopy: 'Click on the citation to copy it directly',
    apa: 'APA (7th ed.)',
    mla: 'MLA (9th ed.)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Citation Generator: Master APA, MLA, and Vancouver', level: 2 },
    { type: 'paragraph', html: 'Citing your sources correctly is not just an academic ethics issue; it is the foundation for giving credibility to your work and avoiding plagiarism. Our tool allows you to generate automatic references in the most widely used formats in the world.' },
    { type: 'title', text: 'The Most Important Citation Styles', level: 3 },
    { type: 'paragraph', html: 'Depending on your field of study, you will be required to use a specific format. It is not a whim of professors; each style is designed to prioritize the most relevant information for each discipline.' },
    { type: 'title', text: 'APA (social sciences)', level: 4 },
    { type: 'paragraph', html: 'Created by the <strong>American Psychological Association</strong>, it focuses on the publication date to provide historical context to research. It is the standard in Psychology, Education, and Sociology.' },
    { type: 'title', text: 'Vancouver (medicine)', level: 4 },
    { type: 'paragraph', html: 'It is a numerical system where sources are cited in order of appearance. It is the universal format in biomedicine and health sciences, facilitating reading texts with multiple references.' },
    { type: 'title', text: 'How to cite a book step by step?', level: 3 },
    { type: 'paragraph', html: 'Although our tool automates this, knowing the basic elements will help you identify what information you need to collect from your physical or digital sources.' },
    { type: 'list', items: ['<strong>Authors:</strong> Last name followed by the initial of the first name.', '<strong>Year:</strong> Year of publication in parentheses or at the end depending on the style.', '<strong>Title:</strong> Should appear in italics for books and complete works.', '<strong>Publisher:</strong> The company responsible for publishing the work.', '<strong>URL:</strong> For digital sources, the direct link or DOI for permanent location.'] },
    { type: 'title', text: 'Visual Differences Between Formats', level: 3 },
    { type: 'table', headers: ['Element', 'APA (7th)', 'MLA (9th)', 'Vancouver'], rows: [['Author', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Date', '(2024)', '2024.', '2024.'], ['Title', 'In italics', 'In quotes', 'Normal']] },
    { type: 'tip', html: 'Always consult your institution\'s specific guide. Although APA is a global standard, many universities have small local variations or require the use of a specific edition of the standards.' },
    { type: 'title', text: 'Avoiding Academic Plagiarism', level: 3 },
    { type: 'paragraph', html: 'Plagiarism is not always intentional. It often occurs due to carelessness in note-taking or not knowing how to reference an idea that is not your own. Using a citation generator like this ensures that every author receives the credit they deserve, while protecting your academic integrity.' },
    { type: 'paragraph', html: 'Remember that even if you paraphrase an idea in your own words, you must include the corresponding citation in the text and its reference in the final bibliography.' },
];

const faq = [
    {
        question: 'What formats does the generator support?',
        answer: 'Currently it supports APA (7th edition), MLA (9th edition), and Vancouver, which are the most common formats in social sciences, humanities, and health.',
    },
    {
        question: 'Can I save my citations?',
        answer: 'Yes, the generator automatically saves your history in your browser\'s local storage so you can consult it later.',
    },
    {
        question: 'What is the difference between APA and Vancouver?',
        answer: 'APA uses the author-date system (Perez, 2024), while Vancouver uses a numerical system in order of appearance in the text.',
    },
    {
        question: 'Is the citation generator free?',
        answer: 'Completely. It is a free tool designed to help students and professionals in writing their academic work.',
    },
] as const;

const howTo = [
    {
        name: 'Choose the source type',
        text: 'Select whether your source is a book, website, or professional journal article.',
    },
    {
        name: 'Complete the data',
        text: 'Enter the author, title, year, and publisher or URL. The more data you enter, the more accurate the citation.',
    },
    {
        name: 'Copy or save',
        text: 'Copy the citation directly with one click or press "Save to my list" to add it to your persistent history.',
    },
] as const;

const bibliography = [
    {
        name: 'APA Style Manual 7th Edition',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA Style Guide (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Vancouver Guidelines - ICJME',
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
