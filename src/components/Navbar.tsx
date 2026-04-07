import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { sectionRoutes } from "../routes/routes";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border/60 bg-[rgba(6,10,20,0.92)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          : "border-b border-surface-border/30 bg-[rgba(6,10,20,0.8)]"
      } backdrop-blur-[14px]`}
    >
      <div className="w-[min(1180px,92vw)] mx-auto min-h-[4.25rem] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 text-text-main no-underline font-ibm-plex-mono font-semibold text-[1.05rem] tracking-tight transition-colors duration-200"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-br from-brand to-brand-strong transition-transform duration-200 group-hover:rotate-45" />
          PRITI<span className="text-brand">.DEV</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[0.25rem]">
          {sectionRoutes.map((route) => (
            <a
              key={route.id}
              href={`#${route.id}`}
              className="relative px-3 py-2 text-[0.88rem] font-medium text-text-muted no-underline rounded-[8px] transition-all duration-200 hover:text-text-main hover:bg-surface-border/20"
            >
              {route.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden relative w-10 h-10 flex items-center justify-center border border-surface-border/40 rounded-[8px] bg-surface/50 backdrop-blur-sm cursor-pointer transition-all duration-200 hover:border-brand/40 hover:bg-brand/5"
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
    </nav>
  );
};

export default Navbar;