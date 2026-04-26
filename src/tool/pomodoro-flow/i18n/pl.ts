import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Opanuj swoją produktywność dzięki zarządzaniu czasem w stylu zen. Dostosuj cykle pracy/przerw, śledź rozproszenia i wizualizuj wzorce skupienia w czasie rzeczywistym.';

const faqItems = [
  { question: 'Co to jest technika Pomodoro?', answer: 'Technika Pomodoro to metoda zarządzania czasem, która wykorzystuje interwały intensywnej pracy (zazwyczaj 25 minut) przeplatane krótkimi przerwami. To narzędzie rozszerza ją o konfigurowalne cykle i szczegółową analitykę.' },
  { question: 'Czy mogę dostosować czas trwania pracy/przerw?', answer: 'Tak! Wybierz jeden z trzech zestawów (Nasiono: 25/5, Drzewo: 50/10, Góra: 90/15) lub koryguj czas na bieżąco przyciskami +5 i -5 minut.' },
  { question: 'Do czego służy śledzenie rozproszeń?', answer: 'Za każdym razem, gdy klikniesz przycisk dekoncentracji, narzędzie zarejestruje przerwanie pracy. Pomaga to obliczyć Twój Focus Score i zidentyfikować wzorce skupienia.' },
  { question: 'Jak obliczany jest Focus Score?', answer: 'Focus Score = ((Czas pracy - Przerwania × 2) / Czas pracy) × 100. Uwzględnia to koszt poznawczy związany ze zmianą kontekstu.' },
  { question: 'Czy mogę wyeksportować dane z sesji?', answer: 'Tak. Możesz skopiować podsumowanie sesji jako Markdown (świetne do Notion/Obsidiana) lub udostępnić wizualne podsumowanie w mediach społecznościowych.' },
];

