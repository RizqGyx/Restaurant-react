import { initials } from "../../lib/format";

const TONES = [
  "bg-ember-100 text-ember-800",
  "bg-emerald-100 text-emerald-800",
  "bg-sky-100 text-sky-800",
  "bg-amber-100 text-amber-800",
  "bg-rose-100 text-rose-800",
  "bg-violet-100 text-violet-800",
];

const toneFor = (name) =>
  TONES[[...name].reduce((sum, char) => sum + char.charCodeAt(0), 0) % TONES.length];

const SIZES = {
  md: "h-11 w-11 text-sm",
  lg: "h-16 w-16 font-display text-xl",
};

function Avatar({ name, size = "md", inverted = false, className = "" }) {
  const tone = inverted ? "bg-ink-900 text-cream" : toneFor(name);

  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center rounded-full font-semibold ${SIZES[size]} ${tone} ${className}`}
    >
      {initials(name)}
    </span>
  );
}

export default Avatar;
