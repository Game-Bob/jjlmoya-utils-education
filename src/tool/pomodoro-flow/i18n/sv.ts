import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flode' as const;
const title = 'Pomodoro Flow';
const description = 'Bemästra din produktivitet med zen-fokuserad tidshantering. Anpassa arbets- och pauscykler, spåra avbrott och visualisera dina fokusmönster i realtid.';

const faqItems = [
  { question: 'Vad är Pomodoro-tekniken?', answer: 'Pomodoro-tekniken är en metod för tidshantering som använder fokuserade arbetsintervaller (vanligtvis 25 minuter) följt av korta pauser. Detta verktyg utökar den med anpassningsbara cykler och detaljerad analys.' },
  { question: 'Kan jag anpassa arbets- och pauslängderna?', answer: 'Ja! Välj mellan tre förinställningar (Frö: 25/5, Träd: 50/10, Berg: 90/15) eller justera tiderna direkt med knapparna +5 och -5 minuter.' },
  { question: 'Vad gör spårning av avbrott?', answer: 'Varje gång du klickar på distraktionsknappen registrerar verktyget ett avbrott. Detta hjälper till att beräkna din fokuspoäng och identifiera mönster i din koncentration.' },
  { question: 'Hur beräknas fokuspoäng?', answer: 'Fokuspoäng = ((Arbetstid - Avbrott × 2) / Arbetstid) × 100. Detta tar hänsyn till den kognitiva kostnaden för kontextbyte.' },
  { question: 'Kan jag exportera mina sessionsdata?', answer: 'Ja. Du kan kopiera din sessionssammanfattning som Markdown (utmärkt för Notion/Obsidian) eller dela en visuell sammanfattning på sociala medier.' },
];

const howToItems = [
  { name: 'Ange din uppgift', text: 'Skriv vad du ska arbeta med. Detta hjälper till att bibehålla sammanhang och avsikt.' },
  { name: 'Välj en cykel', text: 'Välj Frö (25/5) för snabba uppgifter, Träd (50/10) för standardarbete eller Berg (90/15) för djupt fokus.' },
  { name: 'Starta och fokusera', text: 'Timern startar. Klicka på ringen för att pausa. Använd +5/-5 för att justera vid behov. Titelfältet visar återstående tid.' },
  { name: 'Spåra avbrott', text: 'Blev du distraherad? Klicka på knappen Distraktionsvarning. Verktyget registrerar detta för att beräkna din fokuspoäng.' },
  { name: 'Granska din skörd', text: 'Efter din session ser du din statistik: fokuspoäng, uppgiftsfördelning och månatlig heatmap över din produktivitet.' },
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
    taskInput: 'Vad ska du arbeta med?',
    selectCycle: 'Välj din fokuscykel',
    startButton: 'Starta',
    seed: 'Frö',
    tree: 'Träd',
    mountain: 'Berg',
    timer: 'Timer',
    pauseButton: 'Pausa',
    resumeButton: 'Återuppta',
    distractionButton: 'Distraktionsvarning',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Fokus',
    breakTime: 'Paus',
    sessionComplete: 'Sessionen klar',
    endSession: 'Avsluta sessionen',
    focusScore: 'Fokuspoäng',
    totalTime: 'Total tid',
    interruptions: 'Avbrott',
    taskBreakdown: 'Uppgiftsfördelning',
    monthlyHeatmap: 'Månadsaktivitet',
    copyMarkdown: 'Kopiera Markdown',
    shareImage: 'Dela',
    wellnessMessage: 'Ta en paus, det förtjänar du',
    sessionSummary: 'Sessionssammanfattning',
    newSession: 'Ny session',
    copied: 'Kopierat!',
    unnamedTask: 'Namnlös uppgift',
    breakTimeNotification: 'Dags för paus!',
    focusTimeNotification: 'Dags att fokusera!',
    interruptionsLabel: 'Avbrott:',
    studySession: 'Studiesession',
  },
  seo: [
    { type: 'title', text: 'Bemästra fokus med Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'Produktivitet handlar inte om att arbeta hårdare – det handlar om att arbeta smartare. <strong>Pomodoro Flow</strong> kombinerar den beprövade Pomodoro-tekniken med zen-fokuserad design och realtidsanalys för att hjälpa dig förstå <em>hur</em> du arbetar bäst.' },
    { type: 'title', text: 'Varför Pomodoro fungerar', level: 3 },
    { type: 'paragraph', html: 'Människor är inte byggda för 8-timmarsmaraton av hyperfokus. Våra hjärnor fungerar bäst i cykler av fokuserat arbete följt av återhämtande pauser. Pomodoro-tekniken förvandlar detta till en enkel ritual: arbeta intensivt i 25 minuter, pausa i 5, upprepa.' },
    { type: 'paragraph', html: 'Men varje uppgift är annorlunda. Det är därför Pomodoro Flow erbjuder tre cykler: <strong>Frö</strong> för snabba uppgifter (25/5), <strong>Träd</strong> för din vardag (50/10) och <strong>Berg</strong> för djupt fokus (90/15).' },
    { type: 'title', text: 'Den verkliga kraften: Spårning av avbrott', level: 3 },
    { type: 'paragraph', html: 'Du arbetar i 50 minuter och tror att du har krossat allt. Men blev du distraherad 5 gånger? Varje avbrott kostar dig en "kontextbytesskatt". Pomodoro Flow spårar detta med en enda knapp (Distraktionsvarning) och beräknar din <strong>Fokuspoäng</strong> – ett verkligt mått på din koncentration.' },
    { type: 'paragraph', html: 'Med tiden kommer du att se vilka uppgifter, tider på dygnet eller miljöer som ger dig bäst fokus. Det är där ditt arbete med störst inflytande sker.' },
    { type: 'title', text: 'Funktioner som inte är i vägen', level: 3 },
    { type: 'list', items: [
      'Zen-Tech Design: Mörkt läge, glassmorphism och en centrerad timer som blir det enda du ser.',
      'Live Title Bar: Din webbläsarflik visar nedräkningen, så att du har koll på tiden med en blick.',
      'Flexibel timing: Justera arbets-/paustider direkt utan att starta om.',
      'Sessionsexport: Kopiera din sammanfattning som Markdown eller dela en bild på sociala media.',
      'Månatlig Heatmap: Se dina produktivitetsmönster. Vilka dagar är dina toppdagar för fokus?',
    ] },
    { type: 'title', text: 'Psykologin bakom "Flow-tillståndet"', level: 3 },
    { type: 'paragraph', html: 'Psykologen Mihaly Csikszentmihalyi definierar <strong>flow</strong> som det tillstånd där utmaning möter skicklighet och tiden försvinner. Pomodoro Flow tar bort distraktioner, sätter tydliga tidsgränser och ger dig omedelbar feedback – de tre förutsättningarna för flow-tillstånd.' },
    { type: 'tip', html: '<strong>Proffstips:</strong> När du är i flow, avbryt inte dig själv. Om timern går av men du är mitt i en tanke, tryck på återuppta och fortsätt. Skönheten med att spåra avbrott är att du kommer att se skillnaden mellan externt kaos och ditt eget momentum.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
