import { Check } from "lucide-react";
import { PROOF_PROJECTS } from "../data/site";
import Reveal from "./Reveal";

const [love, spaces, daro] = PROOF_PROJECTS;

function CompletedBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 border border-graphite bg-ink px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-concrete">
      <Check size={11} strokeWidth={2.25} aria-hidden="true" className="text-bone" />
      Completed
    </span>
  );
}

const CARD_BASE =
  "group border border-graphite bg-coal p-6 shadow-hard transition-all duration-300 hover:-translate-y-1 hover:border-concrete hover:shadow-hard-lg sm:p-8 lg:p-10";

export default function ProofOfWork() {
  return (
    <section
      id="proof-of-work"
      aria-labelledby="proof-heading"
      className="section-pad"
    >
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="label-mono flex items-center gap-2.5">
              <span aria-hidden="true" className="text-bone">♠</span>
              Proof of Work.
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
            <p className="label-mono hidden sm:block">Lesi Crypt / Web3 Operator</p>
          </div>
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Reveal delay={80}>
            <h2
              id="proof-heading"
              className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[1] text-white"
            >
              Past projects. Real outcomes.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-concrete sm:text-base">
              A selection of engagements I've contributed to. Each represents a
              season of steady work, not a highlight reel.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-8 lg:mt-16 lg:space-y-10">
          {/* LOVE Coin, logo left, three column bullet grid */}
          <Reveal>
            <article className={CARD_BASE}>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex items-center gap-5">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[14px] border border-graphite bg-ink sm:h-[4.5rem] sm:w-[4.5rem]">
                    <img
                      src={love.image}
                      alt={love.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-[0.02em] text-white sm:text-2xl">
                      {love.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-concrete">
                      {love.handle}
                    </p>
                    <p className="mt-2 text-sm font-medium text-bone">
                      {love.role}
                    </p>
                  </div>
                </div>
                <CompletedBadge />
              </div>

              <p className="mt-6 max-w-[68ch] text-[0.95rem] leading-relaxed text-concrete">
                {love.description}
              </p>

              <ul className="mt-7 grid gap-4 border-t border-graphite pt-6 sm:grid-cols-3">
                {love.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-bone">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-concrete"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Educational X Spaces, circular avatar, divided bullet strip */}
          <Reveal>
            <article className={CARD_BASE}>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="flex items-center gap-5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-graphite bg-coal lg:h-24 lg:w-24">
                    <img
                      src={spaces.image}
                      alt={spaces.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full scale-[1.07] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-[0.02em] text-white sm:text-2xl">
                      {spaces.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-bone">
                      {spaces.role}
                    </p>
                  </div>
                </div>
                <CompletedBadge />
              </div>

              <p className="mt-6 max-w-[68ch] text-[0.95rem] leading-relaxed text-concrete">
                {spaces.description}
              </p>

              <ul className="mt-7 grid gap-4 border-t border-graphite pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-graphite">
                {spaces.bullets.map((bullet, index) => (
                  <li
                    key={bullet}
                    className={`text-sm text-bone ${
                      index === 0 ? "sm:pr-5" : index === spaces.bullets.length - 1 ? "sm:pl-5" : "sm:px-5"
                    }`}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* DARO DeFi, logo right, stacked bullet list */}
          <Reveal>
            <article className={CARD_BASE}>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <h3 className="font-display text-xl uppercase tracking-[0.02em] text-white sm:text-2xl">
                    {daro.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-concrete">
                    {daro.handle}
                  </p>
                  <p className="mt-2 text-sm font-medium text-bone">
                    {daro.role}
                  </p>
                </div>
                <CompletedBadge />
              </div>

              <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_auto]">
                <p className="max-w-[68ch] text-[0.95rem] leading-relaxed text-concrete">
                  {daro.description}
                </p>
                <div className="h-16 w-16 overflow-hidden rounded-[14px] border border-graphite bg-ink lg:h-[4.5rem] lg:w-[4.5rem]">
                  <img
                    src={daro.image}
                    alt={daro.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <ul className="mt-7 space-y-3 border-t border-graphite pt-6">
                {daro.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-bone">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-concrete"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}