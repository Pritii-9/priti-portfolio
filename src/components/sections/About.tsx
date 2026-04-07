import RevealOnScroll from "../RevealOnScroll";
import type { EducationItem } from "../../types/portfolio";

interface AboutProps {
  summary: string;
  education: EducationItem[];
}

const About = ({ summary, education }: AboutProps) => {
  return (
    <section id="summary" className="py-[5.5rem] pb-[2.5rem] md:pt-[4.8rem]">
      <RevealOnScroll>
        <div className="w-[min(1120px,92vw)] mx-auto">
          <h2 className="m-0 mb-[1.2rem] [font-size:clamp(1.55rem,2.8vw,2.25rem)]">Professional Summary</h2>
          <div className="border border-surface-border bg-surface rounded-[14px] p-[1.15rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(79,209,197,0.12)]">
            <p className="text-text-muted leading-relaxed [font-size:1.05rem] max-w-[70ch]">{summary}</p>
          </div>

          <h2 className="m-0 mb-[1.2rem] mt-[2rem] [font-size:clamp(1.55rem,2.8vw,2.25rem)]">Education</h2>
          <div className="grid grid-cols-1 gap-[0.9rem]">
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.degree}`}
                className="border border-surface-border bg-surface rounded-[14px] p-[1.15rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(79,209,197,0.12)]"
              >
                <h3 className="m-0 mb-2 text-[1.05rem]">{item.degree}</h3>
                <p className="text-text-muted">{item.institution}</p>
                <p className="text-text-muted">
                  {item.location} | {item.period}
                </p>
                <p className="text-text-muted">CGPA: {item.cgpa}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;