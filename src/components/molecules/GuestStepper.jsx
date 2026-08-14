import { FiMinus, FiPlus } from "react-icons/fi";
import { guestLabel } from "../../lib/format";
import { MAX_GUESTS } from "../../lib/booking";

const stepper =
  "grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-ink-900 disabled:opacity-40";

function GuestStepper({ value, onChange, max = MAX_GUESTS }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-ink-200 bg-white px-3 py-2">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        aria-label="Remove a guest"
        className={stepper}
      >
        <FiMinus />
      </button>
      <span className="text-[15px] font-semibold tabular-nums text-ink-900">
        {guestLabel(value)}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Add a guest"
        className={stepper}
      >
        <FiPlus />
      </button>
    </div>
  );
}

export default GuestStepper;
