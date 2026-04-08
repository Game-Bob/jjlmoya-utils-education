import type { ToolLocaleContent } from '../../../types';

const slug = 'generador-citas-bibliograficas' as const;
const title = 'Generador de Citas Bibliográficas' as const;
const description = 'Crea referencias automáticas en formato APA, MLA y Vancouver con guardado persistente.' as const;
const faqTitle = 'Preguntas Frecuentes' as const;
const bibliographyTitle = 'Referencias Bibliográficas' as const;

const ui = {
    format: 'Formato',
    book: 'Libro',
    website: 'Sitio Web',
    article: 'Artículo',
    publicationYear: 'Año de publicación',
    authors: 'Autores (Apellidos, Iniciales)',
    title: 'Título',
    publisher: 'Editorial',
    locationUrl: 'Ciudad / URL',
    preview: 'Vista Previa',
    saveToList: 'Guardar en mi lista',
    mySavedCitations: 'Mis Citas Guardadas',
    noSavedCitations: 'No tienes citas guardadas.',
    clickToCopy: 'Haz clic en la cita para copiarla directamente',
    apa: 'APA (7ª edición)',
    mla: 'MLA (9ª edición)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Generador de Citas Bibliográficas: Domina APA, MLA y Vancouver', level: 2 },
    { type: 'paragraph', html: 'Citar correctamente tus fuentes no es solo una cuestión de ética académica; es la base para dar credibilidad a tu trabajo y evitar el plagio. Nuestra herramienta te permite generar referencias automáticas en los formatos más utilizados en el mundo.' },
    { type: 'title', text: 'Los Estilos de Citación más Importantes', level: 3 },
    { type: 'paragraph', html: 'Dependiendo de tu área de estudio, se te exigirá un formato específico. No es capricho de los profesores; cada estilo está diseñado para priorizar la información más relevante de cada disciplina.' },
    { type: 'title', text: 'APA (ciencias sociales)', level: 4 },
    { type: 'paragraph', html: 'Creado por la <strong>American Psychological Association</strong>, se centra en la fecha de publicación para dar contexto histórico a las investigaciones. Es el estándar en Psicología, Educación y Sociología.' },
    { type: 'title', text: 'Vancouver (medicina)', level: 4 },
    { type: 'paragraph', html: 'Es un sistema numérico donde las fuentes se citan por orden de aparición. Es el formato universal en biomedicina y ciencias de la salud, facilitando la lectura de textos con múltiples referencias.' },
    { type: 'title', text: '¿Cómo citar un libro paso a paso?', level: 3 },
    { type: 'paragraph', html: 'Aunque nuestra herramienta lo automatiza, conocer los elementos básicos te ayudará a identificar qué información necesitas recopilar de tus fuentes físicas o digitales.' },
    { type: 'list', items: ['<strong>Autores:</strong> Apellido seguido por la inicial del nombre.', '<strong>Año:</strong> Año de publicación entre paréntesis o al final según el estilo.', '<strong>Título:</strong> Debe aparecer en cursiva para libros y obras completas.', '<strong>Editorial:</strong> La empresa responsable de la publicación de la obra.', '<strong>URL:</strong> En fuentes digitales, el enlace directo o el DOI para su localización permanente.'] },
    { type: 'title', text: 'Diferencias Visuales entre Formatos', level: 3 },
    { type: 'table', headers: ['Elemento', 'APA (7ª)', 'MLA (9ª)', 'Vancouver'], rows: [['Autor', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Fecha', '(2024)', '2024.', '2024.'], ['Título', 'En cursiva', 'Entrecomillado', 'Normal']] },
    { type: 'tip', html: 'Siempre consulta la guía específica de tu universidad. Aunque APA es un estándar global, muchas instituciones tienen pequeñas variaciones locales o exigen el uso de una edición concreta de las normas.' },
    { type: 'title', text: 'Evitar el Plagio Académico', level: 3 },
    { type: 'paragraph', html: 'El plagio no siempre es intencionado. Muchas veces ocurre por un descuido en la toma de notas o por no saber cómo referenciar una idea que no es propia. Usar un generador de citas como este te asegura que cada autor reciba el crédito que merece, protegiendo al mismo tiempo tu integridad académica.' },
    { type: 'paragraph', html: 'Recuerda que incluso si parafraseas una idea con tus propias palabras, debes incluir la cita correspondiente en el texto y su referencia en la bibliografía final.' },
];

const faq = [
    {
        question: '¿Qué formatos soporta el generador?',
        answer: 'Actualmente soporta APA (7ª edición), MLA (9ª edición) y Vancouver, que son los formatos más comunes en ciencias sociales, humanidades y salud.',
    },
    {
        question: '¿Puedo guardar mis citas?',
        answer: 'Sí, el generador guarda automáticamente tu historial en el almacenamiento local de tu navegador para que puedas consultarlas más tarde.',
    },
    {
        question: '¿Cuál es la diferencia entre APA y Vancouver?',
        answer: 'APA usa el sistema autor-fecha (Perez, 2024), mientras que Vancouver usa un sistema numérico por orden de aparición en el texto.',
    },
    {
        question: '¿Es gratis el generador de citas?',
        answer: 'Totalmente. Es una herramienta gratuita diseñada para ayudar a estudiantes y profesionales en la redacción de sus trabajos académicos.',
    },
] as const;

const howTo = [
    {
        name: 'Elige el tipo de fuente',
        text: 'Selecciona si tu fuente es un libro, un sitio web o un artículo de revista profesional.',
    },
    {
        name: 'Completa los datos',
        text: 'Introduce el autor, título, año y editorial o URL. Cuantos más datos pongas, más precisa será la cita.',
    },
    {
        name: 'Copia o guarda',
        text: 'Copia la cita directamente con un clic o pulsa "Guardar en mi lista" para añadirla a tu historial persistente.',
    },
] as const;

const bibliography = [
    {
        name: 'Manual de Normas APA 7ª Edición',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'Guía de Estilo MLA (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Normas de Vancouver - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
