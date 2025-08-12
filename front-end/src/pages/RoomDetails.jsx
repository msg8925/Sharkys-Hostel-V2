import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoom(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching room:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!room) return <p className="text-center mt-10">Room not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Home</Link>

      {/* Room Title */}
      <h1 className="text-3xl font-bold mb-4">{room.title}</h1>

      {/* Room Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {room.images && room.images.length > 0 ? (
          room.images.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt={room.title}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>

      {/* Room Info */}
      <p className="text-gray-700 mb-4">{room.description}</p>
      <p className="text-lg font-semibold">
        Price per night: <span className="text-green-600">{room.price_per_night} THB</span>
      </p>
    </div>
  );
}