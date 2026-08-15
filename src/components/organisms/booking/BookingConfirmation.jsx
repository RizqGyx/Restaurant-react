import { FiCheck } from "react-icons/fi";
import Button from "../../atoms/Button";
import Reveal from "../../atoms/Reveal";
import FactList from "../../molecules/FactList";
import { img } from "../../../data/restaurants";
import { guestLabel, prettyDate } from "../../../lib/format";

function BookingConfirmation({ booking, onReset }) {
  const facts = [
    { label: "Guest", value: booking.name },
    { label: "Date", value: prettyDate(booking.date) },
    { label: "Time", value: booking.time },
    { label: "Party", value: guestLabel(booking.guests) },
    { label: "Occasion", value: booking.occasion },
  ];

  return (
    <>
      <Reveal className="mx-auto max-w-xl text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-4xl text-emerald-600">
          <FiCheck />
        </span>
        <h1 className="mt-7 text-balance font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-tight">
          Your table is confirmed
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
          We&apos;ve sent the details to{" "}
          <span className="font-medium text-ink-900">{booking.email}</span>. Show the reference
          below when you arrive.
        </p>

        <p className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-dashed border-ink-300 bg-white px-6 py-4">
          <span className="text-xs font-semibold uppercase tracking-[.16em] text-ink-500">
            Reference
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide text-ink-900">
            {booking.reference}
          </span>
        </p>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-10 max-w-xl">
        <div className="card-surface overflow-hidden">
          <div className="flex items-center gap-4 border-b border-ink-200 p-5">
            <img
              src={img(booking.restaurant.photos[0], 200)}
              alt=""
              className="h-16 w-16 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <p className="truncate font-display text-lg font-semibold">
                {booking.restaurant.name}
              </p>
              <p className="truncate text-sm text-ink-500">{booking.restaurant.location}</p>
            </div>
          </div>

          <FactList items={facts} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to={`/restaurant/${booking.restaurant.id}`}>View the restaurant</Button>
          <Button variant="secondary" onClick={onReset}>
            Make another booking
          </Button>
        </div>
      </Reveal>
    </>
  );
}

export default BookingConfirmation;
