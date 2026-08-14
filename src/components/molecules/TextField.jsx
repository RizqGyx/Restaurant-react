import FormField from "./FormField";

function TextField({ id, label, error, hint, multiline = false, className = "", ...rest }) {
  const Control = multiline ? "textarea" : "input";

  return (
    <FormField id={id} label={label} error={error} hint={hint} className={className}>
      <Control
        id={id}
        aria-invalid={Boolean(error)}
        className={`field ${multiline ? "resize-none" : ""} ${error ? "!border-red-400" : ""}`}
        {...rest}
      />
    </FormField>
  );
}

export default TextField;
