function DetailSection({ id, title, icon, children, className = "" }) {
  return (
    <section aria-labelledby={id} className={className}>
      <h2 id={id} className="flex items-center gap-2.5 font-display text-2xl font-semibold">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
}

export default DetailSection;
