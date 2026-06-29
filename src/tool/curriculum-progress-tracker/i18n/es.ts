import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'calculadora-de-progreso-de-creditos-y-nota-proyectada' as const;
const title = 'Calculadora de Progreso de Créditos y Nota Media Proyectada';
const description = 'Organiza tu grado semestre a semestre, calcula tu nota media real y proyectada, y simula la nota media necesaria en las asignaturas restantes para alcanzar tus objetivos académicos.';

const faqItems = [
  {
    question: '¿Cómo empiezo a planificar mi grado?',
    answer: 'Simplemente añade semestres e introduce tus asignaturas directamente en el panel. Puedes configurar los créditos, seleccionar el estado de cada asignatura y registrar las notas.',
  },
  {
    question: '¿Cuál es la diferencia entre la Nota Media Real y la Proyectada?',
    answer: 'La Nota Media Real se calcula utilizando únicamente las asignaturas completadas con notas confirmadas. La Nota Media Proyectada simula tu promedio final al incorporar asignaturas en curso y planificadas usando tus notas esperadas.',
  },
  {
    question: '¿Qué muestra el indicador de Nota Requerida?',
    answer: 'Calcula la nota media exacta que necesitas mantener en todas las asignaturas restantes (en curso o planificadas) para alcanzar tu Nota Media Objetivo global.',
  },
  {
    question: '¿Se guardan mis datos académicos de forma segura?',
    answer: 'Sí. Todos los datos permanecen en tu navegador web utilizando el almacenamiento local. Ninguna información se sube a servidores externos. También puedes descargar una copia de tu plan usando el botón de exportar.',
  },
];

