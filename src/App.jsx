import { useState, useEffect } from "react"; 
import Navbar from "./Navar";
import Hero from "./Hero";
import Stats from "./Stats";
import Categories from "./categories";
import PropertyCard from "./PropertyCard";
import properties from "./data/properties";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import PropertyPage from "./pages/PropertyPage";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("darkMode");

  return savedTheme
    ? JSON.parse(savedTheme)
    : false;
});
useEffect(() => {
  localStorage.setItem(
    "darkMode",
    JSON.stringify(darkMode)
  );
}, [darkMode]);
  const [selectedCategory, setSelectedCategory] =useState("All");
  const filteredProperties = properties.filter((property) => {
  const matchesSearch = property.location
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    property.category === selectedCategory;

  return matchesSearch && matchesCategory;
});
  return (
  <Routes>
    <Route
      path="/"
      element={
        <div
          className={
            darkMode
              ? "bg-gray-900 text-white min-h-screen"
              : "bg-white text-black min-h-screen"
          }
        >
          <Navbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Hero />

          <Stats />

          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>

          <Footer />
        </div>
      }
    />

    <Route
      path="/favorites"
      element={<Favourites />}
    />

    <Route
      path="/about"
      element={<About />}
    />
    <Route
    path="/property/:id"
    element={<PropertyPage />}
    />
  </Routes>
);
}

export default App;