function Chip({ active = false, className = "", children, ...rest }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`chip ${active ? "chip-active" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Chip;
