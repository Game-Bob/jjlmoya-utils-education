export type CourseStatus = 'completed' | 'in-progress' | 'planned';

export interface Course {
  id: string;
  name: string;
  credits: number;
  status: CourseStatus;
  grade: number | null;
}

export interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

export interface DegreePlan {
  degreeName: string;
  graduationCredits: number;
  targetGpa: number;
  semesters: Semester[];
}

export interface PlannerMetrics {
  completedCredits: number;
  totalPlannedCredits: number;
  realGpa: number;
  projectedGpa: number;
  requiredRemainingGrade: number | null;
}

export const DEFAULT_PLAN: DegreePlan = {
  degreeName: 'BSc in Computer Science',
  graduationCredits: 180,
  targetGpa: 8.0,
  semesters: [
    {
      id: 'sem-1',
      name: 'Year 1 - Semester 1',
      courses: [
        { id: 'c-1', name: 'Introduction to Programming', credits: 6, status: 'completed', grade: 8.5 },
        { id: 'c-2', name: 'Calculus I', credits: 6, status: 'completed', grade: 7.2 },
        { id: 'c-3', name: 'Discrete Mathematics', credits: 6, status: 'completed', grade: 6.8 },
      ],
    },
    {
      id: 'sem-2',
      name: 'Year 1 - Semester 2',
      courses: [
        { id: 'c-4', name: 'Data Structures', credits: 6, status: 'in-progress', grade: 8.0 },
        { id: 'c-5', name: 'Computer Architecture', credits: 6, status: 'in-progress', grade: 7.5 },
        { id: 'c-6', name: 'Linear Algebra', credits: 6, status: 'planned', grade: 7.0 },
      ],
    },
  ],
};

export const EMPTY_PLAN: DegreePlan = {
  degreeName: 'My Custom Degree',
  graduationCredits: 120,
  targetGpa: 7.5,
  semesters: [
    {
      id: 'sem-new-1',
      name: 'Semester 1',
      courses: [],
    },
  ],
};

function getCourseMetrics(courses: Course[]) {
  let completedCredits = 0;
  let completedGradePoints = 0;
  let totalPlannedCredits = 0;
  let projectedGradePoints = 0;
  let remainingCredits = 0;

  courses.forEach((c) => {
    const cred = Math.max(0, c.credits);
    const gr = c.grade !== null ? Math.max(0, Math.min(10, c.grade)) : 0;
    if (c.status === 'completed') {
      completedCredits += cred;
      completedGradePoints += gr * cred;
      projectedGradePoints += gr * cred;
      totalPlannedCredits += cred;
    } else {
      remainingCredits += cred;
      projectedGradePoints += gr * cred;
      totalPlannedCredits += cred;
    }
  });

  return { completedCredits, completedGradePoints, totalPlannedCredits, projectedGradePoints, remainingCredits };
}

export function calculateMetrics(plan: DegreePlan): PlannerMetrics {
  const courses = plan.semesters.flatMap((s) => s.courses);
  const { completedCredits, completedGradePoints, totalPlannedCredits, projectedGradePoints, remainingCredits } = getCourseMetrics(courses);

  const realGpa = completedCredits > 0 ? completedGradePoints / completedCredits : 0;
  const projectedGpa = totalPlannedCredits > 0 ? projectedGradePoints / totalPlannedCredits : 0;

  let requiredRemainingGrade: number | null = null;
  if (remainingCredits > 0) {
    const targetPoints = plan.targetGpa * (completedCredits + remainingCredits);
    requiredRemainingGrade = (targetPoints - completedGradePoints) / remainingCredits;
    requiredRemainingGrade = Math.max(0, Math.min(10, requiredRemainingGrade));
  }

  return {
    completedCredits: Math.round(completedCredits * 10) / 10,
    totalPlannedCredits: Math.round(totalPlannedCredits * 10) / 10,
    realGpa: Math.round(realGpa * 100) / 100,
    projectedGpa: Math.round(projectedGpa * 100) / 100,
    requiredRemainingGrade: requiredRemainingGrade !== null ? Math.round(requiredRemainingGrade * 100) / 100 : null,
  };
}

function isString(val: unknown): boolean {
  return typeof val === 'string' && val.trim().length > 0;
}

function isValidNumber(val: unknown, min: number, max: number): boolean {
  return typeof val === 'number' && val >= min && val <= max;
}

function validateCourse(c: unknown): boolean {
  if (!c || typeof c !== 'object') return false;
  const course = c as Partial<Course>;
  return (
    typeof course.id === 'string' &&
    typeof course.name === 'string' &&
    typeof course.credits === 'number' &&
    ['completed', 'in-progress', 'planned'].includes(String(course.status))
  );
}

function validateSemester(sem: unknown): boolean {
  if (!sem || typeof sem !== 'object') return false;
  const s = sem as Partial<Semester>;
  return (
    typeof s.id === 'string' &&
    typeof s.name === 'string' &&
    Array.isArray(s.courses) &&
    s.courses.every(validateCourse)
  );
}

export function validatePlan(raw: unknown): { valid: true; plan: DegreePlan } | { valid: false; message: string } {
  if (!raw || typeof raw !== 'object') {
    return { valid: false, message: 'Invalid format: must be a JSON object.' };
  }

  const data = raw as Partial<DegreePlan>;
  if (!isString(data.degreeName)) {
    return { valid: false, message: 'Missing degreeName.' };
  }
  if (!isValidNumber(data.graduationCredits, 1, 10000)) {
    return { valid: false, message: 'Missing or invalid graduationCredits.' };
  }
  if (!isValidNumber(data.targetGpa, 0, 10)) {
    return { valid: false, message: 'Missing or invalid targetGpa.' };
  }
  if (!Array.isArray(data.semesters) || !data.semesters.every(validateSemester)) {
    return { valid: false, message: 'Missing or invalid semesters.' };
  }

  return {
    valid: true,
    plan: data as DegreePlan,
  };
}
export function exportPlan(plan: DegreePlan): string {
  return JSON.stringify(plan, null, 2);
}
