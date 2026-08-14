const BRANDS = [
  "/brand/brand1.png",
  "/brand/brand2.png",
  "/brand/brand3.png",
  "/brand/brand4.png",
  "/brand/brand5.png",
  "/brand/brand6.png",
];

function BrandMarquee() {
  return (
    <section className="border-b border-ink-200/70 bg-cream py-10" aria-label="Featured in">
      <div className="shell">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[.22em] text-ink-400">
          Featured in &amp; partnered with
        </p>
      </div>

      <div className="mask-fade-x group relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {BRANDS.map((src, index) => (
                <img
                  key={`${copy}-${index}`}
                  src={src}
                  alt={copy === 0 ? `Partner ${index + 1}` : ""}
                  loading="lazy"
                  className="mx-8 h-12 w-auto max-w-[150px] object-contain opacity-45 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:mx-12 sm:h-14"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandMarquee;
