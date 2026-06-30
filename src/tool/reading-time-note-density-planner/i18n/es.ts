import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'planificador-tiempo-lectura-densidad-notas' as const;
const title = 'Planificador de Tiempo de Lectura y Densidad de Notas';
const description = 'Calcula cuánto tardarás en realizar tus lecturas académicas incluyendo la toma de notas, y distribuye el trabajo en sesiones prácticas.';

const faqItems = [
  { question: '¿Por qué la toma de notas influye tanto en el tiempo de lectura?', answer: 'La lectura académica no consiste solo en pasar los ojos por encima del texto. Cada subrayado, resumen, pregunta en el margen o tarjeta de estudio que creas añade tiempo de procesamiento. Planificar la densidad de las notas por separado evita que una estimación optimista de páginas por hora se convierta en una noche en vela.' },
  { question: '¿Qué es una buena estimación de páginas por hora?', answer: 'Para libros de texto densos, lo habitual es leer entre 15 y 25 páginas por hora. Para textos más ligeros, puede ser razonable calcular entre 30 y 50 páginas por hora. Si el material contiene fórmulas, fuentes primarias o vocabulario nuevo, empieza con una estimación baja y ajústala tras la primera sesión cronometrada.' },
  { question: '¿Cómo debería elegir la densidad de las notas?', answer: 'Calcula de 1 a 2 minutos por página para un subrayado básico o un esquema rápido, de 3 a 5 minutos por página para apuntes del tipo Cornell, y más de 5 minutos por página si estás elaborando tarjetas de memoria, resolviendo ejemplos prácticos o redactando párrafos de síntesis.' },
  { question: '¿Puede este planificador sustituir la programación de la guía docente?', answer: 'No. Te ayuda a traducir la cantidad de lectura en tiempo de estudio y sesiones concretas, pero los plazos de entrega, seminarios, prácticas y periodos de repaso deben seguir organizándose en tu calendario principal.' },
];

