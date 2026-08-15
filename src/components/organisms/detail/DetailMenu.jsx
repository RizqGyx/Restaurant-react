import DetailSection from "../../molecules/DetailSection";
import { money } from "../../../lib/format";

function DetailMenu({ signatures }) {
  return (
    <DetailSection id="signatures" title="What to order">
      <ul className="mt-6 divide-y divide-ink-200 overflow-hidden rounded-3xl border border-ink-200 bg-white">
        {signatures.map((dish) => (
          <li
            key={dish.name}
            className="flex items-start justify-between gap-6 p-5 transition-colors hover:bg-cream"
          >
            <span>
              <span className="block font-semibold text-ink-900">{dish.name}</span>
              <span className="mt-1 block text-sm text-ink-500">{dish.note}</span>
            </span>
            <span className="shrink-0 font-display text-lg font-semibold text-ink-900">
              {money(dish.price)}
            </span>
          </li>
        ))}
      </ul>
    </DetailSection>
  );
}

export default DetailMenu;
