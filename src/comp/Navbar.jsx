import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-extrabold text-blue-400 tracking-wide"
            >
              MADHURANGA
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              to="/about"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/education"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Education
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/education"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>

            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
