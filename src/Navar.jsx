import { FaUserCircle, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar( { searchTerm, setSearchTerm, darkMode, setDarkMode, }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={`flex justify-between items-center px-4 md:px-8 py-4 shadow-md sticky top-0 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        >
            <Link
  to="/"
  className="travel-logo text-2xl md:text-4xl font-extrabold"
>
  ✈ Airbnb
</Link>

<div className="hidden md:flex gap-6 font-medium">
    <Link
    to="/"
    className="hover:text-red-500"
    >
        Home
    </Link>

    <Link
    to="/favorites"
    className="hover:text-red-500"
    >
        Favorites
    </Link>

    <Link
  to="/booking-history"
  className="hover:text-red-500"
>
  Bookings
</Link>

    <Link
    to="/about"
    className="hover:text-red-500"
    >
        About
    </Link>
</div>

<div className={`hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm ${
    darkMode ? "border-gray-500" : ""
  }`}
>
  <input
    type="text"
    placeholder="Search destinations"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className={`outline-none bg-transparent ${
      darkMode ? "text-white" : "text-black"
    }`}
  />
  <IoSearch className="text-red-500 ml-2" />
</div>

            <div className="flex items-center gap-4">
                <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                <button
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:block text-xl"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

            <FaUserCircle
            size={35}
            className="hidden md:block cursor-pointer"
            />
            </div>
            {menuOpen && (
                <div
                className={`absolute top-full left-0 w-full flex flex-col p-4 gap-4 shadow-md md:hidden ${
                    darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
                >
                    <Link to="/">Home</Link>
                    
                    <Link to="/favorites">Favorites</Link>
                    
                    <Link to="/about">About</Link>
                    
                    <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-left"
                    >
                        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                        </button>
                        </div>
                    )}
                    </nav>
    );
}

export default Navbar;