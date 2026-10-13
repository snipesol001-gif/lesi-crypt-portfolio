import { Mic, Users, KanbanSquare, PenLine } from "lucide-react";
import { SERVICES } from "../data/site";
import Reveal from "./Reveal";

/* Keep this array in sync with the SERVICES order in src/data/site.ts */
const SERVICE_ICONS = [Mic, Users, KanbanSquare, PenLine];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-pad border-y border-graphite bg-iron"
    >
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="label-mono flex items-center gap-2.5">
              <span aria-hidden="true" className="text-bone">♠</span>
              Services.
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
            <p className="label-mono hidden sm:block">Lesi Crypt / Web3 Operator</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal delay={80} className="lg:col-span-7">
            <h2
              id="services-heading"
              className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[1] text-white"
            >
              What I do, end to end.
            </h2>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <p className="max-w-[44ch] text-sm leading-relaxed text-concrete lg:ml-auto lg:pb-1.5 lg:text-right">
              Four disciplines. One operator. Engaged individually or as a
              package for founders who want a partner, not another vendor.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ul className="grain frame-corners mt-12 divide-y divide-graphite border border-graphite bg-coal shadow-hard-lg lg:mt-16">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[index];
              return (
                <li
                  key={service.title}
                  className="group grid grid-cols-[3.25rem_1fr] gap-x-5 gap-y-4 px-5 py-7 transition-colors duration-200 hover:bg-ink/60 sm:px-8 lg:grid-cols-[4.5rem_15rem_1fr] lg:items-start lg:gap-x-10 lg:px-10 lg:py-9"
                >
                  <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center border border-graphite bg-ink text-concrete shadow-hard-sm transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white group-hover:shadow-hard lg:h-[4.5rem] lg:w-[4.5rem]">
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="flex items-center font-display text-lg uppercase leading-snug tracking-[0.02em] text-white transition-colors duration-200 group-hover:text-bone lg:block lg:text-[1.5rem]">
                    {service.title}
                  </h3>
                  <p className="col-span-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-concrete lg:col-span-1 lg:pt-1.5">
                    {service.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}