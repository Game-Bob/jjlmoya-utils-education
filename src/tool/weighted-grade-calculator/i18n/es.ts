import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'calculadora-nota-ponderada-media' as const;
const title = 'Calculadora de Nota Ponderada & Media';
const description = '¿Haciendo números para entrar en la carrera que quieres? Calcula tu nota de bachillerato, EBAU o de la uni sin complicaciones. ¡Tú pon las notas y nosotros hacemos el resto!';

const faqItems = [
  { question: '¿Qué es exactamente la nota ponderada?', answer: 'Es una forma de calcular tu media donde no todo vale lo mismo. Por ejemplo, en la EBAU, algunas asignaturas "valen más" para entrar en según qué carreras. Esta calculadora te ayuda a saber tu nota real sumando esos pesos.' },
  { question: '¿Dónde miro las ponderaciones de la EBAU?', answer: 'Cada universidad publica sus tablas de ponderación cada año. Normalmente las asignaturas relacionadas con tu grado ponderan 0,2, y el resto 0,1 o nada. ¡Búscalas para simular tu nota con precisión!' },
  { question: '¿Qué pasa si mis pesos no suman 100%?', answer: '¡No pasa nada! La calculadora hará una "proyección". Te dirá qué nota llevas con lo que has hecho hasta ahora, ajustándolo como si fuera el total. Ideal para ir viendo cómo vas durante el curso.' },
  { question: '¿Sirve también para la universidad?', answer: '¡Claro! Mete tus parciales, trabajos y el examen final con los porcentajes que diga tu profesor en la guía docente y sabrás qué nota necesitas para el aprobado o la matrícula.' },
];

const howToItems = [
  { name: 'Añade tus notas', text: 'Escribe el nombre de la asignatura, el examen o el trabajo que quieras calcular.' },
  { name: 'Pon tu calificación', text: 'Introduce la nota que has sacado (por ejemplo, de 0 a 10).' },
  { name: 'Ajusta el peso', text: 'Escribe cuánto vale esa nota sobre el total (el porcentaje o peso).' },
  { name: 'Mira el resultado', text: 'Tu nota final se actualiza sola mientras escribes. ¡Sin usar la calculadora del móvil!' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '¿Tienes dudas?',
  bibliographyTitle: 'Fuentes y ayuda',
  ui: {
    addSubject: 'Añadir nota',
    subjects: 'Notas & Ponderaciones',
    subjectName: 'Asignatura / Trabajo',
    grade: 'Nota',
    weight: 'Peso (%)',
    scale: 'Escala total (Ej: 10, 20, 100)',
    finalGrade: 'Tu Nota Actual',
    removeSubject: 'Eliminar',
    weightSum: 'Suma de pesos',
    exampleSubject: 'Examen Final',
    newSubjectPlaceholder: 'ej: Examen Parcial',
  },
  seo: [
    { type: 'title', text: 'Cómo Calcular tu Nota Ponderada para Selectividad y Universidad', level: 2 },
    { type: 'paragraph', html: '¿Andas perdido con tantos porcentajes? No te preocupes, entender tu <strong>media ponderada</strong> es la clave para priorizar tus horas de estudio y entrar en la carrera de tus sueños.' },
    { type: 'title', text: 'Por qué las ponderaciones son clave', level: 3 },
    { type: 'paragraph', html: 'En bachillerato y sobre todo en la EBAU, no todas las asignaturas puntúan igual. Un 10 en una asignatura que pondera 0,2 te da 2 puntos directos, mientras que si pondera 0,1 solo te da 1 punto. Esa diferencia es la que separa el entrar en Medicina o tener que buscar otra opción.' },
    { type: 'paragraph', html: 'Ya sea para calcular tu <strong>nota de admisión</strong> o simplemente para saber qué nota necesitas en el final para aprobar la asignatura de la uni, esta herramienta te lo pone fácil.' },
    { type: 'title', text: '3 pasos para saber tu nota', level: 3 },
    { type: 'list', items: ['Busca el peso de cada tarea o examen (ej: Examen 60%, Trabajos 40%).', 'Multiplica tu nota por ese peso.', 'Suma todos los resultados para obtener tu nota ponderada final.'] },
    { type: 'title', text: 'Truco: Juega con las notas', level: 3 },
    { type: 'paragraph', html: 'Usa la calculadora para simular escenarios. "¿Y si saco un 8 en este trabajo?" Ver cómo cambia tu media en tiempo real te ayudará a decidir dónde esforzarte más en la recta final del curso.' },
    { type: 'tip', html: '<strong>No te agobies.</strong> Si tus pesos aún no suman el 100%, la calculadora te mostrará una proyección de tu nota actual. Es perfecto para llevar un seguimiento de tus notas mes a mes.' },
    { type: 'title', text: 'Media Aritmética vs Media Ponderada', level: 3 },
    { type: 'paragraph', html: 'La media simple engaña. Si tienes un 10 en un trabajo de clase (peso 10%) pero un 4 en el examen final (peso 90%), la media simple te daría un 7 (aprobado). Pero la realidad de tu <strong>nota ponderada</strong> es un 4,6 (suspenso). ¡Ten siempre en cuenta los pesos!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    { name: 'Promedio ponderado (Wikipedia)', url: 'https://es.wikipedia.org/wiki/Promedio_ponderado' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
