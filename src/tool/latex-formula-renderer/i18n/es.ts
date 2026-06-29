import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'renderizador-formulas-latex' as const;
const title = 'Renderizador de Fórmulas LaTeX';
const description = 'Renderiza expresiones matemáticas de LaTeX instantáneamente en tu navegador. Escribe cualquier fórmula y copia el resultado como imagen PNG, bloque de código Markdown o código fuente LaTeX sin servidor.';

const faqItems = [
  { question: '¿Qué es LaTeX y por qué lo usan los estudiantes?', answer: 'LaTeX es un lenguaje de tipografía muy utilizado en matemáticas, física, ingeniería y economía para escribir ecuaciones con calidad profesional. A diferencia de Word o Google Docs, LaTeX permite escribir fórmulas complejas con control preciso sobre el formato.' },
  { question: '¿Necesito instalar algo para usar este renderizador?', answer: 'No. Esta herramienta se ejecuta completamente en tu navegador mediante KaTeX, una biblioteca de JavaScript de código abierto. No requiere servidor, inicio de sesión ni instalación.' },
  { question: '¿Cuál es la diferencia entre el modo Bloque y Línea?', answer: 'El modo Bloque (Display mode) renderiza la fórmula en su propia línea centrada. El modo Línea (Inline mode) renderiza la fórmula dentro del flujo del texto con un tamaño menor.' },
  { question: '¿Why es mi fórmula mostrando un error de sintaxis?', answer: 'Los errores de sintaxis en LaTeX ocurren comúnmente por llaves no cerradas (por ejemplo, escribir \\frac{1 sin la llave de cierre), comandos mal escritos o comandos no compatibles. Verifica que todas las llaves estén emparejadas.' },
  { question: '¿Puedo usar esta herramienta para pegar fórmulas en Word o Notion?', answer: 'Sí. Utiliza "Descargar PNG" para obtener una imagen de alta resolución directamente o "Copiar Markdown" para un bloque de código LaTeX listo.' }
];

const howToItems = [
  { name: 'Escribe tu expresión LaTeX', text: 'Introduce cualquier expresión matemática LaTeX válida en el editor de la izquierda. La fórmula se renderiza en tiempo real.' },
  { name: 'Elige un modo de renderizado', text: 'Selecciona el modo Bloque para una ecuación independiente centrada, o el modo Línea para una fórmula compacta dentro del texto.' },
  { name: 'Ajusta el tamaño de fuente', text: 'Usa el deslizador de tamaño de fuente para escalar la vista previa.' },
  { name: 'Exporta en tu formato preferido', text: 'Haz clic en "Descargar PNG" para obtener una imagen, "Copiar Markdown" para el bloque de código o "Copiar LaTeX" para la expresión original.' }
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
    title: 'Renderizador de Fórmulas LaTeX',
    inputLabel: 'Expresión LaTeX',
    inputPlaceholder: 'ej. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Bloque',
    inlineModeLabel: 'Línea',
    fontSizeLabel: 'Tamaño de Fuente',
    downloadPngButton: 'Descargar PNG',
    copyMarkdownButton: 'Copiar Markdown',
    copyLatexButton: 'Copiar LaTeX',
    resetButton: 'Reiniciar',
    previewTitle: 'Vista Previa',
    copiedToast: 'Copiado al portapapeles',
    errorLabel: 'Error de sintaxis',
    emptyPreviewHint: 'Empieza a escribir LaTeX arriba para ver la fórmula renderizada aquí.',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias y Recursos'
  },
  seo: [
    { type: 'title', text: 'Cómo Escribir y Renderizar Fórmulas Matemáticas en tu Navegador', level: 2 },
    { type: 'paragraph', html: 'LaTeX es el estándar para la tipografía científica y matemática, utilizado por universidades y revistas en todo el mundo. Esta herramienta renderiza fórmulas al instante con KaTeX.' },
    { type: 'title', text: '¿Qué es KaTeX y por qué es la mejor opción para el navegador?', level: 3 },
    { type: 'paragraph', html: 'KaTeX es una biblioteca de JavaScript creada por Khan Academy que renderiza expresiones LaTeX de forma cliente extremadamente rápido y con gran precisión.' },
    { type: 'paragraph', html: 'KaTeX genera código HTML y SVG limpio que escala perfectamente en cualquier tamaño.' },
    { type: 'title', text: 'Casos de Uso Comunes para Estudiantes e Investigadores', level: 3 },
    { type: 'list', items: [
      'Verificar la sintaxis de tus fórmulas antes de entregar tareas.',
      'Descargar fórmulas como PNG para Word, Google Docs o Notion.',
      'Convertir expresiones a bloques de código Markdown para GitHub o Jupyter.',
      'Previsualizar fórmulas antes de incluirlas en Overleaf.'
    ] },
    { type: 'title', text: 'Referencia de Comandos Matemáticos Esenciales de LaTeX', level: 3 },
    { type: 'paragraph', html: 'Los comandos más comunes incluyen fracciones, raíces, sumatorias e integrales.' },
    { type: 'title', text: 'Modo Bloque vs Modo Línea: Cuándo usar cada uno', level: 3 },
    { type: 'paragraph', html: 'El modo Bloque centra la fórmula en una línea dedicada, mientras que el modo Línea la integra en el texto.' },
    { type: 'tip', html: 'Consejo rápido de depuración: cada llave de apertura debe tener su llave de cierre.' },
    { type: 'title', text: 'Exportar Fórmulas: PNG vs Markdown vs LaTeX', level: 3 },
    { type: 'paragraph', html: 'La exportación a PNG genera una imagen transparente nítida de alta resolución.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
