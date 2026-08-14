import { FaStar } from "react-icons/fa";

function Rating({ value, count, className = "", starClass = "text-[13px]" }) {
  return (
    <span className={`inline-flex items-center gap-1 font-semibold text-ink-900 ${className}`}>
      <FaStar className={`${starClass} text-ember-500`} />
      {value.toFixed(1)}
      {count !== undefined && (
        <span className="font-normal text-ink-400">({count})</span>
      )}
    </span>
  );
}

export default Rating;
