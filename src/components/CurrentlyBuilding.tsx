import { Globe, ArrowUpRight } from "lucide-react";
import { BUILDING_PROJECTS, BUILDING_MINI_PROJECTS } from "../data/site";
import Reveal from "./Reveal";

const [quantum, parlay] = BUILDING_PROJECTS;

function ProjectCard({ project }: { project: (typeof BUILDING_PROJECTS)[number] }) {
  return (
    <article className="flex flex-col border border-graphite bg-coal p-6 shadow-hard transition-all duration-300 hover:-translate-y-1 hover:border-concrete hover:shadow-hard-lg sm:p-8">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-bone"
        />
        <p className="label-mono shrink-0 text-bone">Currently Building</p>
        <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
      </div>

      <div className="mt-6 flex items-center gap-5">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[14px] border border-graphite bg-ink sm:h-[4.25rem] sm:w-[4.25rem]">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h3 className="font-display text-xl uppercase tracking-[0.02em] text-white sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-bone">{project.role}</p>
        </div>
      </div>

      <p className="mt-6 text-[0.95rem] leading-relaxed text-bone">
        {project.description}
      </p>

      <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {project.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm text-bone">
            <span
              aria-hidden="true"
              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-concrete"
            />
            {bullet}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-graphite px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-concrete"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <div className="flex flex-wrap gap-3 border-t border-graphite pt-6">
          {project.links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={index === 0 ? "btn btn-primary" : "btn btn-ghost"}
            >
              {index === 0 ? (
                <Globe size={15} strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function MiniProjectCard({
  project,
}: {
  project: (typeof BUILDING_MINI_PROJECTS)[number];
}) {
  return (
    <article className="flex h-full flex-col border border-graphite bg-coal p-5 shadow-hard transition-all duration-300 hover:-translate-y-1 hover:border-concrete hover:shadow-hard-lg sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[14px] border border-graphite bg-ink">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="flex shrink-0 items-center gap-2.5 font-mono text-[0.62rem] uppercase leading-[1.4] tracking-[0.14em] text-bone sm:text-[0.75rem] sm:tracking-[0.18em]">
          <span
            aria-hidden="true"
            className="h-2 w-2 animate-pulse rounded-full bg-bone"
          />
          Currently Building
        </p>
      </div>

      <h3 className="mt-5 font-display text-lg uppercase tracking-[0.02em] text-white sm:text-xl">
        {project.name}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-bone">{project.role}</p>

      <p className="mt-4 text-sm leading-relaxed text-bone">
        {project.bio}
      </p>

      <div className="mt-auto pt-5">
        <div className="border-t border-graphite pt-5">
          <a
            href={project.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
            Visit X
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CurrentlyBuilding() {
  return (
    <section
      id="currently-building"
      aria-labelledby="building-heading"
      className="section-pad border-y border-graphite"
    >
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="label-mono flex items-center gap-2.5">
              <span aria-hidden="true" className="text-bone">♠</span>
              Currently Building.
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
            <p className="label-mono hidden sm:block">Lesi Crypt / Web3 Operator</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal delay={140} className="lg:col-span-5">
            <p className="max-w-[44ch] text-sm leading-relaxed text-bone sm:text-base">
              Live engagements. This section refreshes as new work goes public.
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <h2
              id="building-heading"
              className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[1] text-white"
            >
              What I'm shipping right now.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <ProjectCard project={quantum} />
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={parlay} />
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {BUILDING_MINI_PROJECTS.map((project, index) => (
            <Reveal key={project.name} delay={index * 100} className="h-full">
              <MiniProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}