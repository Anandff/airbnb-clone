import { useEffect, useState } from "react";

function BookingHistory() {
const [bookings, setBookings] = useState([]);

useEffect(() => {
const savedBookings =
JSON.parse(localStorage.getItem("bookings")) || [];

setBookings(savedBookings);

}, []);

return ( <div className="p-8"> <h1 className="text-3xl font-bold mb-6">
Booking History </h1>

  {bookings.length === 0 ? (
    <p>No bookings found.</p>
  ) : (
    <div className="space-y-4">
      {bookings.map((booking, index) => (
        <div
          key={index}
          className="border p-4 rounded-xl"
        >
          <h2 className="font-bold">
            {booking.property}
          </h2>

          <p>Guest: {booking.name}</p>
        </div>
      ))}
    </div>
  )}
</div>

);
}

export default BookingHistory;