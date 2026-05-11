import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/info";

const platforms = [
  { name: "Deliveroo", href: business.delivery.deliveroo, color: "bg-[#00CCBC]", text: "text-white" },
  { name: "Uber Eats", href: business.delivery.uberEats, color: "bg-[#06C167]", text: "text-white" },
  { name: "Just Eat", href: business.delivery.justEat, color: "bg-[#FF8000]", text: "text-white" },
  { name: "WhatsApp", href: business.delivery.whatsapp, color: "bg-[#25D366]", text: "text-white" },
];

export function OrderCTA() {
  return (
    <section id="order" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-brand-red rounded-[2rem] border-2 border-brand-black shadow-[8px_8px_0_0_#0B0B0B] p-8 sm:p-12 text-white overflow-hidden">
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-yellow/30 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
              Don't queue.
              <br />
              Order in.
            </h2>
            <p className="mt-4 text-lg max-w-xl text-white/90">
              Pick your favourite delivery app. Pay. Eat. Repeat.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-3 ${p.color} ${p.text} font-bold px-5 py-4 rounded-2xl border-2 border-brand-black shadow-[4px_4px_0_0_#0B0B0B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#0B0B0B] transition-all`}
                >
                  <span className="text-lg">{p.name}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
