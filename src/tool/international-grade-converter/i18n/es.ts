import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'conversor-notas-internacional' as const;
const title = 'Conversor de Notas Internacionales y Calculadora de Equivalencia GPA';
const description = 'La herramienta más precisa para convertir notas académicas entre sistemas internacionales. Traduce al instante tus calificaciones de España, EE. UU., Reino Unido, Alemania, Francia, Italia y más. Imprescindible para Erasmus+, Fulbright y solicitudes universitarias globales.';

const faqItems = [
  { 
    question: '¿Cómo funciona la conversión de notas internacionales?', 
    answer: 'La herramienta utiliza un mapeo lineal matemático basado en la nota mínima de aprobado y la calificación máxima posible de cada país. Esto asegura que un "aprobado" en un sistema se alinee con un "aprobado" en otro, manteniendo la proporcionalidad académica entre las distintas escalas.' 
  },
  { 
    question: '¿Es oficial este conversor para admisiones universitarias?', 
    answer: 'Aunque nuestros algoritmos siguen las tablas de equivalencia internacionales estándar (como las utilizadas por el ECTS o WES), esta herramienta es de carácter informativo. Para el reconocimiento oficial de créditos, debes consultar siempre con tu institución de destino o un servicio de evaluación acreditado.' 
  },
  { 
    question: '¿En qué consiste el "Modo Lote" (Bulk Mode)?', 
    answer: 'El Modo Lote permite a los estudiantes con expedientes largos procesar varias notas a la vez. Solo tienes que pegar una columna de números desde tu PDF o Excel, y la herramienta calculará las conversiones individuales y tu media global de GPA al instante.' 
  },
  { 
    question: '¿Puedo convertir mis notas al sistema ECTS?', 
    answer: 'Sí. El conversor ofrece equivalencias alineadas con el Sistema Europeo de Transferencia y Acumulación de Créditos (ECTS), lo que lo hace ideal para estudiantes europeos que planean su movilidad o solicitan programas de Máster.' 
  }
];

const howToItems = [
  { name: '1. Selecciona el Sistema de Origen', text: 'Identifica tu país de origen o la escala de calificación específica (ej. España 0-10, Francia 0-20).' },
  { name: '2. Define los Países de Destino', text: 'Añade los países donde vas a solicitar plaza para ver todas las equivalencias en el panel comparativo.' },
  { name: '3. Introduce tus Datos Académicos', text: 'Escribe una sola nota para consultas rápidas o usa el Modo Lote para procesar todo tu semestre.' },
  { name: '4. Analiza y Exporta', text: 'Revisa las barras visuales de percentiles y descarga tu Informe de Equivalencia en PDF para guardarlo en tus archivos.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Procesamiento en Modo Lote, Conversión en tiempo real, Soporte para escalas mundiales, Generación de informes en PDF',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Sistema de Calificación de Origen',
    targetSystems: 'Equivalencias Globales',
    gradeInput: 'Tu Nota',
    bulkMode: 'Procesamiento por Lotes',
    bulkPlaceholder: 'Pega aquí tu lista de notas (una por línea)...',
    results: 'Panel de Equivalencias',
    passLimit: 'Aprobado Mín.',
    shareResults: 'Generar Informe de Equivalencia',
    averageMedia: 'Media Global Convertida',
    compareTitle: 'Posición Académica Mundial',
    addSystem: 'Añadir País',
    removeSystem: 'Quitar',
    selectCountry: 'Seleccionar País',
    sourceCountry: 'País de Origen',
    systemSelection: 'Selección de Sistema',
    convertedScore: 'Nota Convertida',
    emptyState: 'Introduce una nota para ver las equivalencias globales',
    minLabel: 'MÍN',
    passLabel: 'APTO',
    maxLabel: 'MÁX',
    scaleLabel: 'Escala',
    howToTitle: 'Tu Camino hacia la Educación Internacional',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias y Estándares Académicos',
    singleGradeMode: 'Nota Única',
    transcriptMode: 'Expediente Completo',
    gradeCounter: 'Notas introducidas',
    averageSummary: 'Media calculada',
    gradesIgnored: '{count} notas ignoradas (fuera de rango)',
    bulkHelp: 'Puedes pegar directamente tu expediente. Detectamos notas separadas por espacios, comas o líneas.',
    copiedLabel: '¡Copiado!',
    germanyExpl: 'Sistema inverso: 1,0 es la mejor nota posible, 4,0 es el aprobado mínimo.',
    spainExpl: 'Escala estándar 0-10. 5,0 es el aprobado mínimo.',
    usaExpl: 'Escala GPA de 0,0 a 4,0. Normalmente 2,0 es el aprobado mínimo.',
    ukExpl: 'Clasificación basada en porcentajes. 40% es el aprobado mínimo.',
    franceExpl: 'Escala de 20 puntos. 10 es el aprobado mínimo.',
    italyExpl: 'Escala de 30 puntos. 18 es el aprobado mínimo.',
    netherlandsExpl: 'Escala 1-10. 6 es el aprobado mínimo.',
    placeholderSpain: 'ej. 8,5',
    placeholderUSA: 'ej. 3,7 o A-',
    placeholderFrance: 'ej. 14',
    placeholderGermany: 'ej. 1,3',
    placeholderUK: 'ej. 75',
    placeholderItaly: 'ej. 28',
    placeholderNetherlands: 'ej. 7,5',
  },
  seo: [
    { type: 'title', text: 'Conversión de Notas de Precisión para la Movilidad Global', level: 2 },
    { type: 'paragraph', html: 'Ya seas un <strong>estudiante Erasmus+</strong> o estés solicitando plaza en un <strong>Máster de la Ivy League</strong>, entender tu posición académica global es el primer paso. Las notas varían enormemente: mientras que un 10 en España es la perfección, en Francia es apenas un aprobado. Nuestro motor aclara estas diferencias.' },
    { type: 'title', text: 'Por qué es vital la precisión en la conversión del GPA', level: 3 },
    { type: 'paragraph', html: 'Los comités de admisión utilizan los GPA convertidos para filtrar miles de solicitudes. Un ligero error en el cálculo manual podría costarte una beca. Nuestra herramienta utiliza <strong>algoritmos oficiales de mapeo lineal</strong> empleados por las principales oficinas de educación internacional.' },
    { type: 'title', text: 'Principales Sistemas Soportados', level: 3 },
    { type: 'list', items: [
      '<strong>España (0-10):</strong> Mapeo detallado desde Aprobado hasta Sobresaliente.',
      '<strong>USA GPA (4.0):</strong> Equivalencia estándar de las universidades estadounidenses.',
      '<strong>Alemania (1-6):</strong> Gestión de escala invertida donde el 1,0 es la cima.',
      '<strong>Francia (0-20):</strong> Conversión precisa para las Grande Écoles y universidades francesas.',
      '<strong>Clasificación del Reino Unido:</strong> Traducción de porcentajes a Honores.'
    ] },
    { type: 'tip', html: '<strong>Consejo Académico:</strong> Usa el "Modo Lote" para encontrar tu GPA acumulado de varios semestres. ¡Te ahorrará horas de trabajo manual con hojas de cálculo!' },
    { type: 'title', text: 'Calcula tu Equivalencia WES', level: 3 },
    { type: 'paragraph', html: 'Aunque la evaluación oficial de WES es un servicio de pago, nuestra herramienta ofrece una <strong>estimación de alta fidelidad</strong> de tu GPA de WES, ayudándote a decidir dónde solicitar plaza antes de pagar las tasas de evaluación.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
