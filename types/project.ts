export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: "completed" | "in_development" | "planned";
  category: "production" | "soc_lab" | "systems" | "governance";
  completedDate?: string;
  objective: string;
  problemContext: string;
  architecture: string;
  toolsUsed: string[];
  builtOrConfigured: string[];
  investigationWork: string[];
  findings: string[];
  remediation: string[];
  evidenceAssets: {
    title: string;
    description: string;
    assetUrl: string;
  }[];
  githubUrl?: string;
  docsUrl?: string;
  lessonsLearned: string[];
  realWorldRelevance: string;
  interviewExplanation: string;
}
