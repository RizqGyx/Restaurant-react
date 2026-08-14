import Reveal from "../atoms/Reveal";
import RestaurantCard from "../molecules/RestaurantCard";

const PRIORITY_COUNT = 3;
const COLUMNS = 3;

function RestaurantGrid({ restaurants, animate = true, className = "" }) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {restaurants.map((restaurant, index) => {
        const card = (
          <RestaurantCard restaurant={restaurant} priority={index < PRIORITY_COUNT} />
        );

        return animate ? (
          <Reveal key={restaurant.id} delay={(index % COLUMNS) * 90}>
            {card}
          </Reveal>
        ) : (
          <div key={restaurant.id}>{card}</div>
        );
      })}
    </div>
  );
}

export default RestaurantGrid;
