export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  contextNote: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "superworks-exp",
    company: "Superworks",
    role: "Full Stack / MERN Developer",
    duration: "1+ year",
    location: "Surat, Gujarat, India",
    type: "Professional Production Experience",
    summary: "Contributed to a production enterprise HRMS platform handling employee lifecycle management, attendance, leave approval workflows, payroll processing, expenses, email notifications, and administrative dashboards.",
    responsibilities: [
      "Developed and maintained React.js user interfaces for enterprise HR modules.",
      "Built and updated backend REST API endpoints using Node.js and Express.js.",
      "Optimized MongoDB queries and document updates for employee datasets.",
      "Implemented automated email-notification configuration workflows for company updates.",
      "Diagnosed and resolved complex production state bugs and UI edge cases.",
      "Collaborated on business workflow enhancements across attendance and leave approvals."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Axios", "SCSS", "Git"],
    contextNote: "This entry represents professional software engineering experience as part of an engineering team, not independent ownership of the Superworks product."
  }
];
