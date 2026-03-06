import RevealOnScroll from "../RevealOnScroll";
import type { EducationItem } from "../../types/portfolio";

interface AboutProps {
  summary: string;
  education: EducationItem[];
}

const About = ({ summary, education }: AboutProps) => {
  return (
    <section id="summary" className="section">
      <RevealOnScroll>
        <div className="layout">
          <h2>Professional Summary</h2>
          <div className="card">
            <p className="lead">{summary}</p>
          </div>

          <h2>Education</h2>
          <div className="grid one-col">
            {education.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="card">
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <p>
                  {item.location} | {item.period}
                </p>
                <p>CGPA: {item.cgpa}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
