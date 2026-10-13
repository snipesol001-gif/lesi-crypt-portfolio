import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-graphite bg-ink/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          aria-label="Lesi Crypt, back to top"
        >
          <span aria-hidden="true" className="text-lg leading-none text-bone">
            ♠
          </span>
          <span className="font-display text-base uppercase tracking-[0.12em] text-white">
            Lesi Crypt
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = `#${activeSection}` === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`nav-link text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:text-white ${
                      isActive ? "is-active" : "text-concrete"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-10 w-10 items-center justify-center border border-graphite text-bone transition-colors duration-200 hover:border-concrete hover:text-white lg:hidden"
        >
          {menuOpen ? (
            <X size={20} strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
          )}
        </button>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        activeSection={activeSection}
      />
    </header>
  );
}