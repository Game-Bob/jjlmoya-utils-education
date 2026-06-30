import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'mapa-conceptual-texto' as const;
const title = 'Creador de mapas conceptuales';
const description = 'Convierte notas con sangría en un mapa conceptual interactivo con nodos arrastrables, ramas contraíbles, controles de zoom y exportación a SVG o PNG.';

const faqItems = [
  { question: '¿Qué tipo de texto puedo pegar en el generador de mapas conceptuales?', answer: 'Utiliza un esquema sencillo: una idea por línea, con sangría para los subtemas. Se aceptan viñetas, listas numeradas, tabulaciones y espacios, por lo que las notas copiadas de documentos, resúmenes de clases o aplicaciones de estudio se pueden convertir generalmente sin reformatear manualmente.' },
  { question: '¿Cómo debo dar formato a la sangría para obtener el mapa conceptual más limpio?', answer: 'Coloca el tema central en la primera línea y luego aplica sangría a las ideas secundarias debajo de este. Mantén las ideas del mismo nivel alineadas con la misma sangría. Si un nodo aparece bajo el padre equivocado, el nivel de sangría suele ser el problema a corregir.' },
  { question: '¿Puedo mover los nodos después de generar el mapa?', answer: 'Sí. Arrastra cualquier nodo en el lienzo para mejorar el espaciado, separar ramas densas o enfatizar una relación. También puedes desplazar el lienzo, acercar o alejar el zoom y contraer ramas antes de exportar.' },
  { question: '¿Cuál es la diferencia entre la exportación SVG y PNG?', answer: 'SVG es editable y se escala de forma limpia en editores vectoriales, diapositivas y documentos. PNG es una imagen fija que es más fácil de subir a plataformas escolares, mensajes, hojas de trabajo y fichas de repaso rápido.' },
  { question: '¿Esta herramienta infiere enlaces cruzados automáticamente?', answer: 'No. Construye una jerarquía a partir de la sangría. Esto mantiene el resultado predecible, pero los enlaces laterales como causas, contrastes o bucles de retroalimentación deben revisarse manualmente después de la exportación SVG.' },
];

