import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'flujo-pomodoro' as const;
const title = 'Pomodoro Flow';
const description = 'Domina tu productividad con una gestión del tiempo centrada en el enfoque zen. Personaliza tus ciclos de trabajo y descanso, registra interrupciones y visualiza tus patrones de concentración en tiempo real.';

const faqItems = [
  { question: '¿Qué es la Técnica Pomodoro?', answer: 'La Técnica Pomodoro es un método de gestión del tiempo que utiliza intervalos de trabajo concentrado (normalmente de 25 minutos) seguidos de descansos cortos. Esta herramienta la amplía con ciclos personalizables y estadísticas detalladas.' },
  { question: '¿Puedo personalizar las duraciones de trabajo y descanso?', answer: '¡Sí! Puedes elegir entre tres preajustes (Semilla: 25/5, Árbol: 50/10, Montaña: 90/15) o ajustar los tiempos sobre la marcha con los botones de +5 y -5 minutos.' },
  { question: '¿Para qué sirve el seguimiento de interrupciones?', answer: 'Cada vez que haces clic en el botón de distracción, la herramienta registra una interrupción. Esto ayuda a calcular tu Puntuación de Enfoque e identificar patrones en tu concentración.' },
  { question: '¿Cómo se calcula la Puntuación de Enfoque?', answer: 'Puntuación de Enfoque = ((Tiempo de Trabajo - Interrupciones × 2) / Tiempo de Trabajo) × 100. Esto tiene en cuenta el coste cognitivo del cambio de contexto.' },
  { question: '¿Puedo exportar los datos de mi sesión?', answer: 'Sí. Puedes copiar el resumen de tu sesión en formato Markdown (ideal para Notion u Obsidian) o compartir un resumen visual en redes sociales.' },
];

const howToItems = [
  { name: 'Introduce tu tarea', text: 'Escribe en qué vas a trabajar. Esto te ayuda a mantener el contexto y la intención.' },
  { name: 'Elige un ciclo', text: 'Elige Semilla (25/5) para tareas rápidas, Árbol (50/10) para trabajo estándar o Montaña (90/15) para un enfoque profundo.' },
  { name: 'Pulsa empezar y concéntrate', text: 'El temporizador comienza. Haz clic en el anillo para pausar. Usa +5/-5 para ajustar si es necesario. La barra de título muestra el tiempo restante.' },
  { name: 'Registra las interrupciones', text: '¿Te has distraído? Haz clic en el botón de Alerta de Distracción. La herramienta lo registrará para calcular tu Puntuación de Enfoque.' },
  { name: 'Revisa tu cosecha', text: 'Tras la sesión, consulta tus estadísticas: Puntuación de Enfoque, desglose de tareas y el mapa de calor mensual de tu productividad.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: '¿En qué vas a trabajar?',
    selectCycle: 'Elige tu ciclo de enfoque',
    startButton: 'Empezar',
    seed: 'Semilla',
    tree: 'Árbol',
    mountain: 'Montaña',
    timer: 'Temporizador',
    pauseButton: 'Pausa',
    resumeButton: 'Reanudar',
    distractionButton: 'Alerta de Distracción',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Enfoque',
    breakTime: 'Descanso',
    sessionComplete: 'Sesión Completada',
    endSession: 'Finalizar Sesión',
    focusScore: 'Puntuación de Enfoque',
    totalTime: 'Tiempo Total',
    interruptions: 'Interrupciones',
    taskBreakdown: 'Desglose de Tareas',
    monthlyHeatmap: 'Actividad Mensual',
    copyMarkdown: 'Copiar Markdown',
    shareImage: 'Compartir',
    wellnessMessage: 'Tómate un respiro, te lo has ganado',
    sessionSummary: 'Resumen de la Sesión',
    newSession: 'Nueva Sesión',
    copied: '¡Copiado!',
    unnamedTask: 'Tarea sin nombre',
    breakTimeNotification: '¡Tiempo de descanso!',
    focusTimeNotification: '¡Hora de concentrarse!',
    interruptionsLabel: 'Interrupciones:',
    studySession: 'Sesión de Estudio',
  },
  seo: [
    { type: 'title', text: 'Domina tu Concentración con Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'La productividad no consiste en trabajar más duro, sino en trabajar de forma más inteligente. <strong>Pomodoro Flow</strong> combina la probada Técnica Pomodoro con un diseño zen y analíticas en tiempo real para ayudarte a entender <em>cómo</em> trabajas mejor.' },
    { type: 'title', text: 'Por qué funciona el Pomodoro', level: 3 },
    { type: 'paragraph', html: 'Los seres humanos no estamos hechos para maratones de hiperenfoque de 8 horas. Nuestros cerebros funcionan mejor en ciclos de trabajo concentrado seguidos de descansos reparadores. La Técnica Pomodoro convierte esto en un ritual sencillo: trabaja intensamente durante 25 minutos, descansa 5, repite.' },
    { type: 'paragraph', html: 'Pero cada tarea es diferente. Por eso Pomodoro Flow ofrece tres ciclos: <strong>Semilla</strong> para tareas rápidas (25/5), <strong>Árbol</strong> para tu rutina diaria (50/10) y <strong>Montaña</strong> para sesiones de trabajo profundo (90/15).' },
    { type: 'title', text: 'El Verdadero Poder: El Seguimiento de Interrupciones', level: 3 },
    { type: 'paragraph', html: 'Trabajas durante 50 minutos y crees que lo has bordado. Pero, ¿te has distraído 5 veces? Cada interrupción tiene un coste en el cambio de contexto. Pomodoro Flow registra esto con un solo botón (Alerta de Distracción) y calcula tu <strong>Puntuación de Enfoque</strong>, una métrica real de tu concentración.' },
    { type: 'paragraph', html: 'Con el tiempo, verás qué tareas, momentos del día o entornos te permiten alcanzar tu mejor enfoque. Ahí es donde ocurre tu trabajo de mayor impacto.' },
    { type: 'title', text: 'Funciones que no te estorban', level: 3 },
    { type: 'list', items: [
      'Diseño Zen-Tech: Modo oscuro, glassmorphism y un temporizador centrado que se convierte en lo único que ves.',
      'Barra de Título en Vivo: La pestaña de tu navegador muestra la cuenta atrás, para que sepas el tiempo de un vistazo.',
      'Tiempos Flexibles: Ajusta los tiempos de trabajo/descanso sobre la marcha sin reiniciar.',
      'Exportación de Sesión: Copia tu resumen como Markdown o comparte una imagen en redes sociales.',
      'Mapa de Calor Mensual: Mira tus patrones de productividad. ¿Qué días son tus picos de enfoque?',
    ] },
    { type: 'title', text: 'La Psicología del "Estado de Flow"', level: 3 },
    { type: 'paragraph', html: 'El psicólogo Mihaly Csikszentmihalyi define el <strong>flow</strong> como el estado en el que el desafío se encuentra con la habilidad y el tiempo desaparece. Pomodoro Flow elimina distracciones, establece límites de tiempo claros y te da feedback inmediato: las tres condiciones para el estado de flow.' },
    { type: 'tip', html: '<strong>Consejo Pro:</strong> Cuando estés en "flow", no te interrumpas. Si el temporizador suena pero estás a mitad de un pensamiento, dale a reanudar y sigue. Lo bueno de registrar las interrupciones es que verás la diferencia entre el caos externo y tu propio impulso.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
