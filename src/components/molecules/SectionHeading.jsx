import Eyebrow from "../atoms/Eyebrow";

const SIZES = {
  md: "text-[clamp(2rem,4vw,3rem)]",
  lg: "text-[clamp(2.25rem,5vw,3.5rem)]",
};

function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  size = "md",
  tone = "dark",
  className = "",
}) {
  const heading = tone === "light" ? "text-white" : "";
  const body = tone === "light" ? "text-white/70" : "text-ink-600";

  return (
    <div className={className}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        className={`mt-5 text-balance font-display ${SIZES[size]} font-semibold leading-[1.06] tracking-[-0.025em] ${heading}`}
      >
        {title}
      </Tag>
      {lead && <p className={`mt-4 text-[17px] leading-relaxed ${body}`}>{lead}</p>}
    </div>
  );
}

export default SectionHeading;
