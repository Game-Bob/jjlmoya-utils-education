import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'calcolatore-di-progresso-crediti-e-media-voti-prevista' as const;
const title = 'Calcolatore di Progresso Crediti e Media Voti Prevista';
const description = 'Organizza il tuo percorso di studi semestre per semestre, monitora la tua media reale e prevista, e simula i voti richiesti negli esami rimanenti.';

const faqItems = [
  {
    question: 'Come posso iniziare a pianificare la mia laurea?',
    answer: 'Aggiungi semplicemente i semestri e inserisci i tuoi esami direttamente nel pannello. Puoi impostare i crediti, selezionare lo stato di ogni esame e registrare i voti.',
  },
  {
    question: 'Qual è la differenza tra media reale e media prevista?',
    answer: 'La media reale viene calcolata unicamente sugli esami completati con un voto confermato. La media prevista stima la media finale includendo gli esami in corso e pianificati con i voti attesi.',
  },
  {
    question: 'Cosa indica il voto richiesto negli esami rimanenti?',
    answer: 'Calcola la media esatta che devi mantenere in tutti i crediti rimanenti per raggiungere il tuo obiettivo finale di media voti.',
  },
  {
    question: 'I miei dati sono memorizzati in modo sicuro?',
    answer: 'Sì. Tutti i dati rimangono localmente nel tuo browser web. Nessuna informazione viene inviata a server esterni. Puoi esportare il tuo piano come file JSON.',
  },
];

const howToItems = [
  { name: 'Imposta gli obiettivi', text: 'Inserisci il totale dei crediti necessari alla laurea e la tua media obiettivo nella parte superiore del pannello.' },
  { name: 'Crea il tuo piano', text: 'Aggiungi i semestri e inserisci gli esami indicandone i relativi crediti formativi.' },
  { name: 'Aggiorna voti e stati', text: 'Modifica gli stati degli esami tra Superato, In Corso e Pianificato inserendo i voti reali conseguiti.' },
  { name: 'Verifica la media necessaria', text: 'Consulta l\'analizzatore per capire quale media devi ottenere nei prossimi appelli.' },
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
    degreeNameLabel: 'Nome del Corso di Laurea',
    graduationCreditsLabel: 'Crediti Totali Laurea',
    targetGpaLabel: 'Media Voti Obiettivo',
    realGpaLabel: 'Media Reale',
    projectedGpaLabel: 'Media Prevista',
    creditsCompletedLabel: 'Crediti Conseguiti',
    requiredGradeLabel: 'Voto Richiesto (Rimanente)',
    addSemesterButton: 'Aggiungi Semestre',
    addCourseButton: 'Aggiungi Esame',
    exportPlanButton: 'Esporta Piano',
    importPlanButton: 'Importa Piano',
    semesterNamePlaceholder: 'Nome del semestre (es. Autunno Anno 1)',
    courseNamePlaceholder: 'Titolo del corso',
    creditsPlaceholder: 'CFU',
    gradePlaceholder: 'Voto',
    statusCompleted: 'Superato',
    statusInProgress: 'In Corso',
    statusPlanned: 'Pianificato',
    importError: 'Impossibile importare il piano di studi. Verifica il formato del file.',
    uploadHint: 'Tutti i dati sono salvati localmente nel tuo browser. Le procedure di importazione ed esportazione avvengono sul tuo dispositivo.',
    statusMessageSuccess: 'Sei in linea con l\'obiettivo della tua media voti.',
    statusMessageWarning: 'Devi ottenere una media di {grade} o superiore nei restanti esami per raggiungere il tuo obiettivo.',
    statusMessageImpossible: 'È matematicamente impossibile raggiungere la tua media obiettivo con la configurazione attuale degli esami.',
    degreeNamePlaceholder: 'es. Laurea in Informatica',
    deleteSemesterLabel: 'Elimina Semestre',
    deleteCourseLabel: 'Elimina Esame',
    semesterTitleTemplate: 'Semestre {num}',
  },
  seo: [
    { type: 'title', text: 'Come simulare il tuo percorso universitario e la media di laurea', level: 2 },
    { type: 'paragraph', html: 'Pianificare lo studio accademico richiede precisione. Questo calcolatore ti consente di stimare la tua media di laurea e capire l\'impatto degli esami rimanenti prima di sostenerli.' },
    { type: 'summary', title: 'Indicatori di performance per ogni semestre', items: [
      'Visualizza la percentuale di crediti formativi superati rispetto al totale richiesto.',
      'Separa i voti reali dalle proiezioni future.',
      'Calcola la media minima necessaria nei prossimi semestri per accedere a borse di studio.',
    ] },
    {
      type: 'proscons',
      title: 'Vantaggi e limiti del simulatore di media',
      items: [
        {
          pro: 'Aiuta a pianificare i semestri futuri in modo proattivo.',
          con: 'Le stime dipendono interamente dall\'accuratezza dei voti previsti inseriti.',
        },
        {
          pro: 'Indica con precisione i risultati minimi da conseguire per rimanere in pari.',
          con: 'Non considera le regole particolari di arrotondamento della tua università.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
