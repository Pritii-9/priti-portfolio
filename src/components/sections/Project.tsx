import RevealOnScroll from "../RevealOnScroll";
import type { ProjectItem } from "../../types/portfolio";

interface ProjectProps {
  projects: ProjectItem[];
}

const Project = ({ projects }: ProjectProps) => {
  return (
    <section id="projects" className="section">
      <RevealOnScroll>
        <div className="layout">
          <h2>Projects</h2>
          <div className="grid two-col">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div className="split">
                  <h3>{project.title}</h3>
                  <span>{project.period}</span>
                </div>
                <ul>
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
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
