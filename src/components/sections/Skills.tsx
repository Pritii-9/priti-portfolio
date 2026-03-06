import RevealOnScroll from "../RevealOnScroll";
import type { SkillGroup } from "../../types/portfolio";

interface SkillsProps {
  skills: SkillGroup[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="section">
      <RevealOnScroll>
        <div className="layout">
          <h2>Technical Skills</h2>
          <div className="grid two-col">
            {skills.map((group) => (
              <article key={group.category} className="card">
                <h3>{group.category}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
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

export default Skills;
