import { useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activeSection: string;
};

export default function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <nav
      id="mobile-menu"
      aria-label="Mobile navigation"
      className="menu-in border-b border-graphite bg-ink/95 backdrop-blur-md lg:hidden"
    >
      <ul className="wrap divide-y divide-graphite py-2">
        {NAV_LINKS.map((link, index) => {
          const isActive = `#${activeSection}` === link.href;
          return (
            <li key={link.href}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={onClose}
                aria-current={isActive ? "true" : undefined}
                className={`flex min-h-[3.25rem] items-center text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white" : "text-concrete"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}