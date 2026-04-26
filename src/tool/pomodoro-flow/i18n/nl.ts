import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-stroom' as const;
const title = 'Pomodoro Flow';
const description = 'Beheers je productiviteit met zen-gerichte tijdmanagement. Pas werk- en pauzecycli aan, houd onderbrekingen bij en visualiseer je focuspatronen in realtime.';

const faqItems = [
  { question: 'Wat is de Pomodoro-techniek?', answer: 'De Pomodoro-techniek is een tijdmanagementmethode die gebruikmaakt van gefocuste werkintervallen (meestal 25 minuten) gevolgd door korte pauzes. Deze tool breidt dit uit met aanpasbare cycli en gedetailleerde analyses.' },
  { question: 'Kan ik de werk- en pauzeduur aanpassen?', answer: 'Ja! Kies uit drie voorinstellingen (Zaadje: 25/5, Boom: 50/10, Berg: 90/15) of pas de tijden direct aan met de +5 en -5 minuten knoppen.' },
  { question: 'Wat doet het bijhouden van onderbrekingen?', answer: 'Elke keer dat je op de afleidingsknop klikt, registreert de tool een onderbreking. Dit helpt bij het berekenen van je Focus Score en het identificeren van patronen in je concentratie.' },
  { question: 'Hoe wordt de Focus Score berekend?', answer: 'Focus Score = ((Werktijd - Onderbrekingen × 2) / Werktijd) × 100. Dit houdt rekening met de cognitieve kosten van het wisselen van context.' },
  { question: 'Kan ik mijn sessiegegevens exporteren?', answer: 'Ja. Je kunt je sessiesamenvatting kopiëren als Markdown (handig voor Notion/Obsidian) of een visuele samenvatting delen op sociale media.' },
];

const howToItems = [
  { name: 'Voer je taak in', text: 'Typ waaraan je gaat werken. Dit helpt om de context en intentie vast te houden.' },
  { name: 'Kies een cyclus', text: 'Kies Zaadje (25/5) voor snelle taken, Boom (50/10) voor standaard werk, of Berg (90/15) voor diepe focus.' },
  { name: 'Start en focus', text: 'De timer begint. Klik op de ring om te pauzeren. Gebruik +5/-5 om aan te passen indien nodig. De titelbalk toont de resterende tijd.' },
  { name: 'Houd onderbrekingen bij', text: 'Afgeleid? Klik op de knop Afleidingsalarm. De tool registreert dit om je Focus Score te berekenen.' },
  { name: 'Bekijk je oogst', text: 'Bekijk na je sessie je statistieken: Focus Score, taakverdeling en de maandelijkse heatmap van je productiviteit.' },
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
    taskInput: 'Waaraan ga je werken?',
    selectCycle: 'Kies je focuscyclus',
    startButton: 'Start',
    seed: 'Zaadje',
    tree: 'Boom',
    mountain: 'Berg',
    timer: 'Timer',
    pauseButton: 'Pauze',
    resumeButton: 'Hervatten',
    distractionButton: 'Afleidingsalarm',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Focus',
    breakTime: 'Pauze',
    sessionComplete: 'Sessie Voltooid',
    endSession: 'Sessie Beëindigen',
    focusScore: 'Focus Score',
    totalTime: 'Totale Tijd',
    interruptions: 'Onderbrekingen',
    taskBreakdown: 'Taakverdeling',
    monthlyHeatmap: 'Maandelijkse Activiteit',
    copyMarkdown: 'Kopieer Markdown',
    shareImage: 'Delen',
    wellnessMessage: 'Neem pauze, je hebt het verdiend',
    sessionSummary: 'Sessiesamenvatting',
    newSession: 'Nieuwe Sessie',
    copied: 'Gekopieerd!',
    unnamedTask: 'Naamloze taak',
    breakTimeNotification: 'Tijd voor pauze!',
    focusTimeNotification: 'Tijd om te focussen!',
    interruptionsLabel: 'Onderbrekingen:',
    studySession: 'Studiesessie',
  },
  seo: [
    { type: 'title', text: 'Beheers je Focus met Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'Productiviteit gaat niet over harder werken — het gaat over slimmer werken. <strong>Pomodoro Flow</strong> combineert de bewezen Pomodoro-techniek met een zen-gericht ontwerp en realtime analyses om je te helpen begrijpen <em>hoe</em> je het beste werkt.' },
    { type: 'title', text: 'Waarom Pomodoro werkt', level: 3 },
    { type: 'paragraph', html: 'Mensen zijn niet gebouwd voor marathons van 8 uur hyperfocus. Onze hersenen werken het beste in cycli van gefocust werk gevolgd door herstellende pauzes. De Pomodoro-techniek verandert dit in een eenvoudig ritueel: werk intensief gedurende 25 minuten, pauzeer 5 minuten, herhaal.' },
    { type: 'paragraph', html: 'Maar elke taak is anders. Daarom biedt Pomodoro Flow drie cycli: <strong>Zaadje</strong> voor snelle taken (25/5), <strong>Boom</strong> voor je dagelijkse routine (50/10) en <strong>Berg</strong> voor diepe focussessies (90/15).' },
    { type: 'title', text: 'De Echte Kracht: Onderbrekingen Bijhouden', level: 3 },
    { type: 'paragraph', html: 'Je werkt 50 minuten en denkt dat je het geweldig hebt gedaan. Maar ben je 5 keer afgeleid? Elke onderbreking kost je een "context-switching belasting". Pomodoro Flow houdt dit bij met een enkele knop (Afleidingsalarm) en berekent je <strong>Focus Score</strong> — een reële maatstaf voor je concentratie.' },
    { type: 'paragraph', html: 'Na verloop van tijd zul je zien welke taken, tijdstippen of omgevingen je de beste focus geven. Dat is waar je werk met de hoogste impact plaatsvindt.' },
    { type: 'title', text: 'Functies die je niet in de weg zitten', level: 3 },
    { type: 'list', items: [
      'Zen-Tech Design: Donkere modus, glassmorphism en een gecentreerde timer die het enige wordt wat je ziet.',
      'Live Titelbalk: Je browsertabblad toont het aftellen, zodat je in één oogopslag weet hoe laat het is.',
      'Flexibele Timing: Pas werk-/pauzetijden direct aan zonder opnieuw op te starten.',
      'Sessie exporteren: Kopieer je samenvatting als Markdown of deel een afbeelding op sociale media.',
      'Maandelijkse Heatmap: Bekijk je productiviteitspatronen. Welke dagen zijn je piekdagen voor focus?',
    ] },
    { type: 'title', text: 'De Psychologie van de "Flow-staat"', level: 3 },
    { type: 'paragraph', html: 'Psycholoog Mihaly Csikszentmihalyi definieert <strong>flow</strong> als de staat waarin uitdaging en vaardigheid samenkomen en de tijd verdwijnt. Pomodoro Flow verwijdert afleidingen, stelt duidelijke tijdgrenzen en geeft je onmiddellijke feedback — de drie voorwaarden voor de flow-staat.' },
    { type: 'tip', html: '<strong>Pro-tip:</strong> Als je in flow bent, onderbreek jezelf dan niet. Als de timer afgaat maar je bent midden in een gedachte, klik dan op hervatten en ga door. Het mooie van het bijhouden van onderbrekingen is dat je het verschil zult zien tussen externe chaos en je eigen momentum.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
