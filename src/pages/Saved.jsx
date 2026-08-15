import { FiHeart } from "react-icons/fi";
import PageLayout from "../components/templates/PageLayout";
import Button from "../components/atoms/Button";
import Reveal from "../components/atoms/Reveal";
import EmptyState from "../components/molecules/EmptyState";
import SectionHeading from "../components/molecules/SectionHeading";
import RestaurantGrid from "../components/organisms/RestaurantGrid";
import { useFavorites } from "../hooks/useFavorites";
import { restaurantData } from "../data/restaurants";
import { plural } from "../lib/format";

function Saved() {
  const { ids } = useFavorites();
  const saved = restaurantData.filter((restaurant) => ids.includes(String(restaurant.id)));

  const lead =
    saved.length > 0
      ? `${plural(saved.length, "table")} waiting for you. Saved on this device.`
      : "Tap the heart on any restaurant and it will appear here, ready when you are.";

  return (
    <PageLayout className="shell min-h-[60vh] pt-28 lg:pt-36">
      <Reveal>
        <SectionHeading
          as="h1"
          size="lg"
          className="max-w-2xl"
          eyebrow="Your list"
          title="Saved restaurants"
          lead={lead}
        />
      </Reveal>

      {saved.length > 0 ? (
        <RestaurantGrid className="mt-14" restaurants={saved} />
      ) : (
        <Reveal delay={80}>
          <EmptyState
            className="mt-14"
            icon={<FiHeart />}
            title="Nothing saved yet"
            message="Browse the shortlist and save the places you want to come back to."
            action={<Button to="/#restaurants">Explore restaurants</Button>}
          />
        </Reveal>
      )}
    </PageLayout>
  );
}

export default Saved;
