import { BrowserRouter as Router, Route,Link ,Routes} from 'react-router-dom';
import About from "./About"
import Home from "./Home"
import Header from './Header';
import Contact from "./Contact"
export default function () {
  return(
    <>
    <Router>
     <Header/>
          <Routes>
           <Route exec path="/" element={<Home />} /> 
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       </Router>
       
    </>
  )
}