import { useMemo, useState } from "react";
import { FiFrown } from "react-icons/fi";
import Button from "../atoms/Button";
import Reveal from "../atoms/Reveal";
import ChipGroup from "../molecules/ChipGroup";
import EmptyState from "../molecules/EmptyState";
import SectionHeading from "../molecules/SectionHeading";
import SearchField from "../molecules/SearchField";
import RestaurantGrid from "./RestaurantGrid";
import { restaurantData, allCategories } from "../../data/restaurants";
import { plural } from "../../lib/format";

const PAGE_SIZE = 6;
const ALL = "All";
const MAX_CATEGORIES = 8;

const SORTS = {
  recommended: { label: "Recommended", compare: null },
  rating: { label: "Top rated", compare: (a, b) => b.averageRating - a.averageRating },
  reviews: { label: "Most reviewed", compare: (a, b) => b.totalReviews - a.totalReviews },
  priceAsc: {
    label: "Price: low to high",
    compare: (a, b) => a.averagePrice.length - b.averagePrice.length,
  },
  priceDesc: {
    label: "Price: high to low",
    compare: (a, b) => b.averagePrice.length - a.averagePrice.length,
  },
};

const matches = (restaurant, needle) =>
  !needle ||
  [restaurant.name, restaurant.location, restaurant.neighborhood, ...restaurant.foodCategory].some(
    (field) => field.toLowerCase().includes(needle),
  );

function RestaurantListing({ query, onQueryChange }) {
  const [category, setCategory] = useState(ALL);
  const [sort, setSort] = useState("recommended");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => [ALL, ...allCategories.slice(0, MAX_CATEGORIES)], []);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = restaurantData.filter(
      (restaurant) =>
        matches(restaurant, needle) &&
        (category === ALL || restaurant.foodCategory.includes(category)),
    );

    const { compare } = SORTS[sort];
    return compare ? [...filtered].sort(compare) : filtered;
  }, [query, category, sort]);

  const filtersActive = Boolean(query.trim()) || category !== ALL;

  const resetFilters = () => {
    onQueryChange("");
    setCategory(ALL);
    setVisible(PAGE_SIZE);
  };

  const changeCategory = (next) => {
    setCategory(next);
    setVisible(PAGE_SIZE);
  };

  const changeQuery = (next) => {
    onQueryChange(next);
    setVisible(PAGE_SIZE);
  };

  return (
    <section id="restaurants" className="scroll-mt-24 py-24 lg:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            className="max-w-2xl"
            eyebrow="The shortlist"
            title="Discover our restaurants"
            lead={`${restaurantData.length} kitchens, each one visited in person. Filter by what you feel like eating tonight.`}
          />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <SearchField
              id="restaurant-search"
              label="Search restaurants"
              placeholder="Search by name, cuisine or area"
              value={query}
              onChange={changeQuery}
              className="w-full lg:max-w-md"
            />

            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="hidden text-sm text-ink-500 sm:block">
                Sort by
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="field !w-auto !rounded-full !py-3.5 pr-10 font-medium"
              >
                {Object.entries(SORTS).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <ChipGroup
            scrollable
            className="mt-4"
            label="Filter by cuisine"
            options={categories}
            value={category}
            onChange={changeCategory}
          />
        </Reveal>

        <p role="status" className="mt-8 text-sm text-ink-500">
          Showing {Math.min(visible, results.length)} of {plural(results.length, "restaurant")}
          {filtersActive && (
            <>
              {" · "}
              <button
                type="button"
                onClick={resetFilters}
                className="link-underline font-medium text-ember-700"
              >
                clear filters
              </button>
            </>
          )}
        </p>

        {results.length === 0 ? (
          <EmptyState
            className="mt-6"
            icon={<FiFrown />}
            title="No tables match that"
            message="Try a different cuisine, or clear the filters to see the full shortlist again."
            action={
              <Button variant="secondary" onClick={resetFilters}>
                Clear filters
              </Button>
            }
          />
        ) : (
          <>
            <RestaurantGrid className="mt-6" restaurants={results.slice(0, visible)} />

            {visible < results.length && (
              <div className="mt-14 flex justify-center">
                <Button variant="secondary" onClick={() => setVisible((count) => count + PAGE_SIZE)}>
                  Show {Math.min(PAGE_SIZE, results.length - visible)} more
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default RestaurantListing;
