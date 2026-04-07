import RevealOnScroll from "../RevealOnScroll";
import type { ExperienceItem } from "../../types/portfolio";

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="relative py-[6rem] pb-[3rem]">
      <RevealOnScroll>
        <div className="relative z-10 w-[min(1120px,92vw)] mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-[14px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </div>
            <div>
              <h2 className="m-0 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-text-main tracking-tight">Experience</h2>
              <p className="text-xs font-ibm-plex-mono text-text-subtle tracking-[0.15em] uppercase m-0">Where I've worked</p>
            </div>
          </div>

          {/* Experience List */}
          <div className="space-y-[1.5rem]">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className="group relative border border-surface-border/50 bg-surface/60 backdrop-blur-xl rounded-[20px] p-[2rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Company Initial */}
                      <div className="w-12 h-12 rounded-[12px] border border-surface-border/40 bg-white/5 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-black text-brand">{item.company.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="m-0 text-[1.2rem] font-bold text-text-main leading-tight">{item.role}</h3>
                        <p className="text-brand font-medium text-[0.95rem] mt-1">{item.company}</p>
                      </div>
                    </div>
                    
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-surface-border/40">
                      <svg className="w-4 h-4 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      <span className="text-sm font-medium text-text-muted">{item.period}</span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-text-muted">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                      </svg>
                      {item.project}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {item.location}
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-text-muted/90 leading-[1.65]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;