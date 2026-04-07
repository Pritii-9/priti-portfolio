import RevealOnScroll from "../RevealOnScroll";
import type { ProjectItem } from "../../types/portfolio";

interface ProjectProps {
  projects: ProjectItem[];
}

// Parse month-year string to Date for sorting
const parseDate = (period: string): Date => {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };
  const parts = period.split(" ");
  if (parts.length === 2) {
    const month = months[parts[0]] ?? 0;
    const year = parseInt(parts[1], 10);
    return new Date(year, month);
  }
  return new Date();
};

const Project = ({ projects }: ProjectProps) => {
  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort(
    (a, b) => parseDate(b.period).getTime() - parseDate(a.period).getTime()
  );

  return (
    <section id="projects" className="py-[5.5rem] pb-[2.5rem] md:pt-[4.8rem]">
      <RevealOnScroll>
        <div className="w-[min(1120px,92vw)] mx-auto">
          <h2 className="m-0 mb-[1.2rem] [font-size:clamp(1.55rem,2.8vw,2.25rem)]">Projects</h2>
          <div className="grid grid-cols-2 gap-[1.2rem] md:grid-cols-1">
            {sortedProjects.map((project, index) => (
              <article
                key={project.title}
                className={`relative overflow-hidden rounded-[14px] p-[1.5rem] transition-all duration-300 hover:-translate-y-1 group ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-[#0c1a3a] to-[#0f2847] border border-[rgba(59,130,246,0.25)] hover:border-[rgba(59,130,246,0.5)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
                    : "bg-gradient-to-br from-[#0a1628] to-[#111d35] border border-[rgba(96,165,250,0.2)] hover:border-[rgba(96,165,250,0.45)] hover:shadow-[0_8px_32px_rgba(96,165,250,0.12)]"
                }`}
              >
                {/* Decorative gradient orb */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${
                  index % 2 === 0 ? "bg-blue-400" : "bg-sky-400"
                }`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-center gap-[0.8rem] flex-wrap mb-3">
                    <h3 className="m-0 text-[1.15rem] font-semibold text-[#e2e8f0]">{project.title}</h3>
                    <span className="text-[0.85rem] text-[#64748b] font-ibm-plex-mono">{project.period}</span>
                  </div>
                  <p className="mb-4 text-[0.95rem] text-[#94a3b8] leading-[1.6] italic">{project.description}</p>
                  <ul className="m-[0.45rem] pl-[1.1rem] space-y-1">
                    {project.highlights.map((point) => (
                      <li key={point} className="text-[#94a3b8] leading-relaxed">{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-[0.5rem] mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[rgba(59,130,246,0.35)] text-[#60a5fa] rounded-full px-[0.7rem] py-[0.3rem] text-[0.82rem] font-ibm-plex-mono bg-[rgba(59,130,246,0.08)] hover:bg-[rgba(59,130,246,0.15)] transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Project;