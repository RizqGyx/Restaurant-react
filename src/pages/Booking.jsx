import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import PageLayout from "../components/templates/PageLayout";
import Reveal from "../components/atoms/Reveal";
import SectionHeading from "../components/molecules/SectionHeading";
import BookingForm from "../components/organisms/booking/BookingForm";
import BookingSummary from "../components/organisms/booking/BookingSummary";
import BookingConfirmation from "../components/organisms/booking/BookingConfirmation";
import { useBooking } from "../hooks/useBooking";
import { getRestaurantById, restaurantData } from "../data/restaurants";
import { bookingReference } from "../lib/format";
import { OCCASIONS, EMPTY_DETAILS, validateBooking } from "../lib/booking";

function Booking() {
  const { state } = useLocation();

  const [restaurantId, setRestaurantId] = useState(
    () => state?.restaurantId ?? restaurantData[0].id,
  );
  const restaurant = getRestaurantById(restaurantId) ?? restaurantData[0];

  const booking = useBooking(restaurant, {
    initial: { date: state?.date, time: state?.time, guests: state?.guests },
  });

  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [details, setDetails] = useState(EMPTY_DETAILS);
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  const handleDetailChange = (key) => (event) => {
    const { value } = event.target;
    setDetails((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validateBooking({ time: booking.time, details });
    setErrors(found);

    const [firstError] = Object.keys(found);
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }

    setConfirmation({
      reference: bookingReference(),
      restaurant,
      date: booking.date,
      time: booking.time,
      guests: booking.guests,
      occasion,
      name: details.name.trim(),
      email: details.email.trim(),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setConfirmation(null);
    setDetails(EMPTY_DETAILS);
    setErrors({});
  };

  if (confirmation) {
    return (
      <PageLayout className="shell pt-32 lg:pt-40">
        <BookingConfirmation booking={confirmation} onReset={reset} />
      </PageLayout>
    );
  }

  return (
    <PageLayout className="shell pt-28 lg:pt-36">
      <Reveal className="max-w-2xl">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink-900"
          >
            <FiArrowLeft /> Back to home
          </Link>
        </div>

        <SectionHeading
          as="h1"
          size="lg"
          className="mt-6"
          eyebrow="Reservations"
          title="Book your table"
          lead="Choose the room and the hour. We confirm directly with the restaurant, usually within a few minutes."
        />
      </Reveal>

      <div className="mt-12 grid gap-10 pb-8 lg:grid-cols-[1fr_minmax(320px,380px)] lg:gap-16">
        <BookingForm
          restaurant={restaurant}
          onRestaurantChange={setRestaurantId}
          booking={booking}
          occasion={occasion}
          onOccasionChange={setOccasion}
          details={details}
          onDetailChange={handleDetailChange}
          errors={errors}
          onSubmit={handleSubmit}
        />

        <aside className="lg:relative">
          <div className="lg:sticky lg:top-28">
            <BookingSummary
              restaurant={restaurant}
              date={booking.date}
              time={booking.time}
              guests={booking.guests}
              occasion={occasion}
              bill={booking.bill}
            />
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}

export default Booking;
