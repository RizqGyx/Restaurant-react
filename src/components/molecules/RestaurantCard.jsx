import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Badge from "../atoms/Badge";
import Rating from "../atoms/Rating";
import StatusPill from "../atoms/StatusPill";
import { useFavorites } from "../../hooks/useFavorites";
import { img, openStatus } from "../../data/restaurants";

function RestaurantCard({ restaurant, priority = false }) {
  const { isFavorite, toggle } = useFavorites();
  const saved = isFavorite(restaurant.id);
  const status = openStatus(restaurant);

  const handleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggle(restaurant.id);
  };

  return (
    <article className="group relative">
      <Link to={`/restaurant/${restaurant.id}`} className="block">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-100">
          <img
            src={img(restaurant.photos[0], 720)}
            alt={restaurant.name}
            loading={priority ? "eager" : "lazy"}
            className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-spring group-hover:scale-[1.06]"
          />
          <div className="scrim-bottom pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {restaurant.badge && (
            <Badge className="absolute left-4 top-4">{restaurant.badge}</Badge>
          )}

          <StatusPill status={status} tone="overlay" className="absolute bottom-4 left-4" />
        </div>

        <div className="pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-ember-700">
              {restaurant.name}
            </h3>
            <Rating
              value={restaurant.averageRating}
              count={restaurant.totalReviews}
              className="mt-0.5 shrink-0 text-sm"
            />
          </div>

          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500">
            <FiMapPin className="shrink-0 text-ink-400" />
            <span className="truncate">{restaurant.neighborhood}</span>
          </p>

          <p className="mt-1 truncate text-sm text-ink-500">
            {restaurant.foodCategory.slice(0, 3).join(" · ")}
          </p>

          <p className="mt-3 text-sm text-ink-900">
            <span className="font-semibold">{restaurant.price.range}</span>
            <span className="text-ink-500"> per person</span>
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={handleFavorite}
        aria-pressed={saved}
        aria-label={saved ? `Remove ${restaurant.name} from saved` : `Save ${restaurant.name}`}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center transition-transform duration-300 ease-spring hover:scale-110 active:scale-90"
      >
        <span className="relative grid place-items-center">
          <FaHeart
            className={`text-[21px] transition-colors duration-300 ${
              saved ? "text-ember-600" : "text-ink-950/40"
            }`}
          />
          {!saved && (
            <FaRegHeart className="absolute text-[21px] text-white drop-shadow-[0_1px_2px_rgba(15,14,12,.45)]" />
          )}
        </span>
      </button>
    </article>
  );
}

export default RestaurantCard;
