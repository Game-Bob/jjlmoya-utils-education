import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Generador de Flashcards Interactivo y Mazos de Estudio';
const description = 'Potencia tu aprendizaje con recuerdo activo y repetición espaciada. Crea tarjetas personalizadas, estudia con giros 3D y exporta/importa tus mazos.';

const faqItems = [
  { question: '¿Qué es el recuerdo activo?', answer: 'El recuerdo activo es un principio de aprendizaje que consiste en poner a prueba tu memoria recuperando información activamente, en lugar de revisar o leer apuntes de forma pasiva.' },
  { question: '¿Cómo funciona la repetición espaciada?', answer: 'La repetición espaciada es un método por el cual repasas las tarjetas difíciles con más frecuencia y las fáciles con menos frecuencia en intervalos de tiempo crecientes.' },
  { question: '¿Cómo puedo guardar mis tarjetas personalizadas?', answer: 'Puedes exportar tu mazo como un archivo JSON. Para volver a estudiar más tarde, haz clic en el botón de importar y sube ese archivo.' },
  { question: '¿Para qué sirven las calificaciones de Fácil, Medio y Difícil?', answer: 'Te ayudan a clasificar lo bien que recordaste la tarjeta para centrar tus repasos en lo que más te cuesta.' },
];

const howToItems = [
  { name: 'Crea una Tarjeta', text: 'Introduce la pregunta en el campo de la parte frontal y la respuesta en la parte trasera, y haz clic en Añadir Tarjeta.' },
  { name: 'Repasa el Mazo', text: 'Haz clic en cualquier tarjeta del visor para voltearla y revelar la respuesta.' },
  { name: 'Evalúa tu Memoria', text: 'Valora cómo de bien recordaste la respuesta usando los botones de Fácil, Medio o Difícil.' },
  { name: 'Guarda tu Sesión', text: 'Usa el botón de exportar para descargar tu mazo personalizado y poder cargarlo de nuevo.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Creador de Flashcards',
    questionLabel: 'Frente (Pregunta)',
    answerLabel: 'Atrás (Respuesta)',
    addCard: 'Añadir Tarjeta',
    questionPlaceholder: 'Ej: ¿Cuál es la capital de Francia?',
    answerPlaceholder: 'Ej: París',
    reviewMode: 'Sesión de Estudio',
    cardIndex: 'Tarjeta',
    flipCard: 'Haz clic para voltear',
    nextCard: 'Siguiente',
    prevCard: 'Anterior',
    easy: 'Fácil',
    medium: 'Medio',
    hard: 'Difícil',
    resetSession: 'Reiniciar Progreso',
    importExport: 'Gestión del Mazo',
    importDeck: 'Importar JSON',
    exportDeck: 'Exportar JSON',
    exportSelected: 'Exportar Selección',
    exportAll: 'Exportar Todo',
    emptyDeckWarning: 'Tu mazo está vacío. Crea una tarjeta o importa un mazo para empezar a estudiar.',
    sampleQuestion1: '¿Qué es el recuerdo activo?',
    sampleAnswer1: 'Una técnica de aprendizaje que implica estimular activamente la recuperación de la memoria durante el proceso de aprendizaje.',
    sampleQuestion2: '¿Quién formuló la hipótesis de la curva del olvido?',
    sampleAnswer2: 'Hermann Ebbinghaus, quien estudió la naturaleza exponencial del olvido de la información a lo largo del tiempo.',
    aiPromptGenerator: 'Asistente de Flashcards IA',
    aiTopicsLabel: 'Introduce los temas o notas de examen',
    aiTopicsPlaceholder: 'Ej: Examen de matemáticas que cubre derivadas, integrales y límites...',
    generatePromptBtn: 'Generar Prompt IA',
    aiPromptOutputLabel: 'Copia esta prompt en ChatGPT/Gemini',
    copyPromptBtn: 'Copiar al portapapeles',
    selectAll: 'Seleccionar todo',
    deleteCategory: 'Eliminar categoría',
    deleteConfirmMsg: '¿Estás seguro de que deseas eliminar la categoría y todas sus tarjetas?',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    pasteJsonTitle: 'Pegar JSON de Flashcards',
    pasteJsonPlaceholder: 'Pega aquí el JSON generado por la IA...',
    importBtn: 'Importar',
    aiPromptTemplate: 'Actúa como un asistente educativo. Genera un conjunto de flashcards para los siguientes temas:\n"{topics}"\n\nDevuelve el resultado formateado únicamente dentro de un bloque de código markdown con el identificador "json" (utilizando triple comilla invertida) para que sea fácil de copiar. No incluyas ningún otro texto markdown fuera del bloque de código. Utiliza exactamente esta estructura:\n```json\n{\n  "categories": ["Examen de Matemáticas"],\n  "deck": [\n    {\n      "question": "[Frente de la Tarjeta / Pregunta]",\n      "answer": "[Atrás de la Tarjeta / Respuesta]",\n      "category": "Examen de Matemáticas",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Optimiza tu estrategia de estudio con recuerdo activo y repetición espaciada', level: 2 },
    { type: 'paragraph', html: 'Las flashcards son ampliamente reconocidas como una de las herramientas más efectivas para la memorización y retención a largo plazo. Al combinar la recuperación activa con una sesión estructurada de autoevaluación, puedes identificar tus puntos débiles y estudiar de manera eficiente.' },
    { type: 'title', text: 'Recuerdo activo frente a métodos de aprendizaje pasivo', level: 3 },
    { type: 'paragraph', html: 'Muchos estudiantes confían en técnicas de revisión pasiva como subrayar texto o releer apuntes. La ciencia cognitiva demuestra que el verdadero aprendizaje ocurre al forzar al cerebro a recuperar la información.' },
    { type: 'table', headers: ['Método de Estudio', 'Compromiso Cognitivo', 'Tasa de Retención', 'Ideal para'], rows: [
      ['Flashcards Interactivas', 'Alto (Recuerdo Activo)', 'Excelente', 'Vocabulario, fórmulas, conceptos clave, fechas.'],
      ['Resumir textos', 'Medio (Síntesis)', 'Moderado', 'Comprender narrativas complejas y argumentos.'],
      ['Releer apuntes', 'Bajo (Revisión Pasiva)', 'Pobre', 'Contacto inicial con materiales nuevos.'],
    ] },
    { type: 'title', text: 'Pros y contras del aprendizaje basado en flashcards', level: 3 },
    { type: 'proscons', title: 'Comparativa de beneficios y limitaciones de las flashcards', items: [
      { pro: 'Fuerza la recuperación mental activa en lugar del reconocimiento pasivo.', con: 'Puede llevar bastante tiempo crearlas inicialmente.' },
      { pro: 'Identifica brechas de conocimiento de inmediato.', con: 'No es ideal para comprender argumentos extremadamente complejos.' },
      { pro: 'Muy portátil y personalizable para cualquier asignatura.', con: 'Requiere disciplina de estudio regular para aprovechar la repetición espaciada.' }
    ] },
    { type: 'title', text: 'Creación de flashcards mediante Inteligencia Artificial', level: 3 },
    { type: 'paragraph', html: 'Crear mazos de estudio manualmente puede resultar tedioso. Con nuestro <strong>Asistente de Flashcards IA</strong> integrado, puedes convertir apuntes o temas de examen en mazos listos para importar. Describe los temas de examen, copia la prompt generada y pégala en cualquier modelo de IA (como ChatGPT, Gemini o Claude) para recibir la estructura JSON exacta.' },
    { type: 'title', text: 'Colaboración en grupo: Exportación selectiva y fusión', level: 3 },
    { type: 'paragraph', html: 'Estudiar en grupo es más productivo al dividir el trabajo. Nuestro gestor te permite exportar solo las categorías que desees. Cuando un compañero importa tu archivo, el sistema realiza una <strong>fusión (merge)</strong> dinámica de las tarjetas y categorías con su mazo existente, evitando la pérdida de su propio progreso.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