const howToItems = [
  { name: 'Wprowadź zadanie', text: 'Wpisz, nad czym będziesz pracować. Pomaga to utrzymać kontekst i intencję.' },
  { name: 'Wybierz cykl', text: 'Wybierz Nasiono (25/5) dla szybkich zadań, Drzewo (50/10) dla standardowej pracy lub Górę (90/15) dla głębokiego skupienia.' },
  { name: 'Zacznij i skup się', text: 'Timer startuje. Kliknij pierścień, aby zapauzować. Użyj +5/-5 do regulacji w razie potrzeby. Pasek tytułu pokazuje pozostały czas.' },
  { name: 'Śledź rozproszenia', text: 'Rozproszyłeś się? Kliknij przycisk Alert Dekoncentracji. Narzędzie zarejestruje to, aby obliczyć Twój Focus Score.' },
  { name: 'Przejrzyj swoje zbiory', text: 'Po sesji zobacz swoje statystyki: Focus Score, podział zadań i miesięczną mapę cieplną Twojej produktywności.' },
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
    taskInput: 'Nad czym będziesz pracować?',
    selectCycle: 'Wybierz swój cykl skupienia',
    startButton: 'Start',
    seed: 'Nasiono',
    tree: 'Drzewo',
    mountain: 'Góra',
    timer: 'Timer',
    pauseButton: 'Pauza',
    resumeButton: 'Wznów',
    distractionButton: 'Alert Dekoncentracji',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Skupienie',
    breakTime: 'Przerwa',
    sessionComplete: 'Sesja ukończona',
    endSession: 'Zakończ sesję',
    focusScore: 'Focus Score',
    totalTime: 'Całkowity czas',
    interruptions: 'Rozproszenia',
    taskBreakdown: 'Podział zadań',
    monthlyHeatmap: 'Miesięczna aktywność',
    copyMarkdown: 'Kopiuj Markdown',
    shareImage: 'Udostępnij',
    wellnessMessage: 'Zrób przerwę, zasłużyłeś na to',
    sessionSummary: 'Podsumowanie sesji',
    newSession: 'Nowa sesja',
    copied: 'Skopiowano!',
    unnamedTask: 'Zadanie bez nazwy',
    breakTimeNotification: 'Czas na przerwę!',
    focusTimeNotification: 'Czas na skupienie!',
    interruptionsLabel: 'Rozproszenia:',
    studySession: 'Sesja nauki',
  },
  seo: [
    { type: 'title', text: 'Opanuj skupienie dzięki Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'W produktywności nie chodzi o cięższą pracę — chodzi o mądrzejszą pracę. <strong>Pomodoro Flow</strong> łączy sprawdzoną technikę Pomodoro z designem w stylu zen i analityką w czasie rzeczywistym, aby pomóc Ci zrozumieć, <em>jak</em> pracujesz najlepiej.' },
    { type: 'title', text: 'Dlaczego Pomodoro działa', level: 3 },
    { type: 'paragraph', html: 'Ludzie nie są stworzeni do 8-godzinnych maratonów hiper-skupienia. Nasze mózgi pracują najlepiej w cyklach skoncentrowanej pracy przeplatanej regenerującymi przerwami. Technika Pomodoro zamienia to w prosty rytuał: pracuj intensywnie przez 25 minut, odpoczywaj przez 5, powtórz.' },
    { type: 'paragraph', html: 'Ale każde zadanie jest inne. Dlatego Pomodoro Flow oferuje trzy cykle: <strong>Nasiono</strong> dla szybkich zadań (25/5), <strong>Drzewo</strong> dla codziennej rutyny (50/10) i <strong>Górę</strong> dla sesji głębokiej pracy (90/15).' },
    { type: 'title', text: 'Prawdziwa moc: Śledzenie rozproszeń', level: 3 },
    { type: 'paragraph', html: 'Pracujesz przez 50 minut i myślisz, że poszło świetnie. Ale czy rozproszyłeś się 5 razy? Każde przerwanie kosztuje Cię „podatek” za zmianę kontekstu. Pomodoro Flow śledzi to za pomocą jednego przycisku (Alert Dekoncentracji) i oblicza Twój <strong>Focus Score</strong> — realny miernik Twojej koncentracji.' },
    { type: 'paragraph', html: 'Z czasem zobaczysz, jakie zadania, pory dnia czy otoczenie pozwalają Ci osiągnąć najlepsze skupienie. To właśnie wtedy powstaje Twoja najcenniejsza praca.' },
    { type: 'title', text: 'Funkcje, które nie przeszkadzają', level: 3 },
    { type: 'list', items: [
      'Zen-Tech Design: Tryb ciemny, glassmorphism i wycentrowany timer, który staje się jedyną rzeczą, którą widzisz.',
      'Live Title Bar: Karta przeglądarki pokazuje odliczanie, dzięki czemu znasz czas na pierwszy rzut oka.',
      'Elastyczność: Dostosuj czas pracy/przerw na bieżąco bez restartowania.',
      'Eksport sesji: Kopiuj podsumowanie w Markdown lub udostępnij obraz w mediach społecznościowych.',
      'Miesięczna mapa cieplna: Zobacz swoje wzorce produktywności. Które dni są Twoimi szczytami skupienia?',
    ] },
    { type: 'title', text: 'Psychologia „Stanu Flow”', level: 3 },
    { type: 'paragraph', html: 'Psycholog Mihaly Csikszentmihalyi definiuje <strong>flow</strong> jako stan, w którym wyzwanie spotyka się z umiejętnościami, a czas znika. Pomodoro Flow eliminuje rozproszenia, wyznacza wyraźne granice czasowe i daje natychmiastową informację zwrotną — trzy warunki stanu flow.' },
    { type: 'tip', html: '<strong>Pro Tip:</strong> Kiedy jesteś we flow, nie przerywaj sobie. Jeśli timer zadzwoni, ale jesteś w połowie myśli, kliknij wznów i kontynuuj. Piękno śledzenia rozproszeń polega na tym, że zobaczysz różnicę między zewnętrznym chaosem a własnym impetem.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
