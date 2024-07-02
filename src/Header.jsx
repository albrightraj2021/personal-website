import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex justify-between xl:py-5 py-5 bg-zinc-800 font-medium pl-3 text-zinc-50 xl:text-2xl text-xl fixed top-0 left-0 right-0 w-full">
        <Link to="/home" className="px-3">
          ABR
        </Link>
        <div>
          <Link to="/home" className="px-3">
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
    </>
  );
}
