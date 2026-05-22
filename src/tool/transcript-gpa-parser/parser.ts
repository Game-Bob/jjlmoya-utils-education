export interface ParsedRow {
  originalText: string;
  name: string;
  grade: number | null;
  gradeRaw: string;
  credits: number | null;
  creditsRaw: string;
}

export type ColumnRole = 'name' | 'grade' | 'credits' | 'ignored';

export interface ColumnMapping {
  name: number;
  grade: number;
  credits: number;
}

export interface ParseResult {
  rows: ParsedRow[];
  mapping: ColumnMapping;
  headers: string[];
  rawGrid: string[][];
}

interface ColStat {
  names: number;
  grades: number;
  credits: number;
  total: number;
}

const LETTER_GRADES: Record<string, number> = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'F': 0.0,
  'APROBADO': 6.0, 'SOBRESALIENTE': 9.5, 'NOTABLE': 8.0, 'SUSPENSO': 3.0,
  'AP': 6.0, 'SS': 3.0, 'NT': 8.0, 'SB': 9.5, 'MH': 10.0
};

export function parseGrade(value: string): number | null {
  const clean = value.trim().toUpperCase();
  if (!clean) return null;
  if (LETTER_GRADES[clean] !== undefined) {
    return LETTER_GRADES[clean];
  }
  const parsedNum = parseFloat(clean.replace(',', '.'));
  if (!isNaN(parsedNum)) {
    return parsedNum;
  }
  return null;
}

export function parseCredits(value: string): number | null {
  const clean = value.trim();
  if (!clean) return null;
  const parsedNum = parseFloat(clean.replace(',', '.'));
  if (!isNaN(parsedNum) && parsedNum > 0) {
    return parsedNum;
  }
  return null;
}

export function tokenizeLine(line: string): string[] {
  const tabTokens = line.split('\t');
  if (tabTokens.length > 1) {
    return tabTokens.map(t => t.trim());
  }
  const multiSpaceTokens = line.split(/\s{2,}/);
  if (multiSpaceTokens.length > 1) {
    return multiSpaceTokens.map(t => t.trim());
  }
  const semicolonTokens = line.split(';');
  if (semicolonTokens.length > 1) {
    return semicolonTokens.map(t => t.trim());
  }
  const commaTokens = line.split(',');
  if (commaTokens.length > 2) {
    return commaTokens.map(t => t.trim());
  }
  return [line.trim()];
}

function analyzeColumnStats(rawGrid: string[][], maxCols: number): ColStat[] {
  const colStats = Array.from({ length: maxCols }, () => ({
    names: 0,
    grades: 0,
    credits: 0,
    total: 0
  }));
  for (const row of rawGrid) {
    row.forEach((token, index) => {
      if (!token) return;
      const stat = colStats[index];
      if (stat) {
        stat.total++;
        const isGrad = parseGrade(token) !== null;
        const isCred = parseCredits(token) !== null && parseFloat(token.replace(',', '.')) < 25;
        const isWord = /[a-zA-Z]{3,}/.test(token) && !LETTER_GRADES[token.toUpperCase()];
        if (isWord) stat.names++;
        if (isGrad) stat.grades++;
        if (isCred) stat.credits++;
      }
    });
  }
  return colStats;
}

function findBestColumn(stats: ColStat[], testFn: (s: ColStat, idx: number) => number): number {
  let bestCol = -1;
  let maxScore = -1;
  stats.forEach((stat, idx) => {
    if (stat.total === 0) return;
    const score = testFn(stat, idx);
    if (score > maxScore) {
      maxScore = score;
      bestCol = idx;
    }
  });
  return bestCol;
}

function detectBestColumns(stats: ColStat[], maxCols: number): ColumnMapping {
  const nameCol = findBestColumn(stats, s => s.names / s.total);
  const gradeCol = findBestColumn(stats, (s, idx) => idx === nameCol ? -1 : s.grades / s.total);
  const creditsCol = findBestColumn(stats, (s, idx) => idx === nameCol || idx === gradeCol ? -1 : s.credits / s.total);

  return {
    name: nameCol === -1 && maxCols > 0 ? 0 : nameCol,
    grade: gradeCol === -1 && maxCols > 1 ? 1 : gradeCol,
    credits: creditsCol === -1 && maxCols > 2 ? 2 : creditsCol
  };
}

function getColValue(row: string[], colIdx: number): string {
  if (colIdx === -1) return '';
  return (row[colIdx] || '').trim();
}

function mapRowToParsed(row: string[], mapping: ColumnMapping): ParsedRow | null {
  const name = getColValue(row, mapping.name);
  const gradeRaw = getColValue(row, mapping.grade);
  const creditsRaw = getColValue(row, mapping.credits);
  const grade = parseGrade(gradeRaw);
  const credits = parseCredits(creditsRaw);

  if (!name && grade === null && credits === null) {
    return null;
  }

  return {
    originalText: row.join(' | '),
    name,
    grade,
    gradeRaw,
    credits,
    creditsRaw
  };
}

function buildParsedRows(rawGrid: string[][], mapping: ColumnMapping): ParsedRow[] {
  const parsedRows: ParsedRow[] = [];
  rawGrid.forEach((row) => {
    const parsed = mapRowToParsed(row, mapping);
    if (parsed) {
      parsedRows.push(parsed);
    }
  });
  return parsedRows;
}

export function parseTranscript(text: string): ParseResult {
  const lines = text.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
  const rawGrid = lines.map(tokenizeLine);
  if (rawGrid.length === 0) {
    return {
      rows: [],
      mapping: { name: -1, grade: -1, credits: -1 },
      headers: [],
      rawGrid: []
    };
  }
  const maxCols = Math.max(...rawGrid.map(row => row.length));
  const stats = analyzeColumnStats(rawGrid, maxCols);
  const mapping = detectBestColumns(stats, maxCols);
  const rows = buildParsedRows(rawGrid, mapping);
  const headers = Array.from({ length: maxCols }, (_, i) => `Col ${i + 1}`);

  return { rows, mapping, headers, rawGrid };
}
