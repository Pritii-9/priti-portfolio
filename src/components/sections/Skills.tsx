import RevealOnScroll from "../RevealOnScroll";
import type { SkillGroup } from "../../types/portfolio";

interface SkillsProps {
  skills: SkillGroup[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="py-[5.5rem] pb-[2.5rem] md:pt-[4.8rem]">
      <RevealOnScroll>
        <div className="w-[min(1120px,92vw)] mx-auto">
          <h2 className="m-0 mb-[1.2rem] [font-size:clamp(1.55rem,2.8vw,2.25rem)]">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-[0.9rem] md:grid-cols-1">
            {skills.map((group) => (
              <article
                key={group.category}
                className="border border-surface-border bg-surface rounded-[14px] p-[1.15rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(79,209,197,0.12)]"
              >
                <h3 className="m-0 mb-2 text-[1.05rem]">{group.category}</h3>
                <div className="flex flex-wrap gap-[0.45rem]">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-[rgba(79,209,197,0.35)] text-brand rounded-full px-[0.65rem] py-[0.3rem] text-[0.84rem] font-ibm-plex-mono"
                    >
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