import Chip from "../atoms/Chip";

function ChipGroup({ options, value, onChange, label, scrollable = false, className = "" }) {
  const layout = scrollable
    ? "no-scrollbar -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
    : "flex flex-wrap gap-2.5";

  return (
    <div role="group" aria-label={label} className={`${layout} ${className}`}>
      {options.map((option) => (
        <Chip key={option} active={option === value} onClick={() => onChange(option)}>
          {option}
        </Chip>
      ))}
    </div>
  );
}

export default ChipGroup;
