import { FiClock, FiPhone } from "react-icons/fi";
import DetailSection from "../../molecules/DetailSection";
import { WEEKDAYS, weekdayOf, todayISO } from "../../../data/restaurants";
import { telHref } from "../../../lib/format";

function DetailHours({ hours, phoneNumber }) {
  const today = weekdayOf(todayISO());

  return (
    <DetailSection id="hours" title="Opening hours" icon={<FiClock className="text-ink-500" />}>
      <ul className="mt-6 overflow-hidden rounded-3xl border border-ink-200 bg-white">
        {WEEKDAYS.map((day) => {
          const window = hours[day];
          const isToday = day === today;

          return (
            <li
              key={day}
              className={`flex items-center justify-between border-b border-ink-200 px-5 py-3.5 text-[15px] last:border-0 ${
                isToday ? "bg-ember-50/70" : ""
              }`}
            >
              <span className={isToday ? "font-semibold text-ink-900" : "text-ink-600"}>
                {day}
                {isToday && (
                  <span className="ml-2 text-xs uppercase tracking-wide text-ember-700">Today</span>
                )}
              </span>
              <span className={window ? "tabular-nums text-ink-800" : "text-ink-400"}>
                {window ? `${window[0]} – ${window[1]}` : "Closed"}
              </span>
            </li>
          );
        })}
      </ul>

      <a
        href={telHref(phoneNumber)}
        className="mt-5 inline-flex items-center gap-2.5 text-[15px] text-ink-700 transition-colors hover:text-ember-700"
      >
        <FiPhone /> {phoneNumber}
      </a>
    </DetailSection>
  );
}

export default DetailHours;
