import { FiSearch, FiArrowDown } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Button from "../atoms/Button";
import Eyebrow from "../atoms/Eyebrow";
import { restaurantData } from "../../data/restaurants";

const averageRating = (
  restaurantData.reduce((sum, item) => sum + item.averageRating, 0) / restaurantData.length
).toFixed(1);

const totalReviews = (
  restaurantData.reduce((sum, item) => sum + item.totalReviews, 0) / 1000
).toFixed(1);

const STATS = [
  { value: `${restaurantData.length}`, label: "Curated tables" },
  { value: averageRating, label: "Average rating", star: true },
  { value: `${totalReviews}k`, label: "Verified reviews" },
  { value: "30s", label: "To reserve" },
];

function Hero({ query, onQueryChange, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch?.();
  };

  return (
    <section className="relative isolate flex min-h-[660px] items-center overflow-hidden lg:h-[94vh]">
      <img
        src="/Hero.jpg"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="scrim absolute inset-0 -z-10" />

      <div className="shell w-full pb-24 pt-32 lg:pb-28 lg:pt-36">
        <div className="max-w-3xl">
          <Eyebrow tone="light" className="animate-fade-up">
            Western dining, curated
          </Eyebrow>

          <h1
            className="mt-6 animate-fade-up text-balance font-display text-[clamp(2.75rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white"
            style={{ animationDelay: "80ms" }}
          >
            Enjoy delicious <span className="italic text-ember-400">food</span>
            <br className="hidden sm:block" /> at tables worth the trip.
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "160ms" }}
          >
            Grill houses, smokehouses and steak rooms — each one visited, photographed and
            reviewed before it earns a place here. Find your table in under a minute.
          </p>

          <form
            role="search"
            onSubmit={handleSubmit}
            className="mt-9 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex flex-col gap-2 rounded-3xl bg-white/95 p-2 shadow-lift backdrop-blur sm:flex-row sm:items-center sm:rounded-full">
              <div className="flex flex-1 items-center gap-3 px-5 py-3">
                <FiSearch className="shrink-0 text-xl text-ink-400" />
                <label htmlFor="hero-search" className="sr-only">
                  Search restaurants or cuisines
                </label>
                <input
                  id="hero-search"
                  type="search"
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                  placeholder="Search a restaurant, cuisine or city…"
                  className="w-full bg-transparent text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none"
                />
              </div>
              <Button type="submit" size="lg" className="!px-8">
                Find a table
              </Button>
            </div>
          </form>

          <dl
            className="mt-12 grid max-w-2xl animate-fade-up grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
            style={{ animationDelay: "320ms" }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l border-white/25 pl-4">
                <dt className="flex items-center gap-1.5 font-display text-3xl font-semibold text-white">
                  {stat.star && <FaStar className="text-lg text-ember-400" />}
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-white/75">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-xs font-medium uppercase tracking-[.18em] text-white/70 transition-all duration-300 hover:border-white/60 hover:text-white lg:inline-flex"
      >
        Discover <FiArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;
