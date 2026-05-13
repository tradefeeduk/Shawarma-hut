"use client";

import { useState } from "react";
import Image from "next/image";
import { menu, tagLabels, type MenuCategory } from "@/lib/menu";

export function MenuSection() {
  const [activeId, setActiveId] = useState<string>(menu[0].id);

  return (
    <section id="menu" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="inline-block bg-brand-black text-brand-yellow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              The Menu
            </p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
              Built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">flavour.</span>
                <span
                  className="absolute inset-0 bg-brand-red -rotate-1 rounded-md -z-0 opacity-90"
                  aria-hidden
                />
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-brand-black/70">
              Marinated 24 hours. Grilled over real charcoal. Pressed by hand. Every. Single. Time.
            </p>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10 sticky top-16 sm:top-20 bg-brand-cream/80 backdrop-blur py-3 -mx-4 px-4 z-30 border-b-2 border-brand-black/10">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              onClick={() => setActiveId(cat.id)}
              className={`px-4 py-2 rounded-full font-bold text-sm border-2 border-brand-black transition-all ${
                activeId === cat.id
                  ? "bg-brand-black text-brand-yellow shadow-[3px_3px_0_0_#E63946]"
                  : "bg-brand-cream hover:bg-brand-yellow"
              }`}
            >
              <span className="mr-1">{cat.emoji}</span>
              {cat.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {menu.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div id={`cat-${cat.id}`} className="scroll-mt-32">
      <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-6 flex items-center gap-3">
        <span className="text-3xl sm:text-4xl">{cat.emoji}</span>
        {cat.title}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cat.items.map((item) => (
          <div
            key={item.name}
            className="group relative bg-white border-2 border-brand-black rounded-3xl overflow-hidden shadow-[4px_4px_0_0_#0B0B0B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#0B0B0B] transition-all flex flex-col"
          >
            {item.image && (
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-display font-extrabold text-lg sm:text-xl leading-tight">
                  {item.name}
                </h4>
                <span className="shrink-0 font-display font-extrabold text-base bg-brand-yellow border-2 border-brand-black rounded-full px-3 py-1">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-brand-black/70 flex-1">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagLabels[t].className}`}
                    >
                      {tagLabels[t].label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
