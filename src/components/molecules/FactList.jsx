function FactList({ items, className = "" }) {
  return (
    <dl className={`divide-y divide-ink-200 ${className}`}>
      {items.map(({ label, value }) => (
        <div key={label} className="flex justify-between gap-6 px-5 py-3.5 text-[15px]">
          <dt className="text-ink-500">{label}</dt>
          <dd className="text-right font-medium text-ink-900">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default FactList;
