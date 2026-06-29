import {
  calculateMetrics,
  type Course,
  type CourseStatus,
  type DegreePlan,
  type Semester,
} from './logic';
import type { PlannerStore } from './store';

export interface CurriculumLabels {
  degreeNameLabel: string;
  graduationCreditsLabel: string;
  targetGpaLabel: string;
  realGpaLabel: string;
  projectedGpaLabel: string;
  creditsCompletedLabel: string;
  requiredGradeLabel: string;
  addSemesterButton: string;
  addCourseButton: string;
  exportPlanButton: string;
  importPlanButton: string;
  semesterNamePlaceholder: string;
  courseNamePlaceholder: string;
  creditsPlaceholder: string;
  gradePlaceholder: string;
  statusCompleted: string;
  statusInProgress: string;
  statusPlanned: string;
  importError: string;
  uploadHint: string;
  statusMessageSuccess: string;
  statusMessageWarning: string;
  statusMessageImpossible: string;
  degreeNamePlaceholder: string;
  deleteSemesterLabel: string;
  deleteCourseLabel: string;
  semesterTitleTemplate: string;
}

export class DOMRenderer {
  private semestersContainer: HTMLElement;
  private banner: HTMLElement;

  constructor(
    private root: HTMLElement,
    private labels: CurriculumLabels,
    private store: PlannerStore
  ) {
    this.semestersContainer = root.querySelector('[data-semesters-container]') as HTMLElement;
    this.banner = root.querySelector('[data-status-banner]') as HTMLElement;
  }

  showError(message: string) {
    this.banner.textContent = message;
    this.banner.hidden = false;
    setTimeout(() => {
      this.banner.hidden = true;
    }, 5000);
  }

  renderLayout() {
    const plan = this.store.getPlan();
    this.syncMetaInputs(plan);

    this.semestersContainer.innerHTML = '';
    const semesterTemplate = this.root.querySelector('#tracker-semester-template') as HTMLTemplateElement;
    const courseTemplate = this.root.querySelector('#tracker-course-template') as HTMLTemplateElement;

    plan.semesters.forEach((sem) => {
      const semCard = this.createSemesterCard(sem, semesterTemplate, courseTemplate);
      this.semestersContainer.appendChild(semCard);
    });

    this.updateCalculatedStats();
  }

  private syncMetaInputs(plan: DegreePlan) {
    const titleInput = this.root.querySelector('[data-degree-name-input]') as HTMLInputElement;
    if (titleInput && document.activeElement !== titleInput) {
      titleInput.value = plan.degreeName;
    }

    const creditsInput = this.root.querySelector('[data-graduation-credits-input]') as HTMLInputElement;
    if (creditsInput && document.activeElement !== creditsInput) {
      creditsInput.value = String(plan.graduationCredits);
    }

    const targetGpaInput = this.root.querySelector('[data-target-gpa-input]') as HTMLInputElement;
    if (targetGpaInput && document.activeElement !== targetGpaInput) {
      targetGpaInput.value = String(plan.targetGpa);
    }
  }

  private createSemesterCard(
    sem: Semester,
    semesterTemplate: HTMLTemplateElement,
    courseTemplate: HTMLTemplateElement
  ): HTMLElement {
    const semFragment = semesterTemplate.content.cloneNode(true) as DocumentFragment;
    const semCard = semFragment.querySelector('.tracker-semester-card') as HTMLElement;
    semCard.setAttribute('data-semester-id', sem.id);

    const titleIn = semFragment.querySelector('[data-semester-name-input]') as HTMLInputElement;
    titleIn.value = sem.name;
    titleIn.addEventListener('input', () => {
      this.store.updateSemesterName(sem.id, titleIn.value);
    });

    semFragment.querySelector('[data-action="delete-semester"]')?.addEventListener('click', () => {
      this.store.deleteSemester(sem.id);
    });

    semFragment.querySelector('[data-action="add-course"]')?.addEventListener('click', () => {
      this.store.addCourse(sem.id);
    });

    const coursesHost = semFragment.querySelector('[data-courses-container]') as HTMLElement;
    sem.courses.forEach((course) => {
      const cRow = this.createCourseRow(course, courseTemplate, sem.id);
      coursesHost.appendChild(cRow);
    });

    return semCard;
  }

