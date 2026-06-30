import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'optimizador-horario-academico' as const;
const title = 'Optimizador de Horario Académico';
const description = 'Crea un horario de clases semanal visual, organiza las asignaturas por colores, detecta conflictos de horas y exporta tu horario en un archivo de calendario .ics.';

const faqItems = [
  {
    question: '¿Cómo funciona el detector de conflictos?',
    answer: 'Cada bloque de clase tiene un día, hora de inicio y duración. La herramienta compara cada par de bloques e indica si coinciden en el mismo día y si sus intervalos de tiempo se cruzan.'
  },
  {
    question: '¿Puedo mover las clases directamente en el calendario?',
    answer: 'Sí. Arrastra un bloque de clase a la columna de otro día para probar una nueva distribución semanal. El estado de los conflictos se actualizará inmediatamente al moverlo.'
  },
  {
    question: '¿Qué incluye la exportación de archivos ICS?',
    answer: 'La exportación genera un archivo iCalendar estándar en el que cada clase es un evento, detallando la asignatura, el aula, la hora de inicio y de fin. Puedes importarlo en la mayoría de aplicaciones de calendario.'
  },
  {
    question: '¿Por qué debería organizar las asignaturas por colores?',
    answer: 'Los colores facilitan la lectura visual de un horario denso. Utilizar colores distintos para prácticas, clases teóricas, seminarios o asignaturas complejas ayuda a identificar rápidamente los días más cargados y los conflictos.'
  }
];

