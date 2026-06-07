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
import BookingHistory from "./pages/BookingHistory";
import BackgroundParticles from "./BackgroundParticles";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");

    return savedTheme
      ? JSON.parse(savedTheme)
      : false;
  });

  const [sortOption, setSortOption] = useState("default");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const filteredProperties = properties.filter(
    (property) => {
      const matchesSearch = property.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        property.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }
  );

  const sortedProperties = [
    ...filteredProperties,
  ].sort((a, b) => {
    if (sortOption === "price-low") {
      return (
        Number(a.price.replace(/[₹,]/g, "")) -
        Number(b.price.replace(/[₹,]/g, ""))
      );
    }

    if (sortOption === "price-high") {
      return (
        Number(b.price.replace(/[₹,]/g, "")) -
        Number(a.price.replace(/[₹,]/g, ""))
      );
    }

    if (sortOption === "rating") {
      return Number(b.rating) - Number(a.rating);
    }

    return 0;
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
            <BackgroundParticles />
            <Navbar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />

            <div className="relative z-10">
              <Hero />
              </div>

            <Stats />

            <Categories
              selectedCategory={selectedCategory}
              setSelectedCategory={
                setSelectedCategory
              }
            />

            <div className="px-8 mt-4">
              <select
                value={sortOption}
                onChange={(e) =>
                  setSortOption(e.target.value)
                }
                className="border p-2 rounded-lg text-black"
              >
                <option value="default">
                  Sort By
                </option>

                <option value="price-low">
                  Price Low → High
                </option>

                <option value="price-high">
                  Price High → Low
                </option>

                <option value="rating">
                  Rating High → Low
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
              {sortedProperties.map((property) => (
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
      <Route
  path="/booking-history"
  element={<BookingHistory />}
/>
    </Routes>
  );
}

export default App;