const howToItems = [
  { name: 'Configura tus metas', text: 'Establece tu objetivo de créditos totales de graduación y tu nota media objetivo en la parte superior del panel.' },
  { name: 'Crea tu plan de estudios', text: 'Añade semestres e introduce tus asignaturas asignando los créditos correspondientes según tu plan oficial.' },
  { name: 'Actualiza notas y estados', text: 'Cambia los estados de las asignaturas entre Completada, En Curso y Planificada, introduciendo las notas reales a medida que las finalices.' },
  { name: 'Analiza las notas necesarias', text: 'Revisa el analizador de notas para saber si tu objetivo es viable y conocer la media exacta que necesitas obtener en los siguientes semestres.' },
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
    degreeNameLabel: 'Nombre de la Titulación',
    graduationCreditsLabel: 'Créditos Totales para Graduación',
    targetGpaLabel: 'Nota Media Objetivo',
    realGpaLabel: 'Nota Media Real',
    projectedGpaLabel: 'Nota Media Proyectada',
    creditsCompletedLabel: 'Créditos Completados',
    requiredGradeLabel: 'Nota Requerida (Restante)',
    addSemesterButton: 'Añadir Semestre',
    addCourseButton: 'Añadir Asignatura',
    exportPlanButton: 'Exportar Plan',
    importPlanButton: 'Importar Plan',
    semesterNamePlaceholder: 'Nombre del semestre (ej. Otoño Año 1)',
    courseNamePlaceholder: 'Título de la asignatura',
    creditsPlaceholder: 'Créditos',
    gradePlaceholder: 'Nota',
    statusCompleted: 'Completada',
    statusInProgress: 'En Curso',
    statusPlanned: 'Planificada',
    importError: 'No se pudo importar el plan de estudios. Por favor, verifica el formato del archivo.',
    uploadHint: 'Todos los datos se guardan localmente en tu navegador web. Los procesos de importación y exportación se realizan completamente en tu dispositivo.',
    statusMessageSuccess: 'Estás en camino de alcanzar tu nota media objetivo.',
    statusMessageWarning: 'Necesitas una nota media de {grade} o superior en las asignaturas restantes para alcanzar tu nota media objetivo.',
    statusMessageImpossible: 'Es matemáticamente imposible alcanzar tu nota media objetivo con la configuración actual de tus asignaturas.',
    degreeNamePlaceholder: 'ej. Grado en Ingeniería Informática',
    deleteSemesterLabel: 'Eliminar Semestre',
    deleteCourseLabel: 'Eliminar Asignatura',
    semesterTitleTemplate: 'Semestre {num}',
  },
  seo: [
    { type: 'title', text: 'Cómo proyectar tu promedio de graduación y gestionar tus créditos académicos', level: 2 },
    { type: 'paragraph', html: 'Planificar una carrera universitaria requiere más que mantener una lista de asignaturas aprobadas. Para mantenerte en el camino de conseguir honores, acceder a posgrados o renovar becas, necesitas comprender tu trayectoria futura. Un simulador de progreso de créditos te permite modelar diferentes escenarios, proyectar tu promedio final y entender el impacto de tus notas actuales antes de los exámenes finales.' },
    { type: 'summary', title: 'Objetivos clave de planificación para seguir cada semestre', items: [
      'Visualiza la distancia entre tus créditos completados y los requisitos totales de graduación.',
      'Diferencia tus notas confirmadas de las proyecciones hipotéticas para planificar con base en la realidad.',
      'Determina el promedio mínimo necesario en los próximos semestres para recuperarte de una nota baja o asegurar tu objetivo.',
      'Construye una hoja de ruta totalmente adaptable para toda tu trayectoria académica.',
    ] },
    { type: 'title', text: 'Los cálculos fundamentales detrás de tu nota media', level: 3 },
    { type: 'paragraph', html: 'La nota media de un estudiante no es un promedio simple. Es un cálculo ponderado donde las asignaturas con más créditos tienen mayor peso en la nota final. Debido a esto, suspender una asignatura de 6 créditos afecta el doble que una de 3 créditos, y de la misma manera, obtener una nota alta en una asignatura troncal tiene un mayor beneficio.' },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Nota Media Real', label: 'Calculada únicamente con asignaturas finalizadas' },
        { value: 'Nota Proyectada', label: 'Simula asignaturas aprobadas y notas esperadas' },
        { value: 'Progreso de Créditos', label: 'Muestra visualmente el porcentaje completado' },
        { value: 'Nota Requerida', label: 'Promedio mínimo necesario en asignaturas futuras' },
      ],
    },
    { type: 'title', text: 'Estados de estado de las asignaturas', level: 3 },
    { type: 'paragraph', html: 'La calculadora organiza las asignaturas en tres estados operativos distintos para asegurar que las proyecciones reflejen tu situación real.' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Completada',
          description: 'Asignaturas que ya han sido aprobadas y constan en tu expediente oficial.',
          points: [
            'Determina de forma fija tu Nota Media Real.',
            'Suma de forma directa al contador de créditos completados.',
            'No se puede modificar salvo políticas de repetición de asignatura.',
          ],
        },
        {
          title: 'En Curso',
          description: 'Materias en las que estás matriculado durante el semestre actual.',
          points: [
            'Se integran en la Nota Media Proyectada usando metas simuladas.',
            'Permiten ajustar notas esperadas para prever diferentes escenarios.',
            'Actúan como el principal margen de maniobra para corregir el promedio.',
          ],
        },
        {
          title: 'Planificada',
          description: 'Materias futuras que cursarás en semestres venideros para graduarte.',
          points: [
            'Permiten realizar proyecciones académicas a largo plazo.',
            'Indispensables para calcular la distribución de la carga de créditos futuros.',
            'Determinan las metas de notas antes de la matriculación.',
          ],
        },
      ],
    },
    { type: 'title', text: 'Estrategias de recuperación de nota media', level: 3 },
    { type: 'paragraph', html: 'Cuando tu promedio desciende por debajo de tus objetivos de becas o requisitos de graduación, debes actuar estratégicamente en lugar de intentar conseguir notas perfectas al azar.' },
    {
      type: 'table',
      headers: ['Escenario', 'Análisis Matemático', 'Plan de Acción Recomendado'],
      rows: [
        ['Caída de notas en los primeros años', 'Muchos créditos restantes significan que tu promedio es muy moldeable.', 'Prioriza las asignaturas futuras de alto crédito. Un buen rendimiento ahora diluirá fácilmente los tropiezos iniciales.'],
        ['Caída de notas en el último año', 'Pocos créditos restantes significan que tu promedio está muy consolidado.', 'Concéntrate al máximo en las pocas asignaturas pendientes. Explora opciones de recuperación de asignaturas o créditos extra si existen.'],
        ['Nota media objetivo inviable', 'Los créditos restantes son insuficientes para elevar el promedio al nivel deseado.', 'Ajusta tu Nota Media Objetivo a un nivel realista o planifica cursar créditos adicionales para expandir el denominador.'],
      ],
    },
    {
      type: 'diagnostic',
      title: 'Cómo resolver una desviación en tu nota media',
      variant: 'warning',
      html: '<ul><li>Comprueba si estás subestimando el peso de los créditos de las próximas asignaturas. Las asignaturas con pocos créditos no levantarán tu media lo suficiente.</li><li>Verifica si tus notas simuladas para los semestres planificados son realistas. Esperar notas perfectas en todo puede falsear tu previsión.</li><li>Considera añadir asignaturas optativas con alto valor de créditos para mitigar notas bajas anteriores.</li></ul>',
    },
    {
      type: 'tip',
      html: '<strong>Usa el simulador antes de matricularte.</strong> Antes de seleccionar tus optativas o diseñar tu próximo semestre, introduce las asignaturas previstas junto con sus créditos. Esto te mostrará con precisión cuánto margen tienes para mantener tu promedio deseado.',
    },
    {
      type: 'card',
      title: 'Error común: Ignorar los pesos de los créditos',
      html: '<p>Muchos estudiantes dedican el mismo tiempo de estudio a todas las asignaturas. Para tu nota media, una asignatura de 6 créditos requiere el doble de atención estratégica que una de 3 créditos. Usa esta herramienta para identificar las asignaturas de alto impacto y organizar tu estudio.</p>',
    },
    {
      type: 'proscons',
      title: 'Comparativa: Expediente estático frente a simulador activo',
      items: [
        {
          pro: 'Prevé los requisitos futuros en lugar de solo reportar el historial pasado.',
          con: 'Las proyecciones son tan precisas como las notas estimadas que introduzcas.',
        },
        {
          pro: 'Calcula las notas exactas necesarias, eliminando la incertidumbre al estudiar.',
          con: 'No tiene en cuenta de forma automática políticas específicas de la universidad como la anulación de convocatorias.',
        },
        {
          pro: 'Funciona totalmente en tu navegador web para garantizar tu privacidad académica.',
          con: 'Depende del almacenamiento local del navegador; borrar el historial del navegador borrará el plan a menos que lo exportes.',
        },
      ],
    },
    {
      type: 'glossary',
      title: 'Conceptos clave de planificación académica',
      items: [
        { term: 'Nota Media', definition: 'La métrica que resume el rendimiento de un estudiante, calculada multiplicando cada nota por sus créditos y dividiendo por los créditos totales.' },
        { term: 'Promedio Ponderado', definition: 'Método de cálculo donde algunos elementos influyen más en el resultado según su peso asignado (los créditos de la materia).' },
        { term: 'Créditos Completados', definition: 'La suma total de créditos de las asignaturas superadas y marcadas como Completadas.' },
        { term: 'Nota Media Proyectada', definition: 'Estimación de tu nota media final de graduación combinando tus notas confirmadas con las notas simuladas para las materias restantes.' },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
