import React from "react";

export default function Home() {
  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501117716987-c8e99f74cec7')",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to SunnyStay Hostel
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your home away from home in the heart of the city.
          </p>
          <a
            href="/rooms"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            SunnyStay Hostel is a cozy and affordable place for travelers,
            backpackers, and digital nomads. Located just minutes away from the
            city’s main attractions, we offer comfortable beds, a friendly
            atmosphere, and unforgettable experiences.
          </p>
          <p className="text-gray-700">
            Whether you’re here for adventure, work, or relaxation, our team is
            here to make you feel right at home.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1590490359854-dfba19688d69"
          alt="Hostel interior"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((room) => (
              <div
                key={room}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?bedroom,${room}`}
                  alt="Room"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Cozy Dorm Room
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for solo travelers. Clean, comfortable, and budget-friendly.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-600 font-bold">฿350/night</span>
                    <a
                      href="/rooms"
                      className="text-yellow-500 hover:underline"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "☕", label: "Free Breakfast" },
            { icon: "📶", label: "Free Wi-Fi" },
            { icon: "🛵", label: "Scooter Rentals" },
            { icon: "🧺", label: "Laundry Service" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <p className="text-gray-700 mb-6">
            Located just 5 minutes from the main bus station and close to
            popular attractions, restaurants, and nightlife.
          </p>
          <img
            src="https://source.unsplash.com/800x400/?map"
            alt="Map location"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((review) => (
            <div
              key={review}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <p className="text-gray-600 italic mb-4">
                "Amazing place to stay! The staff were super friendly and the
                rooms were spotless."
              </p>
              <div className="font-semibold">— Alex, UK</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="bg-yellow-500 text-black py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to book your next adventure?
        </h2>
        <a
          href="/rooms"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800"
        >
          Book Now
        </a>
        <div className="mt-6">
          <p>📞 +66 123 456 789 | ✉️ hello@sunnystay.com</p>
        </div>
      </footer>
    </div>
  );
}
