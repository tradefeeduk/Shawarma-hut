"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { business } from "@/lib/info";

const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
type DayShort = (typeof dayOrder)[number];

function todayShort(): DayShort {
  // 0 = Sun, 1 = Mon, ... 6 = Sat
  const idx = new Date().getDay();
  const map: DayShort[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return map[idx];
}

function nowMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function isOpenNow() {
  const today = todayShort();
  const h = business.hours.find((x) => x.day === today);
  if (!h) return false;
  const open = toMinutes(h.open);
  const close = toMinutes(h.close);
  const n = nowMinutes();
  return n >= open && n < close;
}

export function Visit() {
  const [open, setOpen] = useState<boolean | null>(null);
  const [today, setToday] = useState<DayShort | null>(null);

  useEffect(() => {
    setOpen(isOpenNow());
    setToday(todayShort());
    const id = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="visit" className="py-20 sm:py-28 bg-brand-yellow relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-3 stripes" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="inline-block bg-brand-black text-brand-yellow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Come hungry
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
            Find us. Eat. Repeat.
          </h2>

          {open !== null && (
            <div
              className={`mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border-2 border-brand-black font-bold ${
                open ? "bg-brand-green text-white" : "bg-brand-black text-brand-yellow"
              }`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  open ? "bg-white animate-pulse" : "bg-brand-red"
                }`}
              />
              {open ? "Open now" : "Closed right now"}
            </div>
          )}

          <div className="mt-8 space-y-4">
            <a
              href={business.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 bg-brand-cream border-2 border-brand-black rounded-2xl p-4 shadow-[4px_4px_0_0_#0B0B0B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#0B0B0B] transition-all"
            >
              <MapPin className="w-6 h-6 mt-0.5 shrink-0" />
              <div>
                <div className="font-bold">{business.address.line1}</div>
                <div className="text-sm text-brand-black/70">
                  {business.address.line2}
                  {business.address.postcode ? ` · ${business.address.postcode}` : ""}
                </div>
                <div className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-brand-red">
                  <Navigation className="w-4 h-4" /> Get directions
                </div>
              </div>
            </a>

            <a
              href={business.phoneHref}
              className="flex items-center gap-3 bg-brand-cream border-2 border-brand-black rounded-2xl p-4 shadow-[4px_4px_0_0_#0B0B0B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#0B0B0B] transition-all"
            >
              <Phone className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-bold">{business.phone}</div>
                <div className="text-sm text-brand-black/70">Tap to call</div>
              </div>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 bg-brand-cream border-2 border-brand-black rounded-2xl p-4 shadow-[4px_4px_0_0_#0B0B0B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#0B0B0B] transition-all"
            >
              <Mail className="w-6 h-6 shrink-0" />
              <div>
                <div className="font-bold">{business.email}</div>
                <div className="text-sm text-brand-black/70">
                  Catering & private events
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-brand-cream border-2 border-brand-black rounded-3xl p-6 shadow-[6px_6px_0_0_#0B0B0B]">
          <h3 className="font-display font-extrabold text-2xl mb-4">Opening hours</h3>
          <ul className="divide-y-2 divide-brand-black/10">
            {dayOrder.map((d) => {
              const h = business.hours.find((x) => x.day === d);
              const isToday = today === d;
              return (
                <li
                  key={d}
                  className={`flex items-center justify-between py-3 px-2 rounded-lg ${
                    isToday ? "bg-brand-yellow font-bold" : ""
                  }`}
                >
                  <span>{d}</span>
                  <span className="font-mono tabular-nums">
                    {h ? `${h.open} – ${h.close}` : "Closed"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3 stripes" aria-hidden />
    </section>
  );
}
