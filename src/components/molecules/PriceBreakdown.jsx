import { money } from "../../lib/format";

function PriceBreakdown({ rows, total, totalLabel = "Estimated total", className = "" }) {
  return (
    <dl className={`space-y-3 text-sm ${className}`}>
      {rows.map((row) => (
        <div key={row.label} className="flex justify-between text-ink-600">
          <dt>{row.label}</dt>
          <dd>{money(row.value)}</dd>
        </div>
      ))}
      <div className="flex justify-between border-t border-ink-200 pt-3 font-semibold text-ink-900">
        <dt>{totalLabel}</dt>
        <dd>{money(total)}</dd>
      </div>
    </dl>
  );
}

export default PriceBreakdown;
