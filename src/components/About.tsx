import { ABOUT } from "../data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-pad">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <p className="label-mono flex items-center gap-2.5">
              <span aria-hidden="true" className="text-bone">♠</span>
              {ABOUT.label}
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-graphite" />
            <p className="label-mono hidden sm:block">Lesi Crypt / Web3 Operator</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <h2
                id="about-heading"
                className="text-balance font-display text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-[1] text-white"
              >
                {ABOUT.heading}
              </h2>
            </Reveal>
          </div>

          <div className="space-y-5 lg:col-span-7 lg:pt-2">
            <Reveal delay={140}>
              <p className="max-w-[62ch] text-base leading-relaxed text-bone sm:text-lg">
                {ABOUT.paragraphs[0]}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-[62ch] text-base leading-relaxed text-concrete sm:text-lg">
                {ABOUT.paragraphs[1]}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <figure className="frame-corners mx-auto mt-16 w-full max-w-[1080px] border border-graphite bg-coal p-2.5 shadow-hard sm:p-3 lg:mt-24">
            <img
              src="/images/lesi-banner.png"
              alt="Big Lesi banner artwork with the BIG LESI wordmark, an ace of spades mark and a distant city skyline"
              width={1080}
              height={360}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}