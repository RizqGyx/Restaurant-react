import { useCallback, useEffect, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiGrid } from "react-icons/fi";
import { img } from "../../../data/restaurants";

function DetailGallery({ photos, name }) {
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (delta) => setLightbox((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (lightbox === null) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  return (
    <>
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 md:hidden">
        {photos.map((photo, i) => (
          <button
            key={photo + i}
            type="button"
            onClick={() => setLightbox(i)}
            className="w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl bg-ink-100"
          >
            <img
              src={img(photo, 800)}
              alt={`${name} — photo ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className="aspect-[4/3] w-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative hidden h-[460px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-[2rem] md:grid lg:h-[520px]">
        {photos.slice(0, 5).map((photo, i) => (
          <button
            key={photo + i}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Open photo ${i + 1} of ${photos.length}`}
            className={`group relative overflow-hidden bg-ink-100 ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={img(photo, i === 0 ? 1200 : 640)}
              alt={`${name} — photo ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-spring group-hover:scale-[1.05]"
            />
            <span className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/10" />
          </button>
        ))}

        <button
          type="button"
          onClick={() => setLightbox(0)}
          className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-ink-900 shadow-soft backdrop-blur transition-all duration-300 ease-spring hover:scale-[1.03] active:scale-95"
        >
          <FiGrid /> Show all {photos.length} photos
        </button>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} photo viewer`}
          className="fixed inset-0 z-[100] flex animate-fade-in flex-col bg-ink-950/95 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between px-5 py-5 text-white">
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-white/10"
            >
              <FiX className="text-xl" />
            </button>
            <p className="text-sm tabular-nums text-white/70">
              {lightbox + 1} / {photos.length}
            </p>
            <span className="h-11 w-11" aria-hidden />
          </div>

          <div className="flex flex-1 items-center justify-center px-3 pb-8 sm:px-6">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 active:scale-90"
            >
              <FiChevronLeft className="text-2xl" />
            </button>

            <img
              key={lightbox}
              src={img(photos[lightbox], 1600, 80)}
              alt={`${name} — photo ${lightbox + 1}`}
              className="mx-3 max-h-full max-w-[min(1100px,100%)] animate-fade-in rounded-2xl object-contain sm:mx-6"
            />

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 active:scale-90"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailGallery;
