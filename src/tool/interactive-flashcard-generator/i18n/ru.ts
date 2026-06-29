import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interaktivnyi-generator-kartochek' as const;
const title = 'Интерактивный генератор карточек запоминания';
const description = 'Повысьте эффективность учебы с помощью активного отзыва и интервальных повторений. Создавайте карточки, учитесь с 3D-эффектом и импортируйте/экспортируйте колоды.';

const faqItems = [
  { question: 'Что такое активный отзыв?', answer: 'Активный отзыв это принцип обучения, при котором вы проверяете память путем активного извлечения ответов, а не просто пассивного перечитывания конспектов.' },
  { question: 'Как работает интервальное повторение?', answer: 'Это метод, при котором сложные карточки вы повторяете чаще, а простые реже, с увеличивающимися интервалами времени для наилучшего запоминания.' },
  { question: 'Как сохранить свои карточки?', answer: 'Вы можете экспортировать свою колоду в файл JSON. Чтобы продолжить учебу позже, просто загрузите этот файл с помощью кнопки Импорт.' },
  { question: 'Что дают оценки Легко, Средне и Сложно?', answer: 'Они помогают классифицировать, насколько хорошо вы помните карточку. В системе Лейтнера сложные карточки повторяются чаще.' },
];

const howToItems = [
  { name: 'Создать карточку', text: 'Введите вопрос на лицевой стороне и ответ на обратной, затем нажмите Добавить карточку.' },
  { name: 'Повторить колоду', text: 'Нажмите на любую карточку в окне просмотра, чтобы перевернуть ее и увидеть ответ.' },
  { name: 'Оценить память', text: 'Оцените легкость вспоминания с помощью кнопок Легко, Средне или Сложно.' },
  { name: 'Сохранить сессию', text: 'Используйте кнопку Экспорт, чтобы скачать свою колоду и иметь возможность загрузить ее позже.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Создание карточки',
    questionLabel: 'Лицевая сторона (Вопрос)',
    answerLabel: 'Обратная сторона (Ответ)',
    addCard: 'Добавить карточку',
    questionPlaceholder: 'напр., Что является столицей Франции?',
    answerPlaceholder: 'напр., Париж',
    reviewMode: 'Учебная сессия',
    cardIndex: 'Карточка',
    flipCard: 'Нажмите, чтобы перевернуть',
    nextCard: 'Вперед',
    prevCard: 'Назад',
    easy: 'Легко',
    medium: 'Средне',
    hard: 'Сложно',
    resetSession: 'Сбросить прогресс',
    importExport: 'Управление колодой',
    importDeck: 'Импорт JSON',
    exportDeck: 'Экспорт JSON',
    exportSelected: 'Экспорт выбранного',
    exportAll: 'Экспорт всей базы',
    emptyDeckWarning: 'Ваша колода пуста. Создайте карточку или импортируйте колоду для начала учебы.',
    sampleQuestion1: 'Что такое активный отзыв?',
    sampleAnswer1: 'Метод обучения, который включает в себя активную стимуляцию извлечения памяти в процессе обучения.',
    sampleQuestion2: 'Кто сформулировал гипотезу кривой забывания?',
    sampleAnswer2: 'Герман Эббингауз, изучавший экспоненциальный характер забывания информации со временем.',
    aiPromptGenerator: 'ИИ Помощник по карточкам',
    aiTopicsLabel: 'Введите темы экзамена или конспекты',
    aiTopicsPlaceholder: 'напр., Экзамен по математике: производные, интегралы и пределы...',
    generatePromptBtn: 'Создать ИИ-промт',
    aiPromptOutputLabel: 'Скопируйте этот промт в ChatGPT/Gemini',
    copyPromptBtn: 'Скопировать в буфер',
    selectAll: 'Выбрать все',
    deleteCategory: 'Удалить категорию',
    deleteConfirmMsg: 'Вы уверены, что хотите удалить эту категорию и все ее карточки?',
    cancel: 'Отмена',
    delete: 'Удалить',
    pasteJsonTitle: 'Вставить JSON карточек',
    pasteJsonPlaceholder: 'Вставьте сгенерированный ИИ JSON сюда...',
    importBtn: 'Импортировать',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Оптимизируйте учебный процесс с помощью активного отзыва и интервальных повторений', level: 2 },
    { type: 'paragraph', html: 'Карточки признаны одним из самых эффективных инструментов для долгосрочного запоминания. Объединяя активное припоминание со структурированной оценкой, вы быстро закрываете пробелы в знаниях.' },
    { type: 'title', text: 'Активный отзыв против пассивного изучения', level: 3 },
    { type: 'paragraph', html: 'Многие студенты просто перечитывают конспекты. Однако когнитивная наука доказывает, что обучение происходит только тогда, когда мозг прикладывает усилия для извлечения ответов.' },
    { type: 'table', headers: ['Метод обучения', 'Уровень вовлеченности', 'Степень запоминания', 'Подходит для'], rows: [
      ['Интерактивные карточки', 'Высокий (Активный)', 'Отлично', 'Лексика, формулы, даты, понятия.'],
      ['Составление резюме', 'Средний (Синтез)', 'Умеренно', 'Понимание длинных сложных концепций.'],
      ['Перечитывание заметок', 'Низкий (Пассивный)', 'Плохо', 'Первое знакомство с новым материалом.'],
    ] },
    { type: 'title', text: 'Плюсы и минусы обучения с помощью карточек', level: 3 },
    {
      type: 'proscons',
      title: 'Сравнение преимуществ и ограничений',
      items: [
        { pro: 'Заставляет работать память вместо простого пассивного узнавания.', con: 'На начальном этапе создание карточек требует времени.' },
        { pro: 'Быстро показывает, что именно вы не усвоили.', con: 'Не подходит для глубокого понимания слишком сложных теорий.' },
        { pro: 'Легко адаптировать под любой предмет или тему.', con: 'Требуется регулярность для достижения эффекта интервальных повторений.' }
      ]
    },
    { type: 'title', text: 'Создание карточек с помощью искусственного интеллекта', level: 3 },
    { type: 'paragraph', html: 'Ручной ввод карточек может быть утомительным. С нашим <strong>ИИ Помощником</strong> преобразуйте конспекты в готовые к импорту JSON-колоды. Введите темы, скопируйте промт в ChatGPT или Gemini и заимпортируйте результат.' },
    { type: 'title', text: 'Групповое обучение: Выборочный экспорт и слияние', level: 3 },
    { type: 'paragraph', html: 'Учиться вместе продуктивнее, если делить задачи. Наш менеджер позволяет экспортировать только выбранные категории. При импорте система **сливает** (merge) новые карточки с базой одноклассника, не затирая его историю.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
