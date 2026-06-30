import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'rooster-optimalisator' as const;
const title = 'Lesrooster Optimalisator';
const description = 'Maak een visueel wekelijks lesrooster, kleurcodeer vakken, detecteer overlappende lessen en exporteer je rooster als een .ics-agendabestand.';

const faqItems = [
  {
    question: 'Hoe werkt de overlapdetector?',
    answer: 'Elk lesblok heeft een dag, startuur en duur. De tool vergelijkt elk paar blokken en markeert ze wanneer ze dezelfde dag delen en hun tijdsbereiken elkaar overlappen.'
  },
  {
    question: 'Kan ik lessen rechtstreeks op de kalender verplaatsen?',
    answer: 'Ja. Sleep een lesblok naar de kolom van een andere dag om een nieuwe wekelijkse indeling te testen. De conflictstatus wordt direct na de verplaatsing bijgewerkt.'
  },
  {
    question: 'Wat bevat de .ics-export?',
    answer: 'De export maakt een standaard iCalendar-bestand waarin elke les als gebeurtenis is opgenomen, inclusief het vak, lokaal, starttijd en eindtijd. Je kunt dit bestand in de meeste agenda-apps importeren.'
  },
  {
    question: 'Waarom zou ik vakken een kleurcode geven?',
    answer: 'Kleuren maken een druk lesrooster makkelijker te scannen. Gebruik verschillende kleuren voor practica, hoorcolleges, seminaries of intensieve vakken, zodat conflicten en zware dagen sneller opvallen.'
  }
];