const howToItems = [
  { name: 'Pega o escribe un esquema', text: 'Introduce un concepto por línea y aplica sangría a las ideas secundarias debajo de su tema principal.' },
  { name: 'Revisa la estructura generada', text: 'Utiliza el lienzo interactivo para comprobar si la jerarquía coincide con la forma en que se debe estudiar el tema.' },
  { name: 'Organiza el lienzo', text: 'Arrastra nodos, contrae ramas saturadas y ajusta el zoom hasta que la agrupación visual sea clara.' },
  { name: 'Exporta para material de estudio', text: 'Descarga SVG para editar o PNG para compartir rápidamente, hojas de trabajo y presentaciones.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Esquema con sangría',
    sampleButton: 'Cargar ejemplo',
    clearButton: 'Limpiar',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetView: 'Restablecer vista',
    exportSvg: 'Exportar SVG',
    exportPng: 'Exportar PNG',
    collapseBranch: 'Contraer rama',
    expandBranch: 'Expandir rama',
    emptyStateTitle: 'Aún no hay conceptos',
    emptyStateText: 'Escribe una idea por línea y aplica sangría a los subtemas para construir el mapa.',
    nodeCount: 'conceptos',
    depthCount: 'niveles',
    branchCount: 'enlaces',
    levelPrefix: 'N',
    untitledNodeLabel: 'Sin título',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'mapa-conceptual.svg',
    pngFilename: 'mapa-conceptual.png',
    sampleOutline: `Proyecto de investigación
  Pregunta
    ¿Qué problema se está investigando?
    ¿Quiénes se ven afectados?
  Evidencia
    Fuentes primarias
    Artículos académicos
    Conjunto de datos
  Método
    Plan de muestreo
    Pasos del análisis
  Conclusión
    Hallazgo principal
    Limitaciones
    Siguiente pregunta de investigación`,
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias y recursos académicos',
  },
  seo: [
    { type: 'title', text: 'Convierte notas con sangría en un mapa conceptual', level: 2 },
    { type: 'paragraph', html: 'Un mapa conceptual es útil cuando un tema deja de ser una simple lista de datos. Muestra qué ideas son centrales, qué detalles las apoyan y dónde el estudiante puede estar confundiendo categorías, ejemplos, causas y consecuencias. Este generador está diseñado para las notas que los estudiantes ya tienen: pega un esquema con sangría, ajusta la jerarquía y luego utiliza el lienzo interactivo para organizar un mapa visual listo para estudiar.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'línea por concepto' }, { value: '2+', label: 'niveles de sangría admitidos' }, { value: 'SVG', label: 'exportación editable' }, { value: 'PNG', label: 'exportación para compartir' }] },
    { type: 'diagnostic', variant: 'info', title: 'Mejor formato de entrada para un mapa preciso', html: '<ul><li>Coloca el tema principal en su propia línea en la parte superior.</li><li>Aplica sangría a los subtemas debajo de la idea que explican, apoyan, definen o ejemplifican.</li><li>Mantén las ideas del mismo nivel alidadas con la misma sangría.</li><li>Usa viñetas o listas numeradas si lo deseas; los marcadores de lista comunes se eliminan automáticamente.</li><li>Mantén las etiquetas de los nodos cortas y descriptivas. Las explicaciones completas pertenecen a tus notas, no dentro de cada nodo.</li></ul>' },
    { type: 'title', text: 'Cómo diagnosticar un mapa conceptual desorganizado', level: 3 },
    { type: 'table', headers: ['Lo que ves', 'Causa probable', 'Cómo solucionarlo'], rows: [['Un detalle aparece bajo el tema equivocado', 'El nivel de sangría es demasiado superficial o demasiado profundo.', 'Mueve la línea a la izquierda o derecha hasta que quede debajo de la idea padre correcta.'], ['El mapa es muy ancho', 'Se colocan demasiadas ideas en el mismo nivel.', 'Agrupa los elementos relacionados bajo un nodo de categoría más claro.'], ['El mapa es difícil de estudiar', 'Las etiquetas de los nodos están escritas como oraciones completas.', 'Acorta las etiquetas a palabras clave, afirmaciones o preguntas.'], ['Faltan relaciones importantes', 'El esquema es jerárquico pero el tema tiene enlaces cruzados.', 'Exporta a SVG y añade enlaces laterales manualmente en un editor si es necesario.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Mapa conceptual', description: 'Ideal para mostrar relaciones entre ideas, requisitos previos, causas, evidencias y categorías.', highlight: true, points: ['Centrado en las relaciones', 'Bueno para repasar', 'Útil para explicar un tema en voz alta'] }, { title: 'Esquema', description: 'Ideal para notas ordenadas, estructura de ensayos, secuencias de clase, procedimientos y material cronológico.', points: ['Rápido de escribir', 'Fácil de escanear', 'Admite gran cantidad de detalles'] }, { title: 'Mapa mental', description: 'Ideal para aportar ideas de asociaciones amplias antes de conocer por completo la estructura del tema.', points: ['Exploración creativa', 'Agrupamiento libre', 'Jerarquía menos estricta'] }] },
    { type: 'tip', html: '<strong>Usa la contracción como herramienta de recuerdo activo.</strong> Contrae una rama, di los detalles ocultos de memoria y luego expándela para comprobar lo que te faltó. Esto convierte el mapa de un diagrama pasivo en un estímulo de repaso.' },
    { type: 'title', text: 'Flujos de estudio que se benefician del mapeo visual', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Repaso de exámenes', description: 'Construye el mapa en torno a posibles preguntas. Los nodos padres deben ser estímulos como causas, evidencia, limitaciones, definiciones o ejemplos.', highlight: true, points: ['Usa ramas contraídas para recordar', 'Mantén las etiquetas cortas', 'Exporta PNG para fichas de repaso rápido'] }, { title: 'Planificación de investigación', description: 'Usa el mapa para conectar una pregunta de investigación con la evidencia, el método, las fuentes, las limitaciones y las conclusiones.', points: ['Coloca la pregunta en la raíz', 'Separa la evidencia de la interpretación', 'Exporta SVG para editar'] }] },
    { type: 'message', title: 'Limitación importante', html: 'La sangría crea un árbol, no una red semántica completa. Si dos ideas pertenecen a ramas diferentes pero se influyen entre sí, la herramienta no inventará ese enlace cruzado. Trata el mapa generado como un borrador limpio y luego añade enlaces no jerárquicos tras la exportación cuando el tema lo requiera.' },
    { type: 'title', text: 'Exportación de mapas conceptuales para diapositivas, hojas de trabajo y editores', level: 3 },
    { type: 'paragraph', html: 'Elige SVG cuando desees un diagrama editable que se pueda perfeccionar en un editor vectorial, herramienta de presentación o flujo de publicación. Elige PNG cuando necesites una imagen confiable para una plataforma escolar, sistema de gestión de aprendizaje, hoja de trabajo, chat o ficha de repaso. Antes de exportar, organiza los nodos saturados, contrae los detalles opcionales y ajusta el zoom hasta que la estructura de la relación sea legible al tamaño en el que se usará el mapa.' },
    { type: 'summary', title: 'Un flujo de trabajo práctico', items: ['Pega un esquema rápido desde tus notas, borradores de IA o un folleto del curso.', 'Corrige la sangría hasta que cada idea secundaria quede debajo del padre correcto.', 'Acorta las etiquetas para que los nodos sigan siendo legibles en el lienzo y en la imagen exportada.', 'Separa las ramas saturadas arrastrándolas y contrae los detalles que no se necesiten en la versión final.', 'Descarga SVG para seguir editando o PNG para compartir de inmediato.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
