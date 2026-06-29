import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'renderovanie-formuly-latex' as const;
const title = 'Рендерер формул LaTeX';
const description = 'Мгновенно визуализируйте математические выражения LaTeX в вашем браузере. Введите любую формулу и скопируйте результат в виде изображения PNG, блока кода Markdown или исходного кода LaTeX без использования сервера.';

const faqItems = [
  { question: 'Что такое LaTeX и зачем его используют студенты?', answer: 'LaTeX - это язык верстки, широко используемый в математике, физике, инженерии и экономике для создания профессиональных формул. В отличие от Word или Google Docs, LaTeX позволяет писать сложные уравнения с точным контролем форматирования.' },
  { question: 'Нужно ли мне что-то устанавливать для использования этого рендерера?', answer: 'Нет. Этот инструмент работает полностью в браузере с использованием KaTeX, быстрой библиотеки JavaScript. Никакой сервер, регистрация или установка не требуются.' },
  { question: 'В чем разница между блочным и строчным режимами?', answer: 'Блочный режим (Display mode) отображает формулу на отдельной центрированной строке. Строчный режим (Inline mode) встраивает формулу в поток текста с уменьшенным размером.' },
  { question: 'Почему в моей формуле отображается синтаксическая ошибка?', answer: 'Синтаксические ошибки обычно возникают из-за несбалансированных фигурных скобок, опечаток в командах или неподдерживаемых операторов.' },
  { question: 'Могу ли я использовать этот инструмент для вставки формул в Word или Notion?', answer: 'Да. Используйте "Скачать PNG" для сохранения изображения высокого разрешения или "Копировать Markdown" для получения блока кода.' }
];

const howToItems = [
  { name: 'Введите выражение LaTeX', text: 'Введите любое допустимое математическое выражение LaTeX в редактор слева. Формула рендерится в реальном времени.' },
  { name: 'Выберите режим отображения', text: 'Выберите блочный режим для отдельного уравнения или строчный для встраивания в текст.' },
  { name: 'Настройте размер шрифта', text: 'Используйте ползунок размера шрифта для масштабирования предварительного просмотра.' },
  { name: 'Экспортируйте в удобном формате', text: 'Нажмите "Скачать PNG" для сохранения изображения, "Копировать Markdown" для кода или "Копировать LaTeX" для исходного текста.' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Рендерер формул LaTeX',
    inputLabel: 'Выражение LaTeX',
    inputPlaceholder: 'например, \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Блок',
    inlineModeLabel: 'Внутри строки',
    fontSizeLabel: 'Размер шрифта',
    downloadPngButton: 'Скачать PNG',
    copyMarkdownButton: 'Копировать Markdown',
    copyLatexButton: 'Копировать LaTeX',
    resetButton: 'Сбросить',
    previewTitle: 'Предварительный просмотр',
    copiedToast: 'Скопировано в буфер обмена',
    errorLabel: 'Синтаксическая ошибка',
    emptyPreviewHint: 'Начните вводить LaTeX выше, чтобы увидеть отрендеренную формулу здесь.',
    faqTitle: 'Часто задаваемые вопросы',
    bibliographyTitle: 'Источники и ресурсы'
  },
  seo: [
    { type: 'title', text: 'Как писать и рендерить математические формулы в вашем браузере', level: 2 },
    { type: 'paragraph', html: 'LaTeX является стандартом для научных и математических публикаций, используемым во всем мире. Этот инструмент рендерит формулы мгновенно с помощью KaTeX без установки.' },
    { type: 'title', text: 'Что такое KaTeX и почему это лучший выбор для браузера?', level: 3 },
    { type: 'paragraph', html: 'KaTeX - это библиотека JavaScript от Khan Academy, которая быстро и точно отображает LaTeX в браузере. Она работает на стороне клиента, обеспечивая мгновенный результат.' },
    { type: 'paragraph', html: 'KaTeX создает чистый и доступный HTML и SVG код, который отлично масштабируется. Результат неотличим от профессиональной верстки.' },
    { type: 'title', text: 'Популярные сценарии использования для студентов и исследователей', level: 3 },
    { type: 'list', items: [
      'Проверка синтаксиса LaTeX перед отправкой работ.',
      'Скачивание формул в PNG для вставки в Word, Google Docs или Notion.',
      'Конвертация выражений в блоки кода Markdown для GitHub или Jupyter.',
      'Предварительный просмотр формул перед добавлением в Overleaf.'
    ] },
    { type: 'title', text: 'Справочник основных математических команд LaTeX', level: 3 },
    { type: 'paragraph', html: 'Основные команды включают: \\frac{a}{b} для дробей, \\sqrt{x} для корней, \\sum для суммирования и \\int для интегралов.' },
    { type: 'title', text: 'Сравнение блочного и строчного режимов', level: 3 },
    { type: 'paragraph', html: 'Блочный режим центрирует формулу на новой строке, а строчный встраивает ее прямо в предложение.' },
    { type: 'tip', html: 'Совет по отладке: каждая открывающая скобка должна иметь закрывающую скобку.' },
    { type: 'title', text: 'Экспорт формул: PNG против Markdown и LaTeX', level: 3 },
    { type: 'paragraph', html: 'Экспорт PNG использует Canvas API для создания качественного изображения с прозрачным фоном.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