const howToItems = [
  { name: 'Voeg lesdetails toe', text: 'Voer het vak, lokaal, de dag, het startuur, de duur en de kleur in.' },
  { name: 'Plaats blokken op het weekrooster', text: 'Gebruik de gegenereerde blokken om te zien hoe elke les in je wekelijkse rooster past.' },
  { name: 'Los overlappende lessen op', text: 'Zoek naar gemarkeerde conflictblokken en verplaats of bewerk lessen totdat het conflictpaneel leeg is.' },
  { name: 'Exporteer je agenda', text: 'Download het .ics-bestand en importeer het in Google Agenda, Apple Agenda, Outlook of een andere agenda-app.' },
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
    subjectLabel: 'Vak',
    roomLabel: 'Lokaal',
    dayLabel: 'Dag',
    startLabel: 'Start',
    durationLabel: 'Duur',
    colorLabel: 'Kleur',
    addClass: 'Les toevoegen',
    saveClass: 'Les opslaan',
    newClass: 'Nieuwe les',
    exportICS: 'Exporteer .ics',
    conflictLabel: 'Roosterconflicten',
    noConflicts: 'Geen overlappende lessen gedetecteerd',
    removeLabel: 'Les verwijderen',
    editHint: 'Selecteer een les om deze te bewerken, of sleep deze naar een andere dag en tijd.',
    weekendDaysLabel: 'Weekenddagen',
    saturdayLabel: 'Zaterdag',
    sundayLabel: 'Zondag',
    weekDayLabels: ['Ma', 'Di', 'Wo', 'Do', 'Vr'],
    weekendDayShortLabels: ['Za', 'Zo'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 uur', '2 uur', '3 uur'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Calculus',
    defaultRoom: 'Lokaal 204',
    defaultNewSubject: 'Nieuwe les',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Calculus', room: 'Lokaal 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Literatuur', room: 'Lab B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Natuurkunde', room: 'Auditorium', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'lesrooster.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'overlap',
    overlapPlural: 'overlappen',
    detectedLabel: 'gedetecteerd',
    classEditorAriaLabel: 'Lesbewerker',
    weeklyScheduleAriaLabel: 'Wekelijks rooster',
    faqTitle: 'Veelgestelde Vragen',
    bibliographyTitle: 'Referenties & Kalenderstandaarden',
  },
  seo: [
    { type: 'title', text: 'Hoe je een wekelijks lesrooster bouwt dat echt werkt', level: 2 },
    { type: 'paragraph', html: 'Een goed rooster doet meer dan alleen lessen opsommen. Het laat zien waar je week overbelast is, welke dagen versnipperd zijn en of twee verplichte lessen samenvallen. Een visuele lesrooster-optimalisator maakt die problemen zichtbaar voordat ze leiden tot gemiste lessen, reishaast of onmogelijke inschrijvingskeuzes.' },
    { type: 'summary', title: 'Wat te controleren voordat je een rooster definitief maakt', items: [
      'Er overlappen geen twee verplichte vakken op dezelfde dag.',
      'Zaterdag en zondag kunnen worden ingeschakeld voor onderwijsinstellingen die weekendlessen hebben.',
      'Practica, hoorcolleges en seminaries gebruiken verschillende kleuren voor snel scannen.',
      'Zware vakken worden niet achter elkaar gepland zonder rusttijd.',
      'Het uiteindelijke rooster kan worden geëxporteerd naar je dagelijkse agenda-app.'
    ] },
    { type: 'title', text: 'Waarom visuele rasters beter zijn dan platte lijsten', level: 3 },
    { type: 'paragraph', html: 'Platte cursuslijsten verbergen tijdsdruk omdat ze elke les scheiden van de rest van de week. Een raster onthult de dichtheid onmiddellijk. Je kunt zien of de maandag te veel lesuren heeft, of een hoorcollege een practicum blokkeert, of een les op zaterdag het weekritme verandert en of reistijd tussen lokalen verborgen wrijving veroorzaakt.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Cursuslijst', description: 'Handig voor inschrijfnummers, maar ongeschikt om wekelijkse druk te spotten.' },
      { title: 'Wekelijks raster', description: 'Het beste om ritme, gaten en conflicten in één oogopslag te begrijpen.', highlight: true },
      { title: 'Alleen agenda app', description: 'Handig na de planning, maar trager om met veel alternatieven te experimenteren.' }
    ] },
    { type: 'title', text: 'Hoe overlapdetectie werkt', level: 3 },
    { type: 'paragraph', html: 'Twee lessen conflicteren wanneer ze op dezelfde dag plaatsvinden en hun tijdsbereiken elkaar overlappen. Een hoorcollege van 10:00 tot 12:00 overlapt bijvoorbeeld met een seminarie van 11:00 tot 13:00, omdat beide het uur van 11:00 bezetten. De tool controleert elk blok met elk ander blok en markeert de overlap aan beide kanten.' },
    { type: 'table', headers: ['Les A', 'Les B', 'Resultaat'], rows: [
      ['Maandag 09:00-11:00', 'Maandag 11:00-13:00', 'Geen overlap omdat de ene les eindigt wanneer de andere begint.'],
      ['Dinsdag 10:00-12:00', 'Dinsdag 11:00-13:00', 'Overlap omdat de tijdsbereiken elkaar kruisen.'],
      ['Woensdag 09:00-11:00', 'Donderdag 09:00-11:00', 'Geen overlap omdat de dagen verschillen.']
    ] },
    { type: 'title', text: 'Kleur gebruiken als signaal voor academische planning', level: 3 },
    { type: 'paragraph', html: 'Kleur is niet alleen decoratie. Het kan het type les, de moeilijkheidsgraad, de campuslocatie of het energieniveau aangeven. Een consistent palet maakt het rooster makkelijker te lezen onder tijdsdruk, vooral bij het vergelijken van alternatieve groepen tijdens de vakregistratie.' },
    { type: 'tip', html: '<strong>Houd kleurcodering consistent.</strong> Gebruik bijvoorbeeld één kleurfamilie voor practica, een andere voor hoorcolleges en een waarschuwingskleur voor lessen die reistijd of veel voorbereiding vereisen.' },
    { type: 'title', text: 'Exporteren naar agenda-apps', level: 3 },
    { type: 'paragraph', html: 'Het .ics-formaat is het standaard iCalendar-uitwisselingsformaat. Door je lesrooster te exporteren, kun je lessen importeren in Google Agenda, Apple Agenda, Outlook en vele rooster- en onderwijssystemen. Na het importeren kun je herinneringen, reistijd, herhalingsregels en persoonlijke studietijd toevoegen.' },
    { type: 'diagnostic', variant: 'warning', title: 'Voor het importeren', html: 'Controleer of de startdatum van de week overeenkomt met de week die je wilt importeren, controleer de tijdzones in je agenda-app en controleer of geïmporteerde afspraken geen bestaande agendafeeds dupliceren.' },
    { type: 'title', text: 'Een praktische workflow voor vakregistratie', level: 3 },
    { type: 'list', items: [
      'Voeg eerst verplichte lessen toe en los harde conflicten op voordat je keuzevakken toevoegt.',
      'Schakel zaterdag of zondag in als je schoolrooster weekendlessen bevat.',
      'Gebruik kleur om hoorcolleges, practica, seminaries en zelfstudie te scheiden.',
      'Sleep blokken tussen dagen om snel alternatieve groepen te vergelijken.',
      'Laat zichtbare gaten open voor maaltijden, reistijd en rustmomenten.',
      'Exporteer pas nadat het conflictpaneel volledig leeg is.'
    ] },
    { type: 'message', title: 'Plannen is een iteratief proces', html: 'Beschouw de eerste versie als een concept. Het beste rooster ontstaat meestal nadat je conflicten hebt getest, lesvormen hebt vergeleken en hebt gecontroleerd of het wekelijkse ritme vol te houden is.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
