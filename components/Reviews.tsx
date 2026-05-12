export function Reviews() {
  const reviews = [
    {
      author: "REBIN KURD",
      rating: 5,
      text: "Amazing place, amazing food, amazing service and the kindest staff in Area.",
      platform: "Google",
    },
    {
      author: "Salt Whisperer",
      rating: 5,
      text: "I had half chicken, chips, rice and salad all was good tasty and fresh.",
      platform: "Google",
    },
    {
      author: "Savie Musendo",
      rating: 4,
      text: "The food quality is decent, though I had some issues with one item. Overall good value for money.",
      platform: "Google",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="inline-block bg-brand-black text-brand-yellow font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            What People Say
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none">
            Loved by{" "}
            <span className="relative inline-block">
              <span className="relative z-10">thousands.</span>
              <span
                className="absolute inset-0 bg-brand-red -rotate-1 rounded-md -z-0 opacity-90"
                aria-hidden
              />
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-brand-black/70">
            4.6★ rating from 2,196 Google reviews
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-white border-2 border-brand-black rounded-2xl p-6 shadow-[4px_4px_0_0_#0B0B0B]"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? "text-brand-yellow text-lg" : "text-gray-300 text-lg"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-brand-black/70 mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <p className="font-display font-bold text-sm">{review.author}</p>
                <span className="text-xs bg-brand-black text-brand-yellow px-2 py-1 rounded-full font-bold">
                  {review.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=shawarma+hut+london+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-black text-brand-yellow font-bold px-6 py-3 rounded-full border-2 border-brand-black hover:shadow-[3px_3px_0_0_#E63946] transition-all"
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
