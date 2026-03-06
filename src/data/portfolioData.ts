import type { PortfolioProfile } from "../types/portfolio";

export const portfolioData: PortfolioProfile = {
  name: "Priti Jadhav",
  title:
    "Software Developer | Full-Stack Engineering, focused on building scalable web applications with FastAPI and Next.js.",
  summary:
    "Proven track record in implementing secure authentication models and AI-powered features to drive digital innovation. Adept in bridging technical complexity with seamless user experiences.",
  education: [
    {
      institution: "GH Raisoni College of Engineering and Management",
      degree: "Bachelor of Technology in Information Technology",
      cgpa: "8.6",
      period: "Sep 2023 - Jun 2026",
      location: "Pune, MH"
    }
  ],
  experience: [
    {
      role: "Software Developer Intern",
      company: "Exaltasoft Solutions",
      period: "Mar 2025 - Present",
      location: "Pune, MH",
      project: "ArchManage (Architectural Management Platform)",
      highlights: [
        "Built a scalable FastAPI + React SaaS platform used by 15+ architectural firms.",
        "Delivered a Smart Quotation module that reduced manual estimate preparation time by 40%.",
        "Implemented JWT-based RBAC and optimized API performance in agile release cycles."
      ]
    }
  ],
  projects: [
    {
      title: "Secure PDF Streaming Platform",
      period: "Feb 2026",
      stack: ["Python", "Flask", "React", "MongoDB", "Docker", "AWS S3"],
      highlights: [
        "Built a secure full-stack document platform with byte-range PDF streaming for large files.",
        "Integrated AWS S3 multipart uploads and lazy rendering, improving load performance by 25%.",
        "Added JWT auth with email verification and containerized deployment using Docker."
      ]
    },
    {
      title: "AI Mock Interview Platform",
      period: "Dec 2025",
      stack: ["Next.js", "React", "JavaScript", "Vapi API", "Supabase"],
      highlights: [
        "Developed a responsive mock interview platform in Next.js for desktop and mobile.",
        "Integrated Vapi Voice AI + Supabase for real-time technical interview conversations.",
        "Implemented adaptive AI prompts and optimized frontend performance for smooth interactions."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Flask", "FastAPI", "TailwindCSS"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, S3)", "Docker", "Git", "Supabase"]
    },
    {
      category: "Libraries & Tools",
      items: ["Pandas", "NumPy", "Matplotlib", "Postman", "VS Code"]
    }
  ]
};

