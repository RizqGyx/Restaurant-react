import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../components/templates/PageLayout";
import Hero from "../components/organisms/Hero";
import BrandMarquee from "../components/organisms/BrandMarquee";
import AboutSection from "../components/organisms/AboutSection";
import RestaurantListing from "../components/organisms/RestaurantListing";
import ReservationBanner from "../components/organisms/ReservationBanner";

const SCROLL_DELAY = 80;

const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function Home() {
  const [query, setQuery] = useState("");
  const { state, hash } = useLocation();

  useEffect(() => {
    const target = state?.scrollTo || hash.replace("#", "");
    if (!target) return undefined;

    const timer = setTimeout(() => scrollToSection(target), SCROLL_DELAY);
    return () => clearTimeout(timer);
  }, [state, hash]);

  return (
    <PageLayout overlayNav>
      <Hero
        query={query}
        onQueryChange={setQuery}
        onSearch={() => scrollToSection("restaurants")}
      />
      <BrandMarquee />
      <AboutSection />
      <RestaurantListing query={query} onQueryChange={setQuery} />
      <ReservationBanner />
    </PageLayout>
  );
}

export default Home;
