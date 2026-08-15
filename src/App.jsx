import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/templates/ScrollToTop";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import Booking from "./pages/Booking";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/favorite" element={<Saved />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
