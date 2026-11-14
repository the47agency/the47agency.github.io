export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  clientLabel: string;
  category: 'Marketing' | 'Software' | 'AI';
  headline: string;
  summary: string;
  architectureStack: string[];
}

/**
 * Verified client case studies will be published here once confirmed and approved for disclosure.
 * Unverified project examples are intentionally withheld to maintain factual credibility.
 */
export const WORK_PROJECTS: ProjectCaseStudy[] = [];
