import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Stars({ value, size = "text-sm", className = "" }) {
  return (
    <span
      role="img"
      aria-label={`${value} out of 5 stars`}
      className={`inline-flex items-center gap-0.5 text-ember-500 ${size} ${className}`}
    >
      {[1, 2, 3, 4, 5].map((position) => {
        if (value >= position) return <FaStar key={position} />;
        if (value >= position - 0.5) return <FaStarHalfAlt key={position} />;
        return <FaRegStar key={position} className="text-ink-300" />;
      })}
    </span>
  );
}

export default Stars;
