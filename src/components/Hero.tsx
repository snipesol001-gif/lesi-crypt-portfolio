import { useEffect, useState } from "react";
import { HERO } from "../data/site";
import Reveal from "./Reveal";

const ROLE_ROTATE_MS = 3000;

/* Spade silhouette reused from the favicon, as a watermark */
const SPADE_PATH =
  "M32 7c-3.2 7.4-9.1 12-13.6 15.6C14.7 25.4 13 28 13 31.2c0 4.8 3.7 8.4 8.3 8.4 2.6 0 4.9-1.1 6.4-3-0.7 4.6-2.7 7.9-5.6 10.2-1 .8-0.6 2.2 0.7 2.2h18.4c1.3 0 1.7-1.4 0.7-2.2-2.9-2.3-4.9-5.6-5.6-10.2 1.5 1.9 3.8 3 6.4 3 4.6 0 8.3-3.6 8.3-8.4 0-3.2-1.7-5.8-5.4-8.6C41.1 19 35.2 14.4 32 7z";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % HERO.roles.length);
    }, ROLE_ROTATE_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="grain relative overflow-hidden">
      {/* Decorative watermark spade, sits behind the portrait column */}
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -right-10 top-4 hidden h-[22rem] w-[22rem] select-none text-white/[0.04] md:block lg:-right-16 lg:top-0 lg:h-[30rem] lg:w-[30rem]"
      >
        <path fill="currentColor" d={SPADE_PATH} />
      </svg>

      <div className="wrap section-pad">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="label-mono flex items-center gap-3">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-concrete" />
                {HERO.status}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display chrome-text text-[clamp(4rem,12vw,10rem)] uppercase leading-[0.88]">
                {HERO.headline}
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 font-display text-[clamp(1.6rem,3.6vw,2.5rem)] uppercase leading-[1.05] text-white">
                {HERO.subline}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="label-mono mt-9 flex flex-wrap items-baseline gap-x-2">
                <span className="text-bone">Currently:</span>
                <span
                  key={roleIndex}
                  aria-hidden="true"
                  className="role-in whitespace-nowrap text-bone"
                >
                  {HERO.roles[roleIndex]}
                </span>
                <span className="sr-only">{HERO.roles.join(", ")}</span>
              </p>
            </Reveal>

            <Reveal delay={290}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-bone sm:text-lg">
                {HERO.body}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn btn-primary">
                  Hire Me
                </a>
                <a href="#proof-of-work" className="btn btn-ghost">
                  View Proof of Work
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex justify-center">
            <div className="relative w-[clamp(16rem,58vw,22rem)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-full border border-graphite"
              />
              <div className="relative aspect-square overflow-hidden rounded-full border border-graphite bg-coal">
                <img
                  src="/images/lesi-pfp.png"
                  alt="Portrait of Big Lesi in a black hoodie and jacket, wearing a silver Big Lesi chain"
                  className="h-full w-full scale-[1.07] object-cover"
                />
              </div>
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap border border-graphite bg-ink px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-concrete">
                {HERO.pfpTag}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="mt-12 grid grid-cols-3 divide-x divide-graphite border-t border-graphite sm:mt-16 lg:mt-20">
            {HERO.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1.5 px-1.5 py-5 text-center sm:px-8 sm:py-6 sm:text-left sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="order-2 font-mono text-[0.6rem] uppercase leading-[1.4] tracking-[0.12em] text-concrete sm:text-[0.75rem] sm:tracking-[0.18em]">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display chrome-text text-[clamp(1.6rem,7vw,3rem)] uppercase leading-none">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}