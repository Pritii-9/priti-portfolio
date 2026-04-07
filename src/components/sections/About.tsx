import RevealOnScroll from "../RevealOnScroll";
import type { EducationItem } from "../../types/portfolio";

interface AboutProps {
  summary: string;
  education: EducationItem[];
}

const About = ({ summary, education }: AboutProps) => {
  return (
    <section id="summary" className="relative py-[6rem] pb-[3rem]">
      <RevealOnScroll>
        <div className="relative z-10 w-[min(1120px,92vw)] mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-[14px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h2 className="m-0 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-text-main tracking-tight">Professional Summary</h2>
              <p className="text-xs font-ibm-plex-mono text-text-subtle tracking-[0.15em] uppercase m-0">Who I am</p>
            </div>
          </div>

          {/* Summary Card */}
          <div className="relative border border-surface-border/50 bg-surface/60 backdrop-blur-xl rounded-[20px] p-[2rem] mb-[3rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
            <p className="text-text-muted/90 leading-[1.85] [font-size:1.08rem] max-w-[75ch]">{summary}</p>
          </div>

          {/* Education Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-[14px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
            </div>
            <div>
              <h2 className="m-0 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-text-main tracking-tight">Education</h2>
              <p className="text-xs font-ibm-plex-mono text-text-subtle tracking-[0.15em] uppercase m-0">Academic background</p>
            </div>
          </div>

          {/* Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.2rem]">
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.degree}`}
                className="group relative border border-surface-border/50 bg-surface/60 backdrop-blur-xl rounded-[20px] p-[1.75rem] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Degree */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-[10px] border border-surface-border/40 bg-white/5 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="m-0 text-[1.1rem] font-bold text-text-main leading-tight">{item.degree}</h3>
                    </div>
                  </div>
                  
                  {/* Institution */}
                  <p className="text-brand font-medium text-[0.95rem] mb-3">{item.institution}</p>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {item.period}
                    </div>
                  </div>
                  
                  {/* CGPA Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-surface-border/40">
                    <span className="text-xs text-text-muted">CGPA</span>
                    <span className="text-sm font-bold text-brand">{item.cgpa}</span>
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

export default About;