import { LuChefHat, LuFlame, LuArmchair } from "react-icons/lu";
import Avatar from "../../atoms/Avatar";
import Divider from "../../atoms/Divider";
import StatusPill from "../../atoms/StatusPill";
import FeatureList from "../../molecules/FeatureList";
import { openStatus } from "../../../data/restaurants";

const highlightsFor = (restaurant) => [
  {
    icon: LuFlame,
    title: "Cooked over live fire",
    copy: "Open kitchen, hardwood and charcoal.",
  },
  {
    icon: LuChefHat,
    title: `${restaurant.chef} at the pass`,
    copy: `Leading the kitchen since ${restaurant.since}.`,
  },
  {
    icon: LuArmchair,
    title: "Free cancellation",
    copy: "Cancel up to 4 hours before, no fee.",
  },
];

function DetailOverview({ restaurant }) {
  const status = openStatus(restaurant);

  return (
    <>
      <header className="flex items-start justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl font-semibold leading-snug">
            {restaurant.venueType} in {restaurant.neighborhood}
          </h2>
          <p className="mt-2 text-[15px] text-ink-600">
            {restaurant.seats} seats · {restaurant.price.range} per person · Serving since{" "}
            {restaurant.since}
          </p>
          <StatusPill status={status} className="mt-3" />
        </div>

        <Avatar name={restaurant.chef} size="lg" inverted className="hidden sm:grid" />
      </header>

      <Divider />

      <FeatureList items={highlightsFor(restaurant)} />

      <Divider />

      <div>
        <p className="font-display text-xl italic text-ink-700">{restaurant.tagline}</p>
        <p className="mt-4 text-[17px] leading-[1.75] text-ink-600">{restaurant.description}</p>
      </div>
    </>
  );
}

export default DetailOverview;
