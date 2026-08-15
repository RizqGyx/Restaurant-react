import { useNavigate } from "react-router-dom";
import { FiShield } from "react-icons/fi";
import Button from "../../atoms/Button";
import Rating from "../../atoms/Rating";
import PriceBreakdown from "../../molecules/PriceBreakdown";
import { useBooking } from "../../../hooks/useBooking";
import { MAX_GUESTS } from "../../../lib/booking";
import { todayISO } from "../../../data/restaurants";
import { guestLabel, money } from "../../../lib/format";

const GUEST_OPTIONS = Array.from({ length: MAX_GUESTS }, (_, index) => index + 1);

const cellLabel = "block text-[10px] font-bold uppercase tracking-[.12em] text-ink-500";
const cellInput = "mt-1 w-full bg-transparent text-sm text-ink-900 focus:outline-none";

function BookingPanel({ restaurant }) {
  const navigate = useNavigate();
  const booking = useBooking(restaurant, { autoSelectTime: true });
  const { date, setDate, time, setTime, guests, setGuests, slots, closed, bill } = booking;

  const reserve = () =>
    navigate("/book", { state: { restaurantId: restaurant.id, date, time, guests } });

  return (
    <div className="card-surface p-6 shadow-lift">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-2xl font-semibold text-ink-900">
          {restaurant.price.range}
          <span className="ml-1.5 font-sans text-sm font-normal text-ink-500">per person</span>
        </p>
        <Rating
          value={restaurant.averageRating}
          count={restaurant.totalReviews}
          className="text-sm"
        />
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-ink-200">
        <div className="grid grid-cols-2 divide-x divide-ink-200 border-b border-ink-200">
          <label className="block px-4 py-3">
            <span className={cellLabel}>Date</span>
            <input
              type="date"
              value={date}
              min={todayISO()}
              onChange={(event) => setDate(event.target.value)}
              className={cellInput}
            />
          </label>

          <label className="block px-4 py-3">
            <span className={cellLabel}>Time</span>
            <select
              value={time}
              disabled={closed}
              onChange={(event) => setTime(event.target.value)}
              className={`${cellInput} disabled:text-ink-400`}
            >
              {closed ? (
                <option>Closed</option>
              ) : (
                slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))
              )}
            </select>
          </label>
        </div>

        <label className="block px-4 py-3">
          <span className={cellLabel}>Guests</span>
          <select
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className={cellInput}
          >
            {GUEST_OPTIONS.map((count) => (
              <option key={count} value={count}>
                {guestLabel(count)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Button full size="lg" className="mt-5" onClick={reserve} disabled={closed}>
        {closed ? "Closed on this date" : "Reserve this table"}
      </Button>

      <p className="mt-3 text-center text-sm text-ink-500">
        {closed ? "Pick another day to see available seatings." : "You won't be charged yet."}
      </p>

      <PriceBreakdown
        className="mt-6 border-t border-ink-200 pt-5"
        rows={[
          { label: `${money(restaurant.price.est)} × ${guestLabel(guests)}`, value: bill.subtotal },
          { label: "Service fee", value: bill.serviceFee },
        ]}
        total={bill.total}
      />

      <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-ember-50 p-3.5 text-[13px] leading-relaxed text-ember-900">
        <FiShield className="mt-0.5 shrink-0 text-base" />
        Free cancellation up to 4 hours before your seating. Estimate only — you pay the
        restaurant directly.
      </p>
    </div>
  );
}

export default BookingPanel;
