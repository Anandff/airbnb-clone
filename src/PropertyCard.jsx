import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import BookingModal from "./BookingModal";
import PropertyDetailsModal from "./PropertyDetailsModal";
function PropertyCard({property}) {
    const [liked, setLiked] = useState(false);
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <div className="relative">
                <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover cursor-pointer"
                onClick={() => setShowDetails(true)}
                />

                <FaHeart
                size={24}
                onClick={() => {
                    if (!liked) {
                        setMessage("❤️ Added to Favorites");
                    } else {
                        setMessage("💔 Removed from Favorites");
                    }
                    setLiked(!liked);
                    setTimeout(() => {
                        setMessage("");
                    }, 2000);
                }}
                className={`absolute top-3 right-3 cursor-pointer ${
                    liked ? "text-red-500" : "text-white"
                    }`}
/>
            </div>
            <div className="p-4">
                
                {message && (
                    <div className="mb-2 bg-green-100 text-green-700 px-3 py-2 rounded">
                        {message}
                        </div>
                    )}
                    
                    <div className="flex justify-between">
                    <h2 className="font-bold">
                        {property.title}
                    </h2>

                    <span>⭐ {property.rating}</span>
                </div>
                <p className="text-gray-500">
                    {property.location}
                </p>

                <p className="mt-2 font-semibold">
                    {property.price}/night
                </p>
                <button
                onClick={() => setShowModal(true)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                    Book Now
                </button>
            </div>
            <BookingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            property={property}
            />

            <PropertyDetailsModal
            property={showDetails ? property : null}
            onClose={() => setShowDetails(false)}
            />
            </div>
    );
}
export default PropertyCard;