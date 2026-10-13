import { TICKER_ITEMS } from "../data/site";

export default function Ticker() {
  return (
    <div aria-hidden="true" className="grain overflow-hidden border-y border-graphite bg-coal">
      <div className="animate-ticker flex w-max py-3 sm:py-4">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {TICKER_ITEMS.map((item) => (
              <li key={item} className="flex items-center">
                <span className="whitespace-nowrap px-5 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-bone/90 sm:px-7 sm:text-[0.75rem]">
                  {item}
                </span>
                <span aria-hidden="true" className="text-[0.7rem] leading-none text-concrete">
                  ♠
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}