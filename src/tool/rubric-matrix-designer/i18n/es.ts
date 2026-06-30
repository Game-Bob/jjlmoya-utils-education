import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'disenador-matriz-rubrica' as const;
const title = 'Diseñador de Matriz de Rúbricas';
const description = 'Crea rúbricas de evaluación ponderadas y editables con niveles de logro, validación en tiempo real del 100% de los pesos, exportación a CSV y un diseño listo para imprimir.';

const faqItems = [
  { question: '¿Qué es una matriz de rúbrica?', answer: 'Una matriz de rúbrica es una cuadrícula de evaluación que organiza los criterios en filas y los niveles de logro en columnas. Cada celda describe cómo es el rendimiento en ese nivel, haciendo que la calificación sea más transparente y coherente.' },
  { question: '¿Por qué los pesos de los criterios deben sumar el 100%?', answer: 'Un total del 100% hace que el modelo de calificación sea explícito. Si el total está por debajo o por encima del 100%, los estudiantes y los evaluadores no pueden interpretar claramente cuánto contribuye cada criterio a la puntuación final.' },
  { question: '¿Pueden los estudiantes utilizar esta herramienta?', answer: 'Sí. Los estudiantes pueden usarla para comprender las expectativas de las tareas, planificar borradores o crear listas de verificación para la revisión entre compañeros antes de la entrega.' },
  { question: '¿Qué opciones de exportación se incluyen?', answer: 'La exportación a CSV es útil para hojas de cálculo y la configuración en sistemas LMS. El botón de impresión abre el flujo de impresión del navegador, donde puedes guardar como PDF mediante el diálogo de impresión del sistema operativo.' },
];

