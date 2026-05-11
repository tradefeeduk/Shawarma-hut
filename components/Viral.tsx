import { Instagram, Play } from "lucide-react";
import { business } from "@/lib/info";

const clips = [
  {
    platform: "TikTok",
    quote: "\"Best wrap I've had in London. Not even close.\"",
    handle: "@londonfoodtok",
    views: "2.4M views",
    emoji: "🎬",
  },
  {
    platform: "Instagram",
    quote: "\"The queue is wild. Worth every second.\"",
    handle: "@eatlikealondoner",
    views: "880k likes",
    emoji: "🔥",
  },
  {
    platform: "TikTok",
    quote: "\"POV: you finally try the shawarma everyone's talking about.\"",
    handle: "@yallaeat",
    views: "1.7M views",
    emoji: "📣",
  },
];

export function Viral() {
  return (
    <section id="viral" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="inline-block bg-brand-red text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            The hype
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            London can't{" "}
            <span className="relative inline-block">
              <span className="relative z-10">stop posting.</span>
              <span
                className="absolute inset-0 bg-brand-yellow -rotate-1 rounded-md -z-0"
                aria-hidden
              />
            </span>
          </h2>
          <p className="mt-4 text-brand-black/70">
            Millions of views. Thousands of wraps. One spot.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {clips.map((c, i) => (
            <a
              key={i}
              href={business.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/14] rounded-3xl overflow-hidden border-2 border-brand-black shadow-[6px_6px_0_0_#0B0B0B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#0B0B0B] transition-all"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(135deg, #E63946, #0B0B0B)"
                    : "linear-gradient(135deg, #FFD23F, #E63946)",
              }}
            >
              <div className="absolute inset-0 grid place-items-center text-7xl opacity-30">
                {c.emoji}
              </div>
              <div className="absolute top-4 left-4 bg-brand-cream text-brand-black font-bold text-xs uppercase px-2.5 py-1 rounded-full">
                {c.platform}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 grid place-items-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-7 h-7 text-brand-black fill-brand-black" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="font-display font-bold text-lg leading-snug text-balance drop-shadow">
                  {c.quote}
                </p>
                <p className="mt-2 text-sm opacity-90">
                  {c.handle} · {c.views}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={business.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-black text-brand-cream font-bold px-6 py-3 rounded-full shadow-[4px_4px_0_0_#E63946] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#E63946] transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow {business.socials.instagramHandle}
          </a>
          <p className="text-sm text-brand-black/60 max-w-xs text-center">
            Tag us in your post and we might repost you to the world.
          </p>
        </div>
      </div>
    </section>
  );
}
