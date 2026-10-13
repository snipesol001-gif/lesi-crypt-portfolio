import { Mail, Send, Globe, ArrowUpRight } from "lucide-react";
import { CONTACT, CONTACT_METHODS } from "../data/site";
import Reveal from "./Reveal";
import XLogo from "./XLogo";

/* Spade silhouette reused from the favicon, as a closing watermark */
const SPADE_PATH =
  "M32 7c-3.2 7.4-9.1 12-13.6 15.6C14.7 25.4 13 28 13 31.2c0 4.8 3.7 8.4 8.3 8.4 2.6 0 4.9-1.1 6.4-3-0.7 4.6-2.7 7.9-5.6 10.2-1 .8-0.6 2.2 0.7 2.2h18.4c1.3 0 1.7-1.4 0.7-2.2-2.9-2.3-4.9-5.6-5.6-10.2 1.5 1.9 3.8 3 6.4 3 4.6 0 8.3-3.6 8.3-8.4 0-3.2-1.7-5.8-5.4-8.6C41.1 19 35.2 14.4 32 7z";

function MethodIcon({ label }: { label: string }) {
  switch (label) {
    case "Email":
      return <Mail size={18} strokeWidth={1.5} aria-hidden="true" />;
    case "X":
      return <XLogo size={15} />;
    case "Telegram":
      return <Send size={18} strokeWidth={1.5} aria-hidden="true" />;
    default:
      return <Globe size={18} strokeWidth={1.5} aria-hidden="true" />;
  }
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grain section-pad relative overflow-hidden"
    >
      {/* Decorative closing watermark, mirrors the hero */}
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -bottom-14 -right-10 hidden h-[20rem] w-[20rem] select-none text-white/[0.04] md:block lg:h-[26rem] lg:w-[26rem]"
      >
        <path fill="currentColor" d={SPADE_PATH} />
      </svg>

      <div className="wrap relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="label-mono flex items-center gap-2.5">
              <span aria-hidden="true" className="text-bone">♠</span>
              {CONTACT.label}
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
            <p className="label-mono hidden sm:block">Lesi Crypt / Web3 Operator</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <h2
                id="contact-heading"
                className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[1] text-white"
              >
                {CONTACT.heading}
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-bone sm:text-lg">
                {CONTACT.body}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <a href={CONTACT.ctaHref} className="btn btn-primary sm:px-8">
                  {CONTACT.ctaLabel}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-5">
            <nav aria-label="Contact methods">
              <ul className="frame-corners divide-y divide-graphite border border-graphite bg-coal shadow-hard">
                {CONTACT_METHODS.map((method) => {
                  const isExternal = method.href.startsWith("http");
                  return (
                    <li key={method.label}>
                      <a
                        href={method.href}
                        {...(isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex min-h-[3.5rem] items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-ink/60 sm:px-6"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-graphite bg-ink text-concrete transition-colors duration-200 group-hover:text-bone">
                          <MethodIcon label={method.label} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="label-mono block">{method.label}</span>
                          <span className="mt-0.5 block truncate text-sm font-medium text-bone">
                            {method.value}
                          </span>
                        </span>
                        {isExternal && (
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.75}
                            aria-hidden="true"
                            className="shrink-0 text-concrete transition-colors duration-200 group-hover:text-bone"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}