import { useState } from "react";
import Button from "../../atoms/Button";
import DetailSection from "../../molecules/DetailSection";
import { getAmenity } from "../../../data/amenities";

const PREVIEW_COUNT = 6;

function DetailAmenities({ amenities }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? amenities : amenities.slice(0, PREVIEW_COUNT);

  return (
    <DetailSection id="amenities" title="What this place offers">
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {shown.map((key) => {
          const { label, icon: Icon } = getAmenity(key);
          return (
            <li key={key} className="flex items-center gap-3.5 text-[15px] text-ink-700">
              <Icon className="shrink-0 text-xl text-ink-500" />
              {label}
            </li>
          );
        })}
      </ul>

      {amenities.length > PREVIEW_COUNT && (
        <Button variant="secondary" className="mt-7" onClick={() => setExpanded((open) => !open)}>
          {expanded ? "Show less" : `Show all ${amenities.length} amenities`}
        </Button>
      )}
    </DetailSection>
  );
}

export default DetailAmenities;
