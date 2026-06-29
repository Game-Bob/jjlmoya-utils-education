import {
  DEFAULT_PLAN,
  validatePlan,
  type Course,
  type DegreePlan,
} from './logic';

export const STORAGE_KEY = 'education.degree-credit-planner-v2';

export class PlannerStore {
  private plan: DegreePlan = DEFAULT_PLAN;

  constructor(private onChange: () => void) {
    this.load();
  }

  getPlan(): DegreePlan {
    return this.plan;
  }

  setPlan(nextPlan: DegreePlan) {
    this.plan = nextPlan;
    this.save();
    this.onChange();
  }

  updateDegreeName(name: string) {
    this.plan.degreeName = name;
    this.save();
  }

  updateGraduationCredits(credits: number) {
    this.plan.graduationCredits = credits;
    this.save();
  }

  updateTargetGpa(gpa: number) {
    this.plan.targetGpa = gpa;
    this.save();
  }

  addSemester(name: string) {
    const id = 'sem-' + Date.now();
    this.plan.semesters.push({
      id,
      name,
      courses: [],
    });
    this.save();
    this.onChange();
  }

  deleteSemester(id: string) {
    this.plan.semesters = this.plan.semesters.filter((s) => s.id !== id);
    this.save();
    this.onChange();
  }

  updateSemesterName(id: string, name: string) {
    const sem = this.plan.semesters.find((s) => s.id === id);
    if (sem) {
      sem.name = name;
      this.save();
    }
  }

  addCourse(semesterId: string) {
    const sem = this.plan.semesters.find((s) => s.id === semesterId);
    if (sem) {
      const id = 'course-' + Date.now();
      sem.courses.push({
        id,
        name: '',
        credits: 6,
        status: 'planned',
        grade: 7.0,
      });
      this.save();
      this.onChange();
    }
  }

  deleteCourse(semesterId: string, courseId: string) {
    const sem = this.plan.semesters.find((s) => s.id === semesterId);
    if (sem) {
      sem.courses = sem.courses.filter((c) => c.id !== courseId);
      this.save();
      this.onChange();
    }
  }

  updateCourse(semesterId: string, courseId: string, updates: Partial<Course>) {
    const sem = this.plan.semesters.find((s) => s.id === semesterId);
    if (sem) {
      const course = sem.courses.find((c) => c.id === courseId);
      if (course) {
        Object.assign(course, updates);
        this.save();
      }
    }
  }

  private save() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.plan));
  }

  private load() {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        const result = validatePlan(parsed);
        if (result.valid) {
          this.plan = result.plan;
        }
      } catch {
        this.plan = DEFAULT_PLAN;
      }
    } else {
      this.plan = DEFAULT_PLAN;
    }
  }
}
