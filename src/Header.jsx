import { useState } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between xl:py-5 py-4 bg-zinc-800 font-medium pl-3 text-zinc-50 xl:text-2xl text-xl fixed top-0 left-0 right-0 w-full z-10">
        <Link to="/home" className="px-3">
          ABR
        </Link>
        <div className="hidden md:flex">
          <Link to="/home" className="px-3">
            Home
          </Link>
          <Link to="/about" className="px-3">
            About
          </Link>
          <Link to="/project" className="px-3">
            Projects
          </Link>
          <Link to="/edu" className="px-3">
            Educations 
          </Link>
          <Link to="/contact" className="px-3">
            Contact
          </Link>
          <a href="https://github.com/albrightraj2021" className="px-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl px-3"></i>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <a href="https://github.com/albrightraj2021" className="px-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl pr-2"></i>
            Github
          </a>
          <button className="px-3" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars pr-4 text-2xl"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-zinc-800 text-zinc-50 fixed top-16 left-0 right-0 w-full z-30">
          <Link to="/home" className="px-3 py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="px-3 py-2" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/project" className="px-3 py-2" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/edu" className="px-3 py-2" onClick={() => setIsOpen(false)}>
            Educations
          </Link>
          <Link to="/contact" className="px-3 py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
         
        </div>
      )}
    </>
  );
}
