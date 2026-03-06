import RevealOnScroll from "../RevealOnScroll";
import type { ExperienceItem } from "../../types/portfolio";

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="section">
      <RevealOnScroll>
        <div className="layout">
          <h2>Experience</h2>
          <div className="grid one-col">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="card">
                <div className="split">
                  <h3>
                    {item.role} | {item.company}
                  </h3>
                  <span>{item.period}</span>
                </div>
                <p>
                  {item.project} | {item.location}
                </p>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
