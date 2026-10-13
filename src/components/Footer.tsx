import { Mail, Send } from "lucide-react";
import { FOOTER_SOCIAL, FOOTER_COPYRIGHT } from "../data/site";
import XLogo from "./XLogo";

export default function Footer() {
  return (
    <footer className="grain border-t border-graphite bg-coal/60">
      <div className="wrap py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
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

          <ul className="flex items-center gap-3">
            {FOOTER_SOCIAL.map((social) => {
              const isExternal = social.href.startsWith("http");
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={
                      social.label === "Email"
                        ? "Email Lesi Crypt"
                        : `Lesi Crypt on ${social.label}`
                    }
                    className="flex h-10 w-10 items-center justify-center border border-graphite bg-ink text-concrete transition-all duration-200 hover:-translate-y-0.5 hover:border-concrete hover:text-bone"
                  >
                    {social.label === "X" ? (
                      <XLogo size={15} />
                    ) : social.label === "Telegram" ? (
                      <Send size={16} strokeWidth={1.75} aria-hidden="true" />
                    ) : (
                      <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-graphite pt-6">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-concrete">
            {FOOTER_COPYRIGHT}
          </p>
          <p aria-hidden="true" className="label-mono">
            ♠
          </p>
        </div>
      </div>
    </footer>
  );
}