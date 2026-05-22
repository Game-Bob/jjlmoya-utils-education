import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'analizador-expediente-gpa' as const;
const title = 'Lector y Calculadora de GPA de Expedientes';
const description = 'Calcula al instante tu promedio ponderado y GPA acumulado copiando y pegando el texto de tu expediente universitario. Funciona de manera totalmente offline.';

const faqItems = [
  {
    question: '¿Cómo funciona la extracción automática?',
    answer: 'Analiza el texto pegado línea por línea, dividiéndolo en columnas según espacios, tabulaciones o signos de puntuación. Luego, identifica de forma automática qué columna contiene las asignaturas, las notas y los créditos.'
  },
  {
    question: '¿Son seguros mis datos académicos?',
    answer: 'Sí, por completo. Tanto la extracción como el cálculo del GPA se realizan directamente en tu navegador. No se envía ningún tipo de información a servidores externos, garantizando la total privacidad de tu expediente.'
  },
  {
    question: '¿Qué pasa si las columnas se asocian incorrectamente?',
    answer: 'Puedes corregirlas muy fácilmente. Cada columna de la tabla detectada incluye un desplegable en el encabezado para que elijas manualmente si representa el nombre de la asignatura, la nota, los créditos o si debe ignorarse.'
  },
  {
    question: '¿Soporta notas con letras y diferentes escalas?',
    answer: 'Sí, es compatible tanto con el sistema de letras (A, B, C, D, F) como con escalas numéricas (0-10, 0-20, 0-100). Además, puedes configurar el límite máximo de la escala para adaptarlo al de tu universidad.'
  }
];

const howToItems = [
  {
    name: 'Copia tu expediente',
    text: 'Accede al portal de tu universidad o a tu boletín de notas, selecciona el texto y cópialo.'
  },
  {
    name: 'Pega el texto',
    text: 'Pega el contenido copiado en el área de texto de la herramienta.'
  },
  {
    name: 'Verifica y asigna',
    text: 'Revisa la tabla generada automáticamente y, si es necesario, ajusta la función de cada columna en los encabezados.'
  },
  {
    name: 'Calcula tu GPA',
    text: 'Obtén al instante tu promedio ponderado acumulado y los créditos totales en la parte inferior.'
  }
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Pega tu expediente aquí',
    pasteAreaPlaceholder: 'Pega el texto copiado de Moodle, Canvas o de la página de calificaciones de tu universidad...',
    parsedTitle: 'Datos extraídos del expediente',
    columnSelect: 'Asignar columna',
    subjectName: 'Asignatura / Curso',
    grade: 'Nota',
    credits: 'Créditos',
    ignore: 'Ignorar',
    gpaResult: 'GPA acumulado',
    totalCredits: 'Créditos totales',
    emptyState: 'Pega los datos de tu expediente arriba para previsualizar y editar las filas aquí.',
    scaleLabel: 'Límite de la escala de notas',
    customScale: 'Escala de nota máxima',
    exampleSubject: 'Cálculo I',
    newSubjectPlaceholder: 'Nueva asignatura',
    clearBtn: 'Limpiar texto',
    errorFormat: 'No hemos podido detectar columnas claras. Prueba a copiar y pegar un formato de tabla o lista.'
  },
  seo: [
    { type: 'title', text: 'Cómo extraer y calcular el GPA de cualquier expediente', level: 2 },
    { type: 'paragraph', html: 'Calcular tu promedio académico no debería obligarte a introducir manualmente decenas de asignaturas. Esta herramienta extrae los datos de cualquier texto copiado y pegado para calcular tu GPA al instante.' },
    { type: 'title', text: '¿Por qué usar un extractor de expedientes?', level: 3 },
    { type: 'paragraph', html: 'Los portales universitarios suelen mostrar las calificaciones en tablas HTML complejas. Al copiarlas y pegarlas en esta herramienta, nuestro motor heurístico detecta e importa al momento las asignaturas, notas y créditos sin errores de escritura.' },
    { type: 'title', text: 'Seguro, privado y rápido', level: 3 },
    { type: 'paragraph', html: 'Dado que el motor de extracción se ejecuta de forma local en tu navegador con JavaScript, tu historial académico nunca sale de tu dispositivo. Puedes procesar documentos con cientos de líneas en cuestión de milisegundos.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
