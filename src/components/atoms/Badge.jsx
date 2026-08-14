const VARIANTS = {
  light: "bg-white/95 text-ink-900 shadow-soft backdrop-blur",
  ember: "bg-ember-50 text-ember-700",
};

function Badge({ variant = "light", className = "", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.1em] ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
