import { BrowserRouter as Router, Route,Link ,Routes} from 'react-router-dom';
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
export default function () {
  return(
    <>
    <Router>
        <div className="flex justify-between xl:py-5 py-5 bg-zinc-800 font-medium pl-3 text-zinc-50 xl:text-2xl text-xl fixed top-0 left-0 right-0 w-full">
        <Link to="/" className="px-3">
          ABR
        </Link>
        <div>
          <Link to="/" className="px-3">
            Home
          </Link>
          <Link to="/about" className="px-3">
            About
          </Link>
          <Link to="/contact" className="px-3">
            Contact
          </Link>
        </div>
      </div>
          <Routes>
           <Route exec path="/" element={<Home />} /> 
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       </Router>
       
    </>
  )
}