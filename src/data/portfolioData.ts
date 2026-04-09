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
      "Developed a full-stack architectural management platform using React, Node.js, and TypeScript, implementing secure JWT authentication and role-based access for multi-user workspaces.",
"Engineered real-time collaboration features using Socket.IO, applying efficient data handling patterns to reduce latency and improve dashboard responsiveness.",
"Designed and optimized RESTful APIs for structured CRUD operations, validating endpoint behavior to ensure reliability and reduce regression issues.",
"Collaborated in an Agile environment to debug, test, and deliver features on schedule, actively participating in code reviews and maintaining clean, reusable code."
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

