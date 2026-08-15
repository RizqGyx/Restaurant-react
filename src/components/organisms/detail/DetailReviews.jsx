import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../atoms/Button";
import ReviewCard from "../../molecules/ReviewCard";

const PREVIEW_COUNT = 2;

function DetailReviews({ restaurant }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? restaurant.reviews : restaurant.reviews.slice(0, PREVIEW_COUNT);
  const busiest = Math.max(...restaurant.ratingBreakdown.map((row) => row.count), 1);

  return (
    <section aria-labelledby="reviews" className="border-t border-ink-200 py-12">
      <h2
        id="reviews"
        className="flex flex-wrap items-center gap-2.5 font-display text-2xl font-semibold"
      >
        <FaStar className="text-ember-500" />
        {restaurant.averageRating}
        <span className="text-ink-300">·</span>
        {restaurant.totalReviews} reviews
      </h2>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        <div>
          <ul className="space-y-2.5">
            {restaurant.ratingBreakdown.map(({ stars, count }) => (
              <li key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-3 shrink-0 tabular-nums text-ink-600">{stars}</span>
                <FaStar className="shrink-0 text-[11px] text-ink-300" />
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-200">
                  <span
                    className="block h-full rounded-full bg-ink-900 transition-[width] duration-700 ease-spring"
                    style={{ width: `${(count / busiest) * 100}%` }}
                  />
                </span>
                <span className="w-10 shrink-0 text-right tabular-nums text-ink-500">{count}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl bg-ink-100/70 p-4 text-sm leading-relaxed text-ink-600">
            Reviews come from diners who completed a booking through westCorner. We never edit or
            remove one for being critical.
          </p>
        </div>

        <div>
          <div className="grid gap-6 sm:grid-cols-2">
            {shown.map((review, index) => (
              <ReviewCard key={`${review.author}-${index}`} review={review} />
            ))}
          </div>

          {restaurant.reviews.length > PREVIEW_COUNT && (
            <Button
              variant="secondary"
              className="mt-7"
              onClick={() => setExpanded((open) => !open)}
            >
              {expanded ? "Show less" : `Show all ${restaurant.reviews.length} reviews`}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailReviews;
