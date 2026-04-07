import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { sectionRoutes } from "../routes/routes";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-surface-border/40 bg-bg-accent/90 shadow-lg"
          : "border-b border-transparent bg-bg-accent/70"
      } backdrop-blur-xl`}
    >
      <div className="relative z-10 w-[min(1180px,92vw)] mx-auto min-h-[4.5rem] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 no-underline font-ibm-plex-mono font-bold text-[1.1rem] tracking-tight transition-all duration-300"
        >
          <span className="text-text-main">PRITI</span>
          <span className="text-brand">.DEV</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[0.35rem]">
          {sectionRoutes.map((route) => (
            <a
              key={route.id}
              href={`#${route.id}`}
              className="group relative px-3.5 py-2 text-[0.85rem] font-semibold text-text-muted no-underline rounded-[10px] transition-all duration-300 hover:text-text-main hover:bg-white/5"
            >
              {route.label}
            </a>
          ))}
        </div>

        {/* Right side: Theme toggle + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            className="relative w-11 h-11 flex items-center justify-center border border-surface-border/30 rounded-[10px] bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-brand/40 hover:bg-brand/10"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative w-11 h-11 flex items-center justify-center border border-surface-border/30 rounded-[10px] bg-white/5 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-brand/40 hover:bg-brand/10"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block w-[18px] h-[2px] bg-text-main rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-[18px] h-[2px] bg-text-main rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-[18px] h-[2px] bg-text-main rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;