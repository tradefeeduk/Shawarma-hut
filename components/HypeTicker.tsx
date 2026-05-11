import { business } from "@/lib/info";

export function HypeTicker() {
  // Duplicate so the marquee loop is seamless
  const items = [...business.press, ...business.press];
  return (
    <div className="relative bg-brand-black text-brand-cream py-4 border-y-2 border-brand-black overflow-hidden">
      <div className="ticker-mask">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-semibold text-base sm:text-lg">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span>{item}</span>
              <span className="text-brand-red" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
