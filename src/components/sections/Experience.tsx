import RevealOnScroll from "../RevealOnScroll";
import type { ExperienceItem } from "../../types/portfolio";

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="py-[5.5rem] pb-[2.5rem] md:pt-[4.8rem]">
      <RevealOnScroll>
        <div className="w-[min(1120px,92vw)] mx-auto">
          <h2 className="m-0 mb-[1.2rem] [font-size:clamp(1.55rem,2.8vw,2.25rem)]">Experience</h2>
          <div className="grid grid-cols-1 gap-[0.9rem]">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="border border-surface-border bg-surface rounded-[14px] p-[1.15rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(79,209,197,0.12)]"
              >
                <div className="flex justify-between items-center gap-[0.8rem] flex-wrap">
                  <h3 className="m-0 mb-2 text-[1.05rem]">
                    {item.role} | {item.company}
                  </h3>
                  <span className="text-text-muted">{item.period}</span>
                </div>
                <p className="text-text-muted">
                  {item.project} | {item.location}
                </p>
                <ul className="m-[0.45rem] pl-[1.1rem]">
                  {item.highlights.map((point) => (
                    <li key={point} className="text-text-muted leading-relaxed">{point}</li>
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