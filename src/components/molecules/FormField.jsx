function FormField({ id, label, error, hint, as: Tag = "label", className = "", children }) {
  const isFieldset = Tag === "fieldset";
  const Caption = isFieldset ? "legend" : "label";

  return (
    <Tag className={`block ${className}`} {...(isFieldset ? { id } : {})}>
      <Caption className="label-x" {...(isFieldset ? {} : { htmlFor: id })}>
        {label}
        {hint && <span className="normal-case"> {hint}</span>}
      </Caption>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </Tag>
  );
}

export default FormField;
