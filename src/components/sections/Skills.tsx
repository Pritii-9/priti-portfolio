import RevealOnScroll from "../RevealOnScroll";
import type { SkillGroup } from "../../types/portfolio";

interface SkillsProps {
  skills: SkillGroup[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="relative py-[6rem] pb-[3rem]">
      <RevealOnScroll>
        <div className="relative z-10 w-[min(1120px,92vw)] mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-[14px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h11.36M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 0115 0m-15 0H3" />
              </svg>
            </div>
            <div>
              <h2 className="m-0 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-text-main tracking-tight">Technical Skills</h2>
              <p className="text-xs font-ibm-plex-mono text-text-subtle tracking-[0.15em] uppercase m-0">My toolkit</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
            {skills.map((group) => (
              <article
                key={group.category}
                className="group relative border border-surface-border/50 bg-surface/60 backdrop-blur-xl rounded-[20px] p-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="m-0 text-[1.05rem] font-bold text-text-main tracking-tight">{group.category}</h3>
                  </div>
                  
                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-xs font-semibold border border-surface-border/40 bg-white/5 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-text-main hover:bg-white/10 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                        {item}
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

export default Skills;