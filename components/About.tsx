import { Clock, Flame, Hand } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "Marinated 24 hours",
    body: "Our secret-recipe marinade soaks every cut for a full day. No shortcuts. No compromises.",
    color: "bg-brand-yellow",
  },
  {
    icon: Flame,
    title: "Charcoal grilled",
    body: "Real charcoal, real fire. That smoky char you taste? You can't fake it. We don't try.",
    color: "bg-brand-red",
  },
  {
    icon: Hand,
    title: "Hand-pressed",
    body: "Every wrap is pressed to order on a flat-top grill. Crispy on the outside, dripping inside.",
    color: "bg-brand-black",
  },
];

export function About() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-brand-black text-brand-cream relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-3 stripes" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-block bg-brand-yellow text-brand-black font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Our story
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            Three ingredients.
            <br />
            One obsession.
          </h2>
          <p className="mt-6 text-lg text-brand-cream/80 max-w-2xl">
            We came to London with a family recipe, a charcoal grill, and a stubborn belief
            that shawarma should taste like it does back home. Then the queues started.
            Then the cameras. Then everything changed, but our recipe didn't.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, body, color }) => (
            <div
              key={title}
              className="relative bg-brand-cream text-brand-black rounded-3xl p-6 border-2 border-brand-cream"
            >
              <div
                className={`absolute -top-5 left-6 w-12 h-12 rounded-2xl ${color} ${
                  color === "bg-brand-black" ? "text-brand-yellow" : "text-brand-black"
                } grid place-items-center border-2 border-brand-cream shadow-[3px_3px_0_0_#FFF8EC]`}
              >
                <Icon className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-extrabold text-xl mt-6 mb-2">{title}</h3>
              <p className="text-brand-black/75">{body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3 stripes" aria-hidden />
    </section>
  );
}
