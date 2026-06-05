import { useParams } from "react-router-dom";
import properties from "../data/properties";

function PropertyPage() {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );
  const similarProperties = properties.filter(
  (item) =>
    item.category === property.category &&
    item.id !== property.id
);

  if (!property) {
    return <h1>Property Not Found</h1>;
  }

  return (
    <div className="p-8">
      <img
        src={property.image}
        alt={property.title}
        className="w-full max-w-4xl h-96 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {property.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {property.location}
      </p>

      <p className="mt-2">
        ⭐ {property.rating}
      </p>

      <p className="mt-2">
        Category: {property.category}
      </p>

      <p className="text-2xl font-bold mt-4">
  {property.price}/night
</p>

<div className="mt-6">
  <h2 className="text-xl font-bold">
    Hosted by {property.host || "Anand"}
  </h2>

  <p className="mt-2">
    👥 {property.guests || 4} Guests
  </p>

  <p>
    🛏️ {property.bedrooms || 2} Bedrooms
  </p>

  <p>
    🚿 {property.bathrooms || 2} Bathrooms
  </p>

  <p className="mt-4">
    {property.description ||
      `Enjoy a wonderful stay at ${property.title} in ${property.location}. Perfect for travelers looking for comfort and convenience.`}
  </p>
</div>

<h2 className="text-2xl font-bold mt-8">
  Amenities
</h2>

<div className="grid grid-cols-2 gap-3 mt-4">
  {(property.amenities || [
    "WiFi",
    "Free Parking",
    "Kitchen",
    "Air Conditioning",
  ]).map((item, index) => (
    <div
      key={index}
      className="border p-3 rounded-lg"
    >
      ✅ {item}
    </div>
  ))}
</div>
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Similar Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.slice(0, 3).map((item) => (
                <div
                key={item.id}
                className="border rounded-xl overflow-hidden shadow"
                >
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                    />

                    <div className="p-4">
                        <h3 className="font-bold">
                            {item.title}
                            </h3>

                            <p>{item.location}</p>
                            
                            <p>{item.price}/night</p>
                            </div>
                            </div>
            ))}
            </div>
            </div>
  );
}

export default PropertyPage;