const howToItems = [
  { name: 'Añadir detalles de la clase', text: 'Introduce la asignatura, el aula, el día, la hora de inicio, la duración y el color.' },
  { name: 'Colocar bloques en el horario semanal', text: 'Usa los bloques generados para ver cómo se ajusta cada clase a tu distribución de la semana.' },
  { name: 'Resolver conflictos', text: 'Busca los bloques de conflicto resaltados y mueve o edita las clases hasta que el panel de conflictos esté limpio.' },
  { name: 'Exportar tu calendario', text: 'Descarga el archivo .ics e impórtalo en Google Calendar, Apple Calendar, Outlook u otras aplicaciones.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Asignatura',
    roomLabel: 'Aula',
    dayLabel: 'Día',
    startLabel: 'Inicio',
    durationLabel: 'Duración',
    colorLabel: 'Color',
    addClass: 'Añadir clase',
    saveClass: 'Guardar clase',
    newClass: 'Nueva clase',
    exportICS: 'Exportar .ics',
    conflictLabel: 'Conflictos de horario',
    noConflicts: 'No se han detectado conflictos',
    removeLabel: 'Eliminar clase',
    editHint: 'Selecciona una clase para editarla, o arrástrala a otro día y hora.',
    weekendDaysLabel: 'Días de fin de semana',
    saturdayLabel: 'Sábado',
    sundayLabel: 'Domingo',
    weekDayLabels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    weekendDayShortLabels: ['Sáb', 'Dom'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 h', '2 h', '3 h'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Cálculo',
    defaultRoom: 'Aula 204',
    defaultNewSubject: 'Nueva clase',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Cálculo', room: 'Aula 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Literatura', room: 'Laboratorio B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Física', room: 'Salón de Actos', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'horario-academico.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'conflicto',
    overlapPlural: 'conflictos',
    detectedLabel: 'detectado(s)',
    classEditorAriaLabel: 'Editor de clase',
    weeklyScheduleAriaLabel: 'Horario semanal',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias y Estándares de Calendario',
  },
  seo: [
    { type: 'title', text: 'Cómo diseñar un horario académico semanal que realmente funcione', level: 2 },
    { type: 'paragraph', html: 'Un buen horario hace mucho más que listar asignaturas. Te muestra dónde se sobrecarga tu semana, qué días quedan fragmentados y si dos clases coinciden a la misma hora. Un optimizador visual de horarios académicos hace visibles estos problemas antes de que se conviertan en clases perdidas, prisas o problemas de matrícula.' },
    { type: 'summary', title: 'Qué verificar antes de cerrar un horario', items: [
      'Que no coincidan dos asignaturas obligatorias el mismo día.',
      'Activar el sábado y el domingo si tu centro ofrece clases de fin de semana.',
      'Asignar colores específicos a las prácticas, seminarios y clases teóricas.',
      'Evitar acumular asignaturas difíciles consecutivamente sin descansos.',
      'Exportar tu distribución final a tu aplicación de calendario habitual.'
    ] },
    { type: 'title', text: 'Por qué las cuadrículas visuales son mejores que las listas', level: 3 },
    { type: 'paragraph', html: 'Las listas de cursos ocultan la saturación de tiempo al separar cada asignatura de la semana. Una cuadrícula revela la densidad del horario de inmediato. Puedes ver rápidamente si el lunes tiene demasiadas horas lectivas, si una teoría interfiere con una práctica, si las sesiones de fin de semana alteran el ritmo de tu semana, o si las clases consecutivas en diferentes aulas provocan desplazamientos imposibles.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Lista de cursos', description: 'Útil para códigos de matrícula, pero ineficaz para medir la carga semanal.' },
      { title: 'Cuadrícula semanal', description: 'La mejor opción para entender la distribución, huecos y conflictos de un vistazo.', highlight: true },
      { title: 'Solo aplicación de calendario', description: 'Muy práctica tras planificar, pero lenta para probar diferentes opciones.' }
    ] },
    { type: 'title', text: 'Cómo funciona la detección de solapamientos', level: 3 },
    { type: 'paragraph', html: 'Dos clases entran en conflicto cuando se programan el mismo día y sus horas coinciden de algún modo. Por ejemplo, una clase de 10:00 a 12:00 coincide con un seminario de 11:00 a 13:00 porque ambos ocupan el tramo de las 11:00. La herramienta evalúa cada bloque frente a los demás y destaca los conflictos en el calendario.' },
    { type: 'table', headers: ['Clase A', 'Clase B', 'Resultado'], rows: [
      ['Lunes 09:00-11:00', 'Lunes 11:00-13:00', 'Sin conflicto porque una empieza cuando termina la otra.'],
      ['Martes 10:00-12:00', 'Martes 11:00-13:00', 'Conflicto porque los intervalos coinciden.'],
      ['Miércoles 09:00-11:00', 'Jueves 09:00-11:00', 'Sin conflicto porque son días distintos.']
    ] },
    { type: 'title', text: 'Organización por colores para la planificación académica', level: 3 },
    { type: 'paragraph', html: 'Los colores no son solo estética. Pueden indicar el tipo de asignatura, nivel de dificultad, campus en el que se imparte o nivel de esfuerzo. Mantener una paleta consistente te ayuda a orientarte bajo presión, especialmente al comparar diferentes alternativas de matrícula.' },
    { type: 'tip', html: '<strong>Define un criterio claro para los colores.</strong> Por ejemplo, asigna un color para las clases teóricas, otro para las prácticas en laboratorio y un tono llamativo para asignaturas que exijan mucho estudio.' },
    { type: 'title', text: 'Exportación a aplicaciones de calendario', level: 3 },
    { type: 'paragraph', html: 'El formato .ics es el estándar internacional iCalendar para el intercambio de eventos. Exportar tu horario te permite cargarlo en Google Calendar, Apple Calendar, Outlook u otros sistemas de tu universidad. Una vez importado, podrás añadir recordatorios, tiempos de desplazamiento, recurrencias y tus propios bloques de estudio.' },
    { type: 'diagnostic', variant: 'warning', title: 'Antes de importar', html: 'Asegúrate de que la fecha de inicio del horario coincide con la semana deseada, comprueba la zona horaria en tu aplicación de calendario y verifica que los eventos importados no dupliquen contenidos de otros calendarios existentes.' },
    { type: 'title', text: 'Un flujo de trabajo práctico para matricularte', level: 3 },
    { type: 'list', items: [
      'Añade primero las clases obligatorias y soluciona sus conflictos antes de meter las optativas.',
      'Activa el sábado o domingo si tu institución ofrece docencia esos días.',
      'Usa los colores para distinguir clases teóricas, prácticas, seminarios y estudio autónomo.',
      'Arrastra los bloques entre días para probar diferentes combinaciones en segundos.',
      'Deja espacios visibles para comidas, traslados y descansos.',
      'Exporta tu calendario final únicamente cuando hayas resuelto todos los conflictos.'
    ] },
    { type: 'message', title: 'La planificación es un proceso iterativo', html: 'Considera la primera versión como un borrador. El horario ideal suele conseguirse tras probar diferentes combinaciones, comparar formatos y verificar que el ritmo semanal sea sostenible.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
