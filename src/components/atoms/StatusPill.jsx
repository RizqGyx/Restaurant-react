const TONES = {
  light: {
    open: "bg-emerald-50 text-emerald-800",
    closed: "bg-ink-100 text-ink-600",
    dotOpen: "bg-emerald-500",
    dotClosed: "bg-ink-400",
    size: "px-3.5 py-1.5 text-sm font-medium",
    dot: "h-2 w-2",
  },
  overlay: {
    open: "bg-ink-900/75 text-white backdrop-blur",
    closed: "bg-ink-900/60 text-ink-200 backdrop-blur",
    dotOpen: "bg-emerald-400",
    dotClosed: "bg-ink-400",
    size: "px-3 py-1.5 text-[11px] font-semibold",
    dot: "h-1.5 w-1.5",
  },
};

function StatusPill({ status, tone = "light", className = "" }) {
  const theme = TONES[tone];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${theme.size} ${
        status.open ? theme.open : theme.closed
      } ${className}`}
    >
      <span
        aria-hidden
        className={`rounded-full ${theme.dot} ${status.open ? theme.dotOpen : theme.dotClosed}`}
      />
      {status.label}
    </span>
  );
}

export default StatusPill;
