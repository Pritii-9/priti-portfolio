import { portfolioData } from "../data/portfolioData";
import { apiRoutes } from "../routes/routes";
import type {
  ContactPayload,
  ContactResponse,
  EducationItem,
  ExperienceItem,
  PortfolioProfile,
  ProjectItem,
  SkillGroup
} from "../types/portfolio";

const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export const portfolioApi = {
  async getProfile(): Promise<PortfolioProfile> {
    await wait();
    return portfolioData;
  },
  async getEducation(): Promise<EducationItem[]> {
    await wait();
    return portfolioData.education;
  },
  async getExperience(): Promise<ExperienceItem[]> {
    await wait();
    return portfolioData.experience;
  },
  async getProjects(): Promise<ProjectItem[]> {
    await wait();
    return portfolioData.projects;
  },
  async getSkills(): Promise<SkillGroup[]> {
    await wait();
    return portfolioData.skills;
  },
  async postContact(payload: ContactPayload): Promise<ContactResponse> {
    await wait();

    if (!payload.name || !payload.email || !payload.message) {
      return { success: false, message: "All fields are required." };
    }

    return {
      success: true,
      message:
        "Message accepted. Connect this route to FastAPI or Next.js API route for production delivery."
    };
  }
};

export { apiRoutes };
