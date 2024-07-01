import { BrowserRouter,Route,Routes } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
export default function () {
  return(
    <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}