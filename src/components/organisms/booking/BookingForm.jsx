import Button from "../../atoms/Button";
import ChipGroup from "../../molecules/ChipGroup";
import FormField from "../../molecules/FormField";
import TextField from "../../molecules/TextField";
import GuestStepper from "../../molecules/GuestStepper";
import { restaurantData, todayISO, weekdayOf } from "../../../data/restaurants";
import { OCCASIONS } from "../../../lib/booking";

function FormSection({ step, title, children }) {
  return (
    <section className="card-surface p-6 sm:p-8">
      <h2 className="flex items-center gap-3 font-display text-xl font-semibold">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-sm text-cream">
          {step}
        </span>
        {title}
      </h2>
      <div className="mt-7">{children}</div>
    </section>
  );
}

function BookingForm({
  restaurant,
  onRestaurantChange,
  booking,
  occasion,
  onOccasionChange,
  details,
  onDetailChange,
  errors,
  onSubmit,
}) {
  const { date, setDate, time, setTime, guests, setGuests, slots, closed } = booking;

  return (
    <form onSubmit={onSubmit} noValidate className="min-w-0 space-y-10">
      <FormSection step={1} title="Where and when">
        <div className="space-y-6">
          <FormField id="restaurant" label="Restaurant">
            <select
              id="restaurant"
              value={restaurant.id}
              onChange={(event) => onRestaurantChange(Number(event.target.value))}
              className="field"
            >
              {restaurantData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — {item.neighborhood}
                </option>
              ))}
            </select>
          </FormField>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="date" label="Date">
              <input
                id="date"
                type="date"
                value={date}
                min={todayISO()}
                onChange={(event) => setDate(event.target.value)}
                className="field"
              />
            </FormField>

            <FormField as="fieldset" label="Guests">
              <GuestStepper value={guests} onChange={setGuests} />
            </FormField>
          </div>

          <FormField as="fieldset" id="field-time" label="Seating time" error={errors.time}>
            {closed ? (
              <p className="rounded-2xl bg-ink-100 px-4 py-3.5 text-[15px] text-ink-600">
                {restaurant.name} is closed on {weekdayOf(date)}s. Pick another date.
              </p>
            ) : (
              <ChipGroup
                options={slots}
                value={time}
                onChange={setTime}
                label="Seating time"
              />
            )}
          </FormField>

          <FormField as="fieldset" label="Occasion">
            <ChipGroup
              options={OCCASIONS}
              value={occasion}
              onChange={onOccasionChange}
              label="Occasion"
            />
          </FormField>
        </div>
      </FormSection>

      <FormSection step={2} title="Who's coming">
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            id="field-name"
            label="Full name"
            autoComplete="name"
            placeholder="Jane Whitfield"
            value={details.name}
            onChange={onDetailChange("name")}
            error={errors.name}
          />

          <TextField
            id="field-phone"
            label="Phone"
            type="tel"
            autoComplete="tel"
            placeholder="+62 812 3456 7890"
            value={details.phone}
            onChange={onDetailChange("phone")}
            error={errors.phone}
          />

          <TextField
            id="field-email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={details.email}
            onChange={onDetailChange("email")}
            error={errors.email}
            className="sm:col-span-2"
          />

          <TextField
            id="notes"
            label="Anything we should know?"
            hint="(optional)"
            multiline
            rows={4}
            placeholder="Allergies, a quiet table, wheelchair access, a cake at the end…"
            value={details.notes}
            onChange={onDetailChange("notes")}
            className="sm:col-span-2"
          />
        </div>

        <Button type="submit" full size="lg" className="mt-8">
          Confirm reservation
        </Button>
        <p className="mt-3 text-center text-sm text-ink-500">
          No card required · Free cancellation up to 4 hours before
        </p>
      </FormSection>
    </form>
  );
}

export default BookingForm;
