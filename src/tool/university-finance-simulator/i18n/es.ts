import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'simulador-financiero-universitario' as const;
const title = 'Simulador Financiero Universitario';
const description =
  'Modela el costo real de la universidad, compara escenarios de becas y proyecta los pagos de préstamos estudiantiles con una línea de tiempo visual de amortización.';

const faqItems = [
  {
    question: '¿Qué incluye este simulador en el costo total?',
    answer:
      'Combina la matrícula anual, los costos de vida mensuales, la cantidad de años de estudio y los meses en que esperas pagar gastos de manutención cada año académico. Luego resta las becas y cualquier contribución inicial antes de calcular el préstamo.',
  },
  {
    question: '¿Cómo se calcula el pago mensual del préstamo estudiantil?',
    answer:
      'La herramienta utiliza la fórmula estándar de préstamo amortizable. Convierte la tasa de interés anual en una tasa mensual y distribuye el reembolso a lo largo del número de años seleccionado.',
  },
  {
    question: '¿Puedo usarlo para préstamos familiares sin interés o subvenciones?',
    answer:
      'Sí. Establece la tasa de interés en 0 para simular un plan de pago sin intereses. También puedes aumentar la beca o la contribución inicial para reflejar subvenciones, ahorros o apoyo familiar.',
  },
  {
    question: '¿Por qué difiere tanto la cantidad prestada entre perfiles?',
    answer:
      'Los costos de vida se acumulan rápidamente a lo largo de varios años académicos. Un plan de estudiante que vive en casa y un plan de vida en el campus pueden generar cargas de deuda muy diferentes, incluso si la matrícula es la misma.',
  },
  {
    question: '¿La fecha de finalización del pago incluye períodos de carencia o planes basados en los ingresos?',
    answer:
      'No. Esta versión asume que el pago comienza en un calendario fijo normal con cuotas mensuales iguales. Es ideal para la planificación básica, no para modelar cada caso particular de las políticas de préstamos.',
  },
];

