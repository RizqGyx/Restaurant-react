import { FiSearch, FiX } from "react-icons/fi";

function SearchField({ id, value, onChange, label, placeholder, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <FiSearch className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-ink-400" />
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="field !rounded-full !py-3.5 !pl-[3.25rem] !pr-11"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
        >
          <FiX />
        </button>
      )}
    </div>
  );
}

export default SearchField;
