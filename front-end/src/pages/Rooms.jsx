import React, { useEffect, useState } from 'react';
import api from '../api';

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState([]);

    useEffect(() => {
        api.get("/rooms")
        .then((response) => {
        setRooms(response.data);
        setLoading(false);
        })
        .catch((error) => {
        console.error("Error fetching rooms:", error);
        setLoading(false);
        });
    }, []);



//   useEffect(() => {
//     fetch('http://your-backend-domain.com/api/rooms')
//       .then(res => res.json())
//       .then(data => setRooms(data))
//       .catch(err => console.error('Error fetching rooms:', err));
//   }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Rooms</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map(room => (
          <div
            key={room.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <p className="text-xl font-bold text-green-600">
                  ${room.price} / night
                </p>
              </div>
              <button
                onClick={scrollToBooking}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}