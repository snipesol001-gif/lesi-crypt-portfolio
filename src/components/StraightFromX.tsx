import { ArrowUpRight } from "lucide-react";
import { X_QUOTES, SITE } from "../data/site";
import Reveal from "./Reveal";
import XLogo from "./XLogo";

export default function StraightFromX() {
  return (
    <section id="straight-from-x" aria-labelledby="x-heading" className="section-pad">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2
              id="x-heading"
              className="label-mono flex items-center gap-2.5 text-concrete"
            >
              <span aria-hidden="true" className="text-bone">♠</span>
              Straight From X.
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
            <p className="label-mono hidden sm:block">{SITE.xHandle}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-12">
          {X_QUOTES.map((item, index) => (
            <Reveal key={item.href} delay={index * 100} className="h-full">
              <article className="flex h-full flex-col border border-graphite bg-coal p-6 shadow-hard transition-all duration-300 hover:-translate-y-1 hover:border-concrete hover:shadow-hard-lg sm:p-8">
                <blockquote className="text-balance text-lg leading-relaxed text-bone sm:text-xl">
                  {`"${item.quote}"`}
                </blockquote>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                  <p className="label-mono">X post</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-graphite bg-ink px-3.5 py-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone transition-colors duration-200 hover:border-concrete hover:text-white"
                  >
                    <XLogo size={12} />
                    Read on X
                    <ArrowUpRight size={12} strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10">
            <a
              href={SITE.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <XLogo size={14} />
              Follow on X
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}