  private createCourseRow(
    course: Course,
    courseTemplate: HTMLTemplateElement,
    semesterId: string
  ): HTMLElement {
    const cFragment = courseTemplate.content.cloneNode(true) as DocumentFragment;
    const cRow = cFragment.querySelector('.tracker-course-row') as HTMLElement;
    cRow.setAttribute('data-course-id', course.id);

    const nameIn = cFragment.querySelector('[data-course-name-input]') as HTMLInputElement;
    nameIn.value = course.name;
    nameIn.addEventListener('input', () => {
      this.store.updateCourse(semesterId, course.id, { name: nameIn.value });
    });

    const creditsIn = cFragment.querySelector('[data-course-credits-input]') as HTMLInputElement;
    creditsIn.value = course.credits > 0 ? String(course.credits) : '';
    creditsIn.addEventListener('input', () => {
      const val = creditsIn.value.trim() ? Number(creditsIn.value) : 0;
      this.store.updateCourse(semesterId, course.id, { credits: val });
      this.updateCalculatedStats();
    });

    this.setupStatusAndGradeInputs(cFragment, course, semesterId);

    cFragment.querySelector('[data-action="delete-course"]')?.addEventListener('click', () => {
      this.store.deleteCourse(semesterId, course.id);
    });

    return cRow;
  }

  private setupStatusAndGradeInputs(cFragment: DocumentFragment, course: Course, semesterId: string) {
    const statusSel = cFragment.querySelector('[data-course-status-input]') as HTMLSelectElement;
    statusSel.value = course.status;
    statusSel.className = `tracker-course-status status-${course.status}`;
    statusSel.addEventListener('change', () => {
      const newStatus = statusSel.value as CourseStatus;
      statusSel.className = `tracker-course-status status-${newStatus}`;
      this.store.updateCourse(semesterId, course.id, { status: newStatus });
      this.updateCalculatedStats();
    });

    const gradeIn = cFragment.querySelector('[data-course-grade-input]') as HTMLInputElement;
    gradeIn.value = course.grade !== null ? String(course.grade) : '';
    gradeIn.addEventListener('input', () => {
      const val = gradeIn.value.trim() ? Number(gradeIn.value) : null;
      this.store.updateCourse(semesterId, course.id, { grade: val });
      this.updateCalculatedStats();
    });
  }

  updateCalculatedStats() {
    const plan = this.store.getPlan();
    const metrics = calculateMetrics(plan);

    this.setText('[data-stat="real-gpa"]', metrics.realGpa.toFixed(2));
    this.setText('[data-stat="projected-gpa"]', metrics.projectedGpa.toFixed(2));
    this.setText('[data-stat="credits-progress"]', `${metrics.completedCredits} / ${plan.graduationCredits}`);

    const progressBar = this.root.querySelector('[data-stat-bar="credits-svg"]') as SVGLineElement | null;
    if (progressBar) {
      const pct = Math.min(100, Math.max(0, (metrics.completedCredits / plan.graduationCredits) * 100));
      progressBar.setAttribute('x2', String(pct));
    }

    this.updateAdvisorBanner(metrics.requiredRemainingGrade);
  }

  private setText(selector: string, text: string) {
    const el = this.root.querySelector(selector) as HTMLElement | null;
    if (el) el.textContent = text;
  }

  private updateAdvisorBanner(reqG: number | null) {
    const reqGradeEl = this.root.querySelector('[data-stat="required-grade"]') as HTMLElement | null;
    const advisorBanner = this.root.querySelector('[data-advisor-banner]') as HTMLElement | null;

    if (!reqGradeEl || !advisorBanner) return;

    if (reqG === null) {
      reqGradeEl.textContent = '--';
      advisorBanner.hidden = true;
      return;
    }

    reqGradeEl.textContent = reqG.toFixed(2);
    advisorBanner.hidden = false;

    if (reqG > 10.0) {
      advisorBanner.className = 'tracker-advisor-banner advisor-impossible';
      advisorBanner.textContent = this.labels.statusMessageImpossible;
    } else if (reqG <= 5.0) {
      advisorBanner.className = 'tracker-advisor-banner advisor-success';
      advisorBanner.textContent = this.labels.statusMessageSuccess;
    } else {
      advisorBanner.className = 'tracker-advisor-banner advisor-warning';
      advisorBanner.textContent = this.labels.statusMessageWarning.replace('{grade}', reqG.toFixed(2));
    }
  }
}
