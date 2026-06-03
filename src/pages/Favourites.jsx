import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

function Favourites() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        ❤️ My Favourites
      </h1>

      {favourites.length === 0 ? (
        <p>No favourite properties yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favourites.map((property) => (
            <div
              key={property.id}
              className="border rounded-xl overflow-hidden shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold">
                  {property.title}
                </h2>

                <p className="text-gray-500">
                  {property.location}
                </p>

                <p className="font-semibold mt-2">
                  {property.price}/night
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;