import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import properties from "../data/properties";

function PropertyPage() {
  const { id } = useParams();
  const [reviewName, setReviewName] = useState("");
const [reviewText, setReviewText] = useState("");
const [reviewRating, setReviewRating] = useState(5);
const [reviews, setReviews] = useState(() => {
  const savedReviews = localStorage.getItem(
    `reviews-${id}`
  );

  return savedReviews
    ? JSON.parse(savedReviews)
    : [
        {
          name: "Rahul",
          text: "Amazing stay! Clean rooms and great location.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Priya",
          text: "Beautiful property and friendly host.",
          rating: "⭐⭐⭐⭐",
        },
      ];
});

useEffect(() => {
  localStorage.setItem(
    `reviews-${id}`,
    JSON.stringify(reviews)
  );
}, [reviews, id]);
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
  Guest Reviews
</h2>

<div className="space-y-4">
  {reviews.map((review, index) => (
    <div
      key={index}
      className="border p-4 rounded-xl"
    >
      <p className="font-bold">
        {review.name} {review.rating}
      </p>

      <p>{review.text}</p>
    </div>
  ))}
</div>
<div className="border p-4 rounded-xl mt-6">
  <h3 className="font-bold mb-3">
    Add Review
  </h3>

  <input
    type="text"
    placeholder="Your Name"
    value={reviewName}
    onChange={(e) => setReviewName(e.target.value)}
    className="border p-2 w-full mb-3"
  />

  <textarea
    placeholder="Write your review"
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
    className="border p-2 w-full mb-3"
  />
  <select
  value={reviewRating}
  onChange={(e) =>
    setReviewRating(Number(e.target.value))
  }
  className="border p-2 w-full mb-3"
>
  <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
  <option value={4}>⭐⭐⭐⭐ (4)</option>
  <option value={3}>⭐⭐⭐ (3)</option>
  <option value={2}>⭐⭐ (2)</option>
  <option value={1}>⭐ (1)</option>
</select>

  <button
  onClick={() => {
    if (!reviewName || !reviewText) return;

    setReviews([
      ...reviews,
      {
        name: reviewName,
        text: reviewText,
        rating: "⭐".repeat(reviewRating),
      },
    ]);

    setReviewName("");
    setReviewText("");
    setReviewRating(5);
  }}
  className="bg-red-500 text-white px-4 py-2 rounded"
>
  Submit Review
</button>
</div>
      <h2 className="text-2xl font-bold mt-10 mb-4">
        Similar Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.slice(0, 3).map((item) => (
  <Link
    key={item.id}
    to={`/property/${item.id}`}
    className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition block"
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
                            </Link>
            ))}
            </div>
            </div>
  );
}

export default PropertyPage;