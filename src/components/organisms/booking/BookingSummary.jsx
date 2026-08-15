import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import Rating from "../../atoms/Rating";
import PriceBreakdown from "../../molecules/PriceBreakdown";
import { img } from "../../../data/restaurants";
import { guestLabel, money, prettyDate } from "../../../lib/format";

function BookingSummary({ restaurant, date, time, guests, occasion, bill }) {
  const rows = [
    { icon: FiCalendar, value: prettyDate(date) },
    { icon: FiClock, value: time || <span className="text-ink-400">Select a time</span> },
    { icon: FiUsers, value: `${guestLabel(guests)} · ${occasion}` },
  ];

  return (
    <div className="card-surface overflow-hidden">
      <img
        src={img(restaurant.photos[0], 700)}
        alt={restaurant.name}
        className="aspect-[16/10] w-full object-cover"
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-lg font-semibold leading-snug">{restaurant.name}</h2>
          <Rating value={restaurant.averageRating} className="mt-0.5 shrink-0 text-sm" />
        </div>
        <p className="mt-1 text-sm text-ink-500">{restaurant.location}</p>

        <ul className="mt-6 space-y-3.5 border-t border-ink-200 pt-5 text-[15px]">
          {rows.map(({ icon: Icon, value }, index) => (
            <li key={index} className="flex items-center gap-3 text-ink-700">
              <Icon className="shrink-0 text-ink-400" />
              {value}
            </li>
          ))}
        </ul>

        <PriceBreakdown
          className="mt-6 border-t border-ink-200 pt-5"
          rows={[
            { label: `${money(restaurant.price.est)} × ${guests}`, value: bill.subtotal },
            { label: "Service fee", value: bill.serviceFee },
          ]}
          total={bill.total}
        />

        <p className="mt-5 text-[13px] leading-relaxed text-ink-500">
          An estimate based on the average spend per head. You settle the bill with the restaurant
          on the night.
        </p>
      </div>
    </div>
  );
}

export default BookingSummary;
