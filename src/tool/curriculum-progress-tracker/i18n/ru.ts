import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'kalkulyator-progressa-obucheniya-i-prognoza-srednego-balla' as const;
const title = 'Калькулятор прогресса обучения и прогноза среднего балла';
const description = 'Организуйте учебный план семестр за семестром, отслеживайте текущий и прогнозируемый средний балл и симулируйте оценки.';

const faqItems = [
  {
    question: 'Как начать планирование обучения?',
    answer: 'Просто добавьте семестры и введите свои курсы непосредственно на панели. Вы можете настроить количество зачетных единиц, статус каждого предмета и оценки.',
  },
  {
    question: 'В чем разница между текущим и прогнозируемым средним баллом?',
    answer: 'Текущий средний балл рассчитывается только по завершенным курсам с подтвержденными оценками. Прогнозируемый средний балл рассчитывает итоговый средний балл с учетом текущих и планируемых курсов.',
  },
  {
    question: 'Что показывает индикатор требуемой оценки?',
    answer: 'Он рассчитывает точный средний балл, который необходимо получить по всем оставшимся курсам для достижения целевого среднего балла.',
  },
  {
    question: 'Безопасно ли хранятся мои данные?',
    answer: 'Да. Все данные хранятся локально в вашем браузере. Информация не отправляется на сторонние серверы. Вы можете экспортировать свой план в формате JSON.',
  },
];

const howToItems = [
  { name: 'Настроить цели', text: 'Укажите необходимое количество зачетных единиц для выпуска и целевой средний балл в верхней части панели.' },
  { name: 'Создать учебный план', text: 'Добавьте семестры и укажите свои курсы с соответствующим количеством зачетных единиц.' },
  { name: 'Обновить оценки и статусы', text: 'Изменяйте статус предметов между Завершено, В процессе и Запланировано, вводя оценки.' },
  { name: 'Анализировать требуемые баллы', text: 'Изучите индикатор, чтобы узнать, какой средний балл нужно получить в будущих семестрах.' },
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
    degreeNameLabel: 'Название программы',
    graduationCreditsLabel: 'Целевое количество кредитов',
    targetGpaLabel: 'Целевой балл',
    realGpaLabel: 'Текущий средний балл',
    projectedGpaLabel: 'Прогнозируемый балл',
    creditsCompletedLabel: 'Пройдено кредитов',
    requiredGradeLabel: 'Требуемый балл (Остаток)',
    addSemesterButton: 'Добавить семестр',
    addCourseButton: 'Добавить курс',
    exportPlanButton: 'Экспортировать план',
    importPlanButton: 'Импортировать план',
    semesterNamePlaceholder: 'Название семестра (например, 1 курс, 1 семестр)',
    courseNamePlaceholder: 'Название курса',
    creditsPlaceholder: 'Кредиты',
    gradePlaceholder: 'Оценка',
    statusCompleted: 'Завершено',
    statusInProgress: 'В процессе',
    statusPlanned: 'Запланировано',
    importError: 'Не удалось импортировать учебный план. Проверьте формат файла.',
    uploadHint: 'Все данные сохраняются локально в вашем браузере. Импорт и экспорт происходят полностью на вашем устройстве.',
    statusMessageSuccess: 'Вы на правильном пути к достижению целевого среднего балла.',
    statusMessageWarning: 'Вам нужно получить средний балл {grade} или выше по оставшимся курсам для достижения цели.',
    statusMessageImpossible: 'Математически невозможно достичь целевого среднего балла при текущих настройках ваших курсов.',
    degreeNamePlaceholder: 'например, Бакалавриат по информатике',
    deleteSemesterLabel: 'Удалить семестр',
    deleteCourseLabel: 'Удалить курс',
    semesterTitleTemplate: 'Семестр {num}',
  },
  seo: [
    { type: 'title', text: 'Как прогнозировать средний балл и управлять зачетными единицами', level: 2 },
    { type: 'paragraph', html: 'Планирование академического пути требует эффективных инструментов контроля. Данный калькулятор позволяет прогнозировать итоговый балл и рассчитывать учебную нагрузку.' },
    { type: 'summary', title: 'Ключевые показатели для отслеживания', items: [
      'Визуализируйте разницу между набранными кредитами и требованиями программы.',
      'Планируйте будущие оценки для оценки их влияния на итоговый средний балл.',
      'Рассчитывайте минимально необходимый балл для сохранения стипендии.',
    ] },
    {
      type: 'proscons',
      title: 'Преимущества и ограничения симулятора',
      items: [
        {
          pro: 'Помогает проактивно выстраивать учебную траекторию.',
          con: 'Точность расчетов зависит от реалистичности вводимых вами оценок.',
        },
        {
          pro: 'Четко указывает минимальный порог оценок для достижения целей.',
          con: 'Не учитывает специфические особенности округления баллов в вашем вузе.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
