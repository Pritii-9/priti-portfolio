import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { sectionRoutes } from "../routes/routes";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="top-nav">
      <div className="layout nav-inner">
        <a href="#home" className="brand">
          PRITI<span>.DEV</span>
        </a>

        <div className="desktop-links">
          {sectionRoutes.map((route) => (
            <a key={route.id} href={`#${route.id}`}>
              {route.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
