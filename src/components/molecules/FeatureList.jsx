const VARIANTS = {
  plain: {
    list: "space-y-6",
    item: "flex items-start gap-4",
    icon: "mt-0.5 shrink-0 text-2xl text-ink-800",
    title: "block font-semibold text-ink-900",
    copy: "mt-0.5 block text-[15px] text-ink-500",
  },
  card: {
    list: "grid gap-3",
    item:
      "flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.05] p-5 backdrop-blur-sm transition-colors duration-500 hover:border-ember-500/50 hover:bg-white/[.09]",
    icon:
      "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ember-600/20 text-xl text-ember-400",
    title: "block font-semibold text-white",
    copy: "mt-0.5 block text-sm text-white/60",
  },
};

function FeatureList({ items, variant = "plain", className = "" }) {
  const theme = VARIANTS[variant];

  return (
    <ul className={`${theme.list} ${className}`}>
      {items.map(({ icon: Icon, title, copy }) => (
        <li key={title} className={theme.item}>
          {variant === "card" ? (
            <span className={theme.icon}>
              <Icon />
            </span>
          ) : (
            <Icon className={theme.icon} />
          )}
          <span>
            <span className={theme.title}>{title}</span>
            <span className={theme.copy}>{copy}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
