function PropertyDetailsModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 w-[500px] max-w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <h2 className="text-2xl font-bold mt-4">
          {property.title}
        </h2>

        <p className="text-gray-500">
          📍 {property.location}
        </p>
        <a
        href={`https://www.google.com/maps/search/${property.location}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-2 text-blue-500 hover:underline"
        >
            🌍 Open on Google Maps
            </a>

        <p className="mt-2">
          ⭐ {property.rating}
        </p>

        <p className="font-semibold mt-2">
          {property.price}/night
        </p>

        <p className="mt-4 text-gray-600">
          A beautiful property for a comfortable stay.
        </p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PropertyDetailsModal;