import { MdOutlineRoomService } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import Reveal from "../atoms/Reveal";
import SectionHeading from "../molecules/SectionHeading";
import ServiceCard from "../molecules/ServiceCard";
import { img, restaurantData } from "../../data/restaurants";

const SERVICES = [
  {
    icon: <IoFastFoodOutline />,
    service: "Quality food",
    description: "Every kitchen is visited unannounced before it is listed. No exceptions.",
  },
  {
    icon: <LuChefHat />,
    service: "Professional chefs",
    description: "Named chefs, open kitchens, and menus that change with the season.",
  },
  {
    icon: <MdOutlineRoomService />,
    service: "Good service",
    description: "Rated by real diners on hospitality, not just on how the plate looked.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-100">
            <img
              src="/about.png"
              alt="Inside one of our partner kitchens"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-2 hidden w-44 overflow-hidden rounded-3xl border-4 border-cream shadow-lift sm:block lg:-right-8 lg:w-52">
            <img
              src={img(restaurantData[4].photos[1], 400)}
              alt=""
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -left-2 top-8 rounded-2xl border border-ink-200/70 bg-white/95 px-5 py-4 shadow-lift backdrop-blur lg:-left-8">
            <p className="font-display text-3xl font-semibold text-ink-900">32</p>
            <p className="text-xs uppercase tracking-[.14em] text-ink-500">Years at the pass</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title="We only list the tables we'd book ourselves."
            />
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-600">
              westCorner started in 1992 as a single grill house on a quiet corner. Three decades
              later we do one thing: find the western kitchens that still cook over real fire, sit
              down at their tables, and tell you honestly whether they are worth your evening.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-600">
              No paid placements, no inflated stars. Just a shortlist you can trust and a
              reservation that takes half a minute.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.service} delay={140 + index * 90} className="h-full">
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
