import { FiMapPin } from "react-icons/fi";

const TILE = 256;
const ZOOM = 15;
const COLS = [-3, -2, -1, 0, 1, 2, 3];
const ROWS = [-1, 0, 1];

const toTile = (lat, lon, zoom) => {
  const n = 2 ** zoom;
  const latRad = (lat * Math.PI) / 180;
  return {
    x: ((lon + 180) / 360) * n,
    y: ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n,
  };
};

function StaticMap({ latitude, longitude, label }) {
  const { x, y } = toTile(latitude, longitude, ZOOM);
  const originX = Math.floor(x);
  const originY = Math.floor(y);

  const pointX = (3 + (x - originX)) * TILE;
  const pointY = (1 + (y - originY)) * TILE;

  return (
    <div className="relative h-[320px] w-full overflow-hidden bg-cream-deep sm:h-[420px]">
      <div
        className="absolute left-1/2 top-1/2 select-none"
        style={{ transform: `translate(${-pointX}px, ${-pointY}px)` }}
        aria-hidden
      >
        {ROWS.map((row) => (
          <div key={row} className="flex">
            {COLS.map((col) => (
              <img
                key={col}
                src={`https://tile.openstreetmap.org/${ZOOM}/${originX + col}/${originY + row}.png`}
                alt=""
                width={TILE}
                height={TILE}
                loading="lazy"
                className="block h-64 w-64 max-w-none opacity-95 saturate-[.8]"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-ember-600 text-white shadow-lift ring-4 ring-white">
          <FiMapPin className="text-lg" />
        </span>
        <span className="mx-auto block h-3 w-0.5 bg-ember-600" aria-hidden />
      </div>

      {label && (
        <p className="absolute bottom-3 left-3 max-w-[70%] truncate rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-ink-900 shadow-soft backdrop-blur">
          {label}
        </p>
      )}

      <p className="absolute bottom-2 right-2 rounded bg-white/80 px-2 py-0.5 text-[11px] text-ink-600">
        ©{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          OpenStreetMap
        </a>{" "}
        contributors
      </p>
    </div>
  );
}

export default StaticMap;
