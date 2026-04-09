import RevealOnScroll from "../RevealOnScroll";

interface HomeProps {
  name: string;
  title: string;
}

const Home = ({ name, title }: HomeProps) => {
  return (
    <section id="home" className="pt-[7rem] pb-[3rem] relative">
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-accent to-bg pointer-events-none" />
      
      {/* Subtle radial glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/5 rounded-[50%] blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[30%] w-[400px] h-[400px] bg-accent-purple/4 rounded-[50%] blur-[100px] pointer-events-none" />

      <RevealOnScroll>
        <div className="relative z-10 w-[min(1180px,92vw)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[2rem] items-stretch">          
          
          {/* ===== LEFT: Main Hero Card ===== */}
          <div className="relative border border-surface-border/60 bg-surface/80 backdrop-blur-xl rounded-[20px] p-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-brand/30 h-full flex flex-col justify-between overflow-hidden">
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.03] via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full border border-brand/20 bg-brand/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
                </span>
                <p className="text-sm font-ibm-plex-mono font-medium text-brand tracking-wider uppercase">
                  Available for Opportunities
                </p>
              </div>

              {/* Name */}
              <div className="relative mb-6">
                <h1 className="m-0 leading-[1.05] font-black [font-size:clamp(2.8rem,5.5vw,4.5rem)] tracking-tight text-text-main">
                  {name}
                </h1>
                {/* Subtle glow behind name */}
                <div className="absolute -inset-4 bg-brand/5 blur-[40px] rounded-[30px] pointer-events-none" />
              </div>

              {/* Title */}
              <p className="text-text-muted/90 leading-[1.8] text-[1.15rem] max-w-[60ch] mb-2">
                {title}
              </p>
              
              {/* Accent line */}
              <div className="flex items-center gap-3 mt-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent" />
                <span className="text-xs font-ibm-plex-mono text-brand/60 tracking-[0.2em] uppercase">Building the future, one commit at a time</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-[1rem] mt-2">
                <a
                  className="group relative inline-flex items-center gap-2.5 rounded-[14px] py-[1rem] px-[1.8rem] font-bold text-[0.95rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-brand text-bg overflow-hidden"
                  href="#projects"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  View Projects
                </a>

                <a
                  className="group inline-flex items-center gap-2.5 rounded-[14px] py-[1rem] px-[1.8rem] font-bold text-[0.95rem] transition-all duration-300 hover:-translate-y-1 border border-surface-border/60 text-text-main bg-white/5 backdrop-blur-sm"
                  href="#contact"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Impact & Tech Stack Card ===== */}
          <div className="relative border border-surface-border/60 bg-surface/80 backdrop-blur-xl rounded-[20px] p-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent-purple/30 h-full flex flex-col justify-center overflow-hidden">
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-purple/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-[12px] border border-surface-border/40 bg-white/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.3rem] font-bold text-text-main tracking-tight">
                    Impact at a Glance
                  </h3>
                  <p className="text-xs font-ibm-plex-mono text-text-subtle tracking-wider uppercase">Why I stand out</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Stat 1 */}
                <div className="group relative rounded-[14px] bg-white/5 border border-surface-border/40 p-4 transition-all duration-300 hover:bg-white/10 hover:border-brand/30">
                  <div className="text-2xl font-black text-brand mb-1">1+</div>
                  <div className="text-xs text-text-muted font-medium">Years Building</div>
                </div>
                
                {/* Stat 2 */}
                <div className="group relative rounded-[14px] bg-white/5 border border-surface-border/40 p-4 transition-all duration-300 hover:bg-white/10 hover:border-accent-purple/30">
                  <div className="text-2xl font-black text-accent-purple mb-1">10+</div>
                  <div className="text-xs text-text-muted font-medium">Projects Done</div>
                </div>
                
                {/* Stat 3 */}
                <div className="group relative rounded-[14px] bg-white/5 border border-surface-border/40 p-4 transition-all duration-300 hover:bg-white/10">
                  <div className="text-2xl font-black text-text-main mb-1">10+</div>
                  <div className="text-xs text-text-muted font-medium">Technologies</div>
                </div>
                
                {/* Stat 4 */}
                <div className="group relative rounded-[14px] bg-white/5 border border-surface-border/40 p-4 transition-all duration-300 hover:bg-white/10">
                  <div className="text-2xl font-black text-text-main mb-1">100%</div>
                  <div className="text-xs text-text-muted font-medium">Commitment</div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'TypeScript'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 rounded-[10px] text-xs font-semibold border border-surface-border/40 bg-white/5 text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-text-main hover:bg-white/10 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;