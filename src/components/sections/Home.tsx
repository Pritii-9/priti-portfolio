
import RevealOnScroll from "../RevealOnScroll";

interface HomeProps {
  name: string;
  title: string;
}

const Home = ({ name, title }: HomeProps) => {
  return (
    <section id="home" className="pt-[7rem] pb-[3rem]">
      <RevealOnScroll>
        {/* ✅ GRID LAYOUT (fixed) */}
<div className="w-[min(1180px,92vw)] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-[1.5rem] items-stretch">          
          {/* Main Hero Card */}
          <div className="relative border border-surface-border bg-surface rounded-[16px] p-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(45,212,191,0.15)] hover:border-[rgba(79,209,197,0.3)] h-full flex flex-col justify-between">
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-brand/[0.04] via-transparent to-accent-purple/[0.03] pointer-events-none" />
            
            <div className="relative z-10">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-brand/20 bg-brand/5">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <p className="text-sm font-ibm-plex-mono font-medium text-brand tracking-wide uppercase">
                  Full-Stack Engineer
                </p>
              </div>

              {/* Name */}
              <h1 className="m-0 mb-5 leading-[1.05] font-extrabold [font-size:clamp(2.4rem,5vw,4.2rem)] tracking-tight text-white">
                {name}
              </h1>

              {/* Title */}
              <p className="text-slate-300 leading-[1.7] text-[1.1rem] max-w-[65ch]">
                {title}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-[1rem] mt-[2rem]">
                <a
                  className="group inline-flex items-center gap-2 rounded-[12px] py-[0.85rem] px-[1.5rem] font-semibold text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_var(--color-brand-glow)] bg-gradient-to-r from-brand to-brand-strong text-[#041218]"
                  href="#projects"
                >
                  View Projects
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>

                <a
                  className="inline-flex items-center gap-2 rounded-[12px] py-[0.85rem] px-[1.5rem] font-semibold text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-border/30 border border-surface-border text-white"
                  href="#contact"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Focus Areas Card */}
          <div className="border border-surface-border bg-surface rounded-[16px] p-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(45,212,191,0.12)] hover:border-[rgba(79,209,197,0.3)] h-full flex flex-col">
            
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-brand to-brand-strong" />
              <h3 className="text-[1.1rem] font-semibold text-white tracking-tight">
                Focus Areas
              </h3>
            </div>

            <ul className="pl-[1.2rem] space-y-3">
              <li className="text-slate-300 text-[0.95rem] leading-[1.65]">
                Engineered <span className="text-white font-medium">scalable full-stack apps</span> (React, Flask, MongoDB)
              </li>
              <li className="text-slate-300 text-[0.95rem] leading-[1.65]">
                Built <span className="text-white font-medium">secure systems</span> using JWT, RBAC, and cloud integrations
              </li>
              <li className="text-slate-300 text-[0.95rem] leading-[1.65]">
                Developed <span className="text-white font-medium">real-time apps</span> with Socket.IO and AI workflows
              </li>
              <li className="text-slate-300 text-[0.95rem] leading-[1.65]">
                Deployed <span className="text-white font-medium">production-ready systems</span> using Docker, Nginx, AWS
              </li>
            </ul>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;

