import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar( { searchTerm, setSearchTerm, darkMode, setDarkMode, }) {
    return (
        <nav className={`flex justify-between items-center px-8 py-4 shadow-md sticky top-0 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        >
            <Link
to="/"
className="text-3xl font-bold text-red-500"
>
    Airbnb
</Link>

<div className="flex gap-6 font-medium">
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
    to="/about"
    className="hover:text-red-500"
    >
        About
    </Link>
</div>

<div className={`flex items-center border rounded-full px-4 py-2 shadow-sm ${
darkMode ? "border-gray-500" : ""
}`}>
                <input
                type="text"
                placeholder="Search destinations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`outline-none bg-transparent ${darkMode ? "text-white" : "text-black"}`}
                />
                <IoSearch className="text-red-500 ml-2" />
            </div>

            <div className="flex items-center gap-4">
                <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

            <FaUserCircle
            size={35}
            className="cursor-pointer"
            />
            </div>
        </nav>
    );
}

export default Navbar;