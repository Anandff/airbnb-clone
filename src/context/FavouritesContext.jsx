import { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
  const saved = localStorage.getItem("favourites");

  return saved ? JSON.parse(saved) : [];
});

  const addFavourite = (property) => {
    setFavourites((prev) => {
      const exists = prev.find((item) => item.id === property.id);

      if (exists) {
        return prev.filter((item) => item.id !== property.id);
      }

      return [...prev, property];
    });
  };
  
  useEffect(() => {
  localStorage.setItem(
    "favourites",
    JSON.stringify(favourites)
  );
}, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesProvider;