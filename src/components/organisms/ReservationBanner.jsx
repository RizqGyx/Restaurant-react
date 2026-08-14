import { FiArrowRight } from "react-icons/fi";
import { LuCalendarHeart, LuUsers, LuPartyPopper } from "react-icons/lu";
import Button from "../atoms/Button";
import Reveal from "../atoms/Reveal";
import FeatureList from "../molecules/FeatureList";
import SectionHeading from "../molecules/SectionHeading";
import { img, restaurantData } from "../../data/restaurants";

const HIGHLIGHTS = [
  {
    icon: LuCalendarHeart,
    title: "Private dinners",
    copy: "Two to twelve covers, chef's menu optional.",
  },
  {
    icon: LuUsers,
    title: "Corporate tables",
    copy: "Invoiced billing and a dedicated host.",
  },
  {
    icon: LuPartyPopper,
    title: "Celebrations",
    copy: "Cake service, flowers, and the good playlist.",
  },
];

const OVERLAY =
  "linear-gradient(100deg, rgba(15,14,12,.94) 8%, rgba(15,14,12,.72) 48%, rgba(15,14,12,.35) 100%)";

function ReservationBanner() {
  return (
    <section id="book" className="scroll-mt-24 pb-8">
      <div className="shell">
        <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink-950">
          <img
            src={img(restaurantData[9].photos[0], 1600)}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10" style={{ background: OVERLAY }} />

          <div className="grid gap-12 px-7 py-16 sm:px-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-16 lg:py-20">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Reservations"
                title="Book for an evening you'll talk about later."
                lead="Pick the room, the hour and the occasion. We confirm with the restaurant directly and hold the table — no phone calls, no deposit for parties under eight."
              />

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/book">
                  Reserve a table <FiArrowRight />
                </Button>
                <p className="text-sm text-white/70">Free cancellation up to 4 hours before.</p>
              </div>
            </div>

            <FeatureList items={HIGHLIGHTS} variant="card" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ReservationBanner;
