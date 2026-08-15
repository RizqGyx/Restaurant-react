import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Button from "../../atoms/Button";

function MobileReserveBar({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-cream/95 px-5 py-3.5 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-ink-900">
            {restaurant.price.range}
            <span className="ml-1 text-sm font-normal text-ink-500">per person</span>
          </p>
          <p className="flex items-center gap-1 text-sm text-ink-500">
            <FaStar className="text-[11px] text-ember-500" />
            {restaurant.averageRating} · {restaurant.totalReviews} reviews
          </p>
        </div>

        <Button onClick={() => navigate("/book", { state: { restaurantId: restaurant.id } })}>
          Reserve
        </Button>
      </div>
    </div>
  );
}

export default MobileReserveBar;
