import type { Dispatch, SetStateAction } from "react";
import { sectionRoutes } from "../routes/routes";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-[50] flex flex-col justify-center items-center pointer-events-none opacity-0 bg-[rgba(4,8,16,0.97)] backdrop-blur-xl transition-all duration-300 ${
        menuOpen ? "pointer-events-auto opacity-100" : ""
      }`}
    >
      {/* Close Button */}
      <button
        type="button"
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-surface-border/40 rounded-[8px] bg-surface/50 text-text-main cursor-pointer transition-all duration-200 hover:border-brand/40 hover:bg-brand/5"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />

      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-[0.5rem]">
        {sectionRoutes.map((route, index) => (
          <a
            key={route.id}
            href={`#${route.id}`}
            className={`text-[1.25rem] font-medium no-underline rounded-[10px] px-6 py-3 transition-all duration-300 hover:text-text-main hover:bg-surface-border/15 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: menuOpen ? `${index * 60 + 100}ms` : "0ms",
              color: "var(--color-text-muted)"
            }}
            onClick={() => setMenuOpen(false)}
          >
            {route.label}
          </a>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-8 flex items-center gap-2 text-text-subtle text-[0.75rem] font-ibm-plex-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
        <span>PRITI.DEV</span>
      </div>
    </div>
  );
};

export default MobileMenu;