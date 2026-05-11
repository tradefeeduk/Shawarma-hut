import { ArrowRight, Star } from "lucide-react";
import { business } from "@/lib/info";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 grain" aria-hidden />
      <div
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-brand-yellow blur-3xl opacity-40 -z-10"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-brand-red blur-3xl opacity-25 -z-10"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          {/* Sticker */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-black text-brand-yellow font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[3px_3px_0_0_#E63946] mb-6 animate-wiggle">
            🔥 As seen on TikTok · 5M+ views
          </div>

          <h1 className="font-display font-extrabold leading-[0.92] tracking-tight text-balance text-5xl sm:text-7xl lg:text-[5.5rem]">
            London's most
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 px-2">talked-about</span>
              <span
                className="absolute inset-0 bg-brand-yellow -rotate-1 rounded-md"
                aria-hidden
              />
            </span>
            <br />
            <span className="text-brand-red">shawarma.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-xl text-brand-black/75 text-balance">
            {business.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 bg-brand-red text-white font-bold text-base sm:text-lg px-6 sm:px-7 py-3.5 rounded-full shadow-[4px_4px_0_0_#0B0B0B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#0B0B0B] transition-all"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-brand-black text-brand-yellow font-bold text-base sm:text-lg px-6 sm:px-7 py-3.5 rounded-full shadow-[4px_4px_0_0_#E63946] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#E63946] transition-all"
            >
              See the menu
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-brand-yellow text-brand-black"
                  strokeWidth={2}
                />
              ))}
            </div>
            <p className="text-sm font-semibold">
              <span className="font-bold">4.9 / 5</span> from 2,000+ Google reviews
            </p>
          </div>
        </div>

        {/* Hero visual */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md aspect-square">
            <div className="absolute inset-4 rounded-[2rem] bg-brand-red rotate-[-6deg] shadow-[8px_8px_0_0_#0B0B0B]" />
            <div className="absolute inset-0 rounded-[2rem] bg-brand-yellow rotate-[3deg] shadow-[8px_8px_0_0_#0B0B0B]" />
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-brand-black">
              <div className="w-full h-full bg-gradient-to-br from-brand-yellow via-brand-red to-brand-black grid place-items-center text-[12rem] sm:text-[14rem] select-none animate-float">
                🌯
              </div>
            </div>
            {/* Floating price badge */}
            <div className="absolute -top-4 -right-4 rotate-12 bg-brand-cream border-4 border-brand-black rounded-full w-28 h-28 grid place-items-center shadow-[4px_4px_0_0_#E63946]">
              <div className="text-center leading-tight">
                <div className="text-xs font-bold uppercase tracking-wider">From</div>
                <div className="font-display font-extrabold text-2xl">£7.50</div>
              </div>
            </div>
            {/* Floating sticker */}
            <div className="absolute -bottom-3 -left-4 -rotate-6 bg-brand-black text-brand-yellow px-4 py-2 rounded-full font-bold text-sm shadow-[4px_4px_0_0_#E63946] uppercase tracking-wider">
              Halal • Fresh • Daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
