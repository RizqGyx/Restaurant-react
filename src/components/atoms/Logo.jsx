import { Link } from "react-router-dom";

function Logo({ inverted = false, size = "md", to = "/" }) {
  const image = size === "sm" ? "h-11" : "h-12";
  const text = size === "sm" ? "text-2xl" : "text-2xl";
  const wordmark = inverted ? "text-white" : "text-ink-900";
  const accent = inverted ? "text-ember-500" : "text-ember-600";

  const content = (
    <>
      <img src="/Logo.png" alt="" className={`${image} w-auto`} />
      <span className={`font-display ${text} font-semibold tracking-tight ${wordmark}`}>
        west<span className={accent}>Corner</span>
      </span>
    </>
  );

  if (!to) return <div className="flex items-center gap-2.5">{content}</div>;

  return (
    <Link to={to} aria-label="westCorner — home" className="flex shrink-0 items-center gap-2.5">
      {content}
    </Link>
  );
}

export default Logo;
