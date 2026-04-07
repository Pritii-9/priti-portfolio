import type { PortfolioProfile } from "../types/portfolio";

export const portfolioData: PortfolioProfile = {
  name: "Priti Jadhav",
  title:
    "Full-Stack Software Developer | React, TypeScript, Python (Flask), Cloud & Docker",
  summary:
    "Full-stack developer specializing in scalable web applications using React, TypeScript, and Python (Flask). Experienced in building secure systems with JWT and RBAC, real-time features with Socket.IO, and deploying production-ready applications using Docker and AWS. Strong foundation in DSA and OOP, focused on delivering high-performance, user-centric solutions.",
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
      description: "A secure full-stack document platform with byte-range PDF streaming for large files.",
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
      description: "A responsive mock interview platform with AI-powered voice conversations for technical interviews.",
      stack: ["Next.js", "React", "JavaScript", "Vapi API", "Supabase"],
      highlights: [
        "Developed a responsive mock interview platform in Next.js for desktop and mobile.",
        "Integrated Vapi Voice AI + Supabase for real-time technical interview conversations.",
        "Implemented adaptive AI prompts and optimized frontend performance for smooth interactions."
      ]
    },
    {
      title: "EcoSense: Sustainability Tracker",
      period: "April 2026",
      description: "Full-stack sustainability tracker with real-time impact metrics and circular economy features.",
      stack: ["React", "TypeScript", "Python", "Flask", "MongoDB", "Socket.IO", "Tailwind CSS", "Docker", "Nginx"],
      highlights: [
          "Implemented live data sync using Socket.IO.",
  "Secured system with JWT authentication and onboarding flows.",
  "Built responsive UI with Tailwind (dark/light support).",
  "Engineered team collaboration with roles and leaderboards.",
  "Deployed using Docker and Nginx for scalability."
      ]
    }
  ],
 skills: [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Core Concepts",
    items: ["DSA", "OOP", "System Design"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Flask", "TailwindCSS"]
  },
  {
    category: "Databases & APIs",
    items: ["MongoDB", "SQL", "RESTful API Design"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3)", "Docker", "Nginx", "Git"]
  }
]
};

