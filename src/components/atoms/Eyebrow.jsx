function Eyebrow({ tone = "dark", className = "", children }) {
  const text = tone === "light" ? "text-ember-400" : "text-ember-700";
  const rule = tone === "light" ? "bg-ember-400" : "bg-ember-500";

  return (
    <p className={`eyebrow ${text} ${className}`}>
      <span aria-hidden className={`h-px w-8 ${rule}`} />
      {children}
    </p>
  );
}

export default Eyebrow;
