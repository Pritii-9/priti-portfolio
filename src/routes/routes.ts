export const sectionRoutes = [
  { id: "home", label: "Home" },
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
] as const;

export const apiRoutes = {
  profile: "/api/v1/profile",
  education: "/api/v1/education",
  experience: "/api/v1/experience",
  projects: "/api/v1/projects",
  skills: "/api/v1/skills",
  contact: "/api/v1/contact"
} as const;
