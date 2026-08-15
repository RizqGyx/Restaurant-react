import { FiExternalLink } from "react-icons/fi";
import Button from "../../atoms/Button";
import DetailSection from "../../molecules/DetailSection";
import StaticMap from "./StaticMap";
import { mapsHref } from "../../../lib/format";

function DetailLocation({ restaurant }) {
  const { latitude, longitude } = restaurant.mapLocation;

  return (
    <DetailSection
      id="location"
      title="Where you'll be"
      className="border-t border-ink-200 py-12"
    >
      <p className="mt-2 text-[15px] text-ink-600">{restaurant.location}</p>

      <div className="mt-6 overflow-hidden rounded-[2rem] border border-ink-200">
        <StaticMap
          latitude={latitude}
          longitude={longitude}
          label={restaurant.neighborhood}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Button
          variant="secondary"
          href={mapsHref(latitude, longitude)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps <FiExternalLink />
        </Button>
        <p className="text-sm tabular-nums text-ink-500">
          {latitude}, {longitude}
        </p>
      </div>
    </DetailSection>
  );
}

export default DetailLocation;
