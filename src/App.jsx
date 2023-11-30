import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DetailRest from "./pages/DetailRest"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<DetailRest />} />
      </Routes>
    </>
  )
}

export default App