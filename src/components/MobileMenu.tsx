import type { Dispatch, SetStateAction } from "react";
import { sectionRoutes } from "../routes/routes";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      <button
        type="button"
        className="menu-close"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        ×
      </button>
      <div className="mobile-links">
        {sectionRoutes.map((route) => (
          <a key={route.id} href={`#${route.id}`} onClick={() => setMenuOpen(false)}>
            {route.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
