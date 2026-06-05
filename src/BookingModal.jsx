import { useState } from "react";

function BookingModal({ isOpen, onClose, property }) {
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const nights =
  checkIn && checkOut
    ? Math.ceil(
        (new Date(checkOut) - new Date(checkIn)) /
          (1000 * 60 * 60 * 24)
      )
    : 0;
    const pricePerNight = Number(
  property.price.replace(/[₹,]/g, "")
);

const totalPrice =
  nights > 0 ? nights * pricePerNight : 0;

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
  `Booking Confirmed!

Guest: ${name}
Property: ${property.title}
Nights: ${nights}
Total: ₹${totalPrice}`
);

    setName("");
    onClose();
  };

  return (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white p-6 rounded-xl w-96"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold mb-4">
        Book {property.title}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          required
        />

        <input
        type="date"
        className="border p-2 w-full mb-4"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        required
        />

        <input
        type="date"
        className="border p-2 w-full mb-4"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        required
        />

        <input
          type="number"
          placeholder="Guests"
          min="1"
          className="border p-2 w-full mb-4"
          required
        />

        <div className="mb-4 p-3 bg-gray-100 rounded">
          <p>
            Nights: <strong>{nights}</strong>
            </p>
            
            <p>
              Total Price: <strong>₹{totalPrice}</strong>
              </p>
              </div>
              <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Confirm Booking
        </button>

        <button
          type="button"
          onClick={onClose}
          className="ml-3"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
);
}

export default BookingModal;