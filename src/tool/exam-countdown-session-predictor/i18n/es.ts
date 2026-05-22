import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-spanish' as const;
const title = 'Cuenta atrás y planificador de sesiones de examen';
const description = 'Calcula tu ritmo de estudio diario exacto para llegar al día del examen totalmente preparado. Introduce tu material, establece días de descanso y genera un calendario personalizado.';

const faqItems = [
  { question: '¿Por qué es mejor estudiar a diario que pegarse un atracón al final?', answer: 'Los estudios demuestran que la práctica distribuida (espaciar las sesiones de estudio en el tiempo) conduce a una retención a largo plazo mucho mejor y reduce significativamente la ansiedad ante los exámenes.' },
  { question: '¿Para qué sirve el margen de repaso?', answer: 'El margen de repaso reserva un número específico de días justo antes del examen únicamente para repaso general. El planificador no programa material nuevo durante estos días, asegurando que asimiles los conocimientos.' },
  { question: '¿Cómo influyen los días de descanso personalizados en mi ritmo?', answer: 'Cuando excluyes un día, el planificador redistribuye el material restante entre los demás días de estudio, aumentando ligeramente el objetivo diario para terminar a tiempo.' },
  { question: '¿Puedo volver a convertir un día de descanso en día de estudio?', answer: 'Sí. Puedes alternar cualquier día entre descanso y estudio en tiempo real, o eliminar fechas excluidas de la lista para recalcular al instante.' },
];

const howToItems = [
  { name: 'Introduce la fecha de tu examen', text: 'Selecciona la fecha de tu próximo examen en el calendario.' },
  { name: 'Indica el total de material', text: 'Introduce la cantidad total de páginas, capítulos o temas que necesitas estudiar.' },
  { name: 'Establece tu horario y margen', text: 'Elige tus días de descanso semanales y configura un margen de repaso final.' },
  { name: 'Ajusta y realiza el seguimiento', text: 'Alterna días de estudio y descanso directamente en tu calendario para adaptarlo a tu vida diaria.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Planificador y cuenta atrás de estudio',
    examDateLabel: 'Fecha del examen',
    materialLabel: 'Material total (Páginas / Capítulos)',
    materialUnitLabel: 'Unidad de material',
    progressLabel: 'Completado hasta ahora',
    weeklyScheduleLabel: 'Días de estudio semanales',
    reviewBufferLabel: 'Margen de repaso (Días)',
    excludedDatesLabel: 'Días de descanso personalizados',
    dailyPaceLabel: 'Ritmo de estudio diario',
    daysLeftLabel: 'Días restantes',
    studyDaysLabel: 'Días de estudio',
    bufferDaysLabel: 'Días de margen',
    scheduleTitle: 'Tu calendario de estudio personalizado',
    resetButton: 'Restablecer valores predeterminados',
    addExclusionButton: 'Añadir día de descanso',
    daysOfWeek: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayTypes: {
      study: 'Día de estudio',
      rest: 'Día de descanso',
      review: 'Margen de repaso',
      exam: 'Día del examen',
    },
    units: {
      pages: 'Páginas',
      chapters: 'Capítulos',
      exercises: 'Ejercicios',
      modules: 'Módulos',
      topics: 'Temas',
    },
    noStudyDaysError: '¡No tienes días de estudio disponibles! Comprueba tu horario semanal y el margen de repaso.',
    examInPastError: 'La fecha del examen debe ser en el futuro.',
    noMaterialError: 'Introduce una cantidad de material superior a cero.',
    scheduleTableHeader: {
      date: 'Fecha',
      day: 'Día',
      type: 'Estado',
      target: 'Objetivo diario',
      cumulative: 'Progreso general',
      action: 'Acciones rápidas',
    },
    markAsRest: 'Marcar como descanso',
    markAsStudy: 'Marcar como estudio',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias y recursos académicos',
  },
  seo: [
    { type: 'title', text: 'Cómo planificar tus sesiones de estudio para la máxima retención', level: 2 },
    { type: 'paragraph', html: 'Preparar un examen tiene menos que ver con las horas del último día y más con cómo distribuyes tu carga de trabajo. Llevar un ritmo es crucial para evitar el agotamiento cognitivo.' },
    { type: 'title', text: 'La ciencia del aprendizaje espaciado y la repetición', level: 3 },
    { type: 'paragraph', html: 'Nuestro cerebro aprende mejor espaciando las sesiones. Distribuir el estudio en varias semanas permite construir conexiones neuronales más fuertes mediante la consolidación. Evita la fatiga mental y ayuda a transferir información a la memoria a largo plazo.' },
    { type: 'paragraph', html: 'Según la curva del olvido de Ebbinghaus, perdemos memoria con el tiempo a menos que repasemos activamente. Los intervalos espaciados actúan como reinicios, reduciendo el olvido.' },
    { type: 'title', text: 'Reservar un margen para el repaso final', level: 3 },
    { type: 'paragraph', html: 'Un error común es estudiar material nuevo hasta el último minuto. Disponer de un margen de repaso (de 2 a 5 días antes) te permite hacer simulacros, revisar resúmenes y dormir bien para estar al 100%.' },
    { type: 'title', text: 'El poder de la planificación adaptativa', level: 3 },
    { type: 'paragraph', html: 'Los planes estáticos fallan porque la vida es impredecible. Si te retrasas unas páginas, el plan queda obsoleto. Una calculadora adaptativa recalcula tu objetivo diario en tiempo real.' },
    { type: 'list', items: [
      'Introduce tu progreso periódicamente para mantener la precisión.',
      'Ajusta las fechas estimadas ante imprevistos de tu agenda.',
      'Mantén un ritmo constante en lugar de intentar recuperar grandes cantidades a última hora.'
    ] },
    { type: 'title', text: 'Flexibilidad: contar con los días de descanso', level: 3 },
    { type: 'paragraph', html: 'El descanso no es un premio; es parte del aprendizaje. Programar días libres evita la fatiga y esta calculadora recalcula tu ritmo automáticamente para que no te estreses.' },
    { type: 'tip', html: '<strong>Planifica para imprevistos.</strong> Deja al menos un día libre a la semana como válvula de seguridad por si te pones enfermo o tienes que atender una urgencia.' },
    { type: 'title', text: 'Cómo calcular tu ritmo de estudio a mano', level: 3 },
    { type: 'paragraph', html: 'Para calcular tu objetivo de forma manual, resta el progreso completado al total de material. Divide esa cifra entre los días que te quedan quitando los de descanso y el margen de repaso.' },
    { type: 'paragraph', html: 'Por ejemplo: 400 páginas totales menos 50 ya completadas deja 350 páginas restantes. Si quedan 20 días naturales, pero quitas 4 de descanso y 2 de margen de repaso, te quedan 14 días de estudio. 350 entre 14 son 25 páginas diarias.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
