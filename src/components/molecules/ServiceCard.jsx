function ServiceCard({ icon, service, description }) {
  return (
    <div className="group h-full rounded-3xl border border-ink-200/70 bg-white p-6 transition-all duration-500 ease-spring hover:-translate-y-1 hover:border-ember-200 hover:shadow-soft">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ember-50 text-2xl text-ember-600 transition-colors duration-500 group-hover:bg-ember-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{service}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>}
    </div>
  );
}

export default ServiceCard;
