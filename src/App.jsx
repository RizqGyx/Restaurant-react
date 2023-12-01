import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DetailRest from "./pages/DetailRest"
import Favorite from "./pages/Favorite"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/restaurant/:id" element={<DetailRest />} />
      </Routes>
    </>
  )
}

export default App