const howToItems = [
  { name: 'Editar los criterios', text: 'Haz clic en el nombre de cualquier criterio y reemplázalo con la habilidad, resultado o requisito que quieras evaluar.' },
  { name: 'Establecer los pesos', text: 'Ajusta cada porcentaje hasta que la barra de peso en tiempo real muestre una rúbrica equilibrada al 100%.' },
  { name: 'Describir los niveles de logro', text: 'Haz clic en cada celda de descriptor y escribe la evidencia observable para ese nivel de rendimiento.' },
  { name: 'Añadir estructura cuando sea necesario', text: 'Utiliza los botones de añadir para crear criterios o niveles de logro adicionales, y elimina las filas o columnas que no sean útiles.' },
  { name: 'Exportar o imprimir', text: 'Descarga un archivo CSV para hojas de cálculo o utiliza la opción de imprimir para crear una versión limpia en PDF.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Criterio',
    weightHeader: 'Peso',
    levelSectionLabel: 'Niveles de logro',
    levelBadgePrefix: 'N',
    addCriterion: 'Añadir criterio',
    addLevel: 'Añadir nivel',
    removeCriterion: 'Eliminar criterio',
    removeLevel: 'Eliminar nivel',
    exportCsv: 'Exportar CSV',
    printRubric: 'Imprimir / PDF',
    csvFilename: 'matriz-rubrica.csv',
    pdfDocumentTitle: 'Matriz de rúbrica',
    pdfImageAlt: 'Matriz de rúbrica',
    confirmDeleteTitle: '¿Eliminar este criterio?',
    confirmDeleteText: 'Esto eliminará el criterio y todos los descriptores escritos para sus niveles de logro.',
    cancelDelete: 'Cancelar',
    confirmDelete: 'Eliminar criterio',
    totalWeight: 'Ponderación total',
    balanced: 'Equilibrado exactamente al 100%',
    under: 'Añade peso hasta que la rúbrica alcance el 100%',
    over: 'Reduce el peso hasta que la rúbrica vuelva al 100%',
    emptyCell: 'Haz clic para editar',
    newCriterionTemplate: 'Criterio {index}',
    newDescriptorTemplate: 'Descriptor {index}.{level}',
    newLevelTemplate: 'Nivel {index}',
    defaultLevels: [
      { name: 'Excelente', score: 4 },
      { name: 'Competente', score: 3 },
      { name: 'En desarrollo', score: 2 },
      { name: 'Inicial', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Calidad del argumento',
        weight: 35,
        cells: [
          'Afirmación clara con razonamiento detallado',
          'Afirmación clara con razonamiento adecuado',
          'La afirmación está presente pero es irregular',
          'La afirmación es confusa o no existe',
        ],
      },
      {
        name: 'Uso de evidencias',
        weight: 30,
        cells: [
          'La evidencia es precisa y está integrada',
          'La evidencia respalda la mayoría de las afirmaciones',
          'La evidencia es general o está vagamente conectada',
          'La evidencia está ausente o es incorrecta',
        ],
      },
      {
        name: 'Organización',
        weight: 20,
        cells: [
          'La estructura guía al lector con fluidez',
          'La estructura es lógica',
          'La estructura tiene lagunas o repeticiones',
          'La estructura es difícil de seguir',
        ],
      },
      {
        name: 'Estilo académico',
        weight: 15,
        cells: [
          'Estilo pulido y convenciones precisas',
          'Los errores menores no dificultan la comprensión',
          'Los errores frecuentes distraen al lector',
          'Los errores hacen que el significado sea confuso',
        ],
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias y recursos académicos',
  },
  seo: [
    { type: 'title', text: 'Diseña rúbricas que los estudiantes realmente puedan usar', level: 2 },
    { type: 'paragraph', html: 'Una rúbrica de evaluación sólida es más que una hoja de calificación. Es un mapa compartido de expectativas. Los estudiantes la usan para comprender cómo es la calidad antes de entregar su trabajo, los profesores la usan para calificar de manera más consistente y los revisores la usan para explicar los comentarios con menos ambigüedad. Este diseñador hace visible la estructura: los criterios, los pesos, los niveles de logro y los descriptores se encuentran en una matriz editable.' },
    { type: 'diagnostic', variant: 'warning', title: 'Cuando una rúbrica necesita revisión', html: '<ul><li>Varios criterios se superponen tanto que el mismo error se penaliza dos veces.</li><li>El peso total no es igual al 100%, lo que dificulta la interpretación de la nota final.</li><li>Los descriptores usan palabras vagas como bueno, débil o excelente sin evidencia observable.</li><li>Hay demasiados niveles para que los evaluadores los distingan de manera confiable.</li></ul>' },
    { type: 'title', text: 'Elección de criterios y pesos', level: 3 },
    { type: 'table', headers: ['Elemento de la rúbrica', 'Buena práctica', 'Problema común'], rows: [['Criterios', 'Evaluar habilidades o resultados distintos como argumento, evidencia, método, precisión o presentación.', 'Mezclar múltiples habilidades en una sola fila hace que los comentarios sean confusos.'], ['Pesos', 'Hacer coincidir el peso con la prioridad de aprendizaje y el propósito de la tarea.', 'Dar el mismo peso a cada fila incluso cuando algunos resultados importan más.'], ['Niveles', 'Usar de 3 a 5 niveles que los evaluadores puedan distinguir de manera constante.', 'Añadir demasiados niveles con diferencias de redacción mínimas.'], ['Descriptores', 'Describir la evidencia observable en el trabajo del estudiante.', 'Usar etiquetas evaluativas que no guían la revisión.']] },
    { type: 'comparative', title: 'Rúbricas analíticas vs holísticas', columns: 2, items: [{ title: 'Rúbrica analítica', description: 'Desglosa el rendimiento en criterios y pesos separados. Es mejor cuando los estudiantes necesitan comentarios detallados o cuando varios evaluadores deben alinearse.', highlight: true, points: ['Calificación transparente', 'Comentarios específicos', 'Funciona bien para tareas complejas'] }, { title: 'Rúbrica holística', description: 'Ofrece un único juicio global. Es más rápida de aplicar, pero proporciona menos diagnóstico para la revisión o la evaluación entre compañeros.', points: ['Calificación más rápida', 'Útil para comprobaciones rápidas', 'Comentarios menos detallados'] }] },
    { type: 'tip', html: '<strong>Escribe descriptores basados en evidencias, no en adjetivos.</strong> En lugar de "análisis excelente", describe lo que hace un análisis excelente: conecta la evidencia con la afirmación, aborda las limitaciones y explica por qué la evidencia es importante.' },
    { type: 'title', text: 'Cómo validar una rúbrica ponderada', level: 3 },
    { type: 'paragraph', html: 'Los pesos comunican la prioridad. Un criterio que vale el 40% orienta el esfuerzo del estudiante de manera diferente que uno que vale el 10%. El total en tiempo real de esta herramienta es intencionadamente estricto: la rúbrica está equilibrada solo cuando la suma es exactamente el 100%. Si el total está por debajo del 100%, una parte de la calificación queda sin definir. Si supera el 100%, el modelo promete puntos de más y crea confusión.' },
    { type: 'summary', title: 'Un flujo de trabajo práctico para rúbricas', items: ['Comienza con los resultados de aprendizaje antes de escribir las filas.', 'Limita la matriz a los criterios que realmente afectarán a la retroalimentación.', 'Redacta los descriptores con un lenguaje sencillo y observable.', 'Comprueba la ponderación al 100% antes de compartir la rúbrica.', 'Exporta a CSV cuando necesites configurarla en una hoja de cálculo o LMS.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
