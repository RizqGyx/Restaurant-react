function EmptyState({ icon, title, message, action, className = "" }) {
  return (
    <div
      className={`rounded-[2rem] border border-dashed border-ink-300 bg-white/60 px-6 py-20 text-center ${className}`}
    >
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ember-50 text-2xl text-ember-500">
        {icon}
      </span>
      <h2 className="mt-6 font-display text-2xl font-semibold">{title}</h2>
      <p className="mx-auto mt-2 max-w-sm text-ink-500">{message}</p>
      {action && <div className="mt-8 flex justify-center">{action}</div>}
    </div>
  );
}

export default EmptyState;
