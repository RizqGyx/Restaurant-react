import { useParams } from "react-router-dom";
import PageLayout from "../components/templates/PageLayout";
import Divider from "../components/atoms/Divider";
import DetailHeader from "../components/organisms/detail/DetailHeader";
import DetailGallery from "../components/organisms/detail/DetailGallery";
import DetailOverview from "../components/organisms/detail/DetailOverview";
import DetailMenu from "../components/organisms/detail/DetailMenu";
import DetailAmenities from "../components/organisms/detail/DetailAmenities";
import DetailHours from "../components/organisms/detail/DetailHours";
import DetailReviews from "../components/organisms/detail/DetailReviews";
import DetailLocation from "../components/organisms/detail/DetailLocation";
import BookingPanel from "../components/organisms/detail/BookingPanel";
import MobileReserveBar from "../components/organisms/detail/MobileReserveBar";
import RestaurantGrid from "../components/organisms/RestaurantGrid";
import DetailSection from "../components/molecules/DetailSection";
import NotFound from "./NotFound";
import { getRestaurantById, restaurantData } from "../data/restaurants";

const SIMILAR_COUNT = 3;

const similarTo = (restaurant) =>
  restaurantData
    .filter(
      (item) =>
        item.id !== restaurant.id &&
        item.foodCategory.some((category) => restaurant.foodCategory.includes(category)),
    )
    .slice(0, SIMILAR_COUNT);

function RestaurantDetail() {
  const { id } = useParams();
  const restaurant = getRestaurantById(id);

  if (!restaurant) {
    return (
      <NotFound
        title="We can't find that restaurant"
        message="It may have closed, or the link is incorrect. Browse the shortlist to find your next table."
      />
    );
  }

  const similar = similarTo(restaurant);

  return (
    <PageLayout className="pb-28 lg:pb-0">
      <div className="shell pt-28 lg:pt-32">
        <DetailHeader restaurant={restaurant} />

        <div className="mt-7">
          <DetailGallery photos={restaurant.photos} name={restaurant.name} />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_minmax(340px,380px)] lg:gap-16">
          <div className="min-w-0 space-y-10">
            <DetailOverview restaurant={restaurant} />
            <Divider />
            <DetailMenu signatures={restaurant.signatures} />
            <Divider />
            <DetailAmenities amenities={restaurant.amenities} />
            <Divider />
            <DetailHours hours={restaurant.hours} phoneNumber={restaurant.phoneNumber} />
          </div>

          <aside className="lg:relative">
            <div className="lg:sticky lg:top-28">
              <BookingPanel restaurant={restaurant} />
            </div>
          </aside>
        </div>

        <div className="mt-4">
          <DetailReviews restaurant={restaurant} />
        </div>

        <DetailLocation restaurant={restaurant} />

        {similar.length > 0 && (
          <DetailSection
            id="similar"
            title="You might also like"
            className="border-t border-ink-200 py-12"
          >
            <RestaurantGrid className="mt-8" restaurants={similar} animate={false} />
          </DetailSection>
        )}
      </div>

      <MobileReserveBar restaurant={restaurant} />
    </PageLayout>
  );
}

export default RestaurantDetail;
