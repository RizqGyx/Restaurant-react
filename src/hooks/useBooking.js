import { useEffect, useMemo, useState } from "react";
import { timeSlotsFor, todayISO } from "../data/restaurants";
import { estimateBill } from "../lib/pricing";
import { MAX_GUESTS } from "../lib/booking";

export function useBooking(restaurant, { initial = {}, autoSelectTime = false } = {}) {
  const [date, setDate] = useState(initial.date ?? todayISO());
  const [time, setTime] = useState(initial.time ?? "");
  const [guests, setGuests] = useState(initial.guests ?? 2);

  const slots = useMemo(() => timeSlotsFor(restaurant, date), [restaurant, date]);

  useEffect(() => {
    if (slots.includes(time)) return;
    if (slots.length === 0) setTime("");
    else setTime(autoSelectTime ? slots[Math.floor(slots.length / 2)] : "");
  }, [slots, time, autoSelectTime]);

  const changeGuests = (next) => setGuests(Math.min(MAX_GUESTS, Math.max(1, next)));

  return {
    date,
    setDate: (value) => setDate(value || todayISO()),
    time,
    setTime,
    guests,
    setGuests: changeGuests,
    slots,
    closed: slots.length === 0,
    bill: estimateBill(restaurant.price.est, guests),
  };
}