const howToItems = [
  {
    name: 'Establece tu perfil de estudio',
    text: 'Usa uno de los perfiles rápidos o mueve los controles deslizantes manualmente para reflejar tu matrícula, costos de manutención y paquete de becas.',
  },
  {
    name: 'Ajusta las condiciones de financiación',
    text: 'Elige cuánto puedes pagar por adelantado, luego establece la tasa de interés anual y los años de reembolso para reflejar las condiciones probables de tu préstamo.',
  },
  {
    name: 'Lee el panel financiero',
    text: 'Las tarjetas de resumen muestran tu costo total de estudio, el capital prestado, el pago mensual estimado y el total de intereses para evaluar la asequibilidad de un vistazo.',
  },
  {
    name: 'Inspecciona la curva de amortización',
    text: 'Usa el gráfico para ver cómo evolucionan año tras año el saldo restante, el monto total pagado y los intereses acumulados.',
  },
  {
    name: 'Abre la tabla de amortización',
    text: 'Despliega la tabla mensual si necesitas un análisis detallado de capital frente a intereses para tu presupuesto o discusiones familiares.',
  },
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
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: 'Divisa',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: 'Matrícula anual',
    monthlyLivingCost: 'Costo de vida mensual',
    studyYears: 'Años de estudio',
    studyMonthsPerYear: 'Meses de gastos de manutención por año',
    scholarshipPerYear: 'Beca por año',
    upfrontContribution: 'Contribución inicial',
    aprPercent: 'TIN',
    repaymentYears: 'Años de reembolso',
    quickProfiles: 'Perfiles rápidos',
    commuterProfile: 'Vive en casa',
    balancedProfile: 'Equilibrado',
    campusProfile: 'Vida en el campus',
    stickerCost: 'Costo total de estudio',
    borrowedPrincipal: 'Capital prestado',
    monthlyPayment: 'Pago mensual estimado',
    totalInterest: 'Intereses totales',
    projectionTitle: 'Proyección de deuda',
    scheduleTitle: 'Tabla de amortización mensual',
    chartBalance: 'Saldo restante',
    chartPaid: 'Total pagado',
    chartInterest: 'Intereses pagados',
    openSchedule: 'Ver tabla completa',
    closeSchedule: 'Ocultar tabla completa',
    monthColumn: 'Mes',
    paymentColumn: 'Pago',
    principalColumn: 'Capital',
    interestColumn: 'Interés',
    balanceColumn: 'Saldo',
    timelineLabel: 'Calendario de deuda cero',
    affordabilityHint:
      'Mantén tu pago mensual proyectado alineado con tus ingresos netos probables del primer año, no solo con tu presupuesto estudiantil actual.',
    debtFreeLabel: 'Libre de deudas después de',
    scholarshipShare: 'Cobertura de becas',
    livingShare: 'Proporción de costo de vida',
    degreeCostLabel: 'Proporción de matrícula',
    blendedCost: 'Costo anual promedio',
    totalPaid: 'Total reembolsado',
    averageYearlyCost: 'Costo promedio por año',
    plannerLabel: 'Planificador de costos',
    resultsLabel: 'Perspectiva de financiación',
    assumptionsLabel: 'Condiciones del préstamo',
    scheduleHint:
      'Detalle mes a mes de cómo se divide cada pago entre capital e intereses.',
    noDebtNeeded: 'No se necesita deuda con la configuración actual',
    exactAmount: 'Cantidad exacta',
    monthWord: 'Mes',
    paymentWord: 'pago',
    principalWord: 'capital',
    interestWord: 'interés',
    remainingWord: 'restante',
    perMonthSuffix: '/mes',
    yearsSuffix: 'años',
    monthsSuffix: 'meses',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Planifica el costo real de la universidad antes de pedir un préstamo', level: 2 },
    {
      type: 'summary',
      title: 'Para qué es útil esta calculadora de costos universitarios',
      items: [
        'Estimar el costo total de una carrera, no solo la cifra de matrícula anunciada.',
        'Comparar universidades, opciones de alojamiento y paquetes de becas bajo la misma base de deuda.',
        'Evaluar si un plan de pago parece manejable antes de comprometerse a pedir un préstamo.',
      ],
    },
    {
      type: 'paragraph',
      html: 'El folleto de una universidad suele destacar un número: la matrícula. La vida real es más compleja. También debes pagar alojamiento, comida, transporte, libros, seguros e intereses sobre el dinero prestado. Por eso, un simulador de préstamos estudiantiles útil no debe detenerse en el precio de lista. Debe ayudarte a responder la pregunta más difícil: <em>¿cuánto me costará esta decisión a lo largo de toda la carrera, cuánta deuda quedará después de las ayudas y a qué tipo de presión de pago me enfrentaré después de graduarme?</em>',
    },
    { type: 'title', text: 'Decisiones que este simulador te ayuda a tomar', level: 3 },
    {
      type: 'list',
      items: [
        'Si un paquete de becas realmente cambia el resultado de la deuda o solo suaviza el titular de marketing.',
        'Si vivir en el campus, viajar diariamente desde casa o compartir alojamiento ofrece el equilibrio más saludable a largo plazo.',
        'Si un plazo de reembolso más largo vale la pena por el pago mensual más bajo una vez que se tiene en cuenta el interés total.',
        'Si el programa sigue pareciendo viable después de incluir los costos de vida, no solo la matrícula.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Usa esto antes de decirle sí a una universidad',
      html: '<ul><li>Compare dos o tres ofertas utilizando los mismos supuestos de costo de vida.</li><li>Pruebe un escenario de beca en el mejor de los casos y otro más realista.</li><li>Compruebe si el pago mensual sigue siendo aceptable si la deuda aumenta o el reembolso lleva más tiempo.</li></ul>',
    },
    { type: 'title', text: 'Cómo leer los resultados sin engañarse a uno mismo', level: 3 },
    {
      type: 'table',
      headers: ['Métrica', 'Qué significa', 'Por qué importa'],
      rows: [
        ['Costo total de estudio', 'Matrícula más costos de manutención a lo largo de toda la carrera', 'Este es el presupuesto real que estás intentando financiar, no el número simplificado del folleto'],
        ['Capital prestado', 'Cantidad que queda por cubrir después de las becas y el dinero inicial', 'Esta es la deuda que te acompañará en el reembolso y merece la mayor atención'],
        ['Pago mensual estimado', 'Cantidad fija de reembolso basada en la tasa de interés y la duración del reembolso', 'Es el mejor indicador rápido de la presión financiera posterior a la graduación'],
        ['Intereses totales', 'Costo adicional pagado sobre la cantidad prestada', 'Ayuda a ver si un pago mensual más bajo se está convirtiendo silenciosamente en un préstamo mucho más caro'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'variables clave para poner a prueba primero' },
        { value: '2', label: 'escenarios para comparar como mínimo' },
        { value: '1', label: 'cifra de pago mensual para verificar' },
        { value: '0', label: 'dependencia exclusiva de la matrícula que deberías aceptar' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Plazo más corto',
          description: 'Mejor cuando es probable que tu flujo de caja futuro sea lo suficientemente fuerte como para absorber un pago más alto.',
          highlight: true,
          points: [
            'Pago mensual más alto',
            'Intereses totales más bajos',
            'La deuda desaparece más rápido',
          ],
        },
        {
          title: 'Plazo más largo',
          description: 'Mejor cuando necesitas un respiro al principio, pero solo si entiendes el costo adicional a largo plazo.',
          points: [
            'Pago mensual más bajo',
            'Intereses totales más altos',
            'Más flexibilidad pero mayor costo a largo plazo',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Prueba de estrés útil:</strong> reduce la beca, aumenta el alquiler ligeramente y extiende el reembolso unos años. Si el plan solo funciona en la versión más optimista, aún no es un plan robusto.',
    },
    { type: 'title', text: 'Una forma práctica de comparar dos universidades', level: 3 },
    {
      type: 'list',
      items: [
        'Introduce primero las mismas suposiciones de costo de vida para ambas universidades para no comparar realidades diferentes.',
        'Luego actualiza solo las variables que realmente difieren: matrícula, beca y probable opción de vivienda.',
        'Concéntrate en el capital prestado y el pago mensual antes de centrarte en el prestigio o la marca.',
        'Si una opción solo gana porque asumes costos de manutención inusualmente baratos, tómalo como una señal de advertencia.',
      ],
    },
    {
      type: 'card',
      title: 'Lo que las familias suelen pasar por alto',
      html: 'Una universidad que parece más barata en matrícula puede generar <strong>más deuda en general</strong> si los costos de vida son estructuralmente más altos o si el apoyo de las becas es menos estable año tras año.',
    },
    { type: 'title', text: 'Límites de cualquier proyección de costos universitarios', level: 3 },
    {
      type: 'proscons',
      title: 'Puntos fuertes y límites',
      items: [
        {
          pro: 'Estimación rápida para comparar múltiples opciones de estudio',
          con: 'No modela períodos de carencia, aplazamientos o reembolsos basados en ingresos',
        },
        {
          pro: 'Visibiliza los costos de vida en lugar de ocultarlos tras la matrícula',
          con: 'Asume una tasa de interés fija y un pago mensual fijo',
        },
        {
          pro: 'Muestra la trayectoria de la deuda de forma visual en lugar de informar solo un titular total',
          con: 'No tiene en cuenta impuestos, inflación ni cambios salariales futuros',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'TIN',
          definition: 'Tasa de Interés Nominal. Representa el costo anual de la deuda y se convierte en una tasa mensual para los cálculos de reembolso.',
        },
        {
          term: 'Capital',
          definition: 'La cantidad realmente prestada después de que las becas y los pagos iniciales reduzcan el costo total.',
        },
        {
          term: 'Amortización',
          definition: 'El proceso mes a mes de saldar un préstamo mediante pagos regulares que cubren primero los intereses y luego el capital a lo largo del tiempo.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Siguiente paso recomendado',
      html: 'Usa este simulador para reducir tu lista de opciones y luego valida la ganadora con la carta de ayuda financiera real, la realidad del alojamiento y los ingresos iniciales esperados en tu campo antes de tomar el compromiso final.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
