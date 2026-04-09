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
    <section id="projects" className="relative py-[6rem] pb-[3rem]">
      <RevealOnScroll>
        <div className="relative z-10 w-[min(1120px,92vw)] mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-[14px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div>
              <h2 className="m-0 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-text-main tracking-tight">Projects</h2>
              <p className="text-xs font-ibm-plex-mono text-text-subtle tracking-[0.15em] uppercase m-0">What I've built</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
            {sortedProjects.map((project) => (
              <article
                key={project.title}
                className="group relative border border-surface-border/50 bg-surface/60 backdrop-blur-xl rounded-[20px] p-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-start gap-3">
                      {/* Project Icon */}
                      <div className="w-11 h-11 rounded-[12px] border border-surface-border/40 bg-white/5 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="m-0 text-[1.15rem] font-bold text-text-main leading-tight">{project.title}</h3>
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-1 text-sm text-brand hover:text-brand/80 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                    
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-surface-border/40 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                      <span className="text-[0.7rem] font-medium text-text-muted">{project.period}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-text-muted/90 leading-[1.7] text-[0.92rem] mb-5">{project.description}</p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-text-muted/80 text-[0.88rem] leading-[1.6]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-border/30">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-[8px] text-[0.75rem] font-semibold border border-surface-border/40 bg-white/5 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-text-main hover:bg-white/10 cursor-default"
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