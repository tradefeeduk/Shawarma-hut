import { Instagram, Flame } from "lucide-react";
import { business, credit } from "@/lib/info";

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-3 stripes" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-brand-red text-white">
                <Flame className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display font-extrabold text-2xl">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-brand-cream/70 max-w-sm">
              {business.shortDescription}
            </p>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-lg mb-3">Visit</h4>
            <address className="not-italic text-brand-cream/80 leading-relaxed">
              {business.address.line1}
              <br />
              {business.address.line2}
              {business.address.postcode ? `, ${business.address.postcode}` : ""}
            </address>
            <a
              href={business.phoneHref}
              className="mt-3 inline-block text-brand-yellow hover:underline"
            >
              {business.phone}
            </a>
          </div>

          <div>
            <h4 className="font-display font-extrabold text-lg mb-3">Follow</h4>
            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-cream/80 hover:text-brand-yellow"
            >
              <Instagram className="w-5 h-5" />
              {business.socials.instagramHandle}
            </a>
            <p className="mt-4 text-brand-cream/60 text-sm max-w-xs">
              Tag us. We repost the best ones. Big shoutouts. Free wraps. Maybe.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t-2 border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-brand-cream/60">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-brand-cream/70">
            {credit.tagline}{" "}
            <a
              href={credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-yellow hover:underline underline-offset-4"
            >
              {credit.agency}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