const howToItems = [
  { name: 'Introduce la carga de lectura', text: 'Indica el número de páginas o las unidades de lectura equivalentes que necesitas completar.' },
  { name: 'Define el tiempo disponible', text: 'Introduce el total de minutos que puedes dedicar de forma realista antes de la fecha límite.' },
  { name: 'Estima la velocidad y la densidad', text: 'Elige una velocidad en páginas por hora y la media de minutos de toma de notas que estimas por página.' },
  { name: 'Divide el trabajo en sesiones', text: 'Indica el número de sesiones para ver cuántas páginas, minutos y tiempo de notas corresponden a cada una.' },
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

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Páginas a leer',
    minutesLabel: 'Minutos disponibles',
    speedLabel: 'Velocidad de lectura, pág/hora',
    densityLabel: 'Densidad de notas, min/página',
    sessionsLabel: 'Sesiones de estudio',
    totalTimeLabel: 'Carga de trabajo total',
    readingTimeLabel: 'Lectura',
    noteTimeLabel: 'Notas',
    coverageLabel: 'Cobertura de tiempo',
    pagesSessionLabel: 'Páginas/sesión',
    minutesSessionLabel: 'Minutos/sesión',
    notesSessionLabel: 'Minutos de notas/sesión',
    controlsAriaLabel: 'Controles del plan de lectura',
    minuteUnit: 'min',
    hourUnit: 'h',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias y Recursos Académicos',
    statusLabels: {
      comfortable: 'Plan viable',
      tight: 'Ajustado pero posible',
      overloaded: 'Horario sobrecargado',
    },
    resetButton: 'Reiniciar',
  },
  seo: [
    { type: 'title', text: 'Planifica tu tiempo según tus notas y no solo por páginas', level: 2 },
    { type: 'paragraph', html: 'Muchos estudiantes calculan su tiempo de lectura dividiendo el número de páginas por su velocidad habitual, olvidando el mayor coste oculto: la toma de notas. Un capítulo de cuarenta páginas puede leerse en noventa minutos si solo se escanea, pero requerirá tres horas si tomas apuntes, resumes y creas preguntas de repaso. Este planificador separa la velocidad de lectura de la densidad de las notas para que tu planificación refleje la tarea real.' },
    { type: 'diagnostic', variant: 'info', title: 'Cuándo tu plan de lectura es probablemente demasiado optimista', html: '<ul><li>Tu tiempo disponible solo cubre los minutos de lectura pura, sin considerar notas ni resolución de problemas.</li><li>Usas la misma velocidad estimada de páginas por hora para novelas, libros de texto, artículos científicos y casos legales.</li><li>Tus sesiones duran más de lo que puedes mantener la atención, por lo que la calidad de las notas de las últimas páginas empeora.</li><li>La fecha límite incluye otras tareas académicas, pero el plan de lectura supone que cada minuto libre se dedica a una sola materia.</li></ul>' },
    { type: 'title', text: 'Cómo elegir una velocidad de páginas por hora realista', level: 3 },
    { type: 'table', headers: ['Tipo de material', 'Velocidad de inicio', 'Consejo de planificación'], rows: [['Repaso rápido o contenido familiar', '40-60 páginas/hora', 'Úsala únicamente si ya dominas el vocabulario técnico y solo buscas repasar conceptos, no memorizarlos.'], ['Capítulo estándar de libro de texto', '20-35 páginas/hora', 'Reduce la velocidad estimada si el capítulo incluye ejemplos explicados, gráficos o cuestionarios al final de cada sección.'], ['Teoría compleja, artículos de investigación o fuentes primarias', '8-20 páginas/hora', 'Planifica sesiones más lentas y reserva un bloque final de recopilación, ya que la asimilación suele requerir varias lecturas.']] },
    { type: 'tip', html: '<strong>Calibra tras la primera sesión.</strong> Cronometra el tiempo que tardas en leer y anotar las primeras diez páginas. Si el calculador indica que tu plan es viable pero la sesión real demuestra lo contrario, haz caso a la práctica y reduce la velocidad estimada.' },
    { type: 'title', text: 'Qué significa la densidad de las notas', level: 3 },
    { type: 'paragraph', html: 'La densidad de notas es el tiempo medio dedicado a procesar y estructurar la información de cada página mientras lees o al terminar de hacerlo. Un enfoque básico puede consistir en subrayar ideas clave y anotar una palabra en el margen. Un enfoque profundo incluye la redacción de resúmenes, esquemas del tipo Cornell, listados de preguntas o tarjetas de memoria. El método adecuado depende del tipo de examen: las preguntas de test requieren repetición espaciada, los exámenes de desarrollo mapas de argumentos y las materias cuantitativas resolución de problemas.' },
    { type: 'comparative', title: 'Notas básicas frente a notas profundas', columns: 2, items: [{ title: 'Notas básicas', description: 'Permite terminar más rápido y es útil para lecturas exploratorias, pero la información se olvida antes y resulta más difícil repasarla después.', points: ['Ideal para temarios conocidos', 'Menor carga de trabajo inmediata', 'Menor utilidad para el repaso a largo plazo'] }, { title: 'Notas profundas', description: 'Requiere más tiempo, pero es el mejor método para preparar exámenes, seminarios y trabajos académicos donde se necesita recordar datos con precisión.', highlight: true, points: ['Recomendado para contenidos evaluables', 'Mayor carga de trabajo inmediata', 'Material de repaso muy eficaz'] }] },
    { type: 'summary', title: 'Una regla práctica de planificación', items: ['Intenta que las sesiones habituales de lectura duren menos de 75 minutos.', 'Si el tiempo de notas supera al de lectura, divide el trabajo: primero lee y después sintetiza.', 'Reserva la última sesión de estudio para consolidar conocimientos en lugar de añadir nuevas lecturas hasta el último día.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
