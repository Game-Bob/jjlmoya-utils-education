import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'kalkylator-for-vagt-genomsnitt-och-slutbetyg';
const title = 'Kalkylator för vägt genomsnitt och slutbetyg';
const description = 'Sluta stressa över ditt betygssnitt! Beräkna enkelt dina kursbetyg och slutresultat. Ange bara dina uppgifter, tentor och deras vikt för att se var du ligger till.';

const faqItems = [
  { question: 'Vad exakt är ett vägt betyg?', answer: 'I många kurser är inte alla uppgifter lika mycket värda. En sluttenta kan vara värd 40 % av ditt betyg, medan läxor bara är 10 %. Ett vägt betyg tar hänsyn till dessa skillnader så att du vet din sanna ställning.' },
  { question: 'Var kan jag hitta mina betygsvikter?', answer: 'Vanligtvis finns dessa listade i din kursplan under "Betygskriterier" eller "Examination". Lärare tilldelar en procentsats till olika kategorier som deltagande, prov och projekt.' },
  { question: 'Vad händer om mina uppgifter inte summerar till 100 % än?', answer: 'Ingen fara! Vår kalkylator visar ett "beräknat" betyg baserat på det arbete du har slutfört hittills. Den skalar dina nuvarande poäng till en motsvarighet på 100 %.' },
  { question: 'Kan jag använda detta för mitt snittbetyg (GPA)?', answer: 'Absolut. Du kan behandla varje kurs som ett "ämne" och använda dess poäng som "vikt" för att hitta ditt vägda genomsnitt för terminen.' },
];

const howToItems = [
  { name: 'Lista dina uppgifter', text: 'Ange namnet på dina tentor, prov eller projekt. Håll det organiserat!' },
  { name: 'Ange dina poäng', text: 'Skriv in betyget du fick för varje del (vanligtvis av 10 or 100).' },
  { name: 'Lägg till vikterna', text: 'Kontrollera din kursplan och ange hur många procent varje del bidrar till ditt slutbetyg.' },
  { name: 'Kontrollera ditt resultat', text: 'Se ditt slutbetyg uppdateras direkt. Ingen manuell matematik krävs!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: 'Lägg till del',
    subjects: 'Betyg och vikter',
    subjectName: 'Uppgift / Ämne',
    grade: 'Betyg',
    weight: 'Vikt (%)',
    scale: 'Skala (t.ex. 4.0, 10, 100)',
    finalGrade: 'Ditt nuvarande betyg',
    removeSubject: 'Ta bort',
    weightSum: 'Total vikt',
    exampleSubject: 'Sluttenta',
    newSubjectPlaceholder: 't.ex. Dugga',
  },
  seo: [
    { type: 'title', text: 'Hur du bemästrar dina betyg med en kalkylator för vägt genomsnitt', level: 2 },
    { type: 'paragraph', html: 'Har du någonsin känt dig vilsen när du tittar på en hög med betyg? Du är inte ensam. Att förstå ditt <strong>vägda genomsnitt</strong> är hemligheten till att ligga steget före i skolan och på universitetet.' },
    { type: 'title', text: 'Varför vägda betyg spelar roll', level: 3 },
    { type: 'paragraph', html: 'Ett enkelt genomsnitt behandlar varje uppgift lika. Men i den verkliga världen (och i din kursplan) borde inte ett 2-minutersprov räknas lika mycket som en 20-sidig uppsats. Vägda betyg ger mer "kraft" till de viktiga sakerna.' },
    { type: 'paragraph', html: 'Oavsett om du beräknar ditt <strong>terminsbetygssnitt</strong> eller bara försöker se om du kan hoppa över den sista valfria uppgiften, är viktning verktyget du behöver.' },
    { type: 'title', text: 'Beräkna ditt slutbetyg i 3 steg', level: 3 },
    { type: 'list', items: ['Hitta vikten för varje kategori i din kursplan (t.ex. Tentor 50 %, Läxor 20 %).', 'Multiplicera din poäng med den vikten (t.ex. 90 poäng * 0,50 vikt = 45 poäng).', 'Addera alla dessa poäng för att få din slutprocentsats.'] },
    { type: 'title', text: 'Proffstips: "Vad hände om"-leken', level: 3 },
    { type: 'paragraph', html: 'Använd denna kalkylator för att simulera olika scenarier. "Vad händer om jag får 85 på sluttentan?" eller "Vad händer om jag missar denna läxa?" Att se effekten i realtid hjälper dig att prioritera din studietid där den faktiskt gör skillnad.' },
    { type: 'tip', html: '<strong>Panika inte.</strong> Om dina vikter inte summerar till 100 % än, kommer kalkylatorn att beräkna hur ditt betyg ser ut baserat på nuvarande arbete. Det är ett utmärkt sätt att spåra framsteg mitt i terminen!' },
    { type: 'title', text: 'Aritmetiskt vs vägt: Den verkliga skillnaden', level: 3 },
    { type: 'paragraph', html: 'Ett aritmetiskt medelvärde kan vara farligt missledande. Om du har 100 % på ett litet prov men 50 % på en stor tenta, säger ett enkelt genomsnitt att du har 75 % (godkänt). Men om tentan är värd 90 % av ditt betyg, är ditt <strong>faktiska vägda betyg</strong> närmare 55 % (underkänt). Titta alltid på vikterna